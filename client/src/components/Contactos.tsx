// Design: Professional Service Layout
// Contact section with form and map
// - Bold form with thick borders
// - Direct contact information
// - Map integration
import { useSite } from '@/contexts/SiteContext';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { useState } from 'react';
import { toast } from 'sonner';
export default function Contactos() {
 const { config } = useSite();
 const [formData, setFormData] = useState({
 name: '',
 phone: '',
 email: '',
 message: ''});
 const [isSubmitting, setIsSubmitting] = useState(false);
 const handleSubmit = async (e: React.FormEvent) => {
 e.preventDefault();
 setIsSubmitting(true);
 try {
 const res = await fetch("https://formsubmit.co/ajax/taff.rand@gmail.com", {
 method: "POST",
 headers: { "Content-Type": "application/json", Accept: "application/json" },
 body: JSON.stringify({
 name: formData.name,
 phone: formData.phone,
 email: formData.email,
 message: formData.message,
 _subject: "Novo contacto Norte Reparos",
 _template: "table",
 _captcha: "false"})});
 if (res.ok) {
 toast.success('Mensagem enviada com sucesso! Entraremos em contacto em breve.');
 setFormData({ name: '', phone: '', email: '', message: '' });
 } else {
 throw new Error("Erro");
 }
 } catch {
 toast.error('Erro ao enviar mensagem. Por favor, ligue-nos diretamente.');
 } finally {
 setIsSubmitting(false);
 }
 };
 const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
 setFormData(prev => ({
 ...prev,
 [e.target.name]: e.target.value
 }));
 };
 return (
 <section id="contactos" className="py-20 bg-gray-50">
 <div className="container">
 {/* Header */}
 <div className="text-center mb-16">
 <h2 className="text-4xl md:text-5xl font-black mb-4">
 Entre em Contacto
 </h2>
 <p className="text-lg text-gray-600 max-w-3xl mx-auto">
 Tem alguma dúvida ou precisa de um orçamento? Contacte-nos através do formulário ou ligue diretamente.
 </p>
 </div>
 <div className="grid md:grid-cols-2 gap-12">
 {/* Contact Form */}
 <div
 className="bg-white p-8 border-4 shadow-[8px_8px_0_0_rgba(0,0,0,0.1)]"
 style={{ borderColor: config.colors.primary }}
 >
 <h3 className="text-2xl font-black mb-6">Envie-nos uma Mensagem</h3>
 <form onSubmit={handleSubmit} className="space-y-6">
 <div>
 <Label htmlFor="name" className="text-base font-bold mb-2 block">
 Nome Completo *
 </Label>
 <Input
 id="name"
 name="name"
 type="text"
 required
 value={formData.name}
 onChange={handleChange}
 className="border-2 h-12 text-base"
 placeholder="O seu nome"
 />
 </div>
 <div>
 <Label htmlFor="phone" className="text-base font-bold mb-2 block">
 Telefone *
 </Label>
 <Input
 id="phone"
 name="phone"
 type="tel"
 required
 value={formData.phone}
 onChange={handleChange}
 className="border-2 h-12 text-base"
 placeholder="912 345 678"
 />
 </div>
 <div>
 <Label htmlFor="email" className="text-base font-bold mb-2 block">
 Email
 </Label>
 <Input
 id="email"
 name="email"
 type="email"
 value={formData.email}
 onChange={handleChange}
 className="border-2 h-12 text-base"
 placeholder="seuemail@exemplo.com"
 />
 </div>
 <div>
 <Label htmlFor="message" className="text-base font-bold mb-2 block">
 Mensagem *
 </Label>
 <Textarea
 id="message"
 name="message"
 required
 value={formData.message}
 onChange={handleChange}
 className="border-2 min-h-32 text-base"
 placeholder="Descreva o seu problema ou pedido..."
 />
 </div>
 <Button
 type="submit"
 disabled={isSubmitting}
 className="w-full h-14 text-lg font-bold shadow-[4px_4px_0_0_rgba(0,0,0,0.2)] hover:shadow-[2px_2px_0_0_rgba(0,0,0,0.2)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all disabled:opacity-50"
 style={{ backgroundColor: config.colors.primary }}
 >
 {isSubmitting ? "A enviar..." : "Enviar Mensagem"}
 </Button>
 </form>
 </div>
 {/* Contact Info */}
 <div className="space-y-6">
 {/* Direct contact cards */}
 <div
 className="bg-white p-6 border-4"
 style={{ borderColor: config.colors.primary }}
 >
 <div className="flex items-start gap-4">
 <div
 className="w-12 h-12 flex-shrink-0 flex items-center justify-center text-white"
 style={{ backgroundColor: config.colors.primary }}
 >
 <Phone className="w-6 h-6" />
 </div>
 <div>
 <h4 className="font-black text-lg mb-2">Telefone</h4>
 <a
 href={`tel:+351${config.phone.replace(/\s/g, '')}`}
 className="text-xl font-bold hover:underline"
 style={{ color: config.colors.primary }}
 >
 {config.phone}
 </a>
 <p className="text-sm text-gray-600 mt-1">
 Disponível Atendimento 24h/7d
 </p>
 </div>
 </div>
 </div>
 <div
 className="bg-white p-6 border-4"
 style={{ borderColor: config.colors.primary }}
 >
 <div className="flex items-start gap-4">
 <div
 className="w-12 h-12 flex-shrink-0 flex items-center justify-center text-white"
 style={{ backgroundColor: config.colors.primary }}
 >
 <Mail className="w-6 h-6" />
 </div>
 <div>
 <h4 className="font-black text-lg mb-2">Email</h4>
 <a
 href={`mailto:${config.email}`}
 className="text-lg font-bold hover:underline"
 style={{ color: config.colors.primary }}
 >
 {config.email}
 </a>
 <p className="text-sm text-gray-600 mt-1">
 Resposta em 24h
 </p>
 </div>
 </div>
 </div>
 <div
 className="bg-white p-6 border-4"
 style={{ borderColor: config.colors.primary }}
 >
 <div className="flex items-start gap-4">
 <div
 className="w-12 h-12 flex-shrink-0 flex items-center justify-center text-white"
 style={{ backgroundColor: config.colors.primary }}
 >
 <MapPin className="w-6 h-6" />
 </div>
 <div>
 <h4 className="font-black text-lg mb-2">Zona de Cobertura</h4>
 <p className="text-lg font-bold">
 {config.company.coverage}
 </p>
 <p className="text-sm text-gray-600 mt-1">
 Bragança, Mirandela, Trás-os-Montes e arredores
 </p>
 </div>
 </div>
 </div>
 <div
 className="bg-white p-6 border-4"
 style={{ borderColor: config.colors.primary }}
 >
 <div className="flex items-start gap-4">
 <div
 className="w-12 h-12 flex-shrink-0 flex items-center justify-center text-white"
 style={{ backgroundColor: config.colors.primary }}
 >
 <Clock className="w-6 h-6" />
 </div>
 <div>
 <h4 className="font-black text-lg mb-2">Horário</h4>
 <p className="text-lg font-bold">
 Atendimento 24h/7d
 </p>
 <p className="text-sm text-gray-600 mt-1">
 7 dias por semana, incluindo feriados
 </p>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>
 );
}
