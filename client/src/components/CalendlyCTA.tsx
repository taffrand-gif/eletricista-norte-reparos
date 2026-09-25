// CTA secundário: marcação online de intervenção não urgente.
// O telefone continua a ser o CTA principal — este link fica sempre abaixo dele.
export const CALENDLY_URL = 'https://calendly.com/norte-reparos/intervencao';

export default function CalendlyCTA({ className = '' }: { className?: string }) {
 return (
 <a
 href={CALENDLY_URL}
 target="_blank"
 rel="noopener"
 className={`inline-flex items-center justify-center gap-2 py-2 px-4 text-sm font-semibold text-gray-700 underline underline-offset-4 hover:text-gray-900 ${className}`}
 >
 📅 Marcar intervenção não urgente
 </a>
 );
}
