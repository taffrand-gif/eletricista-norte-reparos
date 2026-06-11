import React from 'react';
// Design: Professional Service Layout
// FAQ section with accordion for questions/answers
// - Bold headings with thick borders
// - Accordion with clear expand/collapse
// - SEO-optimized Q&A content
import { useSite } from '@/contexts/SiteContext';
import { useEffect, useMemo } from 'react';
import {
 Accordion,
 AccordionContent,
 AccordionItem,
 AccordionTrigger} from '@/components/ui/accordion';
function FAQ() {
 const { config } = useSite();
 const faqs = useMemo(() => [
 {
 question: 'Quanto custa um eletricista urgente em Bragança?',
 answer: 'O custo de um eletricista urgente em Bragança varia entre €80-200 dependendo do serviço. Arranjo de avarias elétricas custa €100-180, quadros elétricos €150-300, certificação elétrica €150. Deslocação urgente: €15. Orçamento grátis pelo 932 321 892.'},
 {
 question: 'Quanto tempo demora a chegar um eletricista urgente?',
 answer: 'A nossa equipa actua rapidamente para urgência elétrica em Bragança e região. Serviço disponível Atendimento 24h/7d, 7 dias por semana, incluindo fins de semana e feriados.'},
 {
 question: 'O que fazer em caso de curto-circuito perigoso?',
 answer: 'Em caso de curto-circuito: 1) Desligue o disjuntor geral imediatamente, 2) Não toque em fios expostos ou tomadas, 3) Afaste-se de cheiro a queimado, 4) Ligue imediatamente para 932 321 892. A nossa equipa actua com rapidez. Nunca tente arranjar sozinho - risco de eletrocussão.'},
 {
 question: 'Eletricista precisa de Trabalho garantido por escrito?',
 answer: 'Sim, para instalações elétricas em Portugal é obrigatório Trabalho garantido por escrito (Certificação de Instalações Elétricas). Todos os nossos eletricistas são certificados . Emitimos certificação após cada intervenção conforme legislação. Garantia 12 meses em instalações.'},
 {
 question: 'Eletricista trabalha aos fins de semana e feriados?',
 answer: 'Sim, o serviço de eletricista urgente está disponível Atendimento 24h/7d, 7 dias por semana, incluindo sábados, domingos e feriados. Não há majoração de preço aos fins de semana. Ligue 932 321 892 a qualquer hora.'},
 {
 question: 'Quanto custa instalar um quadro elétrico?',
 answer: 'Instalar um quadro elétrico custa entre €150-300 em Bragança. Preços: quadro básico 4 circuitos (€150-200), quadro completo 8+ circuitos (€250-300), substituição disjuntor (€80-150). Inclui mão de obra, materiais e certificação elétrica. Orçamento grátis: 932 321 892.'},
 {
 question: 'Como detetar problema elétrico perigoso?',
 answer: 'Sinais de perigo elétrico: 1) Disjuntor dispara constantemente, 2) Tomadas quentes ao toque, 3) Cheiro a queimado, 4) Faíscas ou estalidos, 5) Luzes piscando, 6) Fios expostos. Se notar qualquer sinal, desligue disjuntor geral e ligue 932 321 892 imediatamente.'},
 {
 question: 'Qual a garantia do trabalho de eletricista?',
 answer: 'Oferecemos garantia de 12 meses em todas as instalações elétricas e 6 meses em arranjos. Se o problema voltar no período de garantia, voltamos gratuitamente. Garantia cobre mão de obra e materiais. Trabalho garantido por escrito e garantia fornecidos após conclusão.'},
 {
 question: 'O que está incluído no serviço de eletricista?',
 answer: 'O serviço inclui: diagnóstico com multímetro profissional, mão de obra especializada, materiais básicos (disjuntores, cabos, tomadas), certificação elétrica quando aplicável, limpeza após intervenção, garantia. Não incluído: quadros elétricos completos, obras de alvenaria. Orçamento detalhado antes de iniciar.'},
 {
 question: 'Aceitam pagamento com cartão e MB WAY?',
 answer: 'Sim, aceitamos pagamento por multibanco, MB WAY, transferência bancária, e dinheiro. Pagamento apenas após conclusão do serviço e sua total satisfação. Fatura fornecida. Sem IVA (Art. 53º CIVA).'},
 ], []);
 // Inject FAQPage Schema
 useEffect(() => {
 const schemaId = 'faq-schema';
 let script = document.getElementById(schemaId) as HTMLScriptElement;
 
 if (!script) {
 script = document.createElement('script');
 script.id = schemaId;
 script.type = 'application/ld+json';
 document.head.appendChild(script);
 }
 const faqSchema = {
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
 script.textContent = JSON.stringify(faqSchema);
 return () => {
 const existingScript = document.getElementById(schemaId);
 if (existingScript) {
 existingScript.remove();
 }
 };
 }, [faqs]);
 return (
 <section id="faq" className="py-20 bg-gray-50">
 <div className="container">
 <div className="max-w-4xl mx-auto">
 {/* Header - Removed duplicate H2 (already in OptimizedHome.tsx) */}
 {/* Accordion */}
 <Accordion type="single" collapsible className="space-y-4">
 {faqs.map((faq, index) => (
 <AccordionItem
 key={index}
 value={`item-${index}`}
 className="border-4 bg-white px-6 shadow-[4px_4px_0_0_rgba(0,0,0,0.1)]"
 style={{ borderColor: config.colors.primary }}
 >
 <AccordionTrigger className="text-left font-bold text-lg hover:no-underline py-6">
 {faq.question}
 </AccordionTrigger>
 <AccordionContent className="text-gray-700 pb-6 leading-relaxed">
 {faq.answer}
 </AccordionContent>
 </AccordionItem>
 ))}
 </Accordion>
 {/* CTA */}
 <div className="mt-12 text-center p-8 border-4 bg-white" style={{ borderColor: config.colors.primary }}>
 <p className="text-lg font-bold mb-4">Não encontrou a resposta que procurava?</p>
 <p className="text-gray-600 mb-6">
 Entre em contacto connosco. A nosso trabalho está pronta para esclarecer todas as suas dúvidas.
 </p>
 <a
 href={`tel:+351${config.phone.replace(/\s/g, '')}`}
 className="inline-flex items-center gap-2 px-8 py-4 font-bold text-white shadow-[3px_3px_0_0_rgba(0,0,0,0.2)] hover:shadow-[2px_2px_0_0_rgba(0,0,0,0.2)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
 style={{ backgroundColor: config.colors.primary }}
 >
 📞 Ligue: {config.phone}
 </a>
 </div>
 </div>
 </div>
 </section>
 );
}
export default React.memo(FAQ);
