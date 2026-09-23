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

## Photos provisoires utilisées dans le concept

Importées depuis le site du magasin (photos des créations et de l'atelier d'Hugo, **droits d'usage à confirmer**), en attendant le reportage :
volute en cours (accueil), guitare à l'établi (Entretien), guitare au vernis écaillé (Restauration), guitare jazz en blanc (Fabrication), Physalis, LA Jazz, Pinarbox, et 5 chapitres + 7 détails de la page Atelier.
Leur définition est faible (600 à 1000 px) : elles tiennent dans les petits formats, pas en pleine largeur. Le hero, le portrait et le plan large de l'atelier restent donc des cadres de prise de vue.
Elles reçoivent une légère désaturation (classe `photo--archive`) pour s'accorder à la palette.

**Non utilisées** : les photos signées d'un photographe (`hugo__2479.jpg`, `artisanat-luthier*.jpg`, `luthier10533*.jpg`). Elles sont de bonne qualité mais demandent l'accord et le crédit de leur auteur.

## Emplacements

| Clé | Fichier attendu | Ratio | Prise de vue |
|---|---|---|---|
| `hero` | `hero.jpg` | 3 / 2 | Hugo à l'établi, de trois quarts, le regard sur le travail. Lumière d'une fenêtre, fond sombre, mains nettes. |
| `portrait` | `portrait-hugo.jpg` | 4 / 5 | Portrait simple, regard caméra ou de profil, tablier, lumière naturelle. Pas de pose d'instrument sous le menton. |
| `mains` | `mains-gouge.jpg` | 4 / 5 | Gros plan : les mains, une gouge, une volute à moitié creusée. Copeaux sur l’établi. |
| `entretien` | `entretien-ame.jpg` | 4 / 5 | La photo signature : le pose-âme passé par l'ouïe d'un violon. Lumière rasante sur le vernis. |
| `restauration` | `restauration-table.jpg` | 4 / 5 | Instrument ouvert, table posée à côté, fracture en cours de collage, petits serre-joints. |
| `fabrication` | `fabrication-bois.jpg` | 4 / 5 | Bois refendus, marquages au crayon, un gabarit posé dessus. Vue de haut, lumière douce. |
| `physalis` | `physalis.jpg` | 4 / 5 | Physalis en contre-jour sur fond neutre : volute et cordes sympathiques visibles. |
| `physalisDetail` | `physalis-detail.jpg` | 1 | Détail : chevillier et départ des cordes sympathiques. |
| `ramino` | `ramino.jpg` | 4 / 5 | Ramino de trois quarts, pour lire la forme nouvelle de la caisse. |
| `laJazz` | `la-jazz.jpg` | 4 / 5 | La guitare jazz de face, puis la table en lumière rasante pour la voûte et les ouïes. |
| `pinarbox` | `pinarbox.jpg` | 4 / 5 | Une Pinarbox, les marquages de la caisse de vin bien lisibles. |
| `lyra` | — | 4 / 5 | La lyra posée à plat, vue de haut. |
| `nova` | — | 4 / 5 | La contrebasse debout, en entier, pour son petit format. |
| `petiteFaive` | — | 4 / 5 | La petite bouche et le manche fin, de trois quarts. |
| `harpeUkulele` | — | 4 / 5 | L'instrument entier, sur fond neutre. |
| `vgTal` | — | 4 / 5 | Vue de face, puis détail de la tête. |
| `fender` | — | 4 / 5 | Avant / après de la remise en forme : manche, frettes, électronique. |
| `lieu` | `atelier-lieu.jpg` | 16 / 9 | Plan large de l'atelier : l'établi sous la fenêtre, des instruments en attente, la lumière du jour. |
| `matiere` | `atelier-matiere.jpg` | 4 / 5 | Copeaux d'épicéa, planche d'érable ondé, un morceau d'ébène. Très près, on doit sentir le grain. |
| `outils` | `atelier-outils.jpg` | 3 / 2 | Outils à main alignés, vus de haut, en lumière rasante : gouges, petits rabots, canifs, racloirs. |
| `gestes` | `atelier-gestes.jpg` | 4 / 5 | Le racloir sur une voûte, en mouvement léger. Le geste plus que le visage. |
| `temps` | `atelier-temps.jpg` | 4 / 5 | Instruments « en blanc » suspendus, en attente du vernis. Une image calme. |
| `vernis` | — | 1 | Pots, pigments, pinceau. Une touche de garance si possible. |
| `d1` | — | 3 / 4 | Les filets en bord de table, très près. |
| `d2` | — | 1 | Une ouïe en f, lumière rasante. |
| `d3` | — | 4 / 5 | Copeaux fins, en boucle, sur le bois sombre de l’établi. |
| `d4` | — | 3 / 4 | Chevilles d’ébène dans le chevillier. |
| `d5` | — | 1 | Gabarits et moules au mur, en ombres. |
| `d6` | — | 4 / 5 | Plan, crayon, compas, règle. |
| `d7` | — | 3 / 4 | Reflet du vernis frais à la fenêtre. |
| `d8` | — | 1 | Chevalet brut et chevalet taillé, côte à côte. |
| `d9` | — | 4 / 5 | Une caisse de vin ancienne, avant sa transformation. |
| `partenaire1` | — | 4 / 5 | Le musicien avec son instrument, en répétition ou en concert. Photo fournie par l’artiste, crédit à indiquer. |
| `partenaire2` | — | 4 / 5 | Le groupe, photo officielle ou prise à l’atelier lors d’un réglage. |
| `partenaire3` | — | 4 / 5 | Portrait du professionnel (école de musique, ensemble, studio…). |
