const pool = require('./src/db');
const bcrypt = require('bcryptjs');

async function test() {
  // Create a patient with password 123456
  const hash = await bcrypt.hash('123456', 10);
  const { rows } = await pool.query(
    `INSERT INTO pacientes (nome, cpf, email, senha_hash) VALUES ('Teste', '000.000.000-00', 'teste@gmail.com', $1) RETURNING id`,
    [hash]
  );
  const id = rows[0].id;

  // Now simulate the Update controller logic
  const req = {
    params: { id },
    body: { nome: 'Teste Alterado', email: 'teste@gmail.com', senha: '' },
    user: { role: 'admin' }
  };
  const res = {
    status: (s) => ({ json: (d) => console.log(s, d) }),
    json: (d) => console.log('Update OK:', d.nome)
  };

  // require controller
  const ctrl = require('./src/controllers/pacientes');
  await ctrl.atualizar(req, res);

  // Check the DB
  const res2 = await pool.query('SELECT senha_hash FROM pacientes WHERE id = $1', [id]);
  const finalHash = res2.rows[0].senha_hash;
  const is123456 = await bcrypt.compare('123456', finalHash);
  const isEmpty = await bcrypt.compare('', finalHash);

  console.log(`After update with empty password:`);
  console.log(`Is 123456? ${is123456}`);
  console.log(`Is empty? ${isEmpty}`);
  
  await pool.query('DELETE FROM pacientes WHERE id = $1', [id]);
  process.exit(0);
}
test().catch(console.error);
