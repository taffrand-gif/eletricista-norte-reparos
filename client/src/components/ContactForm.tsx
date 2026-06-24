import React, { useState } from 'react';
import { Phone, MessageCircle, Send } from 'lucide-react';
// Hook to detect mobile device
function useIsMobile() {
 const [isMobile, setIsMobile] = React.useState(false);
 React.useEffect(() => {
 const checkMobile = () => {
 setIsMobile(window.innerWidth < 768);
 };
 checkMobile();
 window.addEventListener('resize', checkMobile);
 return () => window.removeEventListener('resize', checkMobile);
 }, []);
 return isMobile;
}
function ContactForm() {
 const [nome, setNome] = useState('');
 const [telefone, setTelefone] = useState('');
 const [descricao, setDescricao] = useState('');
 const isMobile = useIsMobile();
 const handleWhatsApp = (e: React.FormEvent) => {
 e.preventDefault();
 const msg = encodeURIComponent(
 `Olá, chamo-me ${nome || 'Cliente'}.\nTelefone: ${telefone || 'não indicado'}\nProblema: ${descricao || 'Gostaria de pedir um orçamento.'}`
 );
 window.open(`https://wa.me/351932321892?text=${msg}`, '_blank');
 };
 const handleCall = () => {
 window.location.href = 'tel:+351932321892';
 };
 return (
 <section id="contacto-rapido" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
 <div className="container mx-auto px-4">
 <div className="max-w-2xl mx-auto">
 <div className="text-center mb-10">
 <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
 Pedir Orçamento <span className="text-[#c2410c]">Grátis</span>
 </h2>
 <p className="text-lg text-gray-300">
 Descreva o seu problema e a nossa equipa confirma a deslocação por WhatsApp.
 </p>
 </div>
 <form onSubmit={handleWhatsApp} className="space-y-5">
 <div>
 <label htmlFor="cf-nome" className="block text-sm font-semibold text-gray-300 mb-1">Nome</label>
 <input
 id="cf-nome"
 type="text"
 value={nome}
 onChange={e => setNome(e.target.value)}
 placeholder="O seu nome"
 className={`w-full rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B35] ${
 isMobile ? 'px-5 py-4 text-lg' : 'px-4 py-3'
 }`}
 />
 </div>
 <div>
 <label htmlFor="cf-tel" className="block text-sm font-semibold text-gray-300 mb-1">Telefone</label>
 <input
 id="cf-tel"
 type="tel"
 inputMode="tel"
 value={telefone}
 onChange={e => setTelefone(e.target.value)}
 placeholder="Ex: 912 345 678"
 className={`w-full rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B35] ${
 isMobile ? 'px-5 py-4 text-lg' : 'px-4 py-3'
 }`}
 />
 </div>
 <div>
 <label htmlFor="cf-desc" className="block text-sm font-semibold text-gray-300 mb-1">Descrição do problema</label>
 <textarea
 id="cf-desc"
 value={descricao}
 onChange={e => setDescricao(e.target.value)}
 placeholder="Descreva brevemente o problema elétrico..."
 rows={isMobile ? 3 : 4}
 className={`w-full rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B35] resize-none ${
 isMobile ? 'px-5 py-4 text-lg' : 'px-4 py-3'
 }`}
 />
 </div>
 <div className="flex flex-col sm:flex-row gap-4 pt-2">
 <button
 type="submit"
 className={`flex-1 flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white font-bold rounded-lg transition-colors ${
 isMobile ? 'py-5 px-6 text-xl' : 'py-4 px-6 text-lg'
 }`}
 >
 <MessageCircle className={isMobile ? 'w-6 h-6' : 'w-5 h-5'} />
 Enviar via WhatsApp
 </button>
 <button
 type="button"
 onClick={handleCall}
 className={`flex-1 flex items-center justify-center gap-2 bg-[#c2410c] hover:bg-[#9a3412] text-white font-bold rounded-lg transition-colors ${
 isMobile ? 'py-5 px-6 text-xl' : 'py-4 px-6 text-lg'
 }`}
 >
 <Phone className={isMobile ? 'w-6 h-6' : 'w-5 h-5'} />
 Ligar Agora
 </button>
 </div>
 </form>
 <p className="text-center text-gray-500 text-sm mt-6">
 Orçamento sem compromisso. Orçamento por escrito antes de intervir.
 </p>
 </div>
 </div>
 </section>
 );
}
export default React.memo(ContactForm);
