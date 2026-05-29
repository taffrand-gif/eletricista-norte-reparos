// Badge "Orçamento Gratuito" bem visível
// Aparece abaixo do hero, acima dos serviços

import { useSite } from '@/contexts/SiteContext';
import { Shield, Phone } from 'lucide-react';

export default function OrcamentoGratuitoBadge() {
 const { config } = useSite();

 return (
 <section className="py-6 bg-gradient-to-r from-green-500 to-green-600">
 <div className="container mx-auto px-4">
 <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-white">
 <div className="flex items-center gap-3">
 <Shield className="w-8 h-8" />
 <div>
 <span className="text-2xl font-black tracking-wide">ORÇAMENTO GRATUITO</span>
 <p className="text-green-100 text-sm">Sem compromisso • Resposta em 24h</p>
 </div>
 </div>
 <a
 href={`tel:+351${config.phone.replace(/\s/g, '')}`}
 className="inline-flex items-center gap-2 bg-white text-green-700 font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
 >
 <Phone className="w-5 h-5" />
 <span>Ligue: {config.phone}</span>
 </a>
 </div>
 </div>
 </section>
 );
}
