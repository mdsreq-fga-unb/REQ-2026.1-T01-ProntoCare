import { useState } from 'react';
import Register from './pages/Register';
import Login       from './pages/Login';
import EditPaciente from './pages/EditPaciente';
import AdminPanel  from './pages/AdminPanel';
import MedicoPanel from './pages/MedicoPanel';
import PacientePanel from './pages/PacientePanel';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  const [role, setRole] = useState(() => localStorage.getItem('role'));

  function handleLogin(r) { setRole(r); }

  function handleLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    setRole(null);
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* 1 - Rota do Login */}
        <Route
          path="/login"
          element={!role ? <Login onLogin={handleLogin} /> : <Navigate to={`/${role}`} />}
        />

        {/* 2 - Rota do Cadastro de Pacientes */}
        <Route 
          path="/register" 
          element={role === 'medico' ? <Register /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/edit-paciente/:id" 
          element={role === 'medico' ? <EditPaciente /> : <Navigate to="/login" />} 
        />

        {/* 3 - Rota dos Perfis */}
        <Route
          path="/admin"        
          element={role === 'admin' ? <AdminPanel onLogout={handleLogout} /> : <Navigate to="/login" />}
        />  
        <Route 
          path="/medico" 
          element={role === 'medico' ? <MedicoPanel onLogout={handleLogout} /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/paciente" 
          element={role === 'paciente' ? <PacientePanel onLogout={handleLogout} /> : <Navigate to="/login" />} 
        />

        {/* 3 - Rota Padrão */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;