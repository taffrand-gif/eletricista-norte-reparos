/**
 * Favicon Manager - Change favicon dynamically
 */

export class FaviconManager {
 private static faviconElement: HTMLLinkElement | null = null;
 private static originalFavicon = '/favicon.svg';
 private static notificationFavicon = '/favicon-notification.svg';

 static init() {
 // Get or create favicon element
 this.faviconElement = document.querySelector('link[rel="icon"]');
 if (!this.faviconElement) {
 this.faviconElement = document.createElement('link');
 this.faviconElement.rel = 'icon';
 document.head.appendChild(this.faviconElement);
 }

 // Set initial favicon
 this.setDefault();

 // Listen to visibility changes
 document.addEventListener('visibilitychange', () => {
 if (document.hidden) {
 this.setNotification();
 } else {
 this.setDefault();
 }
 });
 }

 static setDefault() {
 if (this.faviconElement) {
 this.faviconElement.href = this.originalFavicon;
 }
 }

 static setNotification() {
 if (this.faviconElement) {
 this.faviconElement.href = this.notificationFavicon;
 }
 }
}
