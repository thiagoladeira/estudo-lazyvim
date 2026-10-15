from dataclasses import dataclass


@dataclass
class p:
    nome: str
    preco: float
    qtd: int


def calc_tot(lst: list[p]) -> float:
    return sum(f.preco * f.qtd for f in lst)


def resumo(lst: list[p]) -> str:
    agora = datetime.now()  # erro: falta import (use <leader>ca)
    return f"{len(lst)} itens, total {calc_tot(lst):.2f} em {agora:%d/%m}"


def mais_caro(lst: list[p]) -> p:
    return max(lst, key=lambda f: f.preco)


if __name__ == "__main__":
    lst = [p("café", 12.5, 2), p("pão", 0.8, 10)]
    print(resumo(lst))
    print(mais_caro(lst).nomee)  # erro de digitação: o LSP vai apontar
