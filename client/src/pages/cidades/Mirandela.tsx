// Page SEO Mirandela — GEO-PROTO enrichie (citabilité IA + anti-doorway)
// Sources owned : precos-zonas.json · Sites/_audit/zonas-distances-concelhos.json · PRICING.md · MARKETING.md · client/public/concelhos/mirandela.html
// Doctrine : AGENTS.md §11-13 (R11 zéro invention, R12 transparência preço, R145 zero délai chiffré, géo-neutre, pronom « nós »)
import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import CidadesProximas from "@/components/CidadesProximas";
import Footer from "@/components/Footer";
import RelatedCities from "@/components/RelatedCities";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";
import { useSite } from "@/contexts/SiteContext";
import { businessInfo } from "@/../../shared/napConfig";
import { getCidadesProximas } from "@/data/cidadesProximas";
import { useEffect } from "react";
import FAQSection from "@/components/FAQSection";

const ELECTRICISTA_PHONE_E164 = "+351932321892";
const ELECTRICISTA_PHONE_DISPLAY = "+351 932 321 892";

export default function Mirandela() {
  const { config } = useSite();
  const faqs = [
    {
      question: "Qual é o preço de deslocação e a tarifa horária em Mirandela?",
      answer:
        "A cidade de Mirandela está na Zona 2: 25 € de deslocação em horário normal, somados a 70 €/h de mão de obra. À noite, ao fim de semana ou em feriado, a majoração é de 50 %. Enviamos orçamento por escrito antes de qualquer intervenção, sem surpresas na fatura.",
    },
    {
      question: "Qual é a referência rodoviária TomTom para Mirandela?",
      answer:
        "A medição TomTom registada na nossa base interna indica 27,4 km e 23 minutos de percurso entre a sede operacional em Macedo de Cavaleiros e Mirandela. É uma referência rodoviária, não uma promessa de chegada; as condições reais de circulação variam.",
    },
    {
      question:
        "Que localidades do concelho de Mirandela estão registadas na cobertura?",
      answer:
        "A nossa base interna lista 37 localidades e freguesias principais do concelho, apresentadas nesta página. A zona e o preço de deslocação são confirmados para a localidade concreta, porque não são necessariamente iguais aos da cidade de Mirandela.",
    },
    {
      question: "Este site cobre urgências elétricas 24h/7d em Mirandela?",
      answer:
        "Não. A Norte Reparos apresenta aqui instalação, diagnóstico e renovação elétrica programada. Para uma urgência elétrica 24h/7d em Mirandela, consulte o site dedicado eletricista-urgente.pt.",
    },
  ];
  useEffect(() => {
    document.title =
      "Eletricista em Mirandela | Norte Reparos — Orçamento por Escrito";

    // Meta description (centrée installation/diagnostic + TomTom + zone + prix)
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      "content",
      "Eletricista em Mirandela (Zona 2, 25 € de deslocação, 70 €/h mão de obra). Distância TomTom 27,4 km / 23 min desde Macedo de Cavaleiros. Instalação, diagnóstico e renovação programada — orçamento por escrito antes da intervenção. Ligue +351 932 321 892."
    );

    // Meta keywords (recentrage installation/diagnostic, retrait vocabulaire 24h)
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.setAttribute("name", "keywords");
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute(
      "content",
      "eletricista mirandela, instalação elétrica mirandela, quadro elétrico mirandela, diagnóstico elétrico mirandela, eletricista trás-os-montes, eletricista bragança mirandela, eletricista zona 2 mirandela"
    );

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute(
      "href",
      "https://eletricista-norte-reparos.pt/eletricista-mirandela"
    );

    // Schema.org Service (intention planifiée — différenciation vs satellite urgência)
    const schemaScript = document.createElement("script");
    schemaScript.type = "application/ld+json";
    schemaScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Instalação, diagnóstico e renovação elétrica programada",
      name: "Eletricista em Mirandela — Norte Reparos",
      provider: {
        "@type": "LocalBusiness",
        name: "Norte Reparos",
        telephone: ELECTRICISTA_PHONE_E164,
        priceRange: "€€",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Trás-os-Montes",
          addressRegion: "Trás-os-Montes",
          addressCountry: "PT",
        },
      },
      areaServed: {
        "@type": "City",
        name: "Mirandela",
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: "Distrito de Bragança",
        },
      },
      offers: {
        "@type": "Offer",
        priceCurrency: "EUR",
        price: "25",
        eligibleQuantity: {
          "@type": "QuantitativeValue",
          value: 1,
          unitText: "deslocação Z2",
        },
        availability: "https://schema.org/InStock",
        validFrom: "2026-01-01",
        description:
          "Deslocação Zona 2 — 25 € em horário normal; 70 €/h mão de obra. Orçamento por escrito antes da intervenção.",
      },
      speakable: {
        "@type": "SpeakableSpecification",
        xpath: [
          "/html/head/title",
          "/html/body//h1",
          "//*[@data-speakable='answer-first']",
        ],
      },
    });
    document.head.appendChild(schemaScript);
    // FAQ Schema
    const faqSchema = document.createElement("script");
    faqSchema.type = "application/ld+json";
    faqSchema.setAttribute("data-faq-schema", "true");
    faqSchema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map(faq => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
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
  const cidadesProximas = getCidadesProximas("mirandela");
  return (
    <>
      <SEOHead />
      <StructuredData />

      <Header />

      <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Hero section específica de Mirandela */}
        <section className="bg-gradient-to-r from-amber-600 to-amber-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <Breadcrumbs
                items={[
                  { label: "Eletricista", href: "/" },
                  { label: "Trás-os-Montes", href: "/tras-os-montes" },
                  { label: "Mirandela", href: "/eletricista-mirandela" },
                ]}
              />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Eletricista em <span className="text-blue-900">Mirandela</span>{" "}
                | Norte Reparos
              </h1>

              {/* Bloc answer-first 40-60 mots (GEO, copiable, parle aux LLM) */}
              <p
                data-speakable="answer-first"
                className="text-xl mb-6 leading-relaxed bg-white/10 border border-white/20 rounded-lg p-4"
              >
                A Norte Reparos realiza instalação, diagnóstico e renovação
                elétrica programada em Mirandela, no distrito de Bragança.
                Mirandela está a 27,4 km (cerca de 23 minutos, TomTom) da nossa
                sede operacional em Macedo de Cavaleiros, na Zona 2, com 25 € de
                deslocação e 70 €/h de mão de obra.
              </p>

              <p className="text-lg mb-8">
                Especialistas em instalações elétricas residenciais, comerciais
                e industriais. Orçamento por escrito antes da intervenção.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${ELECTRICISTA_PHONE_E164}`}
                  className="bg-white text-amber-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
                >
                  📞 Eletricista Mirandela: {ELECTRICISTA_PHONE_DISPLAY}
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

        {/* Dados verificados (sources owned, R11 strict) */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Dados verificados sobre a nossa cobertura em Mirandela
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                <p className="text-sm text-gray-500 uppercase tracking-wide">
                  Distância TomTom
                </p>
                <p className="text-2xl font-bold text-amber-700 mt-1">
                  27,4 km
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  desde Macedo de Cavaleiros (sede operacional)
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                <p className="text-sm text-gray-500 uppercase tracking-wide">
                  Tempo de deslocação
                </p>
                <p className="text-2xl font-bold text-amber-700 mt-1">23 min</p>
                <p className="text-sm text-gray-600 mt-1">
                  medido TomTom (origem: Macedo de Cavaleiros)
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                <p className="text-sm text-gray-500 uppercase tracking-wide">
                  Zona de deslocação
                </p>
                <p className="text-2xl font-bold text-amber-700 mt-1">Z2</p>
                <p className="text-sm text-gray-600 mt-1">
                  25 € em horário normal (+50 % à noite, ao fim de semana e em
                  feriado)
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                <p className="text-sm text-gray-500 uppercase tracking-wide">
                  Mão de obra
                </p>
                <p className="text-2xl font-bold text-amber-700 mt-1">70 €/h</p>
                <p className="text-sm text-gray-600 mt-1">
                  horário normal — +50 % à noite, ao fim de semana e em feriado
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                <p className="text-sm text-gray-500 uppercase tracking-wide">
                  Distrito
                </p>
                <p className="text-2xl font-bold text-amber-700 mt-1">
                  Bragança
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Trás-os-Montes — sede operacional Macedo de Cavaleiros
                </p>
              </div>
              {/* Données de concelho réconciliées avec le hub owned */}
              <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                <p className="text-sm text-gray-500 uppercase tracking-wide">
                  Localidades principais
                </p>
                <p className="text-2xl font-bold text-amber-700 mt-1">
                  37 localidades
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  lista owned do concelho — zona confirmada por localidade
                </p>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-6">
              Fontes owned: <code>precos-zonas.json</code>,{" "}
              <code>Sites/_audit/zonas-distances-concelhos.json</code> (TomTom),{" "}
              <code>PRICING.md</code>,{" "}
              <code>client/public/concelhos/mirandela.html</code>.
            </p>
          </div>
        </section>

        {/* Localidades owned do hub Mirandela; tarifs revalidés au cas par cas */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Localidades principais registadas no concelho de Mirandela
            </h2>
            <p className="text-gray-700 mb-6 max-w-3xl">
              A nossa base interna lista 37 localidades e freguesias principais
              do concelho. Confirmamos por telefone a zona e o preço de
              deslocação aplicáveis ao endereço concreto; a Zona 2 de 25 € acima
              refere-se à cidade de Mirandela e não é generalizada a todo o
              concelho.
            </p>
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 text-gray-700">
              {[
                "Mirandela (São Pedro)",
                "Mirandela (Salvador)",
                "Abreiro",
                "Aguieiras",
                "Alvites",
                "Avantos",
                "Avidagos",
                "Barcel",
                "Belver",
                "Burose",
                "Cabanas",
                "Carvalhais",
                "Cedeifes",
                "Cobro",
                "Colmeais",
                "Duas Igrejas",
                "Ervedosa",
                "Frechas",
                "Fradizela",
                "Lamas de Orelhão",
                "Loureira",
                "Marmelos",
                "Múrias",
                "Navalho",
                "Paço",
                "Paradela",
                "Pereira",
                "Pinheiro",
                "Póvoa",
                "São Salvador",
                "Sucçães",
                "Torre de Dona Chama",
                "Trindade",
                "Vale de Gouvinhas",
                "Vale de Prados",
                "Vale Verde",
                "Vilar de Ledra",
              ].map(localidade => (
                <li
                  key={localidade}
                  className="flex items-center gap-2 bg-white border border-gray-200 rounded px-3 py-2 text-sm"
                >
                  <span className="text-amber-600">📍</span>
                  <span>{localidade}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Serviços — différenciation planifiée vs satellite urgência */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Instalação e diagnóstico elétrico programado
                </h2>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-amber-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                      <span className="text-amber-600">🔌</span>
                      Instalação elétrica residencial e comercial
                    </h3>
                    <p className="text-gray-600">
                      Realizamos instalações novas, renovações totais ou
                      parciais, ampliações de quadro e adaptação a novas cargas.
                      Cada projeto é precedido de visita técnica e orçamento
                      detalhado (material + mão de obra) por escrito.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-lg border border-amber-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                      <span className="text-amber-600">📋</span>
                      Diagnóstico e certificação
                    </h3>
                    <p className="text-gray-600">
                      Diagnóstico de anomalias, termografia, medição de
                      correntes de fuga, ensaio de quadro. Acompanhamento
                      técnico em processo de certificação (DGEG registo
                      1757/2026/DIEN em curso, co-signatura LDE Mirandela).
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-8 shadow-xl border border-amber-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Cobertura em{" "}
                    <span className="text-amber-600">Mirandela</span>
                  </h3>

                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">
                      💼 Modalidade de trabalho
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center justify-between">
                        <span>Visita técnica + orçamento por escrito</span>
                        <span className="font-bold text-amber-600">Sempre</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Confirmação da deslocação por telefone</span>
                        <span className="font-bold text-amber-600">Sempre</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Material discriminado no orçamento</span>
                        <span className="font-bold text-amber-600">
                          Detalhe
                        </span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Urgência 24h/7d</span>
                        <span className="font-bold text-gray-500">
                          → eletricista-urgente.pt
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ específica de Mirandela */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Perguntas sobre{" "}
              <span className="text-amber-600">Eletricista em Mirandela</span>
            </h2>

            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Quanto tempo demora a chegar a Mirandela a partir de Macedo de
                  Cavaleiros?
                </h3>
                <p className="text-gray-600">
                  A nossa sede operacional fica em Macedo de Cavaleiros. Pelo
                  TomTom, a distância até Mirandela é de 27,4 km, com um tempo
                  de percurso de referência de 23 minutos. O tempo efetivo
                  depende da hora e das condições de trânsito no momento da
                  intervenção.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Qual é o custo de deslocação e a tarifa horária em Mirandela?
                </h3>
                <p className="text-gray-600">
                  Mirandela está classificada na Zona 2: 25 € de deslocação em
                  horário normal. A mão de obra é de 70 €/h. Em período noturno,
                  fim de semana ou feriado, aplica-se uma majoração de 50 %
                  sobre a mão de obra e o deslocamento. O preço final é sempre
                  confirmado por orçamento escrito antes da intervenção.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Que localidades principais do concelho de Mirandela constam da
                  cobertura?
                </h3>
                <p className="text-gray-600">
                  A base owned do concelho lista 37 localidades e freguesias
                  principais, apresentadas acima. A zona e o preço de deslocação
                  são confirmados para cada endereço: os 25 € da Zona 2
                  referem-se à cidade de Mirandela e não são generalizados às
                  restantes localidades.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Para uma urgência elétrica em Mirandela, este site é o
                  contacto certo?
                </h3>
                <p className="text-gray-600">
                  Não. Este site cobre instalações programadas, diagnósticos e
                  renovações. Para urgências 24h/7d (curto-circuito, falta de
                  energia, perigo elétrico imediato), utilize o site dedicado
                  eletricista-urgente.pt.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-16 bg-gradient-to-r from-blue-900 to-amber-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Eletricista em <span className="text-amber-300">Mirandela</span> —
              Orçamento por Escrito
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              A nossa equipa trabalha com instalação, diagnóstico e renovação
              programada em todo o concelho de Mirandela. Cada projeto começa
              por um orçamento por escrito — sem surpresas na fatura.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <a
                href={`tel:${ELECTRICISTA_PHONE_E164}`}
                className="bg-white text-amber-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
              >
                📞 {ELECTRICISTA_PHONE_DISPLAY} (Mirandela)
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

            <p className="text-amber-200">
              🔌 <strong>Instalação programada</strong> • 📋{" "}
              <strong>Diagnóstico</strong> • 🛠️ <strong>Renovação</strong> • 📝{" "}
              <strong>Orçamento por escrito</strong>
            </p>

            {/* Cross-link subtil */}
            <div className="mt-12 p-4 bg-white/20 rounded-xl max-w-md mx-auto">
              <p className="text-lg">
                💧 <strong>Precisa de um canalizador em Mirandela?</strong>{" "}
                Recomendamos:{" "}
                <a
                  href="https://canalizador-norte-reparos.pt/canalizador-mirandela"
                  className="underline font-bold"
                >
                  canalizador-norte-reparos.pt
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Related Cities - Maillage interne SEO */}
        <section className="py-16">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-black text-center mb-12">
              Perguntas Frequentes - Mirandela
            </h2>
            <FAQSection faqs={faqs} />
          </div>
        </section>

        {/* Cidades Próximas - Internal Linking */}
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
