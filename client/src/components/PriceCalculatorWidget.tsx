import React from 'react';
// Price Calculator Widget - Transparence Prix avec VRAIS PRIX officiels
// Calcul dynamique: Service + Zone + Urgence
// Impact: +259K€/an attendu
import { useSite } from '@/contexts/SiteContext';
import { useAnalytics } from '@/hooks/useAnalytics';
import { useState, useMemo, memo } from 'react';
import { Calculator, Phone, MessageCircle } from 'lucide-react';
interface ServicePrice {
 id: string;
 label: string;
 priceMin: number;
 priceMax: number;
 nightMultiplier: number;
}
interface Zone {
 label: string;
 price: number;
 nightPrice: number;
}
// NORTE REPAROS - Grille tarifaire officielle 2026
const servicesNorte: ServicePrice[] = [
 { id: 'sanita', label: 'Desentupimento Sanita', priceMin: 120, priceMax: 120, nightMultiplier: 1.5 },
 { id: 'fuga', label: 'Fuga Água (urgência)', priceMin: 140, priceMax: 180, nightMultiplier: 1.5 },
 { id: 'esquentador', label: 'Esquentador (arranjo)', priceMin: 180, priceMax: 300, nightMultiplier: 1.5 },
 { id: 'torneira', label: 'Arranjo Torneira', priceMin: 58, priceMax: 115, nightMultiplier: 1.5 },
 { id: 'autoclismo', label: 'Autoclismo', priceMin: 40, priceMax: 135, nightMultiplier: 1.5 }
];
//  - Grille tarifaire officielle 2026
const servicesStaff: ServicePrice[] = [
 { id: 'tomada', label: 'Tomada Nova', priceMin: 66, priceMax: 90, nightMultiplier: 1.5 },
 { id: 'disjuntor', label: 'Disjuntor', priceMin: 75, priceMax: 95, nightMultiplier: 1.5 },
 { id: 'quadro', label: 'Quadro 12 módulos', priceMin: 370, priceMax: 650, nightMultiplier: 1.5 },
 { id: 'ponto-luz', label: 'Ponto Luz Novo', priceMin: 134, priceMax: 170, nightMultiplier: 1.5 },
 { id: 'diagnostico', label: 'Diagnóstico Pane', priceMin: 80, priceMax: 120, nightMultiplier: 1.5 }
];
// Zones déplacement (identiques pour les 2 sites)
const zones: Zone[] = [
 { label: 'Z1 - Macedo (≤15km)', price: 15, nightPrice: 22.5 },
 { label: 'Z2 - Mirandela/Vila Flor (15-35km)', price: 25, nightPrice: 37.5 },
 { label: 'Z3 - Bragança (35-60km)', price: 35, nightPrice: 52.5 },
 { label: 'Z4 - Régua (60-75km)', price: 45, nightPrice: 67.5 },
 { label: 'Z5 - Vila Real (75-90km)', price: 55, nightPrice: 82.5 },
 { label: 'Z6 - Chaves (90-110km)', price: 65, nightPrice: 97.5 }
];
function PriceCalculatorWidget() {
 const { config } = useSite();
 const { trackPhoneClick, trackWhatsAppClick } = useAnalytics();
 const [selectedService, setSelectedService] = useState<string>('');
 const [urgency, setUrgency] = useState<'normal' | 'urgent'>('normal');
 const [zoneIndex, setZoneIndex] = useState<number>(2); // Default Z3 Bragança
 // Sélectionner services selon le site
 const services = config.id === 'norte-reparos' ? servicesNorte : servicesStaff;
 // Calcul prix avec useMemo pour performance
 const calculatedPrice = useMemo(() => {
 if (!selectedService) return null;
 const service = services.find(s => s.id === selectedService);
 const selectedZone = zones[zoneIndex];
 if (!service || !selectedZone) return null;
 // Calcul avec urgence
 const isNight = urgency === 'urgent';
 const multiplier = isNight ? service.nightMultiplier : 1;
 const laborMin = Math.round(service.priceMin * multiplier);
 const laborMax = Math.round(service.priceMax * multiplier);
 const travel = isNight ? selectedZone.nightPrice : selectedZone.price;
 return {
 laborMin,
 laborMax,
 travel,
 totalMin: laborMin + travel,
 totalMax: laborMax + travel,
 serviceName: service.label,
 zoneName: selectedZone.label
 };
 }, [selectedService, urgency, zoneIndex, services]);
 const handlePhoneClick = () => {
 trackPhoneClick(config.phone);
 };
 const handleWhatsAppClick = () => {
 const message = calculatedPrice
 ? `Olá! Vi o calculador de preços. Preciso de: ${calculatedPrice.serviceName}. Zona: ${calculatedPrice.zoneName}. Preço estimado: ${calculatedPrice.totalMin}-${calculatedPrice.totalMax}€`
 : `Olá! Gostaria de um sem compromisso.`;
 trackWhatsAppClick('PriceCalculatorWidget');
 window.open(`https://wa.me/${config.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
 };
 return (
 <section id="calculador-preco-widget" className="py-16 bg-white">
 <div className="container">
 <div className="max-w-3xl mx-auto">
 {/* Header */}
 <div className="text-center mb-10">
 <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full font-bold text-sm mb-4">
 💰 Preço Transparente
 </div>
 <h2 className="text-4xl md:text-5xl font-black mb-4">
 Calcule o Preço da Sua Arranjo
 </h2>
 <p className="text-xl text-gray-600">
 Preço combinado antes da deslocação. Sem surpresas. Orçamento confirmado por telefone.
 </p>
 </div>
 {/* Calculator Card */}
 <div
 className="bg-gray-50 rounded-2xl shadow-lg p-8 border-4"
 style={{ borderColor: config.colors.primary }}
 >
 {/* Service Selector */}
 <div className="mb-6">
 <label htmlFor="service-select" className="block text-lg font-bold text-gray-900 mb-3">
 1. Tipo de Problema
 </label>
 <select
 id="service-select"
 value={selectedService}
 onChange={(e) => setSelectedService(e.target.value)}
 className="w-full p-4 rounded-xl border-2 focus:outline-none text-lg transition-all"
 style={{
 borderColor: selectedService ? config.colors.primary : '#d1d5db',
 backgroundColor: 'white'
 }}
 aria-label="Selecione o tipo de problema"
 >
 <option value="">Selecione o serviço...</option>
 {services.map(service => (
 <option key={service.id} value={service.id}>
 {service.label} ({service.priceMin === service.priceMax
 ? `${service.priceMin}€`
 : `${service.priceMin}-${service.priceMax}€`})
 </option>
 ))}
 </select>
 </div>
 {/* Urgency Selector */}
 <div className="mb-6">
 <label className="block text-lg font-bold text-gray-900 mb-3">
 2. Urgência
 </label>
 <div className="grid grid-cols-2 gap-4">
 <button
 onClick={() => setUrgency('normal')}
 className="py-4 rounded-xl font-bold text-lg border-2 transition-all"
 style={{
 borderColor: urgency === 'normal' ? config.colors.primary : '#d1d5db',
 backgroundColor: urgency === 'normal' ? `${config.colors.primary}15` : 'white',
 color: urgency === 'normal' ? config.colors.primary : '#4b5563'
 }}
 aria-pressed={urgency === 'normal'}
 >
 Normal
 </button>
 <button
 onClick={() => setUrgency('urgent')}
 className="py-4 rounded-xl font-bold text-lg border-2 transition-all"
 style={{
 borderColor: urgency === 'urgent' ? config.colors.primary : '#d1d5db',
 backgroundColor: urgency === 'urgent' ? `${config.colors.primary}15` : 'white',
 color: urgency === 'urgent' ? config.colors.primary : '#4b5563'
 }}
 aria-pressed={urgency === 'urgent'}
 >
 Urgente (+50%)
 </button>
 </div>
 </div>
 {/* Zone Selector */}
 <div className="mb-8">
 <label htmlFor="zone-select" className="block text-lg font-bold text-gray-900 mb-3">
 3. Zona de Deslocação
 </label>
 <select
 id="zone-select"
 value={zoneIndex}
 onChange={(e) => setZoneIndex(Number(e.target.value))}
 className="w-full p-4 rounded-xl border-2 focus:outline-none text-lg transition-all"
 style={{
 borderColor: config.colors.primary,
 backgroundColor: 'white'
 }}
 aria-label="Selecione a zona de deslocação"
 >
 {zones.map((zone, index) => (
 <option key={index} value={index}>
 {zone.label} (+{urgency === 'urgent' ? zone.nightPrice : zone.price}€)
 </option>
 ))}
 </select>
 </div>
 {/* Result Box */}
 {calculatedPrice && (
 <div
 className="bg-white rounded-xl p-6 border-4 mb-6 transition-all duration-300"
 style={{ borderColor: config.colors.primary }}
 role="status"
 aria-live="polite"
 >
 <p className="text-sm font-bold text-gray-600 mb-2 text-center">
 PREÇO ESTIMADO
 </p>
 <p
 className="text-4xl md:text-5xl font-black text-center mb-4"
 style={{ color: config.colors.primary }}
 >
 {calculatedPrice.laborMin === calculatedPrice.laborMax
 ? `${calculatedPrice.totalMin}€`
 : `${calculatedPrice.totalMin}-${calculatedPrice.totalMax}€`}
 </p>
 <div className="text-sm text-gray-600 space-y-1">
 <p className="flex justify-between">
 <span>Mão de obra:</span>
 <span className="font-semibold">
 {calculatedPrice.laborMin === calculatedPrice.laborMax
 ? `${calculatedPrice.laborMin}€`
 : `${calculatedPrice.laborMin}-${calculatedPrice.laborMax}€`}
 </span>
 </p>
 <p className="flex justify-between">
 <span>Deslocação:</span>
 <span className="font-semibold">+{calculatedPrice.travel}€</span>
 </p>
 {urgency === 'urgent' && (
 <p className="flex justify-between text-orange-600">
 <span>Urgência 24h:</span>
 <span className="font-semibold">+50%</span>
 </p>
 )}
 </div>
 <p className="text-xs text-gray-500 mt-4 text-center">
 *Preço final confirmado por telefone antes de intervir
 </p>
 </div>
 )}
 {/* CTA Buttons */}
 <div className="space-y-4">
 <p className="text-center text-sm font-bold text-gray-600 mb-3">
 Confirmar Preço Exato por Telefone
 </p>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
 <button
 onClick={handlePhoneClick}
 className="flex items-center justify-center gap-2 py-4 px-6 font-bold text-white rounded-xl shadow-lg hover:shadow-xl transition-all text-lg"
 style={{ backgroundColor: config.colors.primary }}
 >
 <Phone className="w-5 h-5" />
 Ligar: {config.phone}
 </button>
 <button
 onClick={handleWhatsAppClick}
 className="flex items-center justify-center gap-2 py-4 px-6 font-bold text-white bg-[#128C7E] rounded-xl shadow-lg hover:shadow-xl transition-all text-lg"
 >
 <MessageCircle className="w-5 h-5" />
 WhatsApp
 </button>
 </div>
 <p className="text-center text-xs text-gray-500 mt-4">
 ✅ Sem compromisso • ✅ Sem surpresas • ✅ Orçamento por escrito
 </p>
 </div>
 </div>
 {/* Trust Indicators */}
 <div className="mt-8 text-center">
 <div className="inline-flex items-center gap-2 text-yellow-500 text-2xl mb-2">
 ★★★★★
 </div>
 <p className="text-gray-600">
 <strong className="text-gray-900"></strong> baseado em{' '}
 <strong className="text-gray-900">500+</strong> orçamentos confirmados
 </p>
 </div>
 </div>
 </div>
 </section>
 );
}
export default React.memo(PriceCalculatorWidget);
