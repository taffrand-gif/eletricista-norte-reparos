import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useSite } from '@/contexts/SiteContext';
import { Phone, Clock, MapPin, AlertTriangle } from 'lucide-react';
function Urgencia() {
 const { config } = useSite();
 const phone = '932 321 892';
 const phoneClean = '932321892';
 const whatsapp = '351932321892';
 return (
 <>
 <Helmet>
 <title>Urgência Eletricista — Intervenção Imediata 24h | Norte Reparos</title>
 <meta name="description" content="Urgência eletricista 24h em Trás-os-Montes. Sem luz? Curto-circuito? Cheiro queimado? Chegamos Atendimento prioritário. Certificação DGEG. 932 321 892" />
 </Helmet>
 {/* Hero Urgência */}
 <section className="relative bg-gradient-to-br from-orange-600 to-red-700 text-white py-20">
 <div className="container mx-auto px-4 max-w-5xl">
 <div className="text-center">
 <div className="inline-block bg-yellow-400 text-red-900 px-6 py-2 rounded-full font-black text-sm mb-6 animate-pulse">
 ⚡ URGÊNCIA Atendimento 24h/7d
 </div>
 <h1 className="text-4xl md:text-6xl font-black mb-6">
 Eletricista Urgente<br />
 Chegamos Atendimento prioritário
 </h1>
 <div className="flex flex-wrap justify-center gap-4 text-xl md:text-2xl font-bold mb-8">
 <span className="flex items-center gap-2">⚡ Sem Luz?</span>
 <span className="flex items-center gap-2">💥 Curto-Circuito?</span>
 <span className="flex items-center gap-2">🔥 Cheiro Queimado?</span>
 </div>
 <p className="text-2xl md:text-3xl font-bold mb-8">
 ⏱️ Não "Daqui a 1 Semana" — HOJE MESMO
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
 <a
 href={`tel:+351${phoneClean}`}
 className="inline-flex items-center justify-center gap-3 bg-white text-orange-600 font-black text-xl px-10 py-5 rounded-xl shadow-2xl hover:shadow-3xl transition-all hover:scale-105"
 >
 <Phone className="w-6 h-6" />
 {phone} — LIGAR AGORA
 </a>
 <a
 href={`https://wa.me/${whatsapp}?text=URGÊNCIA%20-%20Preciso%20de%20eletricista%20JÁ`}
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center justify-center gap-3 bg-green-500 text-white font-black text-xl px-10 py-5 rounded-xl shadow-2xl hover:shadow-3xl transition-all hover:scale-105"
 >
 💬 WhatsApp Urgente
 </a>
 </div>
 <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto">
 <div className="grid grid-cols-3 gap-4 text-center">
 <div>
 <div className="text-3xl font-black">40min</div>
 <div className="text-sm">Tempo Chegada</div>
 </div>
 <div>
 <div className="text-3xl font-black">Atendimento 24h/7d</div>
 <div className="text-sm">Disponível</div>
 </div>
 <div>
 <div className="text-3xl font-black">DGEG</div>
 <div className="text-sm">Certificado</div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>
 {/* Problemas Urgentes */}
 <section className="py-16 bg-gray-50">
 <div className="container mx-auto px-4 max-w-6xl">
 <h2 className="text-3xl md:text-4xl font-black text-center mb-4">
 ⚠️ Problemas Que NÃO Podem Esperar
 </h2>
 <p className="text-center text-gray-600 mb-12 text-lg">
 Risco de incêndio. Risco de choque. Não arrisque.
 </p>
 <div className="grid md:grid-cols-3 gap-8">
 {/* Sem Luz */}
 <div className="bg-white rounded-2xl p-8 shadow-xl border-l-4 border-orange-500">
 <div className="text-5xl mb-4 text-center">⚡</div>
 <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
 Sem Luz Total
 </h3>
 <div className="space-y-3 mb-6">
 <p className="text-gray-700"><strong>Casa às escuras:</strong></p>
 <ul className="space-y-2 text-gray-600">
 <li className="flex items-start gap-2">
 <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
 <span>Frigorífico desliga = comida estraga</span>
 </li>
 <li className="flex items-start gap-2">
 <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
 <span>Sem aquecimento no inverno</span>
 </li>
 <li className="flex items-start gap-2">
 <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
 <span>Impossível trabalhar em casa</span>
 </li>
 <li className="flex items-start gap-2">
 <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
 <span>Situação insustentável</span>
 </li>
 </ul>
 </div>
 <div className="bg-orange-50 rounded-lg p-4 mb-4">
 <p className="text-sm font-bold text-orange-900">
 💰 Cada dia sem luz:<br />
 €200+ em prejuízos
 </p>
 </div>
 <a
 href={`tel:+351${phoneClean}`}
 className="block w-full text-center bg-orange-600 text-white font-bold py-3 rounded-xl hover:bg-orange-700 transition-all"
 >
 RESOLVER AGORA
 </a>
 </div>
 {/* Curto-Circuito */}
 <div className="bg-white rounded-2xl p-8 shadow-xl border-l-4 border-red-600">
 <div className="text-5xl mb-4 text-center">💥</div>
 <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
 Curto-Circuito
 </h3>
 <div className="space-y-3 mb-6">
 <p className="text-gray-700"><strong>Disjuntor salta constantemente:</strong></p>
 <ul className="space-y-2 text-gray-600">
 <li className="flex items-start gap-2">
 <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
 <span>Risco de incêndio REAL</span>
 </li>
 <li className="flex items-start gap-2">
 <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
 <span>Cabos a sobreaquecer</span>
 </li>
 <li className="flex items-start gap-2">
 <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
 <span>Equipamentos queimam</span>
 </li>
 <li className="flex items-start gap-2">
 <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
 <span>Perigo para família</span>
 </li>
 </ul>
 </div>
 <div className="bg-red-100 rounded-lg p-4 mb-4">
 <p className="text-sm font-bold text-red-900">
 🚨 NÃO force disjuntor<br />
 Risco de incêndio
 </p>
 </div>
 <a
 href={`tel:+351${phoneClean}`}
 className="block w-full text-center bg-red-600 text-white font-bold py-3 rounded-xl hover:bg-red-700 transition-all"
 >
 RESOLVER AGORA
 </a>
 </div>
 {/* Cheiro Queimado */}
 <div className="bg-white rounded-2xl p-8 shadow-xl border-l-4 border-red-800">
 <div className="text-5xl mb-4 text-center">🔥</div>
 <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
 Cheiro Queimado
 </h3>
 <div className="space-y-3 mb-6">
 <p className="text-gray-700"><strong>Cheiro a plástico queimado:</strong></p>
 <ul className="space-y-2 text-gray-600">
 <li className="flex items-start gap-2">
 <AlertTriangle className="w-5 h-5 text-red-800 flex-shrink-0 mt-0.5" />
 <span>Isolamento a derreter</span>
 </li>
 <li className="flex items-start gap-2">
 <AlertTriangle className="w-5 h-5 text-red-800 flex-shrink-0 mt-0.5" />
 <span>Incêndio iminente</span>
 </li>
 <li className="flex items-start gap-2">
 <AlertTriangle className="w-5 h-5 text-red-800 flex-shrink-0 mt-0.5" />
 <span>Instalação perigosa</span>
 </li>
 <li className="flex items-start gap-2">
 <AlertTriangle className="w-5 h-5 text-red-800 flex-shrink-0 mt-0.5" />
 <span>EMERGÊNCIA ABSOLUTA</span>
 </li>
 </ul>
 </div>
 <div className="bg-red-100 rounded-lg p-4 mb-4">
 <p className="text-sm font-bold text-red-900">
 🚨 Desligue quadro geral<br />
 Ligue IMEDIATAMENTE
 </p>
 </div>
 <a
 href={`tel:+351${phoneClean}`}
 className="block w-full text-center bg-red-800 text-white font-bold py-3 rounded-xl hover:bg-red-900 transition-all"
 >
 RESOLVER AGORA
 </a>
 </div>
 </div>
 </div>
 </section>
 {/* Porque Somos Diferentes */}
 <section className="py-16 bg-white">
 <div className="container mx-auto px-4 max-w-6xl">
 <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
 ⚡ Porque Somos Diferentes em Urgências
 </h2>
 <div className="grid md:grid-cols-2 gap-8 mb-12">
 {/* Certificação DGEG */}
 <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border-2 border-blue-200">
 <div className="flex items-start gap-4">
 <div className="text-5xl">📋</div>
 <div>
 <h3 className="text-2xl font-bold text-gray-900 mb-3">
 Certificação DGEG
 </h3>
 <p className="text-gray-700 mb-4">
 Instalações legais e seguras. Seguro cobre em caso de incêndio.
 </p>
 <div className="space-y-2">
 <p className="flex items-center gap-2 text-gray-700">
 <span className="text-green-500 font-bold">✓</span>
 Trabalho legal e certificado
 </p>
 <p className="flex items-center gap-2 text-gray-700">
 <span className="text-green-500 font-bold">✓</span>
 Proteção total do seguro
 </p>
 <p className="flex items-center gap-2 text-gray-700">
 <span className="text-green-500 font-bold">✓</span>
 Normas RTIEBT cumpridas
 </p>
 </div>
 </div>
 </div>
 </div>
 {/* Equipamento Profissional */}
 <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border-2 border-orange-200">
 <div className="flex items-start gap-4">
 <div className="text-5xl">🔧</div>
 <div>
 <h3 className="text-2xl font-bold text-gray-900 mb-3">
 Equipamento Profissional
 </h3>
 <p className="text-gray-700 mb-4">
 Fluke 1587 (€800), câmara termográfica, ferramentas certificadas 1000V
 </p>
 <div className="space-y-2">
 <p className="flex items-center gap-2 text-gray-700">
 <span className="text-green-500 font-bold">✓</span>
 Diagnóstico preciso e rápido
 </p>
 <p className="flex items-center gap-2 text-gray-700">
 <span className="text-green-500 font-bold">✓</span>
 Deteção de problemas ocultos
 </p>
 <p className="flex items-center gap-2 text-gray-700">
 <span className="text-green-500 font-bold">✓</span>
 Resolvemos à primeira
 </p>
 </div>
 </div>
 </div>
 </div>
 {/* Cobertura Rápida */}
 <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200">
 <div className="flex items-start gap-4">
 <div className="text-5xl">📍</div>
 <div>
 <h3 className="text-2xl font-bold text-gray-900 mb-3">
 Cobertura Regional Rápida
 </h3>
 <div className="space-y-2 mb-4">
 <p className="text-gray-700">
 <strong>Macedo:</strong> 15 minutos
 </p>
 <p className="text-gray-700">
 <strong>Bragança:</strong> 40 minutos
 </p>
 <p className="text-gray-700">
 <strong>Vila Real:</strong> 1 hora
 </p>
 </div>
 <p className="flex items-center gap-2 text-gray-700">
 <span className="text-green-500 font-bold">✓</span>
 base na região
 </p>
 <p className="flex items-center gap-2 text-gray-700">
 <span className="text-green-500 font-bold">✓</span>
 Não estamos "do outro lado do país"
 </p>
 </div>
 </div>
 </div>
 {/* Garantia */}
 <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200">
 <div className="flex items-start gap-4">
 <div className="text-5xl">🛡️</div>
 <div>
 <h3 className="text-2xl font-bold text-gray-900 mb-3">
 Garantia Mesmo em Urgência
 </h3>
 <p className="text-gray-700 mb-4">
 6 meses mão de obra por escrito
 </p>
 <div className="space-y-2">
 <p className="flex items-center gap-2 text-gray-700">
 <span className="text-green-500 font-bold">✓</span>
 Fatura legal com NIF
 </p>
 <p className="flex items-center gap-2 text-gray-700">
 <span className="text-green-500 font-bold">✓</span>
 Não desaparecemos depois de cobrar
 </p>
 <p className="flex items-center gap-2 text-gray-700">
 <span className="text-green-500 font-bold">✓</span>
 Empresa registada e legal
 </p>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>
 {/* Preços Urgência */}
 <section className="py-16 bg-gray-50">
 <div className="container mx-auto px-4 max-w-4xl">
 <h2 className="text-3xl md:text-4xl font-black text-center mb-4">
 💰 Preços Urgência — Transparentes
 </h2>
 <p className="text-center text-gray-600 mb-12 text-lg">
 Preço comunicado ANTES de sair. Sem surpresas.
 </p>
 <div className="bg-white rounded-2xl p-8 shadow-xl">
 <div className="grid md:grid-cols-2 gap-6 mb-8">
 <div className="bg-gray-50 rounded-xl p-6">
 <h3 className="font-bold text-gray-900 mb-2">Dias Úteis (8h-18h)</h3>
 <p className="text-3xl font-black text-orange-600">70€/h</p>
 <p className="text-sm text-gray-600">+ deslocação conforme zona</p>
 </div>
 <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
 <h3 className="font-bold text-gray-900 mb-2">Sábado</h3>
 <p className="text-3xl font-black text-blue-600">90€/h</p>
 <p className="text-sm text-gray-600">+ deslocação conforme zona</p>
 </div>
 <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
 <h3 className="font-bold text-gray-900 mb-2">Domingo/Feriado</h3>
 <p className="text-3xl font-black text-red-600">100€/h</p>
 <p className="text-sm text-gray-600">+ deslocação conforme zona</p>
 </div>
 <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-200">
 <h3 className="font-bold text-gray-900 mb-2">Noturno (18h-8h)</h3>
 <p className="text-3xl font-black text-purple-600">+50%</p>
 <p className="text-sm text-gray-600">Sobre mão de obra + deslocação</p>
 </div>
 </div>
 <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 border-2 border-orange-200">
 <h3 className="font-bold text-gray-900 mb-4">Exemplo: Urgência Domingo 22h em Bragança</h3>
 <div className="space-y-2 text-gray-700">
 <div className="flex justify-between">
 <span>Deslocação Zona 3:</span>
 <span className="font-bold">35€</span>
 </div>
 <div className="flex justify-between">
 <span>Majoração noturna deslocação (+50%):</span>
 <span className="font-bold">+17,50€</span>
 </div>
 <div className="flex justify-between">
 <span>Mão de obra Domingo (1h):</span>
 <span className="font-bold">100€</span>
 </div>
 <div className="flex justify-between">
 <span>Majoração noturna MO (+50%):</span>
 <span className="font-bold">+50€</span>
 </div>
 <hr className="border-gray-300" />
 <div className="flex justify-between text-xl font-black text-orange-600">
 <span>TOTAL:</span>
 <span>202,50€</span>
 </div>
 </div>
 <p className="text-sm text-gray-600 mt-4 italic text-center">
 Vale a pena? Casa segura sem risco incêndio = SIM
 </p>
 </div>
 </div>
 </div>
 </section>
 {/* CTA Final */}
 <section className="py-16 bg-gradient-to-br from-orange-600 to-red-700 text-white">
 <div className="container mx-auto px-4 max-w-4xl text-center">
 <h2 className="text-3xl md:text-5xl font-black mb-6">
 ⚡ Não Arrisque a Sua Segurança
 </h2>
 <p className="text-xl md:text-2xl mb-8">
 Risco de incêndio é REAL. Certificação DGEG. Chegamos Atendimento prioritário.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
 <a
 href={`tel:+351${phoneClean}`}
 className="inline-flex items-center justify-center gap-3 bg-white text-orange-600 font-black text-2xl px-12 py-6 rounded-xl shadow-2xl hover:shadow-3xl transition-all hover:scale-105"
 >
 <Phone className="w-8 h-8" />
 {phone}
 </a>
 <a
 href={`https://wa.me/${whatsapp}?text=URGÊNCIA%20-%20Preciso%20de%20eletricista%20JÁ`}
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center justify-center gap-3 bg-green-500 text-white font-black text-2xl px-12 py-6 rounded-xl shadow-2xl hover:shadow-3xl transition-all hover:scale-105"
 >
 💬 WhatsApp
 </a>
 </div>
 <p className="text-lg">
 Atendimento 24h/7d/7 dias — Certificação DGEG incluída
 </p>
 </div>
 </section>
 {/* Sticky Bottom Bar Mobile */}
 <div className="fixed bottom-0 left-0 right-0 bg-orange-600 text-white p-4 shadow-2xl md:hidden z-50">
 <div className="flex gap-2">
 <a
 href={`tel:+351${phoneClean}`}
 className="flex-1 bg-white text-orange-600 font-bold py-3 rounded-lg text-center"
 >
 📞 LIGAR
 </a>
 <a
 href={`https://wa.me/${whatsapp}?text=URGÊNCIA`}
 target="_blank"
 rel="noopener noreferrer"
 className="flex-1 bg-green-500 text-white font-bold py-3 rounded-lg text-center"
 >
 💬 WhatsApp
 </a>
 </div>
 </div>
 </>
 );
}
export default Urgencia;
