import { useState, useEffect } from 'react';
import { api } from '../api';

export default function MedicoPanel({ onLogout }) {
  const [pacientes, setPacientes] = useState([]);
  const [form, setForm] = useState({ nome:'', cpf:'', email:'', senha:'' });

  useEffect(() => { carregar(); }, []);

  async function carregar() {
    try {
      const data = await api.get('/pacientes');
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

  return (
    <div>
      <h2>Medico</h2>
      <button onClick={onLogout}>Sair</button>
      
      <form onSubmit={salvar}>
        <h3>Novo Paciente</h3>
        <div><input placeholder="Nome" value={form.nome} onChange={e => setForm({...form, nome: e.target.value})} /></div>
        <div><input placeholder="CPF" value={form.cpf} onChange={e => setForm({...form, cpf: e.target.value})} /></div>
        <div><input placeholder="E-mail" value={form.email} onChange={e => setForm({...form, email: e.target.value})} /></div>
        <div><input placeholder="Senha" type="password" value={form.senha} onChange={e => setForm({...form, senha: e.target.value})} /></div>
        <button type="submit">Salvar</button>
      </form>

      <ul>
        {pacientes.map(p => (
          <li key={p.id}>
            {p.nome} ({p.cpf}) - {p.ativo ? 'Ativo' : 'Inativo'}
            {p.ativo 
              ? <button onClick={() => desativar(p.id)}>Desativar</button>
              : <button onClick={() => reativar(p.id)}>Reativar</button>
            }
          </li>
        ))}
      </ul>
    </div>
  );
}