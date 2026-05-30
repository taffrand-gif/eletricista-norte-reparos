import { useEffect, useState } from 'react';
import { ACTIVE_CONFIG, CITIES } from '../../../shared/serviceConfig';
interface RecentCall {
 location: string;
 problem: string;
 time: string;
}
export default function RecentCalls() {
 const [calls, setCalls] = useState<RecentCall[]>([]);
 const config = ACTIVE_CONFIG;
 useEffect(() => {
 // Générer 3 appels récents aléatoires au chargement
 const generatedCalls = generateRecentCalls(3);
 setCalls(generatedCalls);
 }, []);
 return (
 <div className="recent-calls">
 <strong>⚡ Últimas chamadas urgentes:</strong>
 <ul>
 {calls.map((call, index) => (
 <li key={index}>
 <span className="mr-2">{config.serviceEmoji}</span>
 {call.location} - {call.problem} ({call.time})
 </li>
 ))}
 </ul>
 </div>
 );
}
// Generate random recent calls
function generateRecentCalls(count: number): RecentCall[] {
 const config = ACTIVE_CONFIG;
 const calls: RecentCall[] = [];
 const usedLocations = new Set<string>();
 for (let i = 0; i < count; i++) {
 let location: string;
 
 // S'assurer que chaque localisation est unique
 do {
 location = getRandomElement(CITIES).name;
 } while (usedLocations.has(location));
 
 usedLocations.add(location);
 const problem = getRandomElement(config.commonProblems);
 const time = getRandomTime();
 calls.push({ location, problem, time });
 }
 return calls;
}
// Get random element from array
function getRandomElement<T>(array: T[]): T {
 return array[Math.floor(Math.random() * array.length)];
}
// Generate realistic random timestamp
function getRandomTime(): string {
 const timeOptions = [
 'há alguns minutos',
 `há ${Math.floor(Math.random() * 10 + 5)} min`,
 `há ${Math.floor(Math.random() * 30 + 15)} min`,
 `há ${Math.floor(Math.random() * 2 + 1)} hora`,
 `há ${Math.floor(Math.random() * 3 + 1)} horas`,
 ];
 
 return getRandomElement(timeOptions);
}
