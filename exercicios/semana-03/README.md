# Semana 3 — Configurando Python e TypeScript

1. `:LazyExtras` → marque com `x`: `lang.python`, `lang.typescript`, `lang.json`,
   `formatting.prettier`, `linting.eslint`. Reinicie o nvim.
2. `:Mason` — confira `pyright`/`basedpyright`, `ruff`, `vtsls`, `prettier`, `eslint-lsp`.
3. Python: em `projetos/py`, rode `uv sync` (ou `python -m venv .venv && .venv/bin/pip install -e .[dev]`).
   No nvim, `<leader>cv` para selecionar o `.venv`.
4. TypeScript: em `projetos/ts`, rode `npm install`.
5. Abra `src/calc/__init__.py` e `src/calc.ts`: `:checkhealth vim.lsp` deve listar os servidores.
6. Bagunce a indentação de um arquivo e salve — ele deve ser formatado automaticamente.
