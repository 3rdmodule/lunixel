# lunixel.fr

Dépôt publié sur GitHub Pages à l'adresse **https://lunixel.fr**.

```
site/                     site Lunixel (Astro) → lunixel.fr/
concept/<nom>/            concepts clients, publiés sous lunixel.fr/concept/<nom>/
  hugoabecassis/          Hugo Abecassis, luthier (Astro) → lunixel.fr/concept/hugoabecassis/
.github/workflows/
  pages.yml               construit et publie le site + tous les concepts à chaque push sur main
  unpack.yml              importe une archive déposée dans _upload/ (mise à jour depuis le navigateur)
  import-photos.yml       importe les photos existantes d'un concept (lancement manuel)
```

## Site Lunixel

Le site vit dans `site/` (Astro). À chaque push, `pages.yml` installe les dépendances, prend les captures des projets, construit le site et le publie à la racine de lunixel.fr. Réglages, projets et textes : voir `site/README.md`.

## Concepts

Chaque dossier de `concept/` est publié sous `lunixel.fr/concept/<nom>/` :
- avec un `package.json` (Astro, Vite…) : `npm ci` puis `npm run build` avec `BASE_PATH=/concept/<nom>`, publication du dossier `dist/` ;
- sans `package.json` : copie telle quelle (HTML statique).

Les concepts sont en `noindex` (voir `SITE_INDEXABLE` dans chaque projet).

## Réglages GitHub Pages

- Settings › Pages › Source : **GitHub Actions**
- Custom domain : **lunixel.fr** (+ Enforce HTTPS)
- DNS chez OVH : `A` ×4 (185.199.108–111.153), `AAAA` ×4 (2606:50c0:8000–8003::153), `CNAME www` → `3rdmodule.github.io.`
