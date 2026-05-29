// Service Worker pour staff-seekers.com
const CACHE_NAME = 'static-cache-v1';
const STATIC_ASSETS = [
 '/',
 '/index.html',
 '/manifest.json',
 '/assets/index.css',
 '/assets/index.js',
 '/images-optimized/hero/og-electrician-portugal.jpg',
 '/offline.html'
];

// Installation
self.addEventListener('install', event => {
 console.log('[Service Worker] Installation');
 event.waitUntil(
 caches.open(CACHE_NAME)
 .then(cache => {
 console.log('[Service Worker] Mise en cache des ressources');
 return cache.addAll(STATIC_ASSETS);
 })
 .then(() => self.skipWaiting())
 );
});

// Activation
self.addEventListener('activate', event => {
 console.log('[Service Worker] Activation');
 event.waitUntil(
 caches.keys().then(cacheNames => {
 return Promise.all(
 cacheNames.map(cacheName => {
 if (cacheName !== CACHE_NAME) {
 console.log('[Service Worker] Suppression ancien cache:', cacheName);
 return caches.delete(cacheName);
 }
 })
 );
 }).then(() => self.clients.claim())
 );
});

// Fetch avec stratégie Cache First, Network Fallback
self.addEventListener('fetch', event => {
 // Ignorer les requêtes non-GET et les requêtes d'analytics
 if (event.request.method !== 'GET' || 
 event.request.url.includes('clarity.ms') ||
 event.request.url.includes('googletagmanager.com')) {
 return;
 }

 event.respondWith(
 caches.match(event.request)
 .then(response => {
 // Retourner depuis le cache si disponible
 if (response) {
 return response;
 }

 // Sinon, aller sur le réseau
 return fetch(event.request).then(response => {
 // Vérifier si la réponse est valide
 if (!response || response.status !== 200 || response.type !== 'basic') {
 return response;
 }

 // Mettre en cache la nouvelle ressource
 const responseToCache = response.clone();
 caches.open(CACHE_NAME)
 .then(cache => {
 cache.put(event.request, responseToCache);
 });

 return response;
 }).catch(() => {
 // Fallback pour les pages HTML
 if (event.request.headers.get('accept').includes('text/html')) {
 return caches.match('/offline.html');
 }
 });
 })
 );
});

// Background sync pour les formulaires offline
self.addEventListener('sync', event => {
 if (event.tag === 'submit-form') {
 console.log('[Service Worker] Synchronisation des formulaires');
 event.waitUntil(syncForms());
 }
});

async function syncForms() {
 // Implémentation de la synchronisation des formulaires
 // À adapter selon les besoins
 console.log('[Service Worker] Synchronisation des formulaires en cours...');
}