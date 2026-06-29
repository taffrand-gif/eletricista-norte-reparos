# context.md — Loop State

> Écrit par le loop Cowork après chaque run. NE PAS ÉDITER MANUELLEMENT.

## Dernier run
- Date : 2026-06-29
- Tâche exécutée : B1 — Homepage H1 + R12 cleanup (hero title/subtitle, personalizedSubtitle)
- Branche créée : `loop/2026-06-29-eletricista-b1-homepage-h1`
- PR ouverte : https://github.com/taffrand-gif/eletricista-norte-reparos/pull/77
- Résultat : ✅ 2 commits, 2 fichiers modifiés. PR ouverte, attente merge Philippe.

## Tâche suivante recommandée
- Tâche : B3 — H1 sémantique (convertir inline style en classe CSS)
- Priorité : BASSE
- Alternative : B4 — section services différenciés (quadro, certificação, LED, avarias)

## Apprentissages (self-improving)
- Même pattern que canalizador : siteConfig.ts + Hero.tsx = sources duales à synchroniser
- Hero.tsx de ce site utilise `config.hero.title` directement (sans split '—') → titre peut être plus long
- Hero.tsx contient "⭐⭐⭐⭐⭐ avaliações Google em curso" + "Orçamento 100% Grátis" + "Garantia 2 Anos" → R4/R11 concerns à auditer

## Edge cases détectés
- "Garantia 2 Anos" dans Hero.tsx indicators → non validée, possible R4 violation. Confirmer avec Philippe ou retirer.
- "Orçamento 100% Grátis" dans Hero.tsx → R4 concern (devrait être "orçamento por escrito")

## Blocages connus
- aucun

## Instructions améliorées pour prochain run
1. Auditer Hero.tsx trust indicators (lignes 87-98) pour violations R4/R11 avant prochaine tâche B
2. Si lock file git : utiliser `mcp__desktop-commander__start_process` avec `rm -f ~/work/Sites/{repo}/.git/*.lock && git ...`
3. Pour B4 : modifier ServicesSlider.tsx avec 4 services distincts : Instalação, Quadro Elétrico, Certificação, Iluminação LED
