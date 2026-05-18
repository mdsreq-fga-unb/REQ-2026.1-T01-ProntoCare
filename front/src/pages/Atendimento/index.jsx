import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

export default function Atendimento() {
  const navigate = useNavigate();

  // Controla a visibilidade da barra lateral para expandir a área de digitação (Modo Foco)
  const [sidebarAberto, setSidebarAberto] = useState(true);
  const [loading, setLoading] = useState(false);

  // Mock de dados de visualização. 
  // TODO: Substituir por chamadas reais à API ao montar o componente (useEffect)
  const pacienteMock = { nome: 'MARIA DA SILVA', idade: 34, sexo: 'Feminino', imcAnterior: '23.8' };
  const historicoMock = [
    { id: 1, data: '15/01/2026', resumo: 'Consulta de rotina. Hipótese de Amigdalite. Prescrita Amoxicilina.' },
    { id: 2, data: '14/01/2026', resumo: 'Retorno para avaliação de tosse produtiva.' },
    { id: 3, data: '10/01/2026', resumo: 'Paciente queixa-se de dores leves na garganta.' }
  ];

  // Armazena os dados do atendimento clínico atual baseados na metodologia SOAP
  const [soap, setSoap] = useState({
    peso: '', altura: '', subjetivo: '', objetivo: '', avaliacao: '', plano: ''
  });

  async function handleFinalizar(e) {
    e.preventDefault();
    
    // Impede o envio de prontuários inteiramente em branco para a base de dados
    if (!soap.subjetivo && !soap.objetivo && !soap.avaliacao && !soap.plano) {
      alert("Preencha pelo menos um campo clínico para salvar o prontuário.");
      return;
    }

    setLoading(true);
    
    // TODO: Implementar o envio do payload 'soap' para a API
    setTimeout(() => { 
      alert('Prontuário assinado e salvo com sucesso!');
      navigate('/medico'); 
    }, 1000);
  }

  return (
    <div className="atendimento-layout">
      
      {/* Barra Lateral: Exibe o histórico de consultas passadas para contexto do médico */}
      <aside className={`historico-sidebar ${sidebarAberto ? 'aberta' : 'fechada'}`}>
        <div className="sidebar-header">
          <button onClick={() => navigate('/medico')} className="btn-voltar">
            ← Sair do Atendimento
          </button>
          <h3>Histórico Clínico</h3>
        </div>
        
        <div className="historico-lista">
          {historicoMock.map(consulta => (
            <div key={consulta.id} className="historico-card">
              <div className="timeline-dot"></div>
              <span className="historico-data">{consulta.data}</span>
              <p className="historico-resumo">{consulta.resumo}</p>
            </div>
          ))}
        </div>
      </aside>

      <main className="atendimento-main">
        
        {/* Cabeçalho Fixo: Mantém os dados demográficos vitais visíveis durante a rolagem */}
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
              <h2>{pacienteMock.nome}</h2>
              <span>{pacienteMock.idade} anos • Sexo {pacienteMock.sexo} • IMC Ant: {pacienteMock.imcAnterior}</span>
            </div>
          </div>
          <div className="status-badge">Em Atendimento</div>
        </header>

        <form onSubmit={handleFinalizar} className="soap-form">
          <div className="form-header">
            <h3>REGISTRO DE EVOLUÇÃO (SOAP)</h3>
          </div>

          {/* O layout grid 2x2 distribui os 4 blocos principais do SOAP uniformemente */}
          <div className="soap-grid">
            
            <div className="soap-group">
              <label>S - Subjetivo <span>(Queixas e histórico relatado)</span></label>
              <textarea 
                value={soap.subjetivo} onChange={e => setSoap({...soap, subjetivo: e.target.value})}
                placeholder="Ex: Paciente queixa-se de tosse produtiva e febre há 3 dias..."
              />
            </div>

            <div className="soap-group">
              <label>O - Objetivo <span>(Sinais Vitais e Exame Físico)</span></label>
              
              {/* Entradas estruturadas para facilitar cálculos de IMC ou gráficos no futuro */}
              <div className="sinais-vitais-row">
                <div className="input-group-pequeno">
                  <input type="number" step="0.1" value={soap.peso} onChange={e => setSoap({...soap, peso: e.target.value})} placeholder="Peso (kg)" />
                </div>
                <div className="input-group-pequeno">
                  <input type="number" step="0.01" value={soap.altura} onChange={e => setSoap({...soap, altura: e.target.value})} placeholder="Altura (m)" />
                </div>
              </div>

              <textarea 
                value={soap.objetivo} onChange={e => setSoap({...soap, objetivo: e.target.value})}
                placeholder="Ex: FEBRE: 38.5°C. PULSO: 92 bpm. Garganta hiperemiada..."
              />
            </div>

            <div className="soap-group">
              <label>A - Avaliação <span>(Hipótese Diagnóstica)</span></label>
              <textarea 
                value={soap.avaliacao} onChange={e => setSoap({...soap, avaliacao: e.target.value})}
                placeholder="Ex: Hipótese: Amigdalite Bacteriana Aguda..."
              />
            </div>

            <div className="soap-group">
              <label>P - Plano <span>(Conduta, Exames e Prescrições)</span></label>
              <textarea 
                value={soap.plano} onChange={e => setSoap({...soap, plano: e.target.value})}
                placeholder="Ex: Prescrito Amoxicilina 500mg. Repouso..."
              />
            </div>

          </div>

          <div className="form-actions-bottom">
            <button type="submit" disabled={loading} className="btn-finalizar">
              {loading ? 'SALVANDO...' : 'FINALIZAR ATENDIMENTO'}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}