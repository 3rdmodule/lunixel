# Caractère Coiffure, démo Lunixel

Site statique, une seule page, aucun build. Publié à
`lunixel.fr/concept/caracterecoiffure/` par le workflow `pages.yml` du dépôt
`3rdmodule/lunixel`. Pas de `package.json`, le dossier est copié tel quel.

## Arborescence

```
index.html              la page
assets/css/site.css     toute la mise en forme
assets/js/site.js       horaires, galerie, consentement des contenus tiers
assets/fonts/*.woff2    Fraunces et Work Sans, sous-ensemble latin
photos/                 photos du salon et résultats, voir photos/LISEZ-MOI.txt
LICENCES.md             licences des polices
```

## Direction artistique

Direction **Atelier**, validée le 17/10/2026 parmi trois propositions.
Fraunces pour les titres, Work Sans pour le texte, les deux auto-hébergées en
woff2 (75 Ko au total, aucun appel à Google Fonts). Palette sable chaud, brun
café et terre cuite, tirée des murs crème et des fauteuils du salon. Les angles
sont arrondis : c'est un salon de quartier, pas une galerie.

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
- **Le haut de page est une photo 16:9 en fond**, floutée à gauche par
  `backdrop-filter` pour porter le texte, nette à droite. Un repli en aplat
  opaque est prévu pour les navigateurs sans `backdrop-filter`. Les contrastes
  ont été mesurés au pixel sur le rendu réel, pas sur les valeurs CSS, et
  passent AA de 320 à 1920 px.
- **Le rendez-vous passe par notre propre grille de prestations**, trois par
  ligne. Cal.com affiche ses quatorze prestations une par ligne, ce qui occupe
  un écran entier. Le calendrier ne se charge qu'après le clic, et directement
  sur la prestation choisie. Les cartes ne portent pas de prix : la section
  Tarifs reste la seule source, sinon un « à partir de » finit par contredire
  la liste.
- **Les contenus tiers, Cal.com et Google Maps, ne se chargent qu'après un clic.**
  Aucun cookie avant. C'est pour ça qu'il n'y a pas de bandeau cookies.
- **Données structurées** `HairSalon` en fin de page : nom, adresse, téléphone,
  horaires, coordonnées GPS. Prêt pour le jour où la page sortira du `noindex`.
- Sans JavaScript, la page reste entièrement lisible. Seuls le calendrier et la
  carte demandent JavaScript, et les horaires restent affichés en statique.

## Cal.com

Les 14 prestations existent sur `cal.com/lead-major-sucah7`, classées par demande
attendue, toutes en **rendez-vous sur place** à l'adresse du salon. Plus aucune
visioconférence. Les trois événements par défaut de Cal.com sont masqués, pas
supprimés : ils restent récupérables si besoin.

## Avant / après

Le comparateur est **codé et testé**, mais le bloc HTML est commenté dans
`index.html`, juste après la section `#couleurs`. Raison : il n'existe aucune
vraie paire avant/après, ni dans le Drive, ni sur le Facebook du salon.

Pour l'activer, il faut deux photos prises le même jour :

1. avant le shampoing, une photo de dos, la cliente assise au fauteuil ;
2. après le brushing, **même place, même lumière, même cadrage, même distance**.

Les enregistrer en `photos/avant-01.webp` et `photos/apres-01.webp`, au format
4:5 (760 x 950), puis retirer les deux lignes de commentaire qui encadrent le
bloc. Le CSS et le JavaScript sont déjà en place, rien d'autre à toucher.

## Ce qui reste à faire

- Écrire les pages mentions légales, confidentialité et cookies
- Retirer `noindex` dans `index.html` le jour du vrai domaine
- Faire valider à Elda l'usage des photos, celles du salon comme celles de Facebook
- Récupérer une vraie paire avant/après

## Adresse

L'adresse du salon est **l'espace bien-être des Mas de l'Estérel, Agay, 83530
Saint-Raphaël**. L'avenue du Cap-Roux qui apparaît sur la fiche Google est
l'ancienne adresse, celle du siège de l'entreprise, pas le lieu de pratique.
Elle ne doit apparaître nulle part sur le site.
