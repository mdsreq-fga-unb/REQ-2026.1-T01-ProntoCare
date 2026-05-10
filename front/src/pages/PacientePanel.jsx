import { useState, useEffect } from 'react';
import { api } from '../api';
import './Panel.css';

export default function PacientePanel({ onLogout }) {
  const [dados, setDados] = useState(null);
  const [excluido, setExcluido] = useState(false);

  useEffect(() => { carregar(); }, []);

  async function carregar() {
    try {
      const data = await api.get('/pacientes/me');
      setDados(data);
    } catch (e) { alert(e.message); }
  }

  async function exportar() {
    try {
      const token = localStorage.getItem('token');
      const res = await fetch('/api/pacientes/me/exportar', {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error('Erro ao exportar');
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'meus_dados.json';
      a.click();
      URL.revokeObjectURL(url);
    } catch (e) { alert(e.message); }
  }

  async function solicitarExclusao() {
    try {
      await api.delete('/pacientes/me');
      setExcluido(true);
    } catch (e) { alert(e.message); }
  }

  if (excluido) {
    return (
      <div className="panel-container">
        <div className="panel-card" style={{ textAlign: 'center' }}>
          <h2>Conta desativada</h2>
          <p>Sua conta foi desativada com sucesso e você não tem mais acesso.</p>
          <button className="btn-secundario" onClick={onLogout} style={{ marginTop: '20px' }}>Sair</button>
        </div>
      </div>
    );
  }

  return (
    <div className="panel-container">
      <div className="panel-card">
        <header className="panel-header">
          <h2>Meu Prontuário</h2>
          <div className="panel-actions">
            <button className="btn-secundario" onClick={exportar}>Exportar Dados</button>
            <button className="btn-danger" onClick={onLogout}>Sair</button>
          </div>
        </header>

        {dados && (
          <div className="panel-form">
            <h3>Dados Pessoais</h3>
            <div className="dados-grid">
              <div className="dado-item">
                <div className="dado-label">Nome Completo</div>
                <div className="dado-valor">{dados.nome}</div>
              </div>
              <div className="dado-item">
                <div className="dado-label">CPF</div>
                <div className="dado-valor">{dados.cpf}</div>
              </div>
              <div className="dado-item">
                <div className="dado-label">Data de Nascimento</div>
                <div className="dado-valor">{dados.data_nascimento ? dados.data_nascimento.split('T')[0].split('-').reverse().join('/') : ''}</div>
              </div>
              <div className="dado-item">
                <div className="dado-label">Sexo</div>
                <div className="dado-valor">{dados.sexo}</div>
              </div>
              <div className="dado-item">
                <div className="dado-label">Nome da Mãe</div>
                <div className="dado-valor">{dados.nome_mae}</div>
              </div>
              <div className="dado-item">
                <div className="dado-label">E-mail</div>
                <div className="dado-valor">{dados.email}</div>
              </div>
              <div className="dado-item">
                <div className="dado-label">Telefone</div>
                <div className="dado-valor">{dados.telefone}</div>
              </div>
              <div className="dado-item">
                <div className="dado-label">CEP</div>
                <div className="dado-valor">{dados.cep}</div>
              </div>
              <div className="dado-item">
                <div className="dado-label">Número</div>
                <div className="dado-valor">{dados.numero}</div>
              </div>
              <div className="dado-item">
                <div className="dado-label">Status</div>
                <div className="dado-valor">{dados.ativo ? 'Ativo' : 'Inativo'}</div>
              </div>
            </div>

            <div style={{ marginTop: '2rem', textAlign: 'right' }}>
              <button className="btn-danger" onClick={solicitarExclusao}>Solicitar Exclusão da Conta</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}