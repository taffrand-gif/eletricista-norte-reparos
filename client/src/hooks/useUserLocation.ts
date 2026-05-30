import { useState, useEffect } from 'react';
interface LocationData {
 city: string;
 region: string;
 country: string;
}
const TRAS_OS_MONTES_CITIES = [
 'Bragança',
 'Mirandela',
 'Macedo de Cavaleiros',
 'Miranda do Douro',
 'Vinhais',
 'Mogadouro',
 'Alfândega da Fé',
 'Carrazeda de Ansiães',
 'Freixo de Espada à Cinta',
 'Torre de Moncorvo',
 'Vila Flor',
 'Vimioso'
];
export function useUserLocation() {
 const [location, setLocation] = useState<LocationData | null>({
 city: 'Bragança',
 region: 'Bragança',
 country: 'Portugal'
 });
 const [loading, setLoading] = useState(false);
 useEffect(() => {
 // ipapi.co disabled — causes 429 errors and not needed for local site
 }, []);
 // Vérifier si la ville détectée est dans Trás-os-Montes
 const isLocalCity = location ? TRAS_OS_MONTES_CITIES.includes(location.city) : false;
 
 // Retourner la ville locale ou Bragança par défaut
 const displayCity = isLocalCity && location ? location.city : 'Bragança';
 return {
 city: displayCity,
 region: location?.region || 'Bragança',
 country: location?.country || 'Portugal',
 loading,
 isLocalCity
 };
}
