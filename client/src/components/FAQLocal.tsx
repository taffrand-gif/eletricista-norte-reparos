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
 answer: 'Sim, a Eletricista Profissional faz instalação, remodelação e diagnóstico elétrico em Mirandela e em todo o distrito de Bragança, ao seu domicílio. Orçamento por escrito antes de qualquer intervenção.'},
 {
 question: 'Quanto custa um eletricista em Bragança?',
 answer: 'Montantes TTC: 70 €/h em dias úteis (09h–18h) e 100 €/h à noite, fins de semana e feriados, mais deslocação de 30 € ou 50 €. Cada hora começada é devida. Orçamento por escrito antes de qualquer intervenção.'},
 {
 question: 'Fazem diagnóstico elétrico na zona de Bragança?',
 answer: 'Sim, fazemos inspeção elétrica para venda de imóveis, arrendamento e instalações novas na zona de Bragança.'},
 {
 question: 'Trabalham em Miranda do Douro e na zona raiana?',
 answer: 'Sim, prestamos serviço de instalação, remodelação e diagnóstico elétrico em Miranda do Douro e em toda a zona raiana: substituição de quadros elétricos, remodelação de instalações e diagnóstico elétrico. Orçamento por escrito antes de qualquer intervenção. Ligue 932 321 892.'},
 {
 question: 'Instalam quadros elétricos em Vila Flor e Torre de Moncorvo?',
 answer: 'Sim, fazemos substituição e modernização de quadros elétricos em Vila Flor, Torre de Moncorvo e todas as localidades do distrito de Bragança.'},
 {
 question: 'Qual o eletricista mais perto de Mogadouro?',
 answer: 'A Eletricista Profissional é o eletricista em Mogadouro. Cobrimos Mogadouro e todas as suas freguesias. Serviço ao seu domicílio, com orçamento por escrito antes de qualquer intervenção.'},
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
