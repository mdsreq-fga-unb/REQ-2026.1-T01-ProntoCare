const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./src/routes/auth');
const medicosRoutes = require('./src/routes/medicos');
const pacientesRoutes = require('./src/routes/pacientes');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.use('/api/auth', authRoutes);
app.use('/api/medicos', medicosRoutes);
app.use('/api/pacientes', pacientesRoutes);

app.use((req, res) => {
  res.status(404).json({ erro: 'Nao encontrada.' });
});

module.exports = app;