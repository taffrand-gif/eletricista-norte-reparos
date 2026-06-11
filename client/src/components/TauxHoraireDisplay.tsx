import React from 'react';
import { useSite } from '@/contexts/SiteContext';
interface TauxHoraireDisplayProps {
 className?: string;
}
function TauxHoraireDisplay({ className = '' }: TauxHoraireDisplayProps) {
 const { config } = useSite();
 const accentColor = config.id === 'norte-reparos' ? '#0e7490' : '#FF6B35';
 return (
 <section className={`py-16 bg-gradient-to-br from-gray-50 to-white ${className}`}>
 <div className="container mx-auto px-4 max-w-5xl">
 {/* Header */}
 <div className="text-center mb-12">
 <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
 Tarifas Transparentes
 </h2>
 <p className="text-lg text-gray-600 max-w-2xl mx-auto">
 Sem surpresas. Preços claros comunicados antes de começar qualquer trabalho.
 </p>
 </div>
 {/* Taxa Horária Principal */}
 <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-2" style={{ borderColor: accentColor }}>
 <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
 Taxa Horária de Mão de Obra
 </h3>
 <div className="grid md:grid-cols-3 gap-6 mb-8">
 {/* Normal */}
 <div className="bg-gray-50 rounded-xl p-6 text-center">
 <div className="text-4xl mb-3">🕐</div>
 <h4 className="font-bold text-gray-900 mb-2">Horário Normal</h4>
 <p className="text-sm text-gray-600 mb-3">Seg-Sex 08h-18h</p>
 <div className="text-4xl font-black" style={{ color: accentColor }}>
 70€<span className="text-xl text-gray-600">/h</span>
 </div>
 </div>
 {/* Sábado */}
 <div className="bg-blue-50 rounded-xl p-6 text-center border-2 border-blue-200">
 <div className="text-4xl mb-3">📅</div>
 <h4 className="font-bold text-gray-900 mb-2">Sábado</h4>
 <p className="text-sm text-gray-600 mb-3">Todo o dia</p>
 <div className="text-4xl font-black text-blue-600">
 90€<span className="text-xl text-gray-600">/h</span>
 </div>
 </div>
 {/* Domingo/Feriado */}
 <div className="bg-red-50 rounded-xl p-6 text-center border-2 border-red-200">
 <div className="text-4xl mb-3">🎉</div>
 <h4 className="font-bold text-gray-900 mb-2">Domingo & Feriado</h4>
 <p className="text-sm text-gray-600 mb-3">Dias feriados</p>
 <div className="text-4xl font-black text-red-600">
 100€<span className="text-xl text-gray-600">/h</span>
 </div>
 </div>
 </div>
 {/* Acréscimos Noturnos */}
 <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border-2 border-indigo-200">
 <div className="flex items-start gap-4">
 <div className="text-4xl">🌙</div>
 <div className="flex-1">
 <h4 className="font-bold text-gray-900 mb-2 text-lg">Acréscimos Noturnos</h4>
 <p className="text-gray-700 mb-3">
 Intervenções entre <strong>18h00 e 08h00</strong>
 </p>
 <div className="grid md:grid-cols-2 gap-4">
 <div className="bg-white rounded-lg p-4">
 <p className="text-sm text-gray-600 mb-1">Mão de obra</p>
 <p className="text-2xl font-bold text-indigo-600">+50%</p>
 </div>
 <div className="bg-white rounded-lg p-4">
 <p className="text-sm text-gray-600 mb-1">Deslocação adicional</p>
 <p className="text-2xl font-bold text-indigo-600">+50%</p>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 {/* Custos de Deslocação */}
 <div className="bg-white rounded-2xl shadow-xl p-8">
 <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
 Custos de Deslocação por Zona
 </h3>
 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
 {/* Zona 1 */}
 <div className="bg-green-50 rounded-xl p-5 border-2 border-green-200">
 <div className="flex justify-between items-center mb-2">
 <span className="font-bold text-gray-900">Zona 1</span>
 <span className="text-2xl font-black text-green-600">15€</span>
 </div>
 <p className="text-sm text-gray-600">≤ 15 km</p>
 <p className="text-xs text-gray-500 mt-2">Trás-os-Montes, centro</p>
 </div>
 {/* Zona 2 */}
 <div className="bg-blue-50 rounded-xl p-5 border-2 border-blue-200">
 <div className="flex justify-between items-center mb-2">
 <span className="font-bold text-gray-900">Zona 2</span>
 <span className="text-2xl font-black text-blue-600">25€</span>
 </div>
 <p className="text-sm text-gray-600">15-35 km</p>
 <p className="text-xs text-gray-500 mt-2">Mirandela, Vila Flor</p>
 </div>
 {/* Zona 3 */}
 <div className="bg-yellow-50 rounded-xl p-5 border-2 border-yellow-200">
 <div className="flex justify-between items-center mb-2">
 <span className="font-bold text-gray-900">Zona 3</span>
 <span className="text-2xl font-black text-yellow-600">35€</span>
 </div>
 <p className="text-sm text-gray-600">35-60 km</p>
 <p className="text-xs text-gray-500 mt-2">Bragança, Vinhais</p>
 </div>
 {/* Zona 4 */}
 <div className="bg-orange-50 rounded-xl p-5 border-2 border-orange-200">
 <div className="flex justify-between items-center mb-2">
 <span className="font-bold text-gray-900">Zona 4</span>
 <span className="text-2xl font-black text-orange-600">45€</span>
 </div>
 <p className="text-sm text-gray-600">60-90 km</p>
 <p className="text-xs text-gray-500 mt-2">Miranda do Douro</p>
 </div>
 {/* Zona 5 */}
 <div className="bg-red-50 rounded-xl p-5 border-2 border-red-200">
 <div className="flex justify-between items-center mb-2">
 <span className="font-bold text-gray-900">Zona 5</span>
 <span className="text-2xl font-black text-red-600">55€</span>
 </div>
 <p className="text-sm text-gray-600">90-120 km</p>
 <p className="text-xs text-gray-500 mt-2">Vila Real, Lamego</p>
 </div>
 {/* Zona 6 */}
 <div className="bg-purple-50 rounded-xl p-5 border-2 border-purple-200">
 <div className="flex justify-between items-center mb-2">
 <span className="font-bold text-gray-900">Zona 6</span>
 <span className="text-2xl font-black text-purple-600">65€</span>
 </div>
 <p className="text-sm text-gray-600">&gt; 120 km</p>
 <p className="text-xs text-gray-500 mt-2">Chaves, Montalegre</p>
 </div>
 </div>
 <div className="mt-6 bg-gray-50 rounded-xl p-4">
 <p className="text-sm text-gray-600 text-center">
 <strong>Nota:</strong> Os custos de deslocação são calculados em função da distância desde a nossa base em Trás-os-Montes.
 Os acréscimos noturnos aplicam-se também aos custos de deslocação.
 </p>
 </div>
 </div>
 {/* Exemplo de Cálculo */}
 <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-blue-200">
 <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
 Exemplo de Cálculo
 </h3>
 <div className="max-w-2xl mx-auto">
 <div className="bg-white rounded-xl p-6 space-y-3">
 <div className="flex justify-between items-center">
 <span className="text-gray-700">Intervention à Bragança (Zone 3)</span>
 <span className="font-bold text-gray-900">35€</span>
 </div>
 <div className="flex justify-between items-center">
 <span className="text-gray-700">Main d'œuvre (2h, horaire normal)</span>
 <span className="font-bold text-gray-900">140€</span>
 </div>
 <div className="flex justify-between items-center">
 <span className="text-gray-700">Matériel (prise + câblage)</span>
 <span className="font-bold text-gray-900">25€</span>
 </div>
 <hr className="border-gray-300" />
 <div className="flex justify-between items-center text-lg">
 <span className="font-bold text-gray-900">TOTAL</span>
 <span className="text-3xl font-black" style={{ color: accentColor }}>200€</span>
 </div>
 </div>
 <p className="text-sm text-gray-600 text-center mt-4">
 Prix communiqué et validé avant le début des travaux. Aucune surprise.
 </p>
 </div>
 </div>
 </div>
 </section>
 );
}
export default React.memo(TauxHoraireDisplay);
