import { useState, useEffect } from 'react';
import { api } from '../api';

export default function AdminPanel({ onLogout }) {
  const [medicos, setMedicos] = useState([]);
  const [form, setForm] = useState({ nome:'', crm:'', especialidade:'', email:'', senha:'' });

  useEffect(() => { carregar(); }, []);

  async function carregar() {
    try {
      const data = await api.get('/medicos');
      setMedicos(data);
    } catch (e) { alert(e.message); }
  }

  async function salvar(e) {
    e.preventDefault();
    try {
      await api.post('/medicos', form);
      setForm({ nome:'', crm:'', especialidade:'', email:'', senha:'' });
      carregar();
    } catch (e) { alert(e.message); }
  }

  async function desativar(id) {
    try {
      await api.delete(`/medicos/${id}`);
      carregar();
    } catch (e) { alert(e.message); }
  }

  async function reativar(id) {
    try {
      await api.put(`/medicos/${id}`, { ativo: true });
      carregar();
    } catch (e) { alert(e.message); }
  }

  return (
    <div>
      <h2>Admin</h2>
      <button onClick={onLogout}>Sair</button>
      
      <form onSubmit={salvar}>
        <h3>Novo Medico</h3>
        <div><input placeholder="Nome" value={form.nome} onChange={e => setForm({...form, nome: e.target.value})} /></div>
        <div><input placeholder="CRM" value={form.crm} onChange={e => setForm({...form, crm: e.target.value})} /></div>
        <div><input placeholder="E-mail" value={form.email} onChange={e => setForm({...form, email: e.target.value})} /></div>
        <div><input placeholder="Senha" type="password" value={form.senha} onChange={e => setForm({...form, senha: e.target.value})} /></div>
        <button type="submit">Salvar</button>
      </form>

      <ul>
        {medicos.map(m => (
          <li key={m.id}>
            {m.nome} ({m.crm}) - {m.ativo ? 'Ativo' : 'Inativo'}
            {m.ativo 
              ? <button onClick={() => desativar(m.id)}>Desativar</button>
              : <button onClick={() => reativar(m.id)}>Reativar</button>
            }
          </li>
        ))}
      </ul>
    </div>
  );
}