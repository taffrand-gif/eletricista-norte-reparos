// Página local de eletricidade programada — Mogadouro
import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';
import CidadesProximas from '@/components/CidadesProximas';
import Footer from '@/components/Footer';
import RelatedCities from '@/components/RelatedCities';
import FAQSection from '@/components/FAQSection';
import { getCidadesProximas } from '@/data/cidadesProximas';
import { useEffect } from 'react';
import { Phone, Zap, Shield, CheckCircle } from 'lucide-react';

const PHONE = '+351 932 321 892';
const WHATSAPP = '351932321892';

const faqs = [
  {
    question: 'Quanto custa um eletricista em Mogadouro?',
    answer: 'Em dias úteis, das 09h às 18h, a mão de obra é 70 €/h e a deslocação é 30 € quando ocorre. Fora desse horário, à noite, fins de semana e feriados, a mão de obra é 100 €/h e a deslocação é 50 €. Os valores incluem IVA e toda a hora iniciada é devida.',
  },
  {
    question: 'Que informação ajuda a preparar uma intervenção programada?',
    answer: 'Indique o tipo de trabalho, fotografias do quadro ou do ponto afetado, potência ou equipamentos envolvidos e qualquer obra prevista. Com elementos suficientes, a nossa equipa pode dar uma estimativa indicativa à distância; uma visita com deslocação não é um orçamento gratuito.',
  },
  {
    question: 'Que credenciação é aplicável?',
    answer: 'Eletricista credenciado pela DGEG — Técnico Responsável de Instalações Elétricas, TRIESP n.º 90062. Execução em Baixa Tensão até 41,4 kVA.',
  },
  {
    question: 'Quando são emitidos Ficha Eletrotécnica e Termos de Responsabilidade?',
    answer: 'Quando aplicável ao caso, a Ficha Eletrotécnica e os Termos de Responsabilidade têm preço a partir de 350 € com IVA incluído, após análise do trabalho.',
  },
];

export default function Mogadouro() {
  const cidadesProximas = getCidadesProximas('mogadouro');

  useEffect(() => {
    document.title = 'Eletricista em Mogadouro — instalações e diagnóstico | Norte Reparos';

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      'Eletricista em Mogadouro para instalações, reparações programadas e diagnóstico. Credenciação DGEG visível, preços claros e contacto 24/7.'
    );

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://eletricista-norte-reparos.pt/eletricista-mogadouro');

    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'schema-mogadouro';
    schemaScript.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'LocalBusiness',
          '@id': 'https://eletricista-norte-reparos.pt/eletricista-mogadouro#business',
          name: 'Norte Reparos — Eletricista em Mogadouro',
          url: 'https://eletricista-norte-reparos.pt/eletricista-mogadouro',
          telephone: PHONE,
          areaServed: { '@type': 'AdministrativeArea', name: 'Concelho de Mogadouro' },
        },
        {
          '@type': 'Service',
          '@id': 'https://eletricista-norte-reparos.pt/eletricista-mogadouro#service',
          name: 'Instalações, reparações e diagnóstico elétrico em Mogadouro',
          serviceType: 'Instalações, reparações e diagnóstico elétrico',
          areaServed: { '@type': 'AdministrativeArea', name: 'Concelho de Mogadouro' },
          availableChannel: {
            '@type': 'ServiceChannel',
            servicePhone: { '@type': 'ContactPoint', telephone: PHONE, contactType: 'customer service' },
          },
        },
        {
          '@type': 'FAQPage',
          mainEntity: faqs.filter((faq) => !faq.question.includes('Ficha Eletrotécnica')).map((faq) => ({
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

  const services = [
    { icon: Zap, title: 'Instalações e alterações', desc: 'Planeamento de circuitos, pontos de luz, tomadas e quadros, de acordo com o âmbito verificado.' },
    { icon: Shield, title: 'Reparação e diagnóstico', desc: 'Análise de falhas, proteções, tomadas, iluminação ou quadro antes de definir a reparação.' },
    { icon: CheckCircle, title: 'Quadros elétricos', desc: 'Verificação e modernização quando necessária, sem prometer certificação automática da instalação.' },
    { icon: Zap, title: 'Diagnóstico elétrico', desc: 'Leitura dos sintomas, fotografias e condições da instalação para preparar uma intervenção adequada.' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images-optimized/hero/hero-electrician-portugal.jpg')" }}>
          <div className="container text-center text-white">
            <Breadcrumbs items={[
              { label: 'Eletricista', href: '/' },
              { label: 'Trás-os-Montes', href: '/tras-os-montes' },
              { label: 'Mogadouro', href: '/eletricista-mogadouro' },
            ]} />
            <h1 className="text-4xl md:text-6xl font-black mb-6">Eletricista em Mogadouro</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Instalações, reparações programadas e diagnóstico elétrico com informação clara antes da visita.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+351932321892" className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg"><Phone className="w-6 h-6" />{PHONE}</a>
              <a href={`https://wa.me/${WHATSAPP}?text=Olá,%20preciso%20de%20informação%20sobre%20eletricidade%20em%20Mogadouro`} className="inline-flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg">WhatsApp</a>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white"><div className="container max-w-4xl"><h2 className="text-3xl font-black text-center mb-6">Como preparar o pedido</h2><p className="text-gray-700 text-lg">Indique o tipo de trabalho, fotografias do quadro ou do ponto afetado, potência ou equipamentos envolvidos e qualquer obra prevista. Se houver elementos suficientes, a nossa equipa pode dar uma estimativa indicativa à distância. Uma visita com deslocação não é um orçamento gratuito.</p></div></section>

        <section className="py-16 bg-gray-50"><div className="container"><h2 className="text-3xl font-black text-center mb-12">Serviços elétricos em Mogadouro</h2><div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">{services.map((service) => { const Icon = service.icon; return <article key={service.title} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow"><div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0"><Icon className="w-6 h-6 text-white" /></div><div><h3 className="text-lg font-bold mb-1">{service.title}</h3><p className="text-gray-600">{service.desc}</p></div></article>; })}</div></div></section>

        <section className="py-14 bg-orange-50"><div className="container max-w-4xl"><h2 className="text-3xl font-black text-center mb-6">Credenciação e diagnóstico</h2><p className="text-gray-700 mb-4"><strong>Eletricista credenciado pela DGEG — Técnico Responsável de Instalações Elétricas, TRIESP n.º 90062. Execução em Baixa Tensão até 41,4 kVA.</strong></p><p className="text-gray-700">Quando adequado ao diagnóstico, podem ser usados multímetro Fluke e câmara térmica. A verificação é feita caso a caso e não equivale a certificado ou conformidade automática de toda a instalação.</p></div></section>

        <section className="py-14 bg-white"><div className="container max-w-4xl"><h2 className="text-3xl font-black text-center mb-6">Preços e condições</h2><p className="text-gray-700 mb-3"><strong>Dias úteis, 09h–18h:</strong> 70 €/h de mão de obra + 30 € de deslocação, quando há deslocação. <strong>Fora deste horário, à noite, fins de semana e feriados:</strong> 100 €/h + 50 € de deslocação.</p><p className="text-gray-700 mb-3">Valores com IVA incluído. Toda a hora iniciada é devida e a deslocação é faturada se ocorrer. Materiais e trabalhos fora do âmbito confirmado são explicados antes de avançar.</p><p className="text-gray-700"><strong>Ficha Eletrotécnica e Termos de Responsabilidade:</strong> a partir de 350 € com IVA incluído, quando aplicável ao caso e após análise do trabalho.</p></div></section>

        <section className="py-16"><div className="container max-w-4xl"><h2 className="text-3xl font-black text-center mb-12">Perguntas frequentes — Mogadouro</h2><FAQSection faqs={faqs} /></div></section>

        <section className="py-16 bg-orange-500 text-white"><div className="container text-center"><h2 className="text-3xl font-black mb-4">Fale com a nossa equipa</h2><p className="text-xl mb-8 max-w-3xl mx-auto">A linha telefónica funciona 24 horas por dia, 7 dias por semana. Para trabalhos programados, envie a descrição e fotografias; se existir risco elétrico ou avaria ativa, diga-o logo na chamada. A janela de chegada, quando necessária, é confirmada por telefone.</p><a href="tel:+351932321892" className="inline-flex items-center gap-2 bg-white text-orange-500 px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all shadow-lg"><Phone className="w-6 h-6" />{PHONE}</a></div></section>

        <section className="py-10 bg-white"><div className="container max-w-4xl"><h2 className="text-2xl font-bold mb-3">Experiência e responsabilidade</h2><p className="text-gray-700">A nossa equipa conta com mais de 20 anos de experiência profissional. Quando relevante para o trabalho, dispomos de seguro de responsabilidade civil profissional até 50.000 €; os limites e condições aplicáveis dependem do caso.</p></div></section>
        <CidadesProximas currentCity="Mogadouro" cidades={cidadesProximas} serviceType="eletricista" />
        <RelatedCities currentCity="Mogadouro" currentCitySlug="eletricista-mogadouro" />
      </main>
      <Footer />
    </div>
  );
}
