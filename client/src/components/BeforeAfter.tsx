import React from 'react';
// Component: Before/After Showcase - Eletricista
// Visual proof of transformations - builds trust and demonstrates value
// Shows real electrical problems solved with dramatic before/after comparisons
import { useSite } from '@/contexts/SiteContext';
import { useState, useMemo } from 'react';
interface Case {
 id: string;
 title: string;
 problem: string;
 solution: string;
 time: string;
 cost: string;
 savings: string;
 beforeEmoji: string;
 afterEmoji: string;
}
function BeforeAfter() {
 const { config } = useSite();
 const [activeCase, setActiveCase] = useState(0);
 const cases = useMemo<Case[]>(() => [
 {
 id: 'breaker',
 title: 'Disjuntor Disparava Toda Hora',
 problem: 'Disjuntor disparava 5x/dia. Outros trocaram disjuntor, continuou.',
 solution: 'Diagnóstico termográfico + substituição cabos sobrecarga.',
 time: '3 horas',
 cost: '€200',
 savings: 'Evitou incêndio (€10,000+ prejuízo)',
 beforeEmoji: '⚡',
 afterEmoji: '✅'},
 {
 id: 'bill',
 title: 'Conta Luz €300/Mês Absurda',
 problem: 'Instalação antiga gastava 40% mais energia.',
 solution: 'Modernização quadro + LED + timer esquentador.',
 time: '1 dia',
 cost: '€400',
 savings: '€120/mês = €1,440/ano',
 beforeEmoji: '💸',
 afterEmoji: '💰'},
 {
 id: 'hot-outlets',
 title: 'Tomadas Quentes, Risco Incêndio',
 problem: 'Tomadas cozinha ficavam quentes. Cheiro queimado.',
 solution: 'Substituição tomadas + cabos + proteção térmica.',
 time: '2 horas',
 cost: '€150',
 savings: 'Segurança família (inestimável)',
 beforeEmoji: '🔥',
 afterEmoji: '🛡️'},
 {
 id: 'no-',
 title: 'Seguradora Recusou Sinistro',
 problem: 'Instalação sem . Seguradora não pagou €5,000.',
 solution: 'certificação elétrica completa + relatório técnico.',
 time: '4 horas',
 cost: '€250',
 savings: 'Aceite seguradora (€5,000 coberto)',
 beforeEmoji: '📄',
 afterEmoji: '✅'},
 ], []);
 const currentCase = cases[activeCase];
 return (
 <section className="py-20 bg-gradient-to-b from-white to-gray-50">
 <div className="container">
 <div className="max-w-6xl mx-auto">
 {/* Header */}
 <div className="text-center mb-12">
 <h2 className="text-4xl md:text-5xl font-black mb-6">
 📸 Antes vs Depois: Problemas RESOLVIDOS
 </h2>
 <p className="text-xl text-gray-600">
 Casos reais de clientes que estavam desesperados.
 Veja como resolvemos definitivamente com certificação elétrica.
 </p>
 </div>
 {/* Case Selector */}
 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
 {cases.map((c, index) => (
 <button
 key={c.id}
 onClick={() => setActiveCase(index)}
 className={`p-4 rounded-lg border-2 transition-all ${
 activeCase === index
 ? 'border-4 shadow-lg'
 : 'border-gray-300 hover:border-gray-400'
 }`}
 style={
 activeCase === index
 ? { borderColor: config.colors.primary }
 : {}
 }
 >
 <div className="text-3xl mb-2">{c.beforeEmoji}</div>
 <p className="text-sm font-bold text-gray-900 line-clamp-2">
 {c.title}
 </p>
 </button>
 ))}
 </div>
 {/* Before/After Comparison */}
 <div className="bg-white rounded-lg border-4 shadow-xl overflow-hidden" style={{ borderColor: config.colors.primary }}>
 <div className="grid md:grid-cols-2">
 {/* BEFORE */}
 <div className="p-8 bg-red-50 border-r-4 border-red-500">
 <div className="flex items-center gap-3 mb-6">
 <span className="text-5xl">{currentCase.beforeEmoji}</span>
 <div>
 <h3 className="text-2xl font-black text-red-900">ANTES</h3>
 <p className="text-red-700 font-semibold">Problema</p>
 </div>
 </div>
 <p className="text-lg text-gray-800 leading-relaxed">
 {currentCase.problem}
 </p>
 </div>
 {/* AFTER */}
 <div className="p-8 bg-green-50">
 <div className="flex items-center gap-3 mb-6">
 <span className="text-5xl">{currentCase.afterEmoji}</span>
 <div>
 <h3 className="text-2xl font-black text-green-900">DEPOIS</h3>
 <p className="text-green-700 font-semibold">Solução</p>
 </div>
 </div>
 <p className="text-lg text-gray-800 leading-relaxed mb-6">
 {currentCase.solution}
 </p>
 {/* Stats */}
 <div className="space-y-3">
 <div className="flex items-center gap-2">
 <span className="text-green-600 font-bold">⏱️</span>
 <span className="text-gray-700">
 <strong>Tempo:</strong> {currentCase.time}
 </span>
 </div>
 <div className="flex items-center gap-2">
 <span className="text-green-600 font-bold">💵</span>
 <span className="text-gray-700">
 <strong>Custo:</strong> {currentCase.cost}
 </span>
 </div>
 <div className="flex items-center gap-2">
 <span className="text-green-600 font-bold">💰</span>
 <span className="text-gray-700">
 <strong>Economiza:</strong> {currentCase.savings}
 </span>
 </div>
 </div>
 </div>
 </div>
 {/* Case Title */}
 <div className="p-6 text-center" style={{ backgroundColor: `${config.colors.primary}15` }}>
 <h4 className="text-2xl font-black" style={{ color: config.colors.primary }}>
 {currentCase.title}
 </h4>
 </div>
 </div>
 {/* CTA */}
 <div className="mt-12 text-center">
 <p className="text-2xl font-black mb-6">
 Tem Um Problema Parecido? Resolvemos HOJE com !
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a
 href={`tel:+351${config.phone.replace(/\s/g, '')}`}
 className="inline-flex items-center justify-center gap-2 px-8 py-5 font-bold text-white rounded-lg shadow-lg hover:shadow-xl transition-all text-xl"
 style={{ backgroundColor: config.colors.primary }}
 >
 📞 Ligue: {config.phone}
 </a>
 <a
 href={`https://wa.me/351${config.phone.replace(/\s/g, '')}?text=Olá, vi os casos resolvidos. Tenho problema elétrico parecido!`}
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center justify-center gap-2 px-8 py-5 font-bold text-white bg-green-500 rounded-lg shadow-lg hover:shadow-xl transition-all text-xl"
 >
 💬 WhatsApp
 </a>
 </div>
 <p className="text-sm text-gray-500 mt-4">
 ✅ Inspeção grátis • ✅ certificação elétrica • ✅ Resposta rápida garantida, em minutos
 </p>
 </div>
 {/* Social Proof */}
 <div className="mt-12 p-6 bg-white rounded-lg border-2 border-gray-200">
 <p className="text-center text-gray-700">
 <strong className="text-gray-900">500+ instalações certificadas </strong> em Bragança e região.
 Problemas elétricos que outros não conseguiram resolver.
 </p>
 </div>
 </div>
 </div>
 </section>
 );
}
export default React.memo(BeforeAfter);
