import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';
import CidadesProximas from '@/components/CidadesProximas';
import Footer from '@/components/Footer';
import RelatedCities from '@/components/RelatedCities';
import FAQSection from '@/components/FAQSection';
import { getCidadesProximas } from '@/data/cidadesProximas';
import { useEffect } from 'react';
import { Phone, CheckCircle, Shield, Zap } from 'lucide-react';

const faqs = [
  {
    question: 'Quanto custa um eletricista em Carrazeda de Ansiães?',
    answer: 'Em dias úteis, das 09h às 18h, a mão de obra é 70 €/h e a deslocação é 30 € se tiver lugar. Fora desse horário, à noite, fins de semana e feriados, são 100 €/h e 50 € de deslocação. IVA incluído e toda a hora iniciada é devida.',
  },
  {
    question: 'Qual é o âmbito DGEG disponível?',
    answer: 'Eletricista credenciado pela DGEG — Técnico Responsável de Instalações Elétricas, TRIESP n.º 90062. Execução em Baixa Tensão até 41,4 kVA.',
  },
  {
    question: 'Como pedir uma estimativa?',
    answer: 'Envie descrição, fotografias seguras do quadro ou ponto elétrico e os equipamentos envolvidos. Se houver informação suficiente, a estimativa remota é indicativa; a confirmação depende da análise do caso.',
  },
];

export default function CarrazedaDeAnsiaes() {
  const cidadesProximas = getCidadesProximas('carrazeda-de-ansiaes');

  useEffect(() => {
    document.title = 'Eletricista em Carrazeda de Ansiães — instalações e diagnóstico | Norte Reparos';
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Eletricista em Carrazeda de Ansiães para instalações, diagnóstico e alterações planeadas. Credenciação DGEG, preços claros e contacto 24/7.');
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://eletricista-norte-reparos.pt/eletricista-carrazeda-de-ansiaes');

    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'schema-carrazeda';
    schemaScript.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Electrician',
          name: 'Norte Reparos — Eletricista em Carrazeda de Ansiães',
          url: 'https://eletricista-norte-reparos.pt/eletricista-carrazeda-de-ansiaes',
          telephone: '+351 932 321 892',
          priceRange: '€€',
          areaServed: { '@type': 'AdministrativeArea', name: 'Concelho de Carrazeda de Ansiães' },
        },
        {
          '@type': 'Service',
          name: 'Serviços elétricos planeados em Carrazeda de Ansiães',
          serviceType: 'Instalação, diagnóstico e reparação elétrica planeada',
          areaServed: { '@type': 'AdministrativeArea', name: 'Concelho de Carrazeda de Ansiães' },
        },
      ],
    });
    document.head.appendChild(schemaScript);

    const faqSchema = document.createElement('script');
    faqSchema.type = 'application/ld+json';
    faqSchema.setAttribute('data-faq-schema', 'true');
    faqSchema.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    });
    document.head.appendChild(faqSchema);

    return () => {
      schemaScript.remove();
      faqSchema.remove();
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <section className="relative bg-gradient-to-r from-slate-800 to-slate-950 py-20 text-white">
          <div className="container text-center">
            <Breadcrumbs items={[{ label: 'Eletricista', href: '/' }, { label: 'Carrazeda de Ansiães', href: '/eletricista-carrazeda-de-ansiaes' }]} />
            <h1 className="mb-6 text-4xl font-black md:text-6xl">Eletricista em Carrazeda de Ansiães</h1>
            <p className="mx-auto mb-8 max-w-3xl text-xl md:text-2xl">Instalações, alterações e diagnóstico elétrico planeados. Diga-nos o que pretende fazer ou o que observa na instalação para prepararmos a avaliação.</p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row"><a href="tel:+351932321892" className="inline-flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-8 py-4 text-xl font-bold text-white shadow-lg transition-all hover:bg-orange-600"><Phone className="h-6 w-6" />+351 932 321 892</a><a href="https://wa.me/351932321892?text=Olá,%20preciso%20de%20um%20eletricista%20em%20Carrazeda%20de%20Ansiães" className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-700 px-8 py-4 text-xl font-bold text-white shadow-lg transition-all hover:bg-green-800">WhatsApp</a></div>
          </div>
        </section>

        <section className="bg-white py-16"><div className="container max-w-4xl"><h2 className="mb-5 text-center text-3xl font-black">Credenciação e âmbito elétrico</h2><div className="rounded-xl border-l-4 border-orange-500 bg-orange-50 p-6 shadow"><p className="text-lg font-bold">Eletricista credenciado pela DGEG — Técnico Responsável de Instalações Elétricas, TRIESP n.º 90062. Execução em Baixa Tensão até 41,4 kVA.</p><p className="mt-3 text-gray-700">A credenciação não equivale a certificação automática. Quando Ficha Eletrotécnica ou Termos de Responsabilidade forem necessários segundo o caso, o tratamento começa em 350 € com IVA incluído, depois de análise.</p></div></div></section>

        <section className="bg-gray-50 py-16"><div className="container"><h2 className="mb-8 text-center text-3xl font-black">Como avaliamos o pedido</h2><div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3"><article className="rounded-xl bg-white p-6 shadow"><Zap className="mb-3 h-8 w-8 text-orange-500" /><h3 className="mb-2 text-lg font-bold">Quadro e circuitos</h3><p className="text-gray-600">Indique os disjuntores envolvidos, a potência conhecida, equipamentos previstos e alterações recentes.</p></article><article className="rounded-xl bg-white p-6 shadow"><Shield className="mb-3 h-8 w-8 text-orange-500" /><h3 className="mb-2 text-lg font-bold">Diagnóstico prudente</h3><p className="text-gray-600">Câmara térmica e instrumentos Fluke podem apoiar a análise quando forem pertinentes à situação observada.</p></article><article className="rounded-xl bg-white p-6 shadow"><CheckCircle className="mb-3 h-8 w-8 text-orange-500" /><h3 className="mb-2 text-lg font-bold">Alterações planeadas</h3><p className="text-gray-600">Para novos pontos ou remodelação, a proposta clarifica mão de obra, materiais e limites do trabalho.</p></article></div></div></section>

        <section className="py-16"><div className="container max-w-4xl"><h2 className="mb-6 text-3xl font-black">Preços e condições</h2><div className="rounded-xl bg-white p-6 shadow"><p><strong>Dias úteis, 09h–18h:</strong> 70 €/h de mão de obra + 30 € de deslocação, se esta tiver lugar.</p><p className="mt-3"><strong>Fora deste horário, noite, fim de semana ou feriado:</strong> 100 €/h + 50 € de deslocação, se esta tiver lugar.</p><p className="mt-3 text-gray-700">IVA incluído. Toda a hora iniciada é devida. Não há orçamento gratuito com deslocação; com descrição e fotografias suficientes, a estimativa remota é apenas indicativa.</p></div><p className="mt-5 text-gray-700">A linha telefónica está disponível 24/7. Para um trabalho planeado, confirmamos por telefone a informação em falta e a janela adequada, sem promessa de chegada imediata.</p><p className="mt-3 text-gray-700">A nossa equipa tem mais de 20 anos de experiência profissional e seguro de responsabilidade civil profissional até 50.000 €.</p></div></section>

        <section className="bg-orange-500 py-16 text-white"><div className="container text-center"><h2 className="mb-4 text-3xl font-black">Peça uma avaliação elétrica</h2><p className="mx-auto mb-8 max-w-2xl text-xl opacity-90">Envie uma descrição e fotografias seguras do quadro ou do ponto elétrico. Explicamos os próximos passos antes de uma eventual deslocação.</p><a href="tel:+351932321892" className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-xl font-bold text-orange-500 shadow-lg transition-all hover:bg-gray-100"><Phone className="h-6 w-6" />+351 932 321 892</a></div></section>
        <section className="py-16"><div className="container max-w-4xl"><h2 className="mb-12 text-center text-3xl font-black">Perguntas frequentes — Carrazeda de Ansiães</h2><FAQSection faqs={faqs} /></div></section>
        <CidadesProximas currentCity="Carrazeda de Ansiães" cidades={cidadesProximas} serviceType="eletricista" />
        <RelatedCities currentCity="Carrazeda de Ansiães" currentCitySlug="eletricista-carrazeda-de-ansiaes" />
      </main>
      <Footer />
    </div>
  );
}
