# norte_surface_scan

Scanner **lecture seule** des surfaces réellement servies (llms.txt, llms-full.txt, ai.txt, ai-plugin) d'un des 4 sites ; `--html` (expérimental, bruyant) ajoute les pages HTML.

    python3 .github/norte-guard/norte_surface_scan.py --site ENR --root . [--html] [--json out.json] [--md out.md]

Code de sortie : 0 = aucun BLOCK · 1 = au moins un BLOCK · 2 = erreur d'usage/IO.
Détecte : Z1–Z6, 65 €/h, +50 %, fenêtre 09h–17h, ROLeak, consignes internes, « mesma pessoa », délai d'arrivée chiffré, numéro/métier du site frère (hors bloc « site frère »), montants hors grille 70/100 et 30/50, 350 €/RC sur plomberie, JSON-LD invalide ou contenant 350/RC.
Test : `bash .github/norte-guard/test_norte_surface_scan.sh <arbre ENR propre>` (copie temporaire, régressions injectées, faux positifs, lecture seule).
Non branché sur la CI (décision séparée).
