/**
 * Title Manager - Dynamic page title for inactive tabs
 */
export class TitleManager {
 private static originalTitle = '';
 private static blinkInterval: NodeJS.Timeout | null = null;
 private static urgencyTitle = '🚨 Urgência 24h Disponível!';
 private static isBlinking = false;
 static init() {
 // Store original title
 this.originalTitle = document.title;
 // Listen to visibility changes
 document.addEventListener('visibilitychange', () => {
 if (document.hidden) {
 this.startBlinking();
 } else {
 this.stopBlinking();
 }
 });
 }
 static startBlinking() {
 if (this.isBlinking) return;
 
 this.isBlinking = true;
 let showUrgency = true;
 this.blinkInterval = setInterval(() => {
 document.title = showUrgency ? this.urgencyTitle : this.originalTitle;
 showUrgency = !showUrgency;
 }, 1000);
 }
 static stopBlinking() {
 if (!this.isBlinking) return;
 this.isBlinking = false;
 
 if (this.blinkInterval) {
 clearInterval(this.blinkInterval);
 this.blinkInterval = null;
 }
 document.title = this.originalTitle;
 }
 static setTitle(title: string) {
 this.originalTitle = title;
 if (!this.isBlinking) {
 document.title = title;
 }
 }
}
