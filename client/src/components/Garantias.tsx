import React from 'react';
import { useSite } from '@/contexts/SiteContext';

export default function Garantias() {
 const { config } = useSite();
 const isPlumber = config.id === 'norte-reparos';
 const phone = isPlumber ? '928 484 451' : '932 321 892';
 const accentColor = isPlumber ? '#0e7490' : '#FF6B35';

 const guarantees = isPlumber
 ? [
 {
 icon: '📋',
 title: 'Fatura com NIF Sempre',
 desc: 'MB Way, transferência ou dinheiro — sempre com recibo fiscal. Sem desculpas, sem "depois envio".',
 pain: 'Chega de canalizadores que desaparecem sem fatura.'},
 {
 icon: '💰',
 title: 'Preço Combinado Antes',
 desc: 'Explicamos o problema e o custo antes de começar. Por escrito no WhatsApp se preferir. Sem surpresas à porta.',
 pain: 'Sem taxas escondidas, sem "surpresas" depois de abrir parede.'},
 {
 icon: '📄',
 title: 'Relatório para Seguro',
 desc: 'Relatório técnico claro para seguros e condomínios, enviado por email na mesma noite. Sem inventar culpados.',
 pain: 'Nunca mais perca prazos do seguro por falta de documentos.'},
 {
 icon: '🔄',
 title: 'Garantia de Retorno',
 desc: 'Se o problema voltar dentro de 12 meses, voltamos sem cobrar deslocação. Garantia escrita.',
 pain: 'Está farto de pagar caro e ficar com a fuga por resolver?'},
 {
 icon: '🤝',
 title: 'Sem Pressões, Sem Gritos',
 desc: 'Trabalhamos na sua casa como gostamos que trabalhem na nossa. Explicamos tudo com calma, ponto por ponto.',
 pain: 'Nada de ameaças ou aumentos de preço à porta.'},
 {
 icon: '📞',
 title: 'Amanhã Ainda Atendemos',
 desc: 'Desentupimos hoje e amanhã ainda atendemos o telefone. SMS de seguimento no dia seguinte.',
 pain: 'Chega de canalizadores fantasma que desaparecem após pagamento.'},
 ]
 : [
 {
 icon: '📋',
 title: 'Fatura com NIF Sempre',
 desc: 'MB Way, transferência ou dinheiro — sempre com recibo fiscal. Sem desculpas, sem "depois envio".',
 pain: 'Chega de eletricistas que desaparecem sem fatura.'},
 {
 icon: '💰',
 title: 'Preço Combinado Antes',
 desc: 'Explicamos o problema e o custo antes de começar. Por escrito no WhatsApp se preferir. Sem surpresas à porta.',
 pain: 'Sem taxas escondidas, sem "surpresas" depois de abrir parede.'},
 {
 icon: '🔄',
 title: 'Garantia de Retorno',
 desc: 'Se a avaria voltar dentro de 12 meses, voltamos sem cobrar deslocação. Garantia escrita.',
 pain: 'Instalações seguras, dentro das normas — sem jeitos que ardem daqui a 6 meses.'},
 {
 icon: '📄',
 title: 'certificação elétrica Completa',
 desc: 'Tratamos de toda a papelada: Termo de Responsabilidade, registo DGEG, acompanhamento até aprovação.',
 pain: 'Sem dores de cabeça com aumentos de potência ou certificados.'},
 {
 icon: '🤝',
 title: 'Sem Pressões, Sem Gritos',
 desc: 'Trabalhamos na sua casa como gostamos que trabalhem na nossa. Explicamos tudo com calma, ponto por ponto.',
 pain: 'Nada de ameaças ou aumentos de preço à porta.'},
 {
 icon: '📞',
 title: 'Amanhã Ainda Atendemos',
 desc: 'Arranjamos hoje e amanhã ainda atendemos o telefone. SMS de seguimento no dia seguinte.',
 pain: 'Se o nosso trabalho causar dano, assumimos a responsabilidade.'},
 ];

 return (
 <section className="py-16 bg-white">
 <div className="container mx-auto px-4 max-w-6xl">
 <div className="text-center mb-12">
 <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
 As Nossas Garantias — Por Escrito
 </h2>
 <p className="text-lg text-gray-600 max-w-3xl mx-auto">
 {isPlumber
 ? 'Cansado de canalizadores que desaparecem sem fatura, cobram sem orçamento e não atendem no dia seguinte? Nós fazemos diferente.'
 : 'Cansado de eletricistas que prometem e não cumprem, cobram sem orçamento e deixam a instalação pior? Nós fazemos diferente.'}
 </p>
 </div>

 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
 {guarantees.map((g, idx) => (
 <div
 key={idx}
 className="relative p-6 rounded-2xl border-2 border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all bg-gray-50"
 >
 <div className="text-4xl mb-3">{g.icon}</div>
 <h3 className="text-lg font-bold text-gray-900 mb-2">{g.title}</h3>
 <p className="text-sm text-gray-600 mb-3">{g.desc}</p>
 <p
 className="text-xs font-semibold italic text-gray-700"
 >
 "{g.pain}"
 </p>
 </div>
 ))}
 </div>

 <div className="text-center mt-10">
 <p className="text-gray-700 text-lg font-semibold mb-4">
 {isPlumber
 ? 'Pode chamar uma empresa de Lisboa com call center. Ou pode ligar para quem resolve, dá fatura e atende amanhã.'
 : 'Pode chamar uma empresa de Lisboa com call center. Ou pode ligar para quem resolve, certifica e atende amanhã.'}
 </p>
 <a
 href={`tel:+351${phone.replace(/ /g, '')}`}
 className="inline-flex items-center gap-2 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
 style={{ backgroundColor: '#991b1b' }}
 >
 📞 Ligar Agora — {phone}
 </a>
 </div>
 </div>
 </section>
 );
}
