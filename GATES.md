# GATES. ENR coverage deletion 2026-11-25

BASE: origin/main
POPULATION: 16 HTML files explicitly authorized for deletion
SCOPE: confirmed Spain, Moimenta/Tavira/Viseu hors couverture, excluding Vila Verde da Raia (Chaves) and Vila Nova da Rainha (Macedo de Cavaleiros)
EXCLUDED: Chaves, ValpaMdos, reserved CNR PAA pages, all other files
INVARIANTS: no sitemap or generator edits in this deletion step; no production; no merge
CHECKS: exact manifest, git diff --check, deleted paths only, generators inspected before PR
STATUS: pending validation


# GATES — Pilote ENR page prix

## CHECK

- Une seule page modifiée : `client/public/blog/preco-eletricista-portugal.html`.
- Mettre à jour uniquement la fraîcheur éditoriale visible et `dateModified` ; les tarifs sont déjà conformes à la source métier sur `origin/main`.
- Conserver les CTA `tel:` et `wa.me`, le tracking `click_tel`/`click_whatsapp`, le canonical et les données structurées.

## EXPECT

- FAQ visible et FAQ JSON-LD : 70 €/hora + 30 € déplacement en semaine 09:00–18:00 ; 100 €/hora + 50 € déplacement après 18:00, nuit, week-ends et jours fériés.
- Date visible : `25 de novembro de 2026` ; `dateModified` JSON-LD : `2026-11-25`.
- JSON-LD parseable.
- Diff borné à la page pilote et au présent gate.
- Aucun merge, push, déploiement ou modification Production.

## NON-VÉRIFIÉ avant le pilote

- Nouvelle fenêtre GSC homogène 28 jours : réseau Google indisponible dans l’exécution.
- Attribution réelle des appels/WhatsApp par page.
