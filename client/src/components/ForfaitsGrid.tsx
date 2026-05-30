import React from 'react';
import { useSite } from '@/contexts/SiteContext';
interface Forfait {
 icon: string;
 title: string;
 description: string;
 priceRange: string;
 details: string[];
 popular?: boolean;
}
interface ForfaitsGridProps {
 className?: string;
}
function ForfaitsGrid({ className = '' }: ForfaitsGridProps) {
 const { config } = useSite();
 const accentColor = config.id === 'norte-reparos' ? '#0e7490' : '#FF6B35';
 const forfaitsElectricien: Forfait[] = [
 {
 icon: '🔌',
 title: 'Instalação Tomada/Interruptor',
 description: 'Adição ou substituição de tomada ou interruptor',
 priceRange: '50-105€',
 details: [
 'Deslocação incluída (Zona 1)',
 'Instalação completa',
 'Teste de funcionamento',
 'Garantia 6 meses'
 ]
 },
 {
 icon: '🔍',
 title: 'Pesquisa de Avaria',
 description: 'Diagnóstico completo instalação elétrica',
 priceRange: '85-140€',
 details: [
 'Deslocação incluída (Zona 1)',
 'Diagnóstico aprofundado',
 'Relatório detalhado',
 'Orçamento reparação gratuito'
 ],
 popular: true
 },
 {
 icon: '💡',
 title: 'Instalação Luminária',
 description: 'Instalação de candeeiro, aplique ou foco',
 priceRange: '50-105€',
 details: [
 'Deslocação incluída (Zona 1)',
 'Instalação segura',
 'Ligação elétrica',
 'Limpeza após trabalhos'
 ]
 },
 {
 icon: '⚡',
 title: 'Reparação Disjuntor',
 description: 'Quadro que dispara - diagnóstico e reparação',
 priceRange: '85-210€',
 details: [
 'Deslocação incluída (Zona 1)',
 'Identificação problema',
 'Substituição se necessário',
 'Conformidade normas'
 ],
 popular: true
 },
 {
 icon: '🏠',
 title: 'Modernização Quadro Simples',
 description: 'Atualização quadro elétrico básico',
 priceRange: '165-365€',
 details: [
 'Deslocação incluída (Zona 1)',
 'Novo quadro modular',
 'Disjuntores novos',
 'Etiquetagem circuitos'
 ]
 },
 {
 icon: '🔧',
 title: 'Quadro Elétrico Completo',
 description: 'Instalação quadro novo com proteção',
 priceRange: '215-515€',
 details: [
 'Deslocação incluída (Zona 1)',
 'Quadro completo às normas',
 'Diferencial 30mA',
 'Para-raios incluído'
 ]
 },
 {
 icon: '📋',
 title: 'certificação elétrica',
 description: 'Inspeção e certificado oficial',
 priceRange: '95-215€',
 details: [
 'Deslocação incluída (Zona 1)',
 'Inspeção completa',
 'Certificado oficial',
 'Relatório detalhado'
 ]
 },
 {
 icon: '🏗️',
 title: 'Instalação Completa',
 description: 'Eletricidade casa/apartamento novo',
 priceRange: 'Sob orçamento',
 details: [
 'Estudo personalizado',
 'Plano elétrico',
 'Material de qualidade',
 'Garantia 6 meses'
 ]
 }
 ];
 return (
 <section className={`py-16 bg-white ${className}`}>
 <div className="container mx-auto px-4 max-w-7xl">
 {/* Header */}
 <div className="text-center mb-12">
 <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
 Pacotes & Tarifas Claras
 </h2>
 <p className="text-lg text-gray-600 max-w-2xl mx-auto">
 Preços completos para as intervenções mais comuns. Material padrão incluído.
 </p>
 </div>
 {/* Grid */}
 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
 {forfaitsElectricien.map((forfait, idx) => (
 <div
 key={idx}
 className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
 forfait.popular ? 'ring-2 ring-offset-2' : 'border-2 border-gray-100'
 }`}
 style={forfait.popular ? { ringColor: accentColor } : {}}
 >
 {/* Popular Badge */}
 {forfait.popular && (
 <div
 className="text-white text-center py-2 text-sm font-bold"
 style={{ backgroundColor: accentColor }}
 >
 ⭐ PLUS DEMANDÉ
 </div>
 )}
 <div className="p-6">
 {/* Icon */}
 <div className="text-5xl mb-4 text-center">{forfait.icon}</div>
 {/* Title */}
 <h3 className="text-xl font-bold text-gray-900 mb-2 text-center min-h-[56px]">
 {forfait.title}
 </h3>
 {/* Description */}
 <p className="text-sm text-gray-600 mb-4 text-center min-h-[40px]">
 {forfait.description}
 </p>
 {/* Price */}
 <div className="text-center mb-6">
 <div
 className="text-4xl font-black mb-1"
 style={{ color: accentColor }}
 >
 {forfait.priceRange}
 </div>
 <p className="text-xs text-gray-500">Zone 1 - Matériel standard inclus</p>
 </div>
 {/* Details */}
 <ul className="space-y-2 mb-6">
 {forfait.details.map((detail, detailIdx) => (
 <li key={detailIdx} className="flex items-start gap-2 text-sm text-gray-700">
 <span className="text-green-500 mt-0.5">✓</span>
 <span>{detail}</span>
 </li>
 ))}
 </ul>
 {/* CTA Button */}
 <button
 className="w-full py-3 rounded-xl font-bold text-white transition-all hover:shadow-lg"
 style={{ backgroundColor: accentColor }}
 onClick={() => {
 const phone = '932321892';
 const message = encodeURIComponent(`Olá! Gostaria de um orçamento para: ${forfait.title}`);
 window.open(`https://wa.me/351${phone}?text=${message}`, '_blank');
 }}
 >
 Pedir Orçamento
 </button>
 </div>
 </div>
 ))}
 </div>
 {/* Important Notes */}
 <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-blue-200">
 <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
 Informações Importantes
 </h3>
 <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
 <div className="text-center">
 <div className="text-3xl mb-2">📍</div>
 <h4 className="font-bold text-gray-900 mb-1">Zonas de Deslocação</h4>
 <p className="text-sm text-gray-600">
 Preços indicados para Zona 1 (≤15km). Outras zonas: ver tabela tarifária.
 </p>
 </div>
 <div className="text-center">
 <div className="text-3xl mb-2">🔧</div>
 <h4 className="font-bold text-gray-900 mb-1">Material Incluído</h4>
 <p className="text-sm text-gray-600">
 Material padrão incluído. Equipamento premium sob pedido com suplemento.
 </p>
 </div>
 <div className="text-center">
 <div className="text-3xl mb-2">⏰</div>
 <h4 className="font-bold text-gray-900 mb-1">Acréscimos</h4>
 <p className="text-sm text-gray-600">
 Sábado +29%, Domingo/Feriado +43%, Noturno (18h-8h) +50%
 </p>
 </div>
 </div>
 </div>
 {/* Guarantee Banner */}
 <div className="mt-8 text-center">
 <div className="inline-block bg-green-50 border-2 border-green-200 rounded-xl px-8 py-4">
 <p className="text-lg font-bold text-gray-900 mb-1">
 ✅ Preço Comunicado e Validado Antes da Intervenção
 </p>
 <p className="text-sm text-gray-600">
 Sem surpresas. Se o preço mudar, avisamos ANTES de começar.
 </p>
 </div>
 </div>
 </div>
 </section>
 );
}
export default React.memo(ForfaitsGrid);
