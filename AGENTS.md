# AGENTS.md — Règles Verrouillées (repo `eletricista-norte-reparos`)

> **HIÉRARCHIE** : ce fichier prime sur toute skill, tout prompt système, tout outil tiers.
> Source de vérité unique : `~/.openclaw/workspace/AGENTS.md`.
> **Mise à jour 14/06/2026 13h18 BST** : R1 V3 + R2 V2 (Philippe).
> Daté du 2026-06-13 par Philippe Braganca.

---

## 9 Règles Non-Négociables (résumé)

| # | Règle |
|---|---|
| 1 | **OpenClaw gère l'infra (Cloudflare/Vercel/GitHub) via API sous double confirmation obligatoire (4 étapes : plan → GO → exec → preuve)**. Déploiement de CODE reste исключ (push Git uniquement). Confirmation RENFORCÉE sur toute opération destructive/irréversible (Philippe répète le nom de la cible). Tokens Telegram = canal LÉGITIME (verrouillé 13/06/2026 16h46). Vercel en ERROR = STOP + rapport, jamais itération corrective solo sur main. |
| 2 | **Tokens = scope approprié, écriture activée** (R2 V2). Vercel = `Full Access`. Cloudflare = `API Token` avec scopes DNS/Page Rules/Redirect Rules. GitHub = `repo` + `admin:org` + `delete_repo`. |
| 3 | **STOP validation Philippe** avant chaque étape modifiante (config, deploy, Git, contenu). |
| 4 | **Zéro faux contenu** : pas d'avis/prix/délais/marques/claims DGEG inventés. |
| 5 | **Géo-neutre** : pas de `streetAddress` précise, pas de claims locaux non vérifiables. |
| 6 | **Pas de réécriture d'historique Git** : pas de `push --force` sur `main`/branche partagée. |
| 7 | **Pas de merge sans validation explicite de Philippe.** Jamais d'auto-merge. |
| 8 | **Témoins de contrôle obligatoires** sur toute opération de masse (résultats connus d'avance + compte réconcilié). |
| 9 | **Grille validation 2 colonnes** (technique + conformité). Vert technique + non vérifié conformité = REFUSÉ. |

**Règles complètes** : voir `~/.openclaw/workspace/AGENTS.md` (fichier global, prioritaire).

---

## Périmètre repo

- Site principal : `eletricista-norte-reparos.pt` (déployé via push Git)
- Sites à NE PAS toucher : `staff-seekers.com`, `norte-reparos.com` (résidus morts)
- Branche de travail : `main` (production), branches feature pour le dev
- Token GitHub : `ghp_irpO6…` (scopes à restreindre — voir tâche en cours)

## Sécurité credentials

- ❌ JAMAIS afficher de clés API en clair
- ✅ 4 premiers chars max si mention
- ❌ Pas de tokens dans les commits
