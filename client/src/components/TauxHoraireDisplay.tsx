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
 <div className="grid md:grid-cols-2 gap-6 mb-8">
 {/* Dias úteis */}
 <div className="bg-gray-50 rounded-xl p-6 text-center">
 <div className="text-4xl mb-3">🕐</div>
 <h4 className="font-bold text-gray-900 mb-2">Dias úteis</h4>
 <p className="text-sm text-gray-600 mb-3">Seg-Sex 9h–17h</p>
 <div className="text-4xl font-black" style={{ color: accentColor }}>
 70€<span className="text-xl text-gray-600">/h</span>
 </div>
 <p className="text-sm text-gray-600 mt-3">+ deslocação 30€</p>
 </div>
 {/* Noite, fins de semana e feriados */}
 <div className="bg-red-50 rounded-xl p-6 text-center border-2 border-red-200">
 <div className="text-4xl mb-3">🌙</div>
 <h4 className="font-bold text-gray-900 mb-2">Noite, fins de semana e feriados</h4>
 <p className="text-sm text-gray-600 mb-3">17h–9h, sábado, domingo, feriados</p>
 <div className="text-4xl font-black text-red-600">
 100€<span className="text-xl text-gray-600">/h</span>
 </div>
 <p className="text-sm text-gray-600 mt-3">+ deslocação 50€</p>
 </div>
 </div>
 <p className="text-sm text-gray-600 text-center">Cada hora começada é devida.</p>
 </div>
 {/* Custos de Deslocação */}
 <div className="bg-white rounded-2xl shadow-xl p-8">
 <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
 Deslocação — preço único
 </h3>
 <div className="grid md:grid-cols-2 gap-4">
 <div className="bg-green-50 rounded-xl p-5 border-2 border-green-200">
 <div className="flex justify-between items-center mb-2">
 <span className="font-bold text-gray-900">Dias úteis 9h–17h</span>
 <span className="text-2xl font-black text-green-600">30€</span>
 </div>
 </div>
 <div className="bg-purple-50 rounded-xl p-5 border-2 border-purple-200">
 <div className="flex justify-between items-center mb-2">
 <span className="font-bold text-gray-900">Noite, fins de semana e feriados</span>
 <span className="text-2xl font-black text-purple-600">50€</span>
 </div>
 </div>
 </div>
 <div className="mt-6 bg-gray-50 rounded-xl p-4">
 <p className="text-sm text-gray-600 text-center">
 <strong>Nota:</strong> O preço da deslocação é o mesmo para qualquer localidade servida.
 </p>
 </div>
 </div>
 </div>
 </section>
 );
}
export default React.memo(TauxHoraireDisplay);
