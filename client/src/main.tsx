import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
const isDev = import.meta.env.DEV;
if (isDev) console.log('[MAIN] Script loaded, readyState:', document.readyState);
function mountApp() {
 if (isDev) console.log('[MAIN] mountApp called');
 const rootElement = document.getElementById("root");
 if (isDev) console.log('[MAIN] rootElement:', rootElement);
 if (!rootElement) {
 console.error('[MAIN] Root element not found!');
 throw new Error('Root element not found');
 }
 if (isDev) console.log('[MAIN] Creating React root...');
 try {
 createRoot(rootElement).render(<App />);
 if (isDev) console.log('[MAIN] React mounted successfully!');
 } catch (error) {
 console.error('[MAIN] Error mounting React:', error);
 throw error;
 }
}
// Wait for DOM to be ready before mounting React
if (isDev) console.log('[MAIN] Setting up mount logic...');
if (document.readyState === 'loading') {
 if (isDev) console.log('[MAIN] DOM loading, adding DOMContentLoaded listener');
 document.addEventListener('DOMContentLoaded', mountApp);
} else {
 if (isDev) console.log('[MAIN] DOM already ready, mounting immediately');
 mountApp();
}
