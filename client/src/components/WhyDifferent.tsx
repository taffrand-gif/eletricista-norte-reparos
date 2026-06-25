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
 value: string;
}
function WhyDifferent() {
 const { config } = useSite();
 const problems = useMemo<Problem[]>(() => [
 {
 icon: '⚡',
 title: 'Disjuntor Continua Disparar',
 others: 'Troca disjuntor, problema continua',
 us: 'Diagnóstico termográfico + Causa raiz',
 value: 'Economiza €200 (solução definitiva)'},
 {
 icon: '📜',
 title: 'Sem Orçamento por escrito',
 others: 'Instalação sem certificação legal',
 us: 'certificação elétrica incluída sempre',
 value: 'Economiza €150 (aceite seguradora)'},
 {
 icon: '🔥',
 title: 'Instalação Perigosa',
 others: 'Cabos quentes, risco incêndio',
 us: 'Teste termográfico + Normas CE',
 value: 'Economiza €500 (segurança vida)'},
 {
 icon: '💸',
 title: 'Preço Absurdo vs Outros',
 others: 'Cobra €300, outro faz €100',
 us: 'Preços transparentes site + Sem IVA',
 value: 'Economiza €100 (honestidade)'},
 {
 icon: '🔧',
 title: 'Problema Volta Após 1 Mês',
 others: 'Remendo temporário, volta logo',
 us: 'Garantia 12 meses instalações',
 value: 'Economiza €250 (tranquilidade)'},
 {
 icon: '⏰',
 title: 'Nunca Chega No Horário',
 others: 'Disse 1h, chega 4h depois',
 us: 'GPS tracking + se atrasar',
 value: 'Economiza tempo + €50'},
 {
 icon: '❓',
 title: 'Diagnóstico Errado',
 others: 'Adivinha, cobra extra depois',
 us: 'Multímetro profissional Fluke + Relatório',
 value: 'Economiza €150 (precisão)'},
 {
 icon: '🚫',
 title: 'Não Atende Urgência Noite',
 others: '24h falso, não atende madrugada',
 us: 'Telefone 24h REAL + Técnico piquete',
 value: 'Economiza €200 (urgência real)'},
 {
 icon: '📄',
 title: 'Sem Fatura, Sem Garantia',
 others: 'Trabalho por fora, desaparece',
 us: 'Fatura + Orçamento por escrito + Garantia',
 value: 'Economiza €200 (segurança legal)'},
 {
 icon: '🔌',
 title: 'Quadro Mal Dimensionado',
 others: 'Não calcula carga, sobrecarga',
 us: 'Cálculo profissional + Proteção adequada',
 value: 'Economiza €300 (evita incêndio)'},
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
 Por isso damos garantias e certificação elétrica que outros não dão.
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
 {/* Value */}
 <div
 className="mt-4 p-3 rounded-lg text-center font-bold"
 style={{ backgroundColor: `${config.colors.primary}15` }}
 >
 <span className="text-2xl mr-2">💰</span>
 <span style={{ color: config.colors.primary }}>{problem.value}</span>
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
 ✅ Garantia 12 Meses + certificação elétrica
 </h3>
 <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
 Se o problema voltar em 12 meses, voltamos GRATUITAMENTE.
 certificação elétrica incluída. Conforme legislação portuguesa.
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
 Atendimento 24h/7d • Confirmação por telefone • Certificação elétrica incluída
 </p>
 </div>
 {/* Social Proof */}
 <div className="mt-12 text-center">
 <div className="flex items-center justify-center gap-2 text-yellow-500 text-2xl mb-2">
 ★★★★★
 </div>
 <p className="text-gray-600">
 <strong className="text-gray-900"></strong> baseado em{' '}
 <strong className="text-gray-900">500+</strong> intervenções certificadas 
 </p>
 </div>
 </div>
 </div>
 </section>
 );
}
export default React.memo(WhyDifferent);
