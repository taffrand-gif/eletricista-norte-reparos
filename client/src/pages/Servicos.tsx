// Page Services détaillée pour SEO
// Optimisée pour les featured snippets et le référencement local
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHeadEnhanced from '@/components/SEOHeadEnhanced';
import StructuredData from '@/components/StructuredData';
import FAQSection from '@/components/FAQSection';
import { useSite } from '@/contexts/SiteContext';
import { ACTIVE_CONFIG } from '@/../../shared/serviceConfig';
import { useEffect } from 'react';
export default function Servicos() {
 const { config } = useSite();
 useEffect(() => {
 document.title = "Serviços Eletricista Trás-os-Montes | 932 321 892";
 
 // Update meta description
 let metaDescription = document.querySelector('meta[name="description"]');
 if (!metaDescription) {
 metaDescription = document.createElement('meta');
 metaDescription.setAttribute('name', 'description');
 document.head.appendChild(metaDescription);
 }
 metaDescription.setAttribute('content', 'Serviços completos de eletricista em Trás-os-Montes: instalação elétrica, arranjo de avarias, quadros elétricos, iluminação, urgências 24h. Profissionais experientes, orçamento sem compromisso.');
 }, [config]);
 const servicesDetails = [
 {
 title: 'Instalação Elétrica Completa',
 description: 'Instalação elétrica residencial e comercial completa desde o quadro principal até às tomadas finais. Utilizamos materiais de primeira qualidade e cumprimos todas as normas de segurança elétrica.',
 features: [
 'Cabeamento novo e organização de circuitos',
 'Instalação de tomadas e interruptores',
 'Proteção com disjuntores diferenciais',
 'Cumprimento das normas de segurança',
 'Garantia no material e mão de obra'
 ],
 image: '/images-optimized/services/service-quadro-eletrico.jpg',
 priceRange: 'A partir de €200'
 },
 {
 title: 'Arranjo de Avarias Elétricas',
 description: 'Diagnóstico e arranjo rápida de avarias elétricas, curtos-circuitos, disjuntores que disparam constantemente, falhas de iluminação e outros problemas elétricos urgentes.',
 features: [
 'Diagnóstico preciso com equipamento especializado',
 'Arranjo de curtos-circuitos',
 'Substituição de disjuntores defeituosos',
 'Correção de falhas de aterramento',
 'Serviço de urgência 24h'
 ],
 image: '/images-optimized/services/service-urgencia.jpg',
 priceRange: 'A partir de €80'
 },
 {
 title: 'Certificação Elétrica DGEG',
 description: 'Inspeção e certificação elétrica obrigatória para venda e arrendamento de imóveis. Emissão de certificado válido e registado, cumprindo todas as exigências legais.',
 features: [
 'Inspeção completa da instalação elétrica',
 'Testes de segurança e funcionamento',
 'Emissão de certificado oficial DGEG',
 'Registo no sistema nacional',
 'Validade legal garantida'
 ],
 image: '/images-optimized/services/service-certificacao.jpg',
 priceRange: 'A partir de €150'
 },
 {
 title: 'Iluminação Interior e Exterior',
 description: 'Projeto e instalação de sistemas de iluminação modernos para interior e exterior. Spots LED, iluminação decorativa, sensores de movimento e sistemas de automatização.',
 features: [
 'Projeto de iluminação personalizado',
 'Instalação de spots LED eficientes',
 'Sistemas de iluminação exterior',
 'Sensores de movimento e presença',
 'Automatização e controlo remoto'
 ],
 image: '/images-optimized/services/service-iluminacao.jpg',
 priceRange: 'A partir de €120'
 }
 ];
 return (
 <>
 <SEOHeadEnhanced pageType="service" />
 <StructuredData />
 
 <Header />
 
 <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
 {/* Hero section */}
 <section className="bg-gradient-to-r from-amber-600 to-amber-800 text-white py-16">
 <div className="container mx-auto px-4">
 <h1 className="text-4xl md:text-5xl font-bold mb-6">
 Serviços de <span className="text-blue-900">Eletricista</span> em Trás-os-Montes
 </h1>
 <p className="text-xl mb-8 max-w-3xl">
 Serviços elétricos completos para residências, comércios e indústrias. 
 Profissionais com experiência, materiais de qualidade e garantia no serviço.
 </p>
 <div className="flex flex-col sm:flex-row gap-4">
 <a
 href={`tel:${ACTIVE_CONFIG.phone}`}
 className="bg-white text-amber-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
 >
 📞 Ligue Agora: {ACTIVE_CONFIG.phone}
 </a>
 <a
 href={`https://wa.me/${ACTIVE_CONFIG.whatsappNumber}?text=${encodeURIComponent("Olá, preciso de um eletricista em Trás-os-Montes. Podem dar-me um orçamento?")}`}
 target="_blank"
 rel="noopener noreferrer"
 className="bg-blue-900 hover:bg-blue-800 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
 >
 💬 Pedir Orçamento no WhatsApp
 </a>
 </div>
 </div>
 </section>
 {/* Services details */}
 <section className="py-16">
 <div className="container mx-auto px-4">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
 {servicesDetails.map((service, index) => (
 <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
 <div className="h-64 overflow-hidden">
 <img
 src={service.image}
 alt={`Serviço de ${service.title.toLowerCase()} em Trás-os-Montes`}
 className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
 loading="lazy"
 width="600"
 height="400"
 />
 </div>
 <div className="p-8">
 <div className="flex items-center justify-between mb-4">
 <h2 className="text-2xl font-bold text-gray-900">{service.title}</h2>
 <span className="bg-amber-100 text-amber-800 font-bold px-4 py-2 rounded-full">
 {service.priceRange}
 </span>
 </div>
 
 <p className="text-gray-600 mb-6 text-lg">
 {service.description}
 </p>
 
 <h3 className="text-xl font-semibold text-gray-900 mb-4">O que inclui:</h3>
 <ul className="space-y-3 mb-8">
 {service.features.map((feature, idx) => (
 <li key={idx} className="flex items-center gap-3 text-gray-700">
 <span className="text-green-500 text-xl">✓</span>
 <span>{feature}</span>
 </li>
 ))}
 </ul>
 
 <div className="flex flex-col sm:flex-row gap-4">
 <a
 href={`tel:${ACTIVE_CONFIG.phone}`}
 className="bg-amber-600 hover:bg-amber-700 text-white font-bold px-6 py-3 rounded-lg text-center transition-colors"
 >
 Pedir Serviço
 </a>
 <a
 href={`https://wa.me/${ACTIVE_CONFIG.whatsappNumber}?text=Olá, gostaria de mais informações sobre ${service.title}`}
 target="_blank"
 rel="noopener noreferrer"
 className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold px-6 py-3 rounded-lg text-center transition-colors border border-gray-300"
 >
 Saber Mais
 </a>
 </div>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>
 {/* FAQ Section with Schema.org */}
 <section className="py-16 bg-gray-50">
 <FAQSection
 title="Perguntas Frequentes sobre Serviços Elétricos"
 faqs={[
 {
 question: "Quanto tempo demora uma instalação elétrica completa?",
 answer: "Depende do tamanho do imóvel. Para uma casa média (T3), demora entre 2 a 4 dias. Fazemos um planeamento detalhado para minimizar inconvenientes."
 },
 {
 question: "A certificação elétrica é obrigatória?",
 answer: "Sim, para venda ou arrendamento de imóveis em Portugal é obrigatório ter certificação elétrica válida. O certificado tem validade de 8 anos."
 },
 {
 question: "Oferecem garantia nos serviços?",
 answer: "Sim, oferecemos garantia escrita em todos os serviços de mão de obra e garantia do fabricante nos materiais fornecidos por nós."
 },
 {
 question: "Trabalham com urgências Atendimento 24h/7d?",
 answer: "Sim, temos serviço de urgência Atendimento 24h/7d para situações críticas como falta total de energia, curtos-circuitos ou perigo iminente."
 },
 {
 question: "Quais são os documentos necessários para certificação elétrica?",
 answer: "Necessita do projeto elétrico aprovado, boletins de ensaio dos materiais utilizados e memorial descritivo da instalação. Nós tratamos de toda a burocracia."
 },
 {
 question: "O orçamento é gratuito?",
 answer: "Sim, todos os nossos orçamentos são gratuitos e sem compromisso. Incluem análise técnica no local e proposta detalhada por escrito."
 }
 ]}
 />
 </section>
 {/* CTA Final */}
 <section className="py-16 bg-gradient-to-r from-blue-900 to-amber-700 text-white">
 <div className="container mx-auto px-4 text-center">
 <h2 className="text-3xl font-bold mb-6">
 Precisa de um Eletricista em Trás-os-Montes?
 </h2>
 <p className="text-xl mb-8 max-w-2xl mx-auto">
 Contacte-nos agora para um sem compromisso e sem compromisso. 
 Atendemos urgências Atendimento 24h/7d.
 </p>
 <div className="flex flex-col sm:flex-row gap-6 justify-center">
 <a
 href={`tel:${ACTIVE_CONFIG.phone}`}
 className="bg-white text-amber-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
 >
 📞 {ACTIVE_CONFIG.phone}
 </a>
 <a
 href={`https://wa.me/${ACTIVE_CONFIG.whatsappNumber}?text=${encodeURIComponent("Olá, preciso de um eletricista em Trás-os-Montes. Podem dar-me um orçamento?")}`}
 target="_blank"
 rel="noopener noreferrer"
 className="bg-amber-600 hover:bg-amber-500 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
 >
 💬 WhatsApp Rápido
 </a>
 </div>
 </div>
 </section>
 </main>
 
 <Footer />
</>
 );
}