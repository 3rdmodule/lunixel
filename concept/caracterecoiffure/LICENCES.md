# Licences des ressources embarquées

Tout est servi depuis le dépôt. Aucune requête vers un CDN, aucune police chargée
depuis Google Fonts : la CNIL considère le chargement direct comme un transfert de données.

| Ressource | Version | Licence | Source |
|---|---|---|---|
| Fraunces | Fontsource | SIL Open Font License 1.1 | npm `@fontsource/fraunces` |
| Work Sans | Fontsource | SIL Open Font License 1.1 | npm `@fontsource/work-sans` |
| Great Vibes | Fontsource | SIL Open Font License 1.1 | npm `@fontsource/great-vibes` |

Aucune bibliothèque JavaScript tierce. Les 150 lignes de `assets/js/site.js` sont
écrites pour ce site : horaires en direct, galerie à flèches, consentement des
contenus tiers.

## Vidéo

`video/salon-visite.mp4` : montage de 22 secondes, 1100x618, sans bande son,
1,7 Mo. Monté par Lunixel à partir de huit des neuf rushes tournés par Elda
dans son salon et transmis par Awen le 05/11/2026. Elda détient les droits des
images sources, décoration du salon comprise.
Lecture automatique en boucle, sans son et sans commandes ; la lecture se met en
pause dès que la vidéo sort de l'écran, et elle est remplacée par une image fixe
si le visiteur a demandé moins d'animations dans son système.
L'image d'attente `photos/video-poster.webp` est extraite de ce même montage.
Un seul rush a été écarté, où le fauteuil tourne trop longtemps.

## Photos

Deux origines : les photographies d'Elda, et des visuels de présentation
qu'elle a fournis. Chaque galerie dit laquelle des deux elle montre.

**Intérieur du salon** (`hero-wide`, `salon-coin`, `salon-01` à `salon-08`,
`salon-postes`, `elda-portrait`, `miroirs-dores`, `salle-miroir`,
`salle-tapis`, `coin-attente`, `entree-tapis`, `og`) : dossier Drive fourni
par la cliente le 25/08/2026 et captures qu'elle a envoyées le 05/11/2026.
Elles lui appartiennent. Licence d'usage [À COMPLÉTER] dans les mentions
légales. Le hero est la photo qu'Awen a transmise le 01/11/2026 ; elle est
recadrée de 9 % en haut et 8 % en bas pour sortir le plafond et une partie
du sol du champ.

**Terrasse et vue sur la baie** (`vue-baie`, `vue-piscine`, `vue-terrasse`,
`piscine-large`) : photos d'Elda, envoyées le 05/11/2026. C'est la
particularité du salon qu'elle tient à montrer.

**Travail d'Elda** (`resultat-01`, `travail-blond-degrade`) : la première
vient de la page Facebook publique du salon, reprise le 01/11/2026 depuis
l'original en 720x960 ; la seconde a été envoyée directement le 05/11/2026.
Les photos sont d'Elda. Awen a confirmé le 01/11/2026 que les clientes
photographiées ont donné leur accord et qu'Elda détient les autorisations.
Les deux sont prises de dos, aucun visage n'est reconnaissable.
Cinq autres photos de son travail (`resultat-02` à `resultat-04`,
`travail-homme-nuque`, `travail-homme-degrade`) ont été retirées du site le
05/11/2026 à la demande d'Awen : les deux photos d'homme montraient la même
coupe sous deux angles, et le lissage était en noir et blanc.

**Visuels de présentation** (`e-*`, `w-*`) : images fournies par Elda via
ChatGPT les 04 et 05/11/2026, qu'elle a demandé à utiliser. Awen a tranché
le 05/11/2026 : la démo n'est pas indexée, c'est sa décision. Ces images
servent uniquement à illustrer le type de prestation et seront remplacées
par les photos d'Elda au fur et à mesure. Les emplacements sans image
affichent un cadre « Pas encore d'image » plutôt qu'un visuel d'emprunt :
chignon, coupe homme, coupe enfant, coupe ado et le lissage sont dans ce cas.

**Étalonnage** : toutes les photos sont ramenées aux couleurs réelles du
salon, mesurées sur les fichiers d'origine du Drive : saturation 0,19,
écart rouge-bleu 17, luminosité 148. Les vues extérieures gardent leur
saturation d'origine pour que le ciel et la piscine restent justes. Aucun
écrêtage sur aucune image.

**Visuels de présentation** (`e-*`, `w-*`) : images fournies par Elda le
05/11/2026 depuis une conversation ChatGPT. Les fichiers `e-*` sont des
images générées dans cette conversation ; les fichiers `w-*` proviennent de
la recherche d'images et leur auteur n'est pas identifié. Elles servent
uniquement de visuel de présentation : la note sous chaque galerie indique
lesquelles sont des photos d'Elda et lesquelles n'en sont pas. Elles sautent
dès qu'elle fournit ses propres photos. Mise en ligne décidée par Awen le
05/11/2026 pour la démo non indexée. [À COMPLÉTER] avant toute mise en ligne
d'un vrai site indexable.

**Coupe enfant et coupe ado** restent sans image. Les visuels disponibles
montraient des mineurs dont l'origine n'a pas pu être établie. Ces deux
galeries affichent le cadre d'attente tant qu'Elda n'a pas fourni ses
propres photos ou des images qu'elle a elle-même générées.

**Deux grands portraits encadrés** sont visibles au mur sur plusieurs
photos : ce sont des images générées dont Elda détient les droits, confirmé
par Awen le 01/11/2026. Un troisième cadre montre une photographie
d'Audrey Hepburn ; elle apparaît de biais, comme élément de décor parmi
d'autres, jamais en sujet principal.

**Logo** (`logo-encre.png`) : créé par Elda. Le fichier qu'elle a fourni
(`logo-noir.png`) avait un fond noir incrusté dans l'image. La version servie
ici en est dérivée : la luminance du dessin sert de couche alpha, et le tracé
est reteinté en #3A332C, l'encre du site. Le dessin n'est pas modifié, seules
les couleurs le sont. Fichier d'origine vectoriel toujours à récupérer auprès
d'elle pour la version définitive. [À COMPLÉTER]

Quatre photos du Drive ont été écartées : elles montrent de grands portraits
de célébrités encadrés au mur du salon, dont les droits ne sont pas acquis.
