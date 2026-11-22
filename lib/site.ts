export type Interest = "residencial" | "escritorios" | "lojas";

export type Typology = {
  id: string;
  name: string;
  area: string;
  configuration: string;
  details: string[];
  note?: string;
  plate: string;
  focus?: { origin: string; scale: number };
};

export const interests: { id: Interest; label: string }[] = [
  { id: "residencial", label: "Residencial" },
  { id: "escritorios", label: "Escritórios" },
  { id: "lojas", label: "Lojas comerciais" },
];

export const openDesign: Typology[] = [
  {
    id: "od-3079",
    name: "Studio compacto",
    area: "30,79 m²",
    configuration: "Studio",
    details: [
      "Área privativa da tabela de setembro de 2026",
      "Mesma família dos studios do pavimento tipo",
    ],
    note: "A prancha humanizada ilustra o studio de 33,51 m². O studio de 30,79 m² consta na tabela comercial e não tem desenho próprio neste material.",
    plate: "/media/planta-open.webp",
    focus: { origin: "40% 38%", scale: 1.7 },
  },
  {
    id: "od-3351",
    name: "Studio",
    area: "33,51 m²",
    configuration: "Studio com sacada",
    details: [
      "Colunas 3, 4, 5 e 6 do pavimento tipo",
      "A prancha grafa 33,52 m²",
    ],
    plate: "/media/planta-open.webp",
    focus: { origin: "40% 38%", scale: 1.7 },
  },
  {
    id: "od-4520",
    name: "1 quarto",
    area: "45,20 m²",
    configuration: "1 quarto com sacada",
    details: ["Coluna 7 do pavimento tipo", "Área coincidente na prancha e na tabela"],
    plate: "/media/planta-open.webp",
    focus: { origin: "70% 68%", scale: 1.75 },
  },
  {
    id: "od-5930",
    name: "2 quartos",
    area: "59,30 m²",
    configuration: "2 quartos com sacada",
    details: [
      "Colunas 1, 2, 8 e 9 do pavimento tipo",
      "A prancha da fase de reserva grafa 60 m²",
    ],
    plate: "/media/planta-open.webp",
    focus: { origin: "16% 70%", scale: 1.7 },
  },
];

export const onResidence: Typology[] = [
  {
    id: "on-8038",
    name: "3 quartos",
    area: "80,38 m²",
    configuration: "3 quartos",
    details: ["2 vagas de garagem", "Cinco apartamentos por andar"],
    note: "A prancha humanizada da fase de reserva grafa 77 m² para a família de 3 quartos. A tabela de setembro de 2026 registra 80,38 m² e 81,21 m².",
    plate: "/media/planta-on.webp",
  },
  {
    id: "on-8121",
    name: "3 quartos",
    area: "81,21 m²",
    configuration: "3 quartos",
    details: ["2 vagas de garagem", "Cinco apartamentos por andar"],
    note: "Mesma família de planta dos 3 quartos. A tabela distingue esta área privativa da unidade de 80,38 m².",
    plate: "/media/planta-on.webp",
  },
  {
    id: "on-9584",
    name: "3 suítes",
    area: "95,84 m²",
    configuration: "3 suítes",
    details: ["2 vagas de garagem", "Unidades de extremidade no pavimento tipo"],
    note: "A prancha da fase de reserva grafa 94 m² para as unidades de 3 suítes. A tabela de setembro de 2026 registra 95,84 m².",
    plate: "/media/planta-on.webp",
  },
];

export const leadOffice: Typology[] = [
  {
    id: "lo-laje",
    name: "Laje corporativa",
    area: "175,15 m²",
    configuration: "Pavimento integral, divisível em até 5 salas",
    details: [
      "5 vagas destinadas à laje completa",
      "3 elevadores",
      "Salas de 29,32 m², 35,33 m² e 45,85 m²",
    ],
    note: "A prancha ilustrativa mostra a laje aberta e grafa 184,4 m², medida da fase de reserva. A tabela de setembro de 2026 registra 175,15 m².",
    plate: "/media/planta-lead.webp",
  },
  {
    id: "lo-2932",
    name: "Sala",
    area: "29,32 m²",
    configuration: "Sala na laje divisível",
    details: ["Parte da laje de 175,15 m²", "Até cinco salas por pavimento"],
    note: "Não há prancha humanizada separada para cada sala. O desenho é o da laje corporativa.",
    plate: "/media/planta-lead.webp",
  },
  {
    id: "lo-3533",
    name: "Sala",
    area: "35,33 m²",
    configuration: "Sala na laje divisível",
    details: ["Parte da laje de 175,15 m²", "Até cinco salas por pavimento"],
    note: "Não há prancha humanizada separada para cada sala. O desenho é o da laje corporativa.",
    plate: "/media/planta-lead.webp",
  },
  {
    id: "lo-4585",
    name: "Sala",
    area: "45,85 m²",
    configuration: "Sala na laje divisível",
    details: ["Parte da laje de 175,15 m²", "Até cinco salas por pavimento"],
    note: "Não há prancha humanizada separada para cada sala. O desenho é o da laje corporativa.",
    plate: "/media/planta-lead.webp",
  },
];

export type Store = {
  id: string;
  name: string;
  area: string;
  terreo: string;
  mezanino: string;
};

export const stores: Store[] = [
  { id: "s-5702", name: "Loja", area: "57,02 m²", terreo: "38,12 m²", mezanino: "18,90 m²" },
  { id: "s-5770", name: "Loja", area: "57,70 m²", terreo: "38,57 m²", mezanino: "19,13 m²" },
  { id: "s-6779", name: "Loja", area: "67,79 m²", terreo: "43,29 m²", mezanino: "24,50 m²" },
  { id: "s-7336", name: "Loja", area: "73,36 m²", terreo: "48,86 m²", mezanino: "24,50 m²" },
  { id: "s-7338", name: "Loja", area: "73,38 m²", terreo: "48,88 m²", mezanino: "24,50 m²" },
  { id: "s-7400", name: "Loja", area: "74,00 m²", terreo: "49,50 m²", mezanino: "24,50 m²" },
  { id: "s-7874", name: "Loja", area: "78,74 m²", terreo: "52,64 m²", mezanino: "26,10 m²" },
  { id: "s-7895", name: "Loja", area: "78,95 m²", terreo: "52,62 m²", mezanino: "26,33 m²" },
  { id: "s-8643", name: "Loja", area: "86,43 m²", terreo: "58,78 m²", mezanino: "27,65 m²" },
  { id: "s-9405", name: "Loja", area: "94,05 m²", terreo: "62,05 m²", mezanino: "32,00 m²" },
  { id: "s-9563", name: "Loja", area: "95,63 m²", terreo: "63,38 m²", mezanino: "32,25 m²" },
  {
    id: "s-rest",
    name: "Restaurante",
    area: "452,71 m²",
    terreo: "303,73 m²",
    mezanino: "148,98 m²",
  },
];

export const gallery = [
  {
    src: "/media/fachada.webp",
    kicker: "Fachada",
    title: "A pele do edifício",
    text: "Brises, jardineiras e uma malha vertical que filtra o sol do Renascença.",
  },
  {
    src: "/media/boulevard.webp",
    kicker: "Paisagismo",
    title: "Boulevard",
    text: "Palmeiras, calçada e o térreo envidraçado organizam a chegada ao complexo.",
  },
  {
    src: "/media/torres.webp",
    kicker: "Residencial",
    title: "Open Design",
    text: "A torre compacta, com varandas contínuas e vegetação na fachada.",
  },
  {
    src: "/media/on-residence.webp",
    kicker: "Residencial",
    title: "On Residence",
    text: "A torre de três quartos, voltada para uma permanência mais ampla.",
  },
  {
    src: "/media/corporativo.webp",
    kicker: "Corporativo",
    title: "Lead Office",
    text: "O volume de escritórios, com leitura metálica e frente para a cidade.",
  },
  {
    src: "/media/mall.webp",
    kicker: "Mall",
    title: "Nexus Mall",
    text: "Lojas no rés do chão, ligadas ao fluxo de quem mora e de quem trabalha.",
  },
  {
    src: "/media/lazer.webp",
    kicker: "Lazer",
    title: "Entre as torres",
    text: "Jardim, deck e a vida comum que costura o endereço.",
  },
] as const;

export const address = {
  street: "Avenida Coronel Colares Moreira",
  neighborhood: "Renascença",
  city: "São Luís",
  state: "MA",
  mapBbox: "-44.2978,-2.5074,-44.2738,-2.4914",
  mapLink: "https://www.openstreetmap.org/#map=16/-2.4994/-44.2858",
};
