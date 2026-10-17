# Caractère Coiffure, démo Lunixel

Site statique, une seule page, aucun build. Publié à
`lunixel.fr/concept/caracterecoiffure/` par le workflow `pages.yml` du dépôt
`3rdmodule/lunixel`. Pas de `package.json`, le dossier est copié tel quel.

## Arborescence

```
index.html              la page
assets/css/site.css     toute la mise en forme
assets/js/site.js       horaires, galerie, consentement des contenus tiers
assets/fonts/*.woff2    Bodoni Moda et Mulish, sous-ensemble latin
photos/                 les photos du salon, voir photos/LISEZ-MOI.txt
LICENCES.md             licences des polices
```

## Choix techniques

- **Aucune bibliothèque JavaScript.** Ni GSAP, ni Lenis. Le défilement reste
  celui du navigateur : c'est ce qui se comporte le mieux sur un vieux portable
  ou un téléphone, et ça supprime les deux bugs de la version précédente, le
  texte qui passait par-dessus les photos et la galerie qui se bloquait à la molette.
- **Les horaires sont calculés à l'heure de Paris**, pas à celle du visiteur.
  Un vacancier belge ou suisse voit donc le vrai état du salon. Le jour courant
  est surligné, et la mention passe de « Ouvert maintenant » à « Fermé maintenant »
  avec l'heure de réouverture. Rafraîchi toutes les minutes.
- **La galerie défile avec deux flèches**, jamais avec la molette. Le doigt et
  les flèches du clavier marchent aussi.
- **Les contenus tiers, Cal.com et Google Maps, ne se chargent qu'après un clic.**
  Aucun cookie avant. C'est pour ça qu'il n'y a pas de bandeau cookies.
- **Données structurées** `HairSalon` en fin de page : nom, adresse, téléphone,
  horaires, coordonnées GPS. Prêt pour le jour où la page sortira du `noindex`.
- Sans JavaScript, la page reste entièrement lisible. Seuls le calendrier et la
  carte demandent JavaScript, et les horaires restent affichés en statique.

## Ce qui reste à faire

- Créer les prestations sur le compte Cal.com du salon, puis remplacer l'adresse
  du calendrier en haut de `assets/js/site.js`
- Écrire les pages mentions légales, confidentialité et cookies
- Retirer `noindex` dans `index.html` le jour du vrai domaine
- Faire valider à Elda l'usage des photos

## Adresse

L'adresse du salon est **l'espace bien-être des Mas de l'Estérel, Agay, 83530
Saint-Raphaël**. L'avenue du Cap-Roux qui apparaît sur la fiche Google est
l'ancienne adresse, celle du siège de l'entreprise, pas le lieu de pratique.
Elle ne doit apparaître nulle part sur le site.
