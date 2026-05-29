import { useState } from 'react';
import { trpc } from '@/lib/trpc';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { trackEvent } from './FacebookPixel';

interface NewsletterFormProps {
 source?: string;
 className?: string;
}

export function NewsletterForm({ source = 'footer_form', className = '' }: NewsletterFormProps) {
 const [email, setEmail] = useState('');
 const [isSubmitting, setIsSubmitting] = useState(false);

 const subscribe = trpc.newsletter.subscribe.useMutation({
 onSuccess: (data) => {
 if (data.success) {
 toast.success('✅ Inscrito com sucesso!', {
 description: 'Receberá as nossas novidades por email.'});
 setEmail('');
 
 // Track Facebook Pixel event
 trackEvent.completeRegistration('newsletter');
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

 const handleSubmit = async (e: React.FormEvent) => {
 e.preventDefault();
 
 if (!email) {
 toast.error('Por favor, insira o seu email');
 return;
 }

 setIsSubmitting(true);
 subscribe.mutate({ email, source });
 };

 return (
 <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-2 ${className}`}>
 <Input
 type="email"
 placeholder="O seu email"
 value={email}
 onChange={(e) => setEmail(e.target.value)}
 className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60"
 disabled={isSubmitting}
 required
 />
 <Button 
 type="submit" 
 disabled={isSubmitting}
 className="bg-white text-gray-900 hover:bg-gray-100 font-semibold"
 >
 {isSubmitting ? 'A enviar...' : 'Subscrever'}
 </Button>
 </form>
 );
}
