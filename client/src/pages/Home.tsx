// Design: Professional Service Layout - HOMEPAGE PREMIUM
// Main landing page - SIMPLIFIED to 5 sections for maximum conversion
// 1. Hero with massive title and CTA
// 2. WhyDifferent - 10 problems solved differently
// 3. PriceCalculator - Single optimized calculator
// 4. Social Proof - Testimonials + Before/After
// 5. FAQ + Footer - Reassurance and conversion
// Impact: -60% scroll, +50-100% conversion expected

import { lazy, Suspense, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import { ScrollToTop } from '@/components/ScrollToTop';
import MobileBottomNav from '@/components/MobileBottomNav';
import { useSite } from '@/contexts/SiteContext';

// Lazy load below-the-fold components - HOMEPAGE PREMIUM (5 sections only)
const WhyDifferent = lazy(() => import('@/components/WhyDifferent'));
const PriceCalculator = lazy(() => import('@/components/PriceCalculator'));
const Testimonials = lazy(() => import('@/components/Testimonials'));
const BeforeAfter = lazy(() => import('@/components/BeforeAfter'));
const FAQ = lazy(() => import('@/components/FAQ'));

// Phase 2 - Transparence Prix + Garanties
const PriceCalculatorWidget = lazy(() => import('@/components/PriceCalculatorWidget'));
const PriceTransparency = lazy(() => import('@/components/PriceTransparency'));
const GuaranteeSection = lazy(() => import('@/components/GuaranteeSection'));
const TrustBadges = lazy(() => import('@/components/TrustBadges'));

// Phase 3 - Marketing Hooks (Stratégie Mars 2026)
const TransparenciaTotal = lazy(() => import('@/components/TransparenciaTotal'));
const EquipamentoProfissional = lazy(() => import('@/components/EquipamentoProfissional'));

// Phase 4 - Maillage Interne (SEO)
const BlogPreview = lazy(() => import('@/components/BlogPreview'));
const CitiesGrid = lazy(() => import('@/components/CitiesGrid'));

export default function Home() {
 const { config } = useSite();

 // Update document title and meta tags
 useEffect(() => {
 document.title = config.title;
 
 // Update meta description
 let metaDescription = document.querySelector('meta[name="description"]');
 if (!metaDescription) {
 metaDescription = document.createElement('meta');
 metaDescription.setAttribute('name', 'description');
 document.head.appendChild(metaDescription);
 }
 metaDescription.setAttribute('content', config.description);


 // Update CSS custom properties for dynamic theming
 document.documentElement.style.setProperty('--site-primary', config.colors.primary);
 document.documentElement.style.setProperty('--site-primary-dark', config.colors.primaryDark);
 document.documentElement.style.setProperty('--site-primary-light', config.colors.primaryLight);
 }, [config]);

 return (
 <>
 {/* SEO Components - Don't render visible content */}
 <StructuredData />

 <div className="min-h-screen flex flex-col">
 <Header />
 <main id="main-content">
 {/* HOMEPAGE PREMIUM - 5 SECTIONS ONLY */}

 {/* 1. HERO PREMIUM - CTA Direct */}
 <Hero />

 {/* PHASE 3 - HOOKS MARKETING (Mars 2026) */}
 <Suspense fallback={null}><EquipamentoProfissional /></Suspense>
 <Suspense fallback={null}><TransparenciaTotal /></Suspense>

 {/* PHASE 2 - TRANSPARENCE PRIX */}
 <Suspense fallback={null}><PriceCalculatorWidget /></Suspense>
 <Suspense fallback={null}><PriceTransparency /></Suspense>

 {/* 2. VALEUR DIFFÉRENCIANTE - 10 problèmes résolus */}
 <Suspense fallback={null}><WhyDifferent /></Suspense>

 {/* PHASE 2 - GARANTIES */}
 <Suspense fallback={null}><GuaranteeSection /></Suspense>
 <Suspense fallback={null}><TrustBadges /></Suspense>

 {/* 3. CALCULATEUR ROI - 1 seul, optimisé */}
 <Suspense fallback={null}><PriceCalculator /></Suspense>

 {/* 4. PROVA SOCIAL - Témoignages + Before/After */}
 <Suspense fallback={null}><Testimonials /></Suspense>
 <Suspense fallback={null}><BeforeAfter /></Suspense>

 {/* PHASE 4 - MAILLAGE INTERNE SEO */}
 <Suspense fallback={null}><BlogPreview /></Suspense>
 <Suspense fallback={null}><CitiesGrid /></Suspense>

 {/* 5. CTA FINAL + FAQ - Conversion + Réassurance */}
 <Suspense fallback={null}><FAQ /></Suspense>
 </main>
 <Footer />
 <ScrollToTop />
 <MobileBottomNav />
 </div>
 </>
 );
}
