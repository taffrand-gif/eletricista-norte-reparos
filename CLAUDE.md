# CLAUDE.md — Configuration Claude Code (Norte-OS)

> Lu par Claude Code dans VSCode. **Ne duplique pas la doctrine** : voir `./AGENTS.md`.
> Daté du 2026-06-28 par Philippe Braganca.

## Site
- **Domaine** : eletricista-norte-reparos.pt
- **NAP** : +351 932 321 892 | Norte Reparos | Trás-os-Montes
- **Métier** : électricité (⚡) — pas plomberie
- **Stack** : statique Vite + HTML/CSS, source `client/public/`
- **Déploiement** : `git push` → Vercel auto (jamais `vercel deploy` API, R1)

## Commandes & outils Atlas
- `git fetch && git status` AVANT toute modif (#154)
- Pas de `npm run test`/`lint`/`build` standard — sites statiques
- Slash commands : `/goal` (boucle audit), `/loop`, `/review`

## Workflow patch (rappel court)
1. **Lire `./AGENTS.md`** du repo (Doctrine + NAP + règles site) — c'est la source de vérité
2. Témoin grep décomposé AVANT (#170) : 1 motif par commande, JAMAIS combiné
3. Patch 1 fichier à la fois, 2 vagues si R12 massif (#171)
4. Témoin grep APRÈS + commit référencé leçon : `fix(R12,#170): <desc>`
5. Push SANS `--force` (R6), merger via R7-TER ou attendre Philippe

## Doctrine complète
➡️ `./AGENTS.md` (Doctrine A+ COMPLÈTE, NAP 932, R11-R12)

## Plan stratégique SEO/GEO
➡️ `./SEO_PLAN.md` (vision, état actuel, TODO par phase, historique)

**OBLIGATOIRE** : toute IA / agent / harnais travaillant sur ce repo DOIT :
1. **Lire `AGENTS.md` EN ENTIER** (règles verrouillées)
2. **Lire `SEO_PLAN.md` EN ENTIER** (vision + tâches en cours)
2-bis. **Lire `MARKETING.md`** (couche offensive : persona, value equation, construction de hooks — complète AGENTS.md, ne le remplace pas)
3. **Consigner toute action** dans la section `🔄 HISTORIQUE` du `SEO_PLAN.md`
4. **Suivre l'ordre des tâches** (A1 → A2 → ... → B1 → ... → C1 → ...)

## Pas touche
- ❌ Pas de duplication de règles ici
- ❌ Pas de duplication du plan dans `SEO_PLAN.md`
- ❌ Pas de commandes destructives sans GO Philippe (R1, R3)
| ❌ Pas de modification sans mise à jour de `SEO_PLAN.md` (historique)

---

## Identité Norte Reparos (transversale — ajoutée 30/06/2026)

> Bloc d'identité partagé entre les 4 sites. À ne PAS dupliquer dans les pages client ; sert uniquement au contexte IA.

- **Maison-mère** : Norte Reparos (Portugal) — présentée comme une PME professionnelle multi-sites
- **Sites actifs** : `canalizador-norte-reparos.pt` (928 484 451) · `canalizador-urgente.pt` (928 484 451) · `eletricista-norte-reparos.pt` (932 321 892) · `eletricista-urgente.pt` (932 321 892)
- **Zone** : Trás-os-Montes, ~34 concelhos, rayon ~130 km autour de Macedo de Cavaleiros
- **Stack transversale** : React + Vite · GitHub (org `taffrand-gif`) · Vercel · Cloudflare DNS · n8n · Obsidian (vault `NORTE-OS`) · GA4 · Google Search Console · Google Ads · Meta Ads · TomTom · WhatsApp · ElevenLabs + Twilio (agent vocal, conçu, pas encore construit)
- **Certification élec** : DGEG `1757/2026/DIEN` en attente · co-signature LDE Mirandela en attendant
- **Langue** : interne FR informel · tout contenu client **PT-PT uniquement** (jamais PT-BR)
- **Positionnement site** : parler « a nossa equipa / os nossos técnicos / contacte-nous / garantimos ». **JAMAIS « je suis seul / entreprise individuelle / contacto pessoal »** sur les pages visibles client — règle absolue, verrouillée par Philippe 30/06/2026
- **Pronom** : **« nous » toujours, « je » jamais** côté rédaction client. Interdits : *« je suis », « je fais », « mon entreprise », « sozinho »*. À utiliser : *« nous sommes », « notre équipe », « nous faisons », « a nossa equipa », « fazemos »*. Vérifié à chaque livraison.

> **Note de compatibilité** : ce bloc ne remplace ni `AGENTS.md` (verrouillé, prime) ni `SEO_PLAN.md`. Si contradiction, `AGENTS.md` l'emporte.
