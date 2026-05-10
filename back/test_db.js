const pool = require('./src/db');
const bcrypt = require('bcryptjs');

async function test() {
  const { rows } = await pool.query('SELECT email, senha_hash FROM pacientes');
  console.log("Pacientes:", rows);
  for (let p of rows) {
    const isMatch123 = await bcrypt.compare('123456', p.senha_hash);
    const isMatchEmpty = await bcrypt.compare('', p.senha_hash);
    const isMatchSpace = await bcrypt.compare(' ', p.senha_hash);
    console.log(`Paciente ${p.email} - Is 123456? ${isMatch123} | Is empty? ${isMatchEmpty} | Is space? ${isMatchSpace}`);
  }
  process.exit(0);
}
test();
