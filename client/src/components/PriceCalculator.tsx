import React from 'react';
// Design: Professional Service Layout
// - Thick borders on form elements
// - Clear visual hierarchy
// - Instant price calculation with zone + urgency
// - Formula: (basePrice + zonePrice) × urgencyMultiplier
import { useSite } from '@/contexts/SiteContext';
import { Calculator, Phone } from 'lucide-react';
import { useState, memo, useCallback } from 'react';
import { Button } from './ui/button';
import {
 Select,
 SelectContent,
 SelectItem,
 SelectTrigger,
 SelectValue,
} from './ui/select';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';

function PriceCalculator() {
 const { config } = useSite();
 const [selectedService, setSelectedService] = useState<string>('');
 const [selectedZone, setSelectedZone] = useState<string>('Z1');
 const [urgency, setUrgency] = useState<'normal' | 'urgent'>('normal');
 const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null);
 const [breakdown, setBreakdown] = useState<{ base: number; zone: number; total: number } | null>(null);

 const handleCalculate = useCallback(() => {
 const service = config.services.find(s => s.id === selectedService);
 const zone = config.pricingZones.find(z => z.zone === selectedZone);

 if (service && zone) {
 const zonePrice = parseInt(zone.price.replace(/[^\d]/g, ''), 10);
 const basePrice = service.basePrice;
 const multiplier = urgency === 'urgent' ? config.urgencyMultiplier : 1;
 const total = Math.round((basePrice + zonePrice) * multiplier);

 setBreakdown({ base: basePrice, zone: zonePrice, total });
 setCalculatedPrice(total);
 }
 }, [selectedService, selectedZone, urgency, config]);

 return (
 <section id="calculador-preco" className="py-20 bg-gray-50">
 <div className="container">
 <div className="max-w-2xl mx-auto">
 <div
 className="bg-white p-8 border-4 shadow-[8px_8px_0_0_rgba(0,0,0,0.1)]"
 style={{ borderColor: config.colors.primary }}
 >
 <div className="flex items-center gap-3 mb-6">
 <Calculator
 className="w-8 h-8"
 style={{ color: config.colors.primary }}
 />
 <h2 className="text-3xl font-black">Calculador de Preços</h2>
 </div>
 <p className="text-gray-600 mb-8">
 Obtenha uma estimativa rápida do custo do serviço.
 </p>

 <div className="space-y-6">
 {/* Zone selector */}
 <div>
 <Label htmlFor="zone" className="text-base font-bold mb-2 block">
 Zona de Intervenção
 </Label>
 <Select value={selectedZone} onValueChange={setSelectedZone}>
 <SelectTrigger
 id="zone"
 className="border-2 h-12 text-base font-medium"
 >
 <SelectValue placeholder="Selecione a zona..." />
 </SelectTrigger>
 <SelectContent>
 {config.pricingZones.map((zone) => (
 <SelectItem key={zone.zone} value={zone.zone}>
 {zone.name} — {zone.price} deslocação
 </SelectItem>
 ))}
 </SelectContent>
 </Select>
 {selectedZone && (
 <p className="text-sm text-gray-500 mt-1">
 {config.pricingZones.find(z => z.zone === selectedZone)?.cities}
 {' — '}
 {config.pricingZones.find(z => z.zone === selectedZone)?.time}
 </p>
 )}
 </div>

 {/* Service selector */}
 <div>
 <Label htmlFor="service" className="text-base font-bold mb-2 block">
 Tipo de Serviço
 </Label>
 <Select value={selectedService} onValueChange={setSelectedService}>
 <SelectTrigger
 id="service"
 className="border-2 h-12 text-base font-medium"
 >
 <SelectValue placeholder="Selecione..." />
 </SelectTrigger>
 <SelectContent>
 {config.services.map((service) => (
 <SelectItem key={service.id} value={service.id}>
 {service.label} (desde {service.basePrice}€)
 </SelectItem>
 ))}
 </SelectContent>
 </Select>
 </div>

 {/* Urgency selector */}
 <div>
 <Label className="text-base font-bold mb-3 block">Urgência</Label>
 <RadioGroup
 value={urgency}
 onValueChange={(v) => setUrgency(v as 'normal' | 'urgent')}
 >
 <div className="flex items-center space-x-2 mb-2">
 <RadioGroupItem value="normal" id="normal" />
 <Label htmlFor="normal" className="font-medium cursor-pointer">
 Normal
 </Label>
 </div>
 <div className="flex items-center space-x-2">
 <RadioGroupItem value="urgent" id="urgent" />
 <Label htmlFor="urgent" className="font-medium cursor-pointer">
 Urgente (+{Math.round((config.urgencyMultiplier - 1) * 100)}%)
 </Label>
 </div>
 </RadioGroup>
 </div>

 <Button
 onClick={handleCalculate}
 disabled={!selectedService}
 className="w-full h-14 text-lg font-bold shadow-[4px_4px_0_0_rgba(0,0,0,0.2)] hover:shadow-[2px_2px_0_0_rgba(0,0,0,0.2)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
 style={{
 backgroundColor: config.colors.primaryLight,
 color: 'white',
 }}
 >
 <Calculator className="w-5 h-5 mr-2" />
 Calcular Preço
 </Button>

 {/* Price display */}
 {calculatedPrice !== null && breakdown && (
 <div
 className="mt-6 p-6 border-4 text-center"
 style={{ borderColor: config.colors.primary }}
 >
 <p className="text-sm font-bold text-gray-600 mb-2">PREÇO ESTIMADO</p>

 <div className="bg-gray-50 rounded-lg p-3 mb-4 text-left text-sm space-y-1">
 <div className="flex justify-between">
 <span>Serviço base:</span>
 <span className="font-bold">{breakdown.base}€</span>
 </div>
 <div className="flex justify-between">
 <span>Deslocação ({selectedZone}):</span>
 <span className="font-bold">{breakdown.zone}€</span>
 </div>
 {urgency === 'urgent' && (
 <div className="flex justify-between text-red-600">
 <span>Supplemento urgência (+{Math.round((config.urgencyMultiplier - 1) * 100)}%):</span>
 <span className="font-bold">
 +{Math.round(breakdown.total - (breakdown.base + breakdown.zone))}€
 </span>
 </div>
 )}
 <div className="border-t pt-1 mt-1 flex justify-between font-bold text-base">
 <span>TOTAL:</span>
 <span style={{ color: config.colors.primary }}>{breakdown.total}€</span>
 </div>
 </div>

 <p className="text-xs text-gray-500 mt-2">
 *Valor aproximado, sujeito a confirmação após diagnóstico
 {urgency === 'urgent' && ' — serviço urgente'}
 </p>
 </div>
 )}

 {/* Secondary CTA */}
 <div className="mt-8 pt-6 border-t-2 border-gray-200 text-center">
 <p className="text-sm font-bold text-gray-600 mb-3">
 Quer um orçamento exato?
 </p>
 <a
 href={`tel:+351${config.phone.replace(/\s/g, '')}`}
 className="inline-flex items-center justify-center gap-2 font-bold text-white px-6 py-3 rounded-md shadow-[3px_3px_0_0_rgba(0,0,0,0.2)] min-h-[48px] min-w-[48px] bg-red-600 hover:bg-red-700 transition-colors"
 >
 <Phone className="w-4 h-4" />
 Ligue: {config.phone}
 </a>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>
 );
}

export default React.memo(PriceCalculator);
