# ProntoCare

Sistema de prontuário eletrônico de pacientes — documentação do projeto da disciplina **Requisitos de Software** (REQ), turma T01, semestre 2026.1, grupo **Prontuariantes**.

## Conteúdo

- [Visão do Produto e Projeto](visao-produto/index.md) — versão 0.5 (seções 1 a 6).

## Pré-visualização local

Com Python 3 e um ambiente virtual:

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -U pip
pip install -r requirements.txt
mkdocs serve
```

Abre `http://127.0.0.1:8000` no navegador.

## Site público

Após configurar GitHub Pages no repositório, a documentação fica disponível em:

[https://mdsreq-fga-unb.github.io/REQ-2026.1-T01-ProntoCare/](https://mdsreq-fga-unb.github.io/REQ-2026.1-T01-ProntoCare/)

## Contribuir

Novos capítulos em Markdown devem ser colocados em `docs/` e registrados em `nav` no arquivo `mkdocs.yml` na raiz do repositório. Imagens: pasta `docs/assets/<seção>/`.
