# GATES.md — ENR coverage cleanup 2026-11-25

BASE: ae587907fc85695fb1dc8a5b33afc2a01a799911
HEAD: 02eeefa2a9080d1163b8c4ccc984e1603e366183
FILES_SHA256: 2b92920025ff798780bbeb3ad8425a8cffa72800151d2bb640ba1fbf81c46d74
POPULATION: 20 commercial HTML pages currently indexable or without a noindex directive (14 Spain, 5 Moimenta da Beira, 1 Viseu)
BRANCH: cleanup/enr-coverage-cleanup-20261125

## Objectif mesurable (1 ligne)
Neutraliser uniquement les 20 pages ENR prouvées hors périmètre ou interdites par la source métier, sans toucher à Vila Nova da Rainha ambiguë ni aux pages Chaves/Valpaços.

## Source active (preuve chemin:ligne — sinon « À REVOIR — SOURCE ACTIVE NON PROUVÉE »)
Pages HTML statiques servies depuis `client/public/`; gnrateur sitemap actif `scripts/generate-sitemap.ts:143-247` crit `public/sitemap-dynamic.xml` mais ne gnre pas les sitemaps statiques `client/public/sitemap-*.xml` modifis ici ; source mtier

## Gate
- Motif exact : pages commerciales locales ENR ciblées avec `index,follow`, robots absent, ou directive non conforme pour Espagne, Viseu ou Moimenta da Beira.
- Attendu (résiduel) : toutes les 20 pages ciblées portent `noindex,follow`; aucune page Chaves/Valpaços modifiée; Vila Nova da Rainha reste inchangée.
- Témoins positifs : une page Espagne, une page Moimenta, une page Viseu, une page locale valide Chaves/Valpaços non touchée.
- Témoin négatif légitime (ne doit pas bouger) : pages Chaves, Valpaços, contenus installation/urgence, prix, téléphone, WhatsApp, CTA et JSON-LD métier.
- Invariants protégés (title, H1, meta, canonical, robots, JSON-LD, tel, WhatsApp, CTA, GA4, Consent Mode, RGPD, liens, prix, séparation métiers) — exceptions autorisées : aucune.
- Régénération : aucune source génératrice ENR identifiée pour ces sorties statiques ; prouver par `git grep` avant le gate. Si une source active est découverte, STOP_SOURCE_INCONNUE.

## Chaîne de preuve visée
source → généré → build → HTTP → DOM → production (autorisée ? non)

## STOP autorisés (/loop continue sinon)
valeur métier manquante · conflit de PR · changement de base · population instable · rate limit · preview inaccessible · résultat non déterministe · périmètre dépassé

## Commande de clôture
À compléter avec le manifeste réel : `python3 ~/agents/done-gate/done-gate.py --repo /Users/admin/work/Sites/_worktrees/enr-coverage-cleanup-20261125 --base ae587907fc85695fb1dc8a5b33afc2a01a799911 --ref HEAD --gates GATES.md`.
