import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../api'; 
import './styles.css';

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nome: '',
    dataNascimento: '',
    sexo: '',
    cpf: '',
    nomeMae: '',
    email: '',
    telefone: '',
    cep: '',
    numero: '',
    senha: ''
    });

    const [loading, setLoading] = useState(false);

    // Salva os dados do formulário
    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);

        try {
            await api.post('/pacientes', form);
            alert('Paciente cadastrado com sucesso!');
            navigate('/medico');
        } catch (err) {
            alert(err.message || 'Erro ao cadastrar paciente. Verifique os dados.');
        } finally {
            setLoading(false);
        }
    }
        return (
            <div className="register-container">
            <div className="register-card">
                <header className="register-header">
                <h2>ProntoCare</h2>
                <p>Acesse seu prontuário eletrônico</p>
                </header>

                <div className="form-header">
                <div>
                    <h3>Cadastro de Novo Paciente</h3>
                    <p>Preencha os dados do paciente para conceder acesso</p>
                </div>
                <span className="badge">Aguardando Aprovação</span>
                </div>

                <form onSubmit={handleSubmit} className="register-form">
          
                    {/* SEÇÃO 1: Identificação */}
                    <fieldset>
                        <legend>Identificação</legend>
                        
                        <div className="row-2">
                        <div className="input-group">
                            <label>Nome Completo</label>
                            <input type="text" placeholder="ex: João da Silva Sauro" value={form.nome} onChange={e => setForm({ ...form, nome: e.target.value })} required />
                        </div>
                        <div className="input-group">
                            <label>Nome da Mãe</label>
                            <input type="text" placeholder="ex: Maria da Silva Sauro" value={form.nomeMae} onChange={e => setForm({ ...form, nomeMae: e.target.value })} required />
                        </div>
                        </div>
                        
                        <div className="row-3">
                        <div className="input-group">
                            <label>Data de Nascimento</label>
                            <input type="date" value={form.dataNascimento} onChange={e => setForm({ ...form, dataNascimento: e.target.value })} required />
                        </div>
                        <div className="input-group">
                            <label>Sexo/Gênero</label>
                            <select value={form.sexo} onChange={e => setForm({ ...form, sexo: e.target.value })} required>
                            <option value="">Selecione...</option>
                            <option value="M">Masculino</option>
                            <option value="F">Feminino</option>
                            <option value="O">Outro</option>
                            </select>
                        </div>
                        <div className="input-group">
                            <label>CPF</label>
                            <input type="text" placeholder="ex: 000.000.000-00" value={form.cpf} onChange={e => setForm({ ...form, cpf: e.target.value })} required />
                        </div>
                        </div>
                    </fieldset>

                    {/* SEÇÃO 2: Contato, Endereço e Acesso */}
                    <fieldset>
                        <legend>Contato, Endereço e Acesso</legend>
                        
                        <div className="row-2">
                        <div className="input-group">
                            <label>E-mail Principal</label>
                            <input type="email" placeholder="ex: paciente@email.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
                        </div>
                        <div className="input-group">
                            <label>Senha Provisória</label>
                            <input type="password" placeholder="ex: ProntoCare123" value={form.senha} onChange={e => setForm({ ...form, senha: e.target.value })} required />
                        </div>
                        
                        </div>
                        
                        <div className="row-3">
                        <div className="input-group">
                            <label>CEP</label>
                            <input type="text" placeholder="ex: 00000-000" value={form.cep} onChange={e => setForm({ ...form, cep: e.target.value })} required />
                        </div>
                        <div className="input-group">
                            <label>Número/Complemento</label>
                            <input type="text" placeholder="ex: Apt 123" value={form.numero} onChange={e => setForm({ ...form, numero: e.target.value })} required />
                        </div>
                        <div className="input-group">
                            <label>Telefone / WhatsApp</label>
                            <input type="tel" placeholder="ex: (99) 99999-9999" value={form.telefone} onChange={e => setForm({ ...form, telefone: e.target.value })} required />
                        </div>
                        </div>
                    </fieldset>

                    {/* BOTÕES DE AÇÃO */}
                    <div className="form-actions">
                        <button type="submit" disabled={loading} className="btn-primario">
                        {loading ? 'Cadastrando...' : 'Cadastrar Paciente'}
                        </button>
                        <button type="button" className="btn-link" onClick={() => navigate('/medico')}>
                        Voltar para o Painel do Médico
                        </button>
                    </div>
                    </form>
            </div>
            </div>
        );
    }
