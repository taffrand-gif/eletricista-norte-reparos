import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ACTIVE_CONFIG } from "../../../shared/serviceConfig";
import { useSEO } from "@/hooks/useSEO";
import { Card } from "@/components/ui/card";
import { Shield, Award, FileCheck } from "lucide-react";
export default function Certificacoes() {
 const config = ACTIVE_CONFIG;
 
 useSEO({
 title: `Certificações - ${config.name}`,
 description: `Certificações profissionais e garantias. Trabalho certificado com garantia de 12 meses.`});
 return (
 <div className="min-h-screen flex flex-col">
 <Header />
 
 <main className="flex-1">
 <section className="bg-gradient-to-br from-red-600 to-red-700 text-white py-16">
 <div className="container">
 <h1 className="text-4xl md:text-5xl font-bold mb-4">
 Certificações e Garantias
 </h1>
 <p className="text-xl text-red-100">
 Trabalho profissional certificado com garantia de 12 meses.
 </p>
 </div>
 </section>
 <section className="py-16">
 <div className="container max-w-4xl">
 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
 <Card className="p-8 text-center">
 <Shield className="h-16 w-16 text-red-600 mx-auto mb-4" />
 <h3 className="font-bold text-xl mb-2">Certificação Profissional</h3>
 <p className="text-gray-600">
 {config.type === 'plomberie' ? 'Canalizador' : 'Eletricista'} certificado com mais de 10 anos de experiência
 </p>
 </Card>
 <Card className="p-8 text-center">
 <Award className="h-16 w-16 text-red-600 mx-auto mb-4" />
 <h3 className="font-bold text-xl mb-2">Garantia 12 Meses</h3>
 <p className="text-gray-600">
 Todos os trabalhos com garantia por escrito de 12 meses
 </p>
 </Card>
 <Card className="p-8 text-center">
 <FileCheck className="h-16 w-16 text-red-600 mx-auto mb-4" />
 <h3 className="font-bold text-xl mb-2">Materiais Certificados</h3>
 <p className="text-gray-600">
 Utilizamos apenas materiais de qualidade certificados
 </p>
 </Card>
 </div>
 <Card className="p-8 bg-blue-50 border-blue-200">
 <h2 className="text-2xl font-bold mb-4 text-blue-900">
 {config.type === 'plomberie' ? 'Certificação DGEG' : 'Certificação DGEG'}
 </h2>
 <p className="text-blue-800">
 Todos os nossos trabalhos são certificados e cumprem rigorosamente as normas técnicas portuguesas.
 {config.type === 'electricite' && ' Emitimos certificado DGEG obrigatório para venda/arrendamento.'}
 </p>
 </Card>
 </div>
 </section>
 <section className="bg-gray-50 py-16">
 <div className="container text-center">
 <h2 className="text-3xl font-bold mb-4">Pedir Orçamento</h2>
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
