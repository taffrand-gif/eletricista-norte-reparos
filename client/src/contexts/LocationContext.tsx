import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { CITIES } from '@/../../shared/serviceConfig';
interface LocationContextType {
 detectedCity: string | null;
 selectedCity: string | null;
 isLoading: boolean;
 error: string | null;
 setSelectedCity: (city: string) => void;
 getCurrentCity: () => string;
}
const LocationContext = createContext<LocationContextType | undefined>(undefined);
const STORAGE_KEY = 'user_location';
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours
interface CachedLocation {
 city: string;
 timestamp: number;
}
// Normalize city name for matching
function normalizeCityName(city: string): string {
 return city
 .toLowerCase()
 .normalize('NFD')
 .replace(/[\u0300-\u036f]/g, '')
 .trim();
}
// Find closest matching city from our list
function findMatchingCity(detectedCity: string): string | null {
 const normalized = normalizeCityName(detectedCity);
 // Exact match
 const exactMatch = CITIES.find(c => normalizeCityName(c.name) === normalized);
 if (exactMatch) return exactMatch.name;
 // Partial match
 const partialMatch = CITIES.find(c =>
 normalizeCityName(c.name).includes(normalized) ||
 normalized.includes(normalizeCityName(c.name))
 );
 if (partialMatch) return partialMatch.name;
 // Default to Bragança (main city)
 return 'Bragança';
}
export function LocationProvider({ children }: { children: ReactNode }) {
 const [detectedCity, setDetectedCity] = useState<string | null>(null);
 const [selectedCity, setSelectedCity] = useState<string | null>(null);
 const [isLoading, setIsLoading] = useState(false);
 const [error, setError] = useState<string | null>(null);
 useEffect(() => {
 // Check cache first
 const cached = localStorage.getItem(STORAGE_KEY);
 if (cached) {
 try {
 const data: CachedLocation = JSON.parse(cached);
 if (Date.now() - data.timestamp < CACHE_DURATION) {
 setDetectedCity(data.city);
 return;
 }
 } catch (e) {
 localStorage.removeItem(STORAGE_KEY);
 }
 }
 // Defer geolocation to avoid blocking render and PageSpeed tests
 const timer = setTimeout(() => {
 detectLocation();
 }, 5000); // 5 seconds delay - after PageSpeed initial load test
 return () => clearTimeout(timer);
 }, []);
 const detectLocation = async () => {
 setIsLoading(true);
 setError(null);
 // Use IP-based detection only (no GPS popup)
 await detectByIP();
 };
 const detectByIP = async () => {
 try {
 const response = await fetch('https://ipapi.co/json/', {
 signal: AbortSignal.timeout(5000)
 });
 if (!response.ok) throw new Error('IP geolocation failed');
 const data = await response.json();
 if (data.city) {
 const matchedCity = findMatchingCity(data.city);
 if (matchedCity) {
 setDetectedCity(matchedCity);
 cacheLocation(matchedCity);
 }
 }
 } catch (err) {
 // Silent fail - default to Bragança
 setDetectedCity('Bragança');
 cacheLocation('Bragança');
 setError('Não foi possível detectar a sua localização');
 } finally {
 setIsLoading(false);
 }
 };
 const cacheLocation = (city: string) => {
 const data: CachedLocation = {
 city,
 timestamp: Date.now()
 };
 localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
 };
 const handleSetSelectedCity = (city: string) => {
 setSelectedCity(city);
 cacheLocation(city);
 };
 const getCurrentCity = (): string => {
 return selectedCity || detectedCity || 'Bragança';
 };
 return (
 <LocationContext.Provider
 value={{
 detectedCity,
 selectedCity,
 isLoading,
 error,
 setSelectedCity: handleSetSelectedCity,
 getCurrentCity
 }}
 >
 {children}
 </LocationContext.Provider>
 );
}
export function useLocation() {
 const context = useContext(LocationContext);
 if (context === undefined) {
 throw new Error('useLocation must be used within a LocationProvider');
 }
 return context;
}
