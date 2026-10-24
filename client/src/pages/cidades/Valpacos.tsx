import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';
import CidadesProximas from '@/components/CidadesProximas';
import Footer from '@/components/Footer';
import RelatedCities from '@/components/RelatedCities';
import FAQSection from '@/components/FAQSection';
import { getCidadesProximas } from '@/data/cidadesProximas';
import { useEffect } from 'react';
import { Phone, ShieldCheck, Wrench, Zap } from 'lucide-react';

const faqs = [
  {
    question: 'Qual é o estatuto profissional da equipa?',
    answer: 'Eletricista credenciado pela DGEG — Técnico Responsável de Instalações Elétricas, TRIESP n.º 90062. Execução em Baixa Tensão até 41,4 kVA.',
  },
  {
    question: 'Como são calculados os preços?',
    answer: 'Em dias úteis das 09h às 18h: 70 €/h de mão de obra e 30 € de deslocação. Fora desse horário, à noite, fins de semana e feriados: 100 €/h e deslocação 50 €. Valores TTC, IVA incluído; cada hora começada é devida.',
  },
  {
    question: 'É possível receber uma estimativa à distância?',
    answer: 'Quando a descrição e as fotografias são suficientes, podemos dar uma estimativa à distância indicativa. O diagnóstico e o âmbito aplicável confirmam o valor final.',
  },
];

export default function Valpacos() {
  const cidadesProximas = getCidadesProximas('valpacos');

  useEffect(() => {
    document.title = 'Eletricista em Valpaços — diagnóstico, instalações e orçamento | Norte Reparos';
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Eletricista em Valpaços para instalações, reparações e diagnóstico. DGEG/TRIESP n.º 90062; execução em Baixa Tensão até 41,4 kVA.');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://eletricista-norte-reparos.pt/eletricista-valpacos');

    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'schema-valpacos';
    schemaScript.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'LocalBusiness',
          '@id': 'https://eletricista-norte-reparos.pt/#localbusiness-valpacos-react',
          name: 'Norte Reparos — Eletricista Valpaços',
          url: 'https://eletricista-norte-reparos.pt/eletricista-valpacos',
          telephone: '+351 932 321 892',
          areaServed: { '@type': 'AdministrativeArea', name: 'Concelho de Valpaços' },
        },
        {
          '@type': 'Service',
          name: 'Serviços de eletricista em Valpaços',
          serviceType: 'Instalações, reparações e diagnóstico elétrico',
          provider: { '@id': 'https://eletricista-norte-reparos.pt/#localbusiness-valpacos-react' },
          areaServed: { '@type': 'AdministrativeArea', name: 'Concelho de Valpaços' },
        },
        {
          '@type': 'FAQPage',
          mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: { '@type': 'Answer', text: faq.answer },
          })),
        },
      ],
    });
    document.head.appendChild(schemaScript);

    return () => schemaScript.remove();
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <section className="relative bg-cover bg-center py-20 text-white" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.72), rgba(0, 0, 0, 0.72)), url('/images-optimized/hero/hero-electrician-portugal.jpg')` }}>
          <div className="container text-center"><Breadcrumbs items={[{ label: 'Eletricista', href: '/' }, { label: 'Valpaços', href: '/eletricista-valpacos' }]} /><h1 className="mb-6 text-4xl font-black md:text-6xl">Eletricista em Valpaços</h1><p className="mx-auto mb-8 max-w-3xl text-xl md:text-2xl">Instalações, reparações e diagnóstico elétrico. Descreva a instalação ou anomalia para a nossa equipa preparar a avaliação.</p><div className="flex flex-col justify-center gap-4 sm:flex-row"><a href="tel:+351932321892" className="inline-flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-8 py-4 text-xl font-bold text-white shadow-lg transition-all hover:bg-orange-600"><Phone className="h-6 w-6" /> +351 932 321 892</a><a href="https://wa.me/351932321892?text=Olá%2C%20preciso%20de%20um%20eletricista%20em%20Valpaços" className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-700 px-8 py-4 text-xl font-bold text-white shadow-lg transition-all hover:bg-green-800">💬 WhatsApp</a></div></div>
        </section>
        <section className="bg-white py-16"><div className="container"><div className="mx-auto max-w-4xl rounded-xl border-l-4 border-orange-500 bg-orange-50 p-7"><h2 className="mb-4 text-3xl font-black">Credenciação e âmbito</h2><p className="text-lg font-bold">Eletricista credenciado pela DGEG — Técnico Responsável de Instalações Elétricas, TRIESP n.º 90062. Execução em Baixa Tensão até 41,4 kVA.</p><p className="mt-3 text-gray-700">Este estatuto não substitui o diagnóstico da instalação nem significa certificação automática de qualquer trabalho.</p></div></div></section>
        <section className="bg-gray-50 py-16"><div className="container"><h2 className="mb-12 text-center text-3xl font-black">Serviços elétricos em Valpaços</h2><div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3"><article className="rounded-xl bg-white p-6 shadow"><Zap className="mb-4 h-9 w-9 text-orange-500" /><h3 className="mb-2 text-lg font-bold">Instalações e quadros</h3><p className="text-gray-600">Instalação, alteração e reparação de circuitos, tomadas, iluminação e quadros elétricos.</p></article><article className="rounded-xl bg-white p-6 shadow"><Wrench className="mb-4 h-9 w-9 text-orange-500" /><h3 className="mb-2 text-lg font-bold">Avarias e diagnóstico</h3><p className="text-gray-600">Para falhas de energia, disjuntores que disparam ou aquecimento anómalo, a câmara térmica e equipamentos Fluke são usados quando pertinentes ao diagnóstico.</p></article><article className="rounded-xl bg-white p-6 shadow"><ShieldCheck className="mb-4 h-9 w-9 text-orange-500" /><h3 className="mb-2 text-lg font-bold">Documentação elétrica</h3><p className="text-gray-600">Ficha eletrotécnica e Termos de responsabilidade: a partir de 350 € TTC, sob orçamento conforme o caso.</p></article></div></div></section>
        <section className="py-16"><div className="container mx-auto px-4"><div className="mx-auto max-w-4xl"><h2 className="mb-8 text-center text-3xl font-black">Preços e condições</h2><div className="grid gap-6 md:grid-cols-2"><div className="rounded-xl bg-orange-50 p-6"><h3 className="text-xl font-bold">Dias úteis, 09h–18h</h3><p className="mt-2 text-2xl font-black text-orange-600">70 €/h + 30 €</p></div><div className="rounded-xl bg-orange-50 p-6"><h3 className="text-xl font-bold">Fora desse horário</h3><p className="mt-2 text-2xl font-black text-orange-600">100 €/h + 50 €</p><p className="mt-1 text-gray-600">Noite, fins de semana e feriados.</p></div></div><p className="mt-6 text-gray-700">Valores TTC, IVA incluído. Cada hora começada é devida e a deslocação é faturada quando ocorre. Não há orçamento gratuito com deslocação; uma estimativa à distância pode ser indicativa se a informação for suficiente.</p></div></div></section>
        <section className="bg-gray-50 py-16"><div className="container max-w-4xl"><h2 className="mb-12 text-center text-3xl font-black">Perguntas frequentes — Valpaços</h2><FAQSection faqs={faqs} /></div></section>
        <section className="bg-orange-500 py-16 text-white"><div className="container text-center"><h2 className="mb-4 text-3xl font-black">Fale com a nossa equipa</h2><p className="mx-auto mb-8 max-w-3xl text-xl">Mais de 20 anos de experiência profissional. Seguro de responsabilidade civil profissional até 50.000 €. Atendimento telefónico 24h/24, 7 dias por semana; a janela de chegada é confirmada por telefone.</p><a href="tel:+351932321892" className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-xl font-bold text-orange-500 shadow-lg transition-all hover:bg-gray-100"><Phone className="h-6 w-6" /> +351 932 321 892</a></div></section>
        <CidadesProximas currentCity="Valpaços" cidades={cidadesProximas} serviceType="eletricista" />
        <RelatedCities currentCity="Valpaços" currentCitySlug="eletricista-valpacos" />
      </main>
      <Footer />
    </div>
  );
}
