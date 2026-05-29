import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ACTIVE_CONFIG } from "../../../shared/serviceConfig";
import { useSEO } from "@/hooks/useSEO";
import { trpc } from "@/lib/trpc";

export default function Galeria() {
 const config = ACTIVE_CONFIG;
 const [selectedPhoto, setSelectedPhoto] = useState<{before: string, after: string, title: string} | null>(null);
 const [selectedCategory, setSelectedCategory] = useState<string>("Todas");
 const [showBefore, setShowBefore] = useState(true);

 useSEO({
 title: `Galeria de Trabalhos | ${config.businessName}`,
 description: `Veja a galeria de trabalhos realizados pela ${config.businessName}. Fotos antes e depois dos nossos serviços de ${config.name.toLowerCase()}.`,
 canonical: `https://${config.domain}/galeria`});

 const { data: photos = [], isLoading } = trpc.gallery.list.useQuery();

 const categories = ["Todas", ...Array.from(new Set(photos.map(p => p.category)))];

 const filteredPhotos = selectedCategory === "Todas" 
 ? photos 
 : photos.filter(p => p.category === selectedCategory);

 return (
 <>
 <Header />
{/* Hero Section */}
 <section className="bg-gradient-to-r from-red-50 to-red-100 py-16">
 <div className="container">
 <div className="max-w-4xl mx-auto text-center">
 <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
 Galeria de Trabalhos
 </h1>
 <p className="text-xl text-gray-700">
 Veja os nossos trabalhos realizados - fotos antes e depois
 </p>
 </div>
 </div>
 </section>

 {/* Category Filter */}
 <section className="py-8 bg-white">
 <div className="container">
 <div className="flex flex-wrap gap-3 justify-center">
 {categories.map((category) => (
 <button
 key={category}
 onClick={() => setSelectedCategory(category)}
 className={`px-6 py-2 rounded-full font-semibold transition-colors ${
 selectedCategory === category
 ? 'bg-red-600 text-white'
 : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
 }`}
 >
 {category}
 </button>
 ))}
 </div>
 </div>
 </section>

 {/* Gallery Grid */}
 <section className="py-16 bg-gray-50">
 <div className="container">
 {isLoading ? (
 <div className="text-center py-12">
 <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
 <p className="mt-4 text-gray-600">A carregar galeria...</p>
 </div>
 ) : filteredPhotos.length === 0 ? (
 <div className="text-center py-12">
 <p className="text-gray-600 text-lg">Nenhuma foto disponível nesta categoria.</p>
 </div>
 ) : (
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
 {filteredPhotos.map((photo) => (
 <div
 key={photo.id}
 className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow cursor-pointer"
 onClick={() => setSelectedPhoto({
 before: photo.beforeImageUrl,
 after: photo.afterImageUrl,
 title: photo.title
 })}
 >
 {/* Before/After Comparison */}
 <div className="relative h-64 overflow-hidden">
 <div className="grid grid-cols-2 h-full">
 <div className="relative">
 <img
 src={photo.beforeImageUrl}
 alt={`Photo avant travaux - ${photo.title}${photo.description ? ' - ' + photo.description : ''}`}
 className="w-full h-full object-cover"
 width="400"
 height="300"
 />
 <div className="absolute top-2 left-2 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
 Antes
 </div>
 </div>
 <div className="relative">
 <img
 src={photo.afterImageUrl}
 alt={`Photo après travaux - ${photo.title}${photo.description ? ' - ' + photo.description : ''}`}
 className="w-full h-full object-cover"
 width="400"
 height="300"
 />
 <div className="absolute top-2 right-2 bg-green-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
 Depois
 </div>
 </div>
 </div>
 </div>

 {/* Photo Info */}
 <div className="p-4">
 <h3 className="font-bold text-lg text-gray-900 mb-2">{photo.title}</h3>
 {photo.description && (
 <p className="text-gray-600 text-sm mb-2">{photo.description}</p>
 )}
 <div className="flex items-center justify-between text-sm">
 <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full font-semibold">
 {photo.category}
 </span>
 {photo.city && (
 <span className="text-gray-500">📍 {photo.city}</span>
 )}
 </div>
 </div>
 </div>
 ))}
 </div>
 )}
 </div>
 </section>

 {/* Lightbox Modal */}
 {selectedPhoto && (
 <div
 role="dialog"
 aria-modal="true"
 aria-labelledby="modal-title"
 className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
 onClick={() => setSelectedPhoto(null)}
 >
 <button
 className="absolute top-4 right-4 text-white text-5xl hover:text-gray-300 transition-colors w-12 h-12 flex items-center justify-center"
 onClick={() => setSelectedPhoto(null)}
 aria-label="Fechar"
 >
 ×
 </button>

 <div className="max-w-6xl w-full">
 <h2 id="modal-title" className="text-white text-2xl font-bold mb-4 text-center">
 {selectedPhoto.title}
 </h2>

 {/* Toggle Button */}
 <div className="flex justify-center mb-4">
 <button
 onClick={(e) => {
 e.stopPropagation();
 setShowBefore(!showBefore);
 }}
 className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors"
 >
 {showBefore ? "Ver Depois →" : "← Ver Antes"}
 </button>
 </div>

 {/* Image Display */}
 <div className="relative">
 <img
 src={showBefore ? selectedPhoto.before : selectedPhoto.after}
 alt={showBefore ? "Antes" : "Depois"}
 className="max-w-full max-h-[70vh] object-contain mx-auto rounded-lg"
 />
 <div className={`absolute top-4 ${showBefore ? 'left-4' : 'right-4'} ${showBefore ? 'bg-red-600' : 'bg-green-600'} text-white px-4 py-2 rounded-full font-semibold`}>
 {showBefore ? "Antes" : "Depois"}
 </div>
 </div>
 </div>
 </div>
 )}

 <Footer />
 </>
 );
}
