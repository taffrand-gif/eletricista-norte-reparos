import { useEffect, useState } from 'react';

// RGPD CookieConsent — Volet 1 React ENR, mission t_639f45fd
// Aligné sur la clé/valeurs du statique (PR #345) pour éviter 2 bandeaux divergents
// - Clé localStorage : 'rgpd-consent-enr-v1'
// - Valeurs : 'granted' | 'denied'
const KEY = 'rgpd-consent-enr-v1';
const STORAGES = [
  'ad_storage',
  'analytics_storage',
  'ad_user_data',
  'ad_personalization',
  'functionality_storage',
  'personalization_storage',
];

function applyConsent(value: 'granted' | 'denied') {
  if (typeof window === 'undefined' || !window.gtag) return;
  const payload: Record<string, string> = {};
  for (const k of STORAGES) payload[k] = value;
  window.gtag('consent', 'update', payload);
}

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(KEY);
    if (saved === 'granted' || saved === 'denied') {
      applyConsent(saved);
      return;
    }
    const t = setTimeout(() => setIsVisible(true), 400);
    return () => clearTimeout(t);
  }, []);

  const handleAccept = () => {
    localStorage.setItem(KEY, 'granted');
    applyConsent('granted');
    setIsVisible(false);
  };
  const handleDecline = () => {
    localStorage.setItem(KEY, 'denied');
    applyConsent('denied');
    setIsVisible(false);
  };

  if (!isVisible) return null;
  return (
    <div
      role="region"
      aria-label="Consentimento de cookies"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        background: 'rgba(17, 24, 39, 0.97)',
        color: '#f3f4f6',
        padding: '14px 18px',
        display: 'flex',
        flexWrap: 'wrap',
        gap: 12,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 14,
        lineHeight: 1.45,
      }}
    >
      <div style={{ flex: 1, minWidth: 220 }}>
        <strong>Cookies e análise de utilização.</strong> Utilizamos cookies para analisar a
        utilização do site (Google Analytics) e melhorar o serviço. Pode aceitar ou recusar —
        a sua escolha é livre.{' '}
        <a
          href="/politica-cookies"
          style={{ color: '#7dd3fc', textDecoration: 'underline', marginLeft: 4 }}
        >
          Política de cookies
        </a>
      </div>
      <div style={{ display: 'flex', gap: 10, flexShrink: 0 }}>
        <button
          id="rgpd-accept-enr"
          type="button"
          onClick={handleAccept}
          style={{
            background: '#2193b0',
            color: '#fff',
            border: 0,
            padding: '10px 18px',
            borderRadius: 6,
            fontWeight: 700,
            cursor: 'pointer',
            fontSize: 14,
          }}
        >
          Aceitar
        </button>
        <button
          id="rgpd-reject-enr"
          type="button"
          onClick={handleDecline}
          style={{
            background: '#2193b0',
            color: '#fff',
            border: 0,
            padding: '10px 18px',
            borderRadius: 6,
            fontWeight: 700,
            cursor: 'pointer',
            fontSize: 14,
          }}
        >
          Recusar
        </button>
      </div>
    </div>
  );
}

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}
