// Secção Zona de Intervenção — Lista de cidades cobertas
// Orienté SEO local pour améliorer le référencement

import { useSite } from '@/contexts/SiteContext';
import { MapPin } from 'lucide-react';

const CIDADES_PRINCIPAIS = [
 { nome: 'Bragança', slug: 'braganca' },
 { nome: 'Mirandela', slug: 'mirandela' },
 { nome: 'Macedo de Cavaleiros', slug: 'macedo-cavaleiros' },
 { nome: 'Vila Real', slug: 'vila-real' },
 { nome: 'Chaves', slug: 'chaves' },
 { nome: 'Lamego', slug: 'lamego' },
 { nome: 'Mogadouro', slug: 'mogadouro' },
 { nome: 'Vila Flor', slug: 'vila-flor' },
 { nome: 'Carrazeda de Ansiães', slug: 'carrazeda-de-ansiaes' },
 { nome: 'Torre de Moncorvo', slug: 'torre-de-moncorvo' },
 { nome: 'Alfândega da Fé', slug: 'alfandega-da-fe' },
 { nome: 'Vinhais', slug: 'vinhais' },
 { nome: 'Vimioso', slug: 'vimioso' },
 { nome: 'Miranda do Douro', slug: 'miranda-douro' },
 { nome: 'Freixo de Espada à Cinta', slug: 'freixo-espada-cinta' },
];

export default function ZonaIntervencao() {
 const { config } = useSite();
 const isPlumber = config.id === 'norte-reparos';
 const serviceLabel = isPlumber ? 'canalizador' : 'eletricista';
 const accentColor = isPlumber ? 'text-blue-600' : 'text-amber-600';
 const accentBg = isPlumber ? 'bg-blue-50' : 'bg-amber-50';
 const accentBorder = isPlumber ? 'border-blue-200' : 'border-amber-200';
 const iconColor = isPlumber ? 'text-blue-600' : 'text-amber-600';

 const serviceSlug = isPlumber ? 'canalizador' : 'eletricista';

 return (
 <section id="zona-intervencao" className="py-20 bg-white">
 <div className="container mx-auto px-4">
 {/* Título */}
 <div className="text-center mb-12">
 <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
 Zona de <span className={accentColor}>Intervenção</span>
 </h2>
 <p className="text-xl text-gray-600 max-w-3xl mx-auto">
 Prestamos serviços de {serviceLabel} profissional em toda a região de Trás-os-Montes, 
 num raio de 100 km a partir de Macedo de Cavaleiros.
 </p>
 </div>

 {/* Grelha de cidades */}
 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-12">
 {CIDADES_PRINCIPAIS.map((cidade) => (
 <a
 key={cidade.slug}
 href={`/${serviceSlug}-${cidade.slug}`}
 className={`flex items-center gap-2 ${accentBg} border ${accentBorder} rounded-xl px-4 py-3 transition-all duration-300 hover:shadow-md hover:scale-105 no-underline`}
 >
 <MapPin className={`w-4 h-4 flex-shrink-0 ${iconColor}`} />
 <span className="text-gray-800 font-medium text-sm">{cidade.nome}</span>
 </a>
 ))}
 </div>

 {/* Informação adicional */}
 <div className={`max-w-4xl mx-auto ${accentBg} border-2 ${accentBorder} rounded-2xl p-8`}>
 <div className="text-center">
 <h3 className="text-2xl font-bold text-gray-900 mb-4">
 Não encontra a sua localidade?
 </h3>
 <p className="text-gray-700 mb-6">
 Servimos toda a região de Trás-os-Montes e Alto Douro, incluindo aldeias e freguesias. 
 Contacte-nos para confirmar a disponibilidade na sua zona.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a
 href={`tel:+351${config.phone.replace(/\s/g, '')}`}
 className="inline-flex items-center justify-center gap-2 px-8 py-4 font-bold text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
 style={{ backgroundColor: config.colors.primary }}
 >
 📞 Ligar: {config.phone}
 </a>
 <a
 href={`https://wa.me/${config.whatsapp || '351932321892'}?text=${encodeURIComponent(config.whatsappMessage)}`}
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center justify-center gap-2 px-8 py-4 font-bold text-white bg-green-700 hover:bg-green-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
 >
 💬 WhatsApp
 </a>
 </div>
 </div>
 </div>
 </div>
 </section>
 );
}
