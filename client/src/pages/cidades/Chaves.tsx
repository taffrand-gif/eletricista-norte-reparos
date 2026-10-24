// Página local para "Eletricista Chaves"
import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';
import CidadesProximas from '@/components/CidadesProximas';
import Footer from '@/components/Footer';
import RelatedCities from '@/components/RelatedCities';
import SEOHead from '@/components/SEOHead';
import StructuredData from '@/components/StructuredData';
import { useSite } from '@/contexts/SiteContext';
import { businessInfo } from '@/../../shared/napConfig';
import { getCidadesProximas } from '@/data/cidadesProximas';
import { useEffect } from 'react';
import FAQSection from '@/components/FAQSection';

export default function Chaves() {
 const { config } = useSite();
 const faqs = [
 {
 question: 'Como funcionam os preços de um eletricista em Chaves?',
 answer: 'Todos os valores incluem IVA. Em dias úteis, das 09h às 18h, a mão de obra é 70 €/h e a deslocação é 30 € quando ocorre. À noite, fora desse horário, fins de semana e feriados, a mão de obra é 100 €/h e a deslocação é 50 € quando ocorre. Qualquer hora iniciada é devida.',
 },
 {
 question: 'Que informação ajuda no diagnóstico elétrico?',
 answer: 'Ao ligar ou enviar WhatsApp, indique a localidade, o sintoma e há quanto tempo acontece. Uma fotografia do quadro ou do elemento afetado pode ajudar quando for pertinente e seguro enviá-la; não mexa em componentes sob tensão.',
 },
 {
 question: 'É possível receber uma estimativa à distância?',
 answer: 'Podemos dar uma estimativa indicativa quando a descrição e as fotografias forem suficientemente detalhadas. Não substitui a análise no local nem constitui compromisso com um valor fechado; a deslocação é faturada se ocorrer.',
 },
 ];

 useEffect(() => {
 document.title = 'Eletricista em Chaves | Diagnóstico e serviços elétricos';

 let metaDescription = document.querySelector('meta[name="description"]');
 if (!metaDescription) {
 metaDescription = document.createElement('meta');
 metaDescription.setAttribute('name', 'description');
 document.head.appendChild(metaDescription);
 }
 metaDescription.setAttribute('content', 'Eletricista em Chaves para diagnóstico e serviços elétricos planeados. Preços com IVA incluído e contacto pelo 932 321 892.');

 let metaKeywords = document.querySelector('meta[name="keywords"]');
 if (!metaKeywords) {
 metaKeywords = document.createElement('meta');
 metaKeywords.setAttribute('name', 'keywords');
 document.head.appendChild(metaKeywords);
 }
 metaKeywords.setAttribute('content', 'eletricista chaves, diagnóstico elétrico chaves, instalação elétrica chaves, quadro elétrico chaves, reparação elétrica chaves');

 let canonical = document.querySelector('link[rel="canonical"]');
 if (!canonical) {
 canonical = document.createElement('link');
 canonical.setAttribute('rel', 'canonical');
 document.head.appendChild(canonical);
 }
 canonical.setAttribute('href', 'https://eletricista-norte-reparos.pt/eletricista-chaves');

 const schemaScript = document.createElement('script');
 schemaScript.type = 'application/ld+json';
 schemaScript.text = JSON.stringify({
 '@context': 'https://schema.org',
 '@type': 'LocalBusiness',
 name: 'Eletricista Profissional — Eletricista em Chaves',
 image: '/images-optimized/hero/hero-electrician-portugal.jpg',
 description: 'Diagnóstico e serviços elétricos planeados em Chaves.',
 telephone: businessInfo.phone,
 priceRange: '€€',
 areaServed: {
 '@type': 'City',
 name: 'Chaves'
 },
 sameAs: [
 `https://wa.me/${businessInfo.whatsapp}?text=${encodeURIComponent('Olá, preciso de um eletricista em Chaves. Podem ajudar a perceber o serviço necessário?')}`
 ]
 });
 document.head.appendChild(schemaScript);

 const faqSchema = document.createElement('script');
 faqSchema.type = 'application/ld+json';
 faqSchema.setAttribute('data-faq-schema', 'true');
 faqSchema.text = JSON.stringify({
 '@context': 'https://schema.org',
 '@type': 'FAQPage',
 mainEntity: faqs.map(faq => ({
 '@type': 'Question',
 name: faq.question,
 acceptedAnswer: {
 '@type': 'Answer',
 text: faq.answer
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
 Diagnóstico e serviços elétricos planeados em Chaves. Contacte a nossa equipa para explicar a situação e confirmar a próxima informação útil.
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
 <p className="mt-6 text-sm md:text-base text-amber-100">
 Eletricista credenciado pela DGEG — Técnico Responsável de Instalações Elétricas, TRIESP n.º 90062. Execução em Baixa Tensão até 41,4 kVA.
 </p>
 </div>
 </div>
 </section>

 <section className="py-10">
 <div className="container mx-auto px-4">
 <div className="max-w-4xl mx-auto bg-amber-50 border border-amber-200 rounded-2xl p-8">
 <h2 className="text-3xl font-bold text-gray-900 mb-4">Eletricista em Chaves: diagnóstico e serviços planeados</h2>
 <p className="text-gray-700 mb-4">
 A nossa equipa avalia avarias não urgentes, quadros, tomadas, iluminação e alterações de instalação. Ao ligar ou enviar WhatsApp, indique a localidade, o sintoma e há quanto tempo acontece; uma fotografia pode ajudar quando for pertinente e seguro enviá-la.
 </p>
 <p className="text-gray-700 mb-4">
 <strong>Preços com IVA incluído:</strong> em dias úteis, das 09h às 18h, 70 €/h mais 30 € de deslocação quando ocorre. À noite, fora desse horário, fins de semana e feriados, 100 €/h mais 50 € de deslocação quando ocorre. Qualquer hora iniciada é devida.
 </p>
 <p className="text-gray-700">
 Uma estimativa à distância pode ser indicativa se a descrição e as fotografias forem detalhadas; não substitui a análise no local nem fixa um valor. A linha telefónica funciona 24h/7d, e a janela de chegada é confirmada por telefone conforme a situação operacional.
 </p>
 </div>
 </div>
 </section>

 <section className="py-10">
 <div className="container mx-auto px-4">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
 <div>
 <h2 className="text-3xl font-bold text-gray-900 mb-6">Serviços elétricos planeados</h2>
 <div className="space-y-6">
 <div className="bg-white p-6 rounded-xl shadow-lg border border-amber-100">
 <h3 className="text-xl font-bold text-gray-900 mb-3">Diagnóstico e verificação</h3>
 <p className="text-gray-600">
 Identificamos o sintoma relatado e verificamos os elementos necessários para orientar a reparação ou o trabalho planeado, sem prometer um diagnóstico à distância.
 </p>
 </div>
 <div className="bg-white p-6 rounded-xl shadow-lg border border-amber-100">
 <h3 className="text-xl font-bold text-gray-900 mb-3">Quadros, circuitos e pontos elétricos</h3>
 <p className="text-gray-600">
 Para intervenções em quadros elétricos, tomadas, interruptores e circuitos, confirme o que acontece e o local afetado antes de marcarmos a análise.
 </p>
 <a href="/eletricista-quadro-eletrico-chaves" className="inline-block mt-3 text-amber-700 font-bold hover:underline">Ver serviço de quadros elétricos</a>
 </div>
 <div className="bg-white p-6 rounded-xl shadow-lg border border-amber-100">
 <h3 className="text-xl font-bold text-gray-900 mb-3">Instalações e alterações planeadas</h3>
 <p className="text-gray-600">
 Explique o objetivo do trabalho e, quando possível, envie fotografias para prepararmos a avaliação. Os materiais são considerados conforme a necessidade do serviço.
 </p>
 <a href="/instalacao-eletrica-chaves" className="inline-block mt-3 text-amber-700 font-bold hover:underline">Ver serviço de instalação elétrica</a>
 </div>
 </div>
 </div>

 <div>
 <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-8 shadow-xl border border-amber-200">
 <h2 className="text-2xl font-bold text-gray-900 mb-6">Como preparar o contacto</h2>
 <div className="space-y-5 text-gray-700">
 <div>
 <h3 className="font-bold text-gray-900">1. Indique a localização</h3>
 <p>Diga-nos a localidade e o tipo de imóvel para confirmarmos a deslocação e organizar a análise.</p>
 </div>
 <div>
 <h3 className="font-bold text-gray-900">2. Descreva o sintoma</h3>
 <p>Explique o que deixa de funcionar, quando começou e se afeta um ponto, um circuito ou mais do que uma divisão.</p>
 </div>
 <div>
 <h3 className="font-bold text-gray-900">3. Envie uma fotografia, se for útil</h3>
 <p>Uma imagem do quadro ou do elemento afetado pode ajudar a perceber o contexto, desde que seja seguro tirá-la sem tocar em componentes elétricos.</p>
 </div>
 <div>
 <h3 className="font-bold text-gray-900">4. Confirme a análise no local</h3>
 <p>Quando a deslocação ocorre, é faturada. A estimativa remota é apenas indicativa e qualquer hora iniciada é devida.</p>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>

 <section className="py-16 bg-gray-50">
 <div className="container mx-auto px-4">
 <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
 Perguntas sobre <span className="text-amber-600">Eletricista em Chaves</span>
 </h2>
 <div className="max-w-3xl mx-auto space-y-6">
 <div className="bg-white p-6 rounded-xl shadow-md">
 <h3 className="text-xl font-bold text-gray-900 mb-3">Como funcionam os preços de um eletricista em Chaves?</h3>
 <p className="text-gray-600">Todos os valores incluem IVA. Em dias úteis, das 09h às 18h, a mão de obra é 70 €/h e a deslocação é 30 € quando ocorre. À noite, fora desse horário, fins de semana e feriados, a mão de obra é 100 €/h e a deslocação é 50 € quando ocorre. Qualquer hora iniciada é devida.</p>
 </div>
 <div className="bg-white p-6 rounded-xl shadow-md">
 <h3 className="text-xl font-bold text-gray-900 mb-3">Que informação ajuda no diagnóstico elétrico?</h3>
 <p className="text-gray-600">Indique a localidade, o sintoma e há quanto tempo acontece. Uma fotografia do quadro ou do elemento afetado pode ajudar quando for pertinente e seguro enviá-la; não mexa em componentes sob tensão.</p>
 </div>
 <div className="bg-white p-6 rounded-xl shadow-md">
 <h3 className="text-xl font-bold text-gray-900 mb-3">É possível receber uma estimativa à distância?</h3>
 <p className="text-gray-600">Podemos dar uma estimativa indicativa quando a descrição e as fotografias forem suficientemente detalhadas. Não substitui a análise no local nem constitui compromisso com um valor fechado; a deslocação é faturada se ocorrer.</p>
 </div>
 </div>
 </div>
 </section>

 <section className="py-16 bg-gradient-to-r from-blue-900 to-amber-700 text-white">
 <div className="container mx-auto px-4 text-center">
 <h2 className="text-3xl font-bold mb-6">Precisa de eletricista em <span className="text-amber-300">Chaves</span>?</h2>
 <p className="text-xl mb-8 max-w-2xl mx-auto">
 Contacte-nos para descrever o serviço elétrico que precisa de planear. Confirmamos por telefone a informação disponível e a janela de chegada conforme a situação operacional.
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
 <strong>Diagnóstico elétrico</strong> • <strong>Serviços planeados</strong> • <strong>Contacto 24h/7d</strong>
 </p>
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

 <section className="py-16">
 <div className="container max-w-4xl">
 <h2 className="text-3xl font-black text-center mb-12">Perguntas Frequentes - Chaves</h2>
 <FAQSection faqs={faqs} />
 </div>
 </section>

 <CidadesProximas
 currentCity="Chaves"
 cidades={cidadesProximas}
 serviceType="eletricista"
 />
 <RelatedCities currentCity="Chaves" currentCitySlug="eletricista-chaves" />
 </main>

 <Footer />
 </>
 );
}
