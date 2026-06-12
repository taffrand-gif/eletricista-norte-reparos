import { useEffect, useRef } from 'react';
declare global {
 interface Window {
 gtag: (...args: any[]) => void;
 }
}
export const useAnalytics = () => {
 const trackEvent = (
 eventName: string,
 params: {
 event_category?: string;
 event_label?: string;
 value?: number;
 [key: string]: any;
 }
 ) => {
 if (typeof window !== 'undefined' && window.gtag) {
 window.gtag('event', eventName, params);
 }
 };
 const trackPhoneClick = (phoneNumber: string) => {
 trackEvent('phone_call_click', {
 event_category: 'conversion',
 event_label: `Phone: ${phoneNumber}`,
 value: 1});
 };
 const trackWhatsAppClick = (source: string) => {
 trackEvent('whatsapp_click', {
 event_category: 'conversion',
 event_label: `WhatsApp: ${source}`,
 value: 1});
 };
 const trackQuoteCalculated = (service: string, urgency: string, price: string) => {
 trackEvent('quote_calculated', {
 event_category: 'engagement',
 event_label: `Service: ${service}`,
 urgency,
 estimated_price: price});
 };
 const trackQuoteSentWhatsApp = (service: string) => {
 trackEvent('quote_sent_whatsapp', {
 event_category: 'conversion',
 event_label: `Service: ${service}`,
 value: 1});
 };
 const trackExitPopupShown = () => {
 trackEvent('exit_popup_shown', {
 event_category: 'engagement',
 event_label: 'Exit Intent Triggered'});
 };
 const trackExitPopupConversion = (action: string) => {
 trackEvent('exit_popup_conversion', {
 event_category: 'conversion',
 event_label: `Exit Popup: ${action}`,
 value: 1});
 };
 const trackScrollDepth = (percentage: number) => {
 trackEvent('scroll_depth', {
 event_category: 'engagement',
 event_label: `${percentage}% scrolled`,
 value: percentage});
 };
 const trackTimeOnPage = (seconds: number) => {
 trackEvent('time_on_page', {
 event_category: 'engagement',
 event_label: `${seconds} seconds`,
 value: seconds});
 };
 return {
 trackEvent,
 trackPhoneClick,
 trackWhatsAppClick,
 trackQuoteCalculated,
 trackQuoteSentWhatsApp,
 trackExitPopupShown,
 trackExitPopupConversion,
 trackScrollDepth,
 trackTimeOnPage};
};
// Hook for scroll depth tracking
export const useScrollDepthTracking = () => {
 const { trackScrollDepth } = useAnalytics();
 const tracked = useRef<Set<number>>(new Set());
 useEffect(() => {
 const handleScroll = () => {
 const scrollPercentage = Math.round(
 (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
 );
 const milestones = [25, 50, 75, 90, 100];
 milestones.forEach(milestone => {
 if (scrollPercentage >= milestone && !tracked.current.has(milestone)) {
 tracked.current.add(milestone);
 trackScrollDepth(milestone);
 }
 });
 };
 window.addEventListener('scroll', handleScroll, { passive: true });
 return () => window.removeEventListener('scroll', handleScroll);
 }, [trackScrollDepth]);
};
// Hook for time on page tracking
export const useTimeOnPageTracking = () => {
 const { trackTimeOnPage } = useAnalytics();
 const tracked = useRef<Set<number>>(new Set());
 useEffect(() => {
 const milestones = [30, 60, 120, 300]; // 30s, resposta prioritária, resposta prioritária, resposta prioritária
 const timers: NodeJS.Timeout[] = [];
 milestones.forEach(seconds => {
 const timer = setTimeout(() => {
 if (!tracked.current.has(seconds)) {
 tracked.current.add(seconds);
 trackTimeOnPage(seconds);
 }
 }, seconds * 1000);
 timers.push(timer);
 });
 return () => timers.forEach(timer => clearTimeout(timer));
 }, [trackTimeOnPage]);
};
