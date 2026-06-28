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
| 4 | **Zéro faux contenu** : pas d'avis/prix/délais/marques/claims inventés. |
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
- Token GitHub : stocké dans le Keychain macOS (osxkeychain), jamais en clair dans le repo

## Sécurité credentials

- ❌ JAMAIS afficher de clés API en clair
- ✅ 4 premiers chars max si mention
- ❌ Pas de tokens dans les commits


## 10. Robots.txt — Crawlers IA OUVERTS (verrouillée 14/06/2026 par Philippe)

**Décision stratégique** : les crawlers IA sont **OUVERTS par défaut**. Cette décision est verrouillée et ne se discute pas au cas par cas.

**Crawlers IA explicitement autorisés** (liste non exhaustive, à élargir si nouveau crawler détecté) :
- **OpenAI** : `GPTBot`, `ChatGPT-User`, `OAI-SearchBot`
- **Anthropic** : `ClaudeBot`, `Claude-User`, `Claude-SearchBot`
- **Google** : `Google-Extended` (entraînement Gemini), `GoogleOther`, `Google-InspectionTool`
- **Perplexity** : `PerplexityBot`, `Perplexity-User`
- **Meta** : `Meta-ExternalAgent`, `FacebookBot`
- **Apple** : `Applebot-Extended` (entraînement Apple Intelligence)
- **Microsoft** : `CCBot` (Common Crawl, base de nombreux LLM)
- **Mistral / xAI / autres** : tout User-Agent contenant "Bot" ET opéré par une entité LLM connue

**Règle d'or** : **ne JAMAIS Disallow un crawler IA sans validation explicite de Philippe**. Si un crawler inconnu pointe vers le site avec un volume suspect (DDoS, scraping agressif), le signaler pour analyse — mais le bloquer reste une décision business qui m'appartient, pas à l'agent.

**Rationale** :
- Les LLM citent de plus en plus le contenu dans leurs réponses (recherche augmentée)
- Bloquer un crawler IA = perdre une source de trafic qualifié future
- Le contenu est géo-spécifique (Trás-os-Montes) et factuel = faible valeur pour l'entraînement générique
- Le gain SEO indirect (mentions LLM) > le coût (bande passante négligeable)

**Si tu dois auditer robots.txt** :
- Vérifier qu'aucune règle `Disallow: /` ne vise un User-Agent de la liste ci-dessus
- Si tu en trouves une, **signaler immédiatement** (ne pas la retirer toi-même)
- Le robots.txt est un signal, pas une obligation — les crawlers sérieux le respectent, les autres ne le respecteront pas davantage s'ils sont bloqués

**Note technique** : la syntaxe robots.txt pour autoriser explicitement un bot est :
```
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /
```
User-agent: PerplexityBot
Allow: /
```
Une absence de règle = autorisé par défaut. La règle 10 dit : **en cas de doute, ne rien ajouter de restrictif**.

---

## 11. Plan SEO/GEO — Coordination multi-IA (ajoutée 28/06/2026 par Philippe)

**Pourquoi** : 4 sites Norte Reparos, plusieurs IA/agents/harnais peuvent travailler dessus en parallèle. Il faut une **mémoire vivante partagée**.

➡️ **Plan complet** : `./SEO_PLAN.md` (vision, état actuel, TODO par phase, historique)

**OBLIGATOIRE pour toute IA / agent / harnais travaillant sur ce repo** :
1. **Lire `AGENTS.md` EN ENTIER** (R1-R10 = règles verrouillées)
2. **Lire `SEO_PLAN.md` EN ENTIER** (tâches B1-B4 = différenciation homepage + FAQPage + H1 + services élec)
3. **Consigner toute action** dans la section `🔄 HISTORIQUE` du `SEO_PLAN.md`
4. **Suivre l'ordre strict** : B1 (homepage) → B2 (FAQPage) → B3 (H1) → B4 (services) → C (backlinks)

**Tâches verrouillées dans SEO_PLAN.md** :
- **B1** : réécrire homepage "installation/devis/méthode" (H1 unique, DIFFÉRENT de -urgente)
- **B2** : schema.org FAQPage sur 8 pages /zonas/
- **B3** : convertir H1 inline CSS en balisage sémantique
- **B4** : différencier visuellement les services (quadro, certificação, LED, avarias)
- **C1-C4** : backlinks externes (continu)

**Hiérarchie des fichiers de coordination** :
1. `AGENTS.md` (ce fichier, règles verrouillées)
2. `CLAUDE.md` (config Claude Code, pointeur)
3. `SEO_PLAN.md` (mémoire vivante, à maintenir à jour)
