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

---

## 12. Identité Norte Reparos (transversale — ajoutée 30/06/2026 par Philippe, verrouillée)

> Bloc partagé entre les 4 sites Norte Reparos. À ne PAS dupliquer dans les pages client ; sert uniquement au contexte IA.

- **Maison-mère** : Norte Reparos (Portugal) — présentée comme une PME professionnelle multi-sites
- **Sites actifs** : canalizador-norte-reparos.pt (928 484 451) · canalizador-urgente.pt (928 484 451) · eletricista-norte-reparos.pt (932 321 892) · eletricista-urgente.pt (932 321 892)
- **Zone** : Trás-os-Montes, ~34 concelhos, rayon ~130 km autour de Macedo de Cavaleiros
- **Stack transversale** : React + Vite · GitHub (org `taffrand-gif`) · Vercel · Cloudflare DNS · n8n · Obsidian (vault `NORTE-OS`) · GA4 · Google Search Console · Google Ads · Meta Ads · TomTom · WhatsApp · ElevenLabs + Twilio (agent vocal, conçu, pas encore construit)
- **Certification élec** : TRIESP **n.º 90062** — DGEG, domínio *Execução em Baixa Tensão* até 41,4 kVA (Lei n.º 14/2015) — titulaire Filipe Bragança
- **Langue** : interne FR informel · tout contenu client **PT-PT uniquement** (jamais PT-BR)

**Règle pronom — rédaction client uniquement (verrouillée 30/06/2026)** :
- « nous » toujours, « je » jamais côté HTML/PT visible
- Interdits : *je suis, je fais, mon entreprise, sozinho, contacto pessoal, falar comigo*
- OK : *a nossa equipa, os nossos técnicos, contacte-nos, garantimos, a nossa empresa*
- Vérifié à chaque livraison

**Compatibilité** : ce bloc complète la doctrine locale (R1-R11 + §11 ci-dessus) sans la remplacer. En cas de contradiction, la doctrine locale prime.

## 13. DOCTRINE DGEG — TRIESP 90062 (ruling Filipe 2026-07-28, verrouillée)

Filipe **EST technicien certifié DGEG** et émet **Ficha Eletrotécnica** + **Termo de Responsabilidade**. Cette règle remplace toute ancienne consigne « pas de cert DGEG / pas de ficha » qui datait d'avant la certification.

**Wording public canonique** (à réutiliser verbatim, source `DGEG-CERT-SOURCE-OF-TRUTH.md`) :
> **Técnico Responsável de Instalações Elétricas inscrito na DGEG — TRIESP n.º 90062** (domínio *Execução em Baixa Tensão*, instalações até 41,4 kVA). Emitimos **Ficha Eletrotécnica** e **Termo de Responsabilidade**. Seguro de responsabilidade civil válido. (Lei n.º 14/2015)

**Scope STRICT** (jamais surclamer) :
- ✅ « inscrito na DGEG », « TRIESP n.º 90062 », « Execução em Baixa Tensão », « instalações até 41,4 kVA », « Ficha Eletrotécnica », « Termo de Responsabilidade », « seguro RC »
- ❌ **INTERDIT** : « definitivo / permanente / título definitivo », « CERTIEL » (c'est DGEG, pas CERTIEL), « instalações certificadas » au sens qualification d'entreprise, tout scope hors Baixa Tensão / 41,4 kVA (MT, AT, produção, RESP, etc.)
- **Nuance R11** : l'inscription est à *título provisório* (action de formation prévue, art. 34 Lei 14/2015) — « inscrito » reste VRAI, « definitivo » INTERDIT.

**Service RÉEL débloqué par la cert (2026-07-28) — CHARGEUR VE** :
- L'installation de **carregadores de veículos elétricos (wallbox)** entre dans le scope Baixa Tensão até 41,4 kVA. **AUTORISÉ** sur le site élec avec mention Ficha + Termo.
- Mots-clés : « carregador carro elétrico », « wallbox instalação », « posto de carregamento VE », « carregador veículo elétrico casa ».
- **HORS scope** : climatisation / bomba de calor / solaire / pompe à chaleur / plancher chauffant (sauf GO explicite Filipe).

## 14. GATE DGEG — Preuve obligatoire avant merge de tout batch mentionnant DGEG/TRIESP/certificado (verrouillée 2026-07-28 par Philippe)

**Règle non-négociable** : tout batch (script, copier-coller, refonte) qui insère ou modifie un bloc DGEG/TRIESP/Ficha/Termo sur les pages élec **DOIT** passer le gate ci-dessous avant merge vers `main`. **Refus du merge** si une des conditions échoue.

### Test 1 — Présence wording canonique (grep)
La chaîne exacte suivante DOIT apparaître dans la diff du batch (et sur chaque page touchée) :
- `TRIESP n.º 90062`
- `Execução em Baixa Tensão`
- `até 41,4 kVA`
- `Ficha Eletrotécnica`
- `Termo de Responsabilidade`
- `Lei n.º 14/2015`

**INTERDIT dans le batch** (à grep `-v` et compter = 0 occurrence) :
- `definitivo` / `permanente` / `título definitivo`
- `CERTIEL`
- `instalações certificadas` (au sens qualification d'entreprise)

### Test 2 — JSON-LD credential valide (parse strict)
Chaque page touchée DOIT contenir un JSON-LD `Person` avec `hasCredential` :
- `credentialCategory` = `"Registo profissional DGEG — TRIESP"`
- `identifier` = `"90062"`
- `recognizedBy.url` = `"https://www.dgeg.gov.pt/"`
Parse Python : `json.loads(blob)` doit retourner sans exception (après dé-sandbox `https://***@type` → `https://schema.org`).

### Test 3 — Invariants structurels (Δ = 0 cassé)
- Compteur `<h1>` par page = **inchangé** vs `main` (1 ou 0 selon état pré-existant — pas de nouvelle ligne H1 ajoutée par le batch)
- `tel:+351932321892` (numéro NON masqué) — `tel:+351****1892` interdit dans le batch
- Aucune régression grille tarifaire (70 €/h élec)

### Test 4 — Chargeur VE
Si le batch introduit « chargeur VE / wallbox / carregador » : OK. Si NON (pas de mention VE dans le batch) : N/A, passe par défaut.

### Comment exécuter le gate (depuis `client/public/`)

```bash
cd <repo>/.worktrees/fix-dgeg-doctrine/client/public
# Test 1
grep -l "TRIESP n.º 90062" *.html | wc -l
grep -rE "(definitivo|permanente|CERTIEL|instalações certificadas)" *.html | wc -l   # doit être 0
# Test 2
python3 -c '
import re, json
from pathlib import Path
broken=[]
for f in Path(".").glob("**/*.html"):
    txt = f.read_text(errors="replace")
    for m in re.finditer(r"<script type="application/ld\+json">(.*?)</script>", txt, re.DOTALL):
        b = m.group(1).replace("https://***@type","https://schema.org")
        try: json.loads(b)
        except Exception as e: broken.append((f.name, str(e)[:60]))
print("JSON-LD invalides:", len(broken))
'
# Test 3 : H1 inchangé vs main
git diff origin/main -- '*.html' | grep -cE '^[+-]<h1'   # devrait être 0
```

**Sortie interdite** : « Tout vert sauf Test 2 / JSON-LD invalides » → STOP, fixer le JSON avant merge.

### Provenance
Ce gate est dérivé de la doctrine source-of-truth : `~/work/Sites/DGEG-CERT-SOURCE-OF-TRUTH.md`.
Tout écart à cette source = STOP validation Philippe.

---

**Source de vérité unique** : `~/.openclaw/workspace/AGENTS.md` (global) + ce fichier (site-spécifique).
