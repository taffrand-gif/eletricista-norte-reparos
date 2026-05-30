import React from 'react';
import { Link } from 'wouter';
import OptimizedImage from '../OptimizedImage';
interface BlogCardProps {
 slug: string;
 title: string;
 excerpt: string;
 category: string;
 readTime: string;
 date: string;
 imageUrl?: string;
}
const BlogCard: React.FC<BlogCardProps> = ({
 slug,
 title,
 excerpt,
 category,
 readTime,
 date,
 imageUrl = '/images-optimized/blog/placeholder.jpg'
}) => {
 return (
 <article className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
 {/* Image */}
 <div className="h-48 overflow-hidden">
 <OptimizedImage
 src={imageUrl}
 alt={`Image d'illustration pour l'article: ${title}`}
 className="w-full h-full hover:scale-105 transition-transform duration-500"
 width={600}
 height={300}
 objectFit="cover"
 />
 </div>
 {/* Content */}
 <div className="p-6">
 {/* Meta */}
 <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
 <span className="px-3 py-1 bg-amber-100 text-amber-800 font-semibold rounded-full">
 {category}
 </span>
 <span>{readTime} min de leitura</span>
 <span>{date}</span>
 </div>
 {/* Title */}
 <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-amber-600 transition-colors">
 <Link href={`/blog/${slug}`}>
 <a className="block">{title}</a>
 </Link>
 </h3>
 {/* Excerpt */}
 <p className="text-gray-600 mb-4 line-clamp-3">
 {excerpt}
 </p>
 {/* Read more */}
 <Link href={`/blog/${slug}`}>
 <a className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700">
 Ler artigo completo
 <span className="text-lg">→</span>
 </a>
 </Link>
 </div>
 </article>
 );
};
export default BlogCard;