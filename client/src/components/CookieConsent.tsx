import { useEffect, useState } from 'react';

export default function CookieConsent() {
 const [isVisible, setIsVisible] = useState(false);

 useEffect(() => {
 // Verificar se o consentimento já foi dado
 const consentStatus = localStorage.getItem('cookieConsent');

 if (!consentStatus) {
 // Mostrar o banner após 1 segundo
 setTimeout(() => {
 setIsVisible(true);
 }, 1000);
 } else if (consentStatus === 'accepted') {
 // Carregar os scripts Google se consentimento dado
 initializeGoogleTags();
 }
 }, []);

 const handleAccept = () => {
 localStorage.setItem('cookieConsent', 'accepted');
 setIsVisible(false);
 initializeGoogleTags();
 };

 const handleDecline = () => {
 localStorage.setItem('cookieConsent', 'declined');
 setIsVisible(false);
 };

 const handleSettings = () => {
 alert('Você será redirecionado para as configurações de cookies.');
 // TODO: Implementar uma modal de configurações detalhadas
 };

 if (!isVisible) return null;

 return (
 <div className="cookie-consent">
 <div className="max-w-7xl mx-auto">
 <p className="mb-3">
 Nosso site utiliza cookies para melhorar sua experiência e para fins de análise e marketing. 
 Ao continuar navegando, você concorda com o uso de cookies.
 </p>
 <div className="cookie-buttons">
 <button className="cookie-btn accept-btn" onClick={handleAccept}>
 Aceitar
 </button>
 <button className="cookie-btn settings-btn" onClick={handleSettings}>
 Configurações
 </button>
 <button className="cookie-btn decline-btn" onClick={handleDecline}>
 Recusar
 </button>
 </div>
 </div>
 </div>
 );
}

// Fonction pour initialiser Google Tags avec consentement
function initializeGoogleTags() {
 if (typeof window !== 'undefined' && (window as any).gtag) {
 (window as any).gtag('consent', 'update', {
 analytics_storage: 'granted',
 ad_storage: 'granted',
 ad_user_data: 'granted',
 ad_personalization: 'granted'});
 }
}
