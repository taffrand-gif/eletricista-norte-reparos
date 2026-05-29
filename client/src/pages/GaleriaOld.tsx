import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ACTIVE_CONFIG } from "../../../shared/serviceConfig";
import { IMAGES } from "../../../shared/images";
import { useSEO } from "@/hooks/useSEO";

interface GalleryImage {
 url: string;
 alt: string;
 category: string;
}

export default function Galeria() {
 const config = ACTIVE_CONFIG;
 const [selectedImage, setSelectedImage] = useState<string | null>(null);
 const [selectedCategory, setSelectedCategory] = useState<string>("Todas");

 useSEO({
 title: `Galeria de Trabalhos | ${config.businessName}`,
 description: `Veja a galeria de trabalhos realizados pela ${config.businessName}. Serviços de ${config.name.toLowerCase()} com qualidade e profissionalismo.`,
 canonical: `https://${config.domain}/galeria`});

 const images = getGalleryImages(config.type);
 const categories = ["Todas", ...Array.from(new Set(images.map(img => img.category)))];

 const filteredImages = selectedCategory === "Todas" 
 ? images 
 : images.filter(img => img.category === selectedCategory);

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
 Veja alguns dos nossos trabalhos realizados com qualidade e profissionalismo
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
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
 {filteredImages.map((image, index) => (
 <div
 key={index}
 className="relative group cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow bg-white"
 onClick={() => setSelectedImage(image.url)}
 >
 <img
 src={image.url}
 alt={image.alt}
 className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
 />
 <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity flex items-center justify-center">
 <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-semibold text-lg">
 🔍 Ver Imagem
 </span>
 </div>
 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
 <p className="text-white text-sm font-semibold">{image.alt}</p>
 <p className="text-gray-300 text-xs">{image.category}</p>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Lightbox Modal */}
 {selectedImage && (
 <div
 className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
 onClick={() => setSelectedImage(null)}
 >
 <button
 className="absolute top-4 right-4 text-white text-5xl hover:text-gray-300 transition-colors w-12 h-12 flex items-center justify-center"
 onClick={() => setSelectedImage(null)}
 aria-label="Fechar"
 >
 ×
 </button>
 <img
 src={selectedImage}
 alt="Imagem ampliada"
 className="max-w-full max-h-full object-contain rounded-lg"
 />
 </div>
 )}

 <Footer />
 </>
 );
}

// Fonction pour générer la galerie avec les vraies images
function getGalleryImages(serviceType: 'plomberie' | 'electricite'): GalleryImage[] {
 if (serviceType === 'plomberie') {
 return [
 { url: IMAGES.plomberie.hero, alt: "Arranjo profissional de canalização", category: "Arranjos" },
 { url: IMAGES.plomberie.van, alt: "Viatura de serviço equipada", category: "Equipamento" },
 { url: IMAGES.plomberie.emergency, alt: "Serviço de urgência 24h", category: "Urgências" },
 { url: IMAGES.gallery[0], alt: "Instalação de torneira moderna", category: "Instalações" },
 { url: IMAGES.gallery[1], alt: "Manutenção preventiva", category: "Manutenção" },
 { url: IMAGES.gallery[2], alt: "Desentupimento de canalização", category: "Desentupimentos" },
 { url: IMAGES.gallery[3], alt: "Arranjo de curto-circuito", category: "Arranjos" },
 { url: IMAGES.gallery[4], alt: "Instalação de esquentador", category: "Instalações" },
 ];
 } else {
 return [
 { url: IMAGES.electricite.hero, alt: "Instalação de quadro elétrico", category: "Instalações" },
 { url: IMAGES.electricite.wiring, alt: "Instalação de fiação elétrica", category: "Instalações" },
 { url: IMAGES.electricite.emergency, alt: "Serviço de urgência 24h", category: "Urgências" },
 { url: IMAGES.gallery[0], alt: "Arranjo de curto-circuito", category: "Arranjos" },
 { url: IMAGES.gallery[1], alt: "Instalação de tomadas", category: "Instalações" },
 { url: IMAGES.gallery[2], alt: "Certificação elétrica", category: "Certificação" },
 { url: IMAGES.gallery[3], alt: "Instalação de iluminação LED", category: "Iluminação" },
 { url: IMAGES.gallery[4], alt: "Substituição de disjuntor", category: "Arranjos" },
 ];
 }
}
