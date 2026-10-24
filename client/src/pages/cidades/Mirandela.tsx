// Página local para "Eletricista Mirandela"
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

export default function Mirandela() {
  const { config } = useSite();
  const faqs = [
    {
      question: 'Que serviços elétricos fazem em Mirandela?',
      answer: 'Avaliamos avarias, tomadas, interruptores, iluminação, quadros elétricos e trabalhos planeados de instalação ou remodelação, conforme o diagnóstico no local.',
    },
    {
      question: 'Como funcionam os preços?',
      answer: 'Em dias úteis, das 09:00 às 18:00, são 70 €/hora mais 30 € de deslocação. À noite, fins de semana, feriados e fora desse horário, são 100 €/hora mais 50 € de deslocação. Os valores incluem IVA e toda a hora iniciada é devida.',
    },
    {
      question: 'Que informação devo enviar antes de ligar?',
      answer: 'Indique a localidade, o sintoma e o que já verificou. Uma fotografia do quadro, tomada ou equipamento pode ajudar quando for pertinente. A estimativa à distância é indicativa; a deslocação é faturada quando ocorre.',
    },
  ];

  useEffect(() => {
    document.title = 'Eletricista em Mirandela | Norte Reparos';

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Eletricista em Mirandela para avarias, instalações, quadros e iluminação. Ligue ou envie WhatsApp: indique localidade e sintoma; a estimativa à distância é indicativa.');

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'eletricista mirandela, avarias elétricas mirandela, instalação elétrica mirandela, quadro elétrico mirandela, iluminação mirandela');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://eletricista-norte-reparos.pt/eletricista-mirandela');

    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      'name': 'Eletricista Profissional — Eletricista em Mirandela',
      'image': '/images-optimized/hero/hero-electrician-portugal.jpg',
      'description': 'Serviços de eletricidade em Mirandela para avarias, instalações, quadros e iluminação. A nossa equipa confirma por telefone a informação necessária e a janela de chegada.',
      'telephone': businessInfo.phone,
      'areaServed': {
        '@type': 'City',
        'name': 'Mirandela',
      },
      'sameAs': [
        `https://wa.me/${businessInfo.whatsapp}?text=${encodeURIComponent('Olá, preciso de um eletricista em Mirandela. Podem ajudar-me a avaliar a situação?')}`,
      ],
    });
    document.head.appendChild(schemaScript);

    const faqSchema = document.createElement('script');
    faqSchema.type = 'application/ld+json';
    faqSchema.setAttribute('data-faq-schema', 'true');
    faqSchema.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': faqs.map((faq) => ({
        '@type': 'Question',
        'name': faq.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': faq.answer,
        },
      })),
    });
    document.head.appendChild(faqSchema);

    return () => {
      document.head.removeChild(schemaScript);
      document.head.removeChild(faqSchema);
    };
  }, [config]);

  const cidadesProximas = getCidadesProximas('mirandela');

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
                { label: 'Mirandela', href: '/eletricista-mirandela' },
              ]} />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Eletricista em <span className="text-blue-900">Mirandela</span>
              </h1>
              <p className="text-xl mb-8">
                A nossa equipa avalia avarias, tomadas, interruptores, iluminação, quadros elétricos e trabalhos planeados de instalação ou remodelação.
              </p>
              <p className="text-lg mb-8 font-semibold">
                Eletricista credenciado pela DGEG — Técnico Responsável de Instalações Elétricas, TRIESP n.º 90062. Execução em Baixa Tensão até 41,4 kVA.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${businessInfo.phone}`}
                  className="bg-white text-amber-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
                >
                  📞 Eletricista Mirandela: {businessInfo.phoneFormatted}
                </a>
                <a
                  href={`https://wa.me/${businessInfo.whatsapp}?text=Olá, preciso de um eletricista em Mirandela`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-900 hover:bg-blue-800 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
                >
                  💬 WhatsApp para Mirandela
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-amber-100 mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Como pedir ajuda elétrica em Mirandela</h2>
              <p className="text-gray-600 text-lg">
                Ligue ou envie WhatsApp e indique a localidade, o sintoma e o que já verificou. Uma fotografia do quadro, tomada ou equipamento pode ajudar quando for pertinente. A linha telefónica está disponível 24 horas por dia, 7 dias por semana; a janela de chegada é confirmada ao telefone conforme a situação operacional.
              </p>
              <p className="text-gray-600 text-lg mt-4">
                Quando houver elementos suficientes, podemos dar uma estimativa à distância, sempre indicativa. A deslocação é faturada quando ocorre e a estimativa não corresponde a um valor fixo assumido.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <article className="bg-white p-6 rounded-xl shadow-lg border border-amber-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Avarias e diagnóstico</h3>
                <p className="text-gray-600">Avaliação de disjuntores, falhas, tomadas, interruptores e circuitos. Quando o diagnóstico o justificar, podemos utilizar câmara térmica ou equipamento Fluke.</p>
              </article>
              <article className="bg-white p-6 rounded-xl shadow-lg border border-amber-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Instalação e remodelação</h3>
                <p className="text-gray-600">Planeamento e execução de linhas, tomadas, iluminação e alterações elétricas adequadas ao local e ao trabalho pretendido.</p>
              </article>
              <article className="bg-white p-6 rounded-xl shadow-lg border border-amber-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Quadros e iluminação</h3>
                <p className="text-gray-600">Análise de quadros elétricos e soluções para iluminação, substituição ou melhoria, após avaliação da situação.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Preços claros antes da intervenção</h2>
            <div className="overflow-x-auto bg-white rounded-xl shadow-md">
              <table className="w-full text-left">
                <thead className="bg-amber-50">
                  <tr>
                    <th className="p-4 font-bold text-gray-900">Período</th>
                    <th className="p-4 font-bold text-gray-900">Mão de obra</th>
                    <th className="p-4 font-bold text-gray-900">Deslocação</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-4">Dias úteis, 09:00–18:00</td>
                    <td className="p-4">70 €/hora</td>
                    <td className="p-4">30 €</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4">Noite, fins de semana, feriados e fora desse horário</td>
                    <td className="p-4">100 €/hora</td>
                    <td className="p-4">50 €</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-600 text-center mt-5">
              Todos os valores incluem IVA. Toda a hora iniciada é devida. Materiais e âmbito são explicados antes de avançar.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Responsabilidade técnica quando aplicável</h2>
              <p className="text-gray-600">
                Para trabalhos dentro do âmbito aplicável, contamos com eletricista credenciado pela DGEG — Técnico Responsável de Instalações Elétricas, TRIESP n.º 90062, com execução em Baixa Tensão até 41,4 kVA.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-black text-center mb-12">Perguntas frequentes sobre eletricidade em Mirandela</h2>
            <FAQSection faqs={faqs} />
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-blue-900 to-amber-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Precisa de um eletricista em Mirandela?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Fale diretamente com a nossa equipa e explique a situação para podermos orientar o próximo passo.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href={`tel:${businessInfo.phone}`}
                className="bg-white text-amber-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
              >
                📞 {businessInfo.phoneFormatted}
              </a>
              <a
                href={`https://wa.me/${businessInfo.whatsapp}?text=Olá, preciso de um eletricista em Mirandela`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-600 hover:bg-amber-500 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
              >
                💬 WhatsApp para Mirandela
              </a>
            </div>
          </div>
        </section>

        <CidadesProximas
          currentCity="Mirandela"
          cidades={cidadesProximas}
          serviceType="eletricista"
        />
        <RelatedCities
          currentCity="Mirandela"
          currentCitySlug="eletricista-mirandela"
        />
      </main>

      <Footer />
    </>
  );
}
