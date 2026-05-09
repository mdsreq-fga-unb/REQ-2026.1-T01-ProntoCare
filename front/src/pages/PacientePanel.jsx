import { useState, useEffect } from 'react';
import { api } from '../api';

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
      <div>
        <h3>Conta desativada</h3>
        <button onClick={onLogout}>Sair</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Paciente</h2>
      <button onClick={onLogout}>Sair</button>

      {dados && (
        <div>
          <p>Nome: {dados.nome}</p>
          <p>CPF: {dados.cpf}</p>
          <p>E-mail: {dados.email}</p>
          <p>Ativo: {dados.ativo ? 'Sim' : 'Nao'}</p>

          <button onClick={exportar}>Exportar dados</button>
          <button onClick={solicitarExclusao}>Solicitar exclusao</button>
        </div>
      )}
    </div>
  );
}