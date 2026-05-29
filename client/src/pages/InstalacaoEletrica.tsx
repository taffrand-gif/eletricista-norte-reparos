// Page Service Dédié: Instalação Elétrica Completa em Trás-os-Montes
// Optimizada para SEO com keywords: instalação elétrica, eletricista instalação

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHeadEnhanced from '@/components/SEOHeadEnhanced';
import StructuredData from '@/components/StructuredData';
import FAQSection from '@/components/FAQSection';
import { useSite } from '@/contexts/SiteContext';
import { ACTIVE_CONFIG } from '@/../../shared/serviceConfig';
import { useEffect } from 'react';

export default function InstalacaoEletrica() {
 const { config } = useSite();

 useEffect(() => {
 document.title = "Instalação Elétrica Completa em Trás-os-Montes | Eletricista Profissional";
 
 // Update meta description
 let metaDescription = document.querySelector('meta[name="description"]');
 if (!metaDescription) {
 metaDescription = document.createElement('meta');
 metaDescription.setAttribute('name', 'description');
 document.head.appendChild(metaDescription);
 }
 metaDescription.setAttribute('content', 'Instalação elétrica completa em Trás-os-Montes: obra nova, remodelação, certificação. Eletricista profissional, materiais de qualidade, garantia no serviço. Orçamento gratuito.');
 }, [config]);

 // Schema.org Service JSON-LD
 const serviceSchema = {
 "@context": "https://schema.org",
 "@type": "Service",
 "name": "Instalação Elétrica Completa em Trás-os-Montes",
 "description": "Serviço profissional de instalação elétrica completa para residências, comércios e indústrias em Trás-os-Montes.",
 "provider": {
 "@type": "LocalBusiness",
 "name": "Staff Seekers - Eletricista Profissional",
 "telephone": ACTIVE_CONFIG.phone,
 "address": {
 "@type": "PostalAddress",
 "addressRegion": "Trás-os-Montes",
 "addressCountry": "PT"
 }
 },
 "areaServed": {
 "@type": "GeoCircle",
 "geoMidpoint": {
 "@type": "GeoCoordinates",
 "latitude": 41.5378,
 "longitude": -6.9603
 },
 "geoRadius": "100000"
 },
 "hasOfferCatalog": {
 "@type": "OfferCatalog",
 "name": "Serviços de Instalação Elétrica",
 "itemListElement": [
 {
 "@type": "Offer",
 "itemOffered": {
 "@type": "Service",
 "name": "Instalação Elétrica Residencial Completa"
 },
 "price": "1500",
 "priceCurrency": "EUR"
 },
 {
 "@type": "Offer",
 "itemOffered": {
 "@type": "Service",
 "name": "Remodelação Elétrica"
 },
 "price": "800",
 "priceCurrency": "EUR"
 },
 {
 "@type": "Offer",
 "itemOffered": {
 "@type": "Service",
 "name": "Instalação Elétrica Comercial"
 },
 "price": "2500",
 "priceCurrency": "EUR"
 }
 ]
 }
 };

 return (
 <>
 <SEOHeadEnhanced pageType="service" />
 <StructuredData customSchema={serviceSchema} />
 
 <Header />
 
 <main className="min-h-screen bg-gradient-to-b from-white to-amber-50">
 {/* Hero section */}
 <section className="bg-gradient-to-r from-amber-600 to-amber-800 text-white py-16">
 <div className="container mx-auto px-4">
 <h1 className="text-4xl md:text-5xl font-bold mb-6">
 Instalação <span className="text-blue-900">Elétrica Completa</span> em Trás-os-Montes
 </h1>
 <p className="text-xl mb-8 max-w-3xl">
 Instalação elétrica completa para residências, comércios e indústrias. 
 Desde o quadro principal até às tomadas finais, com certificação garantida.
 </p>
 <div className="flex flex-col sm:flex-row gap-4">
 <a
 href={`tel:${ACTIVE_CONFIG.phone}`}
 className="bg-white text-amber-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
 >
 📞 Orçamento: {ACTIVE_CONFIG.phone}
 </a>
 <a
 href={`https://wa.me/${ACTIVE_CONFIG.whatsappNumber}?text=${encodeURIComponent("Olá, preciso de instalação elétrica completa em Trás-os-Montes. Podem dar-me um orçamento?")}`}
 target="_blank"
 rel="noopener noreferrer"
 className="bg-blue-900 hover:bg-blue-800 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
 >
 💬 WhatsApp para Orçamento
 </a>
 </div>
 </div>
 </section>

 {/* Service details */}
 <section className="py-16">
 <div className="container mx-auto px-4">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
 {/* Left column: Service description */}
 <div>
 <h2 className="text-3xl font-bold text-gray-900 mb-6">
 Eletricista Profissional para Instalação Completa
 </h2>
 
 <div className="space-y-6 text-lg text-gray-700">
 <p>
 Especializados em <strong>instalação elétrica</strong> e serviço de <strong>eletricista instalação</strong> em toda a região de Trás-os-Montes. 
 Trabalhamos em obras novas, remodelações completas e expansões elétricas.
 </p>
 
 <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Processo de Instalação</h3>
 <ol className="space-y-4 list-decimal pl-5">
 <li><strong>Projeto:</strong> Planeamento detalhado da instalação conforme necessidades</li>
 <li><strong>Quadro elétrico:</strong> Instalação e dimensionamento do quadro principal</li>
 <li><strong>Cabeamento:</strong> Passagem de cabos por toda a propriedade</li>
 <li><strong>Pontos elétricos:</strong> Instalação de tomadas, interruptores e pontos de luz</li>
 <li><strong>Iluminação:</strong> Montagem de sistemas de iluminação interior/exterior</li>
 <li><strong>Testes e certificação:</strong> Verificação de segurança e emissão de certificado</li>
 </ol>
 
 <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Componentes da Instalação</h3>
 <ul className="space-y-3">
 <li className="flex items-center gap-3">
 <span className="text-amber-500 text-xl">⚡</span>
 <span><strong>Quadro elétrico:</strong> Com disjuntores diferenciais e magnetotérmicos</span>
 </li>
 <li className="flex items-center gap-3">
 <span className="text-amber-500 text-xl">🔌</span>
 <span><strong>Tomadas e interruptores:</strong> Marcas de qualidade (Schneider, Hager)</span>
 </li>
 <li className="flex items-center gap-3">
 <span className="text-amber-500 text-xl">💡</span>
 <span><strong>Iluminação:</strong> Spots LED, plafons, lustres, iluminação exterior</span>
 </li>
 <li className="flex items-center gap-3">
 <span className="text-amber-500 text-xl">📶</span>
 <span><strong>Comunicações:</strong> Tomadas TV, internet, telefone</span>
 </li>
 <li className="flex items-center gap-3">
 <span className="text-amber-500 text-xl">🏠</span>
 <span><strong>Sistemas especiais:</strong> Videoporteiro, alarme, domótica básica</span>
 </li>
 <li className="flex items-center gap-3">
 <span className="text-amber-500 text-xl">🔧</span>
 <span><strong>Cabeamento:</strong> Cabos com isolamento duplo, seções adequadas</span>
 </li>
 </ul>
 
 <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Vantagens da Instalação Profissional</h3>
 <ul className="space-y-2">
 <li className="flex items-center gap-3">
 <span className="text-green-500">✓</span>
 <span><strong>Segurança:</strong> Previne incêndios e acidentes elétricos</span>
 </li>
 <li className="flex items-center gap-3">
 <span className="text-green-500">✓</span>
 <span><strong>Eficiência energética:</strong> Instalação otimizada reduz consumos</span>
 </li>
 <li className="flex items-center gap-3">
 <span className="text-green-500">✓</span>
 <span><strong>Conformidade legal:</strong> Cumpre todas as normas em vigor</span>
 </li>
 <li className="flex items-center gap-3">
 <span className="text-green-500">✓</span>
 <span><strong>Valorização do imóvel:</strong> Instalação moderna aumenta o valor</span>
 </li>
 <li className="flex items-center gap-3">
 <span className="text-green-500">✓</span>
 <span><strong>Garantia:</strong> Trabalho certificado com garantia extensa</span>
 </li>
 </ul>
 </div>
 </div>
 
 {/* Right column: Pricing and coverage */}
 <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
 <h3 className="text-2xl font-bold text-gray-900 mb-6">Preços Indicativos</h3>
 
 <div className="space-y-6">
 <div className="border-b pb-4">
 <div className="flex justify-between items-center mb-2">
 <h4 className="text-lg font-semibold text-gray-900">Casa T3 Obra Nova</h4>
 <span className="bg-amber-100 text-amber-800 font-bold px-4 py-2 rounded-full">€1.500 - €3.000</span>
 </div>
 <p className="text-gray-600">Instalação completa desde o quadro até às tomadas</p>
 </div>
 
 <div className="border-b pb-4">
 <div className="flex justify-between items-center mb-2">
 <h4 className="text-lg font-semibold text-gray-900">Remodelação Completa (T3)</h4>
 <span className="bg-amber-100 text-amber-800 font-bold px-4 py-2 rounded-full">€800 - €2.000</span>
 </div>
 <p className="text-gray-600">Substituição de instalação antiga por nova</p>
 </div>
 
 <div className="border-b pb-4">
 <div className="flex justify-between items-center mb-2">
 <h4 className="text-lg font-semibold text-gray-900">Loja/Comércio (50m²)</h4>
 <span className="bg-amber-100 text-amber-800 font-bold px-4 py-2 rounded-full">€2.500 - €5.000</span>
 </div>
 <p className="text-gray-600">Iluminação comercial, tomadas força, sinalética</p>
 </div>
 
 <div className="border-b pb-4">
 <div className="flex justify-between items-center mb-2">
 <h4 className="text-lg font-semibold text-gray-900">Por Ponto Elétrico</h4>
 <span className="bg-amber-100 text-amber-800 font-bold px-4 py-2 rounded-full">€40 - €80</span>
 </div>
 <p className="text-gray-600">Tomada, interruptor ou ponto de luz (mão de obra + material)</p>
 </div>
 </div>
 
 <div className="mt-8 p-4 bg-amber-50 rounded-lg">
 <p className="text-amber-800 font-semibold">
 💡 <strong>Nota:</strong> Os preços variam conforme dimensões, materiais escolhidos e complexidade. 
 Orçamento personalizado gratuito no local.
 </p>
 </div>
 
 <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">O que Inclui o Serviço</h3>
 <ul className="space-y-2 text-sm">
 <li className="flex items-start gap-3">
 <span className="text-amber-500 mt-1">✓</span>
 <span>Projeto elétrico básico (se necessário)</span>
 </li>
 <li className="flex items-start gap-3">
 <span className="text-amber-500 mt-1">✓</span>
 <span>Todos os materiais elétricos (cabos, tomadas, interruptores)</span>
 </li>
 <li className="flex items-start gap-3">
 <span className="text-amber-500 mt-1">✓</span>
 <span>Mão de obra especializada</span>
 </li>
 <li className="flex items-start gap-3">
 <span className="text-amber-500 mt-1">✓</span>
 <span>Testes de segurança e funcionamento</span>
 </li>
 <li className="flex items-start gap-3">
 <span className="text-amber-500 mt-1">✓</span>
 <span>Certificação elétrica (opcional, com custo adicional)</span>
 </li>
 <li className="flex items-start gap-3">
 <span className="text-amber-500 mt-1">✓</span>
 <span>Limpeza da área de trabalho</span>
 </li>
 </ul>
 
 <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Zonas de Atuação</h3>
 <div className="grid grid-cols-2 gap-3">
 {[
 "Macedo de Cavaleiros", "Bragança", "Mirandela", "Chaves",
 "Valpaços", "Vinhais", "Miranda do Douro", "Mogadouro",
 "Torre de Moncorvo", "Freixo de Espada à Cinta"
 ].map((city, idx) => (
 <div key={idx} className="bg-gray-100 px-4 py-2 rounded-lg text-center">
 {city}
 </div>
 ))}
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* FAQ Section with Schema.org */}
 <section className="py-16 bg-gray-50">
 <FAQSection
 title="Perguntas Frequentes sobre Instalação Elétrica"
 faqs={[
 {
 question: "Quanto tempo demora uma instalação elétrica completa?",
 answer: "Para uma casa T3 obra nova, demora geralmente 5-10 dias úteis. Para remodelações, depende da complexidade mas normalmente 3-7 dias."
 },
 {
 question: "Preciso de licença para instalação elétrica?",
 answer: "Para obras novas ou remodelações completas, sim. Nós tratamos de toda a burocracia, incluindo projeto e licenciamento junto da câmara municipal."
 },
 {
 question: "Oferecem garantia na instalação elétrica?",
 answer: "Sim, oferecemos garantia de 3 anos na mão de obra e 1 ano nos materiais fornecidos. Para materiais com garantia de fábrica superior, aplicamos essa garantia."
 }
 ]}
 />
 </section>

 {/* Internal links to city pages */}
 <section className="py-16">
 <div className="container mx-auto px-4">
 <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
 Instalação Elétrica em Toda a Região
 </h2>
 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
 <a href="/eletricista-macedo-cavaleiros" className="bg-white hover:bg-amber-50 border border-gray-300 rounded-lg p-4 text-center transition-colors">
 <div className="text-amber-600 font-bold">Macedo de Cavaleiros</div>
 <div className="text-sm text-gray-600">Obra nova</div>
 </a>
 <a href="/eletricista-braganca" className="bg-white hover:bg-amber-50 border border-gray-300 rounded-lg p-4 text-center transition-colors">
 <div className="text-amber-600 font-bold">Bragança</div>
 <div className="text-sm text-gray-600">Remodelação</div>
 </a>
 <a href="/eletricista-mirandela" className="bg-white hover:bg-amber-50 border border-gray-300 rounded-lg p-4 text-center transition-colors">
 <div className="text-amber-600 font-bold">Mirandela</div>
 <div className="text-sm text-gray-600">Instalação completa</div>
 </a>
 <a href="/eletricista-chaves" className="bg-white hover:bg-amber-50 border border-gray-300 rounded-lg p-4 text-center transition-colors">
 <div className="text-amber-600 font-bold">Chaves</div>
 <div className="text-sm text-gray-600">Certificação</div>
 </a>
 <a href="/eletricista-valpacos" className="bg-white hover:bg-amber-50 border border-gray-300 rounded-lg p-4 text-center transition-colors">
 <div className="text-amber-600 font-bold">Valpaços</div>
 <div className="text-sm text-gray-600">Materiais qualidade</div>
 </a>
 </div>
 </div>
 </section>

 {/* CTA Final */}
 <section className="py-16 bg-gradient-to-r from-blue-900 to-amber-700 text-white">
 <div className="container mx-auto px-4 text-center">
 <h2 className="text-3xl font-bold mb-6">
 Precisa de Instalação Elétrica em Trás-os-Montes?
 </h2>
 <p className="text-xl mb-8 max-w-2xl mx-auto">
 Contacte-nos agora para um orçamento gratuito e sem compromisso. 
 Trabalhamos em obras novas, remodelações e expansões elétricas.
 </p>
 <div className="flex flex-col sm:flex-row gap-6 justify-center">
 <a
 href={`tel:${ACTIVE_CONFIG.phone}`}
 className="bg-white text-amber-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
 >
 📞 {ACTIVE_CONFIG.phone}
 </a>
 <a
 href={`https://wa.me/${ACTIVE_CONFIG.whatsappNumber}?text=${encodeURIComponent("Olá, preciso de instalação elétrica completa em Trás-os-Montes. Podem dar-me um orçamento?")}`}
 target="_blank"
 rel="noopener noreferrer"
 className="bg-amber-600 hover:bg-amber-500 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
 >
 💬 WhatsApp para Orçamento
 </a>
 </div>
 </div>
 </section>
 </main>
 
 <Footer />
 </>
 );
}