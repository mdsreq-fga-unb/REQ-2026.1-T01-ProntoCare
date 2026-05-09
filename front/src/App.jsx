import { useState } from 'react';
import Login       from './pages/Login';
import AdminPanel  from './pages/AdminPanel';
import MedicoPanel from './pages/MedicoPanel';
import PacientePanel from './pages/PacientePanel';

function App() {
  const [role, setRole] = useState(() => localStorage.getItem('role'));

  function handleLogin(r) { setRole(r); }

  function handleLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    setRole(null);
  }

  if (!role) return <Login onLogin={handleLogin} />;
  if (role === 'admin')    return <AdminPanel   onLogout={handleLogout} />;
  if (role === 'medico')   return <MedicoPanel  onLogout={handleLogout} />;
  if (role === 'paciente') return <PacientePanel onLogout={handleLogout} />;

  return <p>Role desconhecida. <button onClick={handleLogout}>Sair</button></p>;
}

export default App;