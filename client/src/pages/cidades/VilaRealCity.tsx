import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';
import CidadesProximas from '@/components/CidadesProximas';
import Footer from '@/components/Footer';
import RelatedCities from '@/components/RelatedCities';
import FAQSection from '@/components/FAQSection';
import { getCidadesProximas } from '@/data/cidadesProximas';
import { useEffect } from 'react';
import { Phone, Zap, Shield, CheckCircle } from 'lucide-react';

const phone = '+351 932 321 892';
const whatsapp = '351932321892';

export default function VilaRealCity() {
  const faqs = [
    { question: 'Qual é o âmbito DGEG/TRIESP?', answer: 'Eletricista credenciado pela DGEG — Técnico Responsável de Instalações Elétricas, TRIESP n.º 90062. Execução em Baixa Tensão até 41,4 kVA. O estatuto não significa certificação automática de qualquer intervenção.' },
    { question: 'Quanto custa um eletricista em Vila Pouca de Aguiar?', answer: 'Em dias úteis, das 09h às 18h, a mão de obra é 70 €/h e a deslocação é 30 € quando ocorre. Fora desse horário, à noite, fim de semana ou feriado, são 100 €/h e 50 €. IVA incluído e toda a hora iniciada é devida.' },
    { question: 'Como pedir uma estimativa?', answer: 'Envie a localidade, fotografias seguras do quadro ou ponto em causa, o objetivo e o que já foi observado. Com elementos suficientes, a estimativa remota pode ser indicativa.' },
    { question: 'Quando se aplicam Ficha Eletrotécnica e Termos de Responsabilidade?', answer: 'Consoante o caso e o âmbito aplicável, Ficha Eletrotécnica e Termos de Responsabilidade têm valor a partir de 350 € com IVA incluído. Não são automáticos em todas as intervenções.' },
  ];
  const cidadesProximas = getCidadesProximas('vila-pouca-de-aguiar');
  useEffect(() => {
    document.title = 'Eletricista em Vila Pouca de Aguiar — instalações, quadros e diagnóstico';
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) { metaDescription = document.createElement('meta'); metaDescription.setAttribute('name', 'description'); document.head.appendChild(metaDescription); }
    metaDescription.setAttribute('content', 'Eletricista em Vila Pouca de Aguiar para instalações, quadros e diagnóstico. DGEG/TRIESP 90062; execução BT até 41,4 kVA. 70 €/h + 30 € em dias úteis, 09h–18h; IVA incluído.');
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.setAttribute('rel', 'canonical'); document.head.appendChild(canonical); }
    canonical.setAttribute('href', 'https://eletricista-norte-reparos.pt/eletricista-vila-pouca-de-aguiar');
    const schemaScript = document.createElement('script'); schemaScript.id = 'schema-vilapouca'; schemaScript.type = 'application/ld+json';
    schemaScript.text = JSON.stringify({ '@context': 'https://schema.org', '@graph': [
      { '@type': 'Electrician', name: 'Norte Reparos — Eletricista em Vila Pouca de Aguiar', url: 'https://eletricista-norte-reparos.pt/eletricista-vila-pouca-de-aguiar', telephone: phone, priceRange: '€€', areaServed: { '@type': 'AdministrativeArea', name: 'Concelho de Vila Pouca de Aguiar' } },
      { '@type': 'Service', name: 'Instalações, quadros e diagnóstico elétrico em Vila Pouca de Aguiar', serviceType: 'Instalações elétricas, quadros e diagnóstico em Baixa Tensão', areaServed: { '@type': 'AdministrativeArea', name: 'Concelho de Vila Pouca de Aguiar' }, availableChannel: { '@type': 'ServiceChannel', servicePhone: { '@type': 'ContactPoint', telephone: phone, contactType: 'customer service' } } },
      { '@type': 'FAQPage', mainEntity: faqs.filter((faq) => !faq.question.includes('Ficha Eletrotécnica')).map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) },
    ]});
    document.head.appendChild(schemaScript); return () => { schemaScript.remove(); };
  }, []);
  return <div className="min-h-screen flex flex-col"><Header /><main className="flex-grow"><section className="relative py-20 bg-gradient-to-r from-slate-800 to-orange-700 text-white"><div className="container text-center"><Breadcrumbs items={[{ label: 'Eletricista', href: '/' }, { label: 'Vila Pouca de Aguiar', href: '/eletricista-vila-pouca-de-aguiar' }]} /><h1 className="text-4xl md:text-6xl font-black mb-6">Eletricista em Vila Pouca de Aguiar</h1><p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Instalações, quadros e diagnóstico elétrico para intervenções planeadas, com âmbito e condições explicados antes de avançar.</p><div className="flex flex-col sm:flex-row gap-4 justify-center"><a href="tel:+351932321892" className="inline-flex items-center justify-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-lg text-xl font-bold"><Phone className="w-6 h-6" />{phone}</a><a href={`https://wa.me/${whatsapp}?text=Olá,%20preciso%20de%20um%20eletricista%20em%20Vila%20Pouca%20de%20Aguiar`} className="inline-flex items-center justify-center bg-green-700 text-white px-8 py-4 rounded-lg text-xl font-bold">💬 WhatsApp</a></div></div></section>
  <section className="py-12 bg-white"><div className="container max-w-4xl"><h2 className="text-3xl font-black mb-5">Credenciação e preços</h2><p className="mb-4"><strong>Eletricista credenciado pela DGEG — Técnico Responsável de Instalações Elétricas, TRIESP n.º 90062. Execução em Baixa Tensão até 41,4 kVA.</strong></p><p className="mb-4">Dias úteis, 09h–18h: 70 €/h de mão de obra + 30 € de deslocação quando ocorre. Fora desse horário, à noite, fim de semana ou feriado: 100 €/h + 50 € de deslocação. IVA incluído; toda a hora iniciada é devida.</p><p>A deslocação é faturada se tiver lugar. Com informação suficiente, a estimativa remota pode ser indicativa; não há orçamento gratuito com deslocação.</p></div></section>
  <section className="py-12 bg-slate-50"><div className="container"><h2 className="text-3xl font-black text-center mb-9">Serviços planeados e diagnóstico</h2><div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">{[{ icon: Zap, title: 'Instalações e remodelações', desc: 'Circuitos, tomadas, iluminação e pontos necessários, dentro do âmbito aplicável.' }, { icon: Shield, title: 'Quadros e proteções', desc: 'Análise de quadro e circuitos antes de propor alteração, substituição ou modernização.' }, { icon: CheckCircle, title: 'Diagnóstico de avarias', desc: 'Equipamento Fluke e câmara térmica podem ser usados consoante o diagnóstico.' }].map((service) => <article key={service.title} className="flex gap-4 p-6 bg-white rounded-xl shadow"><service.icon className="w-8 h-8 text-orange-500 shrink-0" /><div><h3 className="text-lg font-bold mb-1">{service.title}</h3><p className="text-gray-600">{service.desc}</p></div></article>)}</div></div></section>
  <section className="py-12 bg-white"><div className="container max-w-4xl"><h2 className="text-3xl font-black mb-5">Ficha e Termos quando aplicáveis</h2><p>Ficha Eletrotécnica e Termos de Responsabilidade têm valor a partir de 350 € com IVA incluído, segundo o caso e o âmbito aplicável; não são automáticos em cada intervenção. A nossa equipa tem mais de 20 anos de experiência profissional e seguro de responsabilidade civil profissional até 50.000 €.</p><p className="mt-4">No primeiro contacto, indique a localidade, o objetivo ou sintoma e envie fotografias do quadro ou ponto afetado apenas se forem seguras de obter.</p></div></section>
  <section className="py-12 bg-slate-50"><div className="container max-w-4xl"><h2 className="text-3xl font-black text-center mb-8">Perguntas frequentes</h2><FAQSection faqs={faqs} /></div></section>
  <section className="py-14 bg-orange-600 text-white"><div className="container text-center max-w-3xl"><h2 className="text-3xl font-black mb-4">Quer planear uma intervenção elétrica?</h2><p className="text-xl mb-8">A linha telefónica atende 24/7; para visitas e trabalhos planeados, a disponibilidade é confirmada pelo telefone.</p><a href="tel:+351932321892" className="inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-lg text-xl font-bold"><Phone className="w-6 h-6" />{phone}</a></div></section>
  <CidadesProximas currentCity="Vila Pouca de Aguiar" cidades={cidadesProximas} serviceType="eletricista" /><RelatedCities currentCity="Vila Pouca de Aguiar" currentCitySlug="eletricista-vila-pouca-de-aguiar" /></main><Footer /></div>;
}
