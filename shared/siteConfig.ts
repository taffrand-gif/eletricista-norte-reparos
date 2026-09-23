// Configuração para Norte-Reparos - Eletricista
// Site eletricista-norte-reparos.pt
// Preços sem IVA - NOVA GRELHA TARIFÁRIA 2026
// Grelha única: 70€/h + 30€ (dias úteis 9h–17h) · 100€/h + 50€ (noite, fins de semana, feriados)

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
 urgencyMultiplier: number; // fator mão de obra noite/fim de semana/feriado (100/70)
 hourlyRate: number; // 70€/h (dias úteis)

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
// Grelha única 2026-09-23: dias úteis 9h–17h = 70€/h + deslocação 30€ ;
// noite (17h–9h), fins de semana, feriados = 100€/h + deslocação 50€. Cada hora começada é devida.

export const siteConfig: SiteConfig = {
 id: 'eletricista-norte-reparos',
 name: 'Eletricista Profissional',
 title: 'Eletricista para instalação, reparação e remodelação em Trás-os-Montes | Norte Reparos',
 description: 'Eletricista para instalação, reparação e remodelação em Trás-os-Montes. Orçamento por escrito em 48h, garantia 1 ano. Bragança, Vila Real, Mirandela, Chaves.',
 phone: '932 321 892',
 whatsapp: '351932321892',
 whatsappMessage: 'Olá, preciso de um eletricista em Trás-os-Montes. Podem dar-me um orçamento?',
 email: 'geral@eletricista-norte-reparos.pt',
 serviceType: 'Eletricista',
 domain: 'eletricista-norte-reparos.pt',
 colors: {
 primary: '#1e3a8a',
 primaryDark: '#1e293b',
 primaryLight: '#1e40af',
 accent: '#b91c1c',
 },

 hero: {
 title: 'Eletricista para instalação e reparação — Trás-os-Montes',
 subtitle: 'Instalação, remodelação e diagnóstico elétrico ao seu domicílio. Orçamento por escrito em 48h, garantia 1 ano.',
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
 // Grelha única 2026-09-23 — deslocação independente da localidade
 { zone: 'DIA', name: 'Dias úteis 9h–17h', cities: 'Todas as localidades servidas', price: '30€', time: 'Mão de obra 70€/h' },
 { zone: 'NOITE', name: 'Noite (17h–9h), fins de semana e feriados', cities: 'Todas as localidades servidas', price: '50€', time: 'Mão de obra 100€/h' },
 ],

 // NOVO: Urgência + Taxa Horária
 urgencyMultiplier: 100 / 70, // 100€/h noite / fim de semana / feriado
 hourlyRate: 70, // 70€/h dias úteis

 company: {
 fullName: 'Eletricista Profissional',
 shortDescription: 'Serviço de eletricidade ao seu domicílio em Trás-os-Montes. Não temos loja — vamos até si.',
 longDescription: 'A Norte Reparos é uma empresa de instalações elétricas que serve toda a região de Trás-os-Montes e Norte de Portugal. Com 20 anos de experiência no terreno, intervimos ao seu domicílio com equipamento profissional de diagnóstico — multímetro Fluke, câmara térmica FLIR, ferramentas calibradas e formação adequada. Não temos loja — vamos até si. A sua zona é a nossa zona de trabalho.',
 coverage: 'Trás-os-Montes — Distrito de Bragança, Vila Real, Guarda e Viseu',
 yearEstablished: '2015'
 },

 seo: {
 keywords: [
 'eletricista bragança', 'eletricista mirandela', 'eletricista macedo de cavaleiros',
 'iluminação LED bragança', 'remodelação elétrica mirandela', 'eletricista chaves',
 'eletricista vila real', 'eletricista vinhais', 'eletricista miranda do douro',
 'eletricista mogadouro', 'eletricista torre de moncorvo', 'eletricista trás-os-montes',
 'avaria elétrica bragança', 'avaria elétrica mirandela', 'disjuntor dispara bragança',
 'quadro elétrico mirandela', 'diagnóstico elétrico trás-os-montes',
 'instalação elétrica bragança', 'instalação elétrica mirandela', 'tomada avariada',
 'eletricista profissional trás-os-montes',
 'reparação avaria elétrica bragança', 'iluminação LED mirandela',
 'instalação elétrica macedo de cavaleiros', 'arranjo quadro elétrico trás-os-montes',
 'preço eletricista bragança', 'eletricista perto de mim bragança',
 'substituição quadro elétrico bragança',
 'instalação elétrica chaves', 'quadro elétrico chaves',
 'avaria quadro elétrico bragança', 'arranjo disjuntor vila real',
 'orçamento eletricista trás-os-montes', 'remodelação elétrica bragança',
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
 return zoneData ? zoneData.price : '30€';
}

// Helper function to get zone for a city
export function getZoneForCity(cityName: string): string {
 void cityName; // preço único: a deslocação não depende da localidade
 return 'DIA';
}

export function getCurrentSiteConfig(): SiteConfig {
 return siteConfig;
}
