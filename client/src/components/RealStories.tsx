import React from 'react';
import { useSite } from '@/contexts/SiteContext';
import { MapPin, Quote } from 'lucide-react';
export default function RealStories() {
 const { config } = useSite();
 if (!config.stories || config.stories.length === 0) return null;
 return (
 <section className="py-16 bg-gray-50">
 <div className="container mx-auto px-4">
 <div className="text-center mb-12">
 <h2 className="text-3xl font-bold mb-4 text-gray-900">Intervenções Reais</h2>
 <p className="text-xl text-gray-600 max-w-2xl mx-auto">
 Histórias verdadeiras do nosso dia-a-dia em Trás-os-Montes. Sem filtros.
 </p>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
 {config.stories.map((story, index) => (
 <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow">
 <div className="flex items-center mb-4 text-sm text-[var(--site-primary)] font-semibold">
 <MapPin className="w-4 h-4 mr-1" />
 {story.location}
 </div>
 
 <h3 className="text-xl font-bold mb-3 text-gray-900">"{story.title}"</h3>
 
 <div className="mb-4">
 <p className="text-gray-700 italic mb-2">"{story.situation}"</p>
 <div className="flex items-start text-sm text-gray-500 bg-gray-50 p-2 rounded">
 <span className="font-semibold mr-2">Emoção:</span> {story.emotion}
 </div>
 </div>
 <div className="mt-auto pt-4 border-t border-gray-100">
 <p className="font-bold text-[var(--site-primary-dark)]">Solução:</p>
 <p className="text-gray-800">{story.solution}</p>
 </div>
 </div>
 ))}
 </div>
 
 <div className="text-center mt-12">
 <p className="text-gray-500 text-sm">Estas histórias são exemplos reais de intervenções realizadas pela nosso trabalho.</p>
 </div>
 </div>
 </section>
 );
}
