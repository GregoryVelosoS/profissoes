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
    area: "Logística",
    profissoes: [
      { nome: "Analista de Logística", salario: 3000 },
      { nome: "Gerente de Logística", salario: 6000 },
      { nome: "Supervisor de Transporte", salario: 4000 },
      { nome: "Coordenador de Armazém", salario: 4500 },
      { nome: "Motorista de Caminhão", salario: 2500 },
      { nome: "Auxiliar de Logística", salario: 2000 },
      { nome: "Analista de Supply Chain", salario: 3500 },
      { nome: "Especialista em Planejamento Logístico", salario: 5000 },
      { nome: "Operador de Empilhadeira", salario: 2500 },
      { nome: "Gerente de Operações Logísticas", salario: 7000 },
      { nome: "Analista de Estoque", salario: 3000 },
      { nome: "Consultor de Logística", salario: 5500 },
      { nome: "Planejador de Rotas", salario: 3500 },
      { nome: "Supervisor de Expedição", salario: 4000 },
      { nome: "Especialista em Comércio Exterior", salario: 5000 },
      { nome: "Técnico em Logística", salario: 3000 }
    ]
  },
  { 
    area: "Automação",
    profissoes: [
      { nome: "Engenheiro de Automação", salario: 5000 },
      { nome: "Técnico em Automação", salario: 3000 },
      { nome: "Analista de Automação", salario: 4000 },
      { nome: "Especialista em Automação", salario: 4500 },
      { nome: "Programador de CLP", salario: 3500 },
      { nome: "Operador de Máquinas CNC", salario: 2500 },
      { nome: "Técnico em Robótica", salario: 3000 },
      { nome: "Engenheiro de Controle e Automação", salario: 5000 },
      { nome: "Técnico em Instrumentação", salario: 3000 },
      { nome: "Programador de Robôs Industriais", salario: 4000 },
      { nome: "Especialista em Sistemas de Automação", salario: 4500 },
      { nome: "Técnico em Mecatrônica", salario: 3500 },
      { nome: "Engenheiro de Controle e Automação", salario: 5000 },
      { nome: "Técnico em Eletrônica Industrial", salario: 3000 },
      { nome: "Engenheiro de Controle e Automação", salario: 5000 },
      { nome: "Técnico em Automação Industrial", salario: 3000 }
    ]
  },
  {
  area: "Eletrônica",
  profissoes: [
    { nome: "Técnico em Eletrônica", salario: 2000 },
    { nome: "Engenheiro Eletrônico", salario: 3000 },
    { nome: "Técnico em Manutenção de Equipamentos Eletrônicos", salario: 2500 },
    { nome: "Técnico em Eletrônica Industrial", salario: 3000 },
    { nome: "Técnico em Eletrônica Automotiva", salario: 2500 },
    { nome: "Técnico em Eletrônica Digital", salario: 3000 },
    { nome: "Técnico em Eletrônica Analógica", salario: 3000 },
    { nome: "Técnico em Eletrônica de Potência", salario: 3000 },
    { nome: "Técnico em Eletrônica Embarcada", salario: 3000 },
    { nome: "Técnico em Eletrônica de Comunicação", salario: 3000 },
    { nome: "Técnico em Eletrônica de Controle", salario: 3000 },
    { nome: "Técnico em Eletrônica de Instrumentação", salario: 3000 },
    { nome: "Técnico em Eletrônica de Potência", salario: 3000 },
    { nome: "Técnico em Eletrônica de Potência", salario: 3000 },
    { nome: "Técnico em Eletrônica de Potência", salario: 3000 },
    { nome: "Técnico em Eletrônica de Potência", salario: 3000 }
  ]
  }
];

