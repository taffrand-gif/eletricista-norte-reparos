import React from 'react';
import { useState, useEffect, memo } from 'react';
import { ACTIVE_CONFIG } from '@/../../shared/serviceConfig';
function UrgencyIndicator() {
 const [viewersCount, setViewersCount] = useState(0);
 const [recentBooking, setRecentBooking] = useState('');
 const [showBooking, setShowBooking] = useState(false);
 const [isVisible, setIsVisible] = useState(true);
 useEffect(() => {
 // Simulate realistic viewer count (3-12 viewers)
 const baseViewers = Math.floor(Math.random() * 10) + 3;
 setViewersCount(baseViewers);
 // Auto-hide after 10 seconds on mobile to reduce clutter
 const hideTimer = setTimeout(() => {
 setIsVisible(false);
 }, 10000);
 // Update viewers count every 15-30 seconds
 const viewerInterval = setInterval(() => {
 const change = Math.random() > 0.5 ? 1 : -1;
 setViewersCount(prev => Math.max(2, Math.min(15, prev + change)));
 }, Math.random() * 15000 + 15000);
 // Show recent booking notification every 2-4 minutes
 const cities = ['Bragança', 'Mirandela', 'Macedo de Cavaleiros', 'Chaves', 'Vinhais', 'Mogadouro'];
 const bookingInterval = setInterval(() => {
 const city = cities[Math.floor(Math.random() * cities.length)];
 const minutesAgo = Math.floor(Math.random() * 45) + 5;
 setRecentBooking(`Alguém de ${city} pediu orçamento há ${minutesAgo} minutos`);
 setShowBooking(true);
 // Hide after 8 seconds
 setTimeout(() => setShowBooking(false), 8000);
 }, Math.random() * 120000 + 120000); // 2-4 minutes
 return () => {
 clearInterval(viewerInterval);
 clearInterval(bookingInterval);
 clearTimeout(hideTimer);
 };
 }, []);
 const isPlumber = ACTIVE_CONFIG.type === 'plomberie';
 const accentColor = isPlumber ? '#0e7490' : '#FF6B35';
 return (
 <>
 {/* Live Viewers Indicator - Auto-hide after 10s on mobile */}
 {isVisible && (
 <div
 className="fixed top-20 right-4 z-40 bg-white rounded-lg shadow-xl px-3 py-2 border-l-4 transition-opacity duration-500"
 style={{ borderColor: accentColor }}
 >
 <div className="flex items-center gap-2">
 <div className="relative">
 <div className="w-2 h-2 bg-red-500 rounded-full"></div>
 </div>
 <span className="text-base md:text-sm font-bold text-gray-900">
 🔥 {viewersCount} pessoas a ver agora
 </span>
 </div>
 </div>
 )}
 {/* Recent Booking Notification */}
 {showBooking && (
 <div
 className="fixed bottom-20 md:bottom-24 left-4 right-4 md:right-auto z-40 bg-gradient-to-r from-green-50 to-white rounded-lg shadow-2xl px-4 py-3 border-l-4 animate-slide-in-left md:max-w-sm border-2"
 style={{ borderLeftColor: '#10b981', borderColor: '#d1fae5' }}
 >
 <div className="flex items-start gap-2">
 <div className="text-xl md:text-2xl min-w-[24px]">✅</div>
 <div className="flex-1">
 <p className="font-bold text-gray-900 text-base md:text-sm">{recentBooking}</p>
 <p className="text-sm md:text-xs font-semibold text-green-700 mt-1">
 ⚡ Técnico chegou em 25 minutos
 </p>
 </div>
 </div>
 </div>
 )}
 <style>{`
 @keyframes slide-in-left {
 from {
 transform: translateX(-100%);
 opacity: 0;
 }
 to {
 transform: translateX(0);
 opacity: 1;
 }
 }
 .animate-slide-in-left {
 animation: slide-in-left 0.5s ease-out;
 }
 `}</style>
 </>
 );
}
export default React.memo(UrgencyIndicator);
