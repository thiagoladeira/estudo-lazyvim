# Semana 6 — Ciclo TDD dentro do Neovim

Pré-requisito: extras `test.core` e `dap.core` ativos (`:LazyExtras`), e `git init` neste repo.

Em `projetos/py` **e** `projetos/ts`:
1. Escreva um teste para uma função `dividir(a, b)` que lança erro quando `b == 0`.
2. Rode o teste com `<leader>tr` (nearest) — ele deve falhar.
3. Implemente `dividir`. Rode `<leader>tt` (arquivo) até passar.
4. Coloque um breakpoint (`<leader>db`) em `dividir` e depure o teste (`<leader>td`).
5. Veja as mudanças com `]h` / `<leader>ghp`, faça stage com `<leader>ghs`.
6. Abra o lazygit (`<leader>gg`) e faça o commit.
