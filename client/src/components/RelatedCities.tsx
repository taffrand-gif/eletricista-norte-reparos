import React from 'react';
// Componente RelatedCities - Mostra as cidades relacionadas para o maillage interno SEO
import { Link } from 'wouter';
// memo removed from 'react';
interface RelatedCitiesProps {
 currentCity: string;
 currentCitySlug: string;
}
function RelatedCities({ currentCity, currentCitySlug }: RelatedCitiesProps) {
 // Lista das cidades com seus slugs e regiões
 const allCities = [
 { name: 'Bragança', slug: 'eletricista-braganca', region: 'Bragança' },
 { name: 'Chaves', slug: 'eletricista-chaves', region: 'Vila Real' },
 { name: 'Mirandela', slug: 'eletricista-mirandela', region: 'Bragança' },
 { name: 'Vila Real', slug: 'eletricista-vila-real', region: 'Vila Real' },
 { name: 'Macedo de Cavaleiros', slug: 'eletricista-macedo-cavaleiros', region: 'Bragança' },
 { name: 'Valpaços', slug: 'eletricista-valpacos', region: 'Vila Real' },
 { name: 'Mogadouro', slug: 'eletricista-mogadouro', region: 'Bragança' },
 { name: 'Torre de Moncorvo', slug: 'eletricista-torre-moncorvo', region: 'Bragança' },
 { name: 'Freixo de Espada à Cinta', slug: 'eletricista-freixo-espada-cinta', region: 'Bragança' },
 { name: 'Miranda do Douro', slug: 'eletricista-miranda-douro', region: 'Bragança' },
 { name: 'Vinhais', slug: 'eletricista-vinhais', region: 'Bragança' },
 { name: 'Alfândega da Fé', slug: 'eletricista-alfandega-da-fe', region: 'Bragança' },
 { name: 'Vila Flor', slug: 'eletricista-vila-flor', region: 'Bragança' },
 { name: 'Carrazeda de Ansiães', slug: 'eletricista-carrazeda-de-ansiaes', region: 'Bragança' },
 { name: 'Vimioso', slug: 'eletricista-vimioso', region: 'Bragança' },
 { name: 'Montalegre', slug: 'eletricista-montalegre', region: 'Vila Real' },
 { name: 'Boticas', slug: 'eletricista-boticas', region: 'Vila Real' },
 { name: 'Murça', slug: 'eletricista-murca', region: 'Vila Real' },
 { name: 'Alijó', slug: 'eletricista-alijo', region: 'Vila Real' },
 { name: 'Sabrosa', slug: 'eletricista-sabrosa', region: 'Vila Real' },
 { name: 'Vila Pouca de Aguiar', slug: 'eletricista-vila-pouca-de-aguiar', region: 'Vila Real' },
 { name: 'Ribeira de Pena', slug: 'eletricista-ribeira-de-pena', region: 'Vila Real' },
 { name: 'Mondim de Basto', slug: 'eletricista-mondim-de-basto', region: 'Vila Real' },
 { name: 'Peso da Régua', slug: 'eletricista-peso-da-regua', region: 'Vila Real' },
 { name: 'Lamego', slug: 'eletricista-lamego', region: 'Viseu' },
 { name: 'Moimenta da Beira', slug: 'eletricista-moimenta-da-beira', region: 'Viseu' },
 { name: 'Vila Nova de Foz Côa', slug: 'eletricista-vila-nova-foz-coa', region: 'Guarda' },
 { name: 'Sernancelhe', slug: 'eletricista-sernancelhe', region: 'Viseu' },
 { name: 'Penedono', slug: 'eletricista-penedono', region: 'Viseu' },
 { name: 'São João da Pesqueira', slug: 'eletricista-sao-joao-da-pesqueira', region: 'Viseu' },
 { name: 'Tabuaço', slug: 'eletricista-tabuaco', region: 'Viseu' },
 { name: 'Armamar', slug: 'eletricista-armamar', region: 'Viseu' },
 { name: 'Santa Marta de Penaguião', slug: 'eletricista-santa-marta-de-penaguiao', region: 'Vila Real' },
 { name: 'Mesão Frio', slug: 'eletricista-mesao-frio', region: 'Vila Real' },
 ];
 // Filtrar para excluir a cidade atual
 const relatedCities = allCities
 .filter(city => city.slug !== currentCitySlug)
 .sort(() => Math.random() - 0.5)
 .slice(0, 6);
 if (relatedCities.length === 0) return null;
 return (
 <section className="py-12 bg-gray-50">
 <div className="container mx-auto px-4">
 <div className="text-center mb-8">
 <h2 className="text-3xl font-bold text-gray-900 mb-2">
 Também servimos:
 </h2>
 <p className="text-gray-600">
 Eletricista profissional em outras cidades de Trás-os-Montes
 </p>
 </div>
 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
 {relatedCities.map((city) => (
 <Link 
 key={city.slug}
 href={`/${city.slug}`}
 className="group"
 >
 <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow cursor-pointer border border-gray-200 hover:border-orange-500">
 <div className="mb-4">
 <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-orange-200 transition-colors">
 <span className="text-orange-600 text-xl font-bold">
 {city.name.charAt(0)}
 </span>
 </div>
 </div>
 <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-orange-700 transition-colors">
 {city.name}
 </h3>
 <p className="text-gray-500 text-sm">
 Eletricista em {city.name}
 </p>
 <div className="mt-4">
 <span className="inline-block px-3 py-1 bg-orange-50 text-orange-700 text-xs font-medium rounded-full">
 {city.region}
 </span>
 </div>
 </div>
 </Link>
 ))}
 </div>
 <div className="text-center mt-8">
 <p className="text-gray-600 text-sm">
 <strong>SEO Tip:</strong> Links internos ajudam o Google a entender a estrutura do site e melhoram a autoridade das páginas.
 </p>
 </div>
 </div>
 </section>
 );
}
export default React.memo(RelatedCities);
