import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';
import CidadesProximas from '@/components/CidadesProximas';
import Footer from '@/components/Footer';
import RelatedCities from '@/components/RelatedCities';
import FAQSection from '@/components/FAQSection';
import { businessInfo } from '@/../../shared/napConfig';
import { getCidadesProximas } from '@/data/cidadesProximas';
import { useEffect } from 'react';
import { Phone, Shield, Zap, CheckCircle } from 'lucide-react';

const faqs = [
  {
    question: 'Quanto custa um eletricista em Vinhais?',
    answer: 'Em dias úteis, das 09h às 18h, a mão de obra é 70 €/h e a deslocação é 30 € quando ocorre. Fora deste horário, à noite, aos fins de semana e feriados, são 100 €/h e 50 € de deslocação. Valores TTC, IVA incluído; cada hora começada é devida.',
  },
  {
    question: 'Qual é o estatuto DGEG da nossa equipa?',
    answer: 'Eletricista credenciado pela DGEG — Técnico Responsável de Instalações Elétricas, TRIESP n.º 90062. Execução em Baixa Tensão até 41,4 kVA.',
  },
  {
    question: 'A Ficha eletrotécnica e os Termos são sempre necessários?',
    answer: 'Não. A necessidade depende do caso e do âmbito aplicável. Ficha eletrotécnica e Termos de responsabilidade: a partir de 350 € TTC, sob orçamento conforme o caso.',
  },
  {
    question: 'Como preparar um pedido de diagnóstico elétrico?',
    answer: 'Indique o sintoma, o quadro ou circuito afetado e envie fotografias se for seguro fazê-lo. Com elementos suficientes, a nossa equipa pode dar uma estimativa à distância indicativa; o valor final depende do diagnóstico e da intervenção.',
  },
];

export default function Vinhais() {
  const cidadesProximas = getCidadesProximas('vinhais');

  useEffect(() => {
    document.title = 'Eletricista em Vinhais — instalações, quadros e diagnóstico | Norte Reparos';
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Eletricista em Vinhais para instalações, quadros e diagnóstico. Dias úteis 09h–18h: 70 €/h + deslocação 30 €; fora do horário, 100 €/h + deslocação 50 €. Valores TTC, IVA incluído.');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://eletricista-norte-reparos.pt/eletricista-vinhais');

    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'schema-vinhais';
    schemaScript.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Electrician',
      name: 'Norte Reparos — Eletricista Vinhais',
      url: 'https://eletricista-norte-reparos.pt/eletricista-vinhais',
      telephone: '+351 932 321 892',
      priceRange: '€€',
      areaServed: { '@type': 'AdministrativeArea', name: 'Concelho de Vinhais' },
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
        <section className="relative bg-cover bg-center py-20 text-white" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images-optimized/hero/hero-electrician-portugal.jpg')` }}>
          <div className="container text-center">
            <span className="mb-4 inline-block rounded-full bg-orange-500 px-4 py-1 text-sm font-bold text-white">VINHAIS</span>
            <Breadcrumbs items={[{ label: 'Eletricista', href: '/' }, { label: 'Trás-os-Montes', href: '/tras-os-montes' }, { label: 'Vinhais', href: '/eletricista-vinhais' }]} />
            <h1 className="mb-6 text-4xl font-black md:text-6xl">Eletricista em Vinhais</h1>
            <p className="mx-auto mb-8 max-w-3xl text-xl md:text-2xl">Instalações, quadros elétricos e diagnóstico com informação clara antes da intervenção.</p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a href={`tel:${businessInfo.phone}`} className="inline-flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-8 py-4 text-xl font-bold text-white shadow-lg transition-all hover:bg-orange-600"><Phone className="h-6 w-6" />932 321 892</a>
              <a href={`https://wa.me/${businessInfo.whatsapp}?text=Olá,%20preciso%20de%20um%20eletricista%20em%20Vinhais`} className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-700 px-8 py-4 text-xl font-bold text-white shadow-lg transition-all hover:bg-green-800">💬 WhatsApp</a>
            </div>
          </div>
        </section>

        <section className="bg-white py-12"><div className="container mx-auto max-w-4xl px-4"><h2 className="mb-5 text-3xl font-black text-gray-900">Pedido de trabalho planeado</h2><p className="text-gray-700">Para instalação, alteração de quadro, iluminação, tomadas ou diagnóstico elétrico em Vinhais, descreva o pedido e envie imagens se for seguro fazê-lo. O atendimento telefónico está disponível 24h/24, 7 dias por semana; a disponibilidade e a janela de chegada são confirmadas por telefone, sem prometer chegada imediata.</p></div></section>

        <section className="bg-gray-50 py-16"><div className="container"><h2 className="mb-12 text-center text-3xl font-black">Serviços elétricos que avaliamos</h2><div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {[{ icon: Zap, title: 'Instalações e remodelações elétricas', desc: 'Planeamento do âmbito, pontos elétricos e materiais antes de apresentar o orçamento por escrito.' }, { icon: Shield, title: 'Quadros e proteções', desc: 'Diagnóstico de circuitos, organização ou atualização do quadro segundo a situação verificada.' }, { icon: CheckCircle, title: 'Tomadas, interruptores e iluminação', desc: 'Avaliação de avarias, substituições e pontos de utilização para uma intervenção adequada.' }, { icon: Zap, title: 'Diagnóstico elétrico', desc: 'Câmara térmica e instrumentos Fluke podem apoiar o diagnóstico quando forem pertinentes ao caso.' }].map((service) => <div key={service.title} className="flex items-start gap-4 rounded-xl bg-white p-6 shadow"><div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-orange-500"><service.icon className="h-6 w-6 text-white" /></div><div><h3 className="mb-1 text-lg font-bold">{service.title}</h3><p className="text-gray-600">{service.desc}</p></div></div>)}
        </div></div></section>

        <section className="bg-white py-12"><div className="container mx-auto max-w-4xl px-4"><h2 className="mb-5 text-3xl font-black text-gray-900">Credenciação DGEG</h2><p className="text-gray-700"><strong>Eletricista credenciado pela DGEG — Técnico Responsável de Instalações Elétricas, TRIESP n.º 90062. Execução em Baixa Tensão até 41,4 kVA.</strong></p><p className="mt-3 text-gray-700">A credenciação não substitui o diagnóstico nem significa certificação automática de qualquer instalação. Quando aplicável, <strong>Ficha eletrotécnica e Termos de responsabilidade: a partir de 350 € TTC, sob orçamento conforme o caso.</strong></p></div></section>

        <section className="bg-orange-50 py-12"><div className="container mx-auto max-w-4xl px-4"><h2 className="mb-5 text-3xl font-black text-gray-900">Valores e condições</h2><div className="space-y-3 text-gray-700"><p><strong>Dias úteis, 09h–18h:</strong> 70 €/h + 30 € de deslocação, quando ocorre.</p><p><strong>Fora deste horário, à noite, fins de semana e feriados:</strong> 100 €/h + 50 € de deslocação, quando ocorre.</p><p>Valores TTC, IVA incluído. Cada hora começada é devida. Uma estimativa à distância pode ser indicativa se a descrição e as fotografias forem suficientes; o valor final depende do diagnóstico e da intervenção. Não há orçamento gratuito com deslocação e apresentamos orçamento por escrito antes de intervir.</p></div></div></section>

        <section className="py-12"><div className="container mx-auto max-w-4xl px-4"><h2 className="mb-5 text-3xl font-black text-gray-900">Informação útil para o diagnóstico</h2><ol className="list-decimal space-y-2 pl-6 text-gray-700"><li>Explique o sintoma e quando ocorre.</li><li>Indique o quadro, circuito ou divisão afetada, sem desmontar proteções.</li><li>Envie fotografias do quadro ou do ponto afetado apenas se for seguro.</li><li>Deixe um contacto para confirmarmos disponibilidade, deslocação e âmbito.</li></ol><p className="mt-5 text-gray-700"><strong>Mais de 20 anos de experiência profissional.</strong> <strong>Seguro de responsabilidade civil profissional até 50.000 €.</strong></p></div></section>

        <section className="bg-white py-16"><div className="container max-w-4xl"><h2 className="mb-12 text-center text-3xl font-black">Perguntas frequentes — Vinhais</h2><FAQSection faqs={faqs} /></div></section>
        <section className="bg-orange-500 py-16 text-white"><div className="container text-center"><h2 className="mb-4 text-3xl font-black">Precisa de eletricista em Vinhais?</h2><p className="mb-8 text-xl opacity-90">Envie a descrição e imagens úteis para prepararmos a avaliação do pedido.</p><a href={`tel:${businessInfo.phone}`} className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-xl font-bold text-orange-500 shadow-lg transition-all hover:bg-gray-100"><Phone className="h-6 w-6" />932 321 892</a></div></section>
        <CidadesProximas currentCity="Vinhais" cidades={cidadesProximas} serviceType="eletricista" />
        <RelatedCities currentCity="Vinhais" currentCitySlug="eletricista-vinhais" />
      </main>
      <Footer />
    </div>
  );
}
