import React from 'react';
// Breadcrumbs com Schema BreadcrumbList JSON-LD para SEO
import { useEffect, memo } from 'react';
interface BreadcrumbItem {
 label: string;
 href?: string;
}
interface BreadcrumbsProps {
 items: BreadcrumbItem[];
}
function Breadcrumbs({ items }: BreadcrumbsProps) {
 useEffect(() => {
 const schema = {
 '@context': 'https://schema.org',
 '@type': 'BreadcrumbList',
 itemListElement: items.map((item, index) => ({
 '@type': 'ListItem',
 position: index + 1,
 name: item.label,
 ...(item.href ? { item: `${window.location.origin}${item.href}` } : {})}))};
 const script = document.createElement('script');
 script.type = 'application/ld+json';
 script.setAttribute('data-breadcrumbs', 'true');
 script.textContent = JSON.stringify(schema);
 // Remove existing breadcrumb schema
 document.querySelectorAll('script[data-breadcrumbs]').forEach((el) => el.remove());
 document.head.appendChild(script);
 return () => {
 script.remove();
 };
 }, [items]);
 return (
 <nav aria-label="Breadcrumb" className="container mx-auto px-4 py-2">
 <ol className="flex flex-wrap items-center gap-1 text-xs text-gray-500">
 {items.map((item, index) => {
 const isLast = index === items.length - 1;
 return (
 <li key={index} className="flex items-center gap-1">
 {index > 0 && <span className="text-gray-300" aria-hidden="true">›</span>}
 {isLast || !item.href ? (
 <span className="font-semibold text-gray-700" aria-current="page">
 {item.label}
 </span>
 ) : (
 <a href={item.href} className="hover:underline hover:text-gray-700 transition-colors">
 {item.label}
 </a>
 )}
 </li>
 );
 })}
 </ol>
 </nav>
 );
}
export default React.memo(Breadcrumbs);
