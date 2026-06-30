# context.md — Loop State

> Écrit par le loop Cowork après chaque run. NE PAS ÉDITER MANUELLEMENT.

## Dernier run
- Date : 2026-06-30
- Tâche exécutée : R4/R11 — Hero.tsx trust indicators (orçamento + garantia + étoiles)
- Branche créée : `loop/2026-06-30-eletricista-r4-hero-trust`
- PR ouverte : https://github.com/taffrand-gif/eletricista-norte-reparos/pull/78
- Résultat : ✅ 2 commits, 1 fichier modifié. PR ouverte, attente merge Philippe.

## Tâche suivante recommandée
- Tâche : B3 — H1 sémantique (convertir `style={{ textShadow: ... }}` inline en classe CSS)
- Fichier : `client/src/components/Hero.tsx` L44
- Priorité : BASSE (cosmétique SEO)
- Alternative : B4 — section services différenciés (Instalação, Quadro Elétrico, Certificação, LED)

## Apprentissages (self-improving)
- Hero.tsx avait 3 violations R4/R11 : toujours grep "Grátis|Garantia|⭐" en début de run sur tous les sites
- siteConfig.ts = source de vérité pour garantia (1 ano) et orçamento — aligner Hero.tsx dessus systématiquement
- Services interdits (~297 pages client/public/) : STOP — attente GO Philippe (ne pas toucher sans décision explicite)
- Lock files git sandbox → desktop-commander rm host-side (pattern consolidé)

## Edge cases détectés
- Hero.tsx "Garantia 2 Anos" (siteConfig dit 1 ano) : écart entre composant et config = bug de synchronisation
- Services interdits (chargeur VE, solaire, AC) dans client/public/ = 🔴 PRIORITÉ 1 mais STOP attente Philippe

## Blocages connus
- Services interdits dans client/public/ → 🛑 STOP attente GO Philippe avant batch fix

## Instructions améliorées pour prochain run
1. Grep "Grátis|Garantia [0-9]|⭐" sur Hero.tsx EN PREMIER (pattern récurrent R4/R11)
2. Comparer Hero.tsx trust indicators vs siteConfig.ts — toute divergence = violation R4
3. Pour B3 : `client/src/components/Hero.tsx` L44 → remplacer `style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}` par classe CSS
4. NE PAS toucher client/public/ services interdits sans GO explicite Philippe
5. A5-2 terminé sur canalizador-NR — pattern à vérifier sur ce site aussi (StructuredData.tsx)
