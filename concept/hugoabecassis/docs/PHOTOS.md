# Photographies

La photographie porte le site. Tant qu'une photo manque, le site affiche un **cadre de prise de vue** qui décrit l'image attendue : le prototype sert aussi de liste de prises de vue.

## Ajouter ou remplacer une photo

1. Exporter en **JPEG sRGB, qualité 85**, côté long **2400 px minimum** (3000 px pour le hero et les plans larges).
2. Déposer le fichier dans `src/assets/photos/` avec le **nom indiqué** ci-dessous.
3. Vérifier le texte alternatif (`alt`) et la légende dans `src/data/photos.ts`.
4. Le build génère automatiquement les versions AVIF/WebP et les tailles responsives.

Pour un emplacement sans nom de fichier (« — »), ajouter `file: 'nom.jpg'` dans `src/data/photos.ts`.

## Direction

Lumière naturelle latérale, ombres assumées, peu de profondeur de champ, grain léger, tons neutres. Pas de fond blanc studio, pas d'instrument détouré, pas de mise en scène. Des photos simples et vraies.

## Photos existantes

Les photos des créations d'Hugo publiées sur le site de son employeur (Physalis, LA Jazz, Pinarbox, atelier) peuvent être récupérées avec le workflow manuel **Actions › Import des photos** du dépôt `lunixel`. Elles arrivent dans `photos-sources/<groupe>/`. Pour en utiliser une, indiquer son chemin dans `src/data/photos.ts` (ex. `file: 'physalis/14--1-__5071.jpg'`) : seules les photos référencées sont optimisées et publiées. **Droits d'usage et crédits à confirmer avec Hugo.**

## Photos utilisées dans le concept (v2, 24 septembre 2026)

**Uniquement des photos réelles.** Les photos de banque d'images de la version précédente ont été retirées.

1. **Hugo et son atelier** (`photos-sources/reportage/`, liste `reportage.json`) : Aurélie Augé ([Hanamatsuri](https://hanamatsuri.fr/en/hugo-abecassis-luthier)) et Ouest‑France (2026). Crédit affiché sur chaque photo et dans les mentions légales. **Autorisation des auteurs à obtenir.** La photo où Hugo pose debout n'est pas utilisée.
2. **Les photos d'Hugo** publiées sur le site du magasin (`photos-sources/atelier|physalis|la-jazz|pinarbox-*`) : instruments, étapes de fabrication (juillet 2015 → janvier 2016), restauration d'une guitare Carmencita, violoncelle ouvert (2018), volutes. Le bleu du drapé et du mur de l'atelier est ramené vers un gris chaud par `scripts/retouche-fonds.mjs` (seules les teintes bleues sont touchées), exécuté avant chaque build ; sortie dans `src/assets/photos/realisations/` (non versionnée). **Droits d'usage à confirmer avec Hugo.**

Import : workflow manuel **Actions › Import des photos**.

**Non utilisées** : les photos signées d'un photographe sur le site du magasin (`hugo__2479.jpg`, `artisanat-luthier*.jpg`, `luthier10533*.jpg`), à demander à leur auteur ; les photos prises dans le magasin lui‑même.

**Reportage à prévoir** (pour remplacer les photos de 700 px) : Hugo à l'établi en lumière naturelle, mains et outils, un réglage (pose de l'âme), une restauration avant/après, les instruments terminés sur fond neutre, l'atelier indépendant quand il existera.

## Emplacements

La liste à jour est dans `src/data/photos.ts` : pour chaque emplacement, le fichier, le texte alternatif, la légende et, si la photo manque, la prise de vue à faire.
