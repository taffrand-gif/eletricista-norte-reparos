// BreadcrumbSchema - Rich Snippets pour Google
// Affiche le fil d'Ariane dans les résultats de recherche (+15% CTR)
interface BreadcrumbItem {
 name: string;
 url: string;
}
interface BreadcrumbSchemaProps {
 items: BreadcrumbItem[];
}
export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
 const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://eletricista-norte-reparos.pt';
 const schema = {
 "@context": "https://schema.org",
 "@type": "BreadcrumbList",
 "itemListElement": items.map((item, index) => ({
 "@type": "ListItem",
 "position": index + 1,
 "name": item.name,
 "item": item.url === '/' ? baseUrl : `${baseUrl}${item.url}`
 }))
 };
 return (
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
 />
 );
}
