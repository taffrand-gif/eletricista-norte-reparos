// Configuração para Norte-Reparos - Canalizador
// Site canalizador-norte-reparos.pt
// Preços sem IVA - NOVA GRELHA TARIFÁRIA 2026
// Z1-Z6 com preços de deslocação + taxa horária 70€/h
// Surcharge urgência: 50% (×1.5)

export type SiteId = 'norte-reparos';

export interface SiteConfig {
  id: SiteId;
  name: string;
  title: string;
  description: string;
  phone: string;
  whatsapp: string;
  whatsappMessage: string;
  email: string;
  serviceType: string;
  domain: string;

  // Design tokens
  colors: {
    primary: string;
    primaryDark: string;
    primaryLight: string;
    accent: string;
  };

  // Hero section
  hero: {
    title: string;
    subtitle: string;
    backgroundImage: string;
    ogImage: string;
  };

  // Services for calculator
  services: Array<{
    id: string;
    label: string;
    basePrice: number;
  }>;

  // Pricing Zones - NOVA GRELHA 2026
  pricingZones: Array<{
    zone: string;
    name: string;
    cities: string;
    price: string;
    time: string;
  }>;

  // Pricing config
  urgencyMultiplier: number;   // 1.5 = +50% pour urgence
  hourlyRate: number;         // 70€/h

  // Company info
  company: {
    fullName: string;
    shortDescription: string;
    longDescription: string;
    coverage: string;
    yearEstablished: string;
  };

  // SEO
  seo: {
    keywords: string[];
    ogImage: string;
  };

  // Testimonials for social proof
  testimonials: Array<{
    id: string;
    name: string;
    location: string;
    service: string;
    rating: number;
    text: string;
  }>;
  // Real stories / case studies
  stories: Array<{
    title: string;
    location: string;
    situation: string;
    emotion: string;
    solution: string;
  }>;
  // Service metadata for dynamic routing
  serviceName: string;
  serviceSlug: string;
}

// GRELHA TARIFÁRIA 2026
// Z1: 15€ — Macedo e conselho — < 30 min
// Z2: 25€ — Mirandela, Vila Flor, Alfândega, Carrazeda — < 40 min
// Z3: 35€ — Bragança, Vinhais, Vimioso, Torre Moncorvo, Mogadouro, Freixo — < 60 min
// Z4: 45€ — Miranda do Douro, Foz Côa, S.João Pesqueira, Murça, Valpaços — 45-75 min
// Z5: 55€ — Vila Real, Alijó, Sabrosa, Tabuaço, Armamar, Régua, Lamego, Sta Marta, Mesão Frio — 60-90 min
// Z6: 65€ — Chaves, Vila Pouca, Boticas, Montalegre, Ribeira de Pena, Mondim, Moimenta, Sernancelhe, Penedono — sob marcação
// Urgência: ×1.5 (50% supplement)
// Taxa horária: 70€/h

export const siteConfig: SiteConfig = {
  id: 'norte-reparos',
  name: 'Canalizador Profissional',
  title: 'Canalizador em Trás-os-Montes | Norte Reparos — Serviço ao Domicílio 24h',
  description: 'Canalizador profissional ao seu domicílio em Trás-os-Montes. Fugas de água, desentupimentos, urgências 24h. Orçamento gratuito. Ligue 928 484 451.',
  phone: '928 484 451',
  whatsapp: '351928484451',
  whatsappMessage: 'Olá, preciso de um canalizador em Trás-os-Montes. Podem dar-me um orçamento?',
  email: 'info@canalizador-norte-reparos.pt',
  serviceType: 'Canalizador',
  domain: 'canalizador-norte-reparos.pt',
  colors: {
    primary: '#1e3a8a',
    primaryDark: '#1e293b',
    primaryLight: '#1e40af',
    accent: '#b91c1c',
  },

  hero: {
    title: 'Água a Pingar? Cano Rebentado?',
    subtitle: 'Serviço ao domicílio em Trás-os-Montes — 24h/7d. Sem quebrar azulejos. Preço dito antes de sair.',
    backgroundImage: '/images-optimized/hero/hero-plumber-portugal.jpg',
    ogImage: '/images-optimized/hero/hero-plumber-portugal.jpg'
  },

  services: [
    { id: 'fuga-agua', label: 'Arranjo Fuga Água', basePrice: 80 },
    { id: 'desentupimento', label: 'Desentupimento', basePrice: 60 },
    { id: 'esquentador', label: 'Instalação Esquentador', basePrice: 150 },
    { id: 'substituicao', label: 'Substituição Canalização', basePrice: 120 },
  ],

  // Pricing Zones - NOVA GRELHA 2026
  pricingZones: [
    // Z1 - Macedo de Cavaleiros + redor
    { zone: 'Z1', name: 'Macedo de Cavaleiros', cities: 'Macedo de Cavaleiros, Torre de Dona Chama', price: '15€', time: '< 30 min' },
    // Z2 - Mirandela, Vila Flor, Alfândega, Carrazeda
    { zone: 'Z2', name: 'Zona 2', cities: 'Mirandela, Vila Flor, Alfândega da Fé, Carrazeda de Ansiães', price: '25€', time: '< 40 min' },
    // Z3 - Bragança, Vinhais, Vimioso, Torre Moncorvo, Mogadouro, Freixo
    { zone: 'Z3', name: 'Zona 3', cities: 'Bragança, Vinhais, Vimioso, Torre de Moncorvo, Mogadouro, Freixo de Espada à Cinta', price: '35€', time: '< 60 min' },
    // Z4 - Miranda do Douro, Foz Côa, S.João Pesqueira, Murça, Valpaços
    { zone: 'Z4', name: 'Zona 4', cities: 'Miranda do Douro, Vila Nova de Foz Côa, São João da Pesqueira, Murça, Valpaços', price: '45€', time: '45-75 min' },
    // Z5 - Vila Real, Alijó, Sabrosa, Tabuaço, Armamar, Régua, Lamego, Sta Marta, Mesão Frio
    { zone: 'Z5', name: 'Zona 5', cities: 'Vila Real, Alijó, Sabrosa, Tabuaço, Armamar, Peso da Régua, Lamego, Santa Marta de Penaguião, Mesão Frio', price: '55€', time: '60-90 min' },
    // Z6 - Chaves, Vila Pouca, Boticas, Montalegre, Ribeira de Pena, Mondim, Moimenta, Sernancelhe, Penedono
    { zone: 'Z6', name: 'Zona 6', cities: 'Chaves, Vila Pouca de Aguiar, Boticas, Montalegre, Ribeira de Pena, Mondim de Basto, Moimenta da Beira, Sernancelhe, Penedono', price: '65€', time: 'Sob marcação' },
  ],

  // NOVO: Urgência + Taxa Horária
  urgencyMultiplier: 1.5,  // +50% pour urgence / fim de semana
  hourlyRate: 70,            // 70€/h

  company: {
    fullName: 'Canalizador Profissional',
    shortDescription: 'Serviço de canalização ao seu domicílio em Trás-os-Montes. Não temos loja — vamos até si.',
    longDescription: 'A Norte Reparos é uma empresa de canalizações que serve toda a região de Trás-os-Montes e Norte de Portugal. Com mais de 10 anos de experiência no terreno, intervimos ao seu domicílio com equipamento profissional de diagnóstico — câmara térmica FLIR, câmara endoscópica de 30 metros e ferramentas calibradas Ridgid. Não temos loja — vamos até si. A sua zona é a nossa zona de trabalho.',
    coverage: 'Trás-os-Montes — Distrito de Bragança, Vila Real, Guarda e Viseu',
    yearEstablished: '2015'
  },

  seo: {
    keywords: [
      'canalizador bragança', 'canalizador mirandela', 'canalizador macedo de cavaleiros',
      'canalizador urgente bragança', 'canalizador 24 horas mirandela', 'canalizador chaves',
      'canalizador vila real', 'canalizador vinhais', 'canalizador miranda do douro',
      'canalizador mogadouro', 'canalizador torre de moncorvo', 'canalizador trás-os-montes',
      'desentupimento bragança', 'desentupimento mirandela', 'desentupir sanita bragança',
      'desentupir wc mirandela', 'fuga de água bragança', 'fuga água urgente mirandela',
      'esquentador bragança', 'esquentador mirandela', 'sanita entupida', 'wc entupido',
      'cano rebentado', 'canalizador profissional trás-os-montes',
      'desentupimento urgente bragança', 'canalizador 24 horas mirandela', 'fuga de água urgente',
      'cano entupido macedo de cavaleiros', 'arranjo caldeira trás-os-montes',
      'desentupir sanita preço', 'canalizador perto de mim bragança',
      'desentupimento esgotos bragança', 'arranjo autoclismo',
      'canalizador urgente chaves', 'desentupimento sanitário mirandela',
      'fuga água parede bragança', 'arranjo esquentador vila real',
      'canalizador emergência 24h', 'desentupimento urgente domingo',
      'canalizador barato trás-os-montes', 'arranjo canalização antiga',
      'desentupimento pia cozinha', 'canalizador para aldeias remotas'
    ],
    ogImage: '/images-optimized/hero/hero-plumber-portugal.jpg'
  },
  // Service routing metadata
  serviceName: 'Canalizador',
  serviceSlug: 'canalizador',

  // Testimonials for Testimonials component
  testimonials: [
    { id: '1', name: 'António Santos', location: 'Bragança', service: 'Desentupimento', rating: 5, text: 'Resolveu o entupimento rapidamente. Profissional e eficiente.' },
    { id: '2', name: 'Maria Ferreira', location: 'Mirandela', service: 'Arranjo Fuga', rating: 5, text: 'Fuga de água resolvida no mesmo dia. Muito satisfeito.' },
    { id: '3', name: 'João Costa', location: 'Vila Real', service: 'Esquentador', rating: 5, text: 'Instalou o esquentador novo. Trabalho limpo e preço justo.' },
    { id: '4', name: 'Rosa Marques', location: 'Chaves', service: 'Canalização', rating: 5, text: 'Profissional confiável. Já recorri várias vezes.' },
    { id: '5', name: 'Pedro Almeida', location: 'Macedo de Cavaleiros', service: 'Urgência', rating: 5, text: 'Cano rebentou à meia-noite e veio rapidamente. Excelente serviço.' },
    { id: '6', name: 'Ana Rodrigues', location: 'Valpaços', service: 'Manutenção', rating: 5, text: 'Manutenção preventiva bem feita. Recomendo.' },
  ],

  // Real stories for RealStories component
  stories: [
    {
      title: 'Fuga de água às 3h da manhã',
      location: 'Bragança',
      situation: 'Cliente acordou com água a inundar a cozinha. Não sabia onde estava a fuga.',
      emotion: 'Pânico total às 3h da manhã',
      solution: 'Chegámos em 40 minutos, detetámos a fuga com câmara e reparámos sem quebrar azulejos.'
    },
    {
      title: 'Esquentador parado em pleno inverno',
      location: 'Mirandela',
      situation: 'Família de 4 pessoas sem água quente a -5°C.',
      emotion: 'Urgência extrema com crianças pequenas',
      solution: 'Diagnóstico rápido, peça substituída e água quente restaurada em 2 horas.'
    },
    {
      title: 'Entupimento crítico no restaurante',
      location: 'Vila Real',
      situation: 'Canos da cozinha totalmente entupidos. Restaurante encerrado.',
      emotion: 'Prejuízo enorme a cada hora fechada',
      solution: 'Máquina profissional Ridgid utilizada. Cano desobstruído em 1h. Restaurante abriu no dia seguinte.'
    }
  ]
};

// Helper function to get local price by zone
export function getLocalPrice(zone: string): string {
  const zoneData = siteConfig.pricingZones.find(z => z.zone === zone);
  return zoneData ? zoneData.price : '15€';
}

// Helper function to get zone for a city
export function getZoneForCity(cityName: string): string {
  const lowerCity = cityName.toLowerCase();
  const zoneMap: Record<string, string> = {
    // Z1
    'macedo de cavaleiros': 'Z1', 'torre de dona chama': 'Z1',
    // Z2
    'mirandela': 'Z2', 'vila flor': 'Z2', 'alfândega da fé': 'Z2', 'carrazeda de ansiães': 'Z2',
    // Z3
    'bragança': 'Z3', 'vinhais': 'Z3', 'vimioso': 'Z3', 'torre de moncorvo': 'Z3',
    'mogadouro': 'Z3', 'freixo de espada à cinta': 'Z3',
    // Z4
    'miranda do douro': 'Z4', 'vila nova de foz côa': 'Z4', 'são joão da pesqueira': 'Z4',
    'murça': 'Z4', 'valpaços': 'Z4',
    // Z5
    'vila real': 'Z5', 'alijó': 'Z5', 'sabrosa': 'Z5', 'tabuaço': 'Z5',
    'armamar': 'Z5', 'peso da régua': 'Z5', 'lamego': 'Z5',
    'santa marta de penaguião': 'Z5', 'mesão frio': 'Z5',
    // Z6
    'chaves': 'Z6', 'vila pouca de aguiar': 'Z6', 'boticas': 'Z6', 'montalegre': 'Z6',
    'ribeira de pena': 'Z6', 'mondim de basto': 'Z6', 'moimenta da beira': 'Z6',
    'sernancelhe': 'Z6', 'penedono': 'Z6',
  };
  return zoneMap[lowerCity] || 'Z3';
}

export function getCurrentSiteConfig(): SiteConfig {
  return siteConfig;
}
