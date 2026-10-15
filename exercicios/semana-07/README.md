# Semana 7 — Personalização

Arquivos em `~/.config/nvim/lua/`. Faça um commit da config **antes** de começar.

1. `config/options.lua`: ex. `vim.opt.relativenumber = true`, `vim.opt.scrolloff = 8`.
2. `config/keymaps.lua`: crie um atalho próprio, por exemplo:
       vim.keymap.set("n", "<leader>ww", "<cmd>w<cr>", { desc = "Salvar" })
   Confirme que ele aparece no which-key.
3. `plugins/meu-plugin.lua`: sobrescreva `opts` de um plugin existente (ex.: mudar o layout do picker).
4. Desative um plugin que você não usa:
       return { { "nome/do-plugin", enabled = false } }
5. `config/autocmds.lua`: crie um autocmd (ex.: remover espaços no fim da linha ao salvar `*.md`).
