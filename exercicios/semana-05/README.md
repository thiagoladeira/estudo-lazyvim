# Semana 5 — Desafio JSON → código com macros

`usuarios.json` tem 6 usuários. Crie `usuarios.py` e `usuarios.ts` com uma lista
de objetos equivalente, **gravando uma macro** que converte uma linha e repetindo com `@@` / `5@q`.

Exemplo de alvo (Python):
    Usuario(nome="Ana", idade=31, cidade="Recife"),

Exemplo de alvo (TS):
    { nome: "Ana", idade: 31, cidade: "Recife" },

Extras:
- Use `gsa` para envolver um trecho em aspas/parênteses e `gsr"'` para trocar aspas.
- Use `<leader>sr` para trocar `cidade` por `municipio` nos dois arquivos de uma vez.
- Use `s` (flash) para pular direto a qualquer palavra na tela.
