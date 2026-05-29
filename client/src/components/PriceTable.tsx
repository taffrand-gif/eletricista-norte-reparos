import React from 'react';
import { useSite } from '@/contexts/SiteContext';
import { Euro, Clock, Shield, Check, MapPin, AlertCircle } from 'lucide-react';

export default function PriceTable() {
 const { config } = useSite();
 
 // Tabela de preços para eletricidade (sem IVA)
 const electricPrices = [
 {
 service: "Pequena Arranjo",
 description: "Tomadas, interruptores, pontos de luz",
 price: "35€ - 70€",
 details: ["30 min - 1h de trabalho", "Pequeno material incluído", "Deslocação à parte"]},
 {
 service: "Intervenção Standard",
 description: "Avarias, quadros, curto-circuitos",
 price: "70€ - 140€",
 details: ["1-2h de trabalho", "Pesquisa de avaria", "Resolução duradoura"]},
 {
 service: "Certificação / Potência",
 description: "certificação elétrica ou aumento potência",
 price: "Sob Orçamento",
 details: ["Vistoria técnica", "Tratamos da papelada", "Garantia de aprovação"]}
 ];

 const interventionPrices = electricPrices;

 return (
 <section id="precos" className="py-16 bg-white">
 <div className="container mx-auto px-4">
 
 {/* Header Philosophy */}
 <div className="text-center mb-16 max-w-4xl mx-auto">
 <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
 Preços Claros. <span className="text-[var(--site-primary)]">Sem Surpresas.</span>
 </h2>
 <blockquote className="text-xl text-gray-600 italic border-l-4 border-[var(--site-primary)] pl-6 py-2 bg-gray-50 rounded-r-lg">
 "Não cobramos o tempo de viagem para enriquecer, mas para pagar o gasóleo e o desgaste da carrinha. É justo, é claro, é afixado."
 </blockquote>
 </div>

 {/* Zone Table */}
 {config.pricingZones && (
 <div className="mb-16">
 <h3 className="text-2xl font-bold mb-6 flex items-center">
 <MapPin className="w-6 h-6 mr-2 text-[var(--site-primary)]" />
 Zonas de Deslocação
 </h3>
 <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
 <table className="w-full text-left border-collapse">
 <thead>
 <tr className="bg-gray-100 text-gray-700 uppercase text-sm leading-normal">
 <th className="py-3 px-6">Zona</th>
 <th className="py-3 px-6">Localidades</th>
 <th className="py-3 px-6 text-center">Custo Deslocação</th>
 <th className="py-3 px-6 text-center">Tempo Chegada</th>
 </tr>
 </thead>
 <tbody className="text-gray-600 text-sm font-light">
 {config.pricingZones.map((zone, idx) => (
 <tr key={idx} className="border-b border-gray-200 hover:bg-gray-50">
 <td className="py-3 px-6 font-bold whitespace-nowrap">{zone.name}</td>
 <td className="py-3 px-6">{zone.cities}</td>
 <td className="py-3 px-6 text-center font-bold text-[var(--site-primary)] text-lg">{zone.price}</td>
 <td className="py-3 px-6 text-center">{zone.time}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 <p className="text-xs text-gray-500 mt-2">* Valores sem IVA. O valor da deslocação é cobrado apenas uma vez por intervenção.</p>
 </div>
 )}

 <div className="grid md:grid-cols-2 gap-12">
 
 {/* Grelha de intervenções */}
 <div>
 <h3 className="text-2xl font-bold mb-6 flex items-center">
 <Euro className="w-6 h-6 mr-2 text-[var(--site-primary)]" />
 Estimativa de Mão de Obra
 </h3>
 <div className="space-y-4">
 {interventionPrices.map((item, idx) => (
 <div key={idx} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
 <div className="flex justify-between items-start mb-2">
 <h4 className="font-bold text-lg">{item.service}</h4>
 <span className="font-bold text-[var(--site-primary-dark)] bg-white px-2 py-1 rounded shadow-sm text-sm">{item.price}</span>
 </div>
 <p className="text-gray-600 text-sm mb-3">{item.description}</p>
 <div className="flex flex-wrap gap-2">
 {item.details.map((d, i) => (
 <span key={i} className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded flex items-center">
 <Check className="w-3 h-3 mr-1" /> {d}
 </span>
 ))}
 </div>
 </div>
 ))}
 </div>
 </div>

 {/* Concrete Examples */}
 <div>
 <h3 className="text-2xl font-bold mb-6 flex items-center">
 <AlertCircle className="w-6 h-6 mr-2 text-[var(--site-primary)]" />
 Exemplos Reais
 </h3>
 <div className="space-y-6">
 <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
 <h4 className="font-bold text-blue-900 mb-2">"Moro em Macedo e preciso trocar um disjuntor."</h4>
 <ul className="space-y-1 text-blue-800 text-sm">
 <li className="flex justify-between"><span>Deslocação (Zona 1):</span> <span>15€</span></li>
 <li className="flex justify-between"><span>Mão de Obra (30min):</span> <span>35€</span></li>
 <li className="border-t border-blue-200 mt-2 pt-2 font-bold flex justify-between text-lg"><span>Total:</span> <span>50€</span></li>
 </ul>
 </div>

 <div className="bg-amber-50 p-6 rounded-lg border border-amber-100">
 <h4 className="font-bold text-amber-900 mb-2">"Urgência em Bragança num Domingo."</h4>
 <ul className="space-y-1 text-amber-800 text-sm">
 <li className="flex justify-between"><span>Deslocação (Zona 3):</span> <span>35€</span></li>
 <li className="flex justify-between"><span>Intervenção Urgência (1h):</span> <span>100€</span></li>
 <li className="border-t border-amber-200 mt-2 pt-2 font-bold flex justify-between text-lg"><span>Total:</span> <span>135€</span></li>
 </ul>
 <p className="text-xs text-amber-700 mt-2 italic">Preço anunciado ao telefone ANTES de sair.</p>
 </div>
 </div>

 <div className="mt-8 bg-gray-900 text-white p-6 rounded-lg text-center">
 <p className="font-bold text-lg mb-2">Dúvidas no preço?</p>
 <p className="text-gray-300 mb-4 text-sm">Ligue-nos, diga onde está e o que se passa. Damos o preço estimado na hora.</p>
 <a href={`tel:+351${config.phone.replace(/\s/g, '')}`} className="inline-block bg-[var(--site-primary)] text-white font-bold px-6 py-2 rounded hover:bg-[var(--site-primary-dark)] transition-colors">
 Ligar {config.phone}
 </a>
 </div>
 </div>

 </div>
 </div>
 </section>
 );
}
