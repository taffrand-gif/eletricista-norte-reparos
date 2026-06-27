import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { MapView } from "@/components/Map";
import { ACTIVE_CONFIG } from "../../../shared/serviceConfig";
interface QuoteFormData {
 name: string;
 email: string;
 phone: string;
 nif: string;
 street: string;
 streetNumber: string;
 complement: string;
 postalCode: string;
 city: string;
 serviceType: string;
 urgency: "normal" | "urgent";
 description: string;
 latitude?: string;
 longitude?: string;
}
export default function QuoteFormEnhanced() {
 const config = ACTIVE_CONFIG;
 
 const [formData, setFormData] = useState<QuoteFormData>({
 name: "",
 email: "",
 phone: "",
 nif: "",
 street: "",
 streetNumber: "",
 complement: "",
 postalCode: "",
 city: "",
 serviceType: config.services[0] || "",
 urgency: "normal",
 description: ""});
 const [showMap, setShowMap] = useState(false);
 const createQuote = trpc.quotes.create.useMutation({
 onSuccess: () => {
 toast.success("Pedido de orçamento enviado com sucesso! Entraremos em contacto em breve.");
 // Reset form
 setFormData({
 name: "",
 email: "",
 phone: "",
 nif: "",
 street: "",
 streetNumber: "",
 complement: "",
 postalCode: "",
 city: "",
 serviceType: config.services[0] || "",
 urgency: "normal",
 description: ""});
 setShowMap(false);
 },
 onError: () => {
 toast.error("Erro ao enviar pedido. Por favor, ligue-nos diretamente.");
 }});
 const handleMapReady = (map: google.maps.Map) => {
 // Initialize Places Autocomplete
 const input = document.getElementById('street-input') as HTMLInputElement;
 if (!input) return;
 const autocomplete = new window.google.maps.places.Autocomplete(input, {
 componentRestrictions: { country: 'pt' },
 fields: ['address_components', 'geometry', 'formatted_address']});
 autocomplete.addListener('place_changed', () => {
 const place = autocomplete.getPlace();
 if (!place.geometry || !place.geometry.location) {
 toast.error("Endereço não encontrado. Por favor, selecione um endereço válido.");
 return;
 }
 // Extrair componentes do endereço
 let street = "";
 let streetNumber = "";
 let postalCode = "";
 let city = "";
 place.address_components?.forEach((component) => {
 const types = component.types;
 
 if (types.includes("route")) {
 street = component.long_name;
 }
 if (types.includes("street_number")) {
 streetNumber = component.long_name;
 }
 if (types.includes("postal_code")) {
 postalCode = component.long_name;
 }
 if (types.includes("locality") || types.includes("administrative_area_level_2")) {
 city = component.long_name;
 }
 });
 // Atualizar formulário com dados extraídos
 setFormData({
 ...formData,
 street,
 streetNumber,
 postalCode,
 city,
 latitude: place.geometry.location.lat().toString(),
 longitude: place.geometry.location.lng().toString()});
 // Centrar mapa na localização selecionada
 map.setCenter(place.geometry.location);
 map.setZoom(17);
 // Adicionar marcador
 new window.google.maps.Marker({
 position: place.geometry.location,
 map: map,
 title: place.formatted_address});
 toast.success("Endereço preenchido automaticamente!");
 });
 };
 const handleSubmit = (e: React.FormEvent) => {
 e.preventDefault();
 // Construir endereço completo para campo legado
 const fullAddress = `${formData.street} ${formData.streetNumber}${formData.complement ? ', ' + formData.complement : ''}, ${formData.postalCode} ${formData.city}`;
 createQuote.mutate({
 ...formData,
 address: fullAddress});
 };
 return (
 <div className="bg-white rounded-lg shadow-lg p-6">
 <h2 className="text-2xl font-bold text-gray-900 mb-6">
 Pedir Orçamento Gratuito
 </h2>
 <form onSubmit={handleSubmit} className="space-y-4">
 {/* Nome */}
 <div>
 <label htmlFor="name-input" className="block text-sm font-medium text-gray-700 mb-2">
 Nome Completo *
 </label>
 <input
 id="name-input"
 type="text"
 required
 value={formData.name}
 onChange={(e) => setFormData({ ...formData, name: e.target.value })}
 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
 placeholder="O seu nome completo"
 aria-required="true"
 />
 </div>
 {/* Email */}
 <div>
 <label htmlFor="email-input" className="block text-sm font-medium text-gray-700 mb-2">
 Email *
 </label>
 <input
 id="email-input"
 type="email"
 required
 value={formData.email}
 onChange={(e) => setFormData({ ...formData, email: e.target.value })}
 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
 placeholder="o.seu.email@exemplo.com"
 aria-required="true"
 />
 </div>
 {/* Telefone */}
 <div>
 <label htmlFor="phone-input" className="block text-sm font-medium text-gray-700 mb-2">
 Telefone *
 </label>
 <input
 id="phone-input"
 type="tel"
 required
 value={formData.phone}
 onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
 placeholder="912 345 678"
 aria-required="true"
 />
 </div>
 {/* NIF */}
 <div>
 <label htmlFor="nif-input" className="block text-sm font-medium text-gray-700 mb-2">
 NIF (Número de Identificação Fiscal)
 </label>
 <input
 id="nif-input"
 type="text"
 maxLength={9}
 value={formData.nif}
 onChange={(e) => setFormData({ ...formData, nif: e.target.value.replace(/\D/g, '') })}
 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
 placeholder="9 dígitos"
 aria-describedby="nif-description"
 />
 <p id="nif-description" className="text-xs text-gray-500 mt-1">Opcional - para faturação</p>
 </div>
 {/* Endereço - Google Maps Autocomplete */}
 <div>
 <label htmlFor="street-input" className="block text-sm font-medium text-gray-700 mb-2">
 Morada *
 </label>
 <div className="space-y-2">
 <div className="flex gap-2">
 <input
 type="text"
 id="street-input"
 required
 value={formData.street}
 onChange={(e) => setFormData({ ...formData, street: e.target.value })}
 className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
 placeholder="Rua/Avenida (comece a escrever...)"
 aria-required="true"
 />
 <button
 type="button"
 onClick={() => setShowMap(!showMap)}
 className="px-4 py-3 text-white rounded-lg hover:bg-blue-700 transition-colors"
 style={{backgroundColor: ACTIVE_CONFIG.gradient.from}}
 >
 📍 Mapa
 </button>
 </div>
 {showMap && (
 <div className="h-64 rounded-lg overflow-hidden border border-gray-300">
 <MapView onMapReady={handleMapReady} />
 </div>
 )}
 <div className="grid grid-cols-2 gap-2">
 <input
 id="street-number-input"
 type="text"
 required
 value={formData.streetNumber}
 onChange={(e) => setFormData({ ...formData, streetNumber: e.target.value })}
 className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
 placeholder="Nº *"
 aria-label="Número da porta"
 aria-required="true"
 />
 <input
 id="complement-input"
 type="text"
 value={formData.complement}
 onChange={(e) => setFormData({ ...formData, complement: e.target.value })}
 className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
 placeholder="Andar, Porta (opcional)"
 aria-label="Complemento de morada"
 />
 </div>
 <div className="grid grid-cols-2 gap-2">
 <input
 id="postal-code-input"
 type="text"
 required
 value={formData.postalCode}
 onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
 className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
 placeholder="Código Postal *"
 aria-label="Código postal"
 aria-required="true"
 />
 <input
 id="city-input"
 type="text"
 required
 value={formData.city}
 onChange={(e) => setFormData({ ...formData, city: e.target.value })}
 className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
 placeholder="Cidade *"
 aria-label="Cidade"
 aria-required="true"
 />
 </div>
 </div>
 </div>
 {/* Tipo de Serviço */}
 <div>
 <label htmlFor="service-type-select" className="block text-sm font-medium text-gray-700 mb-2">
 Tipo de Serviço *
 </label>
 <select
 id="service-type-select"
 required
 value={formData.serviceType}
 onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
 aria-required="true"
 >
 {config.services.map((service, index) => (
 <option key={index} value={service}>
 {service}
 </option>
 ))}
 </select>
 </div>
 {/* Urgência */}
 <div>
 <label id="urgency-label" className="block text-sm font-medium text-gray-700 mb-2">
 Urgência *
 </label>
 <div className="grid grid-cols-2 gap-4" role="group" aria-labelledby="urgency-label">
 <button
 type="button"
 onClick={() => setFormData({ ...formData, urgency: "normal" })}
 className={`px-4 py-3 rounded-lg font-semibold transition-colors ${
 formData.urgency === "normal"
 ? "text-white"
 : "bg-gray-200 text-gray-700 hover:bg-gray-300"
 }`}
 style={formData.urgency === "normal" ? {backgroundColor: ACTIVE_CONFIG.gradient.from} : {}}
 aria-pressed={formData.urgency === "normal"}
 >
 📅 Normal
 </button>
 <button
 type="button"
 onClick={() => setFormData({ ...formData, urgency: "urgent" })}
 className={`px-4 py-3 rounded-lg font-semibold transition-colors ${
 formData.urgency === "urgent"
 ? "text-white"
 : "bg-gray-200 text-gray-700 hover:bg-gray-300"
 }`}
 style={formData.urgency === "urgent" ? {backgroundColor: ACTIVE_CONFIG.gradient.from} : {}}
 aria-pressed={formData.urgency === "urgent"}
 >
 🚨 Urgente
 </button>
 </div>
 </div>
 {/* Descrição */}
 <div>
 <label htmlFor="description-textarea" className="block text-sm font-medium text-gray-700 mb-2">
 Descrição do Problema *
 </label>
 <textarea
 id="description-textarea"
 required
 rows={4}
 value={formData.description}
 onChange={(e) => setFormData({ ...formData, description: e.target.value })}
 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
 placeholder="Descreva o problema com o máximo de detalhe possível..."
 aria-required="true"
 />
 </div>
 {/* Submit */}
 <button
 type="submit"
 disabled={createQuote.isPending}
 className="w-full dynamic-bg hover:bg-red-700 disabled:bg-gray-400 text-white font-bold px-8 py-4 rounded-lg transition-colors text-lg"
 >
 {createQuote.isPending ? "A enviar..." : "📧 Enviar Pedido de Orçamento"}
 </button>
 <p className="text-xs text-gray-500 text-center">
 Responderemos em menos de 2 horas durante o horário comercial
 </p>
 </form>
 </div>
 );
}
