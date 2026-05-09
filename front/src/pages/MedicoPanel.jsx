import { useState, useEffect } from 'react';
import { api } from '../api';

export default function MedicoPanel({ onLogout }) {
  const [pacientes, setPacientes] = useState([]);
  const [form, setForm] = useState({ nome:'', cpf:'', email:'', senha:'' });
  const [busca, setBusca] = useState({ nome: '', cpf: '' });

  useEffect(() => { carregar(); }, [busca]);

  async function carregar() {
    try {
      const params = new URLSearchParams();
      if (busca.nome) params.append('nome', busca.nome);
      if (busca.cpf) params.append('cpf', busca.cpf);
      
      const query = params.toString() ? `?${params.toString()}` : '';
      const data = await api.get(`/pacientes${query}`);
      setPacientes(data);
    } catch (e) { alert(e.message); }
  }

  async function salvar(e) {
    e.preventDefault();
    try {
      await api.post('/pacientes', form);
      setForm({ nome:'', cpf:'', email:'', senha:'' });
      carregar();
    } catch (e) { alert(e.message); }
  }

  async function desativar(id) {
    try {
      await api.delete(`/pacientes/${id}`);
      carregar();
    } catch (e) { alert(e.message); }
  }

  async function reativar(id) {
    try {
      await api.put(`/pacientes/${id}`, { ativo: true });
      carregar();
    } catch (e) { alert(e.message); }
  }

  async function exportarDados() {
    try {
      const data = await api.get('/pacientes/exportar');
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `pacientes_exportacao.json`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (e) { alert(e.message); }
  }

  function exportarPaciente(paciente) {
    const blob = new Blob([JSON.stringify(paciente, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `paciente_${paciente.id}_${paciente.nome}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div>
      <h2>Medico</h2>
      <button onClick={onLogout}>Sair</button>
      <button onClick={exportarDados} style={{ marginLeft: '10px' }}>Exportar Todos Meus Pacientes</button>
      
      <form onSubmit={salvar}>
        <h3>Novo Paciente</h3>
        <div><input placeholder="Nome" value={form.nome} onChange={e => setForm({...form, nome: e.target.value})} /></div>
        <div><input placeholder="CPF" value={form.cpf} onChange={e => setForm({...form, cpf: e.target.value})} /></div>
        <div><input placeholder="E-mail" value={form.email} onChange={e => setForm({...form, email: e.target.value})} /></div>
        <div><input placeholder="Senha" type="password" value={form.senha} onChange={e => setForm({...form, senha: e.target.value})} /></div>
        <button type="submit">Salvar</button>
      </form>

      <hr style={{ margin: '20px 0' }} />

      <div>
        <h3>Buscar Pacientes</h3>
        <input 
          placeholder="Buscar por nome..." 
          value={busca.nome} 
          onChange={e => setBusca({ ...busca, nome: e.target.value })} 
          style={{ marginRight: '10px' }}
        />
        <input 
          placeholder="Buscar por CPF..." 
          value={busca.cpf} 
          onChange={e => setBusca({ ...busca, cpf: e.target.value })} 
        />
      </div>

      <ul>
        {pacientes.map(p => (
          <li key={p.id} style={{ marginBottom: '8px' }}>
            {p.nome} ({p.cpf}) - {p.ativo ? 'Ativo' : 'Inativo'}{' '}
            {p.ativo 
              ? <button onClick={() => desativar(p.id)}>Desativar</button>
              : <button onClick={() => reativar(p.id)}>Reativar</button>
            }
            <button onClick={() => exportarPaciente(p)} style={{ marginLeft: '10px' }}>Exportar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}