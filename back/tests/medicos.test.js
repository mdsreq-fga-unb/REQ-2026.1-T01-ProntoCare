const request = require('supertest');
const app = require('../app');
const pool = require('../src/db');
const { gerarToken } = require('../src/middleware/auth');

jest.mock('../src/db');

const tokenAdmin = gerarToken({ id: 0, role: 'admin', usuario: 'admin' });
const tokenMedico = gerarToken({ id: 1, role: 'medico', nome: 'Dr' });
const tokenPaciente = gerarToken({ id: 10, role: 'paciente', nome: 'P' });

describe('Medicos', () => {
  it('401', async () => {
    const res = await request(app).get('/api/medicos');
    expect(res.status).toBe(401);
  });

  it('403 medico', async () => {
    const res = await request(app).get('/api/medicos').set('Authorization', `Bearer ${tokenMedico}`);
    expect(res.status).toBe(403);
  });

  it('200 admin get', async () => {
    pool.query.mockResolvedValueOnce({ rows: [{ id: 1, crm: '123' }] });
    const res = await request(app).get('/api/medicos').set('Authorization', `Bearer ${tokenAdmin}`);
    expect(res.status).toBe(200);
  });

  it('201 post', async () => {
    pool.query.mockResolvedValueOnce({ rows: [{ id: 2, nome: 'Dr' }] });
    const res = await request(app).post('/api/medicos').set('Authorization', `Bearer ${tokenAdmin}`).send({ nome: 'Dr', crm: '1', email: 'e', senha: '1' });
    expect(res.status).toBe(201);
  });

  it('200 put', async () => {
    pool.query.mockResolvedValueOnce({ rows: [{ id: 1 }] }).mockResolvedValueOnce({ rows: [{ id: 1, nome: 'Dr' }] });
    const res = await request(app).put('/api/medicos/1').set('Authorization', `Bearer ${tokenAdmin}`).send({ nome: 'Dr' });
    expect(res.status).toBe(200);
  });

  it('200 delete', async () => {
    pool.query.mockResolvedValueOnce({ rows: [{ id: 1, ativo: false }] });
    const res = await request(app).delete('/api/medicos/1').set('Authorization', `Bearer ${tokenAdmin}`);
    expect(res.status).toBe(200);
  });
});