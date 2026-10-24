import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';
import CidadesProximas from '@/components/CidadesProximas';
import Footer from '@/components/Footer';
import RelatedCities from '@/components/RelatedCities';
import FAQSection from '@/components/FAQSection';
import { businessInfo } from '@/../../shared/napConfig';
import { getCidadesProximas } from '@/data/cidadesProximas';
import { useEffect } from 'react';

const dgegWording = 'Eletricista credenciado pela DGEG — Técnico Responsável de Instalações Elétricas, TRIESP n.º 90062. Execução em Baixa Tensão até 41,4 kVA.';

const faqs = [
  {
    question: 'Que informação devo enviar para pedir um orçamento elétrico em Vila Real?',
    answer: 'Indique a localidade, o equipamento ou circuito em causa, os sintomas e, se possível, fotografias do quadro ou do ponto afetado. Quando os elementos são suficientes, a nossa equipa pode dar uma estimativa à distância indicativa; o orçamento é confirmado por escrito antes da intervenção.',
  },
  {
    question: 'Quais são os preços de eletricista?',
    answer: 'Em dias úteis, das 09h às 18h, a mão de obra é 70 €/h e a deslocação é 30 €. Fora desse horário, à noite, aos fins de semana e feriados, são 100 €/h e 50 € de deslocação. Valores TTC, IVA incluído; toda a hora começada é devida e a deslocação é faturada quando ocorre.',
  },
  {
    question: 'Qual é o estatuto profissional para instalações elétricas?',
    answer: dgegWording,
  },
  {
    question: 'Emitem Ficha eletrotécnica e Termos de responsabilidade?',
    answer: 'Ficha eletrotécnica e Termos de responsabilidade: a partir de 350 € TTC, sob orçamento conforme o caso. A emissão depende do âmbito aplicável; não é automática em todas as intervenções.',
  },
];

export default function VilaReal() {
  const cidadesProximas = getCidadesProximas('vila-real');

  useEffect(() => {
    document.title = 'Eletricista em Vila Real — instalação, avarias e diagnóstico | Norte Reparos';

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      'Eletricista em Vila Real para instalações, quadros, avarias e diagnóstico. DGEG/TRIESP 90062, preços claros e orçamento por escrito.',
    );

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://eletricista-norte-reparos.pt/eletricista-vila-real');

    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'schema-vila-real';
    schemaScript.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'LocalBusiness',
          '@id': 'https://eletricista-norte-reparos.pt/eletricista-vila-real#business',
          name: 'Norte Reparos — Eletricista Vila Real',
          url: 'https://eletricista-norte-reparos.pt/eletricista-vila-real',
          telephone: '+351932321892',
          areaServed: { '@type': 'AdministrativeArea', name: 'Concelho de Vila Real' },
        },
        {
          '@type': 'Service',
          name: 'Instalação, reparação e diagnóstico elétrico em Vila Real',
          serviceType: 'Eletricista',
          provider: { '@id': 'https://eletricista-norte-reparos.pt/eletricista-vila-real#business' },
          areaServed: { '@type': 'AdministrativeArea', name: 'Concelho de Vila Real' },
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

    return () => {
      document.head.removeChild(schemaScript);
    };
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        <section className="bg-gradient-to-r from-amber-600 to-amber-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <Breadcrumbs items={[
                { label: 'Eletricista', href: '/' },
                { label: 'Vila Real', href: '/eletricista-vila-real' },
              ]} />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Eletricista em <span className="text-blue-900">Vila Real</span></h1>
              <p className="text-xl mb-8">Instalações, avarias e diagnóstico elétrico com avaliação do caso antes de avançar.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+351932321892" className="bg-white text-amber-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors">Ligar: {businessInfo.phone}</a>
                <a href={`https://wa.me/${businessInfo.whatsapp}?text=Olá, preciso de um eletricista em Vila Real`} target="_blank" rel="noopener noreferrer" className="bg-blue-900 hover:bg-blue-800 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors">Enviar informações por WhatsApp</a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-5">Informação profissional</h2>
            <p className="text-gray-700 font-semibold mb-4">{dgegWording}</p>
            <p className="text-gray-700">Este estatuto aplica-se ao âmbito indicado e não substitui o diagnóstico da instalação nem significa certificação automática de qualquer trabalho.</p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Como avaliamos o pedido</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <article className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Instalações e quadros elétricos</h3>
                <p className="text-gray-600">Explique o objetivo do trabalho, a instalação existente e os equipamentos previstos. O âmbito, materiais e acessos são considerados no orçamento por escrito.</p>
              </article>
              <article className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Avarias e disparos</h3>
                <p className="text-gray-600">Diga o que deixou de funcionar, se o disjuntor dispara e em que condições. Para diagnóstico elétrico, podemos recorrer a câmara térmica e instrumentos Fluke quando forem pertinentes.</p>
              </article>
              <article className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Tomadas, iluminação e circuitos</h3>
                <p className="text-gray-600">Fotografias do ponto afetado e do quadro, sem mexer em condutores expostos, ajudam-nos a preparar a visita e a confirmar as condições de segurança.</p>
              </article>
              <article className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Documentação elétrica</h3>
                <p className="text-gray-600">Ficha eletrotécnica e Termos de responsabilidade: a partir de 350 € TTC, sob orçamento conforme o caso. A necessidade e a emissão são avaliadas para cada situação.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="py-12 bg-amber-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-5">Preços e condições</h2>
            <div className="bg-white p-6 rounded-xl shadow-md text-gray-700 space-y-3">
              <p><strong>Em dias úteis, das 09h às 18h:</strong> mão de obra 70 €/h + deslocação 30 €.</p>
              <p><strong>Fora desse horário, à noite, fins de semana e feriados:</strong> mão de obra 100 €/h + deslocação 50 €.</p>
              <p>Valores TTC, IVA incluído. Toda a hora começada é devida e a deslocação é faturada quando ocorre. A deslocação ou a visita técnica não são prestadas sem custo.</p>
              <p>Quando há elementos suficientes, a estimativa à distância é indicativa. O orçamento por escrito é confirmado antes da intervenção. Seguro de responsabilidade civil profissional até 50.000 €.</p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-5">Contacto e segurança</h2>
            <p className="text-gray-700 mb-4">O atendimento telefónico está disponível 24h/24, 7 dias por semana. Em caso de avaria prioritária, confirmamos por telefone a disponibilidade e a janela de chegada conforme a situação operacional.</p>
            <p className="text-gray-700">Se houver cheiro a queimado, cabos expostos ou risco de contacto com água, desligue o circuito se o conseguir fazer em segurança e não toque na instalação. Para casos urgentes, consulte também o serviço de <a className="text-amber-700 font-semibold underline" href="https://eletricista-urgente.pt/concelhos/vila-real">eletricista urgente no concelho de Vila Real</a>.</p>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container max-w-4xl mx-auto px-4"><FAQSection title="Perguntas frequentes — eletricista em Vila Real" faqs={faqs} /></div>
        </section>

        <section className="py-14 bg-gradient-to-r from-blue-900 to-amber-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Precisa de explicar uma instalação ou avaria?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Ligue ou envie uma descrição e fotografias para a nossa equipa.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="tel:+351932321892" className="bg-white text-amber-700 font-bold px-8 py-4 rounded-lg text-lg">{businessInfo.phone}</a>
              <a href={`https://wa.me/${businessInfo.whatsapp}?text=Olá, preciso de um eletricista em Vila Real`} target="_blank" rel="noopener noreferrer" className="bg-amber-600 text-white font-bold px-8 py-4 rounded-lg text-lg">WhatsApp</a>
            </div>
          </div>
        </section>

        <CidadesProximas currentCity="Vila Real" cidades={cidadesProximas} serviceType="eletricista" />
        <RelatedCities currentCity="Vila Real" currentCitySlug="eletricista-vila-real" />
      </main>
      <Footer />
    </>
  );
}
