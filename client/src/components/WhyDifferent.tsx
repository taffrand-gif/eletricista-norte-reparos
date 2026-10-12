import React from 'react';
// Component: Why We're Different - Eletricista
// Shows 10 common electrical problems and how we solve them differently
// Builds trust by addressing customer pain points
import { useSite } from '@/contexts/SiteContext';
import { useMemo } from 'react';
interface Problem {
 icon: string;
 title: string;
 others: string;
 us: string;
}
function WhyDifferent() {
 const { config } = useSite();
 const problems = useMemo<Problem[]>(() => [
 {
 icon: '⚡',
 title: 'Disjuntor Continua Disparar',
 others: 'Troca disjuntor, problema continua',
 us: 'Diagnóstico termográfico + Causa raiz'},
 {
 icon: '📜',
 title: 'Sem Orçamento por escrito',
 others: 'Instalação sem certificação legal',
 us: 'Orçamento por escrito antes de intervir'},
 {
 icon: '🔥',
 title: 'Instalação Perigosa',
 others: 'Cabos quentes, risco incêndio',
 us: 'Teste termográfico + Normas CE'},
 {
 icon: '💸',
 title: 'Preço Absurdo vs Outros',
 others: 'Preço só conhecido no fim',
 us: 'Preços transparentes site + Sem IVA'},
 {
 icon: '🔧',
 title: 'Problema Volta Após 1 Mês',
 others: 'Remendo temporário, volta logo',
 us: 'Diagnóstico + orçamento por escrito'},
 {
 icon: '⏰',
 title: 'Nunca Chega No Horário',
 others: 'Disse 1h, chega 4h depois',
 us: 'GPS tracking + se atrasar'},
 {
 icon: '❓',
 title: 'Diagnóstico Errado',
 others: 'Adivinha, cobra extra depois',
 us: 'Multímetro profissional Fluke + Diagnóstico'},
 {
 icon: '🚫',
 title: 'Não Atende Urgência Noite',
 others: '24h falso, não atende madrugada',
 us: 'Telefone 24h REAL + Técnico piquete'},
 {
 icon: '📄',
 title: 'Sem Fatura, Sem Orçamento',
 others: 'Trabalho por fora, desaparece',
 us: 'Fatura com NIF + Orçamento por escrito'},
 {
 icon: '🔌',
 title: 'Quadro Mal Dimensionado',
 others: 'Não calcula carga, sobrecarga',
 us: 'Cálculo profissional + Proteção adequada'},
 ], []);
 return (
 <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
 <div className="container">
 <div className="max-w-6xl mx-auto">
 {/* Header */}
 <div className="text-center mb-16">
 <h2 className="text-4xl md:text-5xl font-black mb-6">
 Cansado de Eletricistas Que Não Resolvem?
 </h2>
 <p className="text-xl text-gray-600 max-w-3xl mx-auto">
 Já teve estes problemas? Nós resolvemos de forma DIFERENTE.
 Por isso trabalhamos com orçamento por escrito e fatura com NIF.
 </p>
 </div>
 {/* Problems Grid */}
 <div className="grid md:grid-cols-2 gap-8 mb-12">
 {problems.map((problem, index) => (
 <div
 key={index}
 className="bg-white p-6 rounded-lg border-4 shadow-lg hover:shadow-xl transition-shadow"
 style={{ borderColor: config.colors.primary }}
 >
 {/* Icon & Title */}
 <div className="flex items-start gap-4 mb-4">
 <span className="text-4xl">{problem.icon}</span>
 <h3 className="text-xl font-bold text-gray-900 flex-1">
 {problem.title}
 </h3>
 </div>
 {/* Others vs Us */}
 <div className="space-y-3">
 <div className="flex items-start gap-3">
 <span className="text-red-500 font-bold text-lg flex-shrink-0">❌</span>
 <div>
 <p className="text-sm font-semibold text-gray-500 uppercase">Outros</p>
 <p className="text-gray-700">{problem.others}</p>
 </div>
 </div>
 <div className="flex items-start gap-3">
 <span className="text-green-500 font-bold text-lg flex-shrink-0">✅</span>
 <div>
 <p className="text-sm font-semibold uppercase" style={{ color: config.colors.primary }}>
 Nós
 </p>
 <p className="text-gray-900 font-semibold">{problem.us}</p>
 </div>
 </div>
 </div>
 </div>
 ))}
 </div>
 {/* Guarantee Box */}
 <div
 className="bg-white p-8 rounded-lg border-4 text-center"
 style={{ borderColor: config.colors.primary }}
 >
 <h3 className="text-2xl font-black mb-4">
 ✅ Orçamento por escrito + diagnóstico elétrico
 </h3>
 <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
 Orçamento por escrito antes de qualquer intervenção. Seguro de responsabilidade civil profissional até 50.000 €.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a
 href={`tel:+351${config.phone.replace(/\s/g, '')}`}
 className="inline-flex items-center justify-center gap-2 px-8 py-4 font-bold text-white rounded-lg shadow-lg hover:shadow-xl transition-all text-lg"
 style={{ backgroundColor: config.colors.primary }}
 >
 📞 Ligue: {config.phone}
 </a>
 <a
 href={`https://wa.me/351${config.phone.replace(/\s/g, '')}?text=Olá, preciso de eletricista Orçamento por escrito`}
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center justify-center gap-2 px-8 py-4 font-bold text-white bg-green-500 rounded-lg shadow-lg hover:shadow-xl transition-all text-lg"
 >
 💬 WhatsApp
 </a>
 </div>
 <p className="text-sm text-gray-500 mt-4">
 Atendimento 24h/7d • Confirmação por telefone • seguro RC profissional
 </p>
 </div>
 {/* Social Proof */}
 <div className="mt-12 text-center">
 <div className="flex items-center justify-center gap-2 text-yellow-500 text-2xl mb-2">
 ★★★★★
 </div>
 <p className="text-gray-600">
 <strong className="text-gray-900"></strong> baseado em{' '}
 <strong className="text-gray-900">Centenas</strong> Intervenções profissionais realizadas 
 </p>
 </div>
 </div>
 </div>
 </section>
 );
}
export default React.memo(WhyDifferent);
