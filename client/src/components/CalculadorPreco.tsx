import React, { useState, useMemo } from 'react';
import { useSite } from '@/contexts/SiteContext';
import { useLocationContent, usePersonalizedWhatsAppMessage } from '@/hooks/useLocationContent';
// memo removed from 'react';
const zones = [
 { label: 'Trás-os-Montes (Zona 1)', price: 15 },
 { label: 'Mirandela / Vila Flor (Zona 2)', price: 25 },
 { label: 'Bragança / Vinhais (Zona 3)', price: 35 },
 { label: 'Miranda do Douro (Zona 4)', price: 45 },
 { label: 'Vila Real / Lamego (Zona 5)', price: 55 },
 { label: 'Chaves / Montalegre (Zona 6)', price: 65 },
];
const servicesElec = [
 { label: 'Tomada / Interruptor', min: 35, max: 70 },
 { label: 'Avaria / Diagnóstico', min: 70, max: 140 },
 { label: 'Substituição Quadro Elétrico', min: 210, max: 420 },
 { label: 'certificação elétrica', min: 140, max: 280 },
 { label: 'Instalação Completa', min: 280, max: 700 },
];
const servicesPlumb = [
 { label: 'Arranjo de Torneira', min: 60, max: 80 },
 { label: 'Deteção de Fuga', min: 100, max: 150 },
 { label: 'Substituição de Cano', min: 150, max: 250 },
 { label: 'Desentupimento Simples', min: 40, max: 60 },
 { label: 'Fuga de Água Visível', min: 60, max: 90 },
 { label: 'Fuga Oculta (deteção + arranjo)', min: 120, max: 250 },
 { label: 'Esquentador (instalação)', min: 200, max: 400 },
 { label: 'Esquentador (arranjo)', min: 50, max: 120 },
 { label: 'Casa de Banho Completa', min: 800, max: 1800 },
];
const examplesPlumb = [
 { icon: '🚰', label: 'Desentupimento de canalização', price: '60-120€' },
 { icon: '💧', label: 'Arranjo de torneira', price: '40-80€' },
 { icon: '🔥', label: 'Instalação de esquentador', price: '200-400€' },
 { icon: '🔍', label: 'Deteção de fuga', price: '150€ (FLIR: 280€)' },
];
const examplesElec = [
 { icon: '🔌', label: 'Instalação de tomada', price: '50-105€' },
 { icon: '⚡', label: 'Arranjo de quadro elétrico', price: '105-210€' },
 { icon: '💡', label: 'Instalação de candeeiro', price: '50-105€' },
 { icon: '📋', label: 'Certificação elétrica', price: '150-350€' },
];
function CalculadorPreco() {
 const { config } = useSite();
 const { city, priceAdjustment } = useLocationContent();
 const isPlumber = config.id === 'norte-reparos';
 const [zoneIdx, setZoneIdx] = useState(0);
 const [serviceIdx, setServiceIdx] = useState(0);
 const [isUrgent, setIsUrgent] = useState(false);
 const services = isPlumber ? servicesPlumb : servicesElec;
 const examples = isPlumber ? examplesPlumb : examplesElec;
 const phone = isPlumber ? '928 484 451' : '932 321 892';
 const whatsapp = isPlumber ? '351928484451' : '351932321892';
 const accentColor = isPlumber ? '#0e7490' : '#FF6B35';
 const result = useMemo(() => {
 const zone = zones[zoneIdx];
 const service = services[serviceIdx];
 const mult = isUrgent ? 1.5 : 1;
 // Apply location-based price adjustment
 const travelBase = zone.price + priceAdjustment;
 const travel = Math.round(travelBase * mult);
 const laborMin = Math.round(service.min * mult);
 const laborMax = Math.round(service.max * mult);
 return {
 travel,
 travelBase: zone.price,
 locationAdjustment: priceAdjustment,
 laborMin,
 laborMax,
 totalMin: travel + laborMin,
 totalMax: travel + laborMax,
 zoneName: zone.label,
 serviceName: service.label};
 }, [zoneIdx, serviceIdx, isUrgent, services, priceAdjustment]);
 const waMsg = encodeURIComponent(
 `Olá! Estou em ${city}. Preciso de ${result.serviceName} em ${result.zoneName}. Estimativa: ${result.totalMin}€-${result.totalMax}€. Podem vir?`
 );
 return (
 <section className="py-16 bg-white">
 <div className="container mx-auto px-4 max-w-2xl">
 <div className="text-center mb-10">
 <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
 Calcule o Preço da Sua Intervenção
 </h2>
 <p className="text-lg text-gray-600">
 Estimativa após contacto — sem ter de falar com ninguém
 </p>
 </div>
 {/* Exemplos de Preços */}
 <div className="mb-10">
 <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
 Exemplos de Preços
 </h3>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
 {examples.map((example, idx) => (
 <div
 key={idx}
 className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border-2 border-gray-100"
 >
 <div className="flex items-center gap-3">
 <span className="text-3xl">{example.icon}</span>
 <div className="flex-1">
 <p className="text-gray-900 font-medium">{example.label}</p>
 <p className="text-xl font-bold text-gray-900">
 {example.price}
 </p>
 </div>
 </div>
 </div>
 ))}
 </div>
 <p className="text-sm text-gray-500 text-center mt-4">
 * Preços indicativos. Valores finais dependem da complexidade e materiais necessários.
 </p>
 </div>
 <div className="bg-gray-50 rounded-2xl shadow-lg p-8">
 {/* Zone */}
 <div className="mb-6">
 <label htmlFor="calc-zone" className="block text-sm font-bold text-gray-700 mb-2">📍 Onde está?</label>
 <select
 id="calc-zone"
 value={zoneIdx}
 onChange={e => setZoneIdx(Number(e.target.value))}
 className="w-full p-4 rounded-xl border-2 border-gray-200 focus:outline-none text-lg"
 style={{ borderColor: accentColor }}
 aria-label="Selecione a sua zona"
 >
 {zones.map((z, i) => (
 <option key={i} value={i}>{z.label} — {z.price}€</option>
 ))}
 </select>
 </div>
 {/* Service */}
 <div className="mb-6">
 <label htmlFor="calc-service" className="block text-sm font-bold text-gray-700 mb-2">🔧 Que serviço precisa?</label>
 <select
 id="calc-service"
 value={serviceIdx}
 onChange={e => setServiceIdx(Number(e.target.value))}
 className="w-full p-4 rounded-xl border-2 border-gray-200 focus:outline-none text-lg"
 style={{ borderColor: accentColor }}
 aria-label="Selecione o tipo de serviço"
 >
 {services.map((s, i) => (
 <option key={i} value={i}>{s.label} — {s.min}€ a {s.max}€</option>
 ))}
 </select>
 </div>
 {/* Urgency toggle */}
 <div className="mb-8">
 <label className="block text-sm font-bold text-gray-700 mb-2">🕐 É urgência noturna ou fim de semana?</label>
 <div className="flex gap-4">
 <button
 onClick={() => setIsUrgent(false)}
 className="flex-1 py-3 rounded-xl font-bold text-lg border-2 transition-all"
 style={{
 borderColor: !isUrgent ? accentColor : '#e5e7eb',
 backgroundColor: !isUrgent ? `${accentColor}15` : 'white',
 color: !isUrgent ? '#1f2937' : '#6b7280'}}
 aria-pressed={!isUrgent}
 >
 Não
 </button>
 <button
 onClick={() => setIsUrgent(true)}
 className="flex-1 py-3 rounded-xl font-bold text-lg border-2 transition-all"
 style={{
 borderColor: isUrgent ? '#dc2626' : '#e5e7eb',
 backgroundColor: isUrgent ? '#fef2f2' : 'white',
 color: isUrgent ? '#1f2937' : '#6b7280'}}
 aria-pressed={isUrgent}
 >
 Sim (+50%)
 </button>
 </div>
 </div>
 {/* Result */}
 <div className="bg-white rounded-xl p-6 border-2" style={{ borderColor: accentColor }}>
 <div className="space-y-3 mb-4">
 <div className="flex justify-between text-gray-600">
 <span>Deslocação:</span>
 <span className="font-bold">{result.travel}€</span>
 </div>
 {result.locationAdjustment > 0 && (
 <div className="flex justify-between text-sm text-blue-600">
 <span>Ajuste distância ({city}):</span>
 <span className="font-bold">+{result.locationAdjustment}€</span>
 </div>
 )}
 <div className="flex justify-between text-gray-600">
 <span>Mão de obra (estimativa):</span>
 <span className="font-bold">{result.laborMin}€ - {result.laborMax}€</span>
 </div>
 {isUrgent && (
 <div className="flex justify-between text-red-600 text-sm">
 <span>Inclui acréscimo urgência (+50% deslocação e mão de obra)</span>
 </div>
 )}
 <hr />
 <div className="flex justify-between items-center">
 <span className="text-lg font-bold text-gray-900">TOTAL ESTIMADO:</span>
 <span className="text-3xl font-black text-gray-900">
 {result.totalMin}€ - {result.totalMax}€
 </span>
 </div>
 </div>
 <p className="text-xs text-gray-500 mb-6">
 * Estimativa para {city}. Preço exato comunicado ao telefone antes de sair. Sem surpresas garantido. Noturno/fim de semana: +50% sobre deslocação e mão de obra.
 </p>
 <a
 href={`https://wa.me/${whatsapp}?text=${waMsg}`}
 target="_blank"
 rel="noopener noreferrer"
 className="block w-full text-center font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
 style={{ backgroundColor: '#0D7C66', color: '#ffffff' }}
 >
 💬 Confirmar Disponibilidade no WhatsApp
 </a>
 </div>
 </div>
 </div>
 </section>
 );
}
export default React.memo(CalculadorPreco);
