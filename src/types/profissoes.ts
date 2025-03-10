export type ProfissaoPaginada = {
  pagina: number;
  profissoes: string[];
};

export type ListaProfissoes = {
  paginas: ProfissaoPaginada[];
};

export const profissoes: ListaProfissoes = {
  paginas: [
    {
      pagina: 1,
      profissoes: [
        "Vendedor",
        "Auxiliar de Logística",
        "Administrador",
        "Analista Financeiro",
        "Mecânico",
        "Eletricista",
      ],
    },
    {
      pagina: 2,
      profissoes: [
        "Engenheiro Civil",
        "Professor",
        "Enfermeiro",
        "Desenvolvedor de Software",
        "Designer Gráfico",
        "Advogado",
      ],
    },
    {
      pagina: 3,
      profissoes: [
        "Motorista",
        "Cozinheiro",
        "Atendente de Loja",
        "Técnico em Informática",
        "Farmacêutico",
        "Garçom",
      ],
    },
  ],
};
