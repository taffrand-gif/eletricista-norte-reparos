import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ACTIVE_CONFIG } from "../../../shared/serviceConfig";
import { useSEO } from "@/hooks/useSEO";
import { Card } from "@/components/ui/card";

export default function Trabalhos() {
 const config = ACTIVE_CONFIG;
 
 useSEO({
 title: `Trabalhos Realizados - ${config.name}`,
 description: `Veja os nossos trabalhos de ${config.type === 'plomberie' ? 'canalização' : 'eletricidade'} em Bragança. Galeria antes/depois.`});

 const projects = Array.from({ length: 10 }, (_, i) => ({
 id: i + 1,
 title: config.type === 'plomberie' 
 ? ['Arranjo Fuga Água', 'Instalação Esquentador', 'Desentupimento', 'Substituição Canalização'][i % 4]
 : ['Substituição Quadro Elétrico', 'Instalação Tomadas', 'Arranjo Curto-Circuito', 'Iluminação LED'][i % 4],
 location: ['Bragança', 'Macedo de Cavaleiros', 'Mirandela', 'Vinhais'][i % 4],
 date: '2026'}));

 return (
 <div className="min-h-screen flex flex-col">
 <Header />
 
 <main className="flex-1">
 <section className="bg-gradient-to-br from-red-600 to-red-700 text-white py-16">
 <div className="container">
 <h1 className="text-4xl md:text-5xl font-bold mb-4">
 Trabalhos Realizados
 </h1>
 <p className="text-xl text-red-100">
 Veja alguns dos nossos projetos concluídos com sucesso.
 </p>
 </div>
 </section>

 <section className="py-16">
 <div className="container">
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
 {projects.map((project) => (
 <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-shadow">
 <div className="relative h-64 bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
 <span className="text-white text-7xl opacity-20">
 {config.type === 'plomberie' ? '💧' : '⚡'}
 </span>
 </div>
 <div className="p-6">
 <h3 className="text-xl font-bold mb-2">{project.title}</h3>
 <p className="text-gray-600 mb-1">📍 {project.location}</p>
 <p className="text-gray-500 text-sm">📅 {project.date}</p>
 </div>
 </Card>
 ))}
 </div>
 </div>
 </section>

 <section className="bg-gray-50 py-16">
 <div className="container text-center">
 <h2 className="text-3xl font-bold mb-4">Precisa de um Serviço?</h2>
 <a href={`tel:+351${config.phone.replace(/\s/g, "")}`} className="bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 inline-block">
 📞 Ligue: {config.phone}
 </a>
 </div>
 </section>
 </main>

 <Footer />
</div>
 );
}
