# estudo-lazyvim

Plano de estudos de **8 semanas (30 min/dia)** para dominar o [LazyVim](https://www.lazyvim.org)
como editor principal, praticando com **Python** e **TypeScript**.

Pensado para quem já programa: o foco não é aprender a programar, e sim editar, navegar,
refatorar, testar e depurar código sem sair do Neovim.

## Estrutura

```
.
├── PLANO.md          # plano dia a dia com checkboxes
├── CHEATSHEET.md     # atalhos que você realmente usou, por semana
├── exercicios/
│   └── semana-01..08/  # README com as tarefas + arquivos de prática
└── projetos/
    ├── py/           # esqueleto Python (pytest)
    └── ts/           # esqueleto TypeScript (vitest)
```

## Roteiro

| Semana | Tema | Destaques |
|---|---|---|
| 1 | Fundamentos do Vim | `:Tutor`, movimentos, operador + text object, `.` |
| 2 | Navegando no LazyVim | which-key, picker, neo-tree, buffers e janelas |
| 3 | Python e TypeScript | `:LazyExtras`, Mason, venv, formatação e lint |
| 4 | LSP no dia a dia | `gd`, `gr`, `K`, rename, code actions, diagnósticos |
| 5 | Edição avançada | mini.ai, surround, macros, registradores, grug-far, flash |
| 6 | Fluxo de desenvolvimento | lazygit, gitsigns, neotest, nvim-dap |
| 7 | Personalização | options, keymaps, specs do lazy.nvim, autocmds |
| 8 | Projeto final | API FastAPI + cliente TS, 100% no LazyVim |

## Como usar

1. Clone o repositório e abra no Neovim:
   ```sh
   git clone https://github.com/thiagoladeira/estudo-lazyvim.git
   cd estudo-lazyvim && nvim PLANO.md
   ```
2. A cada sessão: **5 min** revisando atalhos → **20 min** de prática → **5 min** anotando no `CHEATSHEET.md`.
3. Marque o dia em `PLANO.md` e faça um commit.

### Requisitos

- Neovim ≥ 0.11 com [LazyVim](https://www.lazyvim.org/installation)
- Python ≥ 3.11 (de preferência com [uv](https://docs.astral.sh/uv/))
- Node.js ≥ 20
- [lazygit](https://github.com/jesseduffield/lazygit) (semana 6)

Os extras de linguagem do LazyVim **não** vêm ativados por padrão: ativá-los faz parte da semana 3
(`exercicios/semana-03/README.md`).

### Rodando os projetos

```sh
# Python
cd projetos/py && uv sync && uv run pytest

# TypeScript
cd projetos/ts && npm install && npm test
```

## Recursos

- [lazyvim.org](https://www.lazyvim.org): páginas **Keymaps** e **Extras**
- `:Tutor` e `:help` dentro do Neovim
- [vim-be-good](https://github.com/ThePrimeagen/vim-be-good) e [Vim Adventures](https://vim-adventures.com)
- *Practical Vim*, de Drew Neil
