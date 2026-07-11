import { Helmet } from 'react-helmet-async';
import { Link } from 'wouter';
import AnswerFirstFAQSchema from '@/components/SEO/AnswerFirstFAQSchema';

export default function QuantoCustaEletricistaBraganca() {
 // GEO1 — alignement grille verrouillée R12 §12 (70€/h + Z1-Z6 + +50%)
 // Les fourchettes locales "25-35€/hora" / "45-65€/hora" etc. étaient
 // hors-grille (R11) ; remplacées par la formule officielle Norte Reparos.
 const pageUrl = 'https://eletricista-norte-reparos.pt/blog/quanto-custa-eletricista-braganca';
 const faqs = [
 {
 question: 'Quanto custa um eletricista em Bragança por hora?',
 answer:
 'A Norte Reparos pratica 70€/hora em horário comercial (segunda a sexta, 9h-18h) em Bragança e região. Em período noturno (20h-8h), sábado, domingo ou feriado, aplica-se majoração de +50% sobre o tarifário hora (perfazendo 105€/h) e sobre a deslocação. Não há "tarifa de urgência" paralela — é o mesmo tarifário com majoração legal.',
 },
 {
 question: 'Quanto custa deslocação para Bragança?',
 answer:
 'Bragança está na Zona 3 (44-65 km de Macedo de Cavaleiros). A deslocação Z3 custa 35€ em horário normal e 52,50€ em período majorado (noite/WE/feriado). O preço final combina deslocação + horas × 70€/h (ou 105€/h majorado) + materiais especificados por escrito.',
 },
 {
 question: 'Quanto custa instalar tomada em Bragança?',
 answer:
 'Instalação de tomada simples: mão de obra conforme tarifário hora (70€/h, ~1-2h típico) + materiais (tomada + cabo se necessário). Fornecemos orçamento por escrito detalhado após visita técnica, sem compromisso. Para um orçamento exato, indique-nos o ponto da casa e a tomada pretendida.',
 },
 {
 question: 'Qual o preço de instalação elétrica completa em Bragança?',
 answer:
 'O custo depende da área, do número de pontos (tomadas, iluminação, quadros) e do tipo de certificação exigida. Fornecemos sempre um orçamento por escrito detalhado após visita técnica à casa, qualquer que seja a dimensão do projeto. Trabalhamos com o mesmo tarifário hora de 70€/h.',
 },
 {
 question: 'Como poupar em serviços de eletricista em Bragança?',
 answer:
 'Agrupar vários trabalhos numa única visita (reduz a deslocação), comparar 2-3 orçamentos por escrito antes de avançar, preferir horário comercial (sem majoração +50%), e fazer manutenção preventiva anual. A nossa política é o preço combinado por escrito ser o preço final — sem surpresas.',
 },
 ];
 return (
 <>
 <AnswerFirstFAQSchema
 pageTitle="Quanto Custa Eletricista em Bragança? (Tarifário Norte Reparos 2026)"
 pageUrl={pageUrl}
 faqs={faqs}
 phone="932 321 892"
 businessName="Norte Reparos"
 domain="eletricista-norte-reparos.pt"
 />
 <Helmet>
 <title>Quanto Custa Eletricista em Bragança? (Tarifário Norte Reparos 2026) | Norte Reparos</title>
 <meta
 name="description"
 content="Quanto custa um eletricista em Bragança em 2026? Tarifário Norte Reparos: 70€/h horário normal, +50% noite/WE/feriado, deslocação Z3 35€ para Bragança. Orçamento por escrito."
 />
 <link rel="canonical" href={pageUrl} />
 <script type="application/ld+json">
 {JSON.stringify({
 "@context": "https://schema.org",
 "@type": "Article",
 "headline": "Quanto Custa Eletricista em Bragança? (Tarifário Norte Reparos 2026)",
 "description": "Tabela oficial Norte Reparos para Bragança: 70€/h horário normal, majoração +50% em período majorado, deslocação Z3 35€ (52,50€ majorado). Orçamento por escrito antes de qualquer intervenção.",
 "author": { "@type": "Organization", "name": "Norte Reparos" },
 "publisher": { "@type": "Organization", "name": "Norte Reparos", "url": "https://eletricista-norte-reparos.pt" },
 "datePublished": "2026-03-03",
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
 Quanto Custa Eletricista em Bragança? Tarifário 2026
 </h1>
 <div className="flex items-center text-gray-600 text-sm">
 <time dateTime="2026-03-03">3 de Março, 2026 · atualizado 10 de julho de 2026</time>
 <span className="mx-2">•</span>
 <span>Leitura rápida</span>
 </div>
 </header>
 <div className="prose prose-lg max-w-none">
 <div className="bg-orange-50 border-l-4 border-orange-600 p-6 mb-8">
 <p className="text-lg font-semibold text-gray-900 mb-2">
 Resposta direta:
 </p>
 <p className="text-gray-800">
 A Norte Reparos pratica em Bragança <strong>70€/hora</strong> em horário comercial (segunda a sexta, 9h-18h). No período noturno, sábado, domingo ou feriado, aplica-se uma <strong>majoração de +50%</strong> sobre o tarifário hora (perfazendo 105€/h) e sobre a deslocação. Para Bragança (Z3), a deslocação é <strong>35€</strong> em horário normal, <strong>52,50€</strong> em período majorado. O preço final combina deslocação + horas × tarifário hora + materiais orçados por escrito.
 </p>
 </div>
 <p className="lead text-xl text-gray-700 mb-8">
 Precisa de eletricista em Bragança e quer saber quanto vai custar? Este guia apresenta o tarifário público oficial da Norte Reparos e a fórmula de cálculo — sem surpresas no fim.
 </p>
 <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
 Tarifário Norte Reparos — fórmula de cálculo
 </h2>
 <p>
 O preço final combina três variáveis publicadas: a deslocação até si (em função da zona), o tempo de trabalho (em horas × tarifário hora), e os materiais especificados por escrito. Não usamos forfaits, nem "pacotes" — o preço final é transparente e resulta apenas destas variáveis.
 </p>
 <div className="bg-gray-50 rounded-lg p-6 my-8">
 <h3 className="text-2xl font-bold text-gray-900 mb-4">
 Tabela oficial Norte Reparos — Bragança (Z3)
 </h3>
 <div className="overflow-x-auto">
 <table className="min-w-full divide-y divide-gray-200">
 <thead className="bg-gray-100">
 <tr>
 <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
 Variável
 </th>
 <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
 Horário normal
 </th>
 <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
 Período majorado
 </th>
 </tr>
 </thead>
 <tbody className="bg-white divide-y divide-gray-200">
 <tr>
 <td className="px-6 py-4 text-sm text-gray-900">Mão de obra</td>
 <td className="px-6 py-4 text-sm text-gray-900">70€/h</td>
 <td className="px-6 py-4 text-sm text-gray-900">105€/h (70€ + 50%)</td>
 </tr>
 <tr>
 <td className="px-6 py-4 text-sm text-gray-900">Deslocação Z3 (Bragança)</td>
 <td className="px-6 py-4 text-sm text-gray-900">35€</td>
 <td className="px-6 py-4 text-sm text-gray-900">52,50€ (35€ + 50%)</td>
 </tr>
 <tr>
 <td className="px-6 py-4 text-sm text-gray-900">Materiais</td>
 <td className="px-6 py-4 text-sm text-gray-900">Orçados à parte por escrito</td>
 <td className="px-6 py-4 text-sm text-gray-900">Orçados à parte por escrito</td>
 </tr>
 </tbody>
 </table>
 </div>
 <p className="text-sm text-gray-600 mt-4">
 * Bragança está na Zona 3 (44-65 km de Macedo de Cavaleiros). Para saber a sua zona, indique-nos a sua localidade ao pedir orçamento.
 </p>
 </div>
 <p>
 <strong>Importante:</strong> Não cobramos "chamada mínima" nem valor de entrada — apenas o trabalho efetivamente realizado + deslocação segundo a zona. O preço combinado por escrito é o preço final.
 </p>
 <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
 <h3 className="text-xl font-bold text-gray-900 mb-3">
 Precisa de eletricista em Bragança?
 </h3>
 <p className="text-gray-800 mb-4">
 Sem surpresas na fatura. Orçamento por escrito antes de qualquer deslocação. Atendimento em Bragança, Mirandela, Chaves, Vila Real e concelhos envolventes (raio ~130 km de Macedo de Cavaleiros).
 </p>
 <div className="flex flex-col sm:flex-row gap-3">
 <a
 href="tel:+351932321892"
 className="inline-flex items-center justify-center px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition"
 >
 Ligar: +351 932 321 892
 </a>
 <a
 href="https://wa.me/351932321892?text=Olá,%20preciso%20de%20orçamento%20para%20serviço%20de%20eletricista%20em%20Bragança."
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
 >
 WhatsApp
 </a>
 </div>
 </div>
 <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
 Serviços mais comuns e como se orçamentam
 </h2>
 <p>
 Todos os serviços abaixo seguem a mesma fórmula: deslocação Z3 (35€) + horas × 70€/h + materiais por linha no orçamento escrito. Não publicamos preços forfait porque o custo varia muito com o estado real da instalação (casas antigas em granito, distâncias internas, complexidade da cablagem).
 </p>
 <div className="bg-gray-50 rounded-lg p-6 my-8">
 <h3 className="text-2xl font-bold text-gray-900 mb-4">
 Serviços elétricos em Bragança — fórmula (sem forfait)
 </h3>
 <div className="overflow-x-auto">
 <table className="min-w-full divide-y divide-gray-200">
 <thead className="bg-gray-100">
 <tr>
 <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
 Serviço
 </th>
 <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
 Como se calcula
 </th>
 </tr>
 </thead>
 <tbody className="bg-white divide-y divide-gray-200">
 <tr>
 <td className="px-6 py-4 text-sm text-gray-900">Instalar tomada simples</td>
 <td className="px-6 py-4 text-sm text-gray-900">35€ (Z3) + ~1h × 70€/h + tomada (se fornecida)</td>
 </tr>
 <tr>
 <td className="px-6 py-4 text-sm text-gray-900">Instalar tomada com terra (Schuko)</td>
 <td className="px-6 py-4 text-sm text-gray-900">35€ (Z3) + ~1-2h × 70€/h + tomada Schuko</td>
 </tr>
 <tr>
 <td className="px-6 py-4 text-sm text-gray-900">Instalar tomada USB dupla</td>
 <td className="px-6 py-4 text-sm text-gray-900">35€ (Z3) + ~1-2h × 70€/h + tomada USB</td>
 </tr>
 <tr>
 <td className="px-6 py-4 text-sm text-gray-900">Instalar interruptor simples</td>
 <td className="px-6 py-4 text-sm text-gray-900">35€ (Z3) + ~1h × 70€/h + interruptor</td>
 </tr>
 <tr>
 <td className="px-6 py-4 text-sm text-gray-900">Instalar interruptor duplo/triplo</td>
 <td className="px-6 py-4 text-sm text-gray-900">35€ (Z3) + ~1-2h × 70€/h + interruptor</td>
 </tr>
 <tr>
 <td className="px-6 py-4 text-sm text-gray-900">Instalar candeeiro teto</td>
 <td className="px-6 py-4 text-sm text-gray-900">35€ (Z3) + ~1-2h × 70€/h + candeeiro (se fornecido)</td>
 </tr>
 <tr>
 <td className="px-6 py-4 text-sm text-gray-900">Instalar foco LED embutido</td>
 <td className="px-6 py-4 text-sm text-gray-900">35€ (Z3) + ~1h × 70€/h + foco LED (por unidade)</td>
 </tr>
 <tr>
 <td className="px-6 py-4 text-sm text-gray-900">Substituir disjuntor</td>
 <td className="px-6 py-4 text-sm text-gray-900">35€ (Z3) + ~1h × 70€/h + disjuntor</td>
 </tr>
 <tr>
 <td className="px-6 py-4 text-sm text-gray-900">Substituir diferencial</td>
 <td className="px-6 py-4 text-sm text-gray-900">35€ (Z3) + ~1h × 70€/h + diferencial 30mA</td>
 </tr>
 <tr>
 <td className="px-6 py-4 text-sm text-gray-900">Substituir quadro elétrico completo</td>
 <td className="px-6 py-4 text-sm text-gray-900">35€ (Z3) + horas × 70€/h + quadro + disjuntores + diferencial (orçados)</td>
 </tr>
 <tr>
 <td className="px-6 py-4 text-sm text-gray-900">Diagnóstico de avaria</td>
 <td className="px-6 py-4 text-sm text-gray-900">35€ (Z3) + ~1h × 70€/h</td>
 </tr>
 <tr>
 <td className="px-6 py-4 text-sm text-gray-900">Arranjo curto-circuito</td>
 <td className="px-6 py-4 text-sm text-gray-900">35€ (Z3) + horas × 70€/h + materiais (cabo, tomada, etc.)</td>
 </tr>
 <tr>
 <td className="px-6 py-4 text-sm text-gray-900">Certificação elétrica</td>
 <td className="px-6 py-4 text-sm text-gray-900">35€ (Z3) + horas × 70€/h + emissão do boletim (incluído)</td>
 </tr>
 </tbody>
 </table>
 </div>
 <p className="text-sm text-gray-600 mt-4">
 * Fórmula Norte Reparos: deslocação segundo a zona + horas × tarifário hora (70€/h, ou 105€/h em período majorado) + materiais orçados à parte por escrito. Não publicamos preços forfait porque o custo real varia com o estado da instalação. Para Bragança (Z3) a deslocação é 35€ em horário normal e 52,50€ em período majorado.
 </p>
 </div>
 <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
  Instalação elétrica completa: como se orçamenta
 </h2>
 <p>
  Para instalação elétrica completa (obra nova ou reabilitação total), o custo depende da área, do número de pontos (tomadas, iluminação, quadros) e do tipo de certificação exigida. Fornecemos sempre um orçamento por escrito detalhado após visita técnica à casa, qualquer que seja a dimensão do projeto. Trabalhamos com o mesmo tarifário hora de 70€/h.
 </p>
 <p>
  <strong>Como poupar:</strong> agrupar a instalação com outras obras (reduz a deslocação única), preparar a casa (abrir roços, pintar) para o eletricista só montar, e preferir materiais standard (Legrand, Schneider, Hager) já especificados em orçamento.
 </p>
 <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
 Fatores Que Influenciam o Preço
 </h2>
 <p>
 Vários fatores afetam o custo final do serviço:
 </p>
 <ul>
 <li><strong>Urgência:</strong> Trabalhos urgentes têm acréscimo de preço</li>
 <li><strong>Complexidade:</strong> Diagnósticos difíceis demoram mais tempo</li>
 <li><strong>Acessibilidade:</strong> Trabalhos em altura ou locais difíceis custam mais</li>
 <li><strong>Materiais:</strong> Componentes premium (Legrand, Schneider) vs económicos</li>
 <li><strong>Localização:</strong> Zonas rurais podem ter acréscimo de deslocação</li>
 <li><strong>Certificação:</strong> Trabalhos que exigem têm custo adicional</li>
 <li><strong>Estado da instalação:</strong> Instalações antigas podem precisar mais correções</li>
 </ul>
 <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
 Como Poupar em Serviços de Eletricista
 </h2>
 <p>
 Dicas práticas para reduzir custos sem comprometer qualidade:
 </p>
 <ol>
 <li><strong>Agrupe trabalhos:</strong> Faça várias tarefas numa única visita para amortizar chamada mínima</li>
 <li><strong>Evite urgências:</strong> Planeie trabalhos com antecedência para poupar</li>
 <li><strong>Compare orçamentos:</strong> Peça 2-3 orçamentos detalhados por escrito</li>
 <li><strong>Forneça materiais:</strong> Compre você mesmo para reduzir o custo da mão de obra</li>
 <li><strong>Manutenção preventiva:</strong> Inspeção anual evita avarias caras</li>
 <li><strong>Época baixa:</strong> Verão tem menos procura, preços mais flexíveis</li>
 <li><strong>Negociação:</strong> Para trabalhos grandes, há margem de negociação</li>
 </ol>
 <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-8">
 <h3 className="text-xl font-bold text-gray-900 mb-3">
 ⚠️ Cuidado com Preços Muito Baixos
 </h3>
 <p className="text-gray-800">
 Eletricistas muito baratos podem não ser certificados, usar materiais de má qualidade, ou não emitir válido. Problemas elétricos mal resolvidos custam muito mais a longo prazo e põem em risco a sua segurança.
 </p>
 <p className="text-gray-800 mt-2">
 <strong>Exija sempre:</strong> Orçamento por escrito, garantia mínima 2 anos, fatura com IVA.
 </p>
 </div>
 <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
 Perguntas Frequentes (FAQ)
 </h2>
 <div className="space-y-6">
 <div className="border-l-4 border-orange-600 pl-4">
 <h3 className="text-xl font-semibold text-gray-900 mb-2">
 Quanto custa um eletricista em Bragança por hora?
 </h3>
 <p className="text-gray-700">
 A Norte Reparos pratica 70€/hora em horário comercial (segunda a sexta, 9h-18h) em Bragança e região. Em período noturno (20h-8h), sábado, domingo ou feriado, aplica-se majoração de +50% sobre o tarifário hora (perfazendo 105€/h) e sobre a deslocação. Não há "tarifa de urgência" paralela — é o mesmo tarifário com majoração legal aplicada.
 </p>
 </div>
 <div className="border-l-4 border-orange-600 pl-4">
 <h3 className="text-xl font-semibold text-gray-900 mb-2">
 Quanto custa a deslocação para Bragança?
 </h3>
 <p className="text-gray-700">
 Bragança está na Zona 3 (44-65 km de Macedo de Cavaleiros). A deslocação Z3 custa 35€ em horário normal e 52,50€ em período majorado (noite, sábado, domingo ou feriado). O preço final combina a deslocação + horas × tarifário hora (70€/h ou 105€/h majorado) + materiais especificados por escrito.
 </p>
 </div>
 <div className="border-l-4 border-orange-600 pl-4">
 <h3 className="text-xl font-semibold text-gray-900 mb-2">
 Quanto custa instalar tomada em Bragança?
 </h3>
 <p className="text-gray-700">
 Instalação de tomada simples: mão de obra conforme tarifário hora (70€/h, ~1-2h típico) + materiais (tomada + cabo, se necessário). Fornecemos orçamento por escrito detalhado após visita técnica, sem compromisso. Para um orçamento exato, indique-nos o ponto da casa e a tomada pretendida.
 </p>
 </div>
 <div className="border-l-4 border-orange-600 pl-4">
 <h3 className="text-xl font-semibold text-gray-900 mb-2">
 Qual o preço de instalação elétrica completa em Bragança?
 </h3>
 <p className="text-gray-700">
 O custo depende da área, do número de pontos (tomadas, iluminação, quadros) e do tipo de certificação exigida. Fornecemos sempre um orçamento por escrito detalhado após visita técnica à casa, qualquer que seja a dimensão do projeto. Trabalhamos com o mesmo tarifário hora de 70€/h.
 </p>
 </div>
 <div className="border-l-4 border-orange-600 pl-4">
 <h3 className="text-xl font-semibold text-gray-900 mb-2">
 Como poupar em serviços de eletricista em Bragança?
 </h3>
 <p className="text-gray-700">
 Agrupar vários trabalhos numa única visita (reduz a deslocação), comparar 2-3 orçamentos por escrito antes de avançar, preferir horário comercial (sem majoração +50%), e fazer manutenção preventiva anual. A nossa política é o preço combinado por escrito ser o preço final — sem surpresas.
 </p>
 </div>
 </div>
 <div className="bg-orange-50 border-2 border-orange-600 rounded-lg p-8 my-12">
 <h3 className="text-2xl font-bold text-gray-900 mb-4">
 Orçamento Gratuito e Transparente
 </h3>
 <p className="text-gray-800 mb-6">
 Eletricistas com experiência em Bragança e Trás-os-Montes. Preços justos, sem surpresas. Orçamento detalhado antes de começar. Garantia do serviço.
 </p>
 <ul className="space-y-2 mb-6 text-gray-800">
 <li className="flex items-start">
 <span className="text-orange-600 mr-2">✓</span>
 <span>Sem compromisso em 24h</span>
 </li>
 <li className="flex items-start">
 <span className="text-orange-600 mr-2">✓</span>
 <span>Preços transparentes por escrito</span>
 </li>
 <li className="flex items-start">
 <span className="text-orange-600 mr-2">✓</span>
 <span>Pagamento após conclusão</span>
 </li>
 </ul>
 <div className="flex flex-col sm:flex-row gap-4">
 <a
 href="tel:+351932321892"
 className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 text-white text-lg font-bold rounded-lg hover:bg-orange-700 transition shadow-lg"
 >
 Ligar Agora: +351 932 321 892
 </a>
 <a
 href="https://wa.me/351932321892?text=Olá,%20preciso%20de%20orçamento%20para%20serviço%20de%20eletricista."
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white text-lg font-bold rounded-lg hover:bg-green-700 transition shadow-lg"
 >
 WhatsApp
 </a>
 </div>
 </div>
 <div className="mt-12 pt-8 border-t border-gray-200">
 <h3 className="text-xl font-semibold text-gray-900 mb-4">
 Artigos Relacionados:
 </h3>
 <ul className="space-y-2">
 <li>
 <Link href="/blog/certificacao-guia-completo" className="text-orange-600 hover:text-orange-700">
 → certificação elétrica: Guia Completo 2026
 </Link>
 </li>
 <li>
 <Link href="/blog/quadro-eletrico-dispara-causas" className="text-orange-600 hover:text-orange-700">
 → Quadro Elétrico Dispara: 8 Causas Comuns
 </Link>
 </li>
 <li>
 <Link href="/servicos/instalacao-eletrica" className="text-orange-600 hover:text-orange-700">
 → Instalação Elétrica Completa em Bragança
 </Link>
 </li>
 <li>
 <Link href="/servicos/arranjacao-eletrica" className="text-orange-600 hover:text-orange-700">
 → Arranjo Elétrica Urgente 24h
 </Link>
 </li>
 </ul>
 </div>
 </div>
 </article>
 </>
 );
}
