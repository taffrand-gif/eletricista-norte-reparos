import React from 'react';
import { useState, useEffect, memo } from 'react';
import { ACTIVE_CONFIG } from '@/../../shared/serviceConfig';
import { useAnalytics } from '@/hooks/useAnalytics';
import { useLocationContent, usePersonalizedWhatsAppMessage } from '@/hooks/useLocationContent';
function ExitIntentPopup() {
 const [showPopup, setShowPopup] = useState(false);
 const [hasShown, setHasShown] = useState(false);
 const { trackExitPopupShown, trackExitPopupConversion } = useAnalytics();
 const { city, arrivalTime } = useLocationContent();
 const whatsappMessage = usePersonalizedWhatsAppMessage('Vi o vosso site e preciso de um orçamento urgente. Podem ajudar?');
 useEffect(() => {
 const handleMouseLeave = (e: MouseEvent) => {
 // Trigger when mouse leaves viewport from top (user closing tab/window)
 if (e.clientY <= 0 && !hasShown) {
 setShowPopup(true);
 setHasShown(true);
 trackExitPopupShown();
 }
 };
 // Detect if mobile device
 const isMobile = window.innerWidth < 768;
 const delay = isMobile ? 60000 : 30000; // 60s mobile, 30s desktop
 // Also trigger after delay if user hasn't interacted
 const timer = setTimeout(() => {
 if (!hasShown) {
 setShowPopup(true);
 setHasShown(true);
 trackExitPopupShown();
 }
 }, delay);
 document.addEventListener('mouseleave', handleMouseLeave);
 return () => {
 document.removeEventListener('mouseleave', handleMouseLeave);
 clearTimeout(timer);
 };
 }, [hasShown, trackExitPopupShown]);
 if (!showPopup) return null;
 const isPlumber = ACTIVE_CONFIG.type === 'plomberie';
 const accentColor = isPlumber ? '#0e7490' : '#FF6B35';
 const serviceName = isPlumber ? 'Canalizador' : 'Eletricista';
 return (
 <>
 {/* Overlay */}
 <div
 className="fixed inset-0 bg-black bg-opacity-50 z-50 animate-fade-in"
 onClick={() => setShowPopup(false)}
 />
 {/* Popup */}
 <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md mx-4 animate-scale-in">
 <div className="bg-white rounded-2xl shadow-2xl p-8 relative">
 {/* Close button */}
 <button
 onClick={() => setShowPopup(false)}
 className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
 aria-label="Fechar"
 >
 ×
 </button>
 {/* Content */}
 <div className="text-center">
 <div className="text-5xl mb-4">🚨</div>
 <h2 className="text-2xl font-bold text-gray-900 mb-2">
 ! 
 </h2>
 <p className="text-lg font-bold text-red-600 mb-3">
 Técnico Atendimento 24h em {city}
 </p>
 <p className="text-gray-600 mb-6">
 Não perca tempo a procurar. Temos um {serviceName.toLowerCase()} disponível que pode estar aí em <strong>{arrivalTime.split('-')[0]}</strong>.
 </p>
 {/* Benefits */}
 <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4 mb-6 text-left border-2 border-green-200">
 <p className="text-xs font-bold text-green-700 mb-3 text-center">
 CONTACTAR-NOS
 </p>
 <ul className="space-y-2">
 <li className="flex items-center gap-2 text-sm font-semibold">
 <span className="text-green-600 text-lg">✓</span>
 <span>Sem compromisso</span>
 </li>
 <li className="flex items-center gap-2 text-sm font-semibold">
 <span className="text-green-600 text-lg">✓</span>
 <span>Disponível 24h/7d</span>
 </li>
 <li className="flex items-center gap-2 text-sm font-semibold">
 <span className="text-green-600 text-lg">✓</span>
 <span>Técnico na sua porta em {arrivalTime.split('-')[0]}</span>
 </li>
 <li className="flex items-center gap-2 text-sm font-semibold">
 <span className="text-green-600 text-lg">✓</span>
 <span>Serviço com garantia</span>
 </li>
 </ul>
 </div>
 {/* CTA Buttons */}
 <div className="space-y-3">
 <a
 href={`https://wa.me/${ACTIVE_CONFIG.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
 className="block w-full text-center text-white font-black px-6 py-4 rounded-xl text-lg transition-all hover:scale-105 shadow-lg animate-pulse"
 style={{ backgroundColor: '#25D366' }}
 onClick={() => {
 trackExitPopupConversion('WhatsApp');
 setShowPopup(false);
 }}
 >
 💬 PEDIR ORÇAMENTO
 </a>
 <a
 href={`tel:${ACTIVE_CONFIG.phone}`}
 className="block w-full text-center font-bold px-6 py-4 rounded-xl text-base border-2 transition-all hover:scale-105"
 style={{ borderColor: accentColor, color: accentColor }}
 onClick={() => {
 trackExitPopupConversion('Phone');
 setShowPopup(false);
 }}
 >
 📞 Ou ligar: {ACTIVE_CONFIG.phone}
 </a>
 </div>
 {/* Trust indicator with urgency */}
 <div className="mt-4 space-y-1">
 <p className="text-xs font-bold text-red-600">
 ⏰ hoje em {city}
 </p>
 <p className="text-xs text-gray-500">
 🔒 Atendemos clientes em toda a região de Trás-os-Montes • ⭐ 
 </p>
 </div>
 </div>
 </div>
 </div>
 <style>{`
 @keyframes fade-in {
 from { opacity: 0; }
 to { opacity: 1; }
 }
 @keyframes scale-in {
 from {
 opacity: 0;
 transform: translate(-50%, -50%) scale(0.9);
 }
 to {
 opacity: 1;
 transform: translate(-50%, -50%) scale(1);
 }
 }
 .animate-fade-in {
 animation: fade-in 0.3s ease-out;
 }
 .animate-scale-in {
 animation: scale-in 0.3s ease-out;
 }
 `}</style>
 </>
 );
}
export default React.memo(ExitIntentPopup);
