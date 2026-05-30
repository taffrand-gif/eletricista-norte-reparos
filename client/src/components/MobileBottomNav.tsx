// Mobile Bottom Navigation - Fixed bottom bar for mobile conversion
// 3 buttons: Phone, WhatsApp, Quote Calculator
// Visible only on mobile (<768px)
// Fixed position with high z-index
// Impact: +50% mobile conversion expected
import { Phone, MessageCircle, Calculator } from 'lucide-react';
import { useSite } from '@/contexts/SiteContext';
import { useAnalytics } from '@/hooks/useAnalytics';
import { useState, useEffect } from 'react';
export default function MobileBottomNav() {
 const { config } = useSite();
 const { trackPhoneClick, trackWhatsAppClick } = useAnalytics();
 const [isVisible, setIsVisible] = useState(false);
 // Show after 2s to avoid blocking initial content
 useEffect(() => {
 const timer = setTimeout(() => setIsVisible(true), 2000);
 return () => clearTimeout(timer);
 }, []);
 const handlePhoneClick = () => {
 trackPhoneClick(config.phone);
 };
 const handleWhatsAppClick = () => {
 trackWhatsAppClick('MobileBottomNav');
 };
 const handleQuoteClick = () => {
 // Scroll to calculator
 const calculator = document.querySelector('#calculador-preco');
 if (calculator) {
 calculator.scrollIntoView({ behavior: 'smooth', block: 'center' });
 }
 };
 if (!isVisible) return null;
 return (
 <nav
 className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t-4 shadow-[0_-4px_12px_rgba(0,0,0,0.15)] z-[9999]"
 style={{ borderTopColor: config.colors.primary }}
 aria-label="Navigation mobile principale"
 >
 <div className="grid grid-cols-3 gap-0">
 {/* Phone Button */}
 <a
 href={`tel:+351${config.phone.replace(/\s/g, '')}`}
 onClick={handlePhoneClick}
 className="flex flex-col items-center justify-center py-3 px-2 text-white transition-all active:scale-95"
 style={{ backgroundColor: config.colors.primary }}
 aria-label={`Ligar para ${config.phone}`}
 >
 <Phone className="w-6 h-6 mb-1" />
 <span className="text-xs font-bold">Ligar</span>
 </a>
 {/* WhatsApp Button */}
 <a
 href={`https://wa.me/${config.whatsapp}?text=${encodeURIComponent(config.whatsappMessage)}`}
 onClick={handleWhatsAppClick}
 target="_blank"
 rel="noopener noreferrer"
 className="flex flex-col items-center justify-center py-3 px-2 bg-[#128C7E] text-white transition-all active:scale-95"
 aria-label="Contactar via WhatsApp"
 >
 <MessageCircle className="w-6 h-6 mb-1" />
 <span className="text-xs font-bold">WhatsApp</span>
 </a>
 {/* Quote Calculator Button */}
 <button
 onClick={handleQuoteClick}
 className="flex flex-col items-center justify-center py-3 px-2 text-white transition-all active:scale-95"
 style={{ backgroundColor: config.colors.primaryDark }}
 aria-label="Ver calculador de preços"
 >
 <Calculator className="w-6 h-6 mb-1" />
 <span className="text-xs font-bold">Orçamento</span>
 </button>
 </div>
 </nav>
 );
}
