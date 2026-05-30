// SkipLink - Composant pour navigation clavier accessible
// Permet aux utilisateurs de clavier de sauter directement au contenu principal
export default function SkipLink() {
 return (
 <a
 href="#main-content"
 className="skip-link"
 style={{
 position: 'absolute',
 left: '-9999px',
 zIndex: 9999,
 padding: '1rem 1.5rem',
 backgroundColor: '#1a1a1a',
 color: '#ffffff',
 textDecoration: 'none',
 fontWeight: 'bold',
 borderRadius: '0 0 0.5rem 0',
 boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}
 onFocus={(e) => {
 e.currentTarget.style.left = '0';
 e.currentTarget.style.top = '0';
 }}
 onBlur={(e) => {
 e.currentTarget.style.left = '-9999px';
 }}
 >
 Saltar para o conteúdo principal
 </a>
 );
}
