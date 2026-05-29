import React from 'react';
import { useSite } from '@/contexts/SiteContext';

interface TransparenciaTotalProps {
 className?: string;
}

function TransparenciaTotal({ className = '' }: TransparenciaTotalProps) {
 const { config } = useSite();
 const accentColor = config.id === 'norte-reparos' ? '#0e7490' : '#FF6B35';

 return (
 <section className={`py-16 bg-gradient-to-br from-white to-gray-50 ${className}`}>
 <div className="container mx-auto px-4 max-w-6xl">
 {/* Header */}
 <div className="text-center mb-12">
 <div className="inline-block bg-gradient-to-r from-blue-50 to-cyan-50 px-6 py-2 rounded-full mb-4">
 <span className="text-sm font-bold" style={{ color: accentColor }}>
 🔍 ÚNICO NA REGIÃO
 </span>
 </div>
 <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
 Transparência Total — Preços Públicos
 </h2>
 <p className="text-lg text-gray-600 max-w-2xl mx-auto">
 Somos os únicos a mostrar TODOS os preços publicamente. Sem jogos. Sem surpresas.
 </p>
 </div>

 {/* Comparação Principal */}
 <div className="grid md:grid-cols-2 gap-8 mb-12">
 {/* O Que Mostramos */}
 <div className="bg-white rounded-2xl shadow-xl p-8 border-2" style={{ borderColor: accentColor }}>
 <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
 <span className="text-3xl">✅</span>
 O Que Mostramos
 </h3>
 <ul className="space-y-4">
 <li className="flex items-start gap-3">
 <span className="text-green-500 text-xl mt-1">✓</span>
 <div>
 <p className="font-bold text-gray-900">Preços Públicos</p>
 <p className="text-sm text-gray-600">Todas as tarifas visíveis ANTES de ligar</p>
 </div>
 </li>
 <li className="flex items-start gap-3">
 <span className="text-green-500 text-xl mt-1">✓</span>
 <div>
 <p className="font-bold text-gray-900">Equipamento Detalhado</p>
 <p className="text-sm text-gray-600">Com valores de investimento reais</p>
 </div>
 </li>
 <li className="flex items-start gap-3">
 <span className="text-green-500 text-xl mt-1">✓</span>
 <div>
 <p className="font-bold text-gray-900">Certificações Verificáveis</p>
 <p className="text-sm text-gray-600">DGEG, com links de verificação</p>
 </div>
 </li>
 <li className="flex items-start gap-3">
 <span className="text-green-500 text-xl mt-1">✓</span>
 <div>
 <p className="font-bold text-gray-900">Garantias Por Escrito</p>
 <p className="text-sm text-gray-600">3-6 meses mão de obra documentado</p>
 </div>
 </li>
 </ul>
 </div>

 {/* O Que Outros Escondem */}
 <div className="bg-gray-100 rounded-2xl shadow-xl p-8 border-2 border-gray-300">
 <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
 <span className="text-3xl">❌</span>
 O Que Outros Escondem
 </h3>
 <ul className="space-y-4">
 <li className="flex items-start gap-3">
 <span className="text-red-500 text-xl mt-1">✗</span>
 <div>
 <p className="font-bold text-gray-900">"Depende..."</p>
 <p className="text-sm text-gray-600">Preço só depois de chegar à sua casa</p>
 </div>
 </li>
 <li className="flex items-start gap-3">
 <span className="text-red-500 text-xl mt-1">✗</span>
 <div>
 <p className="font-bold text-gray-900">Equipamento Desconhecido</p>
 <p className="text-sm text-gray-600">Não sabem o que trazem até chegar</p>
 </div>
 </li>
 <li className="flex items-start gap-3">
 <span className="text-red-500 text-xl mt-1">✗</span>
 <div>
 <p className="font-bold text-gray-900">Certificações Não Mencionadas</p>
 <p className="text-sm text-gray-600">Ou não têm, ou não querem mostrar</p>
 </div>
 </li>
 <li className="flex items-start gap-3">
 <span className="text-red-500 text-xl mt-1">✗</span>
 <div>
 <p className="font-bold text-gray-900">"Garantia" Verbal</p>
 <p className="text-sm text-gray-600">Que desaparece quando precisa</p>
 </div>
 </li>
 </ul>
 </div>
 </div>

 {/* Pergunta Provocadora */}
 <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-blue-200 mb-12">
 <div className="text-center">
 <p className="text-2xl font-bold text-gray-900 mb-4">
 💬 Pergunta Simples:
 </p>
 <p className="text-xl text-gray-700 mb-6">
 Se o trabalho é bom, porque esconder o preço?
 </p>
 <p className="text-gray-600 max-w-2xl mx-auto">
 Transparência não é "favor" — é obrigação de quem trabalha bem e tem
 confiança no valor que oferece.
 </p>
 </div>
 </div>

 {/* Razões para Transparência */}
 <div className="grid md:grid-cols-2 gap-6 mb-12">
 <div className="bg-white rounded-xl p-6 shadow-lg">
 <h4 className="text-lg font-bold text-gray-900 mb-4">
 Razões para ESCONDER preços:
 </h4>
 <ul className="space-y-2 text-gray-700">
 <li className="flex items-start gap-2">
 <span className="text-red-500">❌</span>
 <span>Cobrar diferente a cada cliente</span>
 </li>
 <li className="flex items-start gap-2">
 <span className="text-red-500">❌</span>
 <span>"Avaliar" quanto o cliente pode pagar</span>
 </li>
 <li className="flex items-start gap-2">
 <span className="text-red-500">❌</span>
 <span>Aumentar preço se casa parecer cara</span>
 </li>
 <li className="flex items-start gap-2">
 <span className="text-red-500">❌</span>
 <span>Não ter preços fixos (improvisa)</span>
 </li>
 </ul>
 </div>

 <div className="bg-white rounded-xl p-6 shadow-lg border-2" style={{ borderColor: accentColor }}>
 <h4 className="text-lg font-bold text-gray-900 mb-4">
 Razões para MOSTRAR preços:
 </h4>
 <ul className="space-y-2 text-gray-700">
 <li className="flex items-start gap-2">
 <span className="text-green-500">✓</span>
 <span>Honestidade — todos pagam o mesmo</span>
 </li>
 <li className="flex items-start gap-2">
 <span className="text-green-500">✓</span>
 <span>Respeito — cliente decide antes de ligar</span>
 </li>
 <li className="flex items-start gap-2">
 <span className="text-green-500">✓</span>
 <span>Confiança — sem surpresas na hora de pagar</span>
 </li>
 <li className="flex items-start gap-2">
 <span className="text-green-500">✓</span>
 <span>Profissionalismo — preços estudados e justos</span>
 </li>
 </ul>
 </div>
 </div>

 {/* CTA */}
 <div className="text-center">
 <a
 href="/transparencia-precos"
 className="inline-block px-8 py-4 rounded-xl font-bold text-white text-lg shadow-lg hover:shadow-xl transition-all"
 style={{ backgroundColor: accentColor }}
 >
 Ver Todos os Nossos Preços →
 </a>
 <p className="text-sm text-gray-600 mt-4">
 100% transparente. Sem jogos. Sem surpresas.
 </p>
 </div>
 </div>
 </section>
 );
}

export default React.memo(TransparenciaTotal);
