import { useEffect } from 'react';

// Hauteur du bandeau de consentement (statique #rgpd-banner-enr ou bandeau React de secours, même aria-label)
// publiée dans --rgpd-banner-h : la barre mobile, le CTA flottant et le padding du body se placent au-dessus du bandeau
// au lieu d'être recouverts. Le bandeau et le Consent Mode ne sont pas modifiés.
const SELECTOR = '#rgpd-banner-enr, [aria-label="Consentimento de cookies"]';

export function useRgpdBannerOffset() {
  useEffect(() => {
    const root = document.documentElement;
    const measure = () => {
      const banner = document.querySelector(SELECTOR);
      const h = banner ? Math.ceil(banner.getBoundingClientRect().height) : 0;
      root.style.setProperty('--rgpd-banner-h', `${h}px`);
    };
    measure();
    const observer = new MutationObserver(measure);
    observer.observe(document.body, { childList: true, subtree: true });
    window.addEventListener('resize', measure);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', measure);
      root.style.removeProperty('--rgpd-banner-h');
    };
  }, []);
}
