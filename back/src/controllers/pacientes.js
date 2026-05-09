const pool = require('../db');
const bcrypt = require('bcryptjs');

const SALT_ROUNDS = 10;

async function listar(req, res) {
  try {
    let query, params;
    if (req.user.role === 'admin') {
      query = `SELECT id, nome, cpf, data_nascimento, email, telefone, medico_id, ativo, criado_em, atualizado_em FROM pacientes ORDER BY nome`;
      params = [];
    } else {
      query = `SELECT id, nome, cpf, data_nascimento, email, telefone, medico_id, ativo, criado_em, atualizado_em FROM pacientes WHERE medico_id = $1 ORDER BY nome`;
      params = [req.user.id];
    }
    const { rows } = await pool.query(query, params);
    return res.json(rows);
  } catch (err) {
    return res.status(500).json({ erro: 'Erro interno.' });
  }
}

async function buscarPorId(req, res) {
  const { id } = req.params;
  try {
    const { rows } = await pool.query(`SELECT id, nome, cpf, data_nascimento, email, telefone, medico_id, ativo, criado_em, atualizado_em FROM pacientes WHERE id = $1`, [id]);
    if (rows.length === 0) return res.status(404).json({ erro: 'Nao encontrado.' });
    const paciente = rows[0];
    if (req.user.role === 'medico' && paciente.medico_id !== req.user.id) return res.status(403).json({ erro: 'Acesso negado.' });
    return res.json(paciente);
  } catch (err) {
    return res.status(500).json({ erro: 'Erro interno.' });
  }
}

async function criar(req, res) {
  const { nome, cpf, data_nascimento, email, telefone, senha } = req.body;
  if (!nome || !cpf || !email || !senha) return res.status(400).json({ erro: 'Campos obrigatorios.' });

  try {
    const senha_hash = await bcrypt.hash(senha, SALT_ROUNDS);
    const medicoId = req.user.role === 'medico' ? req.user.id : null;
    const { rows } = await pool.query(
      `INSERT INTO pacientes (nome, cpf, data_nascimento, email, telefone, senha_hash, medico_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id, nome, cpf, data_nascimento, email, telefone, medico_id, ativo, criado_em`,
      [nome, cpf, data_nascimento || null, email, telefone || null, senha_hash, medicoId]
    );
    return res.status(201).json(rows[0]);
  } catch (err) {
    if (err.code === '23505') return res.status(409).json({ erro: 'Ja cadastrado.' });
    return res.status(500).json({ erro: 'Erro interno.' });
  }
}

async function atualizar(req, res) {
  const { id } = req.params;
  const { nome, cpf, data_nascimento, email, telefone, senha, ativo } = req.body;

  try {
    const existe = await pool.query('SELECT id, medico_id FROM pacientes WHERE id = $1', [id]);
    if (existe.rows.length === 0) return res.status(404).json({ erro: 'Nao encontrado.' });
    const paciente = existe.rows[0];
    if (req.user.role === 'medico' && paciente.medico_id !== req.user.id) return res.status(403).json({ erro: 'Acesso negado.' });

    const campos = [];
    const valores = [];
    let idx = 1;

    if (nome !== undefined) { campos.push(`nome = $${idx++}`); valores.push(nome); }
    if (cpf !== undefined) { campos.push(`cpf = $${idx++}`); valores.push(cpf); }
    if (data_nascimento !== undefined) { campos.push(`data_nascimento = $${idx++}`); valores.push(data_nascimento); }
    if (email !== undefined) { campos.push(`email = $${idx++}`); valores.push(email); }
    if (telefone !== undefined) { campos.push(`telefone = $${idx++}`); valores.push(telefone); }
    if (ativo !== undefined) { campos.push(`ativo = $${idx++}`); valores.push(ativo); }
    if (senha !== undefined) {
      const senha_hash = await bcrypt.hash(senha, SALT_ROUNDS);
      campos.push(`senha_hash = $${idx++}`);
      valores.push(senha_hash);
    }

    if (campos.length === 0) return res.status(400).json({ erro: 'Sem campos.' });

    valores.push(id);
    const { rows } = await pool.query(
      `UPDATE pacientes SET ${campos.join(', ')} WHERE id = $${idx} RETURNING id, nome, cpf, data_nascimento, email, telefone, medico_id, ativo, atualizado_em`,
      valores
    );
    return res.json(rows[0]);
  } catch (err) {
    if (err.code === '23505') return res.status(409).json({ erro: 'Ja em uso.' });
    return res.status(500).json({ erro: 'Erro interno.' });
  }
}

async function excluir(req, res) {
  const { id } = req.params;
  try {
    const existe = await pool.query('SELECT id, medico_id FROM pacientes WHERE id = $1', [id]);
    if (existe.rows.length === 0) return res.status(404).json({ erro: 'Nao encontrado.' });
    const paciente = existe.rows[0];
    if (req.user.role === 'medico' && paciente.medico_id !== req.user.id) return res.status(403).json({ erro: 'Acesso negado.' });

    const { rows } = await pool.query(`UPDATE pacientes SET ativo = false WHERE id = $1 RETURNING id, nome, ativo`, [id]);
    return res.json({ mensagem: 'Desativado.', paciente: rows[0] });
  } catch (err) {
    return res.status(500).json({ erro: 'Erro interno.' });
  }
}

async function minhasConta(req, res) {
  try {
    const { rows } = await pool.query(`SELECT id, nome, cpf, data_nascimento, email, telefone, medico_id, ativo, criado_em, atualizado_em FROM pacientes WHERE id = $1`, [req.user.id]);
    if (rows.length === 0) return res.status(404).json({ erro: 'Nao encontrado.' });
    return res.json(rows[0]);
  } catch (err) {
    return res.status(500).json({ erro: 'Erro interno.' });
  }
}

async function solicitarExclusao(req, res) {
  try {
    const { rows } = await pool.query(`UPDATE pacientes SET ativo = false WHERE id = $1 RETURNING id, nome`, [req.user.id]);
    if (rows.length === 0) return res.status(404).json({ erro: 'Nao encontrado.' });
    return res.json({ mensagem: 'Desativado.', paciente: rows[0] });
  } catch (err) {
    return res.status(500).json({ erro: 'Erro interno.' });
  }
}

async function exportarDados(req, res) {
  try {
    const { rows } = await pool.query(`SELECT id, nome, cpf, data_nascimento, email, telefone, criado_em, atualizado_em FROM pacientes WHERE id = $1`, [req.user.id]);
    if (rows.length === 0) return res.status(404).json({ erro: 'Nao encontrado.' });

    res.setHeader('Content-Disposition', `attachment; filename="meus_dados_${req.user.id}.json"`);
    res.setHeader('Content-Type', 'application/json');
    return res.json({ exportado_em: new Date().toISOString(), dados: rows[0] });
  } catch (err) {
    return res.status(500).json({ erro: 'Erro interno.' });
  }
}

module.exports = { listar, buscarPorId, criar, atualizar, excluir, minhasConta, solicitarExclusao, exportarDados };