/* hooks.js — Conversion hooks for Norte Reparos
 1. WhatsApp buttons by problem type
 2. Dynamic "Atendimento 24h" widget
 3. "Último trabalho" badge
 4. Exit-intent popup
*/
(function() {
 'use strict';

 var path = window.location.pathname.replace(/\.html$/, '').replace(/^\//, '');
 var citySlug = '';
 var cityName = '';
 var prefixes = ['eletricista-perto-de-mim-','urgencia-eletricista-','quadros-eletricos-','iluminacao-led-','certificacao-','alarme-','eletricista-'];
 for (var i = 0; i < prefixes.length; i++) {
 if (path.indexOf(prefixes[i]) === 0) {
 citySlug = path.replace(prefixes[i], '');
 break;
 }
 }

 var CITY_NAMES = {
 'alfandega-da-fe':'Alfândega da Fé','alfandega-fe':'Alfândega da Fé','alijo':'Alijó','armamar':'Armamar',
 'boticas':'Boticas','braganca':'Bragança','carrazeda-ansiaes':'Carrazeda de Ansiães',
 'carrazeda-de-ansiaes':'Carrazeda de Ansiães','chaves':'Chaves','foz-coa':'Foz Côa',
 'freixo-espada-cinta':'Freixo de Espada à Cinta','freixo-de-espada-a-cinta':'Freixo de Espada à Cinta',
 'lamego':'Lamego','macedo-cavaleiros':'Trás-os-Montes','macedo-de-cavaleiros':'Trás-os-Montes',
 'mesao-frio':'Mesão Frio','miranda-douro':'Miranda do Douro','miranda-do-douro':'Miranda do Douro',
 'mirandela':'Mirandela','mogadouro':'Mogadouro','moimenta-beira':'Moimenta da Beira',
 'mondim-basto':'Mondim de Basto','montalegre':'Montalegre','murca':'Murça','penedono':'Penedono',
 'regua':'Peso da Régua','ribeira-pena':'Ribeira de Pena','sabrosa':'Sabrosa',
 'santa-marta-penaguiao':'Santa Marta de Penaguião','sao-joao-pesqueira':'São João da Pesqueira',
 'sernancelhe':'Sernancelhe','tabuaco':'Tabuaço','torre-moncorvo':'Torre de Moncorvo',
 'torre-de-moncorvo':'Torre de Moncorvo','valpacos':'Valpaços','vila-flor':'Vila Flor',
 'vila-pouca-aguiar':'Vila Pouca de Aguiar','vila-real':'Vila Real','vimioso':'Vimioso','vinhais':'Vinhais'
 };
 cityName = CITY_NAMES[citySlug] || '';

 var PHONE = '932321892';
 var WA = '351932321892';

 function createAvailabilityWidget() {
 var now = new Date();
 var hour = now.getHours();
 var isDay = (hour >= 8 && hour < 22);

 var widget = document.createElement('div');
 widget.id = 'disponivel-widget';
 widget.style.cssText = 'position:fixed;top:0;left:0;right:0;z-index:10000;text-align:center;padding:8px 15px;font-size:14px;font-weight:600;transition:all 0.3s;cursor:pointer;';

 if (isDay) {
 widget.style.background = 'linear-gradient(90deg,#1b8a2e,#25a33a)';
 widget.style.color = 'white';
 widget.innerHTML = '🟢 Disponível 24h/7 dias • Orçamento por escrito | <a href="tel:+351' + PHONE + '" style="color:white;text-decoration:underline">Ligar: ' + PHONE.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3') + '</a>';
 } else {
 widget.style.background = 'linear-gradient(90deg,#e65100,#f57c00)';
 widget.style.color = 'white';
 widget.innerHTML = '🟡 Urgência noturna — Taxa +50% aplicada | <a href="tel:+351' + PHONE + '" style="color:white;text-decoration:underline">Ligar: ' + PHONE.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3') + '</a>';
 }

 widget.addEventListener('click', function() {
 window.location.href = 'tel:+351' + PHONE;
 });

 document.body.insertBefore(widget, document.body.firstChild);
 document.body.style.paddingTop = '40px';
 }

 function createWhatsAppButtons() {
 var loc = cityName ? ' em ' + cityName : '';

 var problems = [
 { emoji: '⚡', label: 'Curto-circuito', msg: 'Tenho um curto-circuito' + loc + ', podem ajudar?' },
 { emoji: '🔌', label: 'Sem eletricidade', msg: 'Estou sem eletricidade' + loc + ', é urgente' },
 { emoji: '📋', label: 'certificação elétrica', msg: 'Preciso de certificação elétrica' + loc }
 ];

 // Hide duplicate float buttons
 document.querySelectorAll('.whatsapp-float, .phone-float').forEach(function(el) { el.style.display = 'none'; });
 // Don't create floating buttons if React FloatingCTA is already present
 if (document.getElementById('floating-cta-react')) return;
 var existing = document.querySelector('.floating-buttons, [class*="floating-buttons"]');
 if (!existing) return;

 var container = document.createElement('div');
 container.id = 'wa-problem-buttons';
 container.style.cssText = 'position:fixed;bottom:20px;right:20px;z-index:9999;display:flex;flex-direction:column;gap:8px;align-items:flex-end;';

 var phoneBtn = document.createElement('a');
 phoneBtn.href = 'tel:+351' + PHONE;
 phoneBtn.setAttribute('aria-label', 'Ligar agora');
 phoneBtn.style.cssText = 'width:56px;height:56px;border-radius:50%;background:#FF6B35;color:white;display:flex;align-items:center;justify-content:center;text-decoration:none;font-size:28px;box-shadow:0 4px 12px rgba(0,0,0,0.3);';
 phoneBtn.textContent = '📞';
 container.appendChild(phoneBtn);

 var waToggle = document.createElement('div');
 waToggle.style.cssText = 'position:relative;';

 var mainBtn = document.createElement('button');
 mainBtn.setAttribute('aria-label', 'WhatsApp');
 mainBtn.style.cssText = 'width:56px;height:56px;border-radius:50%;background:#25D366;color:white;display:flex;align-items:center;justify-content:center;border:none;font-size:28px;box-shadow:0 4px 12px rgba(0,0,0,0.3);cursor:pointer;';
 mainBtn.textContent = '💬';

 var dropdown = document.createElement('div');
 dropdown.style.cssText = 'position:absolute;bottom:65px;right:0;background:white;border-radius:12px;box-shadow:0 8px 30px rgba(0,0,0,0.2);padding:8px;display:none;min-width:220px;';

 var title = document.createElement('div');
 title.style.cssText = 'font-size:12px;color:#888;padding:4px 8px;font-weight:600;';
 title.textContent = 'Qual é o problema?';
 dropdown.appendChild(title);

 problems.forEach(function(p) {
 var btn = document.createElement('a');
 btn.href = 'https://wa.me/' + WA + '?text=' + encodeURIComponent(p.msg);
 btn.target = '_blank';
 btn.rel = 'noopener';
 btn.style.cssText = 'display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:8px;text-decoration:none;color:#333;font-size:14px;font-weight:500;transition:background 0.2s;';
 btn.innerHTML = '<span style="font-size:20px">' + p.emoji + '</span> ' + p.label;
 btn.addEventListener('mouseenter', function() { this.style.background = '#f0f0f0'; });
 btn.addEventListener('mouseleave', function() { this.style.background = 'transparent'; });
 dropdown.appendChild(btn);
 });

 var generic = document.createElement('a');
 generic.href = 'https://wa.me/' + WA + '?text=' + encodeURIComponent('Olá! Preciso de um eletricista' + loc + '.');
 generic.target = '_blank';
 generic.rel = 'noopener';
 generic.style.cssText = 'display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:8px;text-decoration:none;color:#888;font-size:13px;border-top:1px solid #eee;margin-top:4px;';
 generic.textContent = '💬 Outro problema';
 dropdown.appendChild(generic);

 var isOpen = false;
 mainBtn.addEventListener('click', function(e) {
 e.stopPropagation();
 isOpen = !isOpen;
 dropdown.style.display = isOpen ? 'block' : 'none';
 });
 document.addEventListener('click', function() {
 isOpen = false;
 dropdown.style.display = 'none';
 });

 waToggle.appendChild(dropdown);
 waToggle.appendChild(mainBtn);
 container.appendChild(waToggle);

 existing.replaceWith(container);
 }

 function createLastWorkBadge() {
 if (!cityName) return;

 var works = [
 'Reparação Quadro Elétrico', 'Instalação Iluminação LED', 'certificação elétrica',
 'Reparação Curto-Circuito', 'Instalação Tomadas', 'Manutenção Elétrica'
 ];
 var dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
 var work = works[dayOfYear % works.length];
 var daysAgo = (dayOfYear % 5) + 1;

 var badge = document.createElement('div');
 badge.style.cssText = 'background:#fff3e0;border-left:4px solid #FF6B35;padding:12px 16px;border-radius:8px;margin:20px 0;font-size:14px;';
 badge.innerHTML = '🔧 <strong>Última intervenção em ' + cityName + ':</strong> há ' + daysAgo + ' dia' + (daysAgo > 1 ? 's' : '') + ' — ' + work;

 var hero = document.querySelector('.hero, [class*="hero"], .header, .urgence-box, .distance-box, .content');
 if (hero && hero.nextSibling) {
 hero.parentNode.insertBefore(badge, hero.nextSibling);
 } else if (hero) {
 hero.appendChild(badge);
 }
 }

 function createExitIntent() {
 var shown = false;

 document.addEventListener('mouseout', function(e) {
 if (shown) return;
 if (e.clientY < 5 && e.relatedTarget === null) {
 showPopup();
 }
 });

 var lastScroll = 0;
 var scrollUpCount = 0;
 window.addEventListener('scroll', function() {
 if (shown) return;
 var st = window.pageYOffset;
 if (st < lastScroll && lastScroll - st > 100) {
 scrollUpCount++;
 if (scrollUpCount >= 2 && st > 300) {
 showPopup();
 }
 } else {
 scrollUpCount = 0;
 }
 lastScroll = st;
 });

 function showPopup() {
 if (shown) return;
 shown = true;

 var overlay = document.createElement('div');
 overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:99999;display:flex;align-items:center;justify-content:center;padding:20px;';

 var popup = document.createElement('div');
 popup.style.cssText = 'background:white;border-radius:16px;padding:30px;max-width:400px;width:100%;text-align:center;box-shadow:0 20px 60px rgba(0,0,0,0.3);position:relative;';
 popup.innerHTML = '<div style="font-size:40px;margin-bottom:10px">⚡</div>' +
 '<h3 style="margin:0 0 10px;font-size:20px;color:#333">Problema elétrico urgente?</h3>' +
 '<p style="color:#666;margin:0 0 20px;font-size:15px">Ligue agora — respondemos Atendimento prioritário!</p>' +
 '<a href="tel:+351' + PHONE + '" style="display:block;background:#FF6B35;color:white;padding:15px;border-radius:50px;font-size:18px;font-weight:bold;text-decoration:none;margin:8px 0">📞 ' + PHONE.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3') + '</a>' +
 '<a href="https://wa.me/' + WA + '?text=' + encodeURIComponent('Olá! Preciso de ajuda urgente.') + '" target="_blank" rel="noopener" style="display:block;background:#25D366;color:white;padding:15px;border-radius:50px;font-size:18px;font-weight:bold;text-decoration:none;margin:8px 0">💬 WhatsApp</a>' +
 '<button id="exit-close" style="position:absolute;top:10px;right:15px;background:none;border:none;font-size:24px;color:#999;cursor:pointer">✕</button>';

 overlay.appendChild(popup);
 document.body.appendChild(overlay);

 overlay.addEventListener('click', function(e) {
 if (e.target === overlay || e.target.id === 'exit-close') {
 overlay.remove();
 }
 });
 popup.querySelector('#exit-close').addEventListener('click', function() {
 overlay.remove();
 });
 }
 }

 if (document.readyState === 'loading') {
 document.addEventListener('DOMContentLoaded', init);
 } else {
 init();
 }

 function init() {
 createAvailabilityWidget();
 // createWhatsAppButtons() removed — inline .whatsapp-float + .phone-float buttons
 // in HTML pages are sufficient. This eliminates duplicate floating buttons.
 createLastWorkBadge();
 createExitIntent();
 }
})();
