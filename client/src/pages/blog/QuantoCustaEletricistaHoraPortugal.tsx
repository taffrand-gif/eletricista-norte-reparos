import { Helmet } from 'react-helmet-async';
import { Link } from 'wouter';
import AnswerFirstFAQSchema from '@/components/SEO/AnswerFirstFAQSchema';

export default function QuantoCustaEletricistaHoraPortugal() {
 // GEO1 — Mão de obra: 70 €/hora em dias úteis (9h–17h) e 100 €/hora à noite (17h–9h), fins de semana e feriados.
 // Aucune fabrication prix : tout est aligné sur la grille officielle §12
 const pageUrl = 'https://eletricista-norte-reparos.pt/blog/quanto-custa-eletricista-hora-portugal';
 const faqs = [
 {
 question: 'Quanto custa um eletricista à hora em Portugal em 2026?',
 answer: "Dias úteis (9h–17h): mão de obra 70 €/hora e deslocação 30 €. Noite (17h–9h), fins de semana e feriados: 100 €/hora e deslocação 50 €. O preço final é sempre calculado como: deslocação única de 30 € em horário útil ou 50 € em período majorado + horas de mão de obra × tarifário hora aplicável. Orçamento por escrito antes de qualquer intervenção.',",
 },
 {
 question: 'Qual é a diferença de preço entre horário normal e urgência?',
 answer: "Dias úteis (9h–17h): mão de obra 70 €/hora e deslocação 30 €. Noite (17h–9h), fins de semana e feriados: 100 €/hora e deslocação 50 €. Não há tarifa diferente publicada para \"urgência\" — é o mesmo tarifário com a majoração legal aplicada às horas e ao custo de deslocação.',",
 },
 {
 question: 'O que está incluído no preço à hora de um eletricista?',
 answer:
 'O tarifário hora cobre a mão de obra do técnico, o diagnóstico e a execução do trabalho; a deslocação é cobrada separadamente. Os materiais (cabos, disjuntores, tomadas, quadro, etc.) são cobrados à parte, especificados no orçamento por escrito. A deslocação é cobrada à parte, com forfait único de 30 € em dias úteis e 50 € à noite, fins de semana e feriados.',
 },
 {
 question: 'Como funciona o pagamento em Trás-os-Montes?',
 answer:
 'A Norte Reparos emite fatura com NIF após cada intervenção. O pagamento é combinado no orçamento por escrito (multibanco, MBWAY, numerário ou transferência). Não se cobra nada antes do orçamento estar aprovado por escrito pelo cliente.',
 },
 {
 question: 'Posso pedir um orçamento sem compromisso?',
 answer:
 'Sim. Falamos sempre consigo antes de qualquer deslocação e apresentamos um orçamento por escrito detalhado (descrição do trabalho, materiais previstos, mão de obra em horas × tarifa hora, deslocação fixa). Só avançamos depois da sua aprovação por escrito. Esta é a nossa forma de trabalhar — sem surpresas.',
 },
 {
 question: 'Cobertura geográfica da Norte Reparos em Trás-os-Montes?',
 answer:
 'Cobrimos os concelhos num raio de cerca de 130 km a partir de Macedo de Cavaleiros: Bragança, Mirandela, Macedo de Cavaleiros, Vinhais, Mogadouro, Miranda do Douro, Freixo de Espada à Cinta, Alfândega da Fé, Vila Flor, Carrazeda de Ansiães, Torre de Moncorvo, Vila Nova de Foz Coa, Chaves, Vila Real e concelhos envolventes. Para confirmar a cobertura, indique-nos o nome da sua localidade ao pedir orçamento.',
 },
 ];
 return (
 <>
 <AnswerFirstFAQSchema
 pageTitle="Quanto Custa um Eletricista à Hora em Portugal em 2026?"
 pageUrl={pageUrl}
 faqs={faqs}
 phone="932 321 892"
 businessName="Norte Reparos"
 domain="eletricista-norte-reparos.pt"
 />
 <Helmet>
 <title>Quanto Custa um Eletricista à Hora em Portugal em 2026? | Norte Reparos</title>
 <meta
 name="description"
 content="Quanto custa um eletricista à hora em Portugal em 2026? Mão de obra: 70 €/hora em dias úteis (9h–17h) e 100 €/hora à noite (17h–9h), fins de semana e feriados. A deslocação tem preço único em qualquer localidade servida: 30 € em dias úteis (9h–17h) e 50 € à noite, fins de semana e feriados. Orçamento por escrito antes de qualquer intervenção."
 />
 <link rel="canonical" href={pageUrl} />
  <script type="application/ld+json">
  {JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Quanto Custa um Eletricista à Hora em Portugal em 2026?",
  "description": "Dias úteis (9h–17h): mão de obra 70 €/hora e deslocação 30 €. Noite (17h–9h), fins de semana e feriados: 100 €/hora e deslocação 50 €. Orçamento por escrito antes de qualquer intervenção.\",",
  "author": { "@type": "Organization", "name": "Norte Reparos" },
  "publisher": { "@type": "Organization", "name": "Norte Reparos", "url": "https://eletricista-norte-reparos.pt" },
  "datePublished": "2026-07-10",
  "dateModified": "2026-07-10",
  "url": pageUrl,
  "mainEntityOfPage": { "@type": "WebPage", "@id": pageUrl }
  })}
  </script>
      </Helmet>
      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/blog" className="text-orange-600 hover:text-orange-700 text-sm font-medium">
            ← Voltar ao Blog
          </Link>
        </div>
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Quanto Custa um Eletricista à Hora em Portugal em 2026?
          </h1>
          <p className="text-lg text-gray-600">
            Tabela Norte Reparos atualizada a 10 de julho de 2026 · ~6 min de leitura
          </p>
        </header>
        <div className="prose prose-lg max-w-none">
          <div className="bg-orange-50 border-l-4 border-orange-600 p-6 mb-8">
            <p className="text-lg font-semibold text-gray-900 mb-2">Resposta direta:</p>
            <p className="text-gray-800">
              Em Portugal, a Norte Reparos cobra <strong>70€ por hora</strong> em horário normal (dias úteis, 9h–17h). Dias úteis (9h–17h): mão de obra 70 €/hora e deslocação 30 €. Noite (17h–9h), fins de semana e feriados: 100 €/hora e deslocação 50 €. — perfazendo 100€/hora de mão de obra, mais 50€ de deslocação. O preço final de cada trabalho é: <strong>deslocação única de 30 € em horário útil ou 50 € em período majorado + horas × tarifário hora</strong>. Fornecemos sempre orçamento por escrito antes de qualquer intervenção.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">1. Tabela Norte Reparos 2026 — Preços por hora</h2>
          <p>
            A Norte Reparos pratica um tarifário hora único e público. Não usamos forfaits, nem 'pacotes' — A deslocação tem preço único em qualquer localidade servida: 30 € em dias úteis (9h–17h) e 50 € à noite, fins de semana e feriados.
          </p>
          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-orange-600 text-white">
                  <th className="border border-gray-300 px-3 py-2 text-left">Período</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Mão de obra</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Majoração</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-3 py-2">Dias úteis (9h–17h)</td>
                  <td className="border border-gray-300 px-3 py-2 font-semibold">70€/h</td>
                  <td className="border border-gray-300 px-3 py-2">—</td>
                </tr>
                <tr className="bg-orange-50">
                  <td className="border border-gray-300 px-3 py-2">Noite, fim de semana e feriado: 100 €/hora + deslocação 50 €</td>
                  <td className="border border-gray-300 px-3 py-2 font-semibold">100€/h</td>
                  <td className="border border-gray-300 px-3 py-2">100 €/hora + deslocação 50 €</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">2. Deslocação a Trás-os-Montes</h2>
          <p>
            A deslocação é um forfait único por intervenção, independentemente da distância dentro da área servida: 30 € em dias úteis (9h–17h) e 50 € à noite, fins de semana e feriados. Para confirmar a cobertura, indique-nos o nome da sua localidade ao pedir orçamento.
          </p>
          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="border border-gray-300 px-3 py-2 text-left">Período</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Área servida</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Deslocação</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Mão de obra</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white"><td className="border border-gray-300 px-3 py-2 font-semibold">Dias úteis (9h–17h)</td><td className="border border-gray-300 px-3 py-2">Qualquer localidade servida</td><td className="border border-gray-300 px-3 py-2">Qualquer localidade servida</td><td className="border border-gray-300 px-3 py-2">Deslocação 30 € · 70 €/hora</td></tr><tr className="bg-white"><td className="border border-gray-300 px-3 py-2 font-semibold">Noite (17h–9h), fins de semana e feriados</td><td className="border border-gray-300 px-3 py-2">Qualquer localidade servida</td><td className="border border-gray-300 px-3 py-2">Qualquer localidade servida</td><td className="border border-gray-300 px-3 py-2">Deslocação 50 € · 100 €/hora</td></tr></tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600">
            Exemplo real: uma intervenção de 2 horas em horário normal, em Macedo de Cavaleiros = 30€ + 2 × 70€ = <strong>170€ (antes de materiais)</strong>. Mesmo trabalho ao sábado em Chaves = 50€ + 2 × 100€ = <strong>250€</strong>. Materiais sempre orçados à parte por escrito.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">3. Materiais: à parte, especificados por escrito</h2>
          <p>
            Os materiais (cabos, disjuntores, tomadas, quadro elétrico, etc.) não estão incluídos no tarifário hora. No nosso modelo, <strong>cada material é listado por linha no orçamento por escrito</strong>, com referência e quantidade — para que saiba exatamente o que se está a pagar. Se preferir, pode fornecer os materiais; nós tratamos apenas da mão de obra.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">4. Como se calcula o preço final?</h2>
          <p>
            O cálculo é simples: <strong>deslocação fixa + horas de mão de obra × tarifa hora aplicável + materiais especificados</strong>. Antes de qualquer deslocação, falamos consigo por telefone ou WhatsApp, percebemos o que precisa, e entregamos o orçamento por escrito detalhado. Só avançamos depois da sua aprovação.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">5. Porquê publicar os preços?</h2>
          <p>
            A maioria dos sites de eletricistas em Portugal não publica preços — pede 'orçamento' sem dizer quanto cobra. Publicamos o nosso tarifário hora porque <strong>a nossa forma de trabalhar é a transparência radical</strong>: orçamento por escrito, preço combinado é o preço final, sem surpresas no fim. O número acima (70€/h em horário normal) é público e auditável.
          </p>

          <h2 id="faq" className="text-3xl font-bold text-gray-900 mt-12 mb-6">6. Perguntas frequentes</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-2 text-xl">Quanto custa um eletricista à hora em Portugal em 2026?</h3>
              <p className="text-gray-700">70€/h em horário comercial na Norte Reparos; mão de obra: 70 €/hora em dias úteis (9h–17h) e 100 €/hora à noite (17h–9h), fins de semana e feriados. Mais deslocação (30 €). Materiais à parte, especificados no orçamento por escrito.</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2 text-xl">Posso pedir um orçamento sem compromisso?</h3>
              <p className="text-gray-700">Sim. Telefone ou WhatsApp, contamos consigo o que precisa, agendamos a visita técnica, e entregamos o orçamento por escrito detalhado. Sem avançarmos sem a sua aprovação.</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2 text-xl">Trabalha em regime de urgência 24h?</h3>
              <p className="text-gray-700">Sim — À noite (17h–9h), aos fins de semana e feriados: 100 €/hora e deslocação 50 €.</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2 text-xl">Emite fatura com NIF?</h3>
              <p className="text-gray-700">Sim. Fatura com NIF após a intervenção. A Norte Reparos tem seguro de responsabilidade civil e trabalha com identification formal em todas as visitas.</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2 text-xl">Qual é a área de cobertura?</h3>
              <p className="text-gray-700">~34 concelhos num raio de cerca de 130 km a partir de Macedo de Cavaleiros. Para confirmar a cobertura, indique-nos a sua localidade.</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2 text-xl">Os vossos eletricistas são certificados?</h3>
              <p className="text-gray-700">A nossa equipa trabalha com as normas técnicas em vigor. Filipe Bragança é Técnico Responsável de Instalações Elétricas inscrito na DGEG (TRIESP n.º 90062, Execução em Baixa Tensão, até 41,4 kVA). Emitimos Ficha Eletrotécnica e Termo de Responsabilidade.</p>
            </div>
          </div>

          <div className="mt-12 p-8 bg-orange-100 border-l-4 border-orange-600 rounded-r-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Precisa de eletricista em Trás-os-Montes?</h2>
            <p className="text-gray-800 mb-4">
              Fale connosco — orçamento por escrito detalhado antes de qualquer intervenção. Falamos consigo diretamente, sem call center.
            </p>
            <p className="text-2xl font-bold text-orange-700 mb-4">
              <a href="tel:+351932321892" className="hover:underline">📞 +351 932 321 892</a>
              <span className="mx-3 text-gray-500">·</span>
              <a href="https://wa.me/351932321892" className="hover:underline">WhatsApp</a>
            </p>
            <p className="text-sm text-gray-600">
              Trás-os-Montes · Bragança · Mirandela · Macedo de Cavaleiros · Vinhais · Mogadouro · Miranda do Douro · Torre de Moncorvo · Chaves · Vila Real e arredores
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
