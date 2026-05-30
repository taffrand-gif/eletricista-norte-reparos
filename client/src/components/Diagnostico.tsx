import React, { useState } from 'react';
import { useSite } from '@/contexts/SiteContext';
const problems = {
 'staff-seekers': [
 { icon: '⚡', label: 'Sem Luz', value: 'sem-luz' },
 { icon: '🔥', label: 'Cheiro Queimado', value: 'cheiro-queimado' },
 { icon: '💥', label: 'Curto-Circuito', value: 'curto-circuito' },
 { icon: '📋', label: 'certificação elétrica', value: '' },
 { icon: '🔧', label: 'Outro Problema', value: 'outro' },
 ],
 'norte-reparos': [
 { icon: '💧', label: 'Fuga de Água', value: 'fuga-agua' },
 { icon: '🚽', label: 'Entupimento', value: 'entupimento' },
 { icon: '🔥', label: 'Esquentador', value: 'esquentador' },
 { icon: '🛁', label: 'Casa de Banho', value: 'casa-banho' },
 { icon: '🔧', label: 'Outro Problema', value: 'outro' },
 ]};
const urgencies = [
 { icon: '🚨', label: 'É URGENTE — agora', value: 'urgente' },
 { icon: '📅', label: 'Esta semana', value: 'semana' },
 { icon: '🗓️', label: 'Sem pressa', value: 'sem-pressa' },
];
const cities = [
 { label: 'Macedo de Cavaleiros', value: 'macedo', zone: 1, price: 15, time: '15 min' },
 { label: 'Mirandela', value: 'mirandela', zone: 2, price: 25, time: '25 min' },
 { label: 'Bragança', value: 'braganca', zone: 3, price: 35, time: '40 min' },
 { label: 'Vila Real', value: 'vila-real', zone: 5, price: 55, time: '60 min' },
 { label: 'Chaves', value: 'chaves', zone: 6, price: 65, time: '55 min' },
 { label: 'Outra cidade', value: 'outra', zone: 0, price: 0, time: '' },
];
export default function Diagnostico() {
 const { config } = useSite();
 const isPlumber = config.id === 'norte-reparos';
 const [step, setStep] = useState(1);
 const [problem, setProblem] = useState('');
 const [urgency, setUrgency] = useState('');
 const [city, setCity] = useState('');
 const siteProblems = isPlumber ? problems['norte-reparos'] : problems['staff-seekers'];
 const phone = isPlumber ? '928484451' : '932321892';
 const whatsapp = isPlumber ? '351928484451' : '351932321892';
 const accentColor = isPlumber ? '#0e7490' : '#FF6B35';
 const selectedCity = cities.find(c => c.value === city);
 const selectedProblem = siteProblems.find(p => p.value === problem);
 const buildWhatsAppMsg = () => {
 const parts = [];
 parts.push('Olá!');
 if (selectedProblem) parts.push(`Tenho ${selectedProblem.label.toLowerCase()}`);
 if (selectedCity && selectedCity.value !== 'outra') parts.push(`em ${selectedCity.label}`);
 if (urgency === 'urgente') parts.push('(é urgente)');
 parts.push('Podem vir?');
 return encodeURIComponent(parts.join(' '));
 };
 return (
 <section className="py-16 bg-gray-50">
 <div className="container mx-auto px-4 max-w-3xl">
 <div className="text-center mb-10">
 <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
 Qual é o seu problema agora?
 </h2>
 <p className="text-lg text-gray-600">
 Responda em 3 passos — receba estimativa imediata
 </p>
 </div>
 <div className="bg-white rounded-2xl shadow-lg p-8">
 {/* Progress bar */}
 <div className="flex gap-2 mb-8">
 {[1, 2, 3].map(s => (
 <div
 key={s}
 className="h-2 flex-1 rounded-full transition-all duration-300"
 style={{ backgroundColor: step >= s ? accentColor : '#e5e7eb' }}
 />
 ))}
 </div>
 <div className="text-center mb-6 text-sm text-gray-500 italic">
 {step === 1 && '💰 Preço combinado antes de começar. Sem surpresas.'}
 {step === 2 && '📋 Fatura com NIF sempre emitida. Garantia 12 meses.'}
 {step === 3 && '🤝 Sem pressões. Explicamos tudo com calma.'}
 </div>
 {/* Step 1: Problem */}
 {step === 1 && (
 <div>
 <h3 className="text-xl font-bold mb-6 text-gray-800">1. Tipo de problema</h3>
 <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
 {siteProblems.map(p => (
 <button
 key={p.value}
 onClick={() => { setProblem(p.value); setStep(2); }}
 className="flex flex-col items-center gap-2 p-6 rounded-xl border-2 hover:shadow-md transition-all text-center"
 style={{
 borderColor: problem === p.value ? accentColor : '#e5e7eb',
 backgroundColor: problem === p.value ? `${accentColor}10` : 'white'}}
 >
 <span className="text-4xl">{p.icon}</span>
 <span className="font-semibold text-gray-800">{p.label}</span>
 </button>
 ))}
 </div>
 </div>
 )}
 {/* Step 2: Urgency */}
 {step === 2 && (
 <div>
 <h3 className="text-xl font-bold mb-6 text-gray-800">2. Urgência</h3>
 <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
 {urgencies.map(u => (
 <button
 key={u.value}
 onClick={() => { setUrgency(u.value); setStep(3); }}
 className="flex items-center gap-3 p-5 rounded-xl border-2 hover:shadow-md transition-all"
 style={{
 borderColor: urgency === u.value ? accentColor : '#e5e7eb',
 backgroundColor: urgency === u.value ? `${accentColor}10` : 'white'}}
 >
 <span className="text-3xl">{u.icon}</span>
 <span className="font-semibold text-gray-800">{u.label}</span>
 </button>
 ))}
 </div>
 <button onClick={() => setStep(1)} className="mt-4 text-sm text-gray-500 hover:text-gray-700">← Voltar</button>
 </div>
 )}
 {/* Step 3: City */}
 {step === 3 && (
 <div>
 <h3 className="text-xl font-bold mb-6 text-gray-800">3. Localização</h3>
 <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
 {cities.map(c => (
 <button
 key={c.value}
 onClick={() => setCity(c.value)}
 className="flex flex-col items-center gap-1 p-4 rounded-xl border-2 hover:shadow-md transition-all text-center"
 style={{
 borderColor: city === c.value ? accentColor : '#e5e7eb',
 backgroundColor: city === c.value ? `${accentColor}10` : 'white'}}
 >
 <span className="text-lg font-semibold text-gray-800">📍 {c.label}</span>
 {c.time && <span className="text-sm text-gray-500">{c.time} · {c.price}€</span>}
 </button>
 ))}
 </div>
 <button onClick={() => setStep(2)} className="mt-4 text-sm text-gray-500 hover:text-gray-700">← Voltar</button>
 </div>
 )}
 {/* Result */}
 {step === 3 && city && (
 <div className="mt-8 p-6 rounded-xl border-2" style={{ borderColor: accentColor, backgroundColor: `${accentColor}08` }}>
 {selectedCity && selectedCity.value !== 'outra' ? (
 <>
 <div className="text-center mb-4">
 <p className="text-lg font-bold" style={{ color: accentColor }}>
 ✅ Técnico Atendimento 24h em {selectedCity.label}
 </p>
 <p className="text-gray-600 mt-1">
 ⏱️ Chegada estimada: <strong>{selectedCity.time}</strong>
 </p>
 <p className="text-gray-600">
 💰 Deslocação: <strong>{selectedCity.price}€</strong> + mão de obra ({isPlumber ? '65€/h' : '70€/h'})
 </p>
 </div>
 <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
 <a
 href={`https://wa.me/${whatsapp}?text=${buildWhatsAppMsg()}`}
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center justify-center gap-2 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
 style={{ backgroundColor: '#25D366' }}
 >
 💬 Confirmar via WhatsApp
 </a>
 <a
 href={`tel:+351${phone}`}
 className="inline-flex items-center justify-center gap-2 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
 style={{ backgroundColor: accentColor }}
 >
 📞 Ligar Agora
 </a>
 </div>
 </>
 ) : (
 <div className="text-center">
 <p className="text-lg font-bold" style={{ color: accentColor }}>
 Cobrimos toda a região de Trás-os-Montes!
 </p>
 <p className="text-gray-600 mt-2 mb-4">Ligue para confirmar disponibilidade na sua zona.</p>
 <a
 href={`tel:+351${phone}`}
 className="inline-flex items-center justify-center gap-2 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg"
 style={{ backgroundColor: accentColor }}
 >
 📞 Ligar — {isPlumber ? '928 484 451' : '932 321 892'}
 </a>
 </div>
 )}
 </div>
 )}
 </div>
 </div>
 </section>
 );
}
