import React from 'react';
import { useSite } from '@/contexts/SiteContext';
interface EquipamentoProfissionalProps {
 className?: string;
}
function EquipamentoProfissional({ className = '' }: EquipamentoProfissionalProps) {
 const { config } = useSite();
 const isPlumber = config.id === 'norte-reparos';
 const accentColor = isPlumber ? '#0e7490' : '#FF6B35';
 const equipmentPlumber = [
 {
 name: 'Ridgid K-9102 FlexShaft',
 price: '€8.000',
 description: 'Desentupimento profissional até 30+ metros',
 icon: '🔧'
 },
 {
 name: 'Câmara Endoscópica 30m',
 price: '€2.000',
 description: 'Inspeção interna de canos sem abrir paredes',
 icon: '📹'
 },
 {
 name: 'Câmara Termográfica FLIR',
 price: '€12.000',
 description: 'Deteção de fugas ocultas através de paredes',
 icon: '🌡️'
 }
 ];
 const equipmentElectrician = [
 {
 name: 'Fluke 1587 Megóhmetro',
 price: '€800',
 description: 'Teste de isolamento profissional certificado',
 icon: '⚡'
 },
 {
 name: 'Câmara Termográfica',
 price: '€600',
 description: 'Deteção de sobreaquecimentos e pontos quentes',
 icon: '🌡️'
 },
 {
 name: 'Ferramentas Certificadas',
 price: '€9.000+',
 description: 'Alicates isolados 1000V, multímetros calibrados',
 icon: '🔧'
 }
 ];
 const equipment = isPlumber ? equipmentPlumber : equipmentElectrician;
 const totalInvestment = isPlumber ? '€20.000+' : '€10.000+';
 return (
 <section className={`py-16 bg-white ${className}`}>
 <div className="container mx-auto px-4 max-w-6xl">
 {/* Header */}
 <div className="text-center mb-12">
 <div className="inline-block bg-gradient-to-r from-orange-50 to-red-50 px-6 py-2 rounded-full mb-4">
 <span className="text-sm font-bold" style={{ color: accentColor }}>
 🔧 EQUIPAMENTO PROFISSIONAL
 </span>
 </div>
 <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
 {totalInvestment} em Equipamento Certificado
 </h2>
 <p className="text-lg text-gray-600 max-w-2xl mx-auto">
 Não é "exagero" — é para resolver o seu problema à primeira, sem voltar 3 vezes.
 </p>
 </div>
 {/* Equipment Cards */}
 <div className="grid md:grid-cols-3 gap-8 mb-12">
 {equipment.map((item, index) => (
 <div
 key={index}
 className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border-2 border-gray-100"
 >
 <div className="text-5xl mb-4 text-center">{item.icon}</div>
 <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
 {item.name}
 </h3>
 <p className="text-3xl font-black text-center mb-4" style={{ color: accentColor }}>
 {item.price}
 </p>
 <p className="text-gray-600 text-center text-sm">
 {item.description}
 </p>
 </div>
 ))}
 </div>
 {/* Comparação Básico vs PRO */}
 <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border-2 border-blue-200 mb-12">
 <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
 Equipamento Básico vs Equipamento Profissional
 </h3>
 <div className="overflow-x-auto">
 <table className="w-full">
 <thead>
 <tr className="border-b-2 border-gray-300">
 <th className="text-left py-4 px-4 font-bold text-gray-900">Critério</th>
 <th className="text-center py-4 px-4 font-bold text-gray-900">Ferramentas Básicas</th>
 <th className="text-center py-4 px-4 font-bold" style={{ color: accentColor }}>
 Equipamento PRO
 </th>
 </tr>
 </thead>
 <tbody className="text-sm">
 <tr className="border-b border-gray-200">
 <td className="py-4 px-4 font-semibold">Investimento</td>
 <td className="py-4 px-4 text-center text-gray-600">€20-50</td>
 <td className="py-4 px-4 text-center font-bold" style={{ color: accentColor }}>
 {totalInvestment}
 </td>
 </tr>
 <tr className="border-b border-gray-200">
 <td className="py-4 px-4 font-semibold">Alcance</td>
 <td className="py-4 px-4 text-center text-gray-600">2-3 metros</td>
 <td className="py-4 px-4 text-center font-bold" style={{ color: accentColor }}>
 30+ metros
 </td>
 </tr>
 <tr className="border-b border-gray-200">
 <td className="py-4 px-4 font-semibold">Taxa Sucesso</td>
 <td className="py-4 px-4 text-center text-gray-600">30-40%</td>
 <td className="py-4 px-4 text-center font-bold" style={{ color: accentColor }}>
 95%+
 </td>
 </tr>
 <tr className="border-b border-gray-200">
 <td className="py-4 px-4 font-semibold">Tempo Médio</td>
 <td className="py-4 px-4 text-center text-gray-600">1-3 horas</td>
 <td className="py-4 px-4 text-center font-bold" style={{ color: accentColor }}>
 15-resposta prioritária
 </td>
 </tr>
 <tr className="border-b border-gray-200">
 <td className="py-4 px-4 font-semibold">Precisa Voltar</td>
 <td className="py-4 px-4 text-center text-gray-600">60% dos casos</td>
 <td className="py-4 px-4 text-center font-bold" style={{ color: accentColor }}>
 {'<5% dos casos'}
 </td>
 </tr>
 <tr>
 <td className="py-4 px-4 font-semibold">Risco Danos</td>
 <td className="py-4 px-4 text-center text-gray-600">Alto</td>
 <td className="py-4 px-4 text-center font-bold" style={{ color: accentColor }}>
 Mínimo
 </td>
 </tr>
 </tbody>
 </table>
 </div>
 </div>
 {/* Custo Real para Cliente */}
 <div className="grid md:grid-cols-2 gap-8 mb-12">
 {/* Cenário Básico */}
 <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
 <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
 <span className="text-2xl">❌</span>
 Com Ferramentas Básicas
 </h4>
 <div className="space-y-3 text-gray-700">
 <div className="flex justify-between">
 <span>Tentativa 1 (não resolve):</span>
 <span className="font-bold">€40-60</span>
 </div>
 <div className="flex justify-between">
 <span>Tentativa 2 (parcial):</span>
 <span className="font-bold">€60-80</span>
 </div>
 <div className="flex justify-between">
 <span>Danos colaterais:</span>
 <span className="font-bold">€100-200</span>
 </div>
 <div className="flex justify-between">
 <span>Profissional (final):</span>
 <span className="font-bold">€130</span>
 </div>
 <hr className="border-red-300" />
 <div className="flex justify-between text-lg font-bold text-red-600">
 <span>TOTAL:</span>
 <span>€330-470</span>
 </div>
 </div>
 <p className="text-sm text-gray-600 mt-4 italic">
 + 3 semanas de stress + casa danificada
 </p>
 </div>
 {/* Cenário PRO */}
 <div className="bg-green-50 rounded-xl p-6 border-2" style={{ borderColor: accentColor }}>
 <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
 <span className="text-2xl">✅</span>
 Com Equipamento PRO
 </h4>
 <div className="space-y-3 text-gray-700">
 <div className="flex justify-between">
 <span>Diagnóstico preciso:</span>
 <span className="font-bold">Incluído</span>
 </div>
 <div className="flex justify-between">
 <span>Resolução definitiva:</span>
 <span className="font-bold">Incluído</span>
 </div>
 <div className="flex justify-between">
 <span>Sem danos colaterais:</span>
 <span className="font-bold">€0</span>
 </div>
 <div className="flex justify-between">
 <span>Única intervenção:</span>
 <span className="font-bold">€130</span>
 </div>
 <hr className="border-green-300" />
 <div className="flex justify-between text-lg font-bold" style={{ color: accentColor }}>
 <span>TOTAL:</span>
 <span>€130</span>
 </div>
 </div>
 <p className="text-sm text-gray-600 mt-4 italic">
 + 0 stress + problema resolvido à primeira
 </p>
 </div>
 </div>
 {/* Conclusão */}
 <div className="text-center bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-200">
 <p className="text-2xl font-bold text-gray-900 mb-4">
 💡 A Diferença? Resolvemos à Primeira
 </p>
 <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
 Equipamento profissional não é "exagero" — é respeito pelo seu tempo,
 pelo seu dinheiro e pela sua casa.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a
 href={`tel:+351${config.phone.replace(/\s/g, '')}`}
 className="inline-block px-8 py-4 rounded-xl font-bold text-white text-lg shadow-lg hover:shadow-xl transition-all"
 style={{ backgroundColor: accentColor }}
 >
 📞 {config.phone}
 </a>
 <a
 href="/transparencia-precos"
 className="inline-block px-8 py-4 rounded-xl font-bold text-gray-900 text-lg shadow-lg hover:shadow-xl transition-all bg-white border-2"
 style={{ borderColor: accentColor }}
 >
 Ver Preços Transparentes
 </a>
 </div>
 </div>
 </div>
 </section>
 );
}
export default React.memo(EquipamentoProfissional);
