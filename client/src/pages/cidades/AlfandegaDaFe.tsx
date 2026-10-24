import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';
import CidadesProximas from '@/components/CidadesProximas';
import Footer from '@/components/Footer';
import RelatedCities from '@/components/RelatedCities';
import FAQSection from '@/components/FAQSection';
import { getCidadesProximas } from '@/data/cidadesProximas';
import { useEffect } from 'react';

const phone = '+351 932 321 892';
const faqs = [
  { question: 'Como pedir uma estimativa elétrica em Alfândega da Fé?', answer: 'Descreva o trabalho, envie fotografias seguras e indique a potência ou o equipamento previsto, se souber. Com elementos suficientes, a nossa equipa pode dar uma estimativa distante indicativa.' },
  { question: 'Quanto custa um eletricista?', answer: 'Dias úteis das 09h às 18h: 70 €/h de mão de obra e 30 € de deslocação se tiver lugar. Fora desse horário, à noite, fins de semana e feriados: 100 €/h e 50 € de deslocação se tiver lugar. IVA incluído e cada hora iniciada é devida.' },
  { question: 'A Ficha eletrotécnica e os Termos são automáticos?', answer: 'Não. São avaliados caso a caso; quando aplicáveis, a Ficha eletrotécnica e os Termos de responsabilidade são a partir de 350 € com IVA incluído.' },
];

export default function AlfandegaDaFe() {
  const cidadesProximas = getCidadesProximas('alfandega-da-fe');
  useEffect(() => {
    document.title = 'Eletricista em Alfândega da Fé | Diagnóstico, reparações e instalações';
    const description = document.querySelector('meta[name="description"]') || document.head.appendChild(document.createElement('meta'));
    description.setAttribute('name', 'description');
    description.setAttribute('content', 'Eletricista em Alfândega da Fé para diagnóstico, reparações e instalações. Contacte a nossa equipa pelo +351 932 321 892.');
    const canonical = document.querySelector('link[rel="canonical"]') || document.head.appendChild(document.createElement('link'));
    canonical.setAttribute('rel', 'canonical'); canonical.setAttribute('href', 'https://eletricista-norte-reparos.pt/eletricista-alfandega-da-fe');
    const schema = document.createElement('script'); schema.id = 'schema-alfandega-da-fe'; schema.type = 'application/ld+json';
    schema.text = JSON.stringify({ '@context': 'https://schema.org', '@graph': [
      { '@type': 'LocalBusiness', name: 'Norte Reparos — Eletricista em Alfândega da Fé', url: 'https://eletricista-norte-reparos.pt/eletricista-alfandega-da-fe', telephone: phone, areaServed: { '@type': 'AdministrativeArea', name: 'Concelho de Alfândega da Fé' } },
      { '@type': 'Service', name: 'Instalações, reparações e diagnóstico elétrico em Alfândega da Fé', provider: { '@type': 'Organization', name: 'Norte Reparos', telephone: phone }, areaServed: { '@type': 'AdministrativeArea', name: 'Concelho de Alfândega da Fé' } },
      { '@type': 'FAQPage', mainEntity: faqs.map(({ question, answer }) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) },
    ] }); document.head.appendChild(schema); return () => schema.remove();
  }, []);
  return <><Header /><main className="min-h-screen bg-slate-50">
    <section className="bg-slate-900 text-white py-16"><div className="container mx-auto px-4 max-w-5xl"><Breadcrumbs items={[{ label: 'Eletricista', href: '/' }, { label: 'Alfândega da Fé', href: '/eletricista-alfandega-da-fe' }]} /><h1 className="text-4xl md:text-5xl font-bold mt-6">Eletricista em Alfândega da Fé</h1><p className="text-xl mt-4 max-w-3xl">Diagnóstico, reparações e instalações elétricas avaliados com cuidado. Partilhe os sintomas e fotografias seguras para uma primeira orientação.</p><div className="flex flex-col sm:flex-row gap-4 mt-7"><a href="tel:+351932321892" className="bg-orange-500 text-white font-bold px-6 py-3 rounded-lg">Ligar: {phone}</a><a href="https://wa.me/351932321892" className="bg-green-700 text-white font-bold px-6 py-3 rounded-lg">Enviar por WhatsApp</a></div></div></section>
    <section className="py-12"><div className="container mx-auto px-4 max-w-5xl"><h2 className="text-3xl font-bold">Serviços e diagnóstico</h2><div className="grid md:grid-cols-3 gap-5 mt-7"><article className="bg-white p-6 rounded-xl shadow"><h3 className="font-bold text-lg">Quadros e disjuntores</h3><p className="mt-2 text-slate-700">Avaliamos disjuntores que disparam, falhas de alimentação e circuitos sem energia antes de definir a intervenção.</p></article><article className="bg-white p-6 rounded-xl shadow"><h3 className="font-bold text-lg">Circuitos e pontos de utilização</h3><p className="mt-2 text-slate-700">Reparações em tomadas, interruptores, iluminação e circuitos dentro do âmbito confirmado.</p></article><article className="bg-white p-6 rounded-xl shadow"><h3 className="font-bold text-lg">Instalações e alterações</h3><p className="mt-2 text-slate-700">Para alterações planeadas, a potência prevista e fotografias seguras ajudam a avaliar o trabalho e os documentos aplicáveis.</p></article></div></div></section>
    <section className="py-12 bg-white"><div className="container mx-auto px-4 max-w-5xl"><h2 className="text-3xl font-bold">Credenciação e condições</h2><p className="mt-4 font-semibold text-slate-800">Eletricista credenciado pela DGEG — Técnico Responsável de Instalações Elétricas, TRIESP n.º 90062. Execução em Baixa Tensão até 41,4 kVA.</p><p className="mt-3 text-slate-700">A câmara térmica e instrumentos Fluke podem apoiar o diagnóstico quando adequados. Não são uma certificação automática. Ficha eletrotécnica e Termos de responsabilidade são avaliados caso a caso e, quando aplicáveis, são a partir de 350 € com IVA incluído.</p><ul className="list-disc pl-6 mt-4 space-y-2 text-slate-700"><li>Dias úteis, 09h–18h: 70 €/h + 30 € de deslocação se tiver lugar.</li><li>Fora desse horário, noite, fins de semana e feriados: 100 €/h + 50 € de deslocação se tiver lugar.</li><li>IVA incluído. Cada hora iniciada é devida; a deslocação é faturada quando ocorre.</li></ul></div></section>
    <section className="py-12"><div className="container mx-auto px-4 max-w-4xl"><h2 className="text-3xl font-bold text-center">Perguntas frequentes</h2><FAQSection faqs={faqs} /></div></section>
    <section className="py-12 bg-orange-500 text-white"><div className="container mx-auto px-4 max-w-4xl text-center"><h2 className="text-3xl font-bold">Fale com a nossa equipa</h2><p className="mt-3">Atendimento telefónico 24/7. A disponibilidade e a janela de chegada são confirmadas consigo ao telefone.</p><a href="tel:+351932321892" className="inline-block bg-white text-orange-600 font-bold px-7 py-4 rounded-lg mt-6">{phone}</a><p className="mt-5 text-sm">Mais de 20 anos de experiência profissional · Seguro de responsabilidade civil profissional até 50.000 €</p></div></section>
    <CidadesProximas currentCity="Alfândega da Fé" cidades={cidadesProximas} serviceType="eletricista" /><RelatedCities currentCity="Alfândega da Fé" currentCitySlug="eletricista-alfandega-da-fe" />
  </main><Footer /></>;
}
