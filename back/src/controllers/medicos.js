const pool = require('../db');
const bcrypt = require('bcryptjs');

const SALT_ROUNDS = 10;

async function listar(req, res) {
  try {
    const { rows } = await pool.query(
      `SELECT id, nome, crm, especialidade, email, ativo, criado_em, atualizado_em FROM medicos ORDER BY nome`
    );
    return res.json(rows);
  } catch (err) {
    return res.status(500).json({ erro: 'Erro ao listar.' });
  }
}

async function buscarPorId(req, res) {
  const { id } = req.params;
  try {
    const { rows } = await pool.query(
      `SELECT id, nome, crm, especialidade, email, ativo, criado_em, atualizado_em FROM medicos WHERE id = $1`,
      [id]
    );
    if (rows.length === 0) return res.status(404).json({ erro: 'Nao encontrado.' });
    return res.json(rows[0]);
  } catch (err) {
    return res.status(500).json({ erro: 'Erro interno.' });
  }
}

async function criar(req, res) {
  const { nome, crm, especialidade, email, senha } = req.body;
  if (!nome || !crm || !email || !senha) return res.status(400).json({ erro: 'Campos obrigatorios.' });

  try {
    const senha_hash = await bcrypt.hash(senha, SALT_ROUNDS);
    const { rows } = await pool.query(
      `INSERT INTO medicos (nome, crm, especialidade, email, senha_hash) VALUES ($1, $2, $3, $4, $5) RETURNING id, nome, crm, especialidade, email, ativo, criado_em`,
      [nome, crm, especialidade || null, email, senha_hash]
    );
    return res.status(201).json(rows[0]);
  } catch (err) {
    if (err.code === '23505') return res.status(409).json({ erro: 'Ja cadastrado.' });
    return res.status(500).json({ erro: 'Erro interno.' });
  }
}

async function atualizar(req, res) {
  const { id } = req.params;
  const { nome, crm, especialidade, email, senha, ativo } = req.body;

  try {
    const existe = await pool.query('SELECT id FROM medicos WHERE id = $1', [id]);
    if (existe.rows.length === 0) return res.status(404).json({ erro: 'Nao encontrado.' });

    const campos = [];
    const valores = [];
    let idx = 1;

    if (nome !== undefined) { campos.push(`nome = $${idx++}`); valores.push(nome); }
    if (crm !== undefined) { campos.push(`crm = $${idx++}`); valores.push(crm); }
    if (especialidade !== undefined) { campos.push(`especialidade = $${idx++}`); valores.push(especialidade); }
    if (email !== undefined) { campos.push(`email = $${idx++}`); valores.push(email); }
    if (ativo !== undefined) { campos.push(`ativo = $${idx++}`); valores.push(ativo); }
    if (senha) {
      const senha_hash = await bcrypt.hash(senha, SALT_ROUNDS);
      campos.push(`senha_hash = $${idx++}`);
      valores.push(senha_hash);
    }

    if (campos.length === 0) return res.status(400).json({ erro: 'Sem campos.' });

    valores.push(id);
    const { rows } = await pool.query(
      `UPDATE medicos SET ${campos.join(', ')} WHERE id = $${idx} RETURNING id, nome, crm, especialidade, email, ativo, atualizado_em`,
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
    const { rows } = await pool.query(`UPDATE medicos SET ativo = false WHERE id = $1 RETURNING id, nome, ativo`, [id]);
    if (rows.length === 0) return res.status(404).json({ erro: 'Nao encontrado.' });
    return res.json({ mensagem: 'Desativado.', medico: rows[0] });
  } catch (err) {
    return res.status(500).json({ erro: 'Erro interno.' });
  }
}

module.exports = { listar, buscarPorId, criar, atualizar, excluir };