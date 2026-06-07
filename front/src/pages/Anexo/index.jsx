import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { api } from '../../api';
import '../Anamnese/styles.css'; // Reuse existing theme and layout styles

export default function Anexo() {
  const navigate = useNavigate();
  const { pacienteId } = useParams();

  const [sidebarAberto, setSidebarAberto] = useState(true);
  const [loading, setLoading] = useState(false);
  const [carregando, setCarregando] = useState(true);

  const [paciente, setPaciente] = useState(null);
  const [atendimentos, setAtendimentos] = useState([]);
  const [historico, setHistorico] = useState([]);
  const [filtroAtendimentoId, setFiltroAtendimentoId] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    async function carregarDados() {
      try {
        const [pac, hist, anxs] = await Promise.all([
          api.get(`/pacientes/${pacienteId}`),
          api.get(`/atendimentos/paciente/${pacienteId}`),
          api.get(`/anexos/paciente/${pacienteId}`)
        ]);
        setPaciente(pac);
        setAtendimentos(hist || []);
        setHistorico(anxs || []);
      } catch (err) {
        console.error(err);
        alert('Erro ao carregar dados do paciente ou histórico de anexos.');
        navigate('/medico');
      } finally {
        setCarregando(false);
      }
    }
    carregarDados();
  }, [pacienteId, navigate]);

  function calcularIdade(dataNasc) {
    if (!dataNasc) return '—';
    const nascimento = new Date(dataNasc);
    const hoje = new Date();
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const m = hoje.getMonth() - nascimento.getMonth();
    if (m < 0 || (m === 0 && hoje.getDate() < nascimento.getDate())) idade--;
    return idade;
  }

  function mapSexo(s) {
    if (s === 'M') return 'Masculino';
    if (s === 'F') return 'Feminino';
    if (s === 'O') return 'Outro';
    return '—';
  }

  function formatarDataHora(dateStr) {
    if (!dateStr) return '—';
    const d = new Date(dateStr);
    return d.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' })
      + ' às '
      + d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  }

  function handleFileChange(e) {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      alert('Tamanho limite excedido. O arquivo deve ter no máximo 5MB.');
      e.target.value = '';
      setSelectedFile(null);
      return;
    }
    setSelectedFile(file);
  }

  async function handleFinalizar(e) {
    e.preventDefault();

    if (!selectedFile) {
      alert("Por favor, selecione um arquivo para anexar.");
      return;
    }

    setLoading(true);

    const reader = new FileReader();
    reader.onload = async (event) => {
      try {
        const base64Data = event.target.result.split(',')[1];
        
        await api.post('/anexos', {
          paciente_id: parseInt(pacienteId),
          atendimento_id: filtroAtendimentoId ? parseInt(filtroAtendimentoId) : null,
          nome_arquivo: selectedFile.name,
          mime_type: selectedFile.type || 'application/octet-stream',
          tamanho_bytes: selectedFile.size,
          dados_base64: base64Data
        });

        alert('Arquivo anexado com sucesso!');
        navigate(`/paciente-detalhe/${pacienteId}`);
      } catch (err) {
        alert(err.message || 'Erro ao anexar arquivo.');
      } finally {
        setLoading(false);
      }
    };

    reader.onerror = () => {
      alert('Erro ao ler o arquivo.');
      setLoading(false);
    };

    reader.readAsDataURL(selectedFile);
  }

  if (carregando) {
    return <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>Carregando...</div>;
  }

  if (!paciente) return null;

  return (
    <div className="atendimento-layout">
      {/* Barra Lateral: Histórico de Anexos */}
      <aside className={`historico-sidebar ${sidebarAberto ? 'aberta' : 'fechada'}`}>
        <div className="sidebar-header">
          <button onClick={() => navigate(`/paciente-detalhe/${pacienteId}`)} className="btn-voltar">
            ← Voltar ao Perfil
          </button>
          <h3>Anexos Anteriores</h3>
        </div>

        <div className="historico-lista">
          {historico.length === 0 ? (
            <p style={{ color: '#7f8c8d', fontSize: 14 }}>Nenhum documento anexado ainda.</p>
          ) : (
            historico.map(anx => {
              const isPDF = anx.mime_type.includes('pdf');
              return (
                <div key={anx.id} className="historico-card">
                  <div className="timeline-dot"></div>
                  <span className="historico-data">{formatarDataHora(anx.criado_em)}</span>
                  <p className="historico-resumo" style={{ marginTop: '4px', fontSize: '13px' }}>
                    {isPDF ? '🜍 PDF: ' : '☽ Imagem: '} {anx.nome_arquivo}
                  </p>
                </div>
              );
            })
          )}
        </div>
      </aside>

      <main className="atendimento-main">
        {/* Banner do Paciente */}
        <header className="patient-banner">
          <div className="patient-info-container">
            <button
              type="button"
              className="btn-toggle-sidebar"
              onClick={() => setSidebarAberto(!sidebarAberto)}
              title="Alternar Histórico"
            >
              ☰
            </button>
            <div className="patient-info">
              <h2>{paciente.nome}</h2>
              <span>
                {calcularIdade(paciente.data_nascimento)} anos • Sexo {mapSexo(paciente.sexo)}
              </span>
            </div>
          </div>
          <div className="status-badge" style={{ background: 'var(--primary)', color: 'white' }}>Novo Anexo</div>
        </header>

        <form onSubmit={handleFinalizar} className="soap-form">
          <div className="form-header">
            <h3>Adicionar Anexo ao Histórico Clínico</h3>
          </div>

          <div className="soap-grid">
            <div className="soap-group">
              <label>Vincular a uma Consulta (Opcional)</label>
              <select 
                value={filtroAtendimentoId}
                onChange={e => setFiltroAtendimentoId(e.target.value)}
                style={{
                  padding: '10px 12px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-color)',
                  fontSize: '14px',
                  background: 'white',
                  width: '100%',
                  marginTop: '4px'
                }}
              >
                <option value="">Documento Geral (Sem vínculo com consulta específica)</option>
                {atendimentos.map(at => (
                  <option key={at.id} value={at.id}>
                    Consulta em {formatarDataHora(at.criado_em)}
                  </option>
                ))}
              </select>
            </div>

            <div className="soap-group">
              <label>Escolher Arquivo (Qualquer tipo - Limite: 5MB) *</label>
              <div style={{ marginTop: '8px' }}>
                <label htmlFor="file-upload" className="btn-primario" style={{
                  display: 'inline-block',
                  padding: '12px 20px',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  borderRadius: 'var(--radius-md)',
                  textAlign: 'center',
                  fontSize: '14.5px',
                  background: 'var(--primary)',
                  color: 'white',
                  fontWeight: '600',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'var(--transition)'
                }}>
                  {selectedFile ? `Arquivo: ${selectedFile.name}` : 'Selecionar Arquivo do Computador'}
                </label>
                <input 
                  id="file-upload"
                  type="file" 
                  onChange={handleFileChange} 
                  disabled={loading} 
                  style={{ display: 'none' }} 
                />
              </div>
            </div>
          </div>

          <div className="form-actions-bottom" style={{ marginTop: '30px' }}>
            <button type="button" className="btn-cancelar" onClick={() => navigate(`/paciente-detalhe/${pacienteId}`)}>
              Cancelar
            </button>
            <button type="submit" disabled={loading || !selectedFile} className="btn-finalizar">
              {loading ? 'Salvando...' : 'Salvar e Anexar Arquivo'}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
