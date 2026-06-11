import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ACTIVE_CONFIG } from "../../../shared/serviceConfig";

/**
 * LOT 5 RÈGLE 72 : témoignages inventés supprimés.
 * Espace réservé pour témoignages réels de clients.
 * Les anciens témoignages affichés sur cette page ont été retirés.
 * Un formulaire de soumission sera mis en place après validation des premiers chantiers réels.
 */
export default function Testemunhos() {
 const config = ACTIVE_CONFIG;
 return (
 <div className="min-h-screen flex flex-col">
 <Header />
 <main className="flex-1 container mx-auto px-4 py-16">
 <h1 className="text-4xl font-bold mb-6 text-center">
 Testemunhos de Clientes
 </h1>
 <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
 <h2 className="text-2xl font-semibold mb-4">
 Espaço reservado para testemunhos reais
 </h2>
 <p className="text-gray-700 mb-4">
 Para garantir a autenticidade dos testemunhos publicados, optámos por
 remover qualquer conteúdo fabricado. Em breve, esta página apresentará
 depoimentos reais de clientes da região de {config.region || "Trás-os-Montes"}.
 </p>
 <p className="text-gray-700 mb-4">
 Se é cliente e pretende partilhar a sua experiência, agradecemos o
 contacto através do nosso formulário de orçamento. Os testemunhos serão
 publicados após validação da intervenção realizada.
 </p>
 <p className="text-gray-700">
 Obrigado pela compreensão.
 </p>
 </div>
 </main>
 <Footer />
 </div>
 );
}
