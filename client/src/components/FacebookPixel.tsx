import { useEffect } from 'react';

interface FacebookPixelProps {
 pixelId: string;
}

// Declaração TypeScript para fbq
declare global {
 interface Window {
 fbq: any;
 _fbq: any;
 }
}

export function FacebookPixel({ pixelId }: FacebookPixelProps) {
 useEffect(() => {
 if (!pixelId) {
 return;
 }

 // Inicializar Facebook Pixel
 (function(f: any, b: any, e: string, v: string, n?: any, t?: any, s?: any) {
 if (f.fbq) return;
 n = f.fbq = function() {
 n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
 };
 if (!f._fbq) f._fbq = n;
 n.push = n;
 n.loaded = !0;
 n.version = '2.0';
 n.queue = [];
 t = b.createElement(e);
 t.async = !0;
 t.src = v;
 s = b.getElementsByTagName(e)[0];
 s.parentNode.insertBefore(t, s);
 })(
 window,
 document,
 'script',
 'https://connect.facebook.net/en_US/fbevents.js'
 );

 window.fbq('init', pixelId);
 window.fbq('track', 'PageView');
 }, [pixelId]);

 return null;
}

// Funções auxiliares para rastrear os eventos
export const trackEvent = {
 // Lead: Formulário de orçamento submetido
 lead: (value?: number, currency = 'EUR') => {
 if (window.fbq) {
 window.fbq('track', 'Lead', {
 value: value || 0,
 currency});
 }
 },

 // Contact: Clique em telefone ou WhatsApp
 contact: (method: 'phone' | 'whatsapp') => {
 if (window.fbq) {
 window.fbq('track', 'Contact', {
 contact_method: method});
 }
 },

 // ViewContent: Visita de uma página de serviço
 viewContent: (contentName: string, contentCategory?: string) => {
 if (window.fbq) {
 window.fbq('track', 'ViewContent', {
 content_name: contentName,
 content_category: contentCategory || 'service'});
 }
 },

 // CompleteRegistration: Inscrição newsletter
 completeRegistration: (method = 'newsletter') => {
 if (window.fbq) {
 window.fbq('track', 'CompleteRegistration', {
 registration_method: method});
 }
 },

 // Schedule: Reserva feita
 schedule: (value?: number) => {
 if (window.fbq) {
 window.fbq('track', 'Schedule', {
 value: value || 0,
 currency: 'EUR'});
 }
 },

 // Custom event
 custom: (eventName: string, params?: Record<string, any>) => {
 if (window.fbq) {
 window.fbq('trackCustom', eventName, params || {});
 }
 }};
