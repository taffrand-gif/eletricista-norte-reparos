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
 const priceNote = 'Mão de obra: 70 € por hora em dias úteis (09h-18h), mais 30 € de deslocação; à noite, aos fins de semana e feriados: 100 € por hora, mais 50 € de deslocação. Valores TTC, IVA incluído. Cada hora iniciada é devida.';
 const availabilityNote = 'A disponibilidade é confirmada conforme a localização e a situação operacional.';
 const localFaqs = [
 {
 question: 'Fazem instalação e reparação elétrica em Mirandela?',
 answer: `Sim, a Eletricista Profissional faz instalação, remodelação e diagnóstico elétrico em Mirandela, ao seu domicílio. ${availabilityNote} Antes da intervenção, apresentamos orçamento por escrito.`},
 {
 question: 'Quanto custa um eletricista em Bragança?',
 answer: `${priceNote} O valor final depende do diagnóstico e da intervenção; o orçamento por escrito é apresentado antes de começar.`},
 {
 question: 'Fazem diagnóstico elétrico na zona de Bragança?',
 answer: `Sim, fazemos inspeção elétrica para venda de imóveis, arrendamento e instalações novas na zona de Bragança. O valor depende do diagnóstico e da intervenção. ${priceNote}`},
 {
 question: 'Trabalham em Miranda do Douro?',
 answer: `Sim, prestamos serviço de instalação, remodelação e diagnóstico elétrico em Miranda do Douro: substituição de quadros elétricos, remodelação de instalações e diagnóstico elétrico. ${availabilityNote} Ligue 932 321 892.`},
 {
 question: 'Instalam quadros elétricos em Vila Flor e Torre de Moncorvo?',
 answer: `Sim, fazemos substituição e modernização de quadros elétricos em Vila Flor e Torre de Moncorvo. O valor depende do quadro e da instalação existente, e o orçamento por escrito é apresentado antes da intervenção. ${priceNote} ${availabilityNote}`},
 {
 question: 'Qual o eletricista mais perto de Mogadouro?',
 answer: `A Eletricista Profissional atende em Mogadouro, ao seu domicílio. ${availabilityNote} O orçamento por escrito é apresentado antes da intervenção.`},
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
