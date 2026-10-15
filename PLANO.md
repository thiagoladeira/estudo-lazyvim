# Plano de estudos: dominar o LazyVim (Python + TypeScript)

Ritmo: **30 min/dia, 8 semanas**. Cada sessão:
5 min revisando atalhos da semana anterior → 20 min praticando → 5 min anotando no `CHEATSHEET.md`.

A partir da semana 2, use o LazyVim para **todo** código do dia a dia.
Exercícios de cada semana: `exercicios/semana-XX/README.md`.

---

## Semana 1 — Fundamentos do Vim
- [ ] Dia 1: `:Tutor` lições 1–3 (modos, `hjkl`, `i a o`, `x dd u <C-r>`, `:w :q`)
- [ ] Dia 2: `:Tutor` lições 4–7
- [ ] Dia 3: movimentos `w b e`, `0 ^ $`, `gg G` em `semana-01/movimentos.txt`
- [ ] Dia 4: `f t ; ,`, `%`, `{ }`, `<C-d> <C-u>`
- [ ] Dia 5: operador + movimento: `dw`, `c$`, `y2j`, `.` para repetir
- [ ] Dia 6: text objects: `ciw`, `di"`, `ya(`, `dap`, `cit`
- [ ] Dia 7: `semana-01/editar.py` sem mouse e sem setas

## Semana 2 — Navegando no LazyVim
- [ ] Dia 1: `<Space>` + which-key: explorar cada menu
- [ ] Dia 2: `<leader><space>`, `<leader>/`, `<leader>fr`
- [ ] Dia 3: `<leader>e` (neo-tree): criar/renomear/apagar arquivos (`a`, `r`, `d`)
- [ ] Dia 4: buffers `<S-h>/<S-l>`, `<leader>bd`, `<leader>bb`
- [ ] Dia 5: janelas `<leader>-`, `<leader>|`, `<C-h/j/k/l>`, `<leader>wd`
- [ ] Dia 6: `:Lazy`, `:LazyExtras`, `:checkhealth`, `<leader>sk`
- [ ] Dia 7: desafio de navegação em `semana-02/README.md`

## Semana 3 — Configurando Python e TypeScript
- [ ] Dia 1: ler `~/.config/nvim/lua/plugins/example.lua` e entender a estrutura da config
- [ ] Dia 2: `:LazyExtras` → `lang.python`, `lang.typescript`, `lang.json`
- [ ] Dia 3: `:LazyExtras` → `formatting.prettier`, `linting.eslint`; `:Mason`
- [ ] Dia 4: preparar `projetos/py` (uv + pytest) e escolher venv com `<leader>cv`
- [ ] Dia 5: preparar `projetos/ts` (npm install)
- [ ] Dia 6: `:LspInfo` / `:checkhealth vim.lsp` nos dois projetos
- [ ] Dia 7: conferir formatação ao salvar e autocomplete nas duas linguagens

## Semana 4 — LSP no dia a dia
- [ ] Dia 1: `gd`, `gr`, `gI`, `gy`, `K`
- [ ] Dia 2: `<leader>cr` (rename) e `<leader>ca` (code action)
- [ ] Dia 3: diagnósticos `]d [d`, `<leader>cd`, `<leader>xx`
- [ ] Dia 4: símbolos `<leader>ss`, `<leader>sS`; `<leader>cf`
- [ ] Dia 5: completion (blink.cmp) e snippets
- [ ] Dia 6: refatorar `semana-04/pedidos.py` só com LSP
- [ ] Dia 7: refatorar `semana-04/pedidos.ts` só com LSP

## Semana 5 — Edição avançada
- [ ] Dia 1: mini.ai: `vaf`, `cif`, `dac`, `yia`
- [ ] Dia 2: mini.surround `gsa`, `gsd`, `gsr`; comentários `gcc`, `gc`
- [ ] Dia 3: macros `qa ... q`, `@a`, `@@`, `10@a`
- [ ] Dia 4: registradores `"ayy`, `"+p`, `:reg`
- [ ] Dia 5: `* #`, `:%s/x/y/gc`, `<leader>sr` (grug-far)
- [ ] Dia 6: flash `s`/`S`; marks `ma`, `'a`
- [ ] Dia 7: desafio JSON → código em `semana-05/README.md`

## Semana 6 — Fluxo de desenvolvimento
- [ ] Dia 1: `git init` neste repo; `<leader>gg` (lazygit)
- [ ] Dia 2: gitsigns `]h [h`, `<leader>ghs`, `<leader>ghr`, `<leader>ghp`, `<leader>gb`
- [ ] Dia 3: terminal `<C-/>`; rodar testes manualmente
- [ ] Dia 4: extra `test.core`: `<leader>tt`, `<leader>tr`, `<leader>ts`
- [ ] Dia 5: extra `dap.core`: debug Python `<leader>db`, `<leader>dc`
- [ ] Dia 6: debug de TS/Node
- [ ] Dia 7: ciclo TDD completo de `semana-06/README.md`

## Semana 7 — Personalização
- [ ] Dia 1: Lua básico (tabelas, funções, `require`) — `:help lua-guide`
- [ ] Dia 2: `vim.opt` em `lua/config/options.lua`
- [ ] Dia 3: keymaps próprios com `vim.keymap.set` em `lua/config/keymaps.lua`
- [ ] Dia 4: sobrescrever `opts` de um plugin em `lua/plugins/`
- [ ] Dia 5: desativar um plugin (`enabled = false`) e adicionar um novo
- [ ] Dia 6: autocmd próprio em `lua/config/autocmds.lua`
- [ ] Dia 7: versionar `~/.config/nvim` com git

## Semana 8 — Projeto final
- [ ] Dias 1–6: projeto de `semana-08/README.md` (API FastAPI + cliente TS), 100% no LazyVim
- [ ] Dia 7: revisar `CHEATSHEET.md`, cortar o que não usa, medir tempos vs. semana 1

---

## Recursos
- `:Tutor`, `:help` (ex.: `:help text-objects`, `:help motion.txt`)
- https://www.lazyvim.org — páginas **Keymaps** e **Extras**
- vim-be-good (plugin) e Vim Adventures para treinar movimentos
- Livro "Practical Vim" (Drew Neil)
