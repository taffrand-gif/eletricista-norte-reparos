// Blog article: "Renovação Elétrica em Casas Antigas de Trás-os-Montes"
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEffect } from 'react';
import { Phone, Home, AlertTriangle, CheckCircle, Zap } from 'lucide-react';
export default function InstalacaoEletricaCasaAntiga() {
 useEffect(() => {
 document.title = "Renovação Elétrica em Casas Antigas de Trás-os-Montes: Guia Completo | ";
 
 let metaDescription = document.querySelector('meta[name="description"]');
 if (!metaDescription) {
 metaDescription = document.createElement('meta');
 metaDescription.setAttribute('name', 'description');
 document.head.appendChild(metaDescription);
 }
 metaDescription.setAttribute('content', 'Guia completo para renovar a instalação elétrica em casas antigas de pedra e granito em Trás-os-Montes. Normas, custos e soluções práticas.');
 let canonical = document.querySelector('link[rel="canonical"]');
 if (!canonical) {
 canonical = document.createElement('link');
 canonical.setAttribute('rel', 'canonical');
 document.head.appendChild(canonical);
 }
 canonical.setAttribute('href', 'https://eletricista-norte-reparos.pt/blog/instalacao-eletrica-casa-antiga-renovacao');
 // JSON-LD Article Schema
 const script = document.createElement('script');
 script.type = 'application/ld+json';
 script.text = JSON.stringify({
 "@context": "https://schema.org",
 "@type": "Article",
 "headline": "Renovação Elétrica em Casas Antigas de Trás-os-Montes",
 "description": "Guia para renovar instalação elétrica em casas antigas de pedra: normas, custos e soluções.",
 "author": {
 "@type": "Organization",
 "name": "Norte Reparos"
 },
 "publisher": {
 "@type": "Organization",
 "name": "Norte Reparos",
 "logo": {
 "@type": "ImageObject",
 "url": "https://eletricista-norte-reparos.pt/logo.png"
 }
 },
 "datePublished": "2026-02-19",
 "dateModified": "2026-02-19"
 });
 document.head.appendChild(script);

 const howtoScript = document.createElement('script');
 howtoScript.type = 'application/ld+json';
 howtoScript.text = JSON.stringify({
 "@context": "https://schema.org",
 "@type": "HowTo",
 "name": "Como Renovar a Instalação Elétrica de uma Casa Antiga",
 "description": "Guia passo a passo para renovar a instalação elétrica de casas antigas de pedra em Trás-os-Montes, respeitando a arquitetura e cumprindo as normas NP.",
 "totalTime": "P3D",
 "step": [
 { "@type": "HowToStep", "position": 1, "name": "Inspeção e Diagnóstico", "text": "Avalie o estado da instalação, identifique perigos e planeie a intervenção. Um eletricista profissional inspeciona quadro, cabos e tomadas." },
 { "@type": "HowToStep", "position": 2, "name": "Projeto Elétrico", "text": "Desenhe o novo layout respeitando a arquitetura e minimizando o impacto visual. Defina os circuitos e a localização do novo quadro." },
 { "@type": "HowToStep", "position": 3, "name": "Instalação de Terra", "text": "Crave vareta de terra no exterior e ligue a todos os circuitos. A ligação à terra é obrigatória pela norma NP elétrica portuguesa." },
 { "@type": "HowToStep", "position": 4, "name": "Substituição de Cabos", "text": "Instale novos cabos de cobre em calhas ou tubagem, sem destruir paredes. Use calhas técnicas ou rodapés elétricos em casas de pedra ou granito." },
 { "@type": "HowToStep", "position": 5, "name": "Instalação do Quadro Elétrico Moderno", "text": "Instale quadro com disjuntores magnetotérmicos e diferencial 30mA para proteção completa contra sobrecargas e fugas à terra." },
 { "@type": "HowToStep", "position": 6, "name": "Certificação Elétrica", "text": "Emita e entregue a declaração de trabalho garantido por escrito, obrigatória para legalização da instalação." }
 ]
 });
 document.head.appendChild(howtoScript);

 const faqScript = document.createElement('script');
 faqScript.type = 'application/ld+json';
 faqScript.text = JSON.stringify({
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": [
 {
 "@type": "Question",
 "name": "Como sei que preciso de renovar a instalação elétrica?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Os principais sinais são: instalação com mais de 30 anos sem renovação, fios de alumínio ou tecido, ausência de fio de terra (tomadas de 2 pinos), quadro elétrico com fusíveis cerâmicos, tomadas e interruptores partidos ou queimados, e disjuntores que disparam frequentemente."
 }
 },
 {
 "@type": "Question",
 "name": "Quanto custa renovar a instalação elétrica de uma casa antiga?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Uma renovação parcial (quadro, terra e circuitos críticos) custa entre 1.500€ e 3.000€. Uma renovação completa de um T2 com certificação fica entre 3.500€ e 6.000€. Para casas grandes (T3/T4) com múltiplos circuitos, o valor varia entre 6.000€ e 10.000€. Os valores incluem material, mão-de-obra e certificação."
 }
 },
 {
 "@type": "Question",
 "name": "É possível renovar sem destruir as paredes de pedra?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Sim. Existem soluções discretas que preservam a estética: calhas técnicas em PVC que seguem rodapés e cantos, rodapés elétricos com canal interno para cabos, tubagem à vista de estilo industrial e furação mínima com broca diamante quando é necessário perfurar granito."
 }
 },
 {
 "@type": "Question",
 "name": "A certificação elétrica é obrigatória após a renovação?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Sim. Qualquer renovação elétrica em Portugal deve cumprir as Regras Técnicas das Instalações Elétricas (RTIEBT). Após a renovação é obrigatório obter o certificado emitido por eletricista com experiência. Sem ele, não pode vender nem arrendar o imóvel."
 }
 }
 ]
 });
 document.head.appendChild(faqScript);

 return () => {
 document.head.removeChild(script);
 if (howtoScript.parentNode) document.head.removeChild(howtoScript);
 if (faqScript.parentNode) document.head.removeChild(faqScript);
 };
 }, []);
 const desafios = [
 {
 desafio: "Paredes de Pedra/Granito",
 problema: "Difícil passar cabos sem danificar a estrutura",
 solucao: "Calhas técnicas, rodapés elétricos ou tubagem à vista discreta"
 },
 {
 desafio: "Ausência de Terra",
 problema: "Instalações antigas sem fio de terra (risco de eletrocussão)",
 solucao: "Instalação de vareta de terra e ligação a todos os circuitos"
 },
 {
 desafio: "Fios de Alumínio",
 problema: "Fios antigos oxidados e perigosos",
 solucao: "Substituição total por cobre com secção adequada"
 },
 {
 desafio: "Quadro Elétrico Obsoleto",
 problema: "Fusíveis cerâmicos sem proteção diferencial",
 solucao: "Quadro moderno com disjuntores e diferencial 30mA"
 },
 {
 desafio: "Humidade nas Paredes",
 problema: "Infiltrações que danificam a instalação",
 solucao: "Tratamento de humidades + material IP65 em zonas críticas"
 }
 ];
 return (
 <div className="min-h-screen flex flex-col">
 <Header />
 <main className="flex-grow">
 {/* Hero */}
 <section className="bg-gradient-to-br from-orange-500 to-orange-600 text-white py-16">
 <div className="container">
 <div className="max-w-3xl mx-auto text-center">
 <span className="inline-block bg-white/20 px-4 py-1 rounded-full text-sm font-bold mb-4">
 🏛️ CASAS ANTIGAS
 </span>
 <h1 className="text-4xl md:text-5xl font-black mb-6">
 Renovação Elétrica em Casas Antigas de Trás-os-Montes
 </h1>
 <p className="text-xl opacity-90">
 Modernize a instalação elétrica preservando o carácter da sua casa de pedra.
 </p>
 </div>
 </div>
 </section>
 {/* Intro */}
 <section className="py-12">
 <div className="container max-w-3xl">
 <div className="prose prose-lg max-w-none">
 <p className="text-xl text-gray-700 leading-relaxed">
 As <strong>casas antigas de Trás-os-Montes</strong> — construídas em pedra e granito — 
 são património valioso, mas muitas têm instalações elétricas perigosamente desatualizadas.
 </p>
 <p className="text-gray-700">
 Seja em <a href="/eletricista-chaves" className="text-orange-500 hover:underline">Chaves</a>, 
 <a href="/eletricista-braganca" className="text-orange-500 hover:underline"> Bragança</a> ou 
 <a href="/eletricista-vila-real" className="text-orange-500 hover:underline"> Vila Real</a>, 
 renovar a instalação elétrica é essencial para segurança, conforto e valorização do imóvel.
 </p>
 </div>
 </div>
 </section>
 {/* Sinais de Alerta */}
 <section className="py-12 bg-red-50">
 <div className="container max-w-3xl">
 <h2 className="text-3xl font-black mb-6">Sinais de Que Precisa Renovar</h2>
 <div className="bg-white p-6 rounded-xl shadow-lg">
 <div className="space-y-3">
 <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
 <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
 <p className="text-gray-700">Instalação com mais de 30 anos sem renovação</p>
 </div>
 <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
 <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
 <p className="text-gray-700">Fios de alumínio ou tecido (muito antigos)</p>
 </div>
 <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
 <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
 <p className="text-gray-700">Ausência de fio de terra (tomadas de 2 pinos)</p>
 </div>
 <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
 <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
 <p className="text-gray-700">Quadro elétrico com fusíveis cerâmicos</p>
 </div>
 <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
 <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
 <p className="text-gray-700">Tomadas e interruptores partidos ou queimados</p>
 </div>
 <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
 <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
 <p className="text-gray-700">Disjuntores que disparam frequentemente</p>
 </div>
 </div>
 </div>
 </div>
 </section>
 {/* Desafios Específicos */}
 <section className="py-16">
 <div className="container max-w-3xl">
 <h2 className="text-3xl font-black mb-8 text-center">Desafios em Casas Antigas</h2>
 <div className="space-y-6">
 {desafios.map((item, index) => (
 <article key={index} className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500">
 <h3 className="text-xl font-bold mb-2">{item.desafio}</h3>
 <div className="mb-3">
 <p className="text-sm text-red-600 mb-1"><strong>Problema:</strong></p>
 <p className="text-gray-700">{item.problema}</p>
 </div>
 <div className="bg-green-50 p-3 rounded-lg">
 <p className="text-sm flex items-start gap-2">
 <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
 <span><strong>Solução:</strong> {item.solucao}</span>
 </p>
 </div>
 </article>
 ))}
 </div>
 </div>
 </section>
 {/* Soluções Discretas */}
 <section className="py-12 bg-gray-50">
 <div className="container max-w-3xl">
 <h2 className="text-3xl font-black mb-6">Soluções Discretas Para Preservar a Estética</h2>
 <div className="bg-white p-6 rounded-xl shadow-lg">
 <p className="text-gray-700 mb-4">
 Renovar a instalação elétrica não significa destruir paredes de pedra. 
 Existem soluções modernas e discretas:
 </p>
 <div className="space-y-4">
 <div className="p-4 bg-blue-50 rounded-lg">
 <h3 className="font-bold mb-2">1. Calhas Técnicas</h3>
 <p className="text-sm text-gray-700">
 Calhas em PVC brancas ou cor madeira que seguem rodapés e cantos. 
 Discretas e fáceis de instalar sem furar paredes.
 </p>
 </div>
 <div className="p-4 bg-blue-50 rounded-lg">
 <h3 className="font-bold mb-2">2. Rodapés Elétricos</h3>
 <p className="text-sm text-gray-700">
 Rodapés com canal interno para cabos. Substituem os rodapés existentes 
 e integram-se perfeitamente.
 </p>
 </div>
 <div className="p-4 bg-blue-50 rounded-lg">
 <h3 className="font-bold mb-2">3. Tubagem à Vista Estilo Industrial</h3>
 <p className="text-sm text-gray-700">
 Tubos metálicos aparentes que criam um estilo rústico-moderno, 
 valorizando a pedra natural.
 </p>
 </div>
 <div className="p-4 bg-blue-50 rounded-lg">
 <h3 className="font-bold mb-2">4. Furação Mínima com Broca Diamante</h3>
 <p className="text-sm text-gray-700">
 Quando necessário furar, usamos brocas diamante que perfuram granito 
 sem rachar ou danificar.
 </p>
 </div>
 </div>
 </div>
 </div>
 </section>
 {/* Etapas da Renovação */}
 <section className="py-12">
 <div className="container max-w-3xl">
 <h2 className="text-3xl font-black mb-6">Etapas da Renovação Elétrica</h2>
 <div className="bg-white p-6 rounded-xl shadow-lg space-y-4">
 <div className="flex items-start gap-4">
 <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
 <div>
 <h3 className="font-bold mb-1">Inspeção e Diagnóstico</h3>
 <p className="text-sm text-gray-700">
 Avaliamos o estado da instalação, identificamos perigos e planeamos a intervenção.
 </p>
 </div>
 </div>
 <div className="flex items-start gap-4">
 <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
 <div>
 <h3 className="font-bold mb-1">Projeto Elétrico</h3>
 <p className="text-sm text-gray-700">
 Desenhamos o novo layout respeitando a arquitetura e minimizando impacto visual.
 </p>
 </div>
 </div>
 <div className="flex items-start gap-4">
 <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
 <div>
 <h3 className="font-bold mb-1">Instalação de Terra</h3>
 <p className="text-sm text-gray-700">
 Cravamos vareta de terra no exterior e ligamos a todos os circuitos (obrigatório).
 </p>
 </div>
 </div>
 <div className="flex items-start gap-4">
 <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
 <div>
 <h3 className="font-bold mb-1">Substituição de Cabos</h3>
 <p className="text-sm text-gray-700">
 Instalamos novos cabos de cobre em calhas ou tubagem, sem destruir paredes.
 </p>
 </div>
 </div>
 <div className="flex items-start gap-4">
 <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">5</div>
 <div>
 <h3 className="font-bold mb-1">Quadro Elétrico Moderno</h3>
 <p className="text-sm text-gray-700">
 Instalamos quadro com disjuntores magnetotérmicos e diferencial 30mA.
 </p>
 </div>
 </div>
 <div className="flex items-start gap-4">
 <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">6</div>
 <div>
 <h3 className="font-bold mb-1">Certificação Elétrica</h3>
 <p className="text-sm text-gray-700">
 Emitimos Orçamento por escrito obrigatório para legalização da instalação.
 </p>
 </div>
 </div>
 </div>
 </div>
 </section>
 {/* Normas e Certificação */}
 <section className="py-12 bg-blue-50">
 <div className="container max-w-3xl">
 <h2 className="text-3xl font-black mb-6">Normas e Certificação Obrigatória</h2>
 <div className="bg-white p-6 rounded-xl shadow-lg">
 <p className="text-gray-700 mb-4">
 Qualquer renovação elétrica em Portugal deve cumprir as <strong>Regras Técnicas das Instalações Elétricas (RTIEBT)</strong>.
 </p>
 <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500 mb-4">
 <p className="text-sm text-gray-700">
 <strong>certificação elétrica:</strong> Após a renovação, é obrigatório obter o certificado 
 emitido por eletricista com experiência. Sem ele, não pode vender ou arrendar o imóvel.
 </p>
 </div>
 <p className="text-gray-700 mb-3"><strong>Requisitos mínimos:</strong></p>
 <ul className="space-y-2">
 <li className="flex items-start gap-2">
 <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
 <span className="text-gray-700">Fio de terra em todos os circuitos</span>
 </li>
 <li className="flex items-start gap-2">
 <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
 <span className="text-gray-700">Disjuntor diferencial 30mA</span>
 </li>
 <li className="flex items-start gap-2">
 <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
 <span className="text-gray-700">Cabos de cobre com secção adequada</span>
 </li>
 <li className="flex items-start gap-2">
 <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
 <span className="text-gray-700">Quadro elétrico normalizado</span>
 </li>
 <li className="flex items-start gap-2">
 <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
 <span className="text-gray-700">Tomadas e interruptores certificados</span>
 </li>
 </ul>
 </div>
 </div>
 </section>
 {/* Custos */}
 <section className="py-12 bg-gray-50">
 <div className="container max-w-3xl">
 <h2 className="text-3xl font-black mb-6">Quanto Custa Renovar?</h2>
 <div className="bg-white p-6 rounded-xl shadow-lg">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b-2 border-gray-200">
 <th className="text-left py-3">Tipo de Renovação</th>
 <th className="text-right py-3">Custo Estimado</th>
 </tr>
 </thead>
 <tbody className="divide-y divide-gray-100">
 <tr>
 <td className="py-3">
 <strong>Parcial</strong><br/>
 <span className="text-xs text-gray-600">Quadro + terra + circuitos críticos</span>
 </td>
 <td className="text-right py-3 font-bold">1.500€ - 3.000€</td>
 </tr>
 <tr>
 <td className="py-3">
 <strong>Completa (T2)</strong><br/>
 <span className="text-xs text-gray-600">Renovação total com certificação</span>
 </td>
 <td className="text-right py-3 font-bold">3.500€ - 6.000€</td>
 </tr>
 <tr>
 <td className="py-3">
 <strong>Completa (T3/T4)</strong><br/>
 <span className="text-xs text-gray-600">Casa grande com múltiplos circuitos</span>
 </td>
 <td className="text-right py-3 font-bold">6.000€ - 10.000€</td>
 </tr>
 </tbody>
 </table>
 <p className="text-xs text-gray-600 mt-4">
 * Valores incluem material, mão-de-obra e certificação. Orçamento personalizado gratuito.
 </p>
 </div>
 </div>
 </section>
 {/* CTA */}
 <section className="py-16 bg-orange-500 text-white">
 <div className="container text-center">
 <Home className="w-16 h-16 mx-auto mb-6 opacity-80" />
 <h2 className="text-3xl font-black mb-4">
 Renove a Sua Casa Antiga com Segurança
 </h2>
 <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
 Especialistas em renovação elétrica de casas antigas em Trás-os-Montes. 
 Sem compromisso, conforme legislação portuguesa.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a href="tel:+351932321892" className="inline-flex items-center justify-center gap-2 bg-white text-orange-500 px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all shadow-lg">
 <Phone className="w-6 h-6" />
 932 321 892
 </a>
 <a href="https://wa.me/351932321892?text=Olá,%20tenho%20uma%20casa%20antiga%20e%20preciso%20renovar%20a%20instalação%20elétrica." className="inline-flex items-center justify-center gap-2 bg-green-700 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-green-800 transition-all shadow-lg">
 💬 WhatsApp
 </a>
 </div>
 </div>
 </section>
 {/* Artigos Relacionados */}
 <section className="py-12 bg-gray-50">
 <div className="container max-w-3xl">
 <h2 className="text-2xl font-black mb-6">Artigos Relacionados</h2>
 <div className="grid md:grid-cols-2 gap-4">
 <a href="/blog/quando-trocar-instalacao-eletrica" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
 <h3 className="font-bold text-orange-500 mb-1">Quando Trocar a Instalação</h3>
 <p className="text-sm text-gray-600">Sinais de que precisa renovar a instalação elétrica.</p>
 </a>
 <a href="/blog/quadro-eletrico-antigo-fusiveis-trocar" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
 <h3 className="font-bold text-orange-500 mb-1">Quadro Elétrico Antigo</h3>
 <p className="text-sm text-gray-600">Modernize o quadro elétrico da sua casa.</p>
 </a>
 <a href="/blog/protecao-sobrecargas-eletricas-casa" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
 <h3 className="font-bold text-orange-500 mb-1">Proteção Contra Sobrecargas</h3>
 <p className="text-sm text-gray-600">Como proteger a sua casa de sobrecargas elétricas.</p>
 </a>
 </div>
 </div>
 </section>
 </main>
 <Footer />
 </div>
 );
}
