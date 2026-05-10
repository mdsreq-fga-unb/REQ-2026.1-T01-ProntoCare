import { useState, useEffect } from 'react';
import { api } from '../api';
import './Panel.css';

export default function AdminPanel({ onLogout }) {
  const [medicos, setMedicos] = useState([]);
  const [form, setForm] = useState({ nome:'', crm:'', especialidade:'', email:'', senha:'' });
  const [editando, setEditando] = useState(null);
  const [editForm, setEditForm] = useState({ nome:'', crm:'', email:'', senha:'' });

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
      alert('Médico cadastrado com sucesso!');
    } catch (e) { alert(e.message); }
  }

  function iniciarEdicao(m) {
    setEditando(m);
    setEditForm({ nome: m.nome, crm: m.crm, email: m.email, senha: '' });
  }

  async function salvarEdicao(e) {
    e.preventDefault();
    try {
      const payload = { ...editForm };
      if (!payload.senha) {
        delete payload.senha;
      }
      await api.put(`/medicos/${editando.id}`, payload);
      setEditando(null);
      carregar();
      alert('Médico atualizado com sucesso!');
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
    <div className="panel-container">
      <div className="panel-card">
        <header className="panel-header">
          <h2>Painel do Administrador</h2>
          <div className="panel-actions">
            <button className="btn-secundario" onClick={onLogout}>Sair</button>
          </div>
        </header>

        <div className="panel-form">
          <h3>Novo Médico</h3>
          <form onSubmit={salvar}>
            <div className="row-2">
              <div className="input-group">
                <label>Nome Completo</label>
                <input placeholder="Ex: Dr. João Silva" value={form.nome} onChange={e => setForm({...form, nome: e.target.value})} required />
              </div>
              <div className="input-group">
                <label>CRM</label>
                <input placeholder="Ex: 123456-SP" value={form.crm} onChange={e => setForm({...form, crm: e.target.value})} required />
              </div>
            </div>
            <div className="row-2">
              <div className="input-group">
                <label>E-mail</label>
                <input placeholder="Ex: medico@prontocare.com" type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required />
              </div>
              <div className="input-group">
                <label>Senha Provisória</label>
                <input placeholder="Senha" type="password" value={form.senha} onChange={e => setForm({...form, senha: e.target.value})} required />
              </div>
            </div>
            <button type="submit" className="btn-primario" style={{ marginTop: '1rem', width: 'auto' }}>Cadastrar Médico</button>
          </form>
        </div>

        {editando && (
          <div className="panel-form">
            <h3>Editar Médico: {editando.nome}</h3>
            <form onSubmit={salvarEdicao}>
              <div className="row-2">
                <div className="input-group">
                  <label>Nome Completo</label>
                  <input placeholder="Ex: Dr. João Silva" value={editForm.nome} onChange={e => setEditForm({...editForm, nome: e.target.value})} required />
                </div>
                <div className="input-group">
                  <label>CRM</label>
                  <input placeholder="Ex: 123456-SP" value={editForm.crm} onChange={e => setEditForm({...editForm, crm: e.target.value})} required />
                </div>
              </div>
              <div className="row-2">
                <div className="input-group">
                  <label>E-mail</label>
                  <input placeholder="Ex: medico@prontocare.com" type="email" value={editForm.email} onChange={e => setEditForm({...editForm, email: e.target.value})} required />
                </div>
                <div className="input-group">
                  <label>Nova Senha (Opcional)</label>
                  <input placeholder="Em branco para não alterar" type="password" value={editForm.senha} onChange={e => setEditForm({...editForm, senha: e.target.value})} autoComplete="new-password" />
                </div>
              </div>
              <div className="panel-actions" style={{ marginTop: '1rem' }}>
                <button type="submit" className="btn-primario" style={{ width: 'auto' }}>Salvar Alterações</button>
                <button type="button" className="btn-secundario" onClick={() => setEditando(null)} style={{ width: 'auto' }}>Cancelar</button>
              </div>
            </form>
          </div>
        )}

        <div className="panel-form">
          <h3>Médicos Cadastrados</h3>
          <ul className="panel-list">
            {medicos.map(m => (
              <li key={m.id}>
                <div className="list-info">
                  <span className="list-title">{m.nome} (CRM: {m.crm})</span>
                  <span className="list-subtitle">{m.email} • Status: {m.ativo ? 'Ativo' : 'Inativo'}</span>
                </div>
                <div className="list-actions">
                  <button className="btn-primario" onClick={() => iniciarEdicao(m)}>Editar</button>
                  {m.ativo 
                    ? <button className="btn-danger" onClick={() => desativar(m.id)}>Desativar</button>
                    : <button className="btn-success" onClick={() => reativar(m.id)}>Reativar</button>
                  }
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}