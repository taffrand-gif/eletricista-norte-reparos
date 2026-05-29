interface Cidade {
 name: string;
 slug: string;
 distance: string;
 zona: number;
}

interface CidadesProximasProps {
 currentCity: string;
 cidades: Cidade[];
 serviceType: 'canalizador' | 'eletricista';
}

export default function CidadesProximas({ currentCity, cidades, serviceType }: CidadesProximasProps) {
 const serviceLabel = serviceType === 'canalizador' ? 'Canalizador' : 'Eletricista';

 return (
 <section className="py-12 bg-white border-t border-gray-200">
 <div className="container mx-auto px-4">
 <h3 className="text-2xl font-bold text-center mb-6">
 Também Servimos Cidades Próximas a {currentCity}
 </h3>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
 {cidades.map((cidade) => (
 <a
 key={cidade.slug}
 href={`/${serviceType}-${cidade.slug}`}
 className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow hover:shadow-xl transition-all border border-blue-100 hover:border-blue-300"
 >
 <div className="flex items-center gap-3 mb-2">
 <span className="text-2xl">📍</span>
 <h4 className="font-bold text-gray-900 text-lg">
 {cidade.name}
 </h4>
 </div>

 <div className="space-y-1 text-sm text-gray-600">
 <p className="flex items-center gap-2">
 <span>🚗</span>
 <span>{cidade.distance} de {currentCity}</span>
 </p>
 <p className="flex items-center gap-2">
 <span>💰</span>
 <span>Deslocação: {cidade.zona * 10 + 5}€ (Zona {cidade.zona})</span>
 </p>
 <p className="flex items-center gap-2">
 <span>⏱️</span>
 <span>Chegada: {Math.ceil(parseInt(cidade.distance) / 1.5)} minutos</span>
 </p>
 </div>

 <div className="mt-4 text-blue-600 font-semibold text-sm">
 {serviceLabel} em {cidade.name} →
 </div>
 </a>
 ))}
 </div>

 <div className="mt-8 text-center">
 <p className="text-gray-600">
 Cobrimos toda a região de Trás-os-Montes num raio de 100km
 </p>
 </div>
 </div>
 </section>
 );
}
