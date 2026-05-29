// Service Worker pour optimisation mobile-first
// Staff-Seekers.com et Norte-Reparos.com

const CACHE_NAME = 'mobile-first-v1';
const OFFLINE_URL = '/offline.html';

// Assets critiques pour le chargement initial
const CRITICAL_ASSETS = [
 '/',
 '/index.html',
 '/mobile-first-optimizations.css',
 '/manifest.json'
];

// Assets à mettre en cache
const ASSETS_TO_CACHE = [
 ...CRITICAL_ASSETS,
 // CSS/JS
 '/assets/index-*.css',
 '/assets/index-*.js',
 '/assets/vendor-*.js',
 
 // Images critiques
 '/images-optimized/hero/hero-electrician-portugal-320w.webp',
 '/images-optimized/hero/hero-plumber-portugal-320w.webp',
 
 // Fonts
 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;900&family=Inter:wght@400;500;600&display=swap',
 
 // Icons
 '/icons/icon-72x72.png',
 '/icons/icon-96x96.png',
 '/icons/icon-192x192.png'
];

// Installation du Service Worker
self.addEventListener('install', event => {
 console.log('[Service Worker] Installation...');
 
 event.waitUntil(
 caches.open(CACHE_NAME)
 .then(cache => {
 console.log('[Service Worker] Mise en cache des assets critiques');
 return cache.addAll(CRITICAL_ASSETS);
 })
 .then(() => {
 console.log('[Service Worker] Installation terminée');
 return self.skipWaiting();
 })
 );
});

// Activation du Service Worker
self.addEventListener('activate', event => {
 console.log('[Service Worker] Activation...');
 
 // Nettoyage des anciens caches
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
 }).then(() => {
 console.log('[Service Worker] Activation terminée');
 return self.clients.claim();
 })
 );
});

// Stratégie de cache: Network First avec fallback au cache
self.addEventListener('fetch', event => {
 // Ignorer les requêtes non-GET et les requêtes cross-origin
 if (event.request.method !== 'GET' || !event.request.url.startsWith(self.location.origin)) {
 return;
 }
 
 // Pour les pages HTML: Network First
 if (event.request.headers.get('Accept')?.includes('text/html')) {
 event.respondWith(
 fetch(event.request)
 .then(response => {
 // Mettre à jour le cache avec la nouvelle réponse
 const responseClone = response.clone();
 caches.open(CACHE_NAME).then(cache => {
 cache.put(event.request, responseClone);
 });
 return response;
 })
 .catch(() => {
 // Fallback au cache
 return caches.match(event.request)
 .then(cachedResponse => {
 if (cachedResponse) {
 return cachedResponse;
 }
 // Fallback à la page offline
 return caches.match(OFFLINE_URL);
 });
 })
 );
 return;
 }
 
 // Pour les assets statiques: Cache First
 event.respondWith(
 caches.match(event.request)
 .then(cachedResponse => {
 if (cachedResponse) {
 // Mettre à jour le cache en arrière-plan
 fetchAndCache(event.request);
 return cachedResponse;
 }
 
 // Si pas dans le cache, aller au réseau
 return fetch(event.request)
 .then(response => {
 // Mettre en cache si la réponse est valide
 if (response.status === 200) {
 const responseClone = response.clone();
 caches.open(CACHE_NAME).then(cache => {
 cache.put(event.request, responseClone);
 });
 }
 return response;
 })
 .catch(error => {
 console.error('[Service Worker] Fetch failed:', error);
 // Pour les images, retourner une image placeholder
 if (event.request.url.match(/\.(jpg|jpeg|png|webp|gif)$/)) {
 return caches.match('/images/placeholder.svg');
 }
 });
 })
 );
});

// Fonction pour mettre à jour le cache en arrière-plan
function fetchAndCache(request) {
 fetch(request)
 .then(response => {
 if (response.status === 200) {
 const responseClone = response.clone();
 caches.open(CACHE_NAME).then(cache => {
 cache.put(request, responseClone);
 });
 }
 })
 .catch(() => {
 // Ignorer les erreurs de mise à jour en arrière-plan
 });
}

// Gestion des messages depuis la page
self.addEventListener('message', event => {
 if (event.data && event.data.type === 'SKIP_WAITING') {
 self.skipWaiting();
 }
});

// Gestion des push notifications
self.addEventListener('push', event => {
 const options = {
 body: event.data?.text() || 'Nova mensagem do Staff Seekers',
 icon: '/icons/icon-192x192.png',
 badge: '/icons/badge-72x72.png',
 vibrate: [100, 50, 100],
 data: {
 dateOfArrival: Date.now(),
 primaryKey: 1
 },
 actions: [
 {
 action: 'explore',
 title: 'Ver serviços',
 icon: '/icons/check-72x72.png'
 },
 {
 action: 'close',
 title: 'Fechar',
 icon: '/icons/x-72x72.png'
 }
 ]
 };

 event.waitUntil(
 self.registration.showNotification('Staff Seekers', options)
 );
});

// Gestion des clics sur les notifications
self.addEventListener('notificationclick', event => {
 console.log('[Service Worker] Notification click reçu.');

 event.notification.close();

 if (event.action === 'explore') {
 // Ouvrir la page des services
 event.waitUntil(
 clients.openWindow('/#services')
 );
 } else if (event.action === 'close') {
 // Fermer la notification
 console.log('[Service Worker] Notification fermée.');
 } else {
 // Action par défaut: ouvrir la page d'accueil
 event.waitUntil(
 clients.openWindow('/')
 );
 }
});

// Stratégie de cache intelligente pour les images
self.addEventListener('fetch', event => {
 const url = new URL(event.request.url);
 
 // Pour les images: stratégie adaptative basée sur la connexion
 if (url.pathname.match(/\.(jpg|jpeg|png|webp|gif)$/)) {
 event.respondWith(
 caches.match(event.request)
 .then(cachedResponse => {
 if (cachedResponse) {
 // Vérifier la connexion
 if (navigator.connection) {
 const connection = navigator.connection;
 
 // Si connexion lente ou économiseur de données, utiliser le cache
 if (connection.saveData || 
 connection.effectiveType === 'slow-2g' || 
 connection.effectiveType === '2g') {
 return cachedResponse;
 }
 }
 
 // Sinon, mettre à jour en arrière-plan
 fetchAndCache(event.request);
 return cachedResponse;
 }
 
 // Si pas dans le cache, aller au réseau
 return fetch(event.request);
 })
 );
 }
});