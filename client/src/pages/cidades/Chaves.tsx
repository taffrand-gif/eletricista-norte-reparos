// Page SEO optimisée para "Eletricista Chaves"
// 100% unique content, conforme políticas Google
import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';
import CidadesProximas from '@/components/CidadesProximas';
import Footer from '@/components/Footer';
import RelatedCities from '@/components/RelatedCities';
import SEOHead from '@/components/SEOHead';
import StructuredData from '@/components/StructuredData';
import { useSite } from '@/contexts/SiteContext';
import { businessInfo, getCityAddress } from '@/../../shared/napConfig';
import { getCidadesProximas } from '@/data/cidadesProximas';
import { useEffect } from 'react';
import FAQSection from '@/components/FAQSection';
export default function Chaves() {
 const { config } = useSite();
 // FAQ Chaves (déclaré hors useEffect pour éviter TS2448/TS2454)
 const faqs = [
 {
 question: "Qual o custo de deslocação a Chaves?",
 answer: "Confirmamos a deslocação por telefone. Cobrimos todo o conselho.",
 },
 {
 question: "Fazem urgências Atendimento 24h/7d em Chaves?",
 answer: "Confirmamos a deslocação por telefone. Cobrimos todo o conselho.",
 },
 {
 question: "Fornecem certificação elétrica em Chaves?",
 answer: "Confirmamos a deslocação por telefone. Cobrimos todo o conselho.",
 },
 ];
 useEffect(() => {
 document.title = "⚡ Eletricista Chaves — Orçamento Grátis | Garantia Escrita";
 
 // Optimized meta description
 let metaDescription = document.querySelector('meta[name="description"]');
 if (!metaDescription) {
 metaDescription = document.createElement('meta');
 metaDescription.setAttribute('name', 'description');
 document.head.appendChild(metaDescription);
 }
 metaDescription.setAttribute('content', 'Eletricista em Chaves e arredores. Técnicos com experiência e equipamento profissional. Orçamento grátis. Ligue 932 321 892.');
 // SEO meta keywords
 let metaKeywords = document.querySelector('meta[name="keywords"]');
 if (!metaKeywords) {
 metaKeywords = document.createElement('meta');
 metaKeywords.setAttribute('name', 'keywords');
 document.head.appendChild(metaKeywords);
 }
 metaKeywords.setAttribute('content', 'eletricista urgente chaves, eletricista Atendimento 24h/7d chaves, eletricista chaves, eletricista profissional chaves, instalação elétrica chaves, quadro elétrico chaves, certificação elétrica chaves, arranjo elétrica chaves, eletricista trás-os-montes');
 
 
 // Canonical URL
 let canonical = document.querySelector('link[rel="canonical"]');
 if (!canonical) {
 canonical = document.createElement('link');
 canonical.setAttribute('rel', 'canonical');
 document.head.appendChild(canonical);
 }
 canonical.setAttribute('href', 'https://eletricista-norte-reparos.pt/eletricista-chaves');
 
 // Schema.org LocalBusiness para Chaves
 const schemaScript = document.createElement('script');
 schemaScript.type = 'application/ld+json';
 schemaScript.text = JSON.stringify({
 "@context": "https://schema.org",
 "@type": "LocalBusiness",
 "name": "Eletricista Profissional — Eletricista em Chaves",
 "image": "/images-optimized/hero/hero-electrician-portugal.jpg",
 "description": "Eletricista profissional em Chaves, Trás-os-Montes. Instalação, arranjo e certificação elétrica para termas e turismo.",
 "address": getCityAddress('chaves'),
 "geo": {
 "@type": "GeoCoordinates",
 "latitude": "41.7402",
 "longitude": "-7.4687"
 },
 "telephone": businessInfo.phone,
 "openingHours": "Mo-Su 00:00-23:59",
 "priceRange": "€€",
 "areaServed": {
 "@type": "City",
 "name": "Chaves"
 },
 "serviceArea": {
 "@type": "GeoCircle",
 "geoMidpoint": {
 "@type": "GeoCoordinates",
 "latitude": "41.7402",
 "longitude": "-7.4687"
 },
 "geoRadius": "20000"
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

  return () => {
  document.head.removeChild(schemaScript);
 document.head.removeChild(faqSchema);
 };
 }, [config]);
 const cidadesProximas = getCidadesProximas('chaves');
 return (
 <>
 <SEOHead />
 <StructuredData />
 
 <Header />
 
 <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
 {/* Hero section específica de Chaves */}
 <section className="bg-gradient-to-r from-amber-600 to-amber-800 text-white py-16">
 <div className="container mx-auto px-4">
 <div className="max-w-4xl">
 <Breadcrumbs items={[
 { label: 'Eletricista', href: '/' },
 { label: 'Trás-os-Montes', href: '/tras-os-montes' },
 { label: 'Chaves', href: '/eletricista-chaves' }
 ]} />
<h1 className="text-4xl md:text-5xl font-bold mb-6">
 Eletricista Profissional em <span className="text-blue-900">Chaves</span>
 </h1>
 
 <p className="text-xl mb-8">
 Serviços de eletricista em Chaves e arredores. 
 Especialistas em instalações para termas, hotéis e turismo termal.
 </p>
 
 <div className="flex flex-col sm:flex-row gap-4">
 <a
 href={`tel:${businessInfo.phone}`}
 className="bg-white text-amber-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
 >
 📞 Eletricista Chaves: {businessInfo.phoneFormatted}
 </a>
 <a
 href={`https://wa.me/${businessInfo.whatsapp}?text=Olá, preciso de um eletricista em Chaves`}
 target="_blank"
 rel="noopener noreferrer"
 className="bg-blue-900 hover:bg-blue-800 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
 >
 💬 WhatsApp para Chaves
 </a>
 </div>
 </div>
 </div>
 </section>
 {/* Conteúdo específico de Chaves */}
 <section className="py-16">
 <div className="container mx-auto px-4">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
 <div>
 <h2 className="text-3xl font-bold text-gray-900 mb-6">
 Especialistas em Eletricidade para o Turismo Termal
 </h2>
 
 <div className="space-y-6">
 <div className="bg-white p-6 rounded-xl shadow-lg border border-amber-100">
 <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
 <span className="text-amber-600">🏨</span>
 Instalações para Hotéis e Termas
 </h3>
 <p className="text-gray-600">
 Chaves é um centro termal importante. Especializamo-nos em:
 sistemas elétricos para piscinas termais, iluminação decorativa
 para espaços turísticos, e infraestrutura para estabelecimentos
 hoteleiros da região.
 </p>
 </div>
 
 <div className="bg-white p-6 rounded-xl shadow-lg border border-amber-100">
 <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
 <span className="text-amber-600">⚡</span>
 Soluções para Ambientes Húmidos
 </h3>
 <p className="text-gray-600">
 Trabalhamos em ambientes com alta humidade como termas e spas.
 Utilizamos materiais específicos: interruptores à prova de água,
 iluminação IP68, e sistemas de proteção contra condensação
 para garantir segurança máxima.
 </p>
 </div>
 </div>
 </div>
 
 <div>
 <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-8 shadow-xl border border-amber-200">
 <h3 className="text-2xl font-bold text-gray-900 mb-6">
 Cobertura em <span className="text-amber-600">Chaves</span>
 </h3>
 
 <div className="grid grid-cols-2 gap-4 mb-8">
 {[
 'Centro Histórico', 'Termas de Chaves', 'Zona Hoteleira',
 'Santa Maria Maior', 'Madalena', 'Santa Cruz',
 'Bairro da Estação', 'Urbanização do Pinheiro',
 'Zona Industrial', 'Área Termal'
 ].map((area) => (
 <div key={area} className="flex items-center gap-2 text-gray-700">
 <span className="text-amber-600">📍</span>
 <span>{area}</span>
 </div>
 ))}
 </div>
 
 <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
 <h4 className="text-lg font-bold text-gray-900 mb-3">
 🏊 Serviços para Instalações Termais
 </h4>
 <ul className="space-y-2 text-gray-600">
 <li className="flex items-center justify-between">
 <span>Iluminação subaquática</span>
 <span className="font-bold text-amber-600">Especialidade</span>
 </li>
 <li className="flex items-center justify-between">
 <span>Sistemas de bombagem</span>
 <span className="font-bold text-amber-600">Experiência</span>
 </li>
 <li className="flex items-center justify-between">
 <span>Automação para spas</span>
 <span className="font-bold text-amber-600">Frequentemente</span>
 </li>
 </ul>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>
 {/* FAQ específica de Chaves */}
 <section className="py-16 bg-gray-50">
 <div className="container mx-auto px-4">
 <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
 Perguntas sobre <span className="text-amber-600">Eletricista em Chaves</span>
 </h2>
 
 <div className="max-w-3xl mx-auto space-y-6">
 <div className="bg-white p-6 rounded-xl shadow-md">
 <h3 className="text-xl font-bold text-gray-900 mb-3">
 Quais as especificidades para instalações em termas?
 </h3>
 <p className="text-gray-600">
 Utilizamos equipamento com classificação IP68 para ambientes húmidos,
 sistemas de aterramento reforçado, e proteções diferenciais de alta
 sensibilidade (10mA). Todos os materiais são resistentes à corrosão
 por minerais das águas termais.
 </p>
 </div>
 
 <div className="bg-white p-6 rounded-xl shadow-md">
 <h3 className="text-xl font-bold text-gray-900 mb-3">
 Trabalham em estabelecimentos hoteleiros de Chaves?
 </h3>
 <p className="text-gray-600">
 Sim, temos experiência em hotéis, pousadas e unidades de turismo rural.
 Realizamos instalações completas, manutenção preventiva, e sistemas
 de automação para conforto dos hóspedes, sempre com mínimo impacto
 nas operações do estabelecimento.
 </p>
 </div>
 
 <div className="bg-white p-6 rounded-xl shadow-md">
 <h3 className="text-xl font-bold text-gray-900 mb-3">
 Como lidam com a sazonalidade do turismo em Chaves?
 </h3>
 <p className="text-gray-600">
 Oferecemos manutenção preventiva antes da alta temporada,
 intervenções rápidas durante a época turística, e projetos de
 renovação durante a baixa temporada. Trabalhamos com horários
 flexíveis para minimizar impactos no negócio dos clientes.
 </p>
 </div>
 </div>
 </div>
 </section>
 {/* CTA final */}
 <section className="py-16 bg-gradient-to-r from-blue-900 to-amber-700 text-white">
 <div className="container mx-auto px-4 text-center">
 <h2 className="text-3xl font-bold mb-6">
 Eletricista em <span className="text-amber-300">Chaves</span> - Especialista em Turismo
 </h2>
 <p className="text-xl mb-8 max-w-2xl mx-auto">
 Conhecemos as necessidades elétricas do turismo termal de Chaves.
 Desde hotéis históricos até modernas termas.
 </p>
 
 <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
 <a
 href={`tel:${businessInfo.phone}`}
 className="bg-white text-amber-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
 >
 📞 {businessInfo.phoneFormatted} (Chaves)
 </a>
 <a
 href={`https://wa.me/${businessInfo.whatsapp}?text=Olá, preciso de um eletricista em Chaves`}
 target="_blank"
 rel="noopener noreferrer"
 className="bg-amber-600 hover:bg-amber-500 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
 >
 💬 WhatsApp para Chaves
 </a>
 </div>
 
 <p className="text-amber-200">
 🏨 <strong>Especialistas em hotéis e termas</strong> • 💧 <strong>Ambientes húmidos</strong> • ⏱️ <strong>Horários flexíveis</strong>
 </p>
 
 {/* Cross-link subtil */}
 <div className="mt-12 p-4 bg-white/20 rounded-xl max-w-md mx-auto">
 <p className="text-lg">
 💧 <strong>Precisa de um canalizador em Chaves?</strong> Recomendamos:{' '}
 <a href="https://canalizador-norte-reparos.pt/canalizador-chaves" className="underline font-bold">
 canalizador-norte-reparos.pt
 </a>
 </p>
 </div>
 </div>
 </section>
 {/* Related Cities - Maillage interno SEO */}
 
 <section className="py-16">
 <div className="container max-w-4xl">
 <h2 className="text-3xl font-black text-center mb-12">Perguntas Frequentes - Chaves</h2>
 <FAQSection faqs={faqs} />
 </div>
 </section>
 {/* Cidades Próximas - Internal Linking */}
 <CidadesProximas
 currentCity="Chaves"
 cidades={cidadesProximas}
 serviceType="eletricista"
 />
 
 <RelatedCities 
 currentCity="Chaves" 
 currentCitySlug="eletricista-chaves" 
 />
 </main>
 
 <Footer />
</>
 );
}