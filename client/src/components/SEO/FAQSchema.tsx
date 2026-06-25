// FAQSchema - Featured Snippets pour Google
// Affiche les FAQ directement dans les résultats (+10% visibilité)
interface FAQ {
 question: string;
 answer: string;
}
interface FAQSchemaProps {
 faqs: FAQ[];
}
export function FAQSchema({ faqs }: FAQSchemaProps) {
 const schema = {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": faqs.map(faq => ({
 "@type": "Question",
 "name": faq.question,
 "acceptedAnswer": {
 "@type": "Answer",
 "text": faq.answer
 }
 }))
 };
 return (
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
 />
 );
}
// FAQ Premium pour Eletricista
export const eletricistaFAQs: FAQ[] = [
 {
 question: "Quanto custa reparar um quadro elétrico em Bragança?",
 answer: "O preço médio para reparar um quadro elétrico em Bragança é de €100. Inclui deslocação, diagnóstico e reparação. certificação elétrica incluída. Garantia 12 meses."
 },
 {
 question: "Quanto tempo demora a chegar em caso de urgência elétrica?",
 answer: "Confirmamos a deslocação antes de intervir — Bragança (Z3, 35 €) e aldeias circundantes. Serviço 24h/7 dias incluindo feriados, orçamento por escrito."
 },
 {
question: "têm experiência ?",
 answer: "Sim, temos técnicos experientes com formação profissional. Todos os trabalhos incluem documentação técnica conforme legislação portuguesa."
 },
 {
 question: "Trabalham Atendimento 24h/7d?",
 answer: "Sim, trabalhamos 24h/7 dias por semana, incluindo fins de semana e feriados. Ligue 932 321 892 a qualquer hora."
 },
 {
 question: "Têm garantia nos serviços?",
 answer: "Sim, todos os nossos serviços têm garantia de 12 meses. Se o problema voltar, reparamos gratuitamente."
 },
 {
 question: "Quanto custa arranjar uma avaria elétrica?",
 answer: "Arranjo de avaria elétrica custa €80 em Bragança. Inclui deslocação, diagnóstico e reparação simples. Resolvemos 90% dos casos em menos de 1 hora."
 },
 {
 question: "Fazem certificação elétrica?",
 answer: "Sim, fazemos certificação elétrica para casas, apartamentos e estabelecimentos comerciais. Preço: €150. Entrega em 48h."
 },
 {
 question: "Aceitam pagamento com cartão?",
 answer: "Sim, aceitamos dinheiro, cartão multibanco, transferência bancária e MBWay. Pagamento após conclusão do serviço."
 },
 {
 question: "Fazem sem compromisso?",
 answer: "Sim, o orçamento é sempre gratuito e sem compromisso. Só paga se aprovar o serviço."
 },
 {
 question: "Cobram deslocação?",
 answer: "Não, a deslocação está incluída no preço do serviço dentro do raio de 50km de Bragança."
 },
 {
 question: "O que fazer em caso de curto-circuito?",
 answer: "1) Desligue o disjuntor geral 2) Não toque em fios expostos 3) Ligue-nos mediante confirmação: 932 321 892. A nossa equipa actua com rapidez para resolver a urgência."
 },
 {
 question: "Atendem em que cidades?",
 answer: "Atendemos em Bragança, Mirandela, Trás-os-Montes, Chaves, Vila Real, Vinhais, Miranda do Douro, Mogadouro e todas as aldeias num raio de 130km."
 },
 {
 question: "Fazem instalação de tomadas?",
 answer: "Sim, instalamos tomadas, interruptores e pontos de luz. Preço: €30-50 por ponto (inclui material básico e certificação)."
 },
 {
 question: "Resolvem disjuntores que disparam constantemente?",
 answer: "Sim, diagnosticamos e resolvemos problemas de disjuntores que disparam. Causas comuns: sobrecarga, curto-circuito ou disjuntor defeituoso."
 },
 {
 question: "Fazem reparações em domingo?",
 answer: "Sim, trabalhamos todos os dias incluindo domingos e feriados. O preço é o mesmo, sem acréscimos noturnos ou de fim de semana."
 },
 {
 question: "Quanto custa instalar um quadro elétrico novo?",
 answer: "Instalação de quadro elétrico novo custa entre €200-400 dependendo do número de circuitos. Inclui material, instalação e certificação elétrica."
 },
 {
 question: "Dão fatura?",
 answer: "Sim, emitimos fatura com ou sem IVA conforme necessário. Somos empresa registada e certificada ."
 },
 {
 question: "Fazem inspeção elétrica completa?",
 answer: "Sim, fazemos inspeção elétrica completa (termografia, teste de terra, medição de tensão) para detetar problemas ocultos e prevenir avarias."
 },
 {
 question: "Trabalham com seguradoras?",
 answer: "Sim, trabalhamos com as principais seguradoras. Fornecemos relatório técnico detalhado e fatura para reembolso."
 },
 {
 question: "Quanto tempo dura a certificação elétrica?",
 answer: "A certificação elétrica é vitalícia para a instalação. Recomendamos inspeção a cada 10 anos para garantir segurança."
 }
];
