import React from 'react';
import { SERVICES_ } from '@/../../shared/cityServiceMatrix';
// memo removed from 'react';
import { ACTIVE_CONFIG } from '@/../../shared/serviceConfig';
function RelatedServices({ currentService, city }: { currentService: string; city: string }) {
 const services = SERVICES_.filter(s => s.slug !== currentService);
 const accentColor = '#FF6B35';
 return (
 <section className="bg-gray-50 py-12 px-4">
 <div className="max-w-6xl mx-auto">
 <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
 Outros Serviços em {city}
 </h2>
 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
 {services.map(service => (
 <a
 key={service.slug}
 href={`/${service.slug}-${city.toLowerCase().replace(/\s+/g, '-')}`}
 className="bg-white p-6 rounded-lg hover:shadow-lg transition-all border-2 border-transparent hover:border-current"
 style={{ '--hover-color': accentColor } as React.CSSProperties}
 >
 <div className="text-4xl mb-4">{service.icon}</div>
 <h3 className="font-bold text-lg mb-2 text-gray-900">{service.name}</h3>
 <p className="text-gray-600 text-sm mb-4">{service.description}</p>
 <span className="font-semibold" style={{ color: accentColor }}>
 Desde {service.basePrice}€ →
 </span>
 </a>
 ))}
 </div>
 </div>
 </section>
 );
}
export default React.memo(RelatedServices);
