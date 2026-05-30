import { useState, useEffect } from 'react';
import { trpc } from '@/lib/trpc';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { X } from 'lucide-react';
import { toast } from 'sonner';
import { trackEvent } from './FacebookPixel';
const COOKIE_NAME = 'newsletter_popup_shown';
const COOKIE_DURATION_DAYS = 7;
export function NewsletterPopup() {
 const [isOpen, setIsOpen] = useState(false);
 const [email, setEmail] = useState('');
 const [name, setName] = useState('');
 const [isSubmitting, setIsSubmitting] = useState(false);
 const subscribe = trpc.newsletter.subscribe.useMutation({
 onSuccess: (data) => {
 if (data.success) {
 toast.success('✅ Inscrito com sucesso!', {
 description: 'Receberá as nossas novidades e ofertas exclusivas.'});
 setEmail('');
 setName('');
 setIsOpen(false);
 
 // Track Facebook Pixel event
 trackEvent.completeRegistration('newsletter_popup');
 // Definir cookie para não reexibir durante 7 dias
 setCookie(COOKIE_NAME, 'true', COOKIE_DURATION_DAYS);
 } else {
 toast.info('ℹ️ ' + data.message);
 }
 setIsSubmitting(false);
 },
 onError: (error) => {
 toast.error('❌ Erro ao inscrever', {
 description: error.message});
 setIsSubmitting(false);
 }});
 useEffect(() => {
 // Verificar se o cookie existe
 if (getCookie(COOKIE_NAME)) {
 return;
 }
 // Timer para mostrar após 30 segundos
 const timer = setTimeout(() => {
 setIsOpen(true);
 }, 30000); // 30 segundos
 // Listener para scroll (mostrar a 50%)
 const handleScroll = () => {
 const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
 if (scrollPercent > 50 && !getCookie(COOKIE_NAME)) {
 setIsOpen(true);
 window.removeEventListener('scroll', handleScroll);
 }
 };
 window.addEventListener('scroll', handleScroll);
 return () => {
 clearTimeout(timer);
 window.removeEventListener('scroll', handleScroll);
 };
 }, []);
 const handleClose = () => {
 setIsOpen(false);
 // Set cookie pour ne pas réafficher pendant 7 jours
 setCookie(COOKIE_NAME, 'true', COOKIE_DURATION_DAYS);
 };
 const handleSubmit = async (e: React.FormEvent) => {
 e.preventDefault();
 
 if (!email) {
 toast.error('Por favor, insira o seu email');
 return;
 }
 setIsSubmitting(true);
 subscribe.mutate({ 
 email, 
 name: name || undefined,
 source: 'popup' 
 });
 };
 return (
 <Dialog open={isOpen} onOpenChange={setIsOpen}>
 <DialogContent className="sm:max-w-md">
 <button
 onClick={handleClose}
 className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
 >
 <X className="h-4 w-4" />
 <span className="sr-only">Fechar</span>
 </button>
 <DialogHeader>
 <DialogTitle className="text-2xl font-bold">
 📧 Receba Ofertas Exclusivas!
 </DialogTitle>
 <DialogDescription className="text-base">
 Subscreva a nossa newsletter e receba:
 </DialogDescription>
 </DialogHeader>
 <div className="space-y-4">
 <ul className="space-y-2 text-sm">
 <li className="flex items-start gap-2">
 <span className="text-green-600 font-bold">✓</span>
 <span>Descontos exclusivos para subscritores</span>
 </li>
 <li className="flex items-start gap-2">
 <span className="text-green-600 font-bold">✓</span>
 <span>Dicas e truques de manutenção</span>
 </li>
 <li className="flex items-start gap-2">
 <span className="text-green-600 font-bold">✓</span>
 <span>Promoções sazonais</span>
 </li>
 <li className="flex items-start gap-2">
 <span className="text-green-600 font-bold">✓</span>
 <span>Prioridade em agendamentos</span>
 </li>
 </ul>
 <form onSubmit={handleSubmit} className="space-y-3">
 <Input
 type="text"
 placeholder="O seu nome (opcional)"
 value={name}
 onChange={(e) => setName(e.target.value)}
 disabled={isSubmitting}
 />
 <Input
 type="email"
 placeholder="O seu email *"
 value={email}
 onChange={(e) => setEmail(e.target.value)}
 disabled={isSubmitting}
 required
 />
 <Button 
 type="submit" 
 disabled={isSubmitting}
 className="w-full hover:opacity-90 text-white font-semibold"
 >
 {isSubmitting ? 'A enviar...' : '🎁 Quero Receber Ofertas'}
 </Button>
 </form>
 <p className="text-xs text-gray-500 text-center">
 Pode cancelar a subscrição a qualquer momento. Os seus dados estão protegidos.
 </p>
 </div>
 </DialogContent>
 </Dialog>
 );
}
// Helper functions pour cookies
function setCookie(name: string, value: string, days: number) {
 const expires = new Date();
 expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
 document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}
function getCookie(name: string): string | null {
 const nameEQ = name + '=';
 const ca = document.cookie.split(';');
 for (let i = 0; i < ca.length; i++) {
 let c = ca[i];
 while (c.charAt(0) === ' ') c = c.substring(1, c.length);
 if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
 }
 return null;
}
