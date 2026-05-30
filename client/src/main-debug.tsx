import { createRoot } from "react-dom/client";
console.log('main.tsx loaded');
console.log('document.readyState:', document.readyState);
function mountApp() {
 console.log('mountApp called');
 const rootElement = document.getElementById("root");
 console.log('rootElement:', rootElement);
 if (!rootElement) {
 console.error('Root element not found!');
 throw new Error('Root element not found');
 }
 console.log('Creating React root...');
 const root = createRoot(rootElement);
 console.log('React root created, rendering...');
 root.render(<div>TEST REACT WORKS</div>);
 console.log('React rendered!');
}
console.log('Setting up mount...');
if (document.readyState === 'loading') {
 console.log('DOM loading, adding DOMContentLoaded listener');
 document.addEventListener('DOMContentLoaded', mountApp);
} else {
 console.log('DOM already ready, mounting immediately');
 mountApp();
}
