import { site } from '../config.js';

const { standard, surMesure } = site.revisions;

// Textes réutilisés sur plusieurs pages. Voix : « je », concret, orienté résultat.

// Sources des chiffres affichés (toujours citées sous les chiffres).
export const sources = {
  fevad: {
    label: 'Toluna Harris Interactive pour la Fevad, 2024',
    url: 'https://www.ecommercemag.fr/Thematique/retail-1220/barometre-etude-2168/Diaporamas/72-des-Fran-ais-achetent-sur-le-site-de-l-458040/fran-ais-renseignent-avant-effectuer-leurs-458041.htm',
  },
  treatwellHoraires: {
    label: 'Treatwell, estimation',
    url: 'https://www.treatwell.fr/partenaires/ressources/blog/facebook-treatwell-digitalisation-beaute/',
  },
  treatwellTarifs: {
    label: 'Treatwell, tarifs partenaires',
    url: 'https://www.treatwell.fr/partenaires/tarifs/',
  },
  prixAgence: {
    label: 'Fenxi, prix d’un site vitrine en 2026',
    url: 'https://fenxi.fr/blog/combien-coute-site-internet-2026-prix-delais/',
  },
  prixMaintenance: {
    label: 'Ipaoo, prix d’un site vitrine, mai 2026',
    url: 'https://www.ipaoo.fr/creer-un-site-vitrine/prix/',
  },
};

// Sous le titre de l'accueil : ce que le client y gagne, en un coup d'œil.
export const outcomes = [
  { value: '24 h/24', text: 'Vos clients réservent en ligne, même en dehors de vos horaires.' },
  { value: '0 %', text: 'de commission sur vos rendez-vous.' },
  { value: '5 RDV', text: 'à 40 € suffisent à rembourser un site d’une page.', href: '/tarifs/' },
];

// Le constat : des chiffres sourcés.
export const stats = [
  { value: '83 %', text: 'des Français se renseignent avant d’acheter, le plus souvent en ligne.', source: sources.fevad },
  { value: '1 sur 2', text: 'Environ une réservation sur deux se fait en dehors des heures d’ouverture.', source: sources.treatwellHoraires },
  { value: '25 %', text: 'C’est la commission d’une grande plateforme de réservation sur chaque nouveau client.', source: sources.treatwellTarifs },
];

// Ce que le client y gagne.
export const gains = [
  { title: 'Plus de rendez-vous', text: 'Un agenda Cal.com intégré à votre site : vos clients réservent en deux clics depuis leur téléphone, à toute heure.' },
  { title: 'Moins de frais', text: `L’hébergement est compris et votre nom de domaine coûte ${site.domainCost}. Pas de mensualité imposée.` },
  { title: 'Un site qui vous ressemble', text: 'Vos couleurs, vos photos, vos mots. Pas un modèle tout fait avec votre logo posé dessus.' },
  { title: 'Quelqu’un qui répond', text: `Un souci sur votre site ? Vous m’écrivez, je réponds ${site.support}.` },
];

// La démo gratuite, en trois étapes.
export const demoSteps = [
  { title: 'Présentez votre activité', text: 'Quatre questions, deux minutes. Ajoutez votre Instagram ou votre site actuel si vous en avez un.' },
  { title: 'Je prépare votre maquette', text: 'La page d’accueil de votre futur site, à vos couleurs, avec vos services.' },
  { title: 'Vous décidez', text: 'Elle vous plaît ? On continue ensemble. Sinon, vous ne me devez rien.' },
];

// Méthode complète (page Méthode).
export const etapes = [
  {
    title: 'La démo gratuite',
    text: 'Vous remplissez le formulaire, je vous envoie une maquette de votre page d’accueil. Vous ne payez rien à ce stade.',
    phase: 'Fin croissant',
  },
  {
    title: 'Un premier échange',
    text: '30 minutes au téléphone ou en visio : vos services, vos clients, ce que vous voulez changer.',
    phase: 'Premier quartier',
  },
  {
    title: 'Le devis',
    text: 'Un prix écrit, un délai et ce qui est compris. Vous validez, je commence.',
    phase: 'Lune gibbeuse',
  },
  {
    title: 'Je construis',
    text: `Vous suivez l’avancée sur un lien privé et vous me dites ce qui ne va pas. ${standard} séries de corrections sont comprises, ${surMesure} pour un projet sur mesure.`,
    phase: 'Pleine lune',
  },
  {
    title: 'En ligne',
    text: 'Je publie le site, je le déclare à Google et je vous montre comment il fonctionne.',
    phase: 'Chaque nuit',
  },
];

// Page À propos.
export const piliers = [
  {
    title: 'Sur mesure',
    text: 'Je ne pars pas d’un thème acheté. Je regarde comment vos clients vous cherchent et ce qu’ils veulent savoir, puis je construis le site autour.',
  },
  {
    title: 'Simple',
    text: 'Je vous explique mes choix avec des mots simples, et vous avez le prix par écrit avant que je commence.',
  },
  {
    title: 'Disponible',
    text: `Une fois le site en ligne, je reste joignable. Un souci ? Je réponds ${site.support}.`,
  },
];

// Page Tarifs.
export const formules = [
  {
    key: 'presence',
    name: 'Présence',
    pitch: 'Une page qui présente votre activité, vos services et comment réserver.',
    items: ['Une page à votre image', 'Réservation en ligne avec Cal.com', 'Parfaite sur téléphone', 'Visible sur Google', `En ligne en ${site.delay} environ`, `${standard} séries de corrections`],
  },
  {
    key: 'vitrine',
    name: 'Vitrine',
    featured: true,
    pitch: 'Plusieurs pages pour vos services, vos tarifs, vos photos et vos avis. Je vous aide à écrire les textes.',
    items: ['Tout ce qu’offre Présence', 'Plusieurs pages', 'Aide à l’écriture des textes', 'Référencement local', 'Statistiques de visite', `${standard} séries de corrections`],
  },
  {
    key: 'surMesure',
    name: 'Sur mesure',
    pitch: 'Boutique en ligne, espace client, outil interne, application : on en parle, je chiffre.',
    items: ['Étude de votre besoin', 'Fonctionnalités sur mesure', 'Automatisations', 'Applications web', `${surMesure} séries de corrections`],
  },
];

// Entretien mensuel, en option (page Tarifs).
export const entretien = [
  {
    key: 'entretien',
    name: 'Entretien',
    pitch: 'Pour un site toujours en ligne et à jour.',
    items: ['Vérification chaque semaine que le site est en ligne', 'Failles de sécurité surveillées et corrigées', 'Mises à jour techniques faites pour vous'],
  },
  {
    key: 'entretienPlus',
    name: 'Entretien et modifications',
    pitch: 'La même chose, plus vos petites demandes du mois.',
    items: ['Tout l’entretien', 'Vos petites modifications : horaires, prix, photos, textes'],
  },
];

// Comparatif (page Tarifs) : chiffres des autres options toujours sourcés.
export const comparatif = {
  columns: ['Agence web', 'Plateforme de réservation', 'Lunixel'],
  rows: [
    { label: 'Votre site', cells: [['2 000 à 6 000 €', 'prixAgence'], ['Une fiche sur leur site, pas le vôtre'], [`Dès ${site.prices.presence}, payé une fois`]] },
    { label: 'Chaque mois', cells: [['30 à 200 € d’entretien', 'prixMaintenance'], ['Abonnement, ou 25 % par nouveau client', 'treatwellTarifs'], [`Rien d’obligatoire, entretien en option dès ${site.prices.entretien}`]] },
    { label: 'À qui appartient-il', cells: [['À vous, selon le contrat'], ['Votre fiche reste sur leur plateforme, à côté de vos concurrents'], ['À vous, avec le nom de domaine sur votre propre compte OVH']] },
  ],
};

export const faq = [
  {
    q: 'La démo est-elle vraiment gratuite ?',
    a: 'Oui. Je vous prépare la maquette de votre page d’accueil. Si elle ne vous plaît pas, vous ne me devez rien.',
  },
  {
    q: 'Combien coûte un site ?',
    a: 'Les prix de départ sont sur la page Tarifs. Après notre premier échange, vous recevez un devis écrit, et c’est ce prix-là que vous payez.',
    href: '/tarifs/',
  },
  {
    q: 'Y a-t-il un abonnement ?',
    a: `Rien d’obligatoire. L’hébergement est compris et vous payez seulement votre nom de domaine, ${site.domainCost}. Si vous voulez que je veille sur le site chaque semaine, l’entretien est proposé en option à ${site.prices.entretien} ou ${site.prices.entretienPlus} par mois.`,
  },
  {
    q: 'À qui appartient le site ?',
    a: 'À vous. Votre nom de domaine est réservé chez OVH, sur un compte à votre nom : vous en gardez le contrôle. Si un jour vous changez de prestataire, vous repartez avec tout.',
  },
  {
    q: 'Comment fonctionne la réservation en ligne ?',
    a: 'Avec Cal.com, un agenda en ligne intégré à votre site. Vos clients choisissent un créneau libre, vous recevez la réservation et ils reçoivent une confirmation par e-mail. Pour une personne seule, c’est gratuit. Les rappels par SMS sont possibles, avec un petit coût par message.',
  },
  {
    q: 'Je suis déjà sur Planity ou Treatwell. Je peux garder ?',
    a: 'Oui. Je mets votre lien de réservation actuel sur votre site. Et si vous voulez arrêter de payer une commission, on passe à une réservation directement sur votre site via Cal.com, à votre rythme.',
  },
  {
    q: 'Et si j’ai un souci sur mon site ?',
    a: `Vous m’écrivez, je réponds ${site.support}.`,
  },
  {
    q: 'Combien de temps faut-il ?',
    a: `En général ${site.delay} entre notre premier échange et la mise en ligne, si vous avez vos textes et vos photos. Pour un projet sur mesure, on fixe la date ensemble au départ.`,
  },
  {
    q: 'Combien de corrections sont comprises ?',
    a: `${standard} séries de corrections pour un site d’une ou de plusieurs pages, ${surMesure} pour un projet sur mesure. Une série, c’est une liste de retours que vous m’envoyez en une fois.`,
  },
  {
    q: 'Faut-il que je m’y connaisse en informatique ?',
    a: 'Non. Si vous savez envoyer un e-mail, ça suffit. Je vous pose des questions sur votre métier, pas sur la technique.',
  },
  {
    q: 'Est-ce que je pourrai modifier mon site ?',
    a: `Si vous le souhaitez, je vous donne la main sur ce qui change souvent (horaires, services, prix). Sinon, vous m’envoyez un message : les petites modifications sont comprises dans l’entretien à ${site.prices.entretienPlus} par mois, ou chiffrées à l’avance.`,
  },
  {
    q: 'Vous travaillez seulement autour de Lille ?',
    a: `Non. Je suis basé à ${site.location.city}, ${site.location.near}, et je travaille avec des clients partout en France. Tout se fait très bien par téléphone et en visio.`,
  },
  {
    q: 'Pouvez-vous reprendre un site existant ?',
    a: 'Oui. Je regarde ce qui existe, ce qui fonctionne et ce qui manque, puis je vous propose soit de l’améliorer, soit de le refaire. Dans les deux cas, vos contenus et votre nom de domaine sont conservés.',
  },
];

// Formulaire : volontairement large, pour que chacun s'y retrouve.
export const activites = [
  ['beaute', 'Beauté, coiffure, esthétique'],
  ['bien-etre', 'Santé et bien-être'],
  ['commerce', 'Commerce ou boutique'],
  ['artisan', 'Artisan'],
  ['restauration', 'Restaurant ou café'],
  ['independant', 'Indépendant ou profession libérale'],
  ['autre', 'Autre activité'],
];

export const projetTypes = [
  ['creer', 'Créer mon site'],
  ['refaire', 'Refaire mon site'],
  ['reservation', 'Ajouter la réservation en ligne'],
  ['je-ne-sais-pas', 'Je ne sais pas encore, et c’est normal'],
];

export const budgets = [
  ['moins-500', 'Moins de 500 €'],
  ['500-1500', '500 à 1 500 €'],
  ['1500-3000', '1 500 à 3 000 €'],
  ['plus-3000', 'Plus de 3 000 €'],
  ['ne-sait-pas', 'Je ne sais pas'],
];
