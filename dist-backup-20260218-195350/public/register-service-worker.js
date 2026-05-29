// Registration automatique du Service Worker
if ('serviceWorker' in navigator) {
 window.addEventListener('load', function() {
 navigator.serviceWorker.register('/sw.js')
 .then(function(registration) {
 console.log('Service Worker enregistré avec succès:', registration.scope);
 
 // Vérifier les mises à jour
 registration.addEventListener('updatefound', function() {
 const newWorker = registration.installing;
 console.log('Nouveau Service Worker trouvé:', newWorker);
 
 newWorker.addEventListener('statechange', function() {
 if (newWorker.state === 'installed') {
 if (navigator.serviceWorker.controller) {
 // Nouvelle version disponible
 console.log('Nouvelle version disponible. Recharger pour mettre à jour.');
 // Option: afficher une notification à l'utilisateur
 }
 }
 });
 });
 })
 .catch(function(error) {
 console.log('Échec enregistrement Service Worker:', error);
 });
 });
 
 // Background sync pour les formulaires offline
 if ('sync' in registration) {
 // Configuration de la synchronisation
 }
}