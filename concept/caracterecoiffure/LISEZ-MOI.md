# Caractère Coiffure, démo Lunixel

Site statique, une seule page. Aucun build, aucune dépendance à installer :
on dépose le dossier tel quel sur GitHub Pages.

## Mise en ligne sur GitHub Pages

1. Pousser le contenu de ce dossier dans le dépôt, à la racine ou dans `/concept/caracterecoiffure/`.
2. Settings, puis Pages : source `Deploy from a branch`, branche `main`, dossier `/ (root)`.
3. Le fichier `.nojekyll` est déjà là, il empêche Jekyll d'ignorer les dossiers et de casser les chemins.
4. Vérifier que `Enforce HTTPS` est coché.

Tous les chemins sont relatifs, le site marche donc aussi bien à la racine
du domaine que dans un sous-dossier.

## Arborescence

```
index.html              la page
404.html                page d'erreur, même habillage
robots.txt              interdit l'indexation tant que c'est une démo
.nojekyll               désactive Jekyll
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
