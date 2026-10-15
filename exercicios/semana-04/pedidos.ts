interface p {
  nome: string;
  preco: number;
  qtd: number;
}

export function calcTot(lst: p[]): number {
  return lst.reduce((acc, f) => acc + f.preco * f.qtd, 0);
}

export function resumo(lst: p[]): string {
  return `${lst.length} itens, total ${calcTot(lst).toFixed(2)}`;
}

export function maisCaro(lst: p[]): p {
  return lst.reduce((a, f) => (f.preco > a.preco ? f : a));
}

const lst: p[] = [
  { nome: "café", preco: 12.5, qtd: 2 },
  { nome: "pão", preco: "0.8", qtd: 10 }, // erro de tipo: o LSP vai apontar
];

console.log(resumo(lst));
console.log(maisCaro(lst).nomee); // erro de digitação
