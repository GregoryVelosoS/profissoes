export type Profissao = {
  nome: string;
  salario: number;
};

export type CategoriaCarreira = {
  area: string; // Nome da categoria (ex: "TI", "MECANICA", "ELETRICA")
  profissoes: Profissao[];
};

export type Carreiras = CategoriaCarreira[];

export const ListaCarreiras: Carreiras = [
  {
    area: "T.I",
    profissoes: [
      { nome: "Desenvolvedor Front-End", salario: 3000 },
      { nome: "Desenvolvedor Back-End", salario: 3500 },
      { nome: "Desenvolvedor Full-Stack", salario: 4000 },
      { nome: "Analista de Sistemas", salario: 4500 },
      { nome: "Gerente de Projetos", salario: 5000 },
      { nome: "Analista de Dados", salario: 5500 }
    ],
  },
  {
    area: "Mecânica",
    profissoes: [
      { nome: "Mecânico de Automóveis", salario: 2000 },
      { nome: "Mecânico de Máquinas", salario: 2500 },
      { nome: "Engenheiro Mecânico", salario: 3000 },
      { nome: "Técnico em Mecânica", salario: 3500 },
      { nome: "Mecânico de Aeronaves", salario: 4000 },
      { nome: "Mecânico de Refrigeração", salario: 4500 }
    ]
  },
  {
    area: "Elétrica",	
    profissoes: [
      { nome: "Eletricista Residencial", salario: 2000 },
      { nome: "Eletricista Industrial", salario: 2500 },
      { nome: "Engenheiro Eletricista", salario: 3000 },
      { nome: "Técnico em Eletrônica", salario: 3500 },
      { nome: "Eletricista de Manutenção", salario: 4000 },
      { nome: "Eletricista de Automóveis", salario: 4500 }
    ]
  }
];

