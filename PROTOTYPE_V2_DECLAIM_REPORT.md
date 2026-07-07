# V2 ENR declaim cert/DGEG — PROTOTYPE 2 PAGES — INVENTAIRE + DÉCISIONS

> **Statut** : PROTOYPE prêt à committer (PATCH NON ENCORE APPLIQUÉ SUR DISQUE)
> **Branche** : `fix/enr-v2-proto` (worktree `/Users/admin/work/Sites/.worktrees/enr-v2-proto`)
> **Base** : origin/main @ `2bb79573f0`
> **Doctrine** : `~/.hermes/skills/software-development/norte-os-content-cleanup/SKILL.md` §L (prototype 2-pages AGENTS.md §12)

---

## 1. PAGES SÉLECTIONNÉES

| # | Fichier | Type | Hits cert avant | Hits faux-svc avant | Rationale |
|---|---------|------|----------------:|--------------------:|-----------|
| 1 | `client/public/eletricista-certificacao-eletrica-almendra.html` | Page cert dédiée (1 des 77) | 24 | 0 | Représentative du pattern TIER 1 EU PR1 — couvre head+JSON-LD+body+aside |
| 2 | `client/public/tecnologia-fluke-camara-termica-eletrica.html` | Page ville + faux-services | 1 | 6 | Hit cert résiduel R11 (DGEG aside) + 6 hits énumération `(wallbox, ar condicionado, bomba de calor)` |

**Pages hors prototype** (à traiter dans batch) :
- 76 autres `eletricista-certificacao-eletrica-{ville}.html`
- 10 `certificado-{slug}.html`
- ~250 pages service (alarme/avaria/quadro/iluminacao/fuga) avec carte R11
- ~6 pages transversales (index, sobre, garantia, comparacao, precos)
- 5 pages avec faux-services réels (como-reduzir-fatura-eletricidade, guia-eletricidade, indice-a-z-p11, quadros-eletricos-modernizacao, todas-perguntas-frequentes)

---

## 2. MAPPINGS APPLIQUÉS (ordre M1 longueur décroissante)

### 2.1. VoLET 1 — Declaim cert/DGEG (communs aux 2 pages)

#### Mapping EU V2 PR1 + PR2 (validé sur EU #118/#119/#120)

```python
# TIER 1 EU PR1 (7 mappings directs)
("Certificação elétrica oficial. Válida para licenciamento, seguro, venda de imóvel.",
 "Inspeção completa da instalação com relatório técnico detalhado."),
("📋 Certificado de exploração", "🔎 Inspeção da instalação"),
("Para instalações existentes. Inspeção completa + emissão de certificado válido por 8 anos.",
 "Para instalações existentes. Inspeção completa do estado da instalação + relatório técnico."),
("🏗️ Certificado de projeto", "📑 Relatório técnico"),
("Certificado obrigatório para escritura de imóvel e contrato de arrendamento.",
 "Documento do estado da instalação elétrica, entregue no fim do serviço."),
("Sim, sempre. Fatura detalhada + relatório técnico quando aplicável. Válido para seguro e licenciamento.",
 "Sim, sempre. Fatura detalhada com NIF + relatório técnico da intervenção."),
("certificação de instalações elétricas atualizada",
 "inspeção de instalações elétricas atualizada"),
("Emissão de certificado de exploração elétrica oficial, válido para licenciamento e seguro.",
 "Emissão de relatório técnico da instalação."),

# TIER 2 EU PR1 — Case-sensitive 8 variantes (doctrine M8)
("Certificacao Eletrica", "Inspeção Elétrica"),
("Certificação Elétrica", "Inspeção Elétrica"),
("certificação elétrica", "inspeção elétrica"),

# TIER 1 EU PR2 (Pacote + FAQ urgente + Substituição)
("Substituição ou upgrade certificado", "Substituição ou upgrade do quadro"),
("Certificação elétrica oficial", "Relatório técnico detalhado"),
("Certificado oficial para licenças e seguros", "Diagnóstico e relatório técnico da instalação"),
("Certificado reconhecido", "Relatório detalhado"),
("certificado de exploração", "relatório técnico"),
("certificação oficial", "relatório técnico"),
('<strong style="color:#FF6B35">Tem certificação?</strong>',
 '<strong style="color:#FF6B35">Fazem orçamento antes de começar?</strong>'),
('<div class="pacote"><div class="icon">&#128220;</div><h3>Certificação Elétrica</h3>',
 '<div class="pacote"><div class="icon">&#128270;</div><h3>Inspeção Elétrica</h3>'),
('<h3>Certificação Elétrica</h3>', '<h3>Inspeção Elétrica</h3>'),
("diferencial 30mA, barramento de terra. Certificação oficial.",
 "diferencial 30mA, barramento de terra. Relatório técnico."),
("Material de qualidade (marcas reconhecidas", "Material de qualidade (marcas de referência"),
("Material certificados", "Material profissional"),
("Certificação de instalações elétricas", "Inspeção de instalações elétricas"),
("certificação de instalações elétricas", "inspeção de instalações elétricas"),
("Instalação e certificação elétrica", "Instalação elétrica"),
("Emissão de relatório técnico elétrica oficial, válido para licenciamento e seguro.",
 "Emissão de relatório técnico da instalação."),
```

#### Mapping ENR AJOUTS (3 mappings découverts via spot-check Almendra)

```python
# ENR-A1 : Aside Direção-Geral DGEG avec espaces manquants autour de " atualizada"
# Cause probable : script React mal formé ou génération automatique
("<li><strong> atualizada</strong> (Direção-Geral de Energia e Geologia</li>",
 "<li><strong> atualizada</strong></li>"),

# ENR-A2 : JSON-LD FAQPage answer — texte bizarre "emissão de profissionais oficial, válido"
# Cause : script de génération a inséré de la prose incohérente (pas grammaticale)
("Certificação a partir de 180€ na Zona 1. Inclui inspeção completa da instalação, emissão de profissionais oficial, válido.",
 "Inspeção a partir de 180€ na Zona 1. Inclui inspeção completa da instalação, emissão de relatório técnico detalhado."),

# ENR-A3 : "emissão de certificado válido por" — variante tronquée sans "8 anos."
# Présent uniquement dans Page 1 (Almendra)
("Inspeção completa + emissão de certificado válido por",
 "Inspeção completa + emissão de relatório técnico"),
```

### 2.2. VOLET 2 — Declaim faux-services (Page 2 prototype uniquement)

```python
# FS-A1 : Aside DGEG Empresa inscrita — claim direct ("inscrita na Direção-Geral de Energia e Geologia")
# Reformulation honnête qui retire la claim DGEG
("A Norte Reparos é uma empresa inscrita na (Direção-Geral de Energia e Geologia) para a emissão de fichas eletrotécnicas",
 "A Norte Reparos realiza inspeções elétricas com técnicos com experiência para a emissão de fichas eletrotécnicas"),

# FS-A2 : Énumération wallbox/ar condicionado/bomba de calor — phrases qui OFFRENT des services inexistants
("após adição de novos equipamentos (wallbox, ar condicionado, bomba de calor)",
 "após adição de novos equipamentos de grande carga"),
```

---

## 3. DÉCISIONS AMBIGUES (à valider avant commit) — DOCTRINE §11 / M7

| # | Contexte | Décision proposée | Doctrine |
|---|---------|-------------------|----------|
| 1 | `<li><strong> atualizada</strong> (Direção-Geral de Energia e Geologia</li>` | Strip DGEG (mapping ENR-A1) | M2 gate `direção-geral` catch légitime OU claim |
| 2 | JSON-LD FAQ `"emissão de profissionais oficial, válido"` | Reformulation cohérente avec le reste (mapping ENR-A2) | Substring `Certificação` catché |
| 3 | `(wallbox, ar condicionado, bomba de calor)` énumération | Reformulation honnête "grande carga" (mapping FS-A2) | R11 service inexistant offert |
| 4 | "Inspeção completa + emissão de certificado válido por" (sans "8 anos.") | Reformulation rapport technique (mapping ENR-A3) | Substring `certificado` catché |

**Décision par défaut (verrouillée M4/M7)** : **strict retrait/reformulation** sur tous ces items. Validation par gate=0.

---

## 4. RÉSULTATS GATE (post-patch test)

### Page 1 (CERT dédiée — Almendra)

```
Avant patch :
  Hits cert (gate étendu head+JSON-LD+body) : 24
  Hits faux-services                        : 0

Mapping appliqués :
  12 mappings (9 TIER 1+2 EU + 3 ENR-A1/2/3)
  25 remplacements totaux
  Fichier: 17108 → 16893 bytes (delta -215)

Après patch :
  Hits cert                                : 0 ✓
  Hits faux-services                       : 0 ✓
```

### Page 2 (Faux-services + DGEG aside — Tecnologia Fluke)

```
Avant patch :
  Hits cert (gate étendu head+JSON-LD+body) : 1
  Hits faux-services (regex large)         : 6

Mapping appliqués :
  2 mappings cert + 2 mappings faux-services
  3 remplacements totaux

Après patch :
  Hits cert                                : 0 ✓
  Hits faux-services                       : 0 ✓
```

---

## 5. INVARIANTES (sanity check L5)

```
AVANT/APRÈS :
  932 321 892 :  13 → 13 ✓ (Page 1) ·  2 → 2 ✓ (Page 2)
  70 €       :   0 → 0 ✓ (Page 1)  ·  0 → 0 ✓ (Page 2)
  180€       :   6 → 6 ✓ (Page 1)  ·  0 → 0 ✓ (Page 2)
  CJK/cyr     :   0 chars         ·  0 chars
  Aucune régression prix/tél/CJK
```

---

## 6. CATÉGORIES RÉSIDUELLES ENR (au-delà du prototype)

Les 2 pages prototypent le pattern mais ne suffisent pas pour batch. Inventaire des catégories à étendre au batch :

| Catégorie | Hit type | Fichiers concernés | Décision batch |
|---|---|---|---|
| Cert-pages (77) | 24 hits/page typiquement | eletricista-certificacao-eletrica-{ville}.html | Mapping TIER 1 EU + ENR-A |
| certificado-* (10) | 202 hits cumulés | certificado-{slug}.html | idem |
| Service R11 (alarme/avaria/quadro/iluminacao/fuga) | 4 hits/page typiquement | ~250 fichiers | Reprise des mappings FAQ "Tem certificação?" / Equipamento certificado |
| Transversales (index, sobre, garantia, comparacao, precos) | 5-15 hits par fichier | ~7 fichiers | Reprise mappings TIER 1 EU PR2 |
| Faux-services réels (6 fichiers, 12 hits) | énumérations + carte service | tecnologia-fluke, como-reduzir-fatura, guia-eletricidade, indice-a-z-p11, quadros-eletricos-modernizacao, todas-perguntas-frequentes | Reprise mappings FS-A1/A2 + recherche additionnelle |

---

## 7. GATES (à exécuter au commit)

### Gate 1 — gate cert étendu (head+JSON-LD+body)
```bash
# Doit retourner 0 hits sur les 2 fichiers
for f in client/public/eletricista-certificacao-eletrica-almendra.html client/public/tecnologia-fluke-camara-termica-eletrica.html; do
  python3 -c "
import sys
sys.path.insert(0, '/Users/admin/.hermes/skills/software-development/norte-os-content-cleanup/scripts')
from norte_os_visible_body import count_gate
n = count_gate(open('$f').read())
print(f'$f', n, ['FAIL','PASS'][n==0])
"
done
```

### Gate 2 — gate faux-services
```bash
# Doit retourner 0 hits claim sur les 2 fichiers
SVC_RE='climatiza[çc][aã]o|ar\s+condicionado|bomba\s+de\s+calor|fotovoltaic|wallbox|ve[ií]culo\s+el[eé]trico|carregador\s+para'
for f in ...; do
  python3 -c "
import sys, re
sys.path.insert(0, '/Users/admin/.hermes/skills/software-development/norte-os-content-cleanup/scripts')
from norte_os_visible_body import get_scannable
body = get_scannable(open('$f').read())
n = len(re.findall(r'$SVC_RE', body, re.IGNORECASE))
print(f'$f', n, ['FAIL','PASS'][n==0])
"
done
```

### Gate 3 — check-purge-witness.sh
```bash
~/work/Sites/.tooling/check-purge-witness.sh /Users/admin/work/Sites/.worktrees/enr-v2-proto
# Doc : PAGE_OK list — passe si on est sur les 2 pages prototypées
```

### Gate 4 — sanity prix/tél/CJK (L5 / K4)
```bash
# Word-diff strict — UNIQUEMENT les caractères +/- au niveau mot
git diff --word-diff HEAD -- client/public/eletricista-certificacao-eletrica-almendra.html \
                            client/public/tecnologia-fluke-camara-termica-eletrica.html \
  | grep -iE '70 €|180€|932 321 892|[\u4e00-\u9fff\u0400-\u04ff]'
# Doit retourner 0 hits (les prix/tél/CJK ne doivent pas apparaître dans le word-diff)
```

### Gate 5 — symétrie insertions/deletions (saine relecture)
```bash
git diff --shortstat HEAD -- client/public/
# Symétrie attendue : insertions ≈ deletions (les remplacements équivalent rarement à taille exacte)
```

### Gate 6 — git diff --stat scope strict
```bash
git diff --stat HEAD -- client/public/
# Attendu : 2 fichiers modifiés (les 2 pages prototypées UNIQUEMENT)
```

---

## 8. PROCHAINE ÉTAPE

Si tu valides :
1. **Commit** dans la branche `fix/enr-v2-proto` : 2 fichiers patchés, message détaillé (catégories A1/A2/A3, mappings, gates)
2. **Push** + **PR draft** vers `main`
3. **Tu gates** (voir bloc ci-dessus)
4. **Si OK** : batch étendue (PR1 cert-pages 87 + PR2 normales+faux-services)

⚠️ **NE PAS MERGER** sans validation explicite de Filipe et review.

---

## 9. RÉFÉRENCES

- `~/.hermes/skills/software-development/norte-os-content-cleanup/SKILL.md` (M1-M13 + L1-L8)
- `~/.hermes/skills/software-development/norte-os-content-cleanup/references/v2-cert-mapping-eu.md` (mapping EU complet)
- `~/.hermes/skills/software-development/norte-os-content-cleanup/scripts/norte_os_visible_body.py` (helper gate étendu)
- PR EU #118 (prototype), #119 (PR1 78 fichiers), #120 (PR2 ~1860 fichiers)
- PR ENR #139 (premier pass R11/services interdits/FR→PT — fait avant ce batch)
- `~/work/Sites/DIAGNOSTIC-CONFORMITE-2026-07-06.md` §P0-B V2 cert (doctrine)
