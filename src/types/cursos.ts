export type CursoPaginado = {
    pagina: number;
    cursos: string[];
  };
  
  export type ListaCursos = {
    paginas: CursoPaginado[];
  };
  
  export const cursos: ListaCursos = {
    paginas: [
      {
        pagina: 1,
        cursos: [
          "Curso de T.I",
          "Curso de Mecânica",
          "Curso de Elétrica",
          "Curso de Logística",
          "Curso de Automação",
          "Curso de Eletrônica",
        ],
      },
      {
        pagina: 2,
        cursos: [
          "Curso de T.I",
          "Curso de Mecânica",
          "Curso de Elétrica",
          "Curso de Logística",
          "Curso de Automação",
          "Curso de Eletrônica",
        ],
      },
      {
        pagina: 3,
        cursos: [
          "Curso de T.I",
          "Curso de Mecânica",
          "Curso de Elétrica",
          "Curso de Logística",
          "Curso de Automação",
          "Curso de Eletrônica",
        ],
      },
    ],
  };
  