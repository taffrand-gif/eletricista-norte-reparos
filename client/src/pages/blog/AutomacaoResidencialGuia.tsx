// Blog article: "Automação Residencial em Trás-os-Montes: Guia Completo para Casa Inteligente"
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEffect } from 'react';
import { Phone, Home, Lightbulb, Shield, Zap, CheckCircle } from 'lucide-react';
export default function AutomacaoResidencialGuia() {
 useEffect(() => {
 document.title = "Automação Residencial em Trás-os-Montes: Guia Completo para Casa Inteligente 2026 | ";
 
 let metaDescription = document.querySelector('meta[name="description"]');
 if (!metaDescription) {
 metaDescription = document.createElement('meta');
 metaDescription.setAttribute('name', 'description');
 document.head.appendChild(metaDescription);
 }
 metaDescription.setAttribute('content', 'Guia completo de automação residencial em Trás-os-Montes. Descubra como transformar a sua casa numa casa inteligente: iluminação, segurança, climatização e muito mais.');
 let canonical = document.querySelector('link[rel="canonical"]');
 if (!canonical) {
 canonical = document.createElement('link');
 canonical.setAttribute('rel', 'canonical');
 document.head.appendChild(canonical);
 }
 canonical.setAttribute('href', 'https://eletricista-norte-reparos.pt/blog/automacao-residencial-casa-inteligente');
 // JSON-LD Article Schema
 const script = document.createElement('script');
 script.type = 'application/ld+json';
 script.text = JSON.stringify({
 "@context": "https://schema.org",
 "@type": "Article",
 "headline": "Automação Residencial em Trás-os-Montes: Guia Completo para Casa Inteligente",
 "description": "Guia completo de automação residencial em Trás-os-Montes. Descubra como transformar a sua casa numa casa inteligente.",
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
 const faqScript = document.createElement('script');
 faqScript.type = 'application/ld+json';
 faqScript.text = JSON.stringify({
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": [
 {
 "@type": "Question",
 "name": "O que é automação residencial?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Automação residencial é a integração de tecnologia na sua casa para controlar automaticamente sistemas como iluminação, climatização, segurança, entretenimento e eletrodomésticos. Através de uma central de controlo (smartphone, tablet ou assistente de voz), pode gerir toda a casa de forma remota ou programada."
 }
 },
 {
 "@type": "Question",
 "name": "Quanto custa automatizar uma casa?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Uma automação básica de iluminação inteligente (3-4 divisões) custa entre 500€ e 1.000€. Um sistema intermédio com iluminação, climatização e estores fica entre 2.000€ e 4.000€. Um sistema avançado completo e integrado varia entre 5.000€ e 10.000€. Os valores incluem equipamento e instalação."
 }
 },
 {
 "@type": "Question",
 "name": "Quanto posso poupar com uma casa inteligente?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Com gestão inteligente de iluminação e climatização pode reduzir a conta de luz em 20-40%. Só na iluminação, a poupança pode chegar aos 60%."
 }
 },
 {
 "@type": "Question",
 "name": "Quem deve instalar a automação?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "A instalação deve ser feita por um eletricista certificado para garantir segurança e funcionamento correto. O processo começa com a avaliação da instalação elétrica existente, seguida da escolha do sistema, instalação profissional e configuração com formação de utilização."
 }
 }
 ]
 });
 document.head.appendChild(faqScript);
 return () => {
 document.head.removeChild(script);
 document.head.removeChild(faqScript);
 };
 }, []);
 const sistemas = [
 {
 titulo: "Iluminação Inteligente",
 descricao: "Controle todas as luzes da casa pelo smartphone ou por voz. Crie cenários, programe horários e poupe energia.",
 beneficios: ["Poupança até 60% na iluminação", "Controlo remoto total", "Integração com assistentes de voz"],
 custo: "150€ - 800€"
 },
 {
 titulo: "Climatização Automatizada",
 descricao: "Termostatos inteligentes que aprendem os seus hábitos e ajustam a temperatura automaticamente.",
 beneficios: ["Redução de 20-30% no aquecimento", "Controlo por zonas", "Programação inteligente"],
 custo: "200€ - 500€"
 },
 {
 titulo: "Segurança e Vigilância",
 descricao: "Câmaras, sensores de movimento, fechaduras inteligentes e alarmes conectados.",
 beneficios: ["Monitorização Atendimento 24h/7d", "Alertas em tempo real", "Gravação na nuvem"],
 custo: "300€ - 1.500€"
 },
 {
 titulo: "Estores e Persianas Motorizadas",
 descricao: "Abra e feche estores automaticamente conforme a luz solar ou horário.",
 beneficios: ["Eficiência térmica", "Privacidade programada", "Integração com sensores"],
 custo: "100€ - 400€ por janela"
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
 🏠 CASA INTELIGENTE
 </span>
 <h1 className="text-4xl md:text-5xl font-black mb-6">
 Automação Residencial em Trás-os-Montes
 </h1>
 <p className="text-xl opacity-90">
 Transforme a sua casa numa casa inteligente. Conforto, segurança e poupança de energia ao seu alcance.
 </p>
 </div>
 </div>
 </section>
 {/* Intro */}
 <section className="py-12">
 <div className="container max-w-3xl">
 <div className="prose prose-lg max-w-none">
 <p className="text-xl text-gray-700 leading-relaxed">
 A <strong>automação residencial</strong> (ou domótica) deixou de ser ficção científica. 
 Hoje, qualquer casa em <a href="/eletricista-vila-real" className="text-orange-500 hover:underline">Vila Real</a>, 
 <a href="/eletricista-braganca" className="text-orange-500 hover:underline"> Bragança</a> ou 
 <a href="/eletricista-chaves" className="text-orange-500 hover:underline"> Chaves</a> pode tornar-se inteligente 
 com um investimento acessível.
 </p>
 <p className="text-gray-700">
 Neste guia completo, vou explicar-lhe tudo sobre casas inteligentes: o que pode automatizar, 
 quanto custa, como funciona e porque deve considerar esta tecnologia para a sua casa em Trás-os-Montes.
 </p>
 </div>
 </div>
 </section>
 {/* O Que É Automação Residencial */}
 <section className="py-12 bg-gray-50">
 <div className="container max-w-3xl">
 <h2 className="text-3xl font-black mb-6">O Que É Automação Residencial?</h2>
 <div className="bg-white p-6 rounded-xl shadow-lg">
 <p className="text-gray-700 mb-4">
 Automação residencial é a integração de tecnologia na sua casa para controlar automaticamente 
 sistemas como iluminação, climatização, segurança, entretenimento e eletrodomésticos.
 </p>
 <p className="text-gray-700 mb-4">
 Através de uma <strong>central de controlo</strong> (smartphone, tablet, assistente de voz), 
 pode gerir toda a casa de forma remota ou programada.
 </p>
 <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
 <p className="text-sm text-gray-700">
 <strong>Exemplo prático:</strong> Ao sair de casa, um único toque no smartphone desliga todas as luzes, 
 baixa o aquecimento, fecha os estores e ativa o alarme.
 </p>
 </div>
 </div>
 </div>
 </section>
 {/* Sistemas Principais */}
 <section className="py-16">
 <div className="container max-w-3xl">
 <h2 className="text-3xl font-black mb-8 text-center">Principais Sistemas de Automação</h2>
 <div className="space-y-6">
 {sistemas.map((sistema, index) => (
 <article key={index} className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500">
 <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
 <Zap className="w-6 h-6 text-orange-500" />
 {sistema.titulo}
 </h3>
 <p className="text-gray-700 mb-4">{sistema.descricao}</p>
 <div className="mb-4">
 <p className="font-bold text-sm text-gray-600 mb-2">Benefícios:</p>
 <ul className="space-y-1">
 {sistema.beneficios.map((beneficio, i) => (
 <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
 <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
 {beneficio}
 </li>
 ))}
 </ul>
 </div>
 <div className="bg-gray-50 p-3 rounded-lg">
 <p className="text-sm"><strong>Investimento:</strong> {sistema.custo}</p>
 </div>
 </article>
 ))}
 </div>
 </div>
 </section>
 {/* Vantagens */}
 <section className="py-12 bg-blue-50">
 <div className="container max-w-3xl">
 <h2 className="text-3xl font-black mb-6">Vantagens de Uma Casa Inteligente</h2>
 <div className="grid md:grid-cols-2 gap-6">
 <div className="bg-white p-6 rounded-xl shadow-lg">
 <Lightbulb className="w-10 h-10 text-yellow-500 mb-3" />
 <h3 className="text-xl font-bold mb-2">Poupança de Energia</h3>
 <p className="text-gray-700 text-sm">
 Reduza a conta de luz em 20-40% com gestão inteligente de iluminação e climatização.
 </p>
 </div>
 <div className="bg-white p-6 rounded-xl shadow-lg">
 <Shield className="w-10 h-10 text-blue-500 mb-3" />
 <h3 className="text-xl font-bold mb-2">Segurança Reforçada</h3>
 <p className="text-gray-700 text-sm">
 Monitorize a casa em tempo real, receba alertas e simule presença quando está fora.
 </p>
 </div>
 <div className="bg-white p-6 rounded-xl shadow-lg">
 <Home className="w-10 h-10 text-green-500 mb-3" />
 <h3 className="text-xl font-bold mb-2">Conforto Total</h3>
 <p className="text-gray-700 text-sm">
 Controle tudo sem sair do sofá. Crie cenários personalizados para cada momento do dia.
 </p>
 </div>
 <div className="bg-white p-6 rounded-xl shadow-lg">
 <Zap className="w-10 h-10 text-orange-500 mb-3" />
 <h3 className="text-xl font-bold mb-2">Valorização do Imóvel</h3>
 <p className="text-gray-700 text-sm">
 Casas inteligentes valorizam até 5% no mercado imobiliário.
 </p>
 </div>
 </div>
 </div>
 </section>
 {/* Instalação */}
 <section className="py-12">
 <div className="container max-w-3xl">
 <h2 className="text-3xl font-black mb-6">Como Instalar Automação na Sua Casa?</h2>
 <div className="bg-white p-6 rounded-xl shadow-lg space-y-4">
 <div className="flex items-start gap-4">
 <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
 <div>
 <h3 className="font-bold mb-1">Avaliação Elétrica</h3>
 <p className="text-sm text-gray-700">
 Um eletricista profissional avalia a instalação elétrica existente e verifica se suporta os novos dispositivos.
 </p>
 </div>
 </div>
 <div className="flex items-start gap-4">
 <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
 <div>
 <h3 className="font-bold mb-1">Escolha do Sistema</h3>
 <p className="text-sm text-gray-700">
 Defina o que quer automatizar: iluminação, climatização, segurança ou tudo integrado.
 </p>
 </div>
 </div>
 <div className="flex items-start gap-4">
 <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
 <div>
 <h3 className="font-bold mb-1">Instalação Profissional</h3>
 <p className="text-sm text-gray-700">
 A instalação deve ser feita por um eletricista certificado para garantir segurança e funcionamento correto.
 </p>
 </div>
 </div>
 <div className="flex items-start gap-4">
 <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
 <div>
 <h3 className="font-bold mb-1">Configuração e Formação</h3>
 <p className="text-sm text-gray-700">
 Configuramos o sistema e ensinamos-lhe a usar todas as funcionalidades.
 </p>
 </div>
 </div>
 </div>
 </div>
 </section>
 {/* Custos */}
 <section className="py-12 bg-gray-50">
 <div className="container max-w-3xl">
 <h2 className="text-3xl font-black mb-6">Quanto Custa Automatizar Uma Casa?</h2>
 <div className="bg-white p-6 rounded-xl shadow-lg">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b-2 border-gray-200">
 <th className="text-left py-3">Nível de Automação</th>
 <th className="text-right py-3">Investimento</th>
 </tr>
 </thead>
 <tbody className="divide-y divide-gray-100">
 <tr>
 <td className="py-3">
 <strong>Básico</strong><br/>
 <span className="text-xs text-gray-600">Iluminação inteligente (3-4 divisões)</span>
 </td>
 <td className="text-right py-3 font-bold">500€ - 1.000€</td>
 </tr>
 <tr>
 <td className="py-3">
 <strong>Intermédio</strong><br/>
 <span className="text-xs text-gray-600">Iluminação + climatização + estores</span>
 </td>
 <td className="text-right py-3 font-bold">2.000€ - 4.000€</td>
 </tr>
 <tr>
 <td className="py-3">
 <strong>Avançado</strong><br/>
 <span className="text-xs text-gray-600">Sistema completo integrado</span>
 </td>
 <td className="text-right py-3 font-bold">5.000€ - 10.000€</td>
 </tr>
 </tbody>
 </table>
 <p className="text-xs text-gray-600 mt-4">
 * Valores incluem equipamento e instalação. Orçamento personalizado sem compromisso.
 </p>
 </div>
 </div>
 </section>
 {/* CTA */}
 <section className="py-16 bg-orange-500 text-white">
 <div className="container text-center">
 <Home className="w-16 h-16 mx-auto mb-6 opacity-80" />
 <h2 className="text-3xl font-black mb-4">
 Pronto Para Uma Casa Inteligente?
 </h2>
 <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
 Peça um sem compromisso e descubra como podemos automatizar a sua casa em Trás-os-Montes.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a href="tel:+351932321892" className="inline-flex items-center justify-center gap-2 bg-white text-orange-500 px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all shadow-lg">
 <Phone className="w-6 h-6" />
 932 321 892
 </a>
 <a href="https://wa.me/351932321892?text=Olá,%20quero%20saber%20mais%20sobre%20automação%20residencial." className="inline-flex items-center justify-center gap-2 bg-green-700 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-green-800 transition-all shadow-lg">
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
 <a href="/blog/iluminacao-exterior-jardim-guia" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
 <h3 className="font-bold text-orange-500 mb-1">Iluminação Exterior e de Jardim</h3>
 <p className="text-sm text-gray-600">Guia completo para iluminar o exterior da sua casa.</p>
 </a>
 <a href="/blog/poupar-energia-eletrica-dicas" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
 <h3 className="font-bold text-orange-500 mb-1">Como Poupar Energia Elétrica</h3>
 <p className="text-sm text-gray-600">10 dicas práticas para reduzir a conta de luz.</p>
 </a>
 <a href="/blog/protecao-sobrecargas-eletricas-casa" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
 <h3 className="font-bold text-orange-500 mb-1">Proteção Contra Sobrecargas</h3>
 <p className="text-sm text-gray-600">Como proteger a sua casa de sobrecargas elétricas.</p>
 </a>
 <a href="/blog/carregador-veiculo-eletrico-casa" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
 <h3 className="font-bold text-orange-500 mb-1">Carregador de Veículo Elétrico</h3>
 <p className="text-sm text-gray-600">Guia para instalar wallbox em casa.</p>
 </a>
 </div>
 </div>
 </section>
 </main>
 <Footer />
 </div>
 );
}
