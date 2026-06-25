import { useState, useEffect, useRef } from "react";
import { trpc } from "@/lib/trpc";
import { ACTIVE_CONFIG } from "../../../shared/serviceConfig";
interface Message {
 id: string;
 text: string;
 sender: "user" | "owner";
 timestamp: Date;
}
export default function ChatWidget() {
 const { gradient } = ACTIVE_CONFIG;
 const [isOpen, setIsOpen] = useState(false);
 const [messages, setMessages] = useState<Message[]>([]);
 const [inputText, setInputText] = useState("");
 const [showForm, setShowForm] = useState(true);
 const [formData, setFormData] = useState({
 name: "",
 phone: "",
 city: "",
 serviceType: "",
 description: ""});
 const messagesEndRef = useRef<HTMLDivElement>(null);
 const config = ACTIVE_CONFIG;
 const sendMessage = trpc.chat.sendMessage.useMutation({
 onSuccess: (data: { success: boolean }) => {
 if (data.success) {
 const newMessage: Message = {
 id: Date.now().toString(),
 text: inputText,
 sender: "user",
 timestamp: new Date()};
 setMessages((prev) => [...prev, newMessage]);
 setInputText("");
 
 setTimeout(() => {
 const autoReply: Message = {
 id: (Date.now() + 1).toString(),
 text: "Obrigado! Recebemos a sua mensagem e entraremos em contacto consigo em breve.",
 sender: "owner",
 timestamp: new Date()};
 setMessages((prev) => [...prev, autoReply]);
 }, 1000);
 }
 }});
 const scrollToBottom = () => {
 messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
 };
 useEffect(() => {
 scrollToBottom();
 }, [messages]);
 useEffect(() => {
 if (isOpen && messages.length === 0) {
 const welcomeMessage: Message = {
 id: "welcome",
 text: `Olá! Bem-vindo ao ${config.businessName}. Preencha o formulário para começar.`,
 sender: "owner",
 timestamp: new Date()};
 setMessages([welcomeMessage]);
 }
 }, [isOpen]);
 const handleStartChat = (e: React.FormEvent) => {
 e.preventDefault();
 if (formData.name.trim() && formData.phone.trim() && formData.city.trim()) {
 setShowForm(false);
 // Enviar mediante confirmação as informações
 const fullMessage = `**Novo contacto via chat**\n\n**Nome:** ${formData.name}\n**Telefone:** ${formData.phone}\n**Cidade:** ${formData.city}\n**Tipo de Serviço:** ${formData.serviceType || "Não especificado"}\n**Descrição:** ${formData.description || "Não especificado"}`;
 sendMessage.mutate({
 name: formData.name,
 message: fullMessage});
 }
 };
 const handleSendMessage = (e: React.FormEvent) => {
 e.preventDefault();
 if (inputText.trim()) {
 const fullMessage = `**Mensagem de ${formData.name}** (${formData.phone})\n\n${inputText}`;
 sendMessage.mutate({
 name: formData.name,
 message: fullMessage});
 }
 };
 const handleKeyPress = (e: React.KeyboardEvent) => {
 if (e.key === "Enter" && !e.shiftKey) {
 e.preventDefault();
 handleSendMessage(e);
 }
 };
 return (
 <>
 {/* Chat Button */}
 {!isOpen && (
 <button
 onClick={() => setIsOpen(true)}
 className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 hover:opacity-90 text-white rounded-full p-3 sm:p-4 shadow-lg transition-all duration-300 hover:scale-110 z-[9999]" style={{backgroundColor: gradient.from}}
 aria-label="Abrir chat"
 >
 <svg
 xmlns="http://www.w3.org/2000/svg"
 className="h-5 w-5 sm:h-6 sm:w-6"
 fill="none"
 viewBox="0 0 24 24"
 stroke="currentColor"
 >
 <path
 strokeLinecap="round"
 strokeLinejoin="round"
 strokeWidth={2}
 d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
 />
 </svg>
 </button>
 )}
 {/* Chat Window */}
 {isOpen && (
 <div className="fixed bottom-0 right-0 sm:bottom-6 sm:right-6 w-full sm:w-96 h-[100vh] sm:h-[600px] bg-white sm:rounded-lg shadow-2xl flex flex-col z-[9999] border-t sm:border border-gray-200">
 {/* Header */}
 <div className=" text-white p-4 sm:rounded-t-lg flex justify-between items-center" style={{backgroundColor: gradient.from}}>
 <div className="flex items-center gap-3">
 <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base" style={{color: gradient.from}}>
 {config.businessName.charAt(0)}
 </div>
 <div>
 <h3 className="font-bold text-sm sm:text-base">{config.businessName}</h3>
 <p className="text-xs text-white text-opacity-80">Normalmente responde em minutos</p>
 </div>
 </div>
 <button
 onClick={() => setIsOpen(false)}
 className="text-white hover:text-opacity-100 transition-colors"
 aria-label="Fechar chat"
 >
 <svg
 xmlns="http://www.w3.org/2000/svg"
 className="h-6 w-6"
 fill="none"
 viewBox="0 0 24 24"
 stroke="currentColor"
 >
 <path
 strokeLinecap="round"
 strokeLinejoin="round"
 strokeWidth={2}
 d="M6 18L18 6M6 6l12 12"
 />
 </svg>
 </button>
 </div>
 {/* Contact Form */}
 {showForm && (
 <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-gray-50">
 <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl mb-4 mx-auto" style={{backgroundColor: gradient.from}}>
 👋
 </div>
 <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 text-center">Bem-vindo!</h3>
 <p className="text-gray-600 text-center mb-4 sm:mb-6 text-sm sm:text-base">
 Preencha os seus dados para que possamos ajudá-lo melhor.
 </p>
 <form onSubmit={handleStartChat} className="space-y-3 sm:space-y-4">
 <div>
 <label className="block text-sm font-semibold text-gray-700 mb-1">
 Nome *
 </label>
 <input
 type="text"
 value={formData.name}
 onChange={(e) => setFormData({ ...formData, name: e.target.value })}
 placeholder="O seu nome"
 className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-2 focus:border-transparent text-sm sm:text-base"
 required
 autoFocus
 />
 </div>
 
 <div>
 <label className="block text-sm font-semibold text-gray-700 mb-1">
 Telefone *
 </label>
 <input
 type="tel"
 value={formData.phone}
 onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
 placeholder="932 321 892"
 className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-2 focus:border-transparent text-sm sm:text-base"
 required
 />
 </div>
 <div>
 <label className="block text-sm font-semibold text-gray-700 mb-1">
 Cidade *
 </label>
 <input
 type="text"
 value={formData.city}
 onChange={(e) => setFormData({ ...formData, city: e.target.value })}
 placeholder="Bragança"
 className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-2 focus:border-transparent text-sm sm:text-base"
 required
 />
 </div>
 <div>
 <label className="block text-sm font-semibold text-gray-700 mb-1">
 Tipo de Serviço (opcional)
 </label>
 <select
 value={formData.serviceType}
 onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
 className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-2 focus:border-transparent text-sm sm:text-base"
 >
 <option value="">Selecione...</option>
 {config.services.map((service, index) => (
 <option key={index} value={service}>
 {service}
 </option>
 ))}
 </select>
 </div>
 <div>
 <label className="block text-sm font-semibold text-gray-700 mb-1">
 Descrição do Problema (opcional)
 </label>
 <textarea
 value={formData.description}
 onChange={(e) => setFormData({ ...formData, description: e.target.value })}
 placeholder="Descreva brevemente o problema..."
 rows={3}
 className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-2 focus:border-transparent text-sm sm:text-base resize-none"
 />
 </div>
 <button
 type="submit"
 disabled={!formData.name.trim() || !formData.phone.trim() || !formData.city.trim()}
 className="w-full hover:opacity-90 text-white font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base" style={{backgroundColor: gradient.from}}
 >
 Iniciar Conversa
 </button>
 </form>
 </div>
 )}
 {/* Messages */}
 {!showForm && (
 <>
 <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 bg-gray-50">
 {messages.map((message) => (
 <div
 key={message.id}
 className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
 >
 <div
 className={`max-w-[85%] sm:max-w-[80%] rounded-lg p-2 sm:p-3 ${
 message.sender === "user"
 ? "text-white"
 : "bg-white text-gray-900 border border-gray-200"
 }`}
 >
 <p className="text-xs sm:text-sm">{message.text}</p>
 <p
 className={`text-[10px] sm:text-xs mt-1 ${
 message.sender === "user" ? "text-white text-opacity-80" : "text-gray-500"
 }`}
 >
 {new Date(message.timestamp).toLocaleTimeString("pt-PT", {
 hour: "2-digit",
 minute: "2-digit"})}
 </p>
 </div>
 </div>
 ))}
 <div ref={messagesEndRef} />
 </div>
 {/* Input */}
 <form onSubmit={handleSendMessage} className="p-3 sm:p-4 bg-white border-t border-gray-200">
 <div className="flex gap-2">
 <input
 type="text"
 value={inputText}
 onChange={(e) => setInputText(e.target.value)}
 onKeyPress={handleKeyPress}
 placeholder="Escreva a sua mensagem..."
 className="flex-1 px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-2 focus:border-transparent text-sm sm:text-base"
 />
 <button
 type="submit"
 disabled={!inputText.trim() || sendMessage.isPending}
 className=" hover:opacity-90 text-white px-3 sm:px-4 py-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed" style={{backgroundColor: gradient.from}}
 >
 {sendMessage.isPending ? (
 <svg
 className="animate-spin h-4 w-4 sm:h-5 sm:w-5"
 xmlns="http://www.w3.org/2000/svg"
 fill="none"
 viewBox="0 0 24 24"
 >
 <circle
 className="opacity-25"
 cx="12"
 cy="12"
 r="10"
 stroke="currentColor"
 strokeWidth="4"
 ></circle>
 <path
 className="opacity-75"
 fill="currentColor"
 d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
 ></path>
 </svg>
 ) : (
 <svg
 xmlns="http://www.w3.org/2000/svg"
 className="h-4 w-4 sm:h-5 sm:w-5"
 fill="none"
 viewBox="0 0 24 24"
 stroke="currentColor"
 >
 <path
 strokeLinecap="round"
 strokeLinejoin="round"
 strokeWidth={2}
 d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
 />
 </svg>
 )}
 </button>
 </div>
 </form>
 </>
 )}
 </div>
 )}
 </>
 );
}
