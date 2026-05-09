CREATE TABLE IF NOT EXISTS medicos (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(150) NOT NULL,
  crm VARCHAR(20) NOT NULL UNIQUE,
  especialidade VARCHAR(100),
  email VARCHAR(150) NOT NULL UNIQUE,
  senha_hash VARCHAR(255) NOT NULL,
  ativo BOOLEAN NOT NULL DEFAULT true,
  criado_em TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  atualizado_em TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS pacientes (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(150) NOT NULL,
  cpf VARCHAR(14) NOT NULL UNIQUE,
  data_nascimento DATE,
  email VARCHAR(150) NOT NULL UNIQUE,
  telefone VARCHAR(20),
  senha_hash VARCHAR(255) NOT NULL,
  medico_id INT REFERENCES medicos(id) ON DELETE SET NULL,
  ativo BOOLEAN NOT NULL DEFAULT true,
  criado_em TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  atualizado_em TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE OR REPLACE FUNCTION set_atualizado_em()
RETURNS TRIGGER AS $$
BEGIN
  NEW.atualizado_em = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_medicos_atualizado ON medicos;
CREATE TRIGGER trg_medicos_atualizado
  BEFORE UPDATE ON medicos
  FOR EACH ROW EXECUTE FUNCTION set_atualizado_em();

DROP TRIGGER IF EXISTS trg_pacientes_atualizado ON pacientes;
CREATE TRIGGER trg_pacientes_atualizado
  BEFORE UPDATE ON pacientes
  FOR EACH ROW EXECUTE FUNCTION set_atualizado_em();