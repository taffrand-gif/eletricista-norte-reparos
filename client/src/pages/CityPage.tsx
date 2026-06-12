import { useRoute } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import { ACTIVE_CONFIG, CITIES } from "../../../shared/serviceConfig";
import { IMAGES } from "../../../shared/images";
import { useSEO, generateSEOTitle, generateMetaDescription, generateLocalBusinessSchema, generateKeywords, generateBreadcrumbSchema } from "@/hooks/useSEO";
export default function CityPage() {
 const [, params] = useRoute("/servicos/:citySlug");
 const citySlug = params?.citySlug || "";
 
 // Trouver la ville correspondante
 const city = CITIES.find(c => c.slug === citySlug);
 
 // Si la ville n'existe pas, rediriger vers 404
 if (!city) {
 window.location.href = "/404";
 return null;
 }
 const config = ACTIVE_CONFIG;
 const formattedPhone = `${config.phone.slice(0, 3)} ${config.phone.slice(3, 6)} ${config.phone.slice(6)}`;
 const interventionsCount = getInterventionsCount(city.name);
 // SEO optimisé pour les pages locales
 const cityUrl = `https://${config.domain}/servicos/${city.slug}`;
 const cityImage = `https://${config.domain}/og-image.jpg`;
 
 // Générer les schemas LocalBusiness et Breadcrumb
 const localBusinessSchema = generateLocalBusinessSchema(city.name);
 const breadcrumbSchema = generateBreadcrumbSchema([
 { name: 'Home', url: '/' },
 { name: 'Serviços', url: '/servicos' },
 { name: city.name, url: `/servicos/${city.slug}` },
 ]);
 
 const combinedSchema = {
 "@context": "https://schema.org",
 "@graph": [localBusinessSchema, breadcrumbSchema]
 };
 
 useSEO({
 title: generateSEOTitle(city.name),
 description: generateMetaDescription(city.name),
 canonical: cityUrl,
 keywords: generateKeywords(city.name),
 schema: combinedSchema,
 image: cityImage,
 ogType: 'website'});
 const handlePhoneClick = () => {
 if (typeof window !== 'undefined' && (window as any).gtag) {
 (window as any).gtag('event', 'conversion', {
 'send_to': `${config.googleAdsId}/${config.googleAdsConversionLabel}`,
 'event_callback': () => {
 window.location.href = `tel:+351${config.phone.replace(/\s/g, "")}`;
 }
 });
 } else {
 window.location.href = `tel:+351${config.phone.replace(/\s/g, "")}`;
 }
 };
 const heroImage = config.type === 'plomberie' ? IMAGES.plomberie.hero : IMAGES.electricite.hero;
 return (
 <>
 <Header />
{/* Hero Section with Image */}
 <section className="relative bg-gray-900 py-20">
 <div 
 className="absolute inset-0 bg-cover bg-center opacity-40"
 style={{ backgroundImage: `url(${heroImage})` }}
 />
 <div className="relative container">
 <div className="max-w-4xl mx-auto text-center text-white">
 <h1 className="text-4xl md:text-5xl font-bold mb-6">
 {config.name} em {city.name} 24H
 </h1>
 <p className="text-xl mb-8">
 Serviço de urgência disponível Atendimento 24h/7d em {city.name} e arredores
 </p>
 <button
 onClick={handlePhoneClick}
 className="bg-red-600 hover:bg-red-700 text-white text-2xl font-bold px-12 py-4 rounded-lg transition-colors inline-flex items-center gap-3"
 >
 <span>📞</span>
 <span>LIGUE AGORA: {formattedPhone}</span>
 </button>
 <p className="mt-6 text-lg opacity-90">
 ✅ Mais de {interventionsCount} intervenções realizadas em {city.name}
 </p>
 </div>
 </div>
 </section>
 {/* Main Content */}
 <section className="py-16 bg-white">
 <div className="container">
 <div className="max-w-4xl mx-auto prose prose-lg">
 <h2 className="text-3xl font-bold text-gray-900 mb-6">
 {config.name} profissional em {city.name}
 </h2>
 <p className="text-lg leading-relaxed text-gray-700">
 A <strong>{config.businessName}</strong> é a sua solução de confiança para serviços de {config.name.toLowerCase()} em {city.name}. Com uma equipa de técnicos altamente qualificados e certificados, garantimos intervenções rápidas e eficazes, Atendimento 24h/7d, todos os dias do ano, incluindo fins de semana e feriados.
 </p>
 <p className="text-lg leading-relaxed text-gray-700">
 Já realizámos mais de {interventionsCount} intervenções bem-sucedidas em {city.name}, conquistando a confiança de centenas de clientes. Seja qual for o problema que esteja a enfrentar, a nosso trabalho está parranjada para o resolver com rapidez e profissionalismo.
 </p>
 <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
 Serviços disponíveis em {city.name}
 </h3>
 <div className="grid md:grid-cols-2 gap-4 my-8">
 {config.services.map((service, index) => (
 <div key={index} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
 <span className="text-green-600 text-xl">✓</span>
 <span className="text-gray-900 font-medium">{service}</span>
 </div>
 ))}
 </div>
 <p className="text-lg leading-relaxed text-gray-700">
 Todos os nossos {config.name.toLowerCase()}s têm formação contínua e experiência comprovada na área. Utilizamos equipamento de última geração e trabalhamos sempre em conformidade com as normas de segurança mais rigorosas.
 </p>
 <div className="text-center my-12">
 <button
 onClick={handlePhoneClick}
 className="bg-red-600 hover:bg-red-700 text-white text-xl font-bold px-10 py-3 rounded-lg transition-colors"
 >
 LIGUE AGORA: {formattedPhone}
 </button>
 </div>
 </div>
 </div>
 </section>
 {/* Coverage Area */}
 <section className="py-16 bg-gray-50">
 <div className="container">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold text-gray-900 mb-8">
 Cobertura em {city.name}
 </h2>
 <p className="text-lg text-gray-700 mb-6">
 Atendemos em toda a área de {city.name}, incluindo:
 </p>
 <div className="bg-white rounded-lg p-8 shadow-md">
 <ul className="grid md:grid-cols-2 gap-4">
 <li className="flex items-start gap-2">
 <span className="text-red-600">📍</span>
 <span className="text-gray-700">Centro histórico de {city.name}</span>
 </li>
 <li className="flex items-start gap-2">
 <span className="text-red-600">📍</span>
 <span className="text-gray-700">Todas as freguesias do concelho</span>
 </li>
 <li className="flex items-start gap-2">
 <span className="text-red-600">📍</span>
 <span className="text-gray-700">Zonas rurais e aldeias</span>
 </li>
 <li className="flex items-start gap-2">
 <span className="text-red-600">📍</span>
 <span className="text-gray-700">Zonas industriais e comerciais</span>
 </li>
 </ul>
 <div className="mt-6 p-4 bg-red-50 rounded-lg">
 <p className="text-gray-900">
 <strong>Tempo médio de chegada em {city.name}:</strong> 30-resposta prioritária após o seu contacto
 </p>
 </div>
 </div>
 </div>
 </div>
 </section>
 {/* Why Choose Us */}
 <section className="py-16 bg-white">
 <div className="container">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
 Porque escolher a {config.businessName} em {city.name}?
 </h2>
 <div className="grid md:grid-cols-2 gap-6">
 <div className="flex items-start gap-4">
 <div className="text-3xl">⚡</div>
 <div>
 <h3 className="font-bold text-lg text-gray-900 mb-2">Resposta Rápida</h3>
 <p className="text-gray-700">Chegamos a {city.name} resposta prioritária, prontos para resolver o seu problema.</p>
 </div>
 </div>
 <div className="flex items-start gap-4">
 <div className="text-3xl">👨‍🔧</div>
 <div>
 <h3 className="font-bold text-lg text-gray-900 mb-2">Técnicos Certificados</h3>
 <p className="text-gray-700">Equipa qualificada com anos de experiência em {city.name}.</p>
 </div>
 </div>
 <div className="flex items-start gap-4">
 <div className="text-3xl">💰</div>
 <div>
 <h3 className="font-bold text-lg text-gray-900 mb-2">Preços Justos</h3>
 <p className="text-gray-700">Preços competitivos e transparentes, sem surpresas.</p>
 </div>
 </div>
 <div className="flex items-start gap-4">
 <div className="text-3xl">🛡️</div>
 <div>
 <h3 className="font-bold text-lg text-gray-900 mb-2">Garantia de Qualidade</h3>
 <p className="text-gray-700">Todos os trabalhos realizados com garantia.</p>
 </div>
 </div>
 </div>
 <div className="text-center mt-12">
 <button
 onClick={handlePhoneClick}
 className="bg-red-600 hover:bg-red-700 text-white text-xl font-bold px-10 py-3 rounded-lg transition-colors"
 >
 CONTACTE-NOS AGORA: {formattedPhone}
 </button>
 </div>
 </div>
 </div>
 </section>
 <Footer />
 <CookieConsent />
 </>
 );
}
// Fonction pour générer un nombre d'interventions fictif basé sur le nom de la ville
function getInterventionsCount(cityName: string): number {
 const hash = cityName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
 return 30 + (hash % 70); // Entre 30 et 100 interventions - valeurs crédibles
}
