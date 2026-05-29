// Configuração para Staff-Seekers (Eletricista)
// Zona de intervenção: raio de 100 km em torno de Macedo de Cavaleiros, distrito de Bragança, Portugal
// Site apenas em português — Preços sem IVA

export type SiteId = 'staff-seekers';

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
 image: string; // path to image
 }>;

 // Pricing Zones
 pricingZones: Array<{
 name: string;
 cities: string;
 price: string;
 time: string;
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
}

export const siteConfig: SiteConfig = {
 id: 'staff-seekers',
 name: 'Eletricista Profissional',
 title: 'Eletricista Urgente Trás-os-Montes ⚡ 24h | 932 321 892',
 description: 'Problemas elétricos? Respondemos em menos de 1h em Bragança, Macedo, Mirandela e Vila Real. Orçamento sem compromisso. Ligue agora: 932 321 892',
 phone: '932 321 892',
 whatsapp: '351932321892',
 whatsappMessage: 'Olá, preciso de um eletricista em Trás-os-Montes. Podem dar-me um orçamento?',
 email: 'info@eletricista-norte-reparos.pt',
 serviceType: 'Eletricista',
 domain: 'eletricista-norte-reparos.pt',
 
 colors: {
 primary: '#9a3412', // Orange 800 — WCAG AA compliant with white text
 primaryDark: '#7c2d12', // Orange 900
 primaryLight: '#c2410c', // Orange 700
 accent: '#b91c1c', // Red 700 for urgent CTAs
 },
 
 hero: {
 title: 'Sem Luz em Casa? Chegamos em 40 Minutos.',
 subtitle: 'Avaria elétrica, disjuntor a disparar, curto-circuito. Diagnóstico gratuito. Preço fixo dito ao telefone antes de sair.',
 backgroundImage: '/images-optimized/hero/hero-electrician-portugal.jpg',
 ogImage: '/images-optimized/hero/hero-electrician-portugal.jpg'},
 
 services: [
 { id: 'quadro-eletrico', label: 'Substituição Quadro Elétrico', basePrice: 200 },
 { id: 'tomadas', label: 'Instalação Tomadas', basePrice: 50 },
 { id: 'curto-circuito', label: 'Arranjo Curto-Circuito', basePrice: 90 },
 { id: 'certificacao', label: 'certificação elétrica', basePrice: 180 },
 ],

 stories: [
 {
 title: "O Medo do Fogo",
 location: "Macedo de Cavaleiros",
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

 pricingZones: [
 { name: "Zona 1 (Sede)", cities: "Macedo de Cavaleiros e concelho", price: "15€", time: "< 30 min" },
 { name: "Zona 2 (Próximo)", cities: "Vila Flor, Alfândega da Fé, Mirandela, Carrazeda de Ansiães", price: "25€", time: "< 40 min" },
 { name: "Zona 3 (Distrito Bragança)", cities: "Bragança, Vinhais, Vimioso, Torre de Moncorvo, Mogadouro, Freixo de Espada à Cinta", price: "35€", time: "< 60 min" },
 { name: "Zona 4 (Miranda / Douro)", cities: "Miranda do Douro, Vila Nova de Foz Côa, São João da Pesqueira, Murça, Valpaços", price: "45€", time: "45-75 min" },
 { name: "Zona 5 (Vila Real / Douro)", cities: "Vila Real, Alijó, Sabrosa, Tabuaço, Armamar, Peso da Régua, Lamego, Santa Marta de Penaguião, Mesão Frio", price: "55€", time: "60-90 min" },
 { name: "Zona 6 (Limite 100km)", cities: "Chaves, Vila Pouca de Aguiar, Boticas, Montalegre, Ribeira de Pena, Mondim de Basto, Moimenta da Beira, Sernancelhe, Penedono", price: "65€", time: "Sob marcação" },
 ],
 
 testimonials: [
 {
 id: '1',
 name: 'Paulo Mendes',
 location: 'Bragança',
 service: 'Substituição Quadro Elétrico',
 text: 'Quadro elétrico antigo com fusíveis. Substituíram por um moderno com diferenciais. Trabalho impecável, tudo certificado. Agora sinto-me muito mais seguro em casa.',
 rating: 5},
 {
 id: '2',
 name: 'Sandra Nunes',
 location: 'Mirandela',
 service: 'Certificação Elétrica ',
 text: 'Precisava de certificação para vender a casa. Fizeram inspeção completa, corrigiram pequenos problemas e emitiram certificado em 4 dias. Processo super rápido!',
 rating: 5},
 {
 id: '3',
 name: 'Ricardo Ferreira',
 location: 'Macedo de Cavaleiros',
 service: 'Instalação Iluminação LED',
 text: 'Instalaram iluminação LED em toda a casa. Ficou linda e a conta de luz já baixou 60%! Fizeram projeto de iluminação gratuito. Profissionais excelentes.',
 rating: 5},
 ],
 
 company: {
 fullName: 'Eletricista Profissional — Eletricista Profissional',
 shortDescription: 'Eletricista certificado ao seu serviço em Trás-os-Montes.',
 longDescription: 'A Eletricista Profissional presta serviços de eletricidade profissional em toda a região de Trás-os-Montes. Instalação, assistência e manutenção técnica de sistemas elétricos, com deslocação ao domicílio dos clientes, todos os dias do ano, incluindo fins de semana e feriados.',
 coverage: 'Trás-os-Montes — Distrito de Bragança e região',
 yearEstablished: '2015'},
 
 seo: {
 keywords: [
 'eletricista bragança', 'eletricista mirandela', 'eletricista macedo de cavaleiros',
 'eletricista urgente bragança', 'eletricista 24 horas mirandela', 'eletricista chaves',
 'eletricista vila real', 'eletricista vinhais', 'eletricista miranda do douro',
 'eletricista mogadouro', 'eletricista torre de moncorvo', 'eletricista trás-os-montes',
 'quadro elétrico bragança', 'quadro elétrico mirandela', 'certificação elétrica bragança',
 'certificação elétrica mirandela', 'curto circuito bragança', 'avaria elétrica mirandela',
 'disjuntor a disparar', 'tomada não funciona', 'eletricista urgente 24h',
 'eletricista profissional', 'certificação elétrica trás-os-montes'
 ],
 ogImage: '/images-optimized/hero/hero-electrician-portugal.jpg'}};

// Helper function to get current site config
export function getCurrentSiteConfig(): SiteConfig {
 return siteConfig;
}