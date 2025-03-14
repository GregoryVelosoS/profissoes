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
          "Curso de Marketing Digital",
          "Curso de Design Gráfico",
          "Curso de Programação",
          "Curso de Fotografia",
          "Curso de Administração",
          "Curso de Enfermagem",
        ],
      },
      {
        pagina: 2,
        cursos: [
          "Curso de Engenharia Civil",
          "Curso de Psicologia",
          "Curso de Gastronomia",
          "Curso de Direito",
          "Curso de Arquitetura",
          "Curso de Educação Física",
        ],
      },
      {
        pagina: 3,
        cursos: [
          "Curso de Web Design",
          "Curso de Pedagogia",
          "Curso de Estética",
          "Curso de Matemática",
          "Curso de Ciências Biológicas",
          "Curso de Física",
        ],
      },
    ],
  };
  