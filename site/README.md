# lunixel.fr

Site de Lunixel, studio web pour artisans, commerçants et TPE. Construit avec [Astro](https://astro.build), publié sur GitHub Pages.

## Modifier le site

- **Réglages** (e-mail, délai de réponse, prix, mentions légales, clé du formulaire) : `src/config.js`
- **Projets** (réalisations et concepts) : `src/data/projects.js`
- **Textes réutilisés** (FAQ, étapes, formules, engagements) : `src/data/content.js`
- **Pages** : `src/pages/`
- **Styles** : `src/styles/global.css`

Chaque modification envoyée sur la branche `main` redéploie automatiquement le site (onglet Actions).

## Au déploiement

`scripts/prebuild.mjs` prend des captures réelles des projets, génère les images de partage et les icônes. Si un site est injoignable, un aperçu dessiné le remplace.

## En local

```
npm install
npx playwright install chromium
npm run build
npm run preview
```
