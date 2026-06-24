import React, { useState, useEffect } from 'react';
import { useLocation } from '@/contexts/LocationContext';
import { CITIES } from '@/../../shared/serviceConfig';
import { MapPin, X, Check } from 'lucide-react';
export default function LocationDetector() {
 const { detectedCity, selectedCity, isLoading, setSelectedCity, getCurrentCity } = useLocation();
 const [isOpen, setIsOpen] = useState(false);
 const [showBanner, setShowBanner] = useState(false);
 const [searchQuery, setSearchQuery] = useState('');
 const currentCity = getCurrentCity();
 // Show banner on first visit if location detected
 useEffect(() => {
 const hasSeenBanner = sessionStorage.getItem('location_banner_seen');
 if (!hasSeenBanner && detectedCity && !selectedCity) {
 setShowBanner(true);
 }
 }, [detectedCity, selectedCity]);
 const handleConfirmLocation = () => {
 setSelectedCity(detectedCity!);
 setShowBanner(false);
 sessionStorage.setItem('location_banner_seen', 'true');
 };
 const handleDismissBanner = () => {
 setShowBanner(false);
 sessionStorage.setItem('location_banner_seen', 'true');
 };
 const handleSelectCity = (cityName: string) => {
 setSelectedCity(cityName);
 setIsOpen(false);
 setSearchQuery('');
 };
 // Filter cities based on search
 const mainCities = CITIES.filter(c => !c.parentCity);
 const filteredCities = searchQuery
 ? CITIES.filter(c =>
 c.name.toLowerCase().includes(searchQuery.toLowerCase())
 )
 : mainCities;
 return (
 <>
 {/* Location Banner - shown on first visit */}
 {showBanner && detectedCity && (
 <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg">
 <div className="container mx-auto px-4 py-3">
 <div className="flex items-center justify-between gap-4">
 <div className="flex items-center gap-3">
 <MapPin className="w-5 h-5 flex-shrink-0" />
 <p className="text-sm md:text-base">
 Está em <strong>{detectedCity}</strong>?
 </p>
 </div>
 <div className="flex items-center gap-2">
 <button
 onClick={handleConfirmLocation}
 className="px-4 py-1.5 bg-white text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-50 transition-colors flex items-center gap-1"
 >
 <Check className="w-4 h-4" />
 Sim
 </button>
 <button
 onClick={() => setIsOpen(true)}
 className="px-4 py-1.5 bg-blue-700 text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors"
 >
 Alterar
 </button>
 <button
 onClick={handleDismissBanner}
 className="p-1.5 hover:bg-blue-600 rounded transition-colors"
 aria-label="Fechar"
 >
 <X className="w-4 h-4" />
 </button>
 </div>
 </div>
 </div>
 </div>
 )}
 {/* Location Badge - always visible */}
 <button
 onClick={() => setIsOpen(true)}
 className="fixed bottom-24 right-4 md:bottom-6 md:right-6 z-40 bg-white shadow-lg rounded-full px-4 py-3 flex items-center gap-2 hover:shadow-xl transition-shadow border border-gray-200 min-h-[48px] min-w-[48px]"
 aria-label="Alterar localização"
 >
 <MapPin className="w-4 h-4 text-blue-600" />
 <span className="text-sm font-medium text-gray-700">
 {isLoading ? 'A detectar...' : currentCity}
 </span>
 </button>
 {/* City Selector Modal */}
 {isOpen && (
 <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
 <div className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[80vh] flex flex-col">
 {/* Header */}
 <div className="p-4 border-b border-gray-200">
 <div className="flex items-center justify-between mb-3">
 <h3 className="text-lg font-semibold text-gray-900">
 Selecione a sua localização
 </h3>
 <button
 onClick={() => setIsOpen(false)}
 className="p-1 hover:bg-gray-100 rounded transition-colors"
 aria-label="Fechar"
 >
 <X className="w-5 h-5 text-gray-500" />
 </button>
 </div>
 <input
 type="text"
 placeholder="Pesquisar cidade..."
 value={searchQuery}
 onChange={(e) => setSearchQuery(e.target.value)}
 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
 />
 </div>
 {/* City List */}
 <div className="flex-1 overflow-y-auto p-4">
 {filteredCities.length === 0 ? (
 <p className="text-center text-gray-500 py-8">
 Nenhuma cidade encontrada
 </p>
 ) : (
 <div className="space-y-1">
 {filteredCities.map((city) => (
 <button
 key={city.slug}
 onClick={() => handleSelectCity(city.name)}
 className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
 currentCity === city.name
 ? 'bg-blue-50 text-blue-700 font-medium'
 : 'hover:bg-gray-50 text-gray-700'
 }`}
 >
 <div className="flex items-center justify-between">
 <div>
 <div className="font-medium">{city.name}</div>
 {city.parentCity && (
 <div className="text-xs text-gray-500">
 {city.parentCity}
 </div>
 )}
 </div>
 {currentCity === city.name && (
 <Check className="w-5 h-5 text-blue-600" />
 )}
 </div>
 </button>
 ))}
 </div>
 )}
 </div>
 {/* Footer */}
 <div className="p-4 border-t border-gray-200 bg-gray-50">
 <p className="text-xs text-gray-600 text-center">
 Cobrimos todas as localidades de Trás-os-Montes
 </p>
 </div>
 </div>
 </div>
 )}
 </>
 );
}
