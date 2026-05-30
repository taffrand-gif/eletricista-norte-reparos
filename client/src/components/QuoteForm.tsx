import React from 'react';
import { useState } from "react";
// memo removed from 'react';
import { trpc } from "@/lib/trpc";
import { ACTIVE_CONFIG } from "@shared/serviceConfig";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
function QuoteForm() {
 const { gradient } = ACTIVE_CONFIG;
 const [isSubmitting, setIsSubmitting] = useState(false);
 
 const [formData, setFormData] = useState({
 name: "",
 email: "",
 phone: "",
 city: "",
 address: "",
 serviceType: "",
 urgency: "normal" as "normal" | "urgent",
 description: ""});
 const createQuote = trpc.quotes.create.useMutation({
 onSuccess: () => {
 toast.success("✅ Pedido enviado com sucesso!", {
 description: "Entraremos em contacto consigo brevemente com o orçamento."});
 // Réinitialiser le formulaire
 setFormData({
 name: "",
 email: "",
 phone: "",
 city: "",
 address: "",
 serviceType: "",
 urgency: "normal",
 description: ""});
 setIsSubmitting(false);
 },
 onError: (error) => {
 toast.error("❌ Erro ao enviar pedido", {
 description: error.message || "Por favor, tente novamente."});
 setIsSubmitting(false);
 }});
 const handleSubmit = async (e: React.FormEvent) => {
 e.preventDefault();
 
 // Validation
 if (!formData.name || !formData.email || !formData.phone || !formData.city || !formData.serviceType || !formData.description) {
 toast.error("⚠️ Campos obrigatórios", {
 description: "Por favor, preencha todos os campos obrigatórios."});
 return;
 }
 if (formData.description.length < 10) {
 toast.error("⚠️ Descrição muito curta", {
 description: "Por favor, descreva o seu problema com mais detalhe (mínimo 10 caracteres)."});
 return;
 }
 setIsSubmitting(true);
 createQuote.mutate(formData);
 };
 const { services } = ACTIVE_CONFIG;
 return (
 <Card className="w-full max-w-2xl mx-auto">
 <CardHeader>
 <CardTitle className="text-2xl " style={{color: gradient.from}}>Pedir Orçamento Gratuito</CardTitle>
 <CardDescription>
 Preencha o formulário abaixo e receberá um orçamento personalizado sem compromisso.
 </CardDescription>
 </CardHeader>
 <CardContent>
 <form onSubmit={handleSubmit} className="space-y-6">
 {/* Informações de contacto */}
 <div className="space-y-4">
 <h3 className="font-semibold text-lg">Informações de Contacto</h3>
 
 <div className="space-y-2">
 <Label htmlFor="name">Nome Completo *</Label>
 <Input
 id="name"
 type="text"
 placeholder="O seu nome"
 value={formData.name}
 onChange={(e) => setFormData({ ...formData, name: e.target.value })}
 required
 />
 </div>
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
 <div className="space-y-2">
 <Label htmlFor="email">Email *</Label>
 <Input
 id="email"
 type="email"
 placeholder="seu@email.com"
 value={formData.email}
 onChange={(e) => setFormData({ ...formData, email: e.target.value })}
 required
 />
 </div>
 <div className="space-y-2">
 <Label htmlFor="phone">Telefone *</Label>
 <Input
 id="phone"
 type="tel"
 placeholder="912 345 678"
 value={formData.phone}
 onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
 required
 />
 </div>
 </div>
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
 <div className="space-y-2">
 <Label htmlFor="city">Cidade *</Label>
 <Input
 id="city"
 type="text"
 placeholder="Bragança"
 value={formData.city}
 onChange={(e) => setFormData({ ...formData, city: e.target.value })}
 required
 />
 </div>
 <div className="space-y-2">
 <Label htmlFor="address">Morada (opcional)</Label>
 <Input
 id="address"
 type="text"
 placeholder="Rua, número, andar"
 value={formData.address}
 onChange={(e) => setFormData({ ...formData, address: e.target.value })}
 />
 </div>
 </div>
 </div>
 {/* Detalhes do serviço */}
 <div className="space-y-4">
 <h3 className="font-semibold text-lg">Detalhes do Serviço</h3>
 <div className="space-y-2">
 <Label htmlFor="serviceType">Tipo de Serviço *</Label>
 <Select
 value={formData.serviceType}
 onValueChange={(value) => setFormData({ ...formData, serviceType: value })}
 >
 <SelectTrigger id="serviceType">
 <SelectValue placeholder="Selecione o serviço" />
 </SelectTrigger>
 <SelectContent>
 {services.map((service, index) => (
 <SelectItem key={index} value={service}>
 {service}
 </SelectItem>
 ))}
 </SelectContent>
 </Select>
 </div>
 <div className="space-y-2">
 <Label>Urgência *</Label>
 <RadioGroup
 value={formData.urgency}
 onValueChange={(value: "normal" | "urgent") => setFormData({ ...formData, urgency: value })}
 className="flex flex-col sm:flex-row gap-4"
 >
 <div className="flex items-center space-x-2">
 <RadioGroupItem value="normal" id="normal" />
 <Label htmlFor="normal" className="cursor-pointer font-normal">
 Normal (24-48h)
 </Label>
 </div>
 <div className="flex items-center space-x-2">
 <RadioGroupItem value="urgent" id="urgent" />
 <Label htmlFor="urgent" className="cursor-pointer font-normal">
 🚨 Urgente (Hoje mesmo)
 </Label>
 </div>
 </RadioGroup>
 </div>
 <div className="space-y-2">
 <Label htmlFor="description">Descrição do Problema *</Label>
 <Textarea
 id="description"
 placeholder="Descreva detalhadamente o problema ou serviço que necessita..."
 value={formData.description}
 onChange={(e) => setFormData({ ...formData, description: e.target.value })}
 rows={5}
 required
 className="resize-none"
 />
 <p className="text-sm text-gray-500">
 Mínimo 10 caracteres ({formData.description.length}/10)
 </p>
 </div>
 </div>
 {/* Botão de submissão */}
 <Button
 type="submit"
 disabled={isSubmitting}
 className="w-full hover: text-white font-bold py-6 text-lg" style={{backgroundColor: gradient.from}}
 >
 {isSubmitting ? "A enviar..." : "📝 Pedir Orçamento Gratuito"}
 </Button>
 <p className="text-sm text-gray-500 text-center">
 Ao enviar este formulário, concorda com o processamento dos seus dados pessoais para efeitos de orçamento.
 </p>
 </form>
 </CardContent>
 </Card>
 );
}
export default React.memo(QuoteForm);
