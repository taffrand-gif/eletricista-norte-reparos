import React from 'react';
// Barra fixa mobile — Ligar + WhatsApp lado a lado
// Visível APENAS em mobile (md:hidden)
// Posição fixed bottom, z-index elevado, 56px min height
import { useSite } from '@/contexts/SiteContext';
// memo removed from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { useAnalytics } from '@/hooks/useAnalytics';
import { useLocationContent, usePersonalizedWhatsAppMessage } from '@/hooks/useLocationContent';
function MobileStickyBar() {
 const { config } = useSite();
 const { trackPhoneClick, trackWhatsAppClick } = useAnalytics();
 const { arrivalTime } = useLocationContent();
 const whatsappMessage = usePersonalizedWhatsAppMessage(config.whatsappMessage);
 const whatsappUrl = `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;
 return (
 <div
 className="fixed bottom-0 left-0 right-0 z-[60] md:hidden flex shadow-[0_-4px_12px_rgba(0,0,0,0.15)]"
 style={{ minHeight: '64px' }}
 role="navigation"
 aria-label="Contacto rápido"
 >
 {/* Botão Ligar Agora — 50% esquerda */}
 <a
 href={`tel:+351${config.phone.replace(/\s/g, '')}`}
 onClick={() => trackPhoneClick(config.phone)}
 className="flex-1 flex flex-col items-center justify-center text-white font-bold active:opacity-90 transition-opacity min-h-[64px]"
 style={{
 backgroundColor: config.colors.primary}}
 aria-label={`Ligar agora para ${config.phone}`}
 >
 <div className="flex items-center gap-2">
 <Phone className="w-5 h-5" />
 <span className="text-base">LIGAR</span>
 </div>
 <span className="text-xs font-normal opacity-100 mt-0.5">{arrivalTime.split('-')[0]}</span>
 </a>
 {/* Botão WhatsApp — 50% direita */}
 <a
 href={whatsappUrl}
 onClick={() => trackWhatsAppClick('MobileStickyBar')}
 target="_blank"
 rel="noopener noreferrer"
 className="flex-1 flex flex-col items-center justify-center text-white font-bold active:opacity-90 transition-opacity min-h-[64px]"
 style={{
 backgroundColor: '#075E54', // WhatsApp dark green for better contrast
 }}
 aria-label="Contactar via WhatsApp"
 >
 <div className="flex items-center gap-2">
 <MessageCircle className="w-5 h-5" />
 <span className="text-base">WhatsApp</span>
 </div>
 <span className="text-xs font-normal opacity-90 mt-0.5">Resposta 5min</span>
 </a>
 </div>
 );
}
export default React.memo(MobileStickyBar);
