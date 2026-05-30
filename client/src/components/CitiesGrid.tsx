import React from 'react';
import { Link } from 'wouter';
import { MapPin } from 'lucide-react';
import { CITIES } from '@/../../shared/serviceConfig';
export default function CitiesGrid() {
 // Filtrer les villes principales (sans parentCity)
 const mainCities = CITIES.filter(c => !c.parentCity).slice(0, 12);
 const servicePrefix = 'eletricista';
 return (
 <section className="py-16 bg-white">
 <div className="container">
 <div className="text-center mb-12">
 <h2 className="text-3xl md:text-4xl font-black mb-4">
 Eletricista em Trás-os-Montes
 </h2>
 <p className="text-gray-600 mb-8">
 Serviço profissional em toda a região
 </p>
 </div>
 <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4">
 {mainCities.map(city => (
 <Link
 key={city.slug}
 to={`/${servicePrefix}-${city.slug}`}
 className="bg-white border-2 border-gray-200 p-4 rounded-lg hover:border-orange-500 hover:shadow-md transition-all text-center group"
 >
 <MapPin className="w-6 h-6 mx-auto mb-2 text-orange-600 group-hover:scale-110 transition-transform" />
 <h3 className="font-bold text-lg mb-1">{city.name}</h3>
 <p className="text-sm text-gray-500">{city.district}</p>
 </Link>
 ))}
 </div>
 <div className="text-center mt-8">
 <Link
 to="/zonas"
 className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:gap-3 transition-all"
 >
 Ver todas as zonas cobertas
 <span>→</span>
 </Link>
 </div>
 </div>
 </section>
 );
}
