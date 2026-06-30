// Configuração para Norte-Reparos - Eletricista
// Site eletricista-norte-reparos.pt
// Preços sem IVA - NOVA GRELHA TARIFÁRIA 2026
// Z1-Z6 com preços de deslocação + taxa horária 70€/h
// Surcharge urgência: 50% (×1.5)

export type SiteId = 'norte-reparos' | 'eletricista-norte-reparos';

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
 urgencyMultiplier: number; // 1.5 = +50% pour urgence
 hourlyRate: number; // 70€/h

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
// Z1: 15€ — Macedo e conselho — < resposta prioritária
// Z2: 25€ — Mirandela, Vila Flor, Alfândega, Carrazeda — < resposta prioritária
// Z3: 35€ — Bragança, Vinhais, Vimioso, Torre Moncorvo, Mogadouro, Freixo — < resposta prioritária
// Z4: 45€ — Miranda do Douro, Foz Côa, S.João Pesqueira, Murça, Valpaços — 45-resposta prioritária
// Z5: 55€ — Vila Real, Alijó, Sabrosa, Tabuaço, Armamar, Régua, Lamego, Sta Marta, Mesão Frio — 60-resposta prioritária
// Z6: 65€ — Chaves, Vila Pouca, Boticas, Montalegre, Ribeira de Pena, Mondim, Moimenta, Sernancelhe, Penedono — sob marcação
// Urgência: ×1.5 (50% supplement)
// Taxa horária: 70€/h

export const siteConfig: SiteConfig = {
 id: 'eletricista-norte-reparos',
 name: 'Eletricista Profissional',
 title: 'Eletricista para instalação, certificação e remodelação em Trás-os-Montes | Norte Reparos',
 description: 'Eletricista para instalação, certificação e remodelação em Trás-os-Montes. Orçamento por escrito em 48h, garantia 1 ano. Bragança, Vila Real, Mirandela, Chaves.',
 phone: '932 321 892',
 whatsapp: '351932321892',
 whatsappMessage: 'Olá, preciso de um eletricista em Trás-os-Montes. Podem dar-me um orçamento?',
 email: 'info@eletricista-norte-reparos.pt',
 serviceType: 'Eletricista',
 domain: 'eletricista-norte-reparos.pt',
 colors: {
 primary: '#1e3a8a',
 primaryDark: '#1e293b',
 primaryLight: '#1e40af',
 accent: '#b91c1c',
 },

 hero: {
 title: 'Eletricista para instalação e certificação — Trás-os-Montes',
 subtitle: 'Instalação, remodelação e certificação elétrica ao seu domicílio. Orçamento por escrito em 48h, garantia 1 ano.',
 backgroundImage: '/images-optimized/hero/hero-electrician-portugal.jpg',
 ogImage: '/images-optimized/hero/hero-electrician-portugal.jpg'
 },

 services: [
 { id: 'avaria-eletrica', label: 'Reparação Avaria Elétrica', basePrice: 80 },
 { id: 'quadro-eletrico', label: 'Quadro Elétrico', basePrice: 250 },
 { id: 'instalacao-eletrica', label: 'Instalação Elétrica', basePrice: 200 },
 { id: 'iluminacao-led', label: 'Iluminação LED', basePrice: 75 },
 ],

 // Pricing Zones - NOVA GRELHA 2026
 pricingZones: [
 // Z1 - Macedo de Cavaleiros + redor
 { zone: 'Z1', name: 'Macedo de Cavaleiros', cities: 'Macedo de Cavaleiros, Torre de Dona Chama', price: '15€', time: 'A confirmar' },
 // Z2 - Mirandela, Vila Flor, Alfândega, Carrazeda
 { zone: 'Z2', name: 'Zona 2', cities: 'Mirandela, Vila Flor, Alfândega da Fé, Carrazeda de Ansiães', price: '25€', time: 'A confirmar' },
 // Z3 - Bragança, Vinhais, Vimioso, Torre Moncorvo, Mogadouro, Freixo
 { zone: 'Z3', name: 'Zona 3', cities: 'Bragança, Vinhais, Vimioso, Torre de Moncorvo, Mogadouro, Freixo de Espada à Cinta', price: '35€', time: 'A confirmar' },
 // Z4 - Miranda do Douro, Foz Côa, S.João Pesqueira, Murça, Valpaços
 { zone: 'Z4', name: 'Zona 4', cities: 'Miranda do Douro, Vila Nova de Foz Côa, São João da Pesqueira, Murça, Valpaços', price: '45€', time: 'A confirmar' },
 // Z5 - Vila Real, Alijó, Sabrosa, Tabuaço, Armamar, Régua, Lamego, Sta Marta, Mesão Frio
 { zone: 'Z5', name: 'Zona 5', cities: 'Vila Real, Alijó, Sabrosa, Tabuaço, Armamar, Peso da Régua, Lamego, Santa Marta de Penaguião, Mesão Frio', price: '55€', time: 'A confirmar' },
 // Z6 - Chaves, Vila Pouca, Boticas, Montalegre, Ribeira de Pena, Mondim, Moimenta, Sernancelhe, Penedono
 { zone: 'Z6', name: 'Zona 6', cities: 'Chaves, Vila Pouca de Aguiar, Boticas, Montalegre, Ribeira de Pena, Mondim de Basto, Moimenta da Beira, Sernancelhe, Penedono', price: '65€', time: 'Sob marcação' },
 ],

 // NOVO: Urgência + Taxa Horária
 urgencyMultiplier: 1.5, // +50% pour urgence / fim de semana
 hourlyRate: 70, // 70€/h

 company: {
 fullName: 'Eletricista Profissional',
 shortDescription: 'Serviço de eletricidade ao seu domicílio em Trás-os-Montes. Não temos loja — vamos até si.',
 longDescription: 'A Norte Reparos é uma empresa de instalações elétricas que serve toda a região de Trás-os-Montes e Norte de Portugal. Com mais de 10 anos de experiência no terreno, intervimos ao seu domicílio com equipamento profissional de diagnóstico — multímetro Fluke, câmara térmica FLIR, ferramentas calibradas e formação adequada. Não temos loja — vamos até si. A sua zona é a nossa zona de trabalho.',
 coverage: 'Trás-os-Montes — Distrito de Bragança, Vila Real, Guarda e Viseu',
 yearEstablished: '2015'
 },

 seo: {
 keywords: [
 'eletricista bragança', 'eletricista mirandela', 'eletricista macedo de cavaleiros',
 'eletricista urgente bragança', 'eletricista 24 horas mirandela', 'eletricista chaves',
 'eletricista vila real', 'eletricista vinhais', 'eletricista miranda do douro',
 'eletricista mogadouro', 'eletricista torre de moncorvo', 'eletricista trás-os-montes',
 'avaria elétrica bragança', 'avaria elétrica mirandela', 'disjuntor dispara bragança',
 'quadro elétrico mirandela', 'curto-circuito urgente',
 'instalação elétrica bragança', 'instalação elétrica mirandela', 'tomada avariada',
 'eletricista profissional trás-os-montes',
 'avaria elétrica urgente bragança', 'eletricista 24 horas mirandela',
 'eletricista urgente macedo de cavaleiros', 'arranjo quadro elétrico trás-os-montes',
 'preço eletricista bragança', 'eletricista perto de mim bragança',
 'substituição quadro elétrico bragança',
 'eletricista urgente chaves', 'instalação elétrica mirandela',
 'avaria quadro elétrico bragança', 'arranjo disjuntor vila real',
 'eletricista emergência 24h', 'avaria elétrica urgente domingo',
 'eletricista barato trás-os-montes', 'instalação elétrica antiga',
 'iluminação LED cozinha', 'eletricista para aldeias remotas',
 'quadro elétrico dispara',
 'instalação elétrica casa antiga', 'tomadas e interruptores'
 ],
 ogImage: '/images-optimized/hero/hero-electrician-portugal.jpg'
 },
 // Service routing metadata
 serviceName: 'Eletricista',
 serviceSlug: 'eletricista',

 // Testimonials for Testimonials component
 testimonials: [
 ],

 // Real stories for RealStories component
 stories: [
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
