import { CITIES } from './serviceConfig';

export interface Service {
 slug: string;
 name: string;
 basePrice: number;
 icon: string;
 description: string;
}

export interface CityServicePage {
 citySlug: string;
 cityName: string;
 serviceSlug: string;
 serviceName: string;
 url: string;
 priority: number;
}

export const SERVICES_: Service[] = [
 {
 slug: 'quadros-eletricos',
 name: 'Quadros Elétricos',
 basePrice: 250,
 icon: '⚡',
 description: 'Modernização e instalação de quadros elétricos'
 },
 {
 slug: 'tomadas-interruptores',
 name: 'Tomadas e Interruptores',
 basePrice: 35,
 icon: '🔌',
 description: 'Instalação e arranjo de tomadas e interruptores'
 },
 {
 slug: 'iluminacao',
 name: 'Iluminação',
 basePrice: 40,
 icon: '💡',
 description: 'Instalação de iluminação LED e candeeiros'
 },
 {
 slug: 'avarias-urgentes',
 name: 'Avarias Urgentes',
 basePrice: 100,
 icon: '🚨',
 description: 'Arranjo urgente 24h de curto-circuitos e avarias elétricas'
 },
];

// Generate all city × service combinations
export function generateCityServiceMatrix(): CityServicePage[] {
 const matrix: CityServicePage[] = [];

 CITIES.forEach(city => {
 SERVICES_.forEach(service => {
 matrix.push({
 citySlug: city.slug,
 cityName: city.name,
 serviceSlug: service.slug,
 serviceName: service.name,
 url: `/${service.slug}-${city.slug}`,
 priority: calculatePriority(city, service)});
 });
 });

 return matrix;
}

function calculatePriority(city: any, service: Service): number {
 let priority = 0.7;

 // Boost for major cities (no parentCity = main city)
 if (!city.parentCity) {
 priority += 0.1;
 }

 // Boost for high-demand services
 if (['avarias-urgentes'].includes(service.slug)) {
 priority += 0.05;
 }

 // Extra boost for Bragança, Mirandela, Macedo
 if (['braganca', 'mirandela', 'macedo-de-cavaleiros'].includes(city.slug)) {
 priority += 0.05;
 }

 return Math.min(priority, 0.9);
}

export function getCityServiceData(serviceSlug: string, citySlug: string) {
 const city = CITIES.find(c => c.slug === citySlug);
 const service = SERVICES_.find(s => s.slug === serviceSlug);

 if (!city || !service) return null;

 return {
 city,
 service,
 url: `/${serviceSlug}-${citySlug}`,
 priority: calculatePriority(city, service)};
}
