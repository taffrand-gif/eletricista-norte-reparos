// Botão flutuante "Ligar Agora" para mobile
// Aparece apenas em dispositivos móveis (md:hidden)
// Click-to-call direto

import { useSite } from '@/contexts/SiteContext';
import { Phone } from 'lucide-react';

export default function MobileCallButton() {
 const { config } = useSite();

 return (
 <a
 href={`tel:+351${config.phone.replace(/\s/g, '')}`}
 className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex items-center justify-center gap-3 py-4 text-white font-bold text-lg shadow-[0_-4px_20px_rgba(0,0,0,0.3)] transition-all duration-300 active:scale-95 focus:outline-2 focus:outline-offset-2 focus:outline-white"
 style={{ backgroundColor: config.colors.primary }}
 aria-label={`Ligar agora para ${config.phone}`}
 >
 <Phone className="w-5 h-5 animate-pulse" aria-hidden="true" />
 <span>LIGAR AGORA: {config.phone}</span>
 </a>
 );
}
