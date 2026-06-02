// SEO optimized page for "Eletricista Vila Real"
// 100% unique content, conforme aux politiques Google
import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';
import CidadesProximas from '@/components/CidadesProximas';
import Footer from '@/components/Footer';
import RelatedCities from '@/components/RelatedCities';
import SEOHead from '@/components/SEOHead';
import StructuredData from '@/components/StructuredData';
import FAQSection from '@/components/FAQSection';
import { businessInfo, getCityAddress } from '@/../../shared/napConfig';
import { getCidadesProximas } from '@/data/cidadesProximas';
import { useSite } from '@/contexts/SiteContext';
import { useEffect } from 'react';
export default function VilaReal() {
 const { config } = useSite();
 useEffect(() => {
 document.title = "Eletricista Urgente Vila Real ⚡ 24h | 932 321 892";
 
 // Optimized meta description
 let metaDescription = document.querySelector('meta[name="description"]');
 if (!metaDescription) {
 metaDescription = document.createElement('meta');
 metaDescription.setAttribute('name', 'description');
 document.head.appendChild(metaDescription);
 }
 metaDescription.setAttribute('content', 'Avaria elétrica em Vila Real? A nossa equipa responde em menos de 1h. certificação elétrica, sem compromisso. Ligue: 932 321 892');
 // SEO meta keywords
 let metaKeywords = document.querySelector('meta[name="keywords"]');
 if (!metaKeywords) {
 metaKeywords = document.createElement('meta');
 metaKeywords.setAttribute('name', 'keywords');
 document.head.appendChild(metaKeywords);
 }
 metaKeywords.setAttribute('content', 'eletricista urgente vila real, eletricista 24 horas vila real, eletricista vila real, eletricista profissional vila real, instalação elétrica vila real, quadro elétrico vila real, certificação elétrica vila real, arranjo elétrica vila real, eletricista trás-os-montes');
 
 
 // Canonical URL
 let canonical = document.querySelector('link[rel="canonical"]');
 if (!canonical) {
 canonical = document.createElement('link');
 canonical.setAttribute('rel', 'canonical');
 document.head.appendChild(canonical);
 }
 canonical.setAttribute('href', 'https://eletricista-norte-reparos.pt/eletricista-vila-real');
 
 // Schema.org LocalBusiness for Vila Real
 const schemaScript = document.createElement('script');
 schemaScript.type = 'application/ld+json';
 schemaScript.text = JSON.stringify({
 "@context": "https://schema.org",
 "@type": "LocalBusiness",
 "name": "Eletricista Profissional — Eletricista em Vila Real",
 "image": "/images-optimized/hero/hero-electrician-portugal.jpg",
 "description": "Eletricista profissional em Vila Real, Trás-os-Montes. Instalação, arranjo e certificação elétrica.",
 "address": getCityAddress('vila-real'),
 "geo": {
 "@type": "GeoCoordinates",
 "latitude": "41.3000",
 "longitude": "-7.7441"
 },
 "telephone": businessInfo.phone,
 "openingHours": "Mo-Su 00:00-23:59",
 "priceRange": "€€",
 "areaServed": {
 "@type": "City",
 "name": "Vila Real"
 },
 "sameAs": [
 `https://wa.me/${businessInfo.whatsapp}?text=${encodeURIComponent("Olá, preciso de um eletricista em Trás-os-Montes. Podem dar-me um orçamento?")}`
 ]
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
 const faqs = [
 {
 question: "Qual o custo de deslocação a Vila Real?",
    answer: "Chegamos rapidamente. Cobrimos todo o conselho.",
  },
 {
 question: "Fazem urgências 24 horas em Vila Real?",
    answer: "Chegamos rapidamente. Cobrimos todo o conselho.",
  },
 {
 question: "Fornecem certificação elétrica em Vila Real?",
    answer: "Chegamos rapidamente. Cobrimos todo o conselho.",
  },
 ];
 
 return () => {
 document.head.removeChild(schemaScript);
 document.head.removeChild(faqSchema);
 };
 }, [config]);
 const cidadesProximas = getCidadesProximas('vila-real');
 return (
 <>
 <SEOHead />
 <StructuredData />
 
 <Header />
 
 <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
 {/* Hero section spécifique à Vila Real */}
 <section className="bg-gradient-to-r from-amber-600 to-amber-800 text-white py-16">
 <div className="container mx-auto px-4">
 <div className="max-w-4xl">
 <Breadcrumbs items={[
 { label: 'Eletricista', href: '/' },
 { label: 'Trás-os-Montes', href: '/tras-os-montes' },
 { label: 'Vila Real', href: '/eletricista-vila-real' }
 ]} />
<h1 className="text-4xl md:text-5xl font-bold mb-6">
 Eletricista Profissional em <span className="text-blue-900">Vila Real</span>
 </h1>
 
 <p className="text-xl mb-8">
 Serviços de eletricista certificado em Vila Real e arredores. 
 Mais de 15 anos de experiência a servir a região de Trás-os-Montes.
 </p>
 
 <div className="flex flex-col sm:flex-row gap-4">
 <a
 href={`tel:${businessInfo.phone}`}
 className="bg-white text-amber-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
 >
 📞 Eletricista Vila Real: {businessInfo.phone}
 </a>
 <a
 href={`https://wa.me/${businessInfo.whatsapp}?text=Olá, preciso de um eletricista em Vila Real`}
 target="_blank"
 rel="noopener noreferrer"
 className="bg-blue-900 hover:bg-blue-800 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
 >
 💬 WhatsApp para Vila Real
 </a>
 </div>
 </div>
 </div>
 </section>
 {/* Contenu spécifique à Vila Real */}
 <section className="py-16">
 <div className="container mx-auto px-4">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
 <div>
 <h2 className="text-3xl font-bold text-gray-900 mb-6">
 Porque escolher um eletricista em Vila Real da Eletricista Profissional?
 </h2>
 
 <div className="space-y-6">
 <div className="bg-white p-6 rounded-xl shadow-lg border border-amber-100">
 <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
 <span className="text-amber-600">🏙️</span>
 Conhecimento Local de Vila Real
 </h3>
 <p className="text-gray-600">
 Conhecemos profundamente a infraestrutura elétrica de Vila Real. 
 Trabalhamos em diversos bairros como {[
 'São Pedro', 'Mateus', 'Parque Corgo', 'Lordelo', 'Vila Real Centro',
 'Bairro da Ponte', 'Bairro da Rainha', 'Bairro da Corga'
 ].join(', ')} e entendemos as particularidades de cada zona.
 </p>
 </div>
 
 <div className="bg-white p-6 rounded-xl shadow-lg border border-amber-100">
 <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
 <span className="text-amber-600">⚡</span>
 Serviços Especializados para Vila Real
 </h3>
 <ul className="space-y-2 text-gray-600">
 <li className="flex items-center gap-2">
 <span className="text-green-500">✓</span>
 <span>Instalação elétrica em edifícios históricos do centro</span>
 </li>
 <li className="flex items-center gap-2">
 <span className="text-green-500">✓</span>
 <span>Modernização de quadros elétricos em prédios antigos</span>
 </li>
 <li className="flex items-center gap-2">
 <span className="text-green-500">✓</span>
 <span>Certificação para propriedades em Vila Real</span>
 </li>
 <li className="flex items-center gap-2">
 <span className="text-green-500">✓</span>
 <span>Urgências 24h em toda a cidade</span>
 </li>
 </ul>
 </div>
 </div>
 </div>
 
 <div>
 <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-8 shadow-xl border border-amber-200">
 <h3 className="text-2xl font-bold text-gray-900 mb-6">
 Áreas de Atuação em <span className="text-amber-600">Vila Real</span>
 </h3>
 
 <div className="grid grid-cols-2 gap-4 mb-8">
 {[
 'Centro Histórico', 'São Pedro', 'Mateus', 'Lordelo',
 'Parque Corgo', 'Bairro da Ponte', 'Bairro da Rainha',
 'Bairro da Corga', 'Vila Real Norte', 'Vila Real Sul'
 ].map((area) => (
 <div key={area} className="flex items-center gap-2 text-gray-700">
 <span className="text-amber-600">📍</span>
 <span>{area}</span>
 </div>
 ))}
 </div>
 
 <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
 <h4 className="text-lg font-bold text-gray-900 mb-3">
 ⏱️ Tempo de Resposta em Vila Real
 </h4>
 <ul className="space-y-2 text-gray-600">
 <li className="flex items-center justify-between">
 <span>Centro de Vila Real</span>
 <span className="font-bold text-amber-600">15-30 min</span>
 </li>
 <li className="flex items-center justify-between">
 <span>Bairros periféricos</span>
 <span className="font-bold text-amber-600">30-45 min</span>
 </li>
 <li className="flex items-center justify-between">
 <span>Zona Industrial</span>
 <span className="font-bold text-amber-600">45-60 min</span>
 </li>
 </ul>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>
 {/* FAQ Section with Schema.org - Vila Real Specific */}
 <section className="py-16 bg-gray-50">
 <FAQSection
 title="Perguntas Frequentes sobre Eletricista em Vila Real"
 faqs={[
 {
 question: "Qual o tempo médio de resposta para urgências em Vila Real?",
    answer: "Chegamos rapidamente. Cobrimos todo o conselho.",
  },
 {
 question: "Trabalham em edifícios históricos do centro de Vila Real?",
    answer: "Chegamos rapidamente. Cobrimos todo o conselho.",
  },
 {
 question: "Oferecem serviço para empresas na Zona Industrial de Vila Real?",
    answer: "Chegamos rapidamente. Cobrimos todo o conselho.",
  },
 {
 question: "Atendem bairros como Corgo, Mateus ou Lordelo?",
    answer: "Chegamos rapidamente. Cobrimos todo o conselho.",
  },
 {
 question: "Preciso de certificação elétrica para vender minha casa em Vila Real?",
    answer: "Chegamos rapidamente. Cobrimos todo o conselho.",
  },
 {
 question: "Fazem manutenção preventiva para condomínios em Vila Real?",
    answer: "Chegamos rapidamente. Cobrimos todo o conselho.",
  },
 ]}
 />
 </section>
 {/* CTA final avec localisation */}
 <section className="py-16 bg-gradient-to-r from-blue-900 to-amber-700 text-white">
 <div className="container mx-auto px-4 text-center">
 <h2 className="text-3xl font-bold mb-6">
 Precisa de um Eletricista em <span className="text-amber-300">Vila Real</span>?
 </h2>
 <p className="text-xl mb-8 max-w-2xl mx-auto">
 Contacte-nos agora para um sem compromisso. 
 Atendemos toda a cidade de Vila Real e arredores.
 </p>
 
 <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
 <a
 href={`tel:${businessInfo.phone}`}
 className="bg-white text-amber-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
 >
 📞 {businessInfo.phone} (Vila Real)
 </a>
 <a
 href={`https://wa.me/${businessInfo.whatsapp}?text=Olá, preciso de um eletricista em Vila Real`}
 target="_blank"
 rel="noopener noreferrer"
 className="bg-amber-600 hover:bg-amber-500 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
 >
 💬 WhatsApp para Vila Real
 </a>
 </div>
 
 <p className="text-amber-200">
 🚗 <strong>Deslocação gratuita</strong> em Vila Real • ⏱️ <strong>Urgências 24h</strong> • 💰 <strong>Orçamento sem compromisso</strong>
 </p>
 </div>
 </section>
 {/* Related Cities - Maillage interno SEO */}
 
 <section className="py-16">
 <div className="container max-w-4xl">
 <h2 className="text-3xl font-black text-center mb-12">Perguntas Frequentes - Vila Real</h2>
 <FAQSection faqs={faqs} />
 </div>
 </section>
 {/* Cidades Próximas - Internal Linking */}
 <CidadesProximas
 currentCity="Vila Real"
 cidades={cidadesProximas}
 serviceType="eletricista"
 />
 
 <RelatedCities 
 currentCity="Vila Real" 
 currentCitySlug="eletricista-vilareal" 
 />
 </main>
 
 <Footer />
</>
 );
}