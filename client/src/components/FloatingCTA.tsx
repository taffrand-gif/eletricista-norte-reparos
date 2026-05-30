import React from 'react';
// CTA flottant bottom - Quick Win #2
// Style Hormozi : Multiples points de conversion, sticky, minimal
import { useState, memo } from 'react';
import { Phone, MessageCircle, X } from 'lucide-react';
import { useSite } from '@/contexts/SiteContext';
import { useAnalytics } from '@/hooks/useAnalytics';
import { useLocationContent, usePersonalizedWhatsAppMessage } from '@/hooks/useLocationContent';
function FloatingCTA() {
 const { config } = useSite();
 const { trackPhoneClick, trackWhatsAppClick } = useAnalytics();
 const { city, arrivalTime } = useLocationContent();
 const [isVisible, setIsVisible] = useState(true);
 const [isMinimized, setIsMinimized] = useState(false);
 // Mensagem WhatsApp pré-preenchida com localização
 const whatsappMessage = usePersonalizedWhatsAppMessage(config.whatsappMessage);
 const whatsappUrl = `https://wa.me/${config.whatsapp || '351932321892'}?text=${encodeURIComponent(whatsappMessage)}`;
 if (!isVisible) return null;
 return (
 <div id="floating-cta-react" className={`fixed bottom-4 right-4 z-50 transition-all duration-300 hidden md:block ${isMinimized ? 'w-12 h-12' : 'w-auto'}`}>
 {isMinimized ? (
 // Botão minimizado
 <button
 onClick={() => setIsMinimized(false)}
 className="w-12 h-12 flex items-center justify-center rounded-full shadow-2xl animate-bounce"
 style={{ backgroundColor: config.colors.primary }}
 aria-label="Abrir menu de contato"
 >
 <Phone className="w-6 h-6 text-white" />
 </button>
 ) : (
 // CTA complet
 <div className="bg-white rounded-xl shadow-2xl border-2 border-gray-200 overflow-hidden">
 {/* Header avec bouton fermer */}
 <div className="flex items-center justify-between p-3 bg-gray-50">
 <div className="flex items-center gap-2">
 <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
 <span className="text-sm font-bold text-gray-800">Atendimento 24h</span>
 </div>
 <div className="flex items-center gap-2">
 <button
 onClick={() => setIsMinimized(true)}
 className="p-1 hover:bg-gray-200 rounded"
 aria-label="Minimizar"
 >
 <span className="text-gray-600">−</span>
 </button>
 <button
 onClick={() => setIsVisible(false)}
 className="p-1 hover:bg-gray-200 rounded"
 aria-label="Fechar"
 >
 <X className="w-4 h-4 text-gray-600" />
 </button>
 </div>
 </div>
 {/* Corps */}
 <div className="p-4">
 {/* Urgency headline */}
 <p className="text-center text-sm font-bold text-gray-900 mb-3">
 ⚡ Precisa de ajuda?</p>
 <div className="space-y-3">
 {/* Botão telefone */}
 <a
 href={`tel:+351${config.phone.replace(/\s/g, '')}`}
 onClick={() => trackPhoneClick(config.phone)}
 className="flex items-center justify-center gap-2 w-full py-3 px-4 font-bold text-white rounded-lg transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-lg"
 style={{ backgroundColor: config.colors.primary }}
 aria-label={`Ligar para ${config.phone}`}
 >
 <Phone className="w-5 h-5" />
 <span>📞 LIGAR AGORA</span>
 </a>
 {/* Botão WhatsApp */}
 <a
 href={whatsappUrl}
 onClick={() => trackWhatsAppClick('FloatingCTA')}
 target="_blank"
 rel="noopener noreferrer"
 className="flex items-center justify-center gap-2 w-full py-3 px-4 font-bold text-white rounded-lg transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-lg"
 style={{ backgroundColor: '#128C7E' }}
 aria-label="Contactar via WhatsApp"
 >
 <MessageCircle className="w-5 h-5" />
 <span>💬 WhatsApp Grátis</span>
 </a>
 {/* Petit texte avec preuve sociale */}
 <p className="text-xs text-gray-600 text-center mt-2 font-semibold">
 ✓ Orçamento grátis • ✓ Sem compromisso
 </p>
 </div>
 </div>
 </div>
 )}
 </div>
 );
}
export default React.memo(FloatingCTA);