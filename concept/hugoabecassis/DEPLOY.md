# Déploiement : GitHub Pages et OVH

Le site est **100 % statique** (Astro). Il se déploie avec GitHub Actions sur GitHub Pages, et fonctionne sous n'importe quel chemin grâce à trois variables :

| Variable | Concept (aujourd'hui) | Domaine propre (plus tard) |
|---|---|---|
| `BASE_PATH` | `/concept/hugoabecassis` | `/` |
| `SITE_URL` | `https://lunixel.fr` | `https://hugoabecassis.fr` (exemple) |
| `SITE_INDEXABLE` | `false` (balise `noindex`) | `true` |

Dans le dépôt `lunixel`, le workflow fixe `BASE_PATH=/concept/hugoabecassis` automatiquement (nom du dossier). Avec le workflow autonome (`docs/deploy-standalone.yml`), elles se règlent dans **Settings › Secrets and variables › Actions › Variables**.

---

## 1. Où est publié le concept

Le concept vit dans le dépôt **`3rdmodule/lunixel`**, qui porte le domaine `lunixel.fr`, dans le dossier `concept/hugoabecassis/`.
Le workflow `.github/workflows/pages.yml` (à la racine du dépôt) le construit avec `BASE_PATH=/concept/hugoabecassis` et le publie avec le reste du site Lunixel, à chaque push sur `main`.

Pourquoi ce montage : GitHub Pages associe un domaine à **un seul dépôt**, et le site principal du compte `3rdmodule` porte déjà `3rdmodule.com`. Pour servir `lunixel.fr/concept/hugoabecassis`, les fichiers doivent donc être publiés par le dépôt qui porte `lunixel.fr`, comme le dossier `concept/` de 3rdmodule.com.

Réglages (une seule fois) :
1. Dépôt `lunixel` › Settings › Pages › Source : **GitHub Actions** ; Custom domain : **lunixel.fr** ; **Enforce HTTPS** dès que le certificat est prêt.
2. (Recommandé) Compte GitHub › Settings › Pages › *Add a domain* : `lunixel.fr`, avec l'entrée `TXT` `_github-pages-challenge-3rdmodule` indiquée par GitHub.

## 2. DNS chez OVH (zone `lunixel.fr`)

Manager OVH › Web Cloud › Noms de domaine › `lunixel.fr` › **Zone DNS**.

| Action | Type | Sous-domaine | Cible |
|---|---|---|---|
| Supprimer | `A` | *(racine)* | `51.91.236.255` (page par défaut OVH) |
| Supprimer | `AAAA` | *(racine)* | `2001:41d0:301::29` |
| Supprimer | `A`, `AAAA`, `TXT "3\|welcome"` | `www` | idem |
| Ajouter | `A` | *(racine)* | `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` |
| Ajouter | `AAAA` | *(racine)* | `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153` |
| Ajouter | `CNAME` | `www` | `3rdmodule.github.io.` |
| Ajouter | `TXT` | `_github-pages-challenge-3rdmodule` | code fourni par GitHub |

Ne pas toucher aux entrées e-mail (`MX`, `SPF`, `DKIM`, `SRV`, `mail`, `smtp`, `imap`, `pop3`, `autoconfig`, `autodiscover`), ni aux `NS`. Propagation : de quelques minutes à quelques heures.

## 3. Mettre à jour le code sans accès git

Le dépôt accepte des archives déposées dans `_upload/` depuis l'interface web (*Add file › Upload files*) :
`_upload/concept__hugoabecassis.tar.gz` est extraite dans `concept/hugoabecassis/` par le workflow `unpack.yml`, qui relance ensuite la publication. Avec git, il suffit de pousser normalement sur `main`.

## 4. Passage au domaine propre d'Hugo (2027)

1. Réserver le domaine (ex. `hugoabecassis.fr`, disponibilité à vérifier) chez OVH.
2. Sortir `concept/hugoabecassis/` dans un dépôt dédié (compte d'Hugo ou de Lunixel) et y ajouter le workflow autonome fourni : `docs/deploy-standalone.yml` → `.github/workflows/deploy.yml`.
3. Zone DNS OVH du nouveau domaine :

| Type | Sous-domaine | Cible |
|---|---|---|
| `A` | *(vide)* | `185.199.108.153` |
| `A` | *(vide)* | `185.199.109.153` |
| `A` | *(vide)* | `185.199.110.153` |
| `A` | *(vide)* | `185.199.111.153` |
| `AAAA` | *(vide)* | `2606:50c0:8000::153` |
| `AAAA` | *(vide)* | `2606:50c0:8001::153` |
| `AAAA` | *(vide)* | `2606:50c0:8002::153` |
| `AAAA` | *(vide)* | `2606:50c0:8003::153` |
| `CNAME` | `www` | `<compte>.github.io.` |

   Supprimer au préalable les entrées `A`/`AAAA` par défaut d'OVH sur la racine et sur `www`. Ne pas toucher aux `MX`.
4. GitHub › Settings › Pages › Custom domain : `hugoabecassis.fr`, puis **Enforce HTTPS**.
5. Variables : `BASE_PATH=/`, `SITE_URL=https://hugoabecassis.fr`, `SITE_INDEXABLE=true`.
6. Dans `src/config/site.ts` : `conceptMode: false` (masque les marqueurs `[À CONFIRMER]` et les cadres photo), coordonnées réelles, `booking.mode = "cal"` si Cal.com est retenu.
7. Déclarer le site dans Google Search Console et soumettre `sitemap-index.xml`.

Aucun lien interne n'est écrit en dur : le changement de chemin de base suffit.

---

## 5. Vérifier en local sous le sous-dossier

```bash
BASE_PATH=/concept/hugoabecassis npm run build
BASE_PATH=/concept/hugoabecassis npm run check:links
# Servir comme en production :
mkdir -p /tmp/serve/concept && rm -rf /tmp/serve/concept/hugoabecassis && cp -r dist /tmp/serve/concept/hugoabecassis
npx serve /tmp/serve   # puis http://localhost:3000/concept/hugoabecassis/
```
