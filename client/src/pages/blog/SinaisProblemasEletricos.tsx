// Blog article: "Sinais de Problemas Elétricos em Casa"
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEffect } from 'react';
import { Phone, AlertTriangle, CheckCircle, Zap } from 'lucide-react';
export default function SinaisProblemasEletricos() {
 useEffect(() => {
 document.title = "7 Sinais de Problemas Elétricos em Casa - Quando Chamar Eletricista | ";
 
 let metaDescription = document.querySelector('meta[name="description"]');
 if (!metaDescription) {
 metaDescription = document.createElement('meta');
 metaDescription.setAttribute('name', 'description');
 document.head.appendChild(metaDescription);
 }
 metaDescription.setAttribute('content', 'Aprenda a identificar os 7 sinais de alerta de problemas elétricos em casa. Saiba quando é urgente chamar um eletricista profissional. Guia completo de segurança elétrica.');
 let canonical = document.querySelector('link[rel="canonical"]');
 if (!canonical) {
 canonical = document.createElement('link');
 canonical.setAttribute('rel', 'canonical');
 document.head.appendChild(canonical);
 }
 canonical.setAttribute('href', 'https://eletricista-norte-reparos.pt/blog/sinais-problemas-eletricos-casa');
 // JSON-LD Article Schema
 const script = document.createElement('script');
 script.type = 'application/ld+json';
 script.text = JSON.stringify({
 "@context": "https://schema.org",
 "@type": "Article",
 "headline": "7 Sinais de Problemas Elétricos em Casa - Quando Chamar Eletricista",
 "description": "Aprenda a identificar os 7 sinais de alerta de problemas elétricos em casa. Saiba quando é urgente chamar um eletricista profissional. Guia completo de segurança elétrica.",
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
 "datePublished": "2026-01-01",
 "dateModified": "2026-06-17",
 "url": "https://eletricista-norte-reparos.pt/blog/sinais-problemas-eletricos-casa",
 "mainEntityOfPage": {
 "@type": "WebPage",
 "@id": "https://eletricista-norte-reparos.pt/blog/sinais-problemas-eletricos-casa"
 }
 });
 document.head.appendChild(script);
 const faqScript = document.createElement('script');
 faqScript.type = 'application/ld+json';
 faqScript.id = 'schema-faq-sinais-problemas-eletricos';
 faqScript.text = JSON.stringify({
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": [
 { "@type": "Question", "name": "O que significa o disjuntor disparar frequentemente?", "acceptedAnswer": { "@type": "Answer", "text": "Se o disjuntor dispara mais de uma vez por semana, indica sobrecarga no circuito ou curto-circuito. Não force o disjuntor: desligue aparelhos e chame um eletricista para inspeção." } },
 { "@type": "Question", "name": "Cheiro a queimado em casa sem origem visível é grave?", "acceptedAnswer": { "@type": "Answer", "text": "Sim, é urgente. Um cheiro a plástico ou borracha queimada pode indicar fios a derreter dentro das paredes. Desligue o quadro elétrico e chame imediatamente um eletricista — risco de incêndio." } },
 { "@type": "Question", "name": "Tomadas ou interruptores quentes ao toque — o que fazer?", "acceptedAnswer": { "@type": "Answer", "text": "Tomadas quentes indicam ligações soltas ou fios subdimensionados. Pare imediatamente de usar a tomada e agende inspeção com um eletricista profissional." } },
 { "@type": "Question", "name": "Luzes que tremem ou piscam são sinal de problema sério?", "acceptedAnswer": { "@type": "Answer", "text": "Pode ser apenas uma lâmpada a falhar, mas se acontece em várias divisões o problema está na instalação elétrica. Teste com lâmpadas novas. Se persistir, chame um eletricista." } },
 { "@type": "Question", "name": "Sinto choques leves ao tocar em aparelhos — é perigoso?", "acceptedAnswer": { "@type": "Answer", "text": "Sim, é urgente. Sentir formigueiro ao tocar em aparelhos indica fuga de corrente com risco real de eletrocussão. É um problema de terra — não use o aparelho e chame eletricista imediatamente." } },
 { "@type": "Question", "name": "A conta de luz subiu muito sem razão pode ser problema elétrico?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. Aumento súbito de consumo sem mudança de hábitos pode indicar fuga de corrente ou equipamento defeituoso. Peça uma inspeção elétrica para identificar consumos fantasma." } },
 { "@type": "Question", "name": "Faíscas ao ligar aparelhos à tomada são normais?", "acceptedAnswer": { "@type": "Answer", "text": "Pequenas faíscas ao ligar podem ser normais, mas faíscas grandes ou frequentes indicam arco elétrico — situação perigosa. Não use a tomada e chame um eletricista profissional." } }
 ]
 });
 document.head.appendChild(faqScript);
 return () => {
 document.head.removeChild(script);
 const faqEl = document.getElementById('schema-faq-sinais-problemas-eletricos');
 if (faqEl) document.head.removeChild(faqEl);
 };
 }, []);
 const sinais = [
 {
 titulo: "1. Disjuntor que Dispara Frequentemente",
 descricao: "Se o disjuntor dispara mais de uma vez por semana, pode indicar sobrecarga no circuito ou curto-circuito.",
 urgencia: "alta",
 acao: "Não force o disjuntor. Desligue aparelhos e chame um eletricista."
 },
 {
 titulo: "2. Cheiro a Queimado sem Origem Visível",
 descricao: "Um cheiro a plástico ou borracha queimada pode indicar fios a derreter dentro das paredes.",
 urgencia: "critica",
 acao: "URGENTE: Desligue o quadro elétrico e chame imediatamente."
 },
 {
 titulo: "3. Tomadas ou Interruptores Quentes",
 descricao: "Tomadas quentes ao toque indicam ligações soltas ou fios subdimensionados.",
 urgencia: "alta",
 acao: "Pare de usar a tomada e agende inspeção."
 },
 {
 titulo: "4. Luzes que Tremem ou Piscam",
 descricao: "Pode ser lâmpada a falhar, mas se acontece em várias divisões, o problema é na instalação.",
 urgencia: "media",
 acao: "Teste com lâmpadas novas. Se persistir, chame eletricista."
 },
 {
 titulo: "5. Faíscas ao Ligar Aparelhos",
 descricao: "Pequenas faíscas podem ser normais, mas faíscas grandes ou frequentes são perigosas.",
 urgencia: "alta",
 acao: "Não use a tomada. Pode haver arco elétrico."
 },
 {
 titulo: "6. Choques Elétricos Leves",
 descricao: "Sentir formigueiro ao tocar em aparelhos indica fuga de corrente - risco de eletrocussão.",
 urgencia: "critica",
 acao: "URGENTE: Problema de terra. Não use o aparelho."
 },
 {
 titulo: "7. Conta de Luz Anormalmente Alta",
 descricao: "Aumento súbito sem mudança de hábitos pode indicar fuga de corrente ou equipamento defeituoso.",
 urgencia: "media",
 acao: "Peça uma inspeção para identificar consumos fantasma."
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
 ⚡ GUIA DE SEGURANÇA
 </span>
 <h1 className="text-4xl md:text-5xl font-black mb-6">
 7 Sinais de Problemas Elétricos em Casa
 </h1>
 <p className="text-xl opacity-90">
 Aprenda a identificar perigos elétricos antes que seja tarde. A sua segurança em primeiro lugar.
 </p>
 </div>
 </div>
 </section>
 {/* Intro */}
 <section className="py-12 bg-red-50">
 <div className="container max-w-3xl">
 <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg border-l-4 border-red-500">
 <AlertTriangle className="w-8 h-8 text-red-500 flex-shrink-0" />
 <div>
 <h2 className="text-xl font-bold text-red-700 mb-2">Atenção: Eletricidade Mata</h2>
 <p className="text-gray-700">
 Em Portugal, ocorrem dezenas de incêndios domésticos por ano causados por problemas elétricos. 
 Muitos podiam ser evitados se os sinais de alerta fossem reconhecidos a tempo.
 </p>
 </div>
 </div>
 </div>
 </section>
 {/* Lista de Sinais */}
 <section className="py-16">
 <div className="container max-w-3xl">
 <div className="space-y-8">
 {sinais.map((sinal, index) => (
 <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
 <div className={`p-6 ${
 sinal.urgencia === 'critica' ? 'bg-red-50 border-l-4 border-red-500' :
 sinal.urgencia === 'alta' ? 'bg-orange-50 border-l-4 border-orange-500' :
 'bg-yellow-50 border-l-4 border-yellow-500'
 }`}>
 <div className="flex items-center gap-2 mb-2">
 <span className={`text-xs font-bold px-2 py-1 rounded ${
 sinal.urgencia === 'critica' ? 'bg-red-500 text-white' :
 sinal.urgencia === 'alta' ? 'bg-orange-500 text-white' :
 'bg-yellow-500 text-white'
 }`}>
 {sinal.urgencia === 'critica' ? '🚨 CRÍTICO' : 
 sinal.urgencia === 'alta' ? '⚠️ ALTA' : '⚡ MÉDIA'}
 </span>
 </div>
 <h3 className="text-xl font-bold mb-3">{sinal.titulo}</h3>
 <p className="text-gray-700 mb-4">{sinal.descricao}</p>
 <div className="flex items-start gap-2 bg-white/50 p-3 rounded-lg">
 <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
 <p className="text-sm"><strong>O que fazer:</strong> {sinal.acao}</p>
 </div>
 </div>
 </article>
 ))}
 </div>
 </div>
 </section>
 {/* CTA */}
 <section className="py-16 bg-orange-500 text-white">
 <div className="container text-center">
 <Zap className="w-16 h-16 mx-auto mb-6 opacity-80" />
 <h2 className="text-3xl font-black mb-4">
 Reconheceu Algum Destes Sinais?
 </h2>
 <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
 Não arrisque. Uma inspeção elétrica pode salvar a sua casa e a sua família.
 Sem compromisso e sem compromisso.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a href="tel:+351932321892" className="inline-flex items-center justify-center gap-2 bg-white text-orange-500 px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all shadow-lg">
 <Phone className="w-6 h-6" />
 932 321 892
 </a>
 <a href="https://wa.me/351932321892?text=Olá,%20identifiquei%20um%20problema%20elétrico%20em%20casa.%20Podem%20ajudar?" className="inline-flex items-center justify-center gap-2 bg-green-700 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-green-800 transition-all shadow-lg">
 💬 WhatsApp
 </a>
 </div>
 </div>
 </section>
 </main>
 <Footer />
 </div>
 );
}
