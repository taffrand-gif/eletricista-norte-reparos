// Blog article: "Como Proteger a Sua Casa de Sobrecargas Elétricas"
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEffect } from 'react';
import { Phone, AlertTriangle, Shield, Zap, CheckCircle, XCircle } from 'lucide-react';
export default function ProtecaoSobrecargas() {
 useEffect(() => {
 document.title = "Como Proteger a Sua Casa de Sobrecargas Elétricas: Guia Completo 2026 | ";
 
 let metaDescription = document.querySelector('meta[name="description"]');
 if (!metaDescription) {
 metaDescription = document.createElement('meta');
 metaDescription.setAttribute('name', 'description');
 document.head.appendChild(metaDescription);
 }
 metaDescription.setAttribute('content', 'Aprenda a proteger a sua casa de sobrecargas elétricas. Disjuntores, DPS, réguas com proteção e dicas práticas para evitar danos em equipamentos.');
 let canonical = document.querySelector('link[rel="canonical"]');
 if (!canonical) {
 canonical = document.createElement('link');
 canonical.setAttribute('rel', 'canonical');
 document.head.appendChild(canonical);
 }
 canonical.setAttribute('href', 'https://eletricista-norte-reparos.pt/blog/protecao-sobrecargas-eletricas-casa');
 // JSON-LD Article Schema
 const script = document.createElement('script');
 script.type = 'application/ld+json';
 script.text = JSON.stringify({
 "@context": "https://schema.org",
 "@type": "Article",
 "headline": "Como Proteger a Sua Casa de Sobrecargas Elétricas",
 "description": "Guia completo sobre proteção contra sobrecargas elétricas: disjuntores, DPS, réguas e dicas práticas.",
 "author": {
 "@type": "Organization",
 "name": ""
 },
 "publisher": {
 "@type": "Organization",
 "name": "",
 "logo": {
 "@type": "ImageObject",
 "url": "https://eletricista-norte-reparos.pt/logo.png"
 }
 },
 "datePublished": "2026-02-19",
 "dateModified": "2026-02-19"
 });
 document.head.appendChild(script);
 return () => {
 document.head.removeChild(script);
 };
 }, []);
 const protecoes = [
 {
 tipo: "Disjuntor Diferencial",
 funcao: "Protege contra fugas de corrente e eletrocussão",
 obrigatorio: true,
 custo: "80€ - 150€"
 },
 {
 tipo: "Disjuntor Magnetotérmico",
 funcao: "Protege contra sobrecargas e curto-circuitos",
 obrigatorio: true,
 custo: "15€ - 40€ por circuito"
 },
 {
 tipo: "DPS (Dispositivo de Proteção contra Sobretensões)",
 funcao: "Protege contra picos de tensão (trovoadas, falhas na rede)",
 obrigatorio: false,
 custo: "50€ - 120€"
 },
 {
 tipo: "Régua com Proteção",
 funcao: "Protege equipamentos individuais contra picos",
 obrigatorio: false,
 custo: "20€ - 60€"
 }
 ];
 const errosComuns = [
 {
 erro: "Ligar muitos aparelhos na mesma tomada",
 risco: "Sobrecarga do circuito, aquecimento de fios, risco de incêndio",
 solucao: "Distribua a carga por várias tomadas de circuitos diferentes"
 },
 {
 erro: "Usar extensões em série (\"margarida\")",
 risco: "Sobrecarga extrema, derretimento de plásticos",
 solucao: "Use apenas uma extensão por tomada, nunca em cadeia"
 },
 {
 erro: "Ignorar disjuntores que disparam frequentemente",
 risco: "Sinal de sobrecarga crónica ou curto-circuito",
 solucao: "Chame um eletricista para avaliar o circuito"
 },
 {
 erro: "Não ter DPS instalado",
 risco: "Equipamentos eletrónicos danificados por trovoadas",
 solucao: "Instale DPS no quadro elétrico"
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
 🛡️ PROTEÇÃO ELÉTRICA
 </span>
 <h1 className="text-4xl md:text-5xl font-black mb-6">
 Como Proteger a Sua Casa de Sobrecargas Elétricas
 </h1>
 <p className="text-xl opacity-90">
 Evite danos em equipamentos e riscos de incêndio. Guia completo de proteção elétrica.
 </p>
 </div>
 </div>
 </section>
 {/* Intro */}
 <section className="py-12">
 <div className="container max-w-3xl">
 <div className="prose prose-lg max-w-none">
 <p className="text-xl text-gray-700 leading-relaxed">
 <strong>Sobrecargas elétricas</strong> são uma das principais causas de incêndios domésticos em Portugal. 
 Felizmente, com as proteções certas, pode evitar 99% dos problemas.
 </p>
 <p className="text-gray-700">
 Neste guia, vou explicar-lhe como proteger a sua casa em <a href="/eletricista-vila-real" className="text-orange-500 hover:underline">Vila Real</a>, 
 <a href="/eletricista-braganca" className="text-orange-500 hover:underline"> Bragança</a> ou 
 <a href="/eletricista-mirandela" className="text-orange-500 hover:underline"> Mirandela</a> contra sobrecargas, 
 picos de tensão e outros perigos elétricos.
 </p>
 </div>
 </div>
 </section>
 {/* O Que São Sobrecargas */}
 <section className="py-12 bg-red-50">
 <div className="container max-w-3xl">
 <h2 className="text-3xl font-black mb-6">O Que São Sobrecargas Elétricas?</h2>
 <div className="bg-white p-6 rounded-xl shadow-lg">
 <p className="text-gray-700 mb-4">
 Uma <strong>sobrecarga elétrica</strong> acontece quando a corrente que passa num circuito 
 excede a capacidade dos fios e proteções.
 </p>
 <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500 mb-4">
 <p className="text-sm text-gray-700">
 <strong>Exemplo:</strong> Um circuito de 10A (2.300W) com um aquecedor (2.000W) + micro-ondas (1.200W) 
 ligados ao mesmo tempo = 3.200W = SOBRECARGA.
 </p>
 </div>
 <p className="text-gray-700 mb-4">
 <strong>Consequências:</strong>
 </p>
 <ul className="space-y-2">
 <li className="flex items-start gap-2">
 <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
 <span className="text-gray-700">Aquecimento excessivo dos fios</span>
 </li>
 <li className="flex items-start gap-2">
 <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
 <span className="text-gray-700">Derretimento de isolamentos</span>
 </li>
 <li className="flex items-start gap-2">
 <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
 <span className="text-gray-700">Risco de incêndio</span>
 </li>
 <li className="flex items-start gap-2">
 <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
 <span className="text-gray-700">Danos em equipamentos eletrónicos</span>
 </li>
 </ul>
 </div>
 </div>
 </section>
 {/* Tipos de Proteção */}
 <section className="py-16">
 <div className="container max-w-3xl">
 <h2 className="text-3xl font-black mb-8 text-center">Tipos de Proteção Elétrica</h2>
 <div className="space-y-6">
 {protecoes.map((protecao, index) => (
 <article key={index} className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500">
 <div className="flex items-start justify-between mb-3">
 <h3 className="text-xl font-bold flex items-center gap-2">
 <Shield className="w-6 h-6 text-orange-500" />
 {protecao.tipo}
 </h3>
 {protecao.obrigatorio && (
 <span className="bg-red-500 text-white text-xs px-2 py-1 rounded font-bold">
 OBRIGATÓRIO
 </span>
 )}
 </div>
 <p className="text-gray-700 mb-4">{protecao.funcao}</p>
 <div className="bg-gray-50 p-3 rounded-lg">
 <p className="text-sm"><strong>Custo:</strong> {protecao.custo}</p>
 </div>
 </article>
 ))}
 </div>
 </div>
 </section>
 {/* Como Funciona o DPS */}
 <section className="py-12 bg-blue-50">
 <div className="container max-w-3xl">
 <h2 className="text-3xl font-black mb-6">DPS: A Proteção Essencial Contra Trovoadas</h2>
 <div className="bg-white p-6 rounded-xl shadow-lg">
 <p className="text-gray-700 mb-4">
 O <strong>Dispositivo de Proteção contra Sobretensões (DPS)</strong> é instalado no quadro elétrico 
 e protege toda a casa contra picos de tensão causados por:
 </p>
 <ul className="space-y-2 mb-6">
 <li className="flex items-start gap-2">
 <Zap className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
 <span className="text-gray-700"><strong>Trovoadas</strong> (descargas atmosféricas próximas)</span>
 </li>
 <li className="flex items-start gap-2">
 <Zap className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
 <span className="text-gray-700"><strong>Falhas na rede elétrica</strong> (manobras da EDP)</span>
 </li>
 <li className="flex items-start gap-2">
 <Zap className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
 <span className="text-gray-700"><strong>Arranque de motores</strong> (elevadores, bombas)</span>
 </li>
 </ul>
 <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
 <p className="text-sm text-gray-700">
 <strong>Investimento que se paga:</strong> Um DPS de 100€ pode salvar milhares de euros em 
 equipamentos (TV, computador, eletrodomésticos) destruídos por uma trovoada.
 </p>
 </div>
 </div>
 </div>
 </section>
 {/* Erros Comuns */}
 <section className="py-16">
 <div className="container max-w-3xl">
 <h2 className="text-3xl font-black mb-8 text-center">Erros Comuns Que Causam Sobrecargas</h2>
 <div className="space-y-6">
 {errosComuns.map((item, index) => (
 <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
 <div className="bg-red-50 p-6 border-l-4 border-red-500">
 <div className="flex items-start gap-3 mb-3">
 <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0" />
 <h3 className="text-lg font-bold text-red-700">{item.erro}</h3>
 </div>
 <p className="text-sm text-gray-700 mb-3">
 <strong>Risco:</strong> {item.risco}
 </p>
 <div className="bg-white p-3 rounded-lg">
 <p className="text-sm flex items-start gap-2">
 <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
 <span><strong>Solução:</strong> {item.solucao}</span>
 </p>
 </div>
 </div>
 </article>
 ))}
 </div>
 </div>
 </section>
 {/* Dicas Práticas */}
 <section className="py-12 bg-gray-50">
 <div className="container max-w-3xl">
 <h2 className="text-3xl font-black mb-6">10 Dicas Para Evitar Sobrecargas</h2>
 <div className="bg-white p-6 rounded-xl shadow-lg">
 <ol className="space-y-4">
 <li className="flex items-start gap-3">
 <span className="bg-orange-500 text-white w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">1</span>
 <p className="text-gray-700">Nunca ligue aquecedores e ar condicionado na mesma tomada</p>
 </li>
 <li className="flex items-start gap-3">
 <span className="bg-orange-500 text-white w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">2</span>
 <p className="text-gray-700">Use réguas com proteção contra sobretensões para equipamentos sensíveis</p>
 </li>
 <li className="flex items-start gap-3">
 <span className="bg-orange-500 text-white w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">3</span>
 <p className="text-gray-700">Desligue aparelhos durante trovoadas fortes</p>
 </li>
 <li className="flex items-start gap-3">
 <span className="bg-orange-500 text-white w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">4</span>
 <p className="text-gray-700">Instale DPS no quadro elétrico (especialmente em zonas rurais)</p>
 </li>
 <li className="flex items-start gap-3">
 <span className="bg-orange-500 text-white w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">5</span>
 <p className="text-gray-700">Não force disjuntores que disparam - investigue a causa</p>
 </li>
 <li className="flex items-start gap-3">
 <span className="bg-orange-500 text-white w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">6</span>
 <p className="text-gray-700">Evite extensões permanentes - são soluções temporárias</p>
 </li>
 <li className="flex items-start gap-3">
 <span className="bg-orange-500 text-white w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">7</span>
 <p className="text-gray-700">Distribua aparelhos de alta potência por circuitos diferentes</p>
 </li>
 <li className="flex items-start gap-3">
 <span className="bg-orange-500 text-white w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">8</span>
 <p className="text-gray-700">Faça inspeção elétrica a cada 10 anos (ou 5 anos em casas antigas)</p>
 </li>
 <li className="flex items-start gap-3">
 <span className="bg-orange-500 text-white w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">9</span>
 <p className="text-gray-700">Substitua réguas e extensões danificadas imediatamente</p>
 </li>
 <li className="flex items-start gap-3">
 <span className="bg-orange-500 text-white w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">10</span>
 <p className="text-gray-700">Contrate sempre um eletricista certificado para alterações</p>
 </li>
 </ol>
 </div>
 </div>
 </section>
 {/* CTA */}
 <section className="py-16 bg-orange-500 text-white">
 <div className="container text-center">
 <Shield className="w-16 h-16 mx-auto mb-6 opacity-80" />
 <h2 className="text-3xl font-black mb-4">
 Proteja a Sua Casa Hoje
 </h2>
 <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
 Instalação de DPS, upgrade de quadro elétrico e inspeção completa. 
 Sem compromisso em Trás-os-Montes.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a href="tel:+351932321892" className="inline-flex items-center justify-center gap-2 bg-white text-orange-500 px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all shadow-lg">
 <Phone className="w-6 h-6" />
 932 321 892
 </a>
 <a href="https://wa.me/351932321892?text=Olá,%20quero%20proteger%20a%20minha%20casa%20contra%20sobrecargas." className="inline-flex items-center justify-center gap-2 bg-green-700 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-green-800 transition-all shadow-lg">
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
 <a href="/blog/sinais-problemas-eletricos-casa" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
 <h3 className="font-bold text-orange-500 mb-1">7 Sinais de Problemas Elétricos</h3>
 <p className="text-sm text-gray-600">Identifique perigos elétricos antes que seja tarde.</p>
 </a>
 <a href="/blog/quadro-eletrico-antigo-fusiveis-trocar" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
 <h3 className="font-bold text-orange-500 mb-1">Quadro Elétrico Antigo</h3>
 <p className="text-sm text-gray-600">Quando e como modernizar o quadro elétrico.</p>
 </a>
 <a href="/blog/quando-trocar-instalacao-eletrica" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
 <h3 className="font-bold text-orange-500 mb-1">Quando Trocar a Instalação</h3>
 <p className="text-sm text-gray-600">Sinais de que precisa renovar a instalação elétrica.</p>
 </a>
 <a href="/blog/automacao-residencial-casa-inteligente" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
 <h3 className="font-bold text-orange-500 mb-1">Automação Residencial</h3>
 <p className="text-sm text-gray-600">Transforme a sua casa numa casa inteligente.</p>
 </a>
 </div>
 </div>
 </section>
 </main>
 <Footer />
 </div>
 );
}
