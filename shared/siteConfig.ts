// Configuração para Norte Reparos (Eletricista)
// Zona de intervenção: raio de 100 km em torno de Trás-os-Montes
// Site apenas em português — Preços sem IVA
// NOVA GRELHA TARIFÁRIA 2026
// Urgência: ×1.5 (50%) | Taxa horária: 70€/h

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
 urgencyMultiplier: number;  // 1.5 = +50% pour urgência
 hourlyRate: number;           // 70€/h

 // Real Stories (Interventions)
 stories: Array<{
   title: string;
   location: string;
   situation: string;
   emotion: string;
   solution: string;
 }>;

 // Team / Avatars
 team: Array<{
   name: string;
   role: string;
   location: string;
   bio: string;
   quote: string;
   image: string;
 }>;

 // Testimonials
 testimonials: Array<{
   id: string;
   name: string;
   location: string;
   service: string;
   text: string;
   rating: number;
 }>;

 // Company info
 company: {
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
}

// GRELHA TARIFÁRIA 2026
// Z1: 15€ — Macedo e conselho — < 30 min
// Z2: 25€ — Mirandela, Vila Flor, Alfândega, Carrazeda — < 40 min
// Z3: 35€ — Bragança, Vinhais, Vimioso, Torre Moncorvo, Mogadouro, Freixo — < 60 min
// Z4: 45€ — Miranda do Douro, Foz Côa, S.João Pesqueira, Murça, Valpaços — 45-75 min
// Z5: 55€ — Vila Real, Alijó, Sabrosa, Tabuaço, Armamar, Régua, Lamego, Sta Marta, Mesão Frio — 60-90 min
// Z6: 65€ — Chaves, Vila Pouca, Boticas, Montalegre, Ribeira de Pena, Mondim, Moimenta, Sernancelhe, Penedono — sob marcação
// Urgência: ×1.5 (50% supplement)

export const siteConfig: SiteConfig = {
 id: 'norte-reparos',
 name: 'Eletricista Profissional',
 title: 'Eletricista em Trás-os-Montes | Norte Reparos — Serviço ao Domicílio 24h/7d',
 description: 'Eletricista certificado ao seu domicílio em Trás-os-Montes. Quadros elétricos, curto-circuito, urgências 24h. Orçamento gratuito. Ligue 932 321 892.',
 phone: '932 321 892',
 whatsapp: '351932321892',
 whatsappMessage: 'Olá, preciso de um eletricista em Trás-os-Montes. Podem dar-me um orçamento?',
 email: 'info@eletricista-norte-reparos.pt',
 serviceType: 'Eletricista',
 domain: 'eletricista-norte-reparos.pt',

 colors: {
   primary: '#9a3412',
   primaryDark: '#7c2d12',
   primaryLight: '#c2410c',
   accent: '#b91c1c',
 },

 hero: {
   title: 'Problemas Elétricos? Resolvemos Agora.',
   subtitle: 'Serviço ao domicílio em Trás-os-Montes — 24h/7d. Diagnóstico gratuito. Preço dito antes de sair.',
   backgroundImage: '/images-optimized/hero/hero-electrician-portugal.jpg',
   ogImage: '/images-optimized/hero/hero-electrician-portugal.jpg'
 },

 services: [
   { id: 'quadro-eletrico', label: 'Substituição Quadro Elétrico', basePrice: 200 },
   { id: 'tomadas', label: 'Instalação Tomadas', basePrice: 50 },
   { id: 'curto-circuito', label: 'Arranjo Curto-Circuito', basePrice: 90 },
   { id: 'certificacao', label: 'Certificação elétrica', basePrice: 180 },
 ],

 // Pricing Zones - NOVA GRELHA 2026
 pricingZones: [
   { zone: 'Z1', name: 'Trás-os-Montes', cities: 'Trás-os-Montes, Torre de Dona Chama', price: '15€', time: '< 30 min' },
   { zone: 'Z2', name: 'Zona 2', cities: 'Mirandela, Vila Flor, Alfândega da Fé, Carrazeda de Ansiães', price: '25€', time: '< 40 min' },
   { zone: 'Z3', name: 'Zona 3', cities: 'Bragança, Vinhais, Vimioso, Torre de Moncorvo, Mogadouro, Freixo de Espada à Cinta', price: '35€', time: '< 60 min' },
   { zone: 'Z4', name: 'Zona 4', cities: 'Miranda do Douro, Vila Nova de Foz Côa, São João da Pesqueira, Murça, Valpaços', price: '45€', time: '45-75 min' },
   { zone: 'Z5', name: 'Zona 5', cities: 'Vila Real, Alijó, Sabrosa, Tabuaço, Armamar, Peso da Régua, Lamego, Santa Marta de Penaguião, Mesão Frio', price: '55€', time: '60-90 min' },
   { zone: 'Z6', name: 'Zona 6', cities: 'Chaves, Vila Pouca de Aguiar, Boticas, Montalegre, Ribeira de Pena, Mondim de Basto, Moimenta da Beira, Sernancelhe, Penedono', price: '65€', time: 'Sob marcação' },
 ],

 // NOVO: Urgência + Taxa Horária
 urgencyMultiplier: 1.5,  // +50% pour urgência / fim de semana
 hourlyRate: 70,           // 70€/h

 stories: [
   {
     title: "O Medo do Fogo",
     location: "Trás-os-Montes",
     situation: "Uma tomada na cozinha faz \"Bzzzt\" e solta faísca quando se liga a torradeira.",
     emotion: "Medo de que a casa pegue fogo à noite.",
     solution: "Trocamos a tomada e verificamos os fios por trás. 20 minutos, 35€ tudo incluído."
   },
   {
     title: "O Forno que Dispara",
     location: "Vila Real",
     situation: "O Natal aproxima-se, o Sr. António quer assar o cabrito, mas o disjuntor dispara assim que o forno aquece.",
     emotion: "Frustração, medo de estragar a ceia de Natal.",
     solution: "Diagnóstico potência contador vs consumo forno. Reequilíbrio do quadro."
   },
   {
     title: "O Interruptor Quente",
     location: "Bragança - Centro Histórico",
     situation: "Edifício antigo. O interruptor do corredor está quente ao toque.",
     emotion: "Preocupação difusa, perigo invisível.",
     solution: "Substituição imediata do mecanismo defeituoso (risco real de incêndio)."
   },
   {
     title: "O Apagão Total",
     location: "Aldeia isolada perto de Vinhais",
     situation: "Trovoada, toda a aldeia tem luz menos a casa do Sr. José.",
     emotion: "Isolamento total, arca cheia de carne que se vai estragar.",
     solution: "Intervenção 4x4, arranjo do disjuntor diferencial que \"queimou\" com o raio."
   }
 ],

 team: [],

 testimonials: [
   {
     id: '1',
     name: 'Paulo Mendes',
     location: 'Bragança',
     service: 'Substituição Quadro Elétrico',
     text: 'Quadro elétrico antigo com fusíveis. Substituíram por um moderno com diferenciais. Trabalho impecável, tudo certificado. Agora sinto-me muito mais seguro em casa.',
     rating: 5
   },
   {
     id: '2',
     name: 'Sandra Nunes',
     location: 'Mirandela',
     service: 'Certificação Elétrica',
     text: 'Precisava de certificação para vender a casa. Fizeram inspeção completa, corrigiram pequenos problemas e emitiram certificado em 4 dias. Processo super rápido!',
     rating: 5
   },
   {
     id: '3',
     name: 'Ricardo Ferreira',
     location: 'Trás-os-Montes',
     service: 'Instalação Iluminação LED',
     text: 'Instalaram iluminação LED em toda a casa. Ficou linda e a conta de luz já baixou 60%! Fizeram projeto de iluminação gratuito. Profissionais excelentes.',
     rating: 5
   },
 ],

 company: {
   shortDescription: 'Serviço de eletricidade ao seu domicílio em Trás-os-Montes. Não temos loja — vamos até si.',
   longDescription: 'A  é uma empresa de eletricidade que cobre toda a região de Trás-os-Montes e Norte de Portugal. Com mais de 15 anos de experiência em instalações e urgências elétricas, utilizamos equipamento profissional certificado — multímetro Fluke calibrado e câmara térmica FLIR para diagnósticos precisos. Deslocamo-nos até si. Rápido. Com garantia escrita.',
   coverage: 'Trás-os-Montes — Distrito de Bragança, Vila Real, Guarda e Viseu',
   yearEstablished: '2015'
 },

 seo: {
   keywords: [
     'eletricista bragança', 'eletricista mirandela', 'eletricista macedo de cavaleiros',
     'eletricista urgente bragança', 'eletricista Atendimento 24h/7d mirandela', 'eletricista chaves',
     'eletricista vila real', 'eletricista vinhais', 'eletricista miranda do douro',
     'eletricista mogadouro', 'eletricista torre de moncorvo', 'eletricista trás-os-montes',
     'quadro elétrico bragança', 'quadro elétrico mirandela', 'certificação elétrica bragança',
     'certificação elétrica mirandela', 'curto circuito bragança', 'avaria elétrica mirandela',
     'disjuntor a disparar', 'tomada não funciona', 'eletricista urgente 24h',
     'eletricista profissional', 'certificação elétrica trás-os-montes'
   ],
   ogImage: '/images-optimized/hero/hero-electrician-portugal.jpg'
 }
};

// Helper function to get current site config
export function getCurrentSiteConfig(): SiteConfig {
 return siteConfig;
}
