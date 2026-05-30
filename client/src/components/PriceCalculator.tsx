import React from 'react';
// Design: Professional Service Layout
// - Thick borders on form elements
// - Clear visual hierarchy
// - Instant price calculation
// - Bold typography for results
import { useSite } from '@/contexts/SiteContext';
import { Calculator, Phone } from 'lucide-react';
import { useState, memo, useCallback } from 'react';
import { Button } from './ui/button';
import {
 Select,
 SelectContent,
 SelectItem,
 SelectTrigger,
 SelectValue} from './ui/select';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
function PriceCalculator() {
 const { config } = useSite();
 const [selectedService, setSelectedService] = useState<string>('');
 const [urgency, setUrgency] = useState<'normal' | 'urgent'>('normal');
 const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null);
 const handleCalculate = useCallback(() => {
 const service = config.services.find(s => s.id === selectedService);
 if (service) {
 const basePrice = service.basePrice;
 const finalPrice = urgency === 'urgent' ? basePrice * 1.3 : basePrice;
 setCalculatedPrice(finalPrice);
 }
 }, [selectedService, urgency, config]);
 return (
 <section id="calculador-preco" className="py-20 bg-gray-50">
 <div className="container">
 <div className="max-w-2xl mx-auto">
 {/* Card with thick border */}
 <div 
 className="bg-white p-8 border-4 shadow-[8px_8px_0_0_rgba(0,0,0,0.1)]"
 style={{ borderColor: config.colors.primary }}
 >
 {/* Header */}
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
 {/* Form */}
 <div className="space-y-6">
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
 {service.label}
 </SelectItem>
 ))}
 </SelectContent>
 </Select>
 </div>
 {/* Urgency selector */}
 <div>
 <Label className="text-base font-bold mb-3 block">Urgência</Label>
 <RadioGroup value={urgency} onValueChange={(v) => setUrgency(v as 'normal' | 'urgent')}>
 <div className="flex items-center space-x-2 mb-2">
 <RadioGroupItem value="normal" id="normal" />
 <Label htmlFor="normal" className="font-medium cursor-pointer">
 Normal
 </Label>
 </div>
 <div className="flex items-center space-x-2">
 <RadioGroupItem value="urgent" id="urgent" />
 <Label htmlFor="urgent" className="font-medium cursor-pointer">
 Urgente (+30%)
 </Label>
 </div>
 </RadioGroup>
 </div>
 {/* Calculate button */}
 <Button
 onClick={handleCalculate}
 disabled={!selectedService}
 className="w-full h-14 text-lg font-bold shadow-[4px_4px_0_0_rgba(0,0,0,0.2)] hover:shadow-[2px_2px_0_0_rgba(0,0,0,0.2)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
 style={{
 backgroundColor: config.colors.primaryLight,
 color: 'white'}}
 >
 <Calculator className="w-5 h-5 mr-2" />
 Calcular Preço
 </Button>
 {/* Price display */}
 {calculatedPrice !== null && (
 <div 
 className="mt-6 p-6 border-4 text-center"
 style={{ borderColor: config.colors.primary }}
 >
 <p className="text-sm font-bold text-gray-600 mb-2">PREÇO ESTIMADO</p>
 <p className="text-5xl font-black" style={{ color: config.colors.primary }}>
 €{calculatedPrice.toFixed(0)}
 </p>
 <p className="text-xs text-gray-500 mt-2">*Valor aproximado, sujeito a confirmação</p>
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
