import { useState, useEffect, useRef } from 'react';
interface OptimizedImageProps {
 src: string;
 alt: string;
 className?: string;
 width?: number;
 height?: number;
 priority?: boolean;
 objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
 sizes?: string;
}
/**
 * Composant d'image optimisé avec:
 * - Lazy loading natif
 * - Support srcset responsive (320w, 640w, 1024w, 1920w)
 * - Format WebP avec fallback JPG
 * - Placeholder pendant le chargement
 * - Prévention CLS avec width/height
 */
export default function OptimizedImage({
 src,
 alt,
 className = '',
 width,
 height,
 priority = false,
 objectFit = 'cover',
 sizes = '100vw'}: OptimizedImageProps) {
 const [isLoaded, setIsLoaded] = useState(false);
 const [isInView, setIsInView] = useState(priority);
 const imgRef = useRef<HTMLImageElement>(null);
 useEffect(() => {
 if (priority) return;
 const observer = new IntersectionObserver(
 (entries) => {
 entries.forEach((entry) => {
 if (entry.isIntersecting) {
 setIsInView(true);
 observer.disconnect();
 }
 });
 },
 {
 rootMargin: '50px'}
 );
 if (imgRef.current) {
 observer.observe(imgRef.current);
 }
 return () => {
 observer.disconnect();
 };
 }, [priority]);
 // Générer srcset pour images locales
 const generateSrcSet = (imagePath: string): string => {
 // Si c'est une URL externe (CDN), pas de srcset
 if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
 return '';
 }
 // Extraire le chemin et l'extension
 const pathParts = imagePath.split('.');
 const extension = pathParts.pop();
 const basePath = pathParts.join('.');
 // Vérifier si c'est une image optimisée (dans /images-optimized/)
 if (!imagePath.includes('/images-optimized/')) {
 return '';
 }
 // Générer srcset pour différentes tailles
 const widths = [320, 640, 1024, 1920];
 const srcsetEntries = widths.map(w => {
 // Pour les images optimisées, on suppose qu'elles existent en WebP
 return `${basePath}.webp ${w}w`;
 });
 return srcsetEntries.join(', ');
 };
 // Générer source WebP
 const getWebPSrc = (imagePath: string): string => {
 if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
 return imagePath;
 }
 return imagePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
 };
 const containerStyle: React.CSSProperties = {
 position: 'relative',
 overflow: 'hidden',
 backgroundColor: '#f3f4f6',
 ...(width && height ? { aspectRatio: `${width} / ${height}` } : {})};
 const imgStyle: React.CSSProperties = {
 width: '100%',
 height: '100%',
 objectFit,
 transition: 'opacity 0.3s ease-in-out',
 opacity: isLoaded ? 1 : 0};
 const srcSet = generateSrcSet(src);
 const webpSrc = getWebPSrc(src);
 const isExternal = src.startsWith('http://') || src.startsWith('https://');
 return (
 <div ref={imgRef} style={containerStyle} className={className}>
 {isInView && (
 <>
 {!isExternal && srcSet ? (
 <picture>
 <source
 type="image/webp"
 srcSet={srcSet}
 sizes={sizes}
 />
 {/* M8 activation : fallback src = original (jpg/png), webp servi via <source>. Reversible. */}
 <img
 src={src}
 alt={alt || ''}
 style={imgStyle}
 loading={priority ? 'eager' : 'lazy'}
 decoding="async"
 onLoad={() => setIsLoaded(true)}
 {...(width && { width })}
 {...(height && { height })}
 {...(!alt && { role: 'presentation' })}
 />
 </picture>
 ) : (
 <img
 src={src}
 alt={alt || ''}
 style={imgStyle}
 loading={priority ? 'eager' : 'lazy'}
 decoding="async"
 onLoad={() => setIsLoaded(true)}
 {...(width && { width })}
 {...(height && { height })}
 {...(!alt && { role: 'presentation' })}
 />
 )}
 {!isLoaded && (
 <div
 style={{
 position: 'absolute',
 top: 0,
 left: 0,
 right: 0,
 bottom: 0,
 display: 'flex',
 alignItems: 'center',
 justifyContent: 'center',
 backgroundColor: '#f3f4f6'}}
 >
 <div className="animate-pulse">
 <div className="h-4 w-4 bg-gray-400 rounded-full"></div>
 </div>
 </div>
 )}
 </>
 )}
 </div>
 );
}
