import { ACTIVE_CONFIG } from "../../../shared/serviceConfig";
interface HeroUrgenceProps {
 ville?: string;
 interventionsCount?: number;
}
export default function HeroUrgence({ ville, interventionsCount = 480 }: HeroUrgenceProps) {
 const { gradient } = ACTIVE_CONFIG;
 const config = ACTIVE_CONFIG;
 const phoneLink = `tel:+${config.whatsappNumber}`;
 const whatsappLink = `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent("Olá, preciso de um eletricista em Trás-os-Montes. Podem dar-me um orçamento?")}`;
 return (
 <div className="urgency-card">
 {/* Status disponible */}
 <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold text-sm mb-5">
 <span className="pulse-dot"></span>
 ATENDIMENTO Atendimento 24h
 </div>
 {/* Titre principal */}
 <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
 {config.heroEmoji} {config.heroTitle} {ville || 'Bragança'}
 </h1>
 {/* Sous-titre urgence */}
 <p className=" text-lg md:text-xl font-bold mb-6" style={{color: gradient.from}}>
 {config.heroSubtitle}
 <br />
 <strong>Atendo já e chego em 30-40min</strong>
 </p>
 {/* Bouton téléphone principal */}
 <a href={phoneLink} className="btn-urgence" onClick={() => trackPhoneClick()}>
 📞 {formatPhone(config.phone)}
 </a>
 {/* Botão WhatsApp */}
 <a href={whatsappLink} className="btn-whatsapp" onClick={() => trackWhatsAppClick()}>
 💬 WhatsApp Urgência
 </a>
 {/* Trust signals */}
 <div className="trust-grid">
 <div className="trust-item">
 <strong>30-40min</strong>
 <span>Tempo chegada desde Macedo</span>
 </div>
 <div className="trust-item">
 <strong>24/7</strong>
 <span>Urgências incluindo fins-de-semana</span>
 </div>
 <div className="trust-item">
 <strong>{interventionsCount}+</strong>
 <span>Intervenções {ville ? `em ${ville}` : 'em Bragança'}</span>
 </div>
 <div className="trust-item">
 <strong>12 meses</strong>
 <span>Garantia por escrito</span>
 </div>
 </div>
 </div>
 );
}
// Format phone number
function formatPhone(phone: string): string {
 // Format: 932 321 892
 return phone.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3');
}
// Fonctions de tracking (à implémenter avec Google Analytics)
function trackPhoneClick() {
 if (typeof window !== 'undefined' && (window as any).gtag) {
 (window as any).gtag('event', 'click_to_call', {
 event_category: 'Phone Calls',
 event_label: 'Hero CTA',
 value: 1});
 }
}
function trackWhatsAppClick() {
 if (typeof window !== 'undefined' && (window as any).gtag) {
 (window as any).gtag('event', 'click_to_whatsapp', {
 event_category: 'WhatsApp',
 event_label: 'Hero CTA',
 value: 1});
 }
}
