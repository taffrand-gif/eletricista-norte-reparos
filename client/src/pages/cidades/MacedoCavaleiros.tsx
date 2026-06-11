// SEO optimized page for "Eletricista Macedo de Cavaleiros"
// 100% unique content, conforme às políticas Google
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RelatedCities from '@/components/RelatedCities';
import Breadcrumbs from '@/components/Breadcrumbs';
import CidadesProximas from '@/components/CidadesProximas';
import FAQSection from '@/components/FAQSection';
import { businessInfo, getCityAddress } from '@/../../shared/napConfig';
import { useSite } from '@/contexts/SiteContext';
import { useEffect } from 'react';
import { Phone, Clock, MapPin, Shield, Zap, CheckCircle } from 'lucide-react';
import { getCidadesProximas } from '@/data/cidadesProximas';
export default function MacedoCavaleiros() {
 const { config } = useSite();
 useEffect(() => {
 document.title = "Eletricista Macedo Cavaleiros ⚡ 24h | 932 321 892";
 
 let metaDescription = document.querySelector('meta[name="description"]');
 if (!metaDescription) {
 metaDescription = document.createElement('meta');
 metaDescription.setAttribute('name', 'description');
 document.head.appendChild(metaDescription);
 }
 metaDescription.setAttribute('content', 'Curto-circuito em Macedo de Cavaleiros? Estamos aí em menos de 30 min. Orçamento sem compromisso. Ligue: 932 321 892');
 let metaKeywords = document.querySelector('meta[name="keywords"]');
 if (!metaKeywords) {
 metaKeywords = document.createElement('meta');
 metaKeywords.setAttribute('name', 'keywords');
 document.head.appendChild(metaKeywords);
 }
 metaKeywords.setAttribute('content', 'eletricista macedo de cavaleiros, eletricista urgente macedo, eletricista Atendimento 24h/7d macedo cavaleiros, avaria elétrica macedo, quadro elétrico macedo cavaleiros, curto circuito macedo');
 let canonical = document.querySelector('link[rel="canonical"]');
 if (!canonical) {
 canonical = document.createElement('link');
 canonical.setAttribute('rel', 'canonical');
 document.head.appendChild(canonical);
 }
 canonical.setAttribute('href', 'https://eletricista-norte-reparos.pt/eletricista-macedo-cavaleiros');
 const schemaScript = document.createElement('script');
 schemaScript.type = 'application/ld+json';
 schemaScript.id = 'schema-macedo';
 schemaScript.text = JSON.stringify({
 "@context": "https://schema.org",
 "@type": "Electrician",
 "name": "Eletricista Profissional Macedo de Cavaleiros",
 "description": "Eletricista profissional em Macedo de Cavaleiros. Serviço 24h, urgências elétricas, quadros elétricos.",
 "address": getCityAddress('macedo-cavaleiros'),
 "geo": {
 "@type": "GeoCoordinates",
 "latitude": "41.5382",
 "longitude": "-6.9667"
 },
 "telephone": businessInfo.phone,
 "openingHours": "Mo-Su 00:00-23:59",
 "priceRange": "€€",
 "areaServed": {
 "@type": "City",
 "name": "Macedo de Cavaleiros"
 }
 });
 document.head.appendChild(schemaScript);
 // FAQ Schema
 const faqSchema = document.createElement('script');
 faqSchema.type = 'application/ld+json';
 faqSchema.setAttribute('data-faq-schema', 'true');
 faqSchema.text = JSON.stringify({
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": faqs.map(faq => ({
 "@type": "Question",
 "name": faq.question,
 "acceptedAnswer": {
 "@type": "Answer",
 "text": faq.answer
 }
 }))
 });
 document.head.appendChild(faqSchema);
 return () => {
 const existingSchema = document.getElementById('schema-macedo');
 if (existingSchema) existingSchema.remove();
 document.head.removeChild(faqSchema);
 };
 }, []);
 const cidadesProximas = getCidadesProximas('macedo-cavaleiros');
 const faqs = [
 {
 question: "Quanto tempo demora a chegar a Macedo de Cavaleiros?",
    answer: "Chegamos rapidamente. Cobrimos todo o conselho.",
  },
 {
 question: "Trabalham aos fins de semana em Macedo?",
    answer: "Chegamos rapidamente. Cobrimos todo o conselho.",
  },
 {
 question: "Qual o custo de deslocação a Macedo de Cavaleiros?",
    answer: "Chegamos rapidamente. Cobrimos todo o conselho.",
  },
 {
 question: "Fazem certificação elétrica em Macedo?",
    answer: "Chegamos rapidamente. Cobrimos todo o conselho.",
  },
 ];
 return (
 <div className="min-h-screen flex flex-col">
 <Header />
 
 <main className="flex-grow">
 {/* Hero Section */}
 <section
 className="relative py-20 bg-cover bg-center"
 style={{
 backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images-optimized/hero/hero-electrician-portugal.jpg')`}}
 >
 <div className="container text-center text-white">
 <Breadcrumbs items={[
 { label: 'Eletricista', href: '/' },
 { label: 'Trás-os-Montes', href: '/tras-os-montes' },
 { label: 'Macedo de Cavaleiros', href: '/eletricista-macedo-cavaleiros' }
 ]} />
 <span className="inline-block bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">
 ⚡ SEDE EM MACEDO DE CAVALEIROS
 </span>
 <h1 className="text-4xl md:text-6xl font-black mb-6">
 Eletricista em Macedo de Cavaleiros
 </h1>
 <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
 A nossa base é aqui. Chegamos Resposta rápida garantida. Serviço 24h para urgências elétricas.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a
 href={`tel:${businessInfo.phone}`}
 className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg"
 >
 <Phone className="w-6 h-6" />
 932 321 892
 </a>
 <a
 href={`https://wa.me/${businessInfo.whatsapp}?text=Olá,%20preciso%20de%20um%20eletricista%20em%20Macedo%20de%20Cavaleiros`}
 className="inline-flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg"
 >
 💬 WhatsApp
 </a>
 </div>
 </div>
 </section>
 {/* Vantagens Zona Local */}
 <section className="py-16 bg-gray-50">
 <div className="container">
 <h2 className="text-3xl font-black text-center mb-12">
 Porquê Escolher-nos em Macedo de Cavaleiros?
 </h2>
 <div className="grid md:grid-cols-3 gap-8">
 <div className="bg-white p-6 rounded-xl shadow-lg text-center">
 <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
 <MapPin className="w-8 h-8 text-orange-500" />
 </div>
 <h3 className="text-xl font-bold mb-2">Sede Local</h3>
 <p className="text-gray-600">
 Estamos sediados em Macedo de Cavaleiros. Conhecemos cada rua, cada bairro, cada aldeia.
 </p>
 </div>
 <div className="bg-white p-6 rounded-xl shadow-lg text-center">
 <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
 <Clock className="w-8 h-8 text-orange-500" />
 </div>
 <h3 className="text-xl font-bold mb-2">Menos de 30 Min</h3>
 <p className="text-gray-600">
 Tempo de resposta mais rápido da região. Em urgências, estamos consigo em minutos.
 </p>
 </div>
 <div className="bg-white p-6 rounded-xl shadow-lg text-center">
 <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
 <Shield className="w-8 h-8 text-orange-500" />
 </div>
 <h3 className="text-xl font-bold mb-2">Deslocação 10€</h3>
 <p className="text-gray-600">
 Taxa de deslocação mais baixa para Macedo e arredores. Sem surpresas no orçamento.
 </p>
 </div>
 </div>
 </div>
 </section>
 {/* Serviços */}
 <section className="py-16">
 <div className="container">
 <h2 className="text-3xl font-black text-center mb-12">
 Serviços Elétricos em Macedo de Cavaleiros
 </h2>
 <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
 {[
 { icon: Zap, title: "Urgências Elétricas 24h", desc: "Curto-circuitos, apagões, disjuntores a disparar" },
 { icon: Shield, title: "Quadros Elétricos", desc: "Substituição, modernização, colocação às normas" },
 { icon: CheckCircle, title: "certificação elétrica", desc: "Para venda, arrendamento ou nova ligação EDP" },
 { icon: Zap, title: "Instalações Novas", desc: "Casas, lojas, armazéns, explorações agrícolas" },
 ].map((service, index) => (
 <div key={index} className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
 <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
 <service.icon className="w-6 h-6 text-white" />
 </div>
 <div>
 <h3 className="text-lg font-bold mb-1">{service.title}</h3>
 <p className="text-gray-600">{service.desc}</p>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>
 {/* Zonas Cobertas */}
 <section className="py-16 bg-orange-50">
 <div className="container">
 <h2 className="text-3xl font-black text-center mb-8">
 Aldeias e Freguesias que Servimos
 </h2>
 <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
 A partir de Macedo de Cavaleiros, cobrimos todas as freguesias do concelho e arredores:
 </p>
 <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
 {[
 "Macedo de Cavaleiros", "Azibo", "Podence", "Morais", "Talhas", "Lagoa",
 "Castelãos", "Grijó", "Amendoeira", "Arcas", "Bagueixe", "Bornes",
 "Burga", "Carrapatas", "Chacim", "Cortiços", "Corujas", "Espadanedo",
 "Ferreira", "Lamalonga", "Lamas", "Lombo", "Murçós", "Olmos",
 "Peredo", "Pinhovelo", "Podence", "Salselas", "Santa Combinha",
 "Sezulfe", "Talhinhas", "Vale Benfeito", "Vale da Porca", "Vale de Prados",
 "Vilar do Monte", "Vinhas"
 ].map((zona) => (
 <span key={zona} className="bg-white px-4 py-2 rounded-full text-sm font-medium shadow-sm">
 {zona}
 </span>
 ))}
 </div>
 </div>
 </section>
 {/* FAQ */}
 <section className="py-16">
 <div className="container max-w-4xl">
 <h2 className="text-3xl font-black text-center mb-12">
 Perguntas Frequentes - Macedo de Cavaleiros
 </h2>
 <FAQSection faqs={faqs} />
 </div>
 </section>
 {/* CTA Final */}
 <section className="py-16 bg-orange-500 text-white">
 <div className="container text-center">
 <h2 className="text-3xl font-black mb-4">
 Precisa de Eletricista em Macedo de Cavaleiros?
 </h2>
 <p className="text-xl mb-8 opacity-90">
 Ligue agora. Estamos a menos de 30 minutos de si.
 </p>
 <a
 href={`tel:${businessInfo.phone}`}
 className="inline-flex items-center gap-2 bg-white text-orange-500 px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all shadow-lg"
 >
 <Phone className="w-6 h-6" />
 932 321 892
 </a>
 </div>
 </section>
 {/* Cidades Próximas - Internal Linking */}
 <CidadesProximas
 currentCity="Macedo de Cavaleiros"
 cidades={cidadesProximas}
 serviceType="eletricista"
 />
 {/* Related Cities - Maillage interno SEO */}
 <RelatedCities
 currentCity="Macedo de Cavaleiros"
 currentCitySlug="eletricista-macedocavaleiros"
 />
 </main>
 <Footer />
 </div>
 );
}
