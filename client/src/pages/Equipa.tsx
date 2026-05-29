import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ACTIVE_CONFIG } from "../../../shared/serviceConfig";
import { useSEO } from "@/hooks/useSEO";
import { Card } from "@/components/ui/card";

export default function Equipa() {
 const config = ACTIVE_CONFIG;
 
 useSEO({
 title: `Nossa Equipa - ${config.name}`,
 description: `Conheça a equipa profissional de ${config.type === 'plomberie' ? 'canalizadores' : 'eletricistas'} certificados.`});

 return (
 <div className="min-h-screen flex flex-col">
 <Header />
 
 <main className="flex-1">
 <section className="bg-gradient-to-br from-red-600 to-red-700 text-white py-16">
 <div className="container">
 <h1 className="text-4xl md:text-5xl font-bold mb-4">
 Nossa Equipa
 </h1>
 <p className="text-xl text-red-100">
 Profissionais certificados com mais de 10 anos de experiência.
 </p>
 </div>
 </section>

 <section className="py-16">
 <div className="container max-w-4xl">
 <Card className="p-8 mb-8">
 <h2 className="text-2xl font-bold mb-4">Quem Somos</h2>
 <p className="text-gray-700 mb-4">
 Somos uma equipa de {config.type === 'plomberie' ? 'canalizadores' : 'eletricistas'} certificados com mais de 10 anos de experiência na região de Bragança e Trás-os-Montes.
 </p>
 <p className="text-gray-700">
 Disponíveis 24 horas por dia, 7 dias por semana, garantimos um serviço rápido, profissional e com garantia de 12 meses.
 </p>
 </Card>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
 {['Profissionalismo', 'Rapidez', 'Garantia'].map((value) => (
 <Card key={value} className="p-6 text-center">
 <div className="text-4xl mb-3">✓</div>
 <h3 className="font-bold text-lg">{value}</h3>
 </Card>
 ))}
 </div>
 </div>
 </section>

 <section className="bg-gray-50 py-16">
 <div className="container text-center">
 <h2 className="text-3xl font-bold mb-4">Entre em Contacto</h2>
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
