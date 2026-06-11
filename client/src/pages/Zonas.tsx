// Página SEO: Zona de Intervenção - Eletricista em Trás-os-Montes
// Lista completa das 34 cidades servidas com distâncias desde Trás-os-Montes
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useSite } from '@/contexts/SiteContext';
import { useEffect } from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';
interface City {
 name: string;
 distance: string;
 slug: string;
}
const districts = {
 braganca: {
 name: 'Distrito de Bragança',
 cities: [
 { name: 'Bragança', distance: '45 km', slug: 'braganca' },
 { name: 'Trás-os-Montes', distance: '0 km', slug: 'macedo-cavaleiros' },
 { name: 'Mirandela', distance: '35 km', slug: 'mirandela' },
 { name: 'Miranda do Douro', distance: '60 km', slug: 'miranda-douro' },
 { name: 'Mogadouro', distance: '60 km', slug: 'mogadouro' },
 { name: 'Vinhais', distance: '55 km', slug: 'vinhais' },
 { name: 'Torre de Moncorvo', distance: '50 km', slug: 'torre-moncorvo' },
 { name: 'Freixo de Espada à Cinta', distance: '65 km', slug: 'freixo-espada-cinta' },
 { name: 'Alfândega da Fé', distance: '30 km', slug: 'alfandega-da-fe' },
 { name: 'Vila Flor', distance: '25 km', slug: 'vila-flor' },
 { name: 'Carrazeda de Ansiães', distance: '45 km', slug: 'carrazeda-de-ansiaes' },
 { name: 'Vimioso', distance: '55 km', slug: 'vimioso' },
 ] as City[]},
 vilaReal: {
 name: 'Distrito de Vila Real',
 cities: [
 { name: 'Vila Real', distance: '85 km', slug: 'vila-real' },
 { name: 'Chaves', distance: '95 km', slug: 'chaves' },
 { name: 'Valpaços', distance: '70 km', slug: 'valpacos' },
 { name: 'Murça', distance: '55 km', slug: 'murca' },
 { name: 'Alijó', distance: '60 km', slug: 'alijo' },
 { name: 'Sabrosa', distance: '70 km', slug: 'sabrosa' },
 { name: 'Vila Pouca de Aguiar', distance: '80 km', slug: 'vila-pouca-de-aguiar' },
 { name: 'Ribeira de Pena', distance: '95 km', slug: 'ribeira-de-pena' },
 { name: 'Mondim de Basto', distance: '100 km', slug: 'mondim-de-basto' },
 { name: 'Peso da Régua', distance: '85 km', slug: 'peso-da-regua' },
 { name: 'Santa Marta de Penaguião', distance: '80 km', slug: 'santa-marta-de-penaguiao' },
 { name: 'Mesão Frio', distance: '90 km', slug: 'mesao-frio' },
 ] as City[]},
 viseuGuarda: {
 name: 'Distrito de Viseu / Guarda',
 cities: [
 { name: 'Lamego', distance: '90 km', slug: 'lamego' },
 { name: 'Moimenta da Beira', distance: '85 km', slug: 'moimenta-da-beira' },
 { name: 'São João da Pesqueira', distance: '55 km', slug: 'sao-joao-da-pesqueira' },
 { name: 'Tabuaço', distance: '65 km', slug: 'tabuaco' },
 { name: 'Armamar', distance: '75 km', slug: 'armamar' },
 { name: 'Sernancelhe', distance: '80 km', slug: 'sernancelhe' },
 { name: 'Penedono', distance: '75 km', slug: 'penedono' },
 { name: 'Vila Nova de Foz Côa', distance: '55 km', slug: 'vila-nova-foz-coa' },
 ] as City[]}};
export default function Zonas() {
 const { config } = useSite();
 useEffect(() => {
 document.title = 'Zona de Intervenção - Eletricista em Trás-os-Montes | 34 Cidades Servidas';
 let metaDescription = document.querySelector('meta[name="description"]');
 if (!metaDescription) {
 metaDescription = document.createElement('meta');
 metaDescription.setAttribute('name', 'description');
 document.head.appendChild(metaDescription);
 }
 metaDescription.setAttribute(
 'content',
 'Eletricista profissional em 34 cidades de Trás-os-Montes. 130km de Cavaleiros. Serviço rápido em Bragança, Vila Real, Chaves, Mirandela e toda a região.'
 );
 let canonical = document.querySelector('link[rel="canonical"]');
 if (!canonical) {
 canonical = document.createElement('link');
 canonical.setAttribute('rel', 'canonical');
 document.head.appendChild(canonical);
 }
 canonical.setAttribute('href', 'https://eletricista-norte-reparos.pt/zonas');
 // Schema.org ServiceArea
 const schemaScript = document.createElement('script');
 schemaScript.type = 'application/ld+json';
 schemaScript.text = JSON.stringify({
 '@context': 'https://schema.org',
 '@type': 'Service',
 name: 'Eletricista Profissional em Trás-os-Montes',
 provider: {
 '@type': 'LocalBusiness',
 name: '',
 telephone: config.phone},
 areaServed: [
 ...districts.braganca.cities.map((city) => ({
 '@type': 'City',
 name: city.name,
 containedInPlace: {
 '@type': 'AdministrativeArea',
 name: 'Bragança'}})),
 ...districts.vilaReal.cities.map((city) => ({
 '@type': 'City',
 name: city.name,
 containedInPlace: {
 '@type': 'AdministrativeArea',
 name: 'Vila Real'}})),
 ...districts.viseuGuarda.cities.map((city) => ({
 '@type': 'City',
 name: city.name,
 containedInPlace: {
 '@type': 'AdministrativeArea',
 name: 'Viseu/Guarda'}})),
 ],
 serviceType: 'Eletricista',
 description:
 'Serviços de electricidade profissional em 34 cidades de Trás-os-Montes, 130km de Cavaleiros.'});
 document.head.appendChild(schemaScript);
 return () => {
 if (schemaScript.parentNode) {
 document.head.removeChild(schemaScript);
 }
 };
 }, [config]);
 const CityCard = ({ city }: { city: City }) => (
 <a
 href={`/eletricista-${city.slug}`}
 className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-[#FF6B35] hover:shadow-md transition-all duration-200"
 >
 <div className="flex items-start justify-between">
 <div className="flex-1">
 <h3 className="font-semibold text-gray-900 mb-1">{city.name}</h3>
 <div className="flex items-center text-sm text-gray-600">
 <MapPin className="w-4 h-4 mr-1" />
 <span>{city.distance} de Macedo</span>
 </div>
 </div>
 <div className="text-[#c2410c] text-sm font-medium">Ver página →</div>
 </div>
 </a>
 );
 return (
 <>
 <Header />
 <main className="min-h-screen bg-gray-50">
 {/* Hero Section */}
 <section className="bg-gradient-to-br from-[#FF6B35] to-[#e55a25] text-white py-16">
 <div className="container mx-auto px-4">
 <div className="max-w-4xl mx-auto text-center">
 <h1 className="text-4xl md:text-5xl font-bold mb-6">
 Zona de Intervenção — Eletricista em Trás-os-Montes
 </h1>
 <p className="text-xl text-orange-100 mb-8">
 Servimos 34 cidades 130km de Cavaleiros. Intervenção rápida em toda a região de
 Trás-os-Montes.
 </p>
 <div className="flex flex-wrap justify-center gap-6 text-lg">
 <div className="flex items-center">
 <Clock className="w-6 h-6 mr-2" />
 <span>Resposta em 24h</span>
 </div>
 <div className="flex items-center">
 <MapPin className="w-6 h-6 mr-2" />
 <span>100km de raio</span>
 </div>
 <div className="flex items-center">
 <Phone className="w-6 h-6 mr-2" />
 <span>{config.phone}</span>
 </div>
 </div>
 </div>
 </div>
 </section>
 {/* Districts Grid */}
 <section className="py-16">
 <div className="container mx-auto px-4">
 <div className="max-w-6xl mx-auto">
 {/* Distrito de Bragança */}
 <div className="mb-12">
 <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
 <MapPin className="w-8 h-8 mr-3 text-[#c2410c]" />
 {districts.braganca.name}
 <span className="ml-3 text-lg font-normal text-gray-600">(12 cidades)</span>
 </h2>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
 {districts.braganca.cities.map((city) => (
 <CityCard key={city.slug} city={city} />
 ))}
 </div>
 </div>
 {/* Distrito de Vila Real */}
 <div className="mb-12">
 <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
 <MapPin className="w-8 h-8 mr-3 text-[#c2410c]" />
 {districts.vilaReal.name}
 <span className="ml-3 text-lg font-normal text-gray-600">(12 cidades)</span>
 </h2>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
 {districts.vilaReal.cities.map((city) => (
 <CityCard key={city.slug} city={city} />
 ))}
 </div>
 </div>
 {/* Distrito de Viseu / Guarda */}
 <div className="mb-12">
 <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
 <MapPin className="w-8 h-8 mr-3 text-[#c2410c]" />
 {districts.viseuGuarda.name}
 <span className="ml-3 text-lg font-normal text-gray-600">(10 cidades)</span>
 </h2>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
 {districts.viseuGuarda.cities.map((city) => (
 <CityCard key={city.slug} city={city} />
 ))}
 </div>
 </div>
 </div>
 </div>
 </section>
 {/* CTA Section */}
 <section className="bg-white py-16 border-t border-gray-200">
 <div className="container mx-auto px-4">
 <div className="max-w-3xl mx-auto text-center">
 <h2 className="text-3xl font-bold text-gray-900 mb-4">Precisa de um Eletricista?</h2>
 <p className="text-lg text-gray-600 mb-8">
 Atendemos toda a região de Trás-os-Montes com rapidez e profissionalismo. Sem compromisso e sem
 compromisso.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a
 href={`tel:+351${config.phone.replace(/\s/g, '')}`}
 className="inline-flex items-center justify-center px-8 py-4 bg-[#FF6B35] text-white font-semibold rounded-lg hover:bg-[#e55a25] transition-colors"
 >
 <Phone className="w-5 h-5 mr-2" />
 Ligar Agora: {config.phone}
 </a>
 <a
 href={`https://wa.me/${config.whatsapp}?text=${encodeURIComponent(config.whatsappMessage)}`}
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center justify-center px-8 py-4 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
 >
 WhatsApp
 </a>
 </div>
 </div>
 </div>
 </section>
 </main>
 <Footer />
 </>
 );
}
