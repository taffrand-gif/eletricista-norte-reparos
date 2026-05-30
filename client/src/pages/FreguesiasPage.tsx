// Page dynamique pour freguesias (villages)
// Gère toutes les freguesias via routing dynamique
import { useParams } from 'wouter';
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQSection from '@/components/FAQSection';
import RelatedCities from '@/components/RelatedCities';
import { useSite } from '@/contexts/SiteContext';
import { CITIES } from '@/../../shared/serviceConfig';
import { Phone, MapPin, Clock } from 'lucide-react';
export default function FreguesiasPage() {
 const { config } = useSite();
 const params = useParams();
 // Extraire freguesia et parentCity depuis l'URL
 // Format: /canalizador-izeda-braganca
 const pathParts = window.location.pathname.split('-');
 const freguesiaSlug = pathParts[1];
 const parentCitySlug = pathParts[2];
 // Trouver la freguesia dans CITIES
 const freguesia = CITIES.find(c => c.slug === freguesiaSlug && c.parentCity);
 const parentCity = CITIES.find(c => c.slug === parentCitySlug && !c.parentCity);
 if (!freguesia || !parentCity) {
 return <div>Freguesia não encontrada</div>;
 }
 useEffect(() => {
 document.title = `${config.serviceName} ${freguesia.name} (${parentCity.name}) 💧 24h | ${config.phone}`;
 // Meta description
 let metaDescription = document.querySelector('meta[name="description"]');
 if (!metaDescription) {
 metaDescription = document.createElement('meta');
 metaDescription.setAttribute('name', 'description');
 document.head.appendChild(metaDescription);
 }
 metaDescription.setAttribute('content',
 `${config.serviceName} profissional em ${freguesia.name}, ${parentCity.name}. Serviço 24h, urgências. Ligue: ${config.phone}`
 );
 // Canonical URL
 const canonicalUrl = `https://${config.domain}/${config.serviceSlug}-${freguesiaSlug}-${parentCitySlug}`;
 let canonical = document.querySelector('link[rel="canonical"]');
 if (!canonical) {
 canonical = document.createElement('link');
 canonical.setAttribute('rel', 'canonical');
 document.head.appendChild(canonical);
 }
 canonical.setAttribute('href', canonicalUrl);
 // Schema.org LocalBusiness
 const schemaScript = document.createElement('script');
 schemaScript.type = 'application/ld+json';
 schemaScript.id = 'schema-freguesia';
 schemaScript.text = JSON.stringify({
 "@context": "https://schema.org",
 "@type": "LocalBusiness",
 "name": `${config.serviceName} ${freguesia.name}`,
 "description": `${config.serviceName} profissional em ${freguesia.name}, ${parentCity.name}`,
 "address": {
 "@type": "PostalAddress",
 "addressLocality": freguesia.name,
 "addressRegion": parentCity.name,
 "addressCountry": "PT"
 },
 "telephone": config.phone,
 "openingHours": "Mo-Su 00:00-23:59",
 "areaServed": {
 "@type": "City",
 "name": freguesia.name
 }
 });
 document.head.appendChild(schemaScript);
 return () => {
 const existingSchema = document.getElementById('schema-freguesia');
 if (existingSchema) existingSchema.remove();
 };
 }, [freguesia, parentCity, config]);
 const faqs = [
 {
 question: `Atendem em ${freguesia.name}?`,
 answer: `Sim, atendemos ${freguesia.name} e toda a região de ${parentCity.name}. Tempo de chegada: 30-45 minutos.`
 },
 {
 question: `Qual o custo de deslocação a ${freguesia.name}?`,
 answer: `A deslocação a ${freguesia.name} depende da zona. Contacte-nos para orçamento sem compromisso: ${config.phone}`
 },
 {
 question: `Fazem urgências 24 horas em ${freguesia.name}?`,
 answer: `Sim, atendemos urgências 24 horas por dia, 7 dias por semana em ${freguesia.name} e arredores.`
 }
 ];
 return (
 <>
 <Header />
 <main className="min-h-screen bg-gradient-to-b from-white to-blue-50">
 {/* Hero */}
 <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
 <div className="container mx-auto px-4">
 <div className="max-w-4xl">
 <Breadcrumbs items={[
 { label: config.serviceName, href: '/' },
 { label: parentCity.name, href: `/${config.serviceSlug}-${parentCitySlug}` },
 { label: freguesia.name, href: `/${config.serviceSlug}-${freguesiaSlug}-${parentCitySlug}` }
 ]} />
 <h1 className="text-4xl md:text-5xl font-bold mb-6">
 {config.serviceName} em <span className="text-orange-400">{freguesia.name}</span>
 </h1>
 <p className="text-xl mb-8">
 Serviço profissional em {freguesia.name}, {parentCity.name}.
 Atendimento 24h, urgências resolvidas no mesmo dia.
 </p>
 <div className="flex flex-col sm:flex-row gap-4">
 <a
 href={`tel:${config.phone.replace(/\s/g, "")}`}
 className="bg-white text-blue-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
 >
 📞 {config.phone}
 </a>
 <a
 href={`https://wa.me/${config.whatsapp}?text=Olá, preciso de ${config.serviceName} em ${freguesia.name}`}
 target="_blank"
 rel="noopener noreferrer"
 className="bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
 >
 💬 WhatsApp
 </a>
 </div>
 </div>
 </div>
 </section>
 {/* Sobre a Freguesia */}
 <section className="py-16 bg-white">
 <div className="container mx-auto px-4">
 <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
 {config.serviceName} em {freguesia.name}
 </h2>
 <div className="max-w-4xl mx-auto prose prose-lg">
 <p className="text-gray-700 mb-4">
 {freguesia.name} é uma freguesia do concelho de {parentCity.name},
 no distrito de {freguesia.district}. Prestamos serviços de {config.serviceName.toLowerCase()}
 profissional em toda a freguesia e arredores.
 </p>
 <p className="text-gray-700">
 Com base em {parentCity.name}, chegamos rapidamente a {freguesia.name}
 para resolver qualquer urgência. Disponíveis 24 horas por dia, 7 dias por semana.
 </p>
 </div>
 </div>
 </section>
 {/* Vantagens */}
 <section className="py-16 bg-gray-50">
 <div className="container mx-auto px-4">
 <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
 Porquê Escolher-nos em {freguesia.name}
 </h2>
 <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
 <div className="bg-white p-6 rounded-xl shadow-lg text-center">
 <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
 <MapPin className="w-8 h-8 text-blue-600" />
 </div>
 <h3 className="text-xl font-bold mb-2">Cobertura Local</h3>
 <p className="text-gray-600">
 Atendemos {freguesia.name} e toda a região de {parentCity.name}
 </p>
 </div>
 <div className="bg-white p-6 rounded-xl shadow-lg text-center">
 <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
 <Clock className="w-8 h-8 text-blue-600" />
 </div>
 <h3 className="text-xl font-bold mb-2">Resposta Rápida</h3>
 <p className="text-gray-600">
 Chegamos em 30-45 minutos para urgências
 </p>
 </div>
 <div className="bg-white p-6 rounded-xl shadow-lg text-center">
 <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
 <Phone className="w-8 h-8 text-blue-600" />
 </div>
 <h3 className="text-xl font-bold mb-2">Disponível 24h</h3>
 <p className="text-gray-600">
 Atendimento 24 horas, 7 dias por semana
 </p>
 </div>
 </div>
 </div>
 </section>
 {/* FAQ */}
 <section className="py-16">
 <div className="container max-w-4xl">
 <h2 className="text-3xl font-bold text-center mb-12">
 Perguntas Frequentes - {freguesia.name}
 </h2>
 <FAQSection faqs={faqs} />
 </div>
 </section>
 {/* CTA */}
 <section className="py-16 bg-gradient-to-r from-orange-500 to-blue-700 text-white">
 <div className="container mx-auto px-4 text-center">
 <h2 className="text-3xl font-bold mb-6">
 Precisa de {config.serviceName} em {freguesia.name}?
 </h2>
 <p className="text-xl mb-8 max-w-2xl mx-auto">
 Ligue agora. Estamos prontos para ajudar.
 </p>
 <a
 href={`tel:${config.phone.replace(/\s/g, "")}`}
 className="bg-white text-blue-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors inline-block"
 >
 📞 {config.phone}
 </a>
 </div>
 </section>
 {/* Related Cities */}
 <RelatedCities
 currentCity={freguesia.name}
 currentCitySlug={`${config.serviceSlug}-${freguesiaSlug}-${parentCitySlug}`}
 />
 </main>
 <Footer />
 </>
 );
}
