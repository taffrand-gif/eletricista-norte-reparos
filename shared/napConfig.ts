/**
 * NAP (Name, Address, Phone) Configuration
 * Centralized configuration for business information and city postal codes
 */

export interface CityNAP {
 name: string;
 slug: string;
 postalCode: string;
 district: string;
 addressRegion: string;
}

// Base business information
export const businessInfo = {
 name: '',
 fullName: 'Norte Reparos - Eletricista Profissional',
 phone: '+351 932 321 892',
 phoneFormatted: '932 321 892',
 whatsapp: '351932321892',
 email: 'info@eletricista-norte-reparos.pt',
 domain: 'eletricista-norte-reparos.pt',

 // Base address (géo-neutre, R74 : jamais l'adresse précise)
 baseAddress: {
 streetAddress: 'Trás-os-Montes',
 addressLocality: 'Trás-os-Montes',
 addressRegion: 'Trás-os-Montes',
 postalCode: '',
 addressCountry: 'PT'
 }
};

// Complete city mapping with postal codes (same as Norte Reparos)
export const cityNAPData: Record<string, CityNAP> = {
 // Bragança District
 'alfandega-da-fe': { name: 'Alfândega da Fé', slug: 'alfandega-da-fe', postalCode: '5320-001', district: 'Bragança', addressRegion: 'Bragança' },
 'braganca': { name: 'Bragança', slug: 'braganca', postalCode: '5300-001', district: 'Bragança', addressRegion: 'Bragança' },
 'carrazeda-de-ansiaes': { name: 'Carrazeda de Ansiães', slug: 'carrazeda-de-ansiaes', postalCode: '5150-001', district: 'Bragança', addressRegion: 'Bragança' },
 'freixo-espada-cinta': { name: 'Freixo de Espada à Cinta', slug: 'freixo-espada-cinta', postalCode: '5180-001', district: 'Bragança', addressRegion: 'Bragança' },
 'macedo-cavaleiros': { name: 'Trás-os-Montes', slug: 'macedo-cavaleiros', postalCode: '5340-001', district: 'Bragança', addressRegion: 'Bragança' },
 'macedo-de-cavaleiros': { name: 'Trás-os-Montes', slug: 'macedo-de-cavaleiros', postalCode: '5340-001', district: 'Bragança', addressRegion: 'Bragança' },
 'miranda-douro': { name: 'Miranda do Douro', slug: 'miranda-douro', postalCode: '5210-001', district: 'Bragança', addressRegion: 'Bragança' },
 'mirandela': { name: 'Mirandela', slug: 'mirandela', postalCode: '5370-001', district: 'Bragança', addressRegion: 'Bragança' },
 'mogadouro': { name: 'Mogadouro', slug: 'mogadouro', postalCode: '5200-001', district: 'Bragança', addressRegion: 'Bragança' },
 'torre-moncorvo': { name: 'Torre de Moncorvo', slug: 'torre-moncorvo', postalCode: '5160-001', district: 'Bragança', addressRegion: 'Bragança' },
 'vila-flor': { name: 'Vila Flor', slug: 'vila-flor', postalCode: '5360-001', district: 'Bragança', addressRegion: 'Bragança' },
 'vimioso': { name: 'Vimioso', slug: 'vimioso', postalCode: '5230-001', district: 'Bragança', addressRegion: 'Bragança' },
 'vinhais': { name: 'Vinhais', slug: 'vinhais', postalCode: '5320-001', district: 'Bragança', addressRegion: 'Bragança' },

 // Villages - Bragança District
 'izeda': { name: 'Izeda', slug: 'izeda', postalCode: '5340-201', district: 'Bragança', addressRegion: 'Bragança' },
 'coelhoso': { name: 'Coelhoso', slug: 'coelhoso', postalCode: '5340-101', district: 'Bragança', addressRegion: 'Bragança' },
 'parada': { name: 'Parada', slug: 'parada', postalCode: '5340-401', district: 'Bragança', addressRegion: 'Bragança' },
 'castro-avelas': { name: 'Castro de Avelãs', slug: 'castro-avelas', postalCode: '5300-051', district: 'Bragança', addressRegion: 'Bragança' },
 'gostei': { name: 'Gostei', slug: 'gostei', postalCode: '5300-421', district: 'Bragança', addressRegion: 'Bragança' },
 'grijo-parada': { name: 'Grijó de Parada', slug: 'grijo-parada', postalCode: '5300-431', district: 'Bragança', addressRegion: 'Bragança' },
 'macedo-mato': { name: 'Macedo do Mato', slug: 'macedo-mato', postalCode: '5340-301', district: 'Bragança', addressRegion: 'Bragança' },
 'salsas': { name: 'Salsas', slug: 'salsas', postalCode: '5300-701', district: 'Bragança', addressRegion: 'Bragança' },
 'agrochao': { name: 'Agrochão', slug: 'agrochao', postalCode: '5320-011', district: 'Bragança', addressRegion: 'Bragança' },
 'ervedosa': { name: 'Ervedosa', slug: 'ervedosa', postalCode: '5320-201', district: 'Bragança', addressRegion: 'Bragança' },
 'santalha': { name: 'Santalha', slug: 'santalha', postalCode: '5320-401', district: 'Bragança', addressRegion: 'Bragança' },
 'vale-janeiro': { name: 'Vale de Janeiro', slug: 'vale-janeiro', postalCode: '5320-501', district: 'Bragança', addressRegion: 'Bragança' },
 'agrobom': { name: 'Agrobom', slug: 'agrobom', postalCode: '5320-021', district: 'Bragança', addressRegion: 'Bragança' },
 'cerejais': { name: 'Cerejais', slug: 'cerejais', postalCode: '5320-101', district: 'Bragança', addressRegion: 'Bragança' },

 // Vila Real District
 'alijo': { name: 'Alijó', slug: 'alijo', postalCode: '5070-001', district: 'Vila Real', addressRegion: 'Vila Real' },
 'armamar': { name: 'Armamar', slug: 'armamar', postalCode: '5110-001', district: 'Vila Real', addressRegion: 'Vila Real' },
 'boticas': { name: 'Boticas', slug: 'boticas', postalCode: '5460-001', district: 'Vila Real', addressRegion: 'Vila Real' },
 'chaves': { name: 'Chaves', slug: 'chaves', postalCode: '5400-001', district: 'Vila Real', addressRegion: 'Vila Real' },
 'lamego': { name: 'Lamego', slug: 'lamego', postalCode: '5100-001', district: 'Vila Real', addressRegion: 'Vila Real' },
 'mesao-frio': { name: 'Mesão Frio', slug: 'mesao-frio', postalCode: '5040-001', district: 'Vila Real', addressRegion: 'Vila Real' },
 'mondim-de-basto': { name: 'Mondim de Basto', slug: 'mondim-de-basto', postalCode: '4880-001', district: 'Vila Real', addressRegion: 'Vila Real' },
 'montalegre': { name: 'Montalegre', slug: 'montalegre', postalCode: '5470-001', district: 'Vila Real', addressRegion: 'Vila Real' },
 'murca': { name: 'Murça', slug: 'murca', postalCode: '5090-001', district: 'Vila Real', addressRegion: 'Vila Real' },
 'penedono': { name: 'Penedono', slug: 'penedono', postalCode: '3630-001', district: 'Vila Real', addressRegion: 'Vila Real' },
 'peso-regua': { name: 'Peso da Régua', slug: 'peso-regua', postalCode: '5050-001', district: 'Vila Real', addressRegion: 'Vila Real' },
 'ribeira-pena': { name: 'Ribeira de Pena', slug: 'ribeira-pena', postalCode: '4870-001', district: 'Vila Real', addressRegion: 'Vila Real' },
 'sabrosa': { name: 'Sabrosa', slug: 'sabrosa', postalCode: '5060-001', district: 'Vila Real', addressRegion: 'Vila Real' },
 'santa-marta-penaguiao': { name: 'Santa Marta de Penaguião', slug: 'santa-marta-penaguiao', postalCode: '5030-001', district: 'Vila Real', addressRegion: 'Vila Real' },
 'sao-joao-pesqueira': { name: 'São João da Pesqueira', slug: 'sao-joao-pesqueira', postalCode: '5130-001', district: 'Vila Real', addressRegion: 'Vila Real' },
 'tabuaco': { name: 'Tabuaço', slug: 'tabuaco', postalCode: '5120-001', district: 'Vila Real', addressRegion: 'Vila Real' },
 'valpacos': { name: 'Valpaços', slug: 'valpacos', postalCode: '5430-001', district: 'Vila Real', addressRegion: 'Vila Real' },
 'vila-pouca-aguiar': { name: 'Vila Pouca de Aguiar', slug: 'vila-pouca-aguiar', postalCode: '5450-001', district: 'Vila Real', addressRegion: 'Vila Real' },
 'vila-real': { name: 'Vila Real', slug: 'vila-real', postalCode: '5000-001', district: 'Vila Real', addressRegion: 'Vila Real' },

 // Villages - Vila Real District
 'candedo': { name: 'Candedo', slug: 'candedo', postalCode: '5090-051', district: 'Vila Real', addressRegion: 'Vila Real' },
 'noura': { name: 'Noura', slug: 'noura', postalCode: '5090-201', district: 'Vila Real', addressRegion: 'Vila Real' },
 'palheiros': { name: 'Palheiros', slug: 'palheiros', postalCode: '5090-301', district: 'Vila Real', addressRegion: 'Vila Real' },
 'carrazedo-montenegro': { name: 'Carrazedo de Montenegro', slug: 'carrazedo-montenegro', postalCode: '5430-051', district: 'Vila Real', addressRegion: 'Vila Real' },
 'jou': { name: 'Jou', slug: 'jou', postalCode: '5430-201', district: 'Vila Real', addressRegion: 'Vila Real' },

 // Viseu District
 'moimenta-beira': { name: 'Moimenta da Beira', slug: 'moimenta-beira', postalCode: '3620-001', district: 'Viseu', addressRegion: 'Viseu' },
 'sernancelhe': { name: 'Sernancelhe', slug: 'sernancelhe', postalCode: '3640-001', district: 'Viseu', addressRegion: 'Viseu' },
 'possacos': { name: 'Possacos', slug: 'possacos', postalCode: '5430-301', district: 'Viseu', addressRegion: 'Viseu' },
 'santa-valha': { name: 'Santa Valha', slug: 'santa-valha', postalCode: '5430-401', district: 'Viseu', addressRegion: 'Viseu' },
 'vassal': { name: 'Vassal', slug: 'vassal', postalCode: '5430-501', district: 'Viseu', addressRegion: 'Viseu' },
 'vales': { name: 'Vales', slug: 'vales', postalCode: '5430-601', district: 'Viseu', addressRegion: 'Viseu' },
 'gebelim': { name: 'Gebelim', slug: 'gebelim', postalCode: '5320-301', district: 'Viseu', addressRegion: 'Viseu' },
 'sambade': { name: 'Sambade', slug: 'sambade', postalCode: '5320-451', district: 'Viseu', addressRegion: 'Viseu' },

 // Guarda District
 'vila-nova-foz-coa': { name: 'Vila Nova de Foz Côa', slug: 'vila-nova-foz-coa', postalCode: '5150-610', district: 'Guarda', addressRegion: 'Guarda' },
 'almendra': { name: 'Almendra', slug: 'almendra', postalCode: '5150-011', district: 'Guarda', addressRegion: 'Guarda' },
 'castelo-melhor': { name: 'Castelo Melhor', slug: 'castelo-melhor', postalCode: '5150-101', district: 'Guarda', addressRegion: 'Guarda' },
 'cedovim': { name: 'Cedovim', slug: 'cedovim', postalCode: '5150-201', district: 'Guarda', addressRegion: 'Guarda' }
};

/**
 * Get NAP data for a specific city
 */
export function getCityNAP(citySlug: string): CityNAP | null {
 return cityNAPData[citySlug] || null;
}

/**
 * Get complete address for a city
 */
export function getCityAddress(citySlug: string) {
 const city = getCityNAP(citySlug);
 if (!city) return businessInfo.baseAddress;

 return {
 streetAddress: `${city.name}, Distrito de ${city.district}`,
 addressLocality: city.name,
 addressRegion: city.addressRegion,
 postalCode: city.postalCode,
 addressCountry: 'PT'
 };
}

/**
 * Get all cities by district
 */
export function getCitiesByDistrict(district: string): CityNAP[] {
 return Object.values(cityNAPData).filter(city => city.district === district);
}
