# Hugo Abecassis, luthier

Site vitrine de **Hugo Abecassis**, luthier (entretien, restauration et fabrication d'instruments à cordes).
Concept et réalisation : [Lunixel](https://lunixel.fr/).

- Concept, recherche, direction artistique, architecture : [`docs/CONCEPT.md`](docs/CONCEPT.md)
- Déploiement GitHub Pages / OVH : [`DEPLOY.md`](DEPLOY.md) — publié par le dépôt `lunixel` sous `lunixel.fr/concept/hugoabecassis/`
- Photographies (prises de vue, formats, import) : [`docs/PHOTOS.md`](docs/PHOTOS.md)

## Stack

- [Astro](https://astro.build) 7, génération **100 % statique** (compatible GitHub Pages, aucun serveur).
- Aucun framework JavaScript côté client : environ 3 Ko de script (menu, apparitions, galerie, formulaire).
- Polices auto-hébergées (Instrument Serif, Instrument Sans, IBM Plex Mono, licence OFL) via l'API Fonts d'Astro.
- Images optimisées à la compilation (AVIF, WebP, `srcset`, lazy loading).
- Sitemap, `robots.txt`, Open Graph, JSON-LD (`Person`, `WebSite`, `BreadcrumbList`, `FAQPage`).

## Démarrer

```bash
npm install
npm run dev          # http://localhost:4321/concept/hugoabecassis/
npm run build        # génère dist/
npm run check:links  # vérifie les liens internes sous le chemin de base
```

Le chemin de base et l'URL du site viennent des variables `BASE_PATH` et `SITE_URL` (voir `.env.example`).

## Où modifier quoi

| Contenu | Fichier |
|---|---|
| Coordonnées, mode de rendez-vous, formulaire, mode concept | `src/config/site.ts` |
| Entretien, restauration, fabrication | `src/data/services.ts` |
| Créations (instruments) | `src/data/creations.ts` |
| Parcours | `src/data/parcours.ts` |
| Presse | `src/data/press.ts` |
| Partenaires | `src/data/partners.ts` |
| Atelier | `src/data/atelier.ts` |
| Photos (emplacements, briefs, textes alternatifs) | `src/data/photos.ts` + fichiers dans `src/assets/photos/` ou `photos-sources/` |
| Couleurs, typographie, espacements | `src/styles/global.css` (jetons en tête de fichier) |

**Règle de contenu** : aucune information sur Hugo n'est inventée. Ce qui manque est marqué `[À CONFIRMER]` (composant `Tbc`), visible tant que `conceptMode` vaut `true`.

## Rendez-vous

`src/config/site.ts › booking` :
- `mode: "request"` (par défaut) : « Prendre rendez-vous » mène au formulaire, avec le motif pré-rempli.
- `mode: "cal"` + `calLink: "compte/evenement"` : ouverture de Cal.com dans une fenêtre, script chargé seulement au premier clic.

Le formulaire envoie vers `form.endpoint` (Formspree, Web3Forms…). Vide = mode démonstration.

## Structure

```
src/
  config/site.ts         configuration éditoriale et pratique
  data/                  contenus (textes, créations, presse, photos)
  components/            Header, Footer, Photo, PressList, CreationCard, BookingLink, CtaBand…
  layouts/Base.astro     SEO, JSON-LD, polices, en-tête, pied de page
  pages/                 accueil, atelier, savoir-faire (+3 pages), parcours, partenaires, contact
  scripts/site.ts        comportements (sans dépendance)
  styles/global.css      jetons et styles globaux
  lib/                   url() compatible chemin de base, typographie française
scripts/                 vérification des liens, import des photos
photos-sources/          photos existantes importées (hors site, voir docs/PHOTOS.md)
docs/deploy-standalone.yml  workflow à utiliser quand le site aura son propre dépôt et domaine
```
