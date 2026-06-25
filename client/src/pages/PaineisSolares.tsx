// Page Service Dédié: Painéis Solares Fotovoltaicos em Trás-os-Montes
// Optimizada para SEO com keywords: painéis solares, energia solar
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHeadEnhanced from '@/components/SEOHeadEnhanced';
import StructuredData from '@/components/StructuredData';
import FAQSection from '@/components/FAQSection';
import { useSite } from '@/contexts/SiteContext';
import { ACTIVE_CONFIG } from '@/../../shared/serviceConfig';
import { useEffect } from 'react';
export default function PaineisSolares() {
 const { config } = useSite();
 useEffect(() => {
 document.title = "Painéis Solares Fotovoltaicos em Trás-os-Montes | Energia Solar | Instalação Profissional";
 
 // Update meta description
 let metaDescription = document.querySelector('meta[name="description"]');
 if (!metaDescription) {
 metaDescription = document.createElement('meta');
 metaDescription.setAttribute('name', 'description');
 document.head.appendChild(metaDescription);
 }
 metaDescription.setAttribute('content', 'Instalação de painéis solares fotovoltaicos em Trás-os-Montes: energia solar para casa, redução de faturas, independência energética. Instalação profissional, financiamento, manutenção.');
 }, [config]);
 // Schema.org Service JSON-LD
 const serviceSchema = {
 "@context": "https://schema.org",
 "@type": "Service",
 "name": "Painéis Solares Fotovoltaicos em Trás-os-Montes",
 "description": "Serviço profissional de instalação de painéis solares fotovoltaicos para produção de energia elétrica em Trás-os-Montes.",
 "provider": {
 "@type": "LocalBusiness",
 "name": " - Eletricista Profissional",
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
 "name": "Serviços de Energia Solar",
 "itemListElement": [
 {
 "@type": "Offer",
 "itemOffered": {
 "@type": "Service",
 "name": "Kit Solar 3kW para Autoconsumo"
 },
 "price": "4000",
 "priceCurrency": "EUR"
 },
 {
 "@type": "Offer",
 "itemOffered": {
 "@type": "Service",
 "name": "Kit Solar 5kW com Injeção na Rede"
 },
 "price": "6500",
 "priceCurrency": "EUR"
 },
 {
 "@type": "Offer",
 "itemOffered": {
 "@type": "Service",
 "name": "Manutenção Anual de Sistema Solar"
 },
 "price": "150",
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
 Painéis <span className="text-blue-900">Solares Fotovoltaicos</span> em Trás-os-Montes
 </h1>
 <p className="text-xl mb-8 max-w-3xl">
 Produza a sua própria energia elétrica com painéis solares de alta eficiência. 
 Reduza a fatura de electricidade em até 70% e ganhe independência energética.
 </p>
 <div className="flex flex-col sm:flex-row gap-4">
 <a
 href={`tel:${ACTIVE_CONFIG.phone}`}
 className="bg-white text-amber-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
 >
 📞 Simulação Gratuita: {ACTIVE_CONFIG.phone}
 </a>
 <a
 href={`https://wa.me/${ACTIVE_CONFIG.whatsappNumber}?text=${encodeURIComponent("Olá, gostaria de simulação para painéis solares em Trás-os-Montes. Podem ajudar?")}`}
 target="_blank"
 rel="noopener noreferrer"
 className="bg-blue-900 hover:bg-blue-800 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
 >
 💬 WhatsApp para Simulação
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
 Energia Solar para Casa e Empresa
 </h2>
 
 <div className="space-y-6 text-lg text-gray-700">
 <p>
 Especializados em <strong>painéis solares</strong> e <strong>energia solar</strong> em toda a região de Trás-os-Montes. 
 Instalamos sistemas fotovoltaicos para autoconsumo, com ou sem injecção na rede eléctrica.
 </p>
 
 <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Processo de Instalação</h3>
 <ol className="space-y-4 list-decimal pl-5">
 <li><strong>Simulação:</strong> Análise do consumo e proposta de sistema ideal</li>
 <li><strong>Projeto:</strong> Estudo técnico e pedidos de licenciamento</li>
 <li><strong>Instalação:</strong> Montagem dos painéis, inversores e equipamentos</li>
 <li><strong>Ligação:</strong> Conexão ao quadro elétrico e sistema existente</li>
 <li><strong>Testes:</strong> Verificação de produção e segurança</li>
 <li><strong>Legalização:</strong> Documentação em conformidade com a DGEG (registo em curso); contrato com comercializadora</li>
 </ol>
 
 <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Componentes do Sistema</h3>
 <ul className="space-y-3">
 <li className="flex items-center gap-3">
 <span className="text-amber-500 text-xl">☀️</span>
 <span><strong>Painéis fotovoltaicos:</strong> Monocristalinos de alta eficiência (400W+)</span>
 </li>
 <li className="flex items-center gap-3">
 <span className="text-amber-500 text-xl">⚡</span>
 <span><strong>Inversor solar:</strong> Converte corrente contínua em alternada</span>
 </li>
 <li className="flex items-center gap-3">
 <span className="text-amber-500 text-xl">📊</span>
 <span><strong>Sistema de monitorização:</strong> App para acompanhar produção em tempo real</span>
 </li>
 <li className="flex items-center gap-3">
 <span className="text-amber-500 text-xl">🏗️</span>
 <span><strong>Estruturas de fixação:</strong> Para telhado inclinado, plano ou solo</span>
 </li>
 <li className="flex items-center gap-3">
 <span className="text-amber-500 text-xl">🔋</span>
 <span><strong>Baterias (opcional):</strong> Armazenamento para consumo noturno</span>
 </li>
 <li className="flex items-center gap-3">
 <span className="text-amber-500 text-xl">🔧</span>
 <span><strong>Proteções elétricas:</strong> Disjuntores e dispositivos de segurança</span>
 </li>
 </ul>
 
 <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Vantagens da Energia Solar</h3>
 <ul className="space-y-2">
 <li className="flex items-center gap-3">
 <span className="text-green-500">💰</span>
 <span><strong>Redução de custos:</strong> Economia de 50-70% na fatura de electricidade</span>
 </li>
 <li className="flex items-center gap-3">
 <span className="text-green-500">🌱</span>
 <span><strong>Sustentabilidade:</strong> Energia 100% limpa e renovável</span>
 </li>
 <li className="flex items-center gap-3">
 <span className="text-green-500">📈</span>
 <span><strong>Valorização imobiliária:</strong> Imóvel com certificado energético melhorado</span>
 </li>
 <li className="flex items-center gap-3">
 <span className="text-green-500">🛡️</span>
 <span><strong>Independência:</strong> Menor dependência das flutuações de preços</span>
 </li>
 <li className="flex items-center gap-3">
 <span className="text-green-500">🏭</span>
 <span><strong>Incentivos fiscais:</strong> IVA a 6% e possíveis apoios regionais</span>
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
 <h4 className="text-lg font-semibold text-gray-900">Kit Solar 3kW (Autoconsumo)</h4>
 <span className="bg-amber-100 text-amber-800 font-bold px-4 py-2 rounded-full">€4.000 - €5.500</span>
 </div>
 <p className="text-gray-600">8 painéis, inversor, monitorização, instalação</p>
 </div>
 
 <div className="border-b pb-4">
 <div className="flex justify-between items-center mb-2">
 <h4 className="text-lg font-semibold text-gray-900">Kit Solar 5kW (Com Injeção)</h4>
 <span className="bg-amber-100 text-amber-800 font-bold px-4 py-2 rounded-full">€6.500 - €8.500</span>
 </div>
 <p className="text-gray-600">13 painéis, inversor bidirecional, documentação conforme DGEG (registo em curso)</p>
 </div>
 
 <div className="border-b pb-4">
 <div className="flex justify-between items-center mb-2">
 <h4 className="text-lg font-semibold text-gray-900">Sistema com Baterias 10kWh</h4>
 <span className="bg-amber-100 text-amber-800 font-bold px-4 py-2 rounded-full">€10.000 - €15.000</span>
 </div>
 <p className="text-gray-600">Autonomia noturna, maior independência</p>
 </div>
 
 <div className="border-b pb-4">
 <div className="flex justify-between items-center mb-2">
 <h4 className="text-lg font-semibold text-gray-900">Manutenção Anual</h4>
 <span className="bg-amber-100 text-amber-800 font-bold px-4 py-2 rounded-full">€150 - €300</span>
 </div>
 <p className="text-gray-600">Limpeza, verificação de desempenho, garantia</p>
 </div>
 </div>
 
 <div className="mt-8 p-4 bg-amber-50 rounded-lg">
 <p className="text-amber-800 font-semibold">
 💡 <strong>Retorno do Investimento:</strong> Em Trás-os-Montes, com boa exposição solar, 
 o payback médio é de 5-7 anos. Após este período, energia praticamente gratuita por 20+ anos!
 </p>
 </div>
 
 <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Condições Ideais em Trás-os-Montes</h3>
 <ul className="space-y-2 text-sm">
 <li className="flex items-start gap-3">
 <span className="text-amber-500 mt-1">☀️</span>
 <span><strong>Boa exposição solar:</strong> Média de 2.800 horas de sol/ano na região</span>
 </li>
 <li className="flex items-start gap-3">
 <span className="text-amber-500 mt-1">🏠</span>
 <span><strong>Telhado sul/sudoeste:</strong> Orientação ideal para máxima produção</span>
 </li>
 <li className="flex items-start gap-3">
 <span className="text-amber-500 mt-1">📊</span>
 <span><strong>Consumo adequado:</strong> Ideal para consumos acima de 2.500 kWh/ano</span>
 </li>
 <li className="flex items-start gap-3">
 <span className="text-amber-500 mt-1">🏢</span>
 <span><strong>Empresas:</strong> Excelente para comércios com consumo diurno</span>
 </li>
 </ul>
 
 <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Financiamento Disponível</h3>
 <div className="grid grid-cols-2 gap-3">
 {[
 "IVA 6%", "Fundos UE", 
 "Crédito Bancário", "Leasing"
 ].map((fin, idx) => (
 <div key={idx} className="bg-gray-100 px-4 py-2 rounded-lg text-center text-sm">
 {fin}
 </div>
 ))}
 </div>
 
 <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Zonas de Atuação</h3>
 <div className="grid grid-cols-2 gap-3">
 {[
 "Trás-os-Montes", "Bragança", "Mirandela", "Chaves",
 "Valpaços", "Vinhais", "Miranda do Douro", "Mogadouro"
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
 title="Perguntas Frequentes sobre Painéis Solares"
 faqs={[
 {
 question: "Quanto posso economizar com painéis solares?",
 answer: "Depende do consumo e sistema instalado. Em média, famílias em Trás-os-Montes economizam 60-80% na fatura eléctrica. O retorno do investimento ocorre em 5-7 anos."
 },
 {
 question: "Preciso de licença para instalar painéis solares?",
 answer: "Sim, para sistemas acima de 350W ou com injeção na rede. Acompanhamos a documentação em conformidade com a DGEG (registo em curso); o licenciamento na câmara e o contrato com a comercializadora são tratados com técnico responsável inscrito na DGEG ou entidade acreditada."
 },
 {
 question: "Os painéis funcionam em dias nublados?",
 answer: "Sim, produzem energia mesmo com céu nublado, embora em menor quantidade. Em Trás-os-Montes, a produção anual é excelente devido às muitas horas de sol."
 }
 ]}
 />
 </section>
 {/* Internal links to city pages */}
 <section className="py-16">
 <div className="container mx-auto px-4">
 <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
 Energia Solar em Toda a Região
 </h2>
 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
 <a href="/eletricista-macedo-cavaleiros" className="bg-white hover:bg-amber-50 border border-gray-300 rounded-lg p-4 text-center transition-colors">
 <div className="text-amber-600 font-bold">Trás-os-Montes</div>
 <div className="text-sm text-gray-600">Painéis solares</div>
 </a>
 <a href="/eletricista-braganca" className="bg-white hover:bg-amber-50 border border-gray-300 rounded-lg p-4 text-center transition-colors">
 <div className="text-amber-600 font-bold">Bragança</div>
 <div className="text-sm text-gray-600">Energia solar</div>
 </a>
 <a href="/eletricista-mirandela" className="bg-white hover:bg-amber-50 border border-gray-300 rounded-lg p-4 text-center transition-colors">
 <div className="text-amber-600 font-bold">Mirandela</div>
 <div className="text-sm text-gray-600">Fotovoltaico</div>
 </a>
 <a href="/eletricista-chaves" className="bg-white hover:bg-amber-50 border border-gray-300 rounded-lg p-4 text-center transition-colors">
 <div className="text-amber-600 font-bold">Chaves</div>
 <div className="text-sm text-gray-600">Autoconsumo</div>
 </a>
 <a href="/eletricista-valpacos" className="bg-white hover:bg-amber-50 border border-gray-300 rounded-lg p-4 text-center transition-colors">
 <div className="text-amber-600 font-bold">Valpaços</div>
 <div className="text-sm text-gray-600">Redução fatura</div>
 </a>
 </div>
 </div>
 </section>
 {/* CTA Final */}
 <section className="py-16 bg-gradient-to-r from-blue-900 to-amber-700 text-white">
 <div className="container mx-auto px-4 text-center">
 <h2 className="text-3xl font-bold mb-6">
 Quer Produzir a Sua Própria Energia em Trás-os-Montes?
 </h2>
 <p className="text-xl mb-8 max-w-2xl mx-auto">
 Contacte-nos para uma simulação gratuita e personalizada. 
 Descubra quanto pode economizar com painéis solares na sua casa ou empresa.
 </p>
 <div className="flex flex-col sm:flex-row gap-6 justify-center">
 <a
 href={`tel:${ACTIVE_CONFIG.phone}`}
 className="bg-white text-amber-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
 >
 📞 {ACTIVE_CONFIG.phone}
 </a>
 <a
 href={`https://wa.me/${ACTIVE_CONFIG.whatsappNumber}?text=${encodeURIComponent("Olá, gostaria de simulação para painéis solares em Trás-os-Montes. Podem ajudar?")}`}
 target="_blank"
 rel="noopener noreferrer"
 className="bg-amber-600 hover:bg-amber-500 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
 >
 💬 WhatsApp para Simulação
 </a>
 </div>
 </div>
 </section>
 </main>
 
 <Footer />
 </>
 );
}