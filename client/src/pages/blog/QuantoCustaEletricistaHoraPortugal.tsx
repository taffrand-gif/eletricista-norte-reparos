import { Helmet } from 'react-helmet-async';
import { Link } from 'wouter';
import AnswerFirstFAQSchema from '@/components/SEO/AnswerFirstFAQSchema';

export default function QuantoCustaEletricistaHoraPortugal() {
 // GEO1 — FAQ + grille verrouillée R12 (Z1-Z6 + 70€/h + +50% nuit/WE/feriado)
 // Aucune fabrication prix : tout est aligné sur la grille officielle §12
 const pageUrl = 'https://eletricista-norte-reparos.pt/blog/quanto-custa-eletricista-hora-portugal';
 const faqs = [
 {
 question: 'Quanto custa um eletricista à hora em Portugal em 2026?',
 answer:
 'Em Portugal, o tarifário Norte Reparos para eletricista é 70€/hora em horário comercial (segunda a sexta, 9h-18h), com majoração de +50% aplicada ao preço hora e à deslocação no período noturno (20h-8h), sábado, domingo e feriados nacionais. O preço final é sempre calculado como: deslocação segundo a zona (Z1 15€ até Z6 65€) + horas de mão de obra × tarifário hora aplicável. Orçamento por escrito antes de qualquer intervenção.',
 },
 {
 question: 'Qual é a diferença de preço entre horário normal e urgência?',
 answer:
 'Norte Reparos aplica majoração de +50% sobre o tarifário hora (70€/h → 105€/h) e sobre a deslocação da zona no período noturno (entre as 20h e as 8h), aos sábados, domingos e feriados nacionais. Não há tarifa diferente publicada para "urgência" — é o mesmo tarifário com a majoração legal aplicada às horas e ao custo de deslocação.',
 },
 {
 question: 'O que está incluído no preço à hora de um eletricista?',
 answer:
 'O tarifário hora cobre a mão de obra do técnico (deslocação dentro do horário combinado, diagnóstico, execução do trabalho). Os materiais (cabos, disjuntores, tomadas, quadro, etc.) são cobrados à parte, especificados no orçamento por escrito. A deslocação é cobrada à parte, segundo a zona oficial (Z1 15€, Z2 25€, Z3 35€, Z4 45€, Z5 55€, Z6 65€).',
 },
 {
 question: 'Como funciona o pagamento em Trás-os-Montes?',
 answer:
 'A Norte Reparos emite fatura com NIF após cada intervenção. O pagamento é combinado no orçamento por escrito (multibanco, MBWAY, numerário ou transferência). Não se cobra nada antes do orçamento estar aprovado por escrito pelo cliente.',
 },
 {
 question: 'Posso pedir um orçamento sem compromisso?',
 answer:
 'Sim. Falamos sempre consigo antes de qualquer deslocação e apresentamos um orçamento por escrito detalhado (descrição do trabalho, materiais previstos, mão de obra em horas × tarifa hora, deslocação pela zona). Só avançamos depois da sua aprovação por escrito. Esta é a nossa forma de trabalhar — sem surpresas.',
 },
 {
 question: 'Cobertura geográfica da Norte Reparos em Trás-os-Montes?',
 answer:
 'Cobrimos os concelhos num raio de cerca de 130 km a partir de Macedo de Cavaleiros: Bragança, Mirandela, Macedo de Cavaleiros, Vinhais, Mogadouro, Miranda do Douro, Freixo de Espada à Cinta, Alfândega da Fé, Vila Flor, Carrazeda de Ansiães, Torre de Moncorvo, Vila Nova de Foz Coa, Chaves, Vila Real e concelhos envolventes. Para saber a sua zona, indique-nos o nome da sua localidade ao pedir orçamento.',
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
 content="Quanto custa um eletricista à hora em Portugal em 2026? Tabela Norte Reparos: 70€/h em horário normal, +50% noite/sábado/domingo/feriado. Z1-Z6 deslocação. Orçamento por escrito antes de qualquer intervenção."
 />
 <link rel="canonical" href={pageUrl} />
  <script type="application/ld+json">
  {JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Quanto Custa um Eletricista à Hora em Portugal em 2026?",
  "description": "Tabela Norte Reparos 2026: 70€/h eletricista, majoração +50% noite/WE/feriado, deslocação Z1-Z6 de 15€ a 65€. Orçamento por escrito antes de qualquer intervenção.",
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
              Em Portugal, a Norte Reparos cobra <strong>70€ por hora</strong> em horário normal (segunda a sexta, 9h-18h). No período noturno, sábado, domingo ou feriado, aplica-se uma <strong>majoração de +50%</strong> sobre a hora e sobre a deslocação — perfazendo <strong>105€/h</strong>. O preço final de cada trabalho é: <strong>deslocação segundo a zona (Z1 15€ a Z6 65€) + horas × tarifário hora</strong>. Fornecemos sempre orçamento por escrito antes de qualquer intervenção.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">1. Tabela Norte Reparos 2026 — Preços por hora</h2>
          <p>
            A Norte Reparos pratica um tarifário hora único e público. Não usamos forfaits, nem 'pacotes' — o preço final é transparente e resulta apenas de duas variáveis: a deslocação até si (em função da zona) e o tempo de trabalho (em horas × tarifa aplicável).
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
                  <td className="border border-gray-300 px-3 py-2">Horário normal (2ª-6ª, 9h-18h)</td>
                  <td className="border border-gray-300 px-3 py-2 font-semibold">70€/h</td>
                  <td className="border border-gray-300 px-3 py-2">—</td>
                </tr>
                <tr className="bg-orange-50">
                  <td className="border border-gray-300 px-3 py-2">Noturno (18h-8h) / Sábado / Domingo / Feriado</td>
                  <td className="border border-gray-300 px-3 py-2 font-semibold">105€/h</td>
                  <td className="border border-gray-300 px-3 py-2">+50%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">2. Deslocação Z1 a Z6 — Trás-os-Montes</h2>
          <p>
            A deslocação é calculada com base na zona oficial publicada pela Norte Reparos, definida a partir das distâncias reais OSRM por estrada a Macedo de Cavaleiros (sede operacional). Para saber a sua zona, indique-nos o nome da sua localidade ao pedir orçamento.
          </p>
          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="border border-gray-300 px-3 py-2 text-left">Zona</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Concelhos incluídos</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Horário normal</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Período majorado</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-3 py-2 font-semibold">Z1</td>
                  <td className="border border-gray-300 px-3 py-2">Macedo de Cavaleiros, Alfândega da Fé (centro)</td>
                  <td className="border border-gray-300 px-3 py-2">15€</td>
                  <td className="border border-gray-300 px-3 py-2">22,50€</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-semibold">Z2</td>
                  <td className="border border-gray-300 px-3 py-2">Mirandela, Bragança (periferia sul), Vila Flor, Carrazeda de Ansiães</td>
                  <td className="border border-gray-300 px-3 py-2">25€</td>
                  <td className="border border-gray-300 px-3 py-2">37,50€</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-3 py-2 font-semibold">Z3</td>
                  <td className="border border-gray-300 px-3 py-2">Bragança, Mirandela (sul), Vinhais, Mogadouro, Torre de Moncorvo, Lamego (periferia)</td>
                  <td className="border border-gray-300 px-3 py-2">35€</td>
                  <td className="border border-gray-300 px-3 py-2">52,50€</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-semibold">Z4</td>
                  <td className="border border-gray-300 px-3 py-2">Miranda do Douro, Freixo de Espada à Cinta, Alfândega da Fé (raias), Vila Nova de Foz Coa</td>
                  <td className="border border-gray-300 px-3 py-2">45€</td>
                  <td className="border border-gray-300 px-3 py-2">67,50€</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-3 py-2 font-semibold">Z5</td>
                  <td className="border border-gray-300 px-3 py-2">Concelhos limite norte/leste do raio Norte Reparos</td>
                  <td className="border border-gray-300 px-3 py-2">55€</td>
                  <td className="border border-gray-300 px-3 py-2">82,50€</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-semibold">Z6</td>
                  <td className="border border-gray-300 px-3 py-2">Chaves, Vila Pouca de Aguiar, Boticas, Montalegre, Ribeira de Pena, Moimenta da Beira, Sernancelhe, Penedono (sob marcação)</td>
                  <td className="border border-gray-300 px-3 py-2">65€</td>
                  <td className="border border-gray-300 px-3 py-2">97,50€</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600">
            Exemplo real: uma intervenção de 2 horas em horário normal, em Macedo de Cavaleiros (Z1) = 15€ + 2 × 70€ = <strong>155€ (antes de materiais)</strong>. Mesmo trabalho ao sábado em Chaves (Z5) = 82,50€ + 2 × 105€ = <strong>292,50€</strong>. Materiais sempre orçados à parte por escrito.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">3. Materiais: à parte, especificados por escrito</h2>
          <p>
            Os materiais (cabos, disjuntores, tomadas, quadro elétrico, etc.) não estão incluídos no tarifário hora. No nosso modelo, <strong>cada material é listado por linha no orçamento por escrito</strong>, com referência e quantidade — para que saiba exatamente o que se está a pagar. Se preferir, pode fornecer os materiais; nós tratamos apenas da mão de obra.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">4. Como se calcula o preço final?</h2>
          <p>
            O cálculo é simples: <strong>deslocação pela zona (Z1-Z6) + horas de mão de obra × tarifa hora aplicável + materiais especificados</strong>. Antes de qualquer deslocação, falamos consigo por telefone ou WhatsApp, percebemos o que precisa, e entregamos o orçamento por escrito detalhado. Só avançamos depois da sua aprovação.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">5. Porquê publicar os preços?</h2>
          <p>
            A maioria dos sites de eletricistas em Portugal não publica preços — pede 'orçamento' sem dizer quanto cobra. Publicamos o nosso tarifário hora porque <strong>a nossa forma de trabalhar é a transparência radical</strong>: orçamento por escrito, preço combinado é o preço final, sem surpresas no fim. O número acima (70€/h em horário normal) é público e auditável.
          </p>

          <h2 id="faq" className="text-3xl font-bold text-gray-900 mt-12 mb-6">6. Perguntas frequentes</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-2 text-xl">Quanto custa um eletricista à hora em Portugal em 2026?</h3>
              <p className="text-gray-700">70€/h em horário comercial na Norte Reparos; 105€/h (+50%) em período noturno, sábado, domingo ou feriado. Mais deslocação Z1-Z6 (15€ a 65€). Materiais à parte, especificados no orçamento por escrito.</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2 text-xl">Posso pedir um orçamento sem compromisso?</h3>
              <p className="text-gray-700">Sim. Telefone ou WhatsApp, contamos consigo o que precisa, agendamos a visita técnica, e entregamos o orçamento por escrito detalhado. Sem avançarmos sem a sua aprovação.</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2 text-xl">Trabalha em regime de urgência 24h?</h3>
              <p className="text-gray-700">Sim — em Trás-os-Montes e com a majoração de +50% aplicada em horário noturno, fim de semana e feriados.</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2 text-xl">Emite fatura com NIF?</h3>
              <p className="text-gray-700">Sim. Fatura com NIF após a intervenção. A Norte Reparos tem seguro de responsabilidade civil e trabalha com identification formal em todas as visitas.</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2 text-xl">Qual a vossa zona de cobertura?</h3>
              <p className="text-gray-700">~34 concelhos num raio de cerca de 130 km a partir de Macedo de Cavaleiros. Para saber a sua zona, indique-nos a sua localidade.</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2 text-xl">Os vossos eletricistas são certificados?</h3>
              <p className="text-gray-700">A nossa equipa trabalha com as normas técnicas em vigor. A certificação DGEG da empresa encontra-se em curso (registo junto da Direção-Geral de Energia e Geologia); enquanto não estiver emitida, as instalações são asseguradas pelo técnico responsável (TRIESP 90062).</p>
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
