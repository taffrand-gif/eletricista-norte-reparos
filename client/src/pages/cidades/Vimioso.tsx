import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';
import CidadesProximas from '@/components/CidadesProximas';
import Footer from '@/components/Footer';
import RelatedCities from '@/components/RelatedCities';
import FAQSection from '@/components/FAQSection';
import { getCidadesProximas } from '@/data/cidadesProximas';
import { useEffect } from 'react';
import { Phone } from 'lucide-react';

const faqs = [
  {
    question: 'Que dados ajudam a preparar um pedido de eletricista?',
    answer: 'Indique o sintoma, a divisão ou circuito afetado, o tipo de trabalho pretendido e envie fotografias apenas quando for seguro. Estes elementos permitem uma estimativa remota indicativa quando são suficientes.',
  },
  {
    question: 'Quais são os preços de referência?',
    answer: 'Em dias úteis, das 09h às 18h, a mão de obra é 70 €/h e a deslocação é 30 €. Fora desse horário, à noite, fins de semana e feriados, são 100 €/h e deslocação de 50 €. Valores TTC, IVA incluído.',
  },
];

export default function Vimioso() {
  const cidadesProximas = getCidadesProximas('vimioso');

  useEffect(() => {
    document.title = 'Eletricista em Vimioso — instalação e diagnóstico | Norte Reparos';
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Eletricista em Vimioso para instalação, diagnóstico e reparação planeada. DGEG/TRIESP 90062, Baixa Tensão até 41,4 kVA. Ligue +351 932 321 892.');
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://eletricista-norte-reparos.pt/eletricista-vimioso');

    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'schema-vimioso';
    schemaScript.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Electrician',
          '@id': 'https://eletricista-norte-reparos.pt/eletricista-vimioso#business',
          name: 'Norte Reparos — Eletricista',
          url: 'https://eletricista-norte-reparos.pt/eletricista-vimioso',
          telephone: '+351 932 321 892',
          areaServed: { '@type': 'AdministrativeArea', name: 'Concelho de Vimioso' },
          description: 'Eletricista em Vimioso para instalação, diagnóstico e reparação planeada. Eletricista credenciado pela DGEG — Técnico Responsável de Instalações Elétricas, TRIESP n.º 90062. Execução em Baixa Tensão até 41,4 kVA.',
        },
        {
          '@type': 'Service',
          name: 'Eletricista em Vimioso',
          serviceType: 'Instalação elétrica, diagnóstico e reparação',
          provider: { '@id': 'https://eletricista-norte-reparos.pt/eletricista-vimioso#business' },
          areaServed: { '@type': 'AdministrativeArea', name: 'Concelho de Vimioso' },
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
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="relative py-20 bg-cover bg-center text-white" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images-optimized/hero/hero-electrician-portugal.jpg')` }}>
          <div className="container text-center max-w-4xl">
            <Breadcrumbs items={[{ label: 'Eletricista', href: '/' }, { label: 'Vimioso', href: '/eletricista-vimioso' }]} />
            <h1 className="text-4xl md:text-6xl font-black mb-6">Eletricista em Vimioso — instalação, diagnóstico e reparação planeada</h1>
            <p className="text-xl md:text-2xl mb-8">Explique o trabalho pretendido ou o sintoma; a nossa equipa confirma a informação necessária antes de apresentar as condições de intervenção.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"><a href="tel:+351932321892" className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-xl font-bold"><Phone className="w-6 h-6" />+351 932 321 892</a><a href="https://wa.me/351932321892" className="inline-flex items-center justify-center bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-lg text-xl font-bold">WhatsApp</a></div>
          </div>
        </section>
        <section className="py-14 bg-gray-50"><div className="container max-w-4xl"><h2 className="text-3xl font-black text-center mb-8">Credenciação e âmbito</h2><p className="text-gray-700 text-center text-lg"><strong>Eletricista credenciado pela DGEG — Técnico Responsável de Instalações Elétricas, TRIESP n.º 90062. Execução em Baixa Tensão até 41,4 kVA.</strong></p><p className="text-gray-700 text-center">A credenciação não substitui a análise do caso nem significa certificação automática de qualquer instalação.</p></div></section>
        <section className="py-14"><div className="container"><h2 className="text-3xl font-black text-center mb-10">Serviços elétricos que avaliamos</h2><div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"><article className="p-6 bg-white rounded-xl shadow"><h3 className="text-xl font-bold mb-2">Instalação e remodelação</h3><p>Planeamento de circuitos, tomadas, iluminação e alterações a confirmar no local e no orçamento.</p></article><article className="p-6 bg-white rounded-xl shadow"><h3 className="text-xl font-bold mb-2">Avarias e quadros</h3><p>Diagnóstico de disjuntor que dispara, circuito sem energia, tomada ou ponto de luz avariado.</p></article><article className="p-6 bg-white rounded-xl shadow"><h3 className="text-xl font-bold mb-2">Verificação técnica</h3><p>Quando pertinente, podemos usar câmara térmica e instrumentos Fluke para orientar o diagnóstico elétrico.</p></article></div></div></section>
        <section className="py-14 bg-orange-50"><div className="container max-w-4xl"><h2 className="text-3xl font-black mb-5">Preços e documentos</h2><p className="mb-3"><strong>Dias úteis, 09h–18h:</strong> 70 €/h de mão de obra + 30 € de deslocação. <strong>Fora desse horário, à noite, fins de semana e feriados:</strong> 100 €/h + 50 € de deslocação.</p><p className="mb-3">Valores TTC, IVA incluído. Toda a hora iniciada é devida e a deslocação é cobrada quando ocorre. Não há orçamento gratuito com deslocação.</p><p><strong>Ficha eletrotécnica e Termos de responsabilidade: a partir de 350 € TTC, sob orçamento conforme o caso.</strong> A necessidade destes documentos é analisada para o trabalho concreto; não são emitidos automaticamente.</p></div></section>
        <section className="py-14"><div className="container max-w-4xl"><h2 className="text-3xl font-black text-center mb-10">Perguntas Frequentes — Vimioso</h2><FAQSection faqs={faqs} /><p className="mt-8">Atendimento telefónico 24h/24, 7 dias por semana. A janela de chegada, quando aplicável, é confirmada por telefone conforme a situação operacional.</p></div></section>
        <section className="py-14 bg-orange-500 text-white"><div className="container text-center"><h2 className="text-3xl font-black mb-4">Fale com a nossa equipa</h2><p className="text-xl mb-8">Mais de 20 anos de experiência profissional. Seguro de responsabilidade civil profissional até 50.000 €.</p><a href="tel:+351932321892" className="inline-flex items-center gap-2 bg-white text-orange-500 px-8 py-4 rounded-lg text-xl font-bold"><Phone className="w-6 h-6" />+351 932 321 892</a></div></section>
        <CidadesProximas currentCity="Vimioso" cidades={cidadesProximas} serviceType="eletricista" />
        <RelatedCities currentCity="Vimioso" currentCitySlug="eletricista-vimioso" />
      </main>
      <Footer />
    </div>
  );
}
