# Caractère Coiffure, démo Lunixel

Site statique, une seule page. Aucun build, aucune dépendance à installer :
on dépose le dossier tel quel sur GitHub Pages.

## Mise en ligne sur GitHub Pages

Le site est servi à `lunixel.fr/concept/caracterecoiffure/`.

1. Copier `.nojekyll` à la racine du dépôt et le dossier `concept/` à la racine aussi.
2. Settings, puis Pages : source `Deploy from a branch`, branche `main`, dossier `/ (root)`.
3. Vérifier que `Enforce HTTPS` est coché.

`.nojekyll` est obligatoire à la racine : sans lui, Jekyll ignore les dossiers
et les fichiers de `assets/` ne sont pas servis.

Pas de robots.txt dans ce sous-dossier : un robots.txt n'est lu qu'à la racine
d'un domaine. Ce qui protège la démo de l'indexation, c'est la balise `noindex`
dans `index.html`. Pour doubler, ajouter `Disallow: /concept/` au robots.txt
à la racine de lunixel.fr.

`404.html` ne sera pas servi depuis un sous-dossier, GitHub Pages ne gère la
page 404 personnalisée qu'à la racine du dépôt. Le fichier est gardé pour la
bascule sur le vrai domaine d'Elda.

Tous les chemins sont relatifs, il n'y a rien à modifier dans `index.html`.

## Arborescence

```
index.html              la page
404.html                page d'erreur, même habillage, à copier à la racine
                        du dépôt si on veut qu'elle serve
assets/css/site.css     toute la mise en forme
assets/js/site.js       les animations et le consentement des contenus tiers
assets/js/*.min.js      GSAP, ScrollTrigger, SplitText, Lenis, servis depuis le dépôt
assets/fonts/*.woff2    Bodoni Moda et Mulish, sous-ensemble latin
photos/                 les photos du salon, voir photos/LISEZ-MOI.txt
LICENCES.md             licences des bibliothèques et des polices
```

## Ce qui reste à faire avant une vraie mise en ligne

- Créer les prestations du salon sur le compte Cal.com utilisé dans `assets/js/site.js`
- Écrire les pages mentions légales, confidentialité et cookies, et les lier depuis le pied de page
- Retirer `noindex` dans `index.html` et `Disallow` dans `robots.txt` le jour du vrai domaine
- Ajouter `sitemap.xml`
- Faire valider à Elda l'usage des photos, et le cadrage de salon-01

## Choix techniques

- Les contenus tiers, Cal.com et Google Maps, ne se chargent qu'après un clic
  explicite. Aucun cookie n'est déposé avant. C'est pour ça qu'il n'y a pas de
  bandeau cookies : refuser revient à ne rien cliquer.
- Les polices et les bibliothèques sont servies depuis le dépôt, jamais depuis un CDN.
- `prefers-reduced-motion` coupe le rideau d'ouverture, le défilement fluide,
  le panoramique horizontal et toutes les révélations.
- Sans JavaScript, la page reste entièrement lisible : le rideau est masqué,
  les contenus sont visibles, seuls les contenus tiers demandent JavaScript.
- Le défilement fluide Lenis est désactivé sous 820 px de large, pour laisser
  le défilement natif aux téléphones.
