# Passation : site de Hugo Abecassis, luthier (concept Lunixel)

État au 27 septembre 2026. Ce document se suffit à lui-même : il remplace l'historique des conversations précédentes.

---

## 1. Objectif du projet

Lunixel (agence web française, https://lunixel.fr/) conçoit le site vitrine de **Hugo Abecassis, luthier**. Il sera présenté à Hugo comme un concept professionnel.

- Aujourd'hui, Hugo est salarié d'un magasin de musique à Saint-Lô. Il prévoit de s'installer comme luthier indépendant en 2027.
- Le site prépare sa présence en ligne pour ce passage. Il doit :
  - présenter Hugo, son parcours, son savoir-faire (entretien, restauration, fabrication) et ses réalisations ;
  - montrer la presse et les partenaires ;
  - permettre de prendre contact et de réserver un rendez-vous.
- Impression recherchée : « on entre dans l'univers d'un artisan qui maîtrise son métier », et non « un artisan qui cherche à vendre ses services ».
- Le prototype est publié ici : **https://lunixel.fr/concept/hugoabecassis/**. Il doit pouvoir migrer facilement vers le futur domaine d'Hugo.

## 2. Contexte indispensable

**Client**
- Fiche biographique : https://www.wikimanche.fr/Hugo_Abecassis
- Magasin employeur actuel : http://pianoslechevallier.com/
- Les créations de lutherie visibles sur le site du magasin appartiennent à Hugo.
- Le site ne doit jamais passer pour celui du magasin, ni créer de confusion avec son employeur.

**Faits vérifiés et sourcés** (détail complet dans `docs/CONCEPT.md`, section 0)
- Formation en Belgique auprès du luthier Gauthier Louppe.
- Premier atelier à Avranches (2014), puis à Saint-Lô à partir du 1er juin 2015.
- Instruments créés :
  - Ramino (quinton, 2015) ;
  - Lyra (2015) ;
  - Physalis (violon d'amour, 2016) ;
  - LA Jazz ;
  - Pinarbox (guitares faites dans d'anciennes caisses de vin) ;
  - Nova, Petite Faive, Harpe-ukulélé, VG Tal.
- Presse : Ouest-France (2 juillet 2015 et 15 janvier 2022), La Manche Libre et La Gazette (2014), Wikimanche.
- Citation d'Hugo (ancien site de l'atelier) : « Pour faire évoluer la lutherie correctement, il ne faut surtout pas oublier les bases de la lutherie traditionnelle. »

**Technique**
- Stack : Astro 7, site 100 % statique.
- Dépôt GitHub : `3rdmodule/lunixel` (public, compte GitHub `3rdmodule`).
  - `site/` : le site Lunixel, publié à la racine de lunixel.fr.
  - `concept/hugoabecassis/` : le concept.
- Workflows :
  - `pages.yml` construit le site et tous les concepts, vérifie les liens, puis publie.
  - `unpack.yml` extrait une archive déposée dans `_upload/`, puis relance la publication.
  - `import-photos.yml` se lance à la main et télécharge les photos listées dans les manifestes.
- GitHub Pages : source « GitHub Actions », domaine `lunixel.fr`, HTTPS forcé.
- DNS OVH (zone lunixel.fr) :
  - A ×4 : 185.199.108–111.153 ;
  - AAAA ×4 : 2606:50c0:8000–8003::153 ;
  - CNAME `www` → `3rdmodule.github.io.` ;
  - TXT `_github-pages-challenge-3rdmodule` ;
  - e-mails OVH (MX, SPF, DKIM, SRV) inchangés.
- Ne jamais créer de dépôt nommé `concept` sur le compte `3rdmodule` : il prendrait l'adresse `3rdmodule.com/concept/`.
- Chemin de base configurable par `BASE_PATH` : `/concept/hugoabecassis` aujourd'hui, `/` sur le futur domaine. Aucun lien n'est écrit en dur.

## 3. Décisions prises et raisons

| Décision | Raison / origine |
|---|---|
| Refonte complète en v2 (24/09), puis v3 (24/09) | L'utilisateur a jugé la v1 « une cata » : photos, mise en page, textes, trop de [À CONFIRMER] visibles. |
| Direction « l'étiquette de luthier » : le nom, le type d'instrument et l'année dans un cadre à double filet, comme l'étiquette collée dans un instrument | Choisie par l'utilisateur (option recommandée). Elle « crie luthier » sans tomber dans le cliché du bois. |
| H1 de l'accueil : « Hugo Abecassis, luthier » | Validé par l'utilisateur. |
| Polices :<br>• Bricolage Grotesque (titres)<br>• IBM Plex Sans (texte)<br>• Libre Caslon Text (étiquettes, légendes, dates) | L'utilisateur n'aimait pas les premières polices.<br>Inter a été retirée en v2 : police jugée « vibecodée ».<br>Toutes les trois sont hébergées sur le site, sous licence OFL. |
| Palette v3 : fonds lin `#EBE3D3` / sable `#DDD2BD` en alternance, galerie des instruments sur ébène `#26221E`, bandeau final garance profonde `#7A2C1D`, accent garance `#9A3B26` | L'utilisateur trouvait le site « trop tout blanc ». Parmi 4 options, il a choisi « Galerie sombre (instruments) ». Il avait rejeté auparavant « le gros bloc noir ». |
| Ton au nominal : « Réglage, réparation et fabrication… » et non « Il règle, répare… » | Demande explicite de l'utilisateur. |
| Uniquement de vraies photos, aucune photo de banque d'images | Les photos Unsplash de la v1 étaient hors sujet (l'une montrait des formes à chaussures). |
| Photo principale de l'accueil : Ouest-France 2026 (https://www.maville.com/photosmvi/2026/08/21/P36087647D7447446G.jpg) | Fournie par l'utilisateur. |
| Photos d'atelier d'Aurélie Augé (https://hanamatsuri.fr/en/hugo-abecassis-luthier) | Fournies par l'utilisateur, qui a demandé de **ne pas utiliser la première** (Hugo debout, « comme un plot »). |
| Photos d'Hugo issues du site du magasin : le fond bleu (drapé, mur) est neutralisé automatiquement | Ce bleu cassait la palette. |
| Toutes les photos, reportages compris, reçoivent le même étalonnage léger : balance plus chaude, bleus adoucis en ardoise, noirs vers l'ébène, blancs vers l'ivoire | Demande de l'utilisateur : « retoucher la colo pour que tout fonctionne en harmonie ». Les originaux restent intacts. |
| Rendez-vous avec Cal.com, en fenêtre au clic (embed officiel, script chargé seulement au clic, donc aucun cookie avant). 3 types : `diagnostic` (30 min), `reglage` (45 min), `depot` (15 min) | Demande de l'utilisateur (intégration Cal.com que Hugo créera).<br>Tant que le compte n'existe pas, une fenêtre « concept » présente les 3 types et renvoie au formulaire. |
| Gros bouton garance « Prendre rendez-vous à l'atelier » dans l'en-tête de l'accueil et dans le bandeau final | Demande explicite de l'utilisateur. |
| Accueil court, en 5 blocs : en-tête, Savoir-faire, Instruments, Parcours + presse, Rendez-vous | Brief : l'accueil ne doit pas être une longue landing page. |
| Concept en `noindex` (`SITE_INDEXABLE=false`) et `conceptMode: true` : bandeau « concept » et mentions [À CONFIRMER] en italique rouge | Éviter qu'il soit indexé comme site officiel et le contenu dupliqué à la migration. |
| Le 404 racine de lunixel.fr (`site/src/pages/404.astro`) affiche le 404 propre au concept sous `/concept/<nom>/` | GitHub Pages ne sert que le 404 racine. |
| Formulaire de contact sans case à cocher, avec un champ anti-spam invisible (`_gotcha`) et le téléphone facultatif | Checklist Lunixel : ne collecter que le nécessaire. |

## 4. Règles, contraintes et préférences

**Contenu**
- **Ne jamais inventer d'information sur Hugo.** Toute information manquante est marquée `[À CONFIRMER]`.
- Toute affirmation doit être vérifiable, avec un lien vers la source originale.
- Ne pas présenter l'activité indépendante comme déjà existante. La mention publique de 2027 est à valider par Hugo : le prototype est public et son employeur peut le lire.
- Lunixel reste discret : une seule mention, « Site conçu par Lunixel », dans le pied de page. Pas de landing page Lunixel.
- Ton : simple, direct, au nominal, sans superlatif, pas trop « léché » ni « aristo ».

**À éviter** (brief) : textures et marron bois, instruments détourés, animations gadgets, gros blocs de texte, esthétique « template WordPress », marqueurs de site généré par IA.

**Checklist** : appliquer la checklist Lunixel à chaque livraison. C'est le skill `lunixel-site-rules`, à recréer dans le nouveau compte (voir section 6) : légal, sécurité, technique, design anti-vibecodé, options, puis rapport ✅ / ➖ / ⚠️ et liste des [À COMPLÉTER].

**Sécurité et opérations** (consignes de l'utilisateur)
- Ne modifier aucun DNS critique sans confirmation explicite.
- N'effectuer aucune modification DNS OVH irréversible sans validation.
- Si une action OVH doit être faite à la main, expliquer précisément quoi faire.

**Préférences de l'utilisateur**
- Communication brève et directe.
- Navigateur intégré de l'app par défaut.
- Ne jamais piloter le Chrome d'un autre ordinateur.
- Ne jamais cocher de case newsletter ou publicité.

## 5. État actuel des travaux

**En ligne (v3)** : https://lunixel.fr/concept/hugoabecassis/, dernier commit `3f478bc` (24/09/2026).
- 6 pages principales : Accueil, Atelier, Savoir-faire (ancres `#entretien`, `#restauration`, `#fabrication`, `#instruments`), Parcours, Partenaires, Contact.
- Pages complémentaires : Mentions légales, Confidentialité et cookies, Conditions d'utilisation, 404.
- Les anciennes URL `/savoir-faire/entretien/` (et `/restauration/`, `/fabrication/`) redirigent vers les ancres.

**Audit n° 2 (lunixel-site-rules)**

| Point | Statut |
|---|---|
| Confidentialité, CGU, cookies | ✅ Aucun cookie posé par le site. |
| Durée de conservation | ✅ 3 ans. |
| Mentions légales | ⚠️ Éditeur, SIRET et adresse manquants. |
| Secrets | ✅ Aucun secret dans le dépôt. |
| HTTPS | ✅ Forcé. HSTS impossible sur GitHub Pages. |
| Anti-spam | ✅ Champ invisible (honeypot). |
| Validation côté serveur, limitation du débit | ⚠️ Dépendent du service de formulaire, non choisi. |
| Favicon, sitemap, robots.txt, 404, liens | ✅ 795 liens internes vérifiés. |
| Lighthouse | ✅ Performance 89–95, accessibilité 100, bonnes pratiques 100. SEO 66 à cause du `noindex`, c'est voulu. |
| Contrastes | ✅ AA partout, sections sombres et rouges comprises. |
| Loader | ✅ Filet garance en haut de page. |
| Anti-vibecodé | ✅ |
| Open Graph | ✅ |

**Livrables produits**
- Le site en ligne.
- `docs/CONCEPT.md` : concept complet (recherche, direction artistique, architecture, wireframes, rédaction, composants, Cal.com, SEO, technique).
- `docs/CALCOM.md` : marche à suivre pour Hugo.
- `docs/PHOTOS.md` : inventaire des photos.
- PDF `hugo-abecassis-couleurs-polices.pdf` (palette et polices, 2 pages A4).

## 6. Fichiers, sources et éléments à réimporter

**Dans le nouveau projet Claude**
1. Ce document.
2. `Context écrit` : le brief original complet (doc du projet actuel).
3. `claude/concept-site-hugo-abecassis.md` : copie de `docs/CONCEPT.md` à jour (v3).
4. `claude/deploiement-lunixel.md` : notes de déploiement du 23/09. Le passage sur les « cadres de prise de vue » est dépassé : l'en-tête et l'atelier ont maintenant de vraies photos.
5. `hugo-abecassis-couleurs-polices.pdf`.
6. Les instructions du projet actuel : rôle de directeur artistique et développeur senior, méthode en 7 étapes.

**Skills à recréer dans le nouveau compte**
- `lunixel-site-rules` : il est lié au compte actuel.
- `passation-md` (optionnel).

**Dépôt GitHub `3rdmodule/lunixel`** : c'est la source de vérité, rien à réimporter. Fichiers clés dans `concept/hugoabecassis/` :
- `src/config/site.ts` : coordonnées (vides), `booking.username` (vide), `form.endpoint` (vide), `conceptMode`.
- `src/data/*.ts` : tous les textes (services, parcours, créations, presse, partenaires, photos).
- `src/styles/global.css` : tokens de couleur et classes `tone-sable`, `tone-ebene`, `tone-garance`.
- `src/components/Etiquette.astro`, `BookingLink.astro` (props `event`, `variant`, `label`, `size="lg"`), `Photo.astro`.
- `src/scripts/site.ts` : menu, loader, galerie, chargement de Cal.com au clic, formulaire.
- `scripts/retouche-fonds.mjs` : neutralisation du bleu et étalonnage, lancé avant le build. Constante `VERSION` à changer pour tout régénérer.
- `scripts/og.mjs` : image Open Graph.
- `scripts/check-links.mjs`.
- `photos-sources/` : photos originales (sous-dossiers `atelier`, `physalis`, `la-jazz`, `pinarbox-*`, `reportage`), plus les manifestes `reportage.json` et `sources.json`.
- `docs/CONCEPT.md`, `docs/CALCOM.md`, `docs/PHOTOS.md`, `DEPLOY.md`.

**Sources externes**
- Wikimanche.
- Blog de l'atelier : http://lalutherieabecassis.blogspot.com/
- Ancien site : https://atelierabecassis.wixsite.com/luthierquatuor
- Articles Ouest-France (liens dans `src/data/press.ts`).
- L'Avenir 2024 sur Gauthier Louppe (lien dans `src/data/partners.ts`).
- Les deux sources photo citées en section 3.

**Pièges déjà rencontrés (ne pas refaire)**
- L'environnement cloud de Claude ne peut pas joindre lunixel.fr, hanamatsuri.fr ni maville.com (proxy).
  - Pour vérifier le site en ligne, passer par le navigateur intégré.
  - Pour les photos, passer par le workflow `import-photos.yml`.
- Pas de push git depuis l'environnement cloud. La lecture (`git fetch`) fonctionne. Pour publier :
  1. Construire une archive `concept__hugoabecassis.tar.gz`, ou `site.tar.gz` pour le site Lunixel.
  2. La déposer dans `_upload/` via l'interface d'envoi de fichiers de GitHub, avec le compte **3rdmodule** (l'envoi est désactivé sur le compte `nubegamesfr`). `unpack.yml` fait le reste.
  3. Pour supprimer des fichiers, joindre un fichier `.deletions`.
  4. Le message de commit ne se saisit pas au clavier : il faut le définir en JavaScript.
- Une publication peut partir sur le commit précédent. Si le site ne change pas après environ 8 minutes, relancer « Publication lunixel.fr » à la main (Actions › Run workflow).
- `opentype.js` produisait des tracés NaN pour Bricolage : `og.mjs` utilise donc `fontkit`.
- Un masque flouté par `sharp` revient avec 3 canaux : lire les pixels avec le pas `info.channels`.

## 7. Prochaines étapes prioritaires

1. **Présenter le concept à Hugo** et faire valider la direction (étiquette, palette, polices) et la mention publique de 2027.
2. **Envoyer `docs/CALCOM.md` à Hugo.**
   - Il crée le compte (nom conseillé : `hugo-abecassis`) et les 3 types de rendez-vous (`diagnostic`, `reglage`, `depot`), avec l'option « Nécessite une confirmation » et la couleur `#9a3b26`.
   - Ensuite, renseigner `booking.username` dans `src/config/site.ts`.
3. **Récupérer les informations manquantes** (section 8) et les saisir dans `site.ts` et `src/data/`.
4. **Choisir un service d'envoi du formulaire** (Formspree, Web3Forms…), puis renseigner `form.endpoint`. Vérifier sa validation côté serveur et sa limitation du débit.
5. **Obtenir les autorisations photo écrites**, retouche comprise : Aurélie Augé, Ouest-France, et les photos du magasin. Planifier ensuite un vrai reportage photo.
6. **Passage à l'indépendance (2027)**, à faire au moment voulu :
   - choisir le domaine définitif (ex. `hugoabecassis.fr`, disponibilité non vérifiée) ;
   - `BASE_PATH=/` et `SITE_INDEXABLE=true` ;
   - `conceptMode: false` ;
   - activer le JSON-LD `LocalBusiness` (adresse et horaires réels requis) ;
   - un workflow de déploiement autonome est prévu : `docs/deploy-standalone.yml`, `DEPLOY.md`.
7. **Relancer l'audit `lunixel-site-rules`** avant toute mise en ligne officielle.

## 8. Questions encore ouvertes

**Mentions légales**
- Éditeur, directeur de publication, statut juridique et SIRET (en 2027).

**Coordonnées professionnelles d'Hugo** (pas celles du magasin)
- Adresse de l'atelier, e-mail, téléphone, horaires et jours d'accueil, réseaux sociaux.

**Futur atelier**
- Lieu, nom et date d'ouverture.
- Formulation publique de 2027.

**Parcours et presse**
- Années et durée de la formation en Belgique, diplôme éventuel.
- Titres exacts et liens des articles de 2014 (La Manche Libre, La Gazette).
- Lien de l'article Ouest-France d'août 2026, d'où vient la photo d'en-tête : introuvable en ligne pour l'instant.

**Partenaires**
- Musiciens, groupes et professionnels à citer, avec leur accord écrit, leurs photos et crédits.

**Prestations**
- Délais, fourchettes de prix, conditions de devis.
- Listes « entretien » et « restauration » à valider par Hugo.

**Photos et services tiers**
- Droits d'usage de toutes les photos, retouche comprise.
- Garanties de Cal.com pour le transfert des données hors de l'Union européenne.

**Domaine**
- Nom de domaine définitif.
