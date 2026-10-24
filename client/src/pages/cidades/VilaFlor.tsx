import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';
import CidadesProximas from '@/components/CidadesProximas';
import Footer from '@/components/Footer';
import RelatedCities from '@/components/RelatedCities';
import FAQSection from '@/components/FAQSection';
import { getCidadesProximas } from '@/data/cidadesProximas';
import { useEffect } from 'react';

const phone = '+351 932 321 892';
const whatsapp = '351932321892';
const dgegStatement = 'Eletricista credenciado pela DGEG — Técnico Responsável de Instalações Elétricas, TRIESP n.º 90062. Execução em Baixa Tensão até 41,4 kVA.';
const faqs = [
  { question: 'Como pedir uma intervenção elétrica em Vila Flor?', answer: 'Descreva a instalação, avaria ou alteração pretendida, indique a localidade e envie fotografias do quadro ou do ponto em causa quando for seguro. Com elementos suficientes, a nossa equipa pode dar uma estimativa remota indicativa; o orçamento escrito define o trabalho antes da intervenção.' },
  { question: 'Qual é o preço de uma intervenção elétrica?', answer: 'Em dias úteis, das 09h às 18h, a mão de obra é 70 €/h e a deslocação é 30 €. Fora desse horário, à noite, fins de semana e feriados, são 100 €/h e 50 € de deslocação. Valores TTC, IVA incluído; toda a hora iniciada é devida e a deslocação é faturada quando ocorre.' },
  { question: 'Qual é o estatuto técnico em baixa tensão?', answer: dgegStatement },
  { question: 'Quanto custam a ficha eletrotécnica e os termos?', answer: 'Ficha eletrotécnica e Termos de responsabilidade: a partir de 350 € TTC, sob orçamento conforme o caso.' },
];

export default function VilaFlor() {
  const cidadesProximas = getCidadesProximas('vila-flor');

  useEffect(() => {
    document.title = 'Eletricista em Vila Flor — instalações e diagnóstico';
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Eletricista em Vila Flor para instalações, quadros e diagnóstico em baixa tensão. DGEG/TRIESP 90062; contacto +351 932 321 892.');
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://eletricista-norte-reparos.pt/eletricista-vila-flor');

    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'schema-vila-flor';
    schemaScript.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        { '@type': 'LocalBusiness', '@id': 'https://eletricista-norte-reparos.pt/#localbusiness-vila-flor', name: 'Norte Reparos — Eletricista Vila Flor', url: 'https://eletricista-norte-reparos.pt/eletricista-vila-flor', telephone: phone, areaServed: { '@type': 'AdministrativeArea', name: 'Concelho de Vila Flor' } },
        { '@type': 'Service', name: 'Eletricista em Vila Flor', serviceType: 'Instalação, alteração e diagnóstico elétrico em baixa tensão', areaServed: { '@type': 'AdministrativeArea', name: 'Concelho de Vila Flor' } },
        { '@type': 'FAQPage', mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) },
      ],
    });
    document.head.appendChild(schemaScript);
    return () => schemaScript.remove();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-orange-600 to-amber-600 py-16 text-white"><div className="container mx-auto max-w-5xl px-4"><Breadcrumbs items={[{ label: 'Eletricista', href: '/' }, { label: 'Vila Flor', href: '/eletricista-vila-flor' }]} /><h1 className="mt-6 text-4xl font-bold md:text-5xl">Eletricista em Vila Flor — instalações e diagnóstico</h1><p className="mt-5 max-w-3xl text-xl">Para instalações, alterações, quadros e diagnóstico elétrico planeado. Descreva o que precisa e envie fotografias quando for seguro.</p><div className="mt-8 flex flex-col gap-4 sm:flex-row"><a href="tel:+351932321892" className="rounded-lg bg-white px-7 py-4 text-center text-lg font-bold text-orange-700">Ligar: {phone}</a><a href={`https://wa.me/${whatsapp}?text=Olá, preciso de um eletricista em Vila Flor`} className="rounded-lg bg-green-600 px-7 py-4 text-center text-lg font-bold text-white">WhatsApp</a></div></div></section>
        <section className="container mx-auto max-w-5xl px-4 py-12"><div className="rounded-xl border-l-4 border-orange-600 bg-white p-7 shadow-sm"><h2 className="text-2xl font-bold">Informação que ajuda antes da intervenção</h2><p className="mt-3 text-slate-700">Indique se se trata de instalação, alteração, quadro, tomada, iluminação ou disjuntor. Diga o que acontece, que circuitos são afetados e envie uma fotografia apenas se for seguro fazê-lo. Com elementos suficientes, a nossa equipa pode dar uma estimativa remota indicativa; o orçamento escrito define o âmbito antes da intervenção.</p><p className="mt-3 text-slate-700">O atendimento telefónico é 24h/24, 7 dias por semana. A disponibilidade e a janela de chegada são confirmadas por telefone conforme a situação operacional.</p></div></section>
        <section className="container mx-auto max-w-5xl px-4 pb-12"><div className="rounded-xl bg-white p-7 shadow-sm"><h2 className="text-2xl font-bold">Estatuto técnico em Baixa Tensão</h2><p className="mt-3 font-semibold text-slate-800">{dgegStatement}</p><p className="mt-3 text-slate-700">Este estatuto enquadra o trabalho dentro do limite indicado; não significa uma certificação automática de qualquer instalação ou documento.</p></div></section>
        <section className="container mx-auto max-w-5xl px-4 pb-12"><h2 className="text-3xl font-bold">Trabalhos que podemos avaliar</h2><div className="mt-6 grid gap-5 md:grid-cols-3"><article className="rounded-xl bg-white p-6 shadow-sm"><h3 className="text-xl font-bold">Instalações e alterações</h3><p className="mt-2 text-slate-700">Circuitos, pontos de utilização, iluminação e alterações adequadas ao âmbito identificado.</p></article><article className="rounded-xl bg-white p-6 shadow-sm"><h3 className="text-xl font-bold">Quadros e proteções</h3><p className="mt-2 text-slate-700">Avaliação de anomalias, reorganização ou atualização de quadro e proteções, depois do diagnóstico.</p></article><article className="rounded-xl bg-white p-6 shadow-sm"><h3 className="text-xl font-bold">Diagnóstico elétrico</h3><p className="mt-2 text-slate-700">Para aquecimento anormal, disparos ou falhas intermitentes, começamos pelos sintomas e pela segurança.</p></article></div></section>
        <section className="container mx-auto max-w-5xl px-4 pb-12"><div className="rounded-xl bg-white p-7 shadow-sm"><h2 className="text-2xl font-bold">Diagnóstico conforme a situação</h2><p className="mt-3 text-slate-700">Quando for relevante para o serviço e para a segurança, podemos recorrer a câmara térmica e a instrumentos Fluke. A escolha do método depende da instalação e dos sinais observados; não é automática nem substitui a avaliação do caso.</p></div></section>
        <section className="container mx-auto max-w-5xl px-4 pb-12"><div className="rounded-xl bg-white p-7 shadow-sm"><h2 className="text-2xl font-bold">Preços e condições</h2><div className="mt-4 grid gap-4 md:grid-cols-2"><p className="rounded-lg bg-slate-100 p-4"><strong>Dias úteis, 09h–18h:</strong><br />70 €/h de mão de obra + 30 € de deslocação.</p><p className="rounded-lg bg-slate-100 p-4"><strong>Fora desse horário, noite, fim de semana ou feriado:</strong><br />100 €/h de mão de obra + 50 € de deslocação.</p></div><ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700"><li>Valores TTC, IVA incluído; toda a hora iniciada é devida.</li><li>A deslocação é faturada quando ocorre.</li><li>Não há orçamento gratuito quando exige deslocação. O orçamento escrito é apresentado antes da intervenção.</li><li>Ficha eletrotécnica e Termos de responsabilidade: <strong>a partir de 350 € TTC, sob orçamento conforme o caso</strong>.</li></ul></div></section>
        <section className="container mx-auto max-w-4xl px-4 pb-12"><h2 className="mb-6 text-center text-3xl font-bold">Perguntas frequentes</h2><FAQSection faqs={faqs} /></section>
        <section className="bg-orange-600 py-12 text-white"><div className="container mx-auto max-w-4xl px-4 text-center"><h2 className="text-3xl font-bold">Quer explicar o trabalho elétrico?</h2><p className="mx-auto mt-3 max-w-2xl text-lg">Ligue-nos ou envie uma descrição e fotografias úteis. Confirmamos por telefone os próximos passos e a disponibilidade.</p><a href="tel:+351932321892" className="mt-6 inline-block rounded-lg bg-white px-8 py-4 text-lg font-bold text-orange-700">{phone}</a><p className="mt-5 text-sm">Para uma avaria elétrica urgente, consulte <a className="font-bold underline" href="https://eletricista-urgente.pt/concelhos/vila-flor">o serviço de eletricista urgente no concelho de Vila Flor</a>.</p></div></section>
        <CidadesProximas currentCity="Vila Flor" cidades={cidadesProximas} serviceType="eletricista" />
        <RelatedCities currentCity="Vila Flor" currentCitySlug="eletricista-vila-flor" />
      </main>
      <Footer />
    </div>
  );
}
