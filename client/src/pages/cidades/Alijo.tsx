import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';
import CidadesProximas from '@/components/CidadesProximas';
import Footer from '@/components/Footer';
import RelatedCities from '@/components/RelatedCities';
import FAQSection from '@/components/FAQSection';
import { getCidadesProximas } from '@/data/cidadesProximas';
import { useEffect } from 'react';
import { Phone, Shield, Zap, CheckCircle } from 'lucide-react';

const phone = '+351932321892';
const faqs = [
  { question: 'Que informação devo transmitir para pedir um eletricista em Alijó?', answer: 'Indique a localidade, o sintoma — por exemplo, disjuntor a disparar, tomada quente, falha de luz ou alteração pretendida — e, se for seguro, fotografias do quadro ou do ponto afetado. Isto ajuda a preparar o diagnóstico.' },
  { question: 'Como funcionam os preços?', answer: 'Em dias úteis entre as 09h e as 18h, a mão de obra é 70 €/h e a deslocação é 30 €. Fora desse horário, à noite, fins de semana e feriados, são 100 €/h e 50 € de deslocação. Valores TTC, IVA incluído; cada hora começada é devida.' },
  { question: 'Qual é o estatuto DGEG?', answer: 'Eletricista credenciado pela DGEG — Técnico Responsável de Instalações Elétricas, TRIESP n.º 90062. Execução em Baixa Tensão até 41,4 kVA.' },
  { question: 'Uma estimativa por fotografia é definitiva?', answer: 'Não. Quando há elementos suficientes, uma estimativa à distância é indicativa. O diagnóstico no local define o trabalho e o valor final; não há orçamento gratuito quando é necessária deslocação.' },
];

export default function Alijo() {
  const cidadesProximas = getCidadesProximas('alijo');
  useEffect(() => {
    document.title = 'Eletricista em Alijó — diagnóstico e instalações | Norte Reparos';
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) { metaDescription = document.createElement('meta'); metaDescription.setAttribute('name', 'description'); document.head.appendChild(metaDescription); }
    metaDescription.setAttribute('content', 'Eletricista em Alijó para diagnóstico, quadros, tomadas, iluminação e instalações em baixa tensão. DGEG/TRIESP 90062 e preços TTC claros.');
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.setAttribute('rel', 'canonical'); document.head.appendChild(canonical); }
    canonical.setAttribute('href', 'https://eletricista-norte-reparos.pt/eletricista-alijo');
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json'; schemaScript.id = 'schema-alijo';
    schemaScript.text = JSON.stringify({ '@context': 'https://schema.org', '@type': 'Electrician', name: 'Norte Reparos — Eletricista em Alijó', url: 'https://eletricista-norte-reparos.pt/eletricista-alijo', telephone: phone, areaServed: { '@type': 'AdministrativeArea', name: 'Concelho de Alijó' } });
    document.head.appendChild(schemaScript);
    const faqSchema = document.createElement('script'); faqSchema.type = 'application/ld+json'; faqSchema.id = 'faq-schema-alijo';
    faqSchema.text = JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) });
    document.head.appendChild(faqSchema);
    return () => { schemaScript.remove(); faqSchema.remove(); };
  }, []);

  return (<div className="min-h-screen flex flex-col"><Header /><main className="flex-grow">
    <section className="relative py-20 bg-cover bg-center text-white" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.72), rgba(0, 0, 0, 0.72)), url('/images-optimized/hero/hero-electrician-portugal.jpg')` }}><div className="container text-center"><Breadcrumbs items={[{ label: 'Eletricista', href: '/' }, { label: 'Alijó', href: '/eletricista-alijo' }]} /><h1 className="text-4xl md:text-6xl font-black mt-6 mb-6">Eletricista em Alijó</h1><p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Diagnóstico, avarias e trabalhos planeados em instalações elétricas de baixa tensão.</p><div className="flex flex-col sm:flex-row gap-4 justify-center"><a href={`tel:${phone}`} className="inline-flex items-center justify-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-lg text-xl font-bold"><Phone className="w-6 h-6" />+351 932 321 892</a><a href="https://wa.me/351932321892" className="inline-flex items-center justify-center bg-green-700 text-white px-8 py-4 rounded-lg text-xl font-bold">WhatsApp</a></div></div></section>
    <section className="py-14 bg-gray-50"><div className="container max-w-4xl"><h2 className="text-3xl font-black mb-6">Começar por perceber a situação</h2><p className="text-gray-700 text-lg">Indique a localidade e o sintoma: disjuntor a disparar, falta de luz, tomada ou quadro a aquecer, ponto de iluminação avariado ou alteração pretendida. Se for seguro, fotografias do quadro ou do ponto afetado ajudam a nossa equipa a orientar o diagnóstico.</p><p className="text-gray-700 mt-4">O atendimento telefónico está disponível 24h/24, 7 dias por semana. A disponibilidade e a janela de chegada são confirmadas por telefone conforme a situação operacional.</p></div></section>
    <section className="py-14"><div className="container"><h2 className="text-3xl font-black text-center mb-10">Serviços elétricos em Alijó</h2><div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">{[{ icon: Zap, title: 'Avarias e diagnóstico', desc: 'Verificação de circuitos, disjuntores, tomadas, interruptores e iluminação; Fluke ou câmara térmica quando adequados.' }, { icon: Shield, title: 'Quadros e circuitos', desc: 'Análise de anomalias e alterações em baixa tensão de acordo com o diagnóstico e o âmbito confirmado.' }, { icon: CheckCircle, title: 'Trabalhos planeados', desc: 'Instalações e alterações planeadas, com âmbito e materiais explicados antes de avançar.' }].map((service) => <article key={service.title} className="p-6 bg-white rounded-xl shadow"><service.icon className="w-9 h-9 text-orange-500 mb-4" /><h3 className="text-xl font-bold mb-2">{service.title}</h3><p className="text-gray-600">{service.desc}</p></article>)}</div></div></section>
    <section className="py-14 bg-orange-50"><div className="container max-w-4xl"><h2 className="text-3xl font-black mb-5">Credenciação e preços</h2><p className="font-bold text-lg">Eletricista credenciado pela DGEG — Técnico Responsável de Instalações Elétricas, TRIESP n.º 90062. Execução em Baixa Tensão até 41,4 kVA.</p><p className="mt-3">Ficha eletrotécnica e Termos de responsabilidade: a partir de 350 € TTC, sob orçamento conforme o caso. Estes documentos não são automáticos em todas as intervenções.</p><div className="mt-6 p-6 bg-white rounded-xl border-l-4 border-orange-500"><p><strong>Dias úteis, 09h–18h:</strong> 70 €/h + 30 € de deslocação.</p><p className="mt-2"><strong>Fora deste horário, noite, fins de semana e feriados:</strong> 100 €/h + 50 € de deslocação.</p><p className="mt-3">Valores TTC, IVA incluído. Cada hora começada é devida. A deslocação é faturada quando ocorre; não há orçamento gratuito quando é necessária deslocação.</p></div></div></section>
    <section className="py-14"><div className="container max-w-4xl"><h2 className="text-3xl font-black text-center mb-8">Perguntas frequentes — Alijó</h2><FAQSection faqs={faqs} /></div></section>
    <section className="py-14 bg-orange-500 text-white"><div className="container text-center"><h2 className="text-3xl font-black mb-4">Precisa de eletricista em Alijó?</h2><p className="text-xl mb-8">Contacte a nossa equipa e descreva a situação ou o trabalho planeado.</p><a href={`tel:${phone}`} className="inline-flex items-center gap-2 bg-white text-orange-500 px-8 py-4 rounded-lg text-xl font-bold"><Phone className="w-6 h-6" />+351 932 321 892</a></div></section>
    <CidadesProximas currentCity="Alijó" cidades={cidadesProximas} serviceType="eletricista" /><RelatedCities currentCity="Alijó" currentCitySlug="eletricista-alijo" />
  </main><Footer /></div>);
}
