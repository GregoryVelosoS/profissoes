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
      { nome: "Analista de Dados", salario: 5500 },
      { nome: "DevOps Engineer", salario: 6000 },
      { nome: "Especialista em Segurança da Informação", salario: 6500 },
      { nome: "Cientista de Dados", salario: 7000 },
      { nome: "Engenheiro de Machine Learning", salario: 7500 },
      { nome: "Administrador de Redes", salario: 4000 },
      { nome: "Arquiteto de Software", salario: 8000 },
      { nome: "Engenheiro de Dados", salario: 7000 },
      { nome: "Product Manager", salario: 7500 },
      { nome: "UI/UX Designer", salario: 5000 },
      { nome: "Scrum Master", salario: 6000 }
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
      { nome: "Mecânico de Refrigeração", salario: 4500 },
      { nome: "Mecânico de Bicicletas", salario: 2000 },
      { nome: "Mecânico de Motores Diesel", salario: 3000 },
      { nome: "Mecânico de Equipamentos Pesados", salario: 4000 },
      { nome: "Mecânico de Manutenção Industrial", salario: 4500 },
      { nome: "Mecânico de Máquinas Agrícolas", salario: 3500 },
      { nome: "Mecânico de Elevadores", salario: 4000 },
      { nome: "Mecânico de Motocicletas", salario: 2500 },
      { nome: "Mecânico de Instrumentos de Precisão", salario: 3000 },
      { nome: "Mecânico de Usinagem", salario: 3500 },
      { nome: "Mecânico de Bombas Hidráulicas", salario: 4000 }
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
      { nome: "Eletricista de Automóveis", salario: 4500 },
      { nome: "Eletricista de Redes", salario: 3000 },
      { nome: "Eletricista de Alta Tensão", salario: 3500 },
      { nome: "Técnico em Eletrotécnica", salario: 4000 },
      { nome: "Projetista Elétrico", salario: 4500 },
      { nome: "Instalador de Sistemas Elétricos", salario: 3000 },
      { nome: "Eletricista de Manutenção Predial", salario: 3500 },
      { nome: "Eletricista de Equipamentos Industriais", salario: 4000 },
      { nome: "Eletricista de Subestações", salario: 4500 },
      { nome: "Eletricista de Linhas de Transmissão", salario: 5000 },
      { nome: "Eletricista de Sistemas Fotovoltaicos", salario: 5500 }
    ]
  },
  {
    area: "Construção Civil",
    profissoes: [
      { nome: "Pedreiro", salario: 2000 },
      { nome: "Engenheiro Civil", salario: 5000 },
      { nome: "Arquiteto", salario: 4500 },
      { nome: "Mestre de Obras", salario: 4000 },
      { nome: "Técnico em Edificações", salario: 3500 },
      { nome: "Encanador", salario: 2500 },
      { nome: "Carpinteiro", salario: 3000 },
      { nome: "Pintor de Obras", salario: 2500 },
      { nome: "Azulejista", salario: 3000 },
      { nome: "Eletricista de Obras", salario: 3500 },
      { nome: "Operador de Máquinas Pesadas", salario: 4000 },
      { nome: "Topógrafo", salario: 4500 },
      { nome: "Calculista Estrutural", salario: 5000 },
      { nome: "Projetista de Obras", salario: 5500 },
      { nome: "Técnico em Segurança do Trabalho", salario: 3000 },
      { nome: "Gerente de Obras", salario: 6000 }
    ]
  },
  {
    area: "Saúde",
    profissoes: [
      { nome: "Médico", salario: 10000 },
      { nome: "Enfermeiro", salario: 3000 },
      { nome: "Fisioterapeuta", salario: 3500 },
      { nome: "Técnico de Enfermagem", salario: 2500 },
      { nome: "Nutricionista", salario: 4000 },
      { nome: "Psicólogo", salario: 4500 },
      { nome: "Farmacêutico", salario: 5000 },
      { nome: "Dentista", salario: 6000 },
      { nome: "Veterinário", salario: 5500 },
      { nome: "Biomédico", salario: 4500 },
      { nome: "Técnico em Radiologia", salario: 3500 },
      { nome: "Fonoaudiólogo", salario: 4000 },
      { nome: "Terapeuta Ocupacional", salario: 4500 },
      { nome: "Auxiliar de Saúde Bucal", salario: 2500 },
      { nome: "Técnico em Laboratório", salario: 3000 },
      { nome: "Gestor Hospitalar", salario: 6000 }
    ]
  },
  {
    area: "Educação",
    profissoes: [
      { nome: "Professor de Matemática", salario: 3000 },
      { nome: "Professor de História", salario: 2800 },
      { nome: "Coordenador Pedagógico", salario: 4000 },
      { nome: "Diretor Escolar", salario: 5000 },
      { nome: "Professor de Física", salario: 3200 },
      { nome: "Professor de Química", salario: 3300 },
      { nome: "Professor de Biologia", salario: 3100 },
      { nome: "Professor de Geografia", salario: 2900 },
      { nome: "Professor de Língua Portuguesa", salario: 3000 },
      { nome: "Professor de Inglês", salario: 3100 },
      { nome: "Professor de Educação Física", salario: 2800 },
      { nome: "Professor de Artes", salario: 2700 },
      { nome: "Professor de Filosofia", salario: 2900 },
      { nome: "Professor de Sociologia", salario: 3000 },
      { nome: "Orientador Educacional", salario: 3500 },
      { nome: "Supervisor Escolar", salario: 4000 }
    ]
  },
  {
    area: "Agronegócio",
    profissoes: [
      { nome: "Engenheiro Agrônomo", salario: 4500 },
      { nome: "Técnico Agrícola", salario: 3000 },
      { nome: "Operador de Máquinas Agrícolas", salario: 2500 },
      { nome: "Gestor de Agronegócios", salario: 5000 },
      { nome: "Zootecnista", salario: 4000 },
      { nome: "Veterinário Rural", salario: 5500 },
      { nome: "Engenheiro Florestal", salario: 4500 },
      { nome: "Técnico em Agropecuária", salario: 3500 },
      { nome: "Consultor Agrícola", salario: 5000 },
      { nome: "Pesquisador em Agricultura", salario: 6000 },
      { nome: "Especialista em Irrigação", salario: 4000 },
      { nome: "Gestor de Cooperativas", salario: 4500 },
      { nome: "Técnico em Meio Ambiente", salario: 3500 },
      { nome: "Engenheiro de Alimentos", salario: 5000 },
      { nome: "Analista de Mercado Agrícola", salario: 5500 },
      { nome: "Supervisor de Produção Agrícola", salario: 4500 }
    ]
  }
];

