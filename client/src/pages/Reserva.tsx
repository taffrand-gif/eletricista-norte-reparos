import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
 Select,
 SelectContent,
 SelectItem,
 SelectTrigger,
 SelectValue} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { ACTIVE_CONFIG } from "../../../shared/serviceConfig";

export default function Reserva() {
 const config = ACTIVE_CONFIG;
 const [showSuccess, setShowSuccess] = useState(false);
 const [showError, setShowError] = useState(false);
 const [formData, setFormData] = useState({
 name: "",
 email: "",
 phone: "",
 serviceType: "",
 address: "",
 city: "",
 preferredDate: "",
 preferredTime: "",
 description: ""});

 const createBooking = trpc.bookings.create.useMutation({
 onSuccess: () => {
 setShowSuccess(true);
 setTimeout(() => setShowSuccess(false), 5000);
 setFormData({
 name: "",
 email: "",
 phone: "",
 serviceType: "",
 address: "",
 city: "",
 preferredDate: "",
 preferredTime: "",
 description: ""});
 },
 onError: () => {
 setShowError(true);
 setTimeout(() => setShowError(false), 5000);
 }});

 const handleSubmit = (e: React.FormEvent) => {
 e.preventDefault();
 createBooking.mutate(formData);
 };

 const handleChange = (field: string, value: string) => {
 setFormData((prev) => ({ ...prev, [field]: value }));
 };

 const timeSlots = [
 "08:00-09:00",
 "09:00-10:00",
 "10:00-11:00",
 "11:00-12:00",
 "14:00-15:00",
 "15:00-16:00",
 "16:00-17:00",
 "17:00-18:00",
 ];

 return (
 <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white py-12">
 <div className="container max-w-3xl">
 {/* Success Alert */}
 {showSuccess && (
 <div className="mb-6 bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-lg">
 <h3 className="font-semibold">Reserva enviada!</h3>
 <p>Entraremos em contacto consigo em breve para confirmar.</p>
 </div>
 )}

 {/* Error Alert */}
 {showError && (
 <div className="mb-6 bg-red-50 border border-red-200 text-red-800 px-6 py-4 rounded-lg">
 <h3 className="font-semibold">Erro</h3>
 <p>Ocorreu um erro ao enviar a reserva. Tente novamente.</p>
 </div>
 )}

 <div className="text-center mb-12">
 <h1 className="text-4xl font-bold text-gray-900 mb-4">
 Reservar Serviço
 </h1>
 <p className="text-lg text-gray-600">
 Preencha o formulário abaixo para agendar a sua intervenção
 </p>
 </div>

 <Card>
 <CardHeader>
 <CardTitle>Dados da Reserva</CardTitle>
 <CardDescription>
 Todos os campos marcados com * são obrigatórios
 </CardDescription>
 </CardHeader>
 <CardContent>
 <form onSubmit={handleSubmit} className="space-y-6">
 {/* Informações Pessoais */}
 <div className="space-y-4">
 <h3 className="text-lg font-semibold text-gray-900">
 Informações Pessoais
 </h3>
 
 <div>
 <Label htmlFor="name">Nome Completo *</Label>
 <Input
 id="name"
 value={formData.name}
 onChange={(e) => handleChange("name", e.target.value)}
 required
 />
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
 <div>
 <Label htmlFor="email">Email *</Label>
 <Input
 id="email"
 type="email"
 value={formData.email}
 onChange={(e) => handleChange("email", e.target.value)}
 required
 />
 </div>

 <div>
 <Label htmlFor="phone">Telefone *</Label>
 <Input
 id="phone"
 type="tel"
 value={formData.phone}
 onChange={(e) => handleChange("phone", e.target.value)}
 required
 />
 </div>
 </div>
 </div>

 {/* Detalhes do Serviço */}
 <div className="space-y-4">
 <h3 className="text-lg font-semibold text-gray-900">
 Detalhes do Serviço
 </h3>

 <div>
 <Label htmlFor="serviceType">Tipo de Serviço *</Label>
 <Select
 value={formData.serviceType}
 onValueChange={(value) => handleChange("serviceType", value)}
 required
 >
 <SelectTrigger>
 <SelectValue placeholder="Selecione o serviço" />
 </SelectTrigger>
 <SelectContent>
 {config.services.map((service) => (
 <SelectItem key={service} value={service}>
 {service}
 </SelectItem>
 ))}
 </SelectContent>
 </Select>
 </div>

 <div>
 <Label htmlFor="address">Morada *</Label>
 <Input
 id="address"
 value={formData.address}
 onChange={(e) => handleChange("address", e.target.value)}
 placeholder="Rua, número, andar..."
 required
 />
 </div>

 <div>
 <Label htmlFor="city">Cidade *</Label>
 <Input
 id="city"
 value={formData.city}
 onChange={(e) => handleChange("city", e.target.value)}
 required
 />
 </div>
 </div>

 {/* Data e Hora */}
 <div className="space-y-4">
 <h3 className="text-lg font-semibold text-gray-900">
 Data e Hora Preferida
 </h3>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
 <div>
 <Label htmlFor="preferredDate">Data *</Label>
 <Input
 id="preferredDate"
 type="date"
 value={formData.preferredDate}
 onChange={(e) => handleChange("preferredDate", e.target.value)}
 min={new Date().toISOString().split("T")[0]}
 required
 />
 </div>

 <div>
 <Label htmlFor="preferredTime">Horário *</Label>
 <Select
 value={formData.preferredTime}
 onValueChange={(value) => handleChange("preferredTime", value)}
 required
 >
 <SelectTrigger>
 <SelectValue placeholder="Selecione o horário" />
 </SelectTrigger>
 <SelectContent>
 {timeSlots.map((slot) => (
 <SelectItem key={slot} value={slot}>
 {slot}
 </SelectItem>
 ))}
 </SelectContent>
 </Select>
 </div>
 </div>
 </div>

 {/* Descrição */}
 <div>
 <Label htmlFor="description">
 Descrição do Problema (Opcional)
 </Label>
 <Textarea
 id="description"
 value={formData.description}
 onChange={(e) => handleChange("description", e.target.value)}
 placeholder="Descreva o problema ou serviço necessário..."
 rows={4}
 />
 </div>

 <Button
 type="submit"
 className="w-full bg-red-600 hover:bg-red-700 text-lg py-6"
 disabled={createBooking.isPending}
 >
 {createBooking.isPending ? "A enviar..." : "Confirmar Reserva"}
 </Button>
 </form>
 </CardContent>
 </Card>

 {/* Informações Adicionais */}
 <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
 <h3 className="text-lg font-semibold text-blue-900 mb-2">
 ℹ️ Informações Importantes
 </h3>
 <ul className="space-y-2 text-blue-800">
 <li>• Entraremos em contacto em até 2 horas para confirmar a sua reserva</li>
 <li>• O horário está sujeito a disponibilidade</li>
 <li>• Para urgências, ligue diretamente: {config.phone}</li>
 <li>• Serviço disponível 24 horas por dia, 7 dias por semana</li>
 </ul>
 </div>
 </div>
 </div>
 );
}
