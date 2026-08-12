import React from 'react';
// FAQ adicionais orientadas para SEO local
// Perguntas direcionadas para pesquisas locais nas cidades de Trás-os-Montes
import { useSite } from '@/contexts/SiteContext';
// memo removed from 'react';
import {
 Accordion,
 AccordionContent,
 AccordionItem,
 AccordionTrigger} from '@/components/ui/accordion';
function FAQLocal() {
 const { config } = useSite();
 const localFaqs = [
 {
 question: 'Fazem instalação e reparação elétrica em Mirandela?',
 answer: 'Sim, a Eletricista Profissional faz instalação, remodelação e diagnóstico elétrico em Mirandela e em todo o distrito de Bragança, ao seu domicílio. Orçamento por escrito em 48h e garantia 1 ano.'},
 {
 question: 'Quanto custa um eletricista em Bragança?',
 answer: 'O preço de um eletricista em Bragança varia conforme o serviço: diagnóstico (80-120€), reparação de avaria elétrica (150-210€), substituição de quadro elétrico 12 módulos (370-650€), diagnóstico elétrico (150-300€). Todos os preços sem IVA. Sem compromisso.'},
 {
 question: 'Fazem diagnóstico elétrico na zona de Bragança?',
 answer: 'Sim, fazemos inspeção elétrica para venda de imóveis, arrendamento e instalações novas na zona de Bragança. Prazo: 3-5 dias úteis. Preço: a partir de 150€ (sem IVA).'},
 {
 question: 'Trabalham em Miranda do Douro e na zona raiana?',
 answer: 'Sim, prestamos serviço de instalação, remodelação e diagnóstico elétrico em Miranda do Douro e em toda a zona raiana: substituição de quadros elétricos, remodelação de instalações e diagnóstico elétrico. Orçamento por escrito em 48h. Ligue 932 321 892.'},
 {
 question: 'Instalam quadros elétricos em Vila Flor e Torre de Moncorvo?',
 answer: 'Sim, fazemos substituição e modernização de quadros elétricos em Vila Flor, Torre de Moncorvo e todas as localidades do distrito de Bragança. Preço: 370-650€ para quadro 12 módulos (sem IVA). Inclui quadro novo, disjuntores diferenciais, instalação completa e garantia.'},
 {
 question: 'Qual o eletricista mais perto de Mogadouro?',
 answer: 'A Eletricista Profissional é o eletricista em Mogadouro. Cobrimos Mogadouro e todas as suas freguesias. Serviço ao seu domicílio, com orçamento por escrito em 48h.'},
 ];
 return (
 <section className="py-16 bg-white">
 <div className="container mx-auto px-4">
 <div className="text-center mb-12">
 <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
 Perguntas sobre Serviços na Sua Zona
 </h2>
 <p className="text-lg text-gray-600 max-w-2xl mx-auto">
 Informações úteis sobre os nossos serviços nas principais cidades de Trás-os-Montes
 </p>
 </div>
 <div className="max-w-4xl mx-auto">
 <Accordion type="single" collapsible className="space-y-4">
 {localFaqs.map((faq, index) => (
 <AccordionItem
 key={index}
 value={`local-${index}`}
 className="border-2 bg-white px-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
 style={{ borderColor: config.colors.primaryLight }}
 >
 <AccordionTrigger className="text-left font-bold text-base hover:no-underline py-5">
 {faq.question}
 </AccordionTrigger>
 <AccordionContent className="text-gray-700 pb-5 leading-relaxed">
 {faq.answer}
 </AccordionContent>
 </AccordionItem>
 ))}
 </Accordion>
 </div>
 </div>
 </section>
 );
}
export default React.memo(FAQLocal);
