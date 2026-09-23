# lunixel.fr

Dépôt publié sur GitHub Pages à l'adresse **https://lunixel.fr**.

```
/                         site Lunixel (fichiers statiques : index.html, style.css…) — à venir
concept/<nom>/            concepts clients, publiés sous lunixel.fr/concept/<nom>/
  hugoabecassis/          Hugo Abecassis, luthier (Astro) → lunixel.fr/concept/hugoabecassis/
.github/workflows/
  pages.yml               construit et publie le site + tous les concepts à chaque push sur main
  unpack.yml              importe une archive déposée dans _upload/ (mise à jour depuis le navigateur)
  import-photos.yml       importe les photos existantes d'un concept (lancement manuel)
```

## Site Lunixel

Déposer les fichiers du site à la **racine** du dépôt. Le workflow `pages.yml` les copie tels quels (tout sauf `concept/`, `.github/`, `_upload/`, `README.md`).
Tant qu'il n'y a pas de `index.html` à la racine, `lunixel.fr/` affiche la page 404 de GitHub.

## Concepts

Chaque dossier de `concept/` est publié sous `lunixel.fr/concept/<nom>/` :
- avec un `package.json` (Astro, Vite…) : `npm ci` puis `npm run build` avec `BASE_PATH=/concept/<nom>`, publication du dossier `dist/` ;
- sans `package.json` : copie telle quelle (HTML statique).

Les concepts sont en `noindex` (voir `SITE_INDEXABLE` dans chaque projet).

## Réglages GitHub Pages

- Settings › Pages › Source : **GitHub Actions**
- Custom domain : **lunixel.fr** (+ Enforce HTTPS)
- DNS chez OVH : `A` ×4 (185.199.108–111.153), `AAAA` ×4 (2606:50c0:8000–8003::153), `CNAME www` → `3rdmodule.github.io.`
