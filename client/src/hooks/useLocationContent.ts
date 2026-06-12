import { useMemo } from 'react';
import { useLocation } from '@/contexts/LocationContext';
import { CITIES } from '@/../../shared/serviceConfig';
interface LocationContentConfig {
 city: string;
 distance: number;
 arrivalTime: string;
 priceAdjustment: number;
 region: string;
}
// Base location (Trás-os-Montes)
const BASE_LAT = 41.5382;
const BASE_LON = -6.9667;
// City coordinates (approximate)
const CITY_COORDINATES: Record<string, { lat: number; lon: number }> = {
 'Bragança': { lat: 41.8058, lon: -6.7570 },
 'Trás-os-Montes': { lat: 41.5382, lon: -6.9667 },
 'Mirandela': { lat: 41.4867, lon: -7.1867 },
 'Vinhais': { lat: 41.8333, lon: -7.0000 },
 'Miranda do Douro': { lat: 41.4975, lon: -6.2742 },
 'Mogadouro': { lat: 41.3403, lon: -6.7122 },
 'Torre de Moncorvo': { lat: 41.1786, lon: -7.0539 },
 'Freixo de Espada à Cinta': { lat: 41.0833, lon: -6.8000 },
 'Alfândega da Fé': { lat: 41.3500, lon: -6.9667 },
 'Vila Flor': { lat: 41.3083, lon: -7.1500 },
 'Vimioso': { lat: 41.5833, lon: -6.5167 },
 'Carrazeda de Ansiães': { lat: 41.2417, lon: -7.3000 },
 'Valpaços': { lat: 41.6083, lon: -7.3167 },
 'Murça': { lat: 41.4042, lon: -7.4500 },
 'Vila Nova de Foz Côa': { lat: 41.0833, lon: -7.1333 }};
// Calculate distance using Haversine formula
function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
 const R = 6371; // Earth radius in km
 const dLat = (lat2 - lat1) * Math.PI / 180;
 const dLon = (lon2 - lon1) * Math.PI / 180;
 const a =
 Math.sin(dLat / 2) * Math.sin(dLat / 2) +
 Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
 Math.sin(dLon / 2) * Math.sin(dLon / 2);
 const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
 return R * c;
}
// Get distance from base to city
function getDistanceToCity(cityName: string): number {
 const coords = CITY_COORDINATES[cityName];
 if (!coords) {
 // Default to medium distance if city not found
 return 30;
 }
 return Math.round(calculateDistance(BASE_LAT, BASE_LON, coords.lat, coords.lon));
}
// Calculate arrival time based on distance
function getArrivalTime(distance: number): string {
 if (distance <= 20) return '30-resposta prioritária';
 if (distance <= 40) return '40-resposta prioritária';
 if (distance <= 60) return '50-resposta prioritária';
 return '60-resposta prioritária';
}
// Calculate price adjustment based on distance
function getPriceAdjustment(distance: number): number {
 if (distance <= 20) return 0;
 if (distance <= 50) return 10;
 if (distance <= 100) return 20;
 return 30;
}
// Get region name
function getRegion(cityName: string): string {
 const city = CITIES.find(c => c.name === cityName);
 if (!city) return 'Trás-os-Montes';
 // If it's a village, return parent city
 if (city.parentCity) {
 return city.parentCity;
 }
 return city.district;
}
export function useLocationContent(): LocationContentConfig {
 const { getCurrentCity } = useLocation();
 return useMemo(() => {
 const city = getCurrentCity();
 const distance = getDistanceToCity(city);
 const arrivalTime = getArrivalTime(distance);
 const priceAdjustment = getPriceAdjustment(distance);
 const region = getRegion(city);
 return {
 city,
 distance,
 arrivalTime,
 priceAdjustment,
 region};
 }, [getCurrentCity]);
}
// Hook for personalized WhatsApp message
export function usePersonalizedWhatsAppMessage(baseMessage: string): string {
 const { city } = useLocationContent();
 return useMemo(() => {
 return `Olá! Estou em ${city}. ${baseMessage}`;
 }, [city, baseMessage]);
}
// Hook for filtering testimonials by location
export function useLocalTestimonials<T extends { location: string }>(
 testimonials: T[]
): T[] {
 const { city, region } = useLocationContent();
 return useMemo(() => {
 // First, try to find testimonials from the same city
 const sameCity = testimonials.filter(t => t.location === city);
 if (sameCity.length >= 3) {
 return sameCity.slice(0, 3);
 }
 // Then, try to find testimonials from the same region
 const sameRegion = testimonials.filter(t =>
 t.location.includes(region) || region.includes(t.location)
 );
 if (sameRegion.length >= 3) {
 return sameRegion.slice(0, 3);
 }
 // Fallback: return first 3 testimonials
 return testimonials.slice(0, 3);
 }, [testimonials, city, region]);
}
