// SEO page for "Eletricista Bragança"
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RelatedCities from '@/components/RelatedCities';
import SEOHead from '@/components/SEOHead';
import StructuredData from '@/components/StructuredData';
import Breadcrumbs from '@/components/Breadcrumbs';
import CidadesProximas from '@/components/CidadesProximas';
import FAQSection from '@/components/FAQSection';
import { useSite } from '@/contexts/SiteContext';
import { businessInfo, getCityAddress } from '@/../../shared/napConfig';
import { useEffect } from 'react';
import { getCidadesProximas } from '@/data/cidadesProximas';

export default function Braganca() {
  const { config } = useSite();
  const faqs = [
    {
      question: 'Que informação devo enviar antes da deslocação?',
      answer: 'Indique a localidade, o que acontece e desde quando. Para quadro, tomada ou instalação, uma fotografia nítida pode ajudar a enquadrar a situação. Confirmamos por telefone os dados necessários e a possibilidade de deslocação.',
    },
    {
      question: 'Quanto custa a intervenção de um eletricista em Bragança?',
      answer: 'Em dias úteis, das 09:00 às 18:00, a tarifa é 70 €/hora mais 30 € de deslocação. Fora desse horário, à noite, aos fins de semana e feriados, é 100 €/hora mais 50 € de deslocação. Os valores incluem IVA, toda a hora iniciada é devida e a deslocação é faturada quando se realiza.',
    },
    {
      question: 'É possível dar uma estimativa sem visita?',
      answer: 'Com uma descrição detalhada e, quando útil, fotografias, podemos dar uma estimativa indicativa à distância. Não é um compromisso de preço fechado: o trabalho e a deslocação são confirmados de acordo com o caso.',
    },
    {
      question: 'Tratam de quadro elétrico, tomadas e remodelação?',
      answer: 'Sim. Orientamos intervenções em quadros elétricos, tomadas, interruptores e remodelações de instalações. Para documentação eletrotécnica ou Termo de Responsabilidade, avaliamos primeiro o âmbito aplicável.',
    },
    {
      question: 'Podem atender fora do horário 09:00–18:00?',
      answer: 'A linha telefónica está disponível 24 horas por dia, 7 dias por semana. A possibilidade de intervenção e a janela de chegada são confirmadas por telefone conforme a situação operacional; a disponibilidade telefónica não garante intervenção imediata.',
    },
  ];

  useEffect(() => {
    document.title = 'Eletricista em Bragança — Instalação e remodelação | Norte Reparos';

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Eletricista em Bragança para quadros elétricos, tomadas e remodelação. Diga-nos a localidade, o sintoma e envie foto se ajudar. Ligue 932 321 892.');

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'eletricista bragança, quadro elétrico bragança, tomadas bragança, remodelação elétrica bragança, instalação elétrica bragança');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://eletricista-norte-reparos.pt/eletricista-braganca');

    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Eletricista Profissional — Eletricista em Bragança',
      image: '/images-optimized/hero/hero-electrician-portugal.jpg',
      description: 'Eletricista profissional em Bragança, Trás-os-Montes. Instalação, arranjo e reparação elétrica.',
      address: getCityAddress('braganca'),
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '41.8058',
        longitude: '-6.7570',
      },
      telephone: businessInfo.phone,
      openingHours: 'Mo-Fr 09:00-18:00',
      priceRange: '€€',
      areaServed: {
        '@type': 'City',
        name: 'Bragança',
      },
      sameAs: [
        `https://wa.me/${businessInfo.whatsapp}?text=${encodeURIComponent('Olá, preciso de um eletricista em Trás-os-Montes. Podem dar-me um orçamento?')}`,
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
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    });
    document.head.appendChild(faqSchema);

    return () => {
      document.head.removeChild(schemaScript);
      document.head.removeChild(faqSchema);
    };
  }, [config]);

  const cidadesProximas = getCidadesProximas('braganca');

  return (
    <>
      <SEOHead />
      <StructuredData />
      <Header />

      <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        <section className="bg-gradient-to-r from-amber-600 to-amber-800 py-16 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <Breadcrumbs items={[
                { label: 'Eletricista', href: '/' },
                { label: 'Trás-os-Montes', href: '/tras-os-montes' },
                { label: 'Bragança', href: '/eletricista-braganca' },
              ]} />

              <h1 className="mb-6 text-4xl font-bold md:text-5xl">
                Eletricista em <span className="text-blue-900">Bragança</span> — Instalação e remodelação
              </h1>

              <p className="mb-8 text-xl">
                Apoio para quadros elétricos, tomadas, interruptores e remodelações de instalações em Bragança.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href={`tel:${businessInfo.phone}`}
                  className="rounded-lg bg-white px-8 py-4 text-lg font-bold text-amber-700 transition-colors hover:bg-gray-100"
                >
                  📞 Eletricista Bragança: {businessInfo.phoneFormatted}
                </a>
                <a
                  href={`https://wa.me/${businessInfo.whatsapp}?text=Olá, preciso de um eletricista em Bragança`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-blue-900 px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-blue-800"
                >
                  💬 WhatsApp para Bragança
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl rounded-2xl border border-amber-200 bg-white p-8 shadow-lg">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">Eletricista em Bragança: como avançar</h2>
              <p className="mb-4 text-gray-700">
                Para um quadro elétrico, uma tomada, um interruptor ou uma remodelação, contacte-nos por telefone ou WhatsApp.
                Indique a localidade, o sintoma ou o trabalho pretendido e, se for útil, envie uma fotografia do quadro ou do ponto elétrico.
              </p>
              <p className="mb-4 text-gray-700">
                Em dias úteis, das <strong>09:00 às 18:00</strong>, a tarifa é <strong>70 €/hora + 30 € de deslocação</strong>.
                Fora desse horário, à noite, aos fins de semana e feriados, é <strong>100 €/hora + 50 € de deslocação</strong>.
                Os valores incluem IVA, toda a hora iniciada é devida e a deslocação é faturada quando se realiza.
              </p>
              <p className="text-gray-700">
                Uma estimativa à distância pode ser indicativa quando há informação suficiente; não substitui a confirmação do âmbito
                nem constitui um preço fechado. A linha telefónica está disponível 24 horas por dia, 7 dias por semana, e a janela de
                chegada é confirmada por telefone conforme a situação operacional.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto grid grid-cols-1 gap-10 px-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-amber-100 bg-white p-8 shadow-lg">
              <h2 className="mb-6 text-3xl font-bold text-gray-900">Trabalhos elétricos planeados</h2>
              <ul className="space-y-4 text-gray-700">
                <li>
                  <a className="font-semibold text-amber-700 hover:underline" href="/eletricista-quadro-eletrico-braganca">
                    Quadros elétricos
                  </a>{' '}
                  — avaliação, substituição ou modernização conforme o caso.
                </li>
                <li>
                  <a className="font-semibold text-amber-700 hover:underline" href="/eletricista-tomada-interruptor-braganca">
                    Tomadas e interruptores
                  </a>{' '}
                  — instalação, substituição ou verificação de pontos elétricos.
                </li>
                <li>
                  <a className="font-semibold text-amber-700 hover:underline" href="/instalacao-eletrica-braganca">
                    Instalações e remodelações elétricas
                  </a>{' '}
                  — preparação e execução para a alteração prevista.
                </li>
                <li>Iluminação e pontos de luz integrados numa intervenção planeada.</li>
              </ul>
              <p className="mt-6 text-gray-700">
                Esta página orienta pedidos gerais de eletricista em Bragança. Para cada necessidade, confirmamos por telefone o que é
                necessário avaliar antes de marcar uma deslocação.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-8 shadow-lg">
              <h2 className="mb-6 text-3xl font-bold text-gray-900">Avaliação e documentação técnica</h2>
              <p className="mb-4 text-gray-700">
                <strong>Eletricista credenciado pela DGEG — Técnico Responsável de Instalações Elétricas, TRIESP n.º 90062. Execução em Baixa Tensão até 41,4 kVA.</strong>
                Para Ficha Eletrotécnica e Termo de Responsabilidade, o valor é desde <strong>350 € com IVA incluído</strong>,
                consoante o caso e o âmbito aplicável.
              </p>
              <p className="mb-4 text-gray-700">
                Temos mais de 20 anos de experiência profissional e seguro de responsabilidade civil profissional até 50.000 €.
                Os materiais, a solução técnica e a documentação necessária são esclarecidos para o trabalho concreto, sem assumir
                um resultado antes da avaliação.
              </p>
              <p className="text-gray-700">
                A deslocação é faturada quando se realiza e não é deduzida automaticamente do trabalho.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <FAQSection title="Perguntas frequentes sobre eletricista em Bragança" faqs={faqs} />
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-900 to-amber-700 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-6 text-3xl font-bold">
              Precisa de um eletricista em <span className="text-amber-300">Bragança</span>?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl">
              Diga-nos a localidade, o que acontece ou o trabalho que pretende. Confirmamos por telefone a informação útil para o
              diagnóstico e a possibilidade de deslocação.
            </p>

            <div className="mb-8 flex flex-col items-center justify-center gap-6 sm:flex-row">
              <a
                href={`tel:${businessInfo.phone}`}
                className="rounded-lg bg-white px-8 py-4 text-lg font-bold text-amber-700 transition-colors hover:bg-gray-100"
              >
                📞 {businessInfo.phoneFormatted} (Bragança)
              </a>
              <a
                href={`https://wa.me/${businessInfo.whatsapp}?text=Olá, preciso de um eletricista em Bragança`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-amber-600 px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-amber-500"
              >
                💬 WhatsApp para Bragança
              </a>
            </div>
            <p className="text-amber-100">Linha telefónica 24h/7d · intervenção e janela de chegada confirmadas por telefone</p>
          </div>
        </section>

        <CidadesProximas currentCity="Bragança" cidades={cidadesProximas} serviceType="eletricista" />
        <RelatedCities currentCity="Braganca" currentCitySlug="eletricista-braganca" />
      </main>

      <Footer />
    </>
  );
}
