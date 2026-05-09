import { useState } from 'react';
import { api } from '../api';

export default function Login({ onLogin }) {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setErro('');
    try {
      const data = await api.post('/auth/login', { login, senha });
      localStorage.setItem('token', data.token);
      localStorage.setItem('role', data.role);
      onLogin(data.role);
    } catch (err) {
      setErro(err.message);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div>
          <input
            placeholder="Login ou E-mail"
            value={login}
            onChange={e => setLogin(e.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Senha"
            type="password"
            value={senha}
            onChange={e => setSenha(e.target.value)}
          />
        </div>
        {erro && <p>{erro}</p>}
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}