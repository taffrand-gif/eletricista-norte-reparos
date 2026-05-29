// Design: Professional Service Layout
// This context provides site-specific configuration to all components
// Fixed: 2026-03-05 - Corrected import path for siteConfig

import React, { createContext, useContext, ReactNode } from 'react';
import { SiteConfig, getCurrentSiteConfig } from '../../../shared/siteConfig';

interface SiteContextType {
 config: SiteConfig;
}

const SiteContext = createContext<SiteContextType | undefined>(undefined);

export function SiteProvider({ children }: { children: ReactNode }) {
 const config = getCurrentSiteConfig();

 return (
 <SiteContext.Provider value={{ config }}>
 {children}
 </SiteContext.Provider>
 );
}

export function useSite() {
 const context = useContext(SiteContext);
 if (context === undefined) {
 throw new Error('useSite must be used within a SiteProvider');
 }
 return context;
}
