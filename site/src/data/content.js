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

// Sous le titre de l'accueil : ce que la cliente y gagne, en un coup d'œil.
export const outcomes = [
  { value: '24 h/24', text: 'Vos clientes réservent en ligne, même quand vous êtes fermée.' },
  { value: '0 €', text: 'd’abonnement et de commission chaque mois.' },
  { value: '5 RDV', text: 'à 40 € suffisent à rembourser un site d’une page.', href: '/tarifs/' },
];

// Le constat : des chiffres sourcés.
export const stats = [
  { value: '83 %', text: 'des Français se renseignent avant d’acheter, le plus souvent en ligne.', source: sources.fevad },
  { value: '1 sur 2', text: 'Environ une réservation sur deux se fait en dehors des heures d’ouverture.', source: sources.treatwellHoraires },
  { value: '25 %', text: 'C’est la commission d’une grande plateforme de réservation sur chaque nouvelle cliente.', source: sources.treatwellTarifs },
];

// Ce que la cliente y gagne (ses désirs principaux).
export const gains = [
  { title: 'Plus de rendez-vous', text: 'Vos clientes réservent en deux clics depuis leur téléphone, à toute heure. Elles reçoivent un rappel, vous recevez la réservation.' },
  { title: 'Moins de frais', text: 'Pas d’abonnement, pas de commission sur vos clientes. Vous payez votre site une fois, et il est à vous.' },
  { title: 'Un site qui vous ressemble', text: 'Vos couleurs, vos photos, vos mots. Pas un modèle tout fait rempli avec votre logo.' },
  { title: 'Quelqu’un qui répond', text: `Un souci sur votre site ? Vous m’écrivez, je réponds ${site.support}.` },
];

// La démo gratuite, en trois étapes.
export const demoSteps = [
  { title: 'Vous me dites qui vous êtes', text: 'Quatre questions, deux minutes. Ajoutez votre Instagram ou votre site actuel si vous en avez un.' },
  { title: 'Je prépare votre maquette', text: 'La page d’accueil de votre futur site, à vos couleurs, avec vos prestations. Offerte.' },
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
    title: 'On en parle',
    text: '30 minutes au téléphone ou en visio : vos prestations, vos clientes, ce que vous voulez changer.',
    phase: 'Premier quartier',
  },
  {
    title: 'Le devis',
    text: 'Un prix écrit, un délai et ce qui est compris. Vous validez, je commence.',
    phase: 'Lune gibbeuse',
  },
  {
    title: 'Je construis',
    text: `Vous suivez le chantier sur un lien privé et vous me dites ce qui ne va pas. ${standard} séries de corrections sont comprises, ${surMesure} pour un projet sur mesure.`,
    phase: 'Pleine lune',
  },
  {
    title: 'En ligne',
    text: `Je publie le site, je le déclare à Google et je vous montre comment il marche. Ensuite, un souci ? Je réponds ${site.support}.`,
    phase: 'Chaque nuit',
  },
];

// Page À propos.
export const piliers = [
  {
    title: 'Sur mesure',
    text: 'Je ne pars pas d’un thème acheté. Je regarde comment vos clientes vous cherchent et ce qu’elles veulent savoir, puis je dessine le site autour.',
  },
  {
    title: 'En clair',
    text: 'Je vous explique mes choix sans jargon. Vous avez le prix par écrit avant que je commence.',
  },
  {
    title: 'Disponible',
    text: `Une fois le site en ligne, je reste joignable. Un souci ? Je réponds ${site.support}.`,
  },
];

export const engagements = [
  { title: 'Un seul interlocuteur', text: 'La personne qui vous répond est celle qui fait votre site. Pas de commercial, pas d’intermédiaire.' },
  { title: 'Le prix écrit avant de commencer', text: 'Un devis détaillé, et c’est ce prix-là que vous payez.' },
  { title: 'Aucun abonnement', text: `L’hébergement est compris. Vous payez seulement votre nom de domaine, ${site.domainCost}.` },
  { title: 'Tout est à votre nom', text: 'Le nom de domaine, le site, les textes et les accès sont à vous. Si un jour vous partez, vous partez avec.' },
];

// Page Tarifs.
export const formules = [
  {
    key: 'presence',
    name: 'Présence',
    pitch: 'Une page qui dit qui vous êtes, ce que vous proposez et comment réserver.',
    items: ['Une page à votre image', 'Réservation en ligne', 'Parfaite sur téléphone', 'Visible sur Google', `En ligne en ${site.delay} environ`, `${standard} séries de corrections`],
  },
  {
    key: 'vitrine',
    name: 'Vitrine',
    featured: true,
    pitch: 'Plusieurs pages pour vos prestations, vos tarifs, vos photos et vos avis. Je vous aide à écrire les textes.',
    items: ['Tout ce qu’offre Présence', 'Plusieurs pages', 'Aide à l’écriture des textes', 'Référencement local', 'Statistiques de visite', `${standard} séries de corrections`],
  },
  {
    key: 'surMesure',
    name: 'Sur mesure',
    pitch: 'Boutique en ligne, espace client, outil interne, application : on en parle, je chiffre.',
    items: ['Étude de votre besoin', 'Fonctionnalités sur mesure', 'Automatisations', 'Applications web', `${surMesure} séries de corrections`],
  },
];

// Comparatif (page Tarifs) : chiffres des autres options toujours sourcés.
export const comparatif = {
  columns: ['Agence web', 'Plateforme de réservation', 'Lunixel'],
  rows: [
    { label: 'Votre site', cells: [['2 000 à 6 000 €', 'prixAgence'], ['Une fiche sur leur site, pas le vôtre'], [`Dès ${site.prices.presence}, payé une fois`]] },
    { label: 'Chaque mois', cells: [['30 à 200 € d’entretien', 'prixMaintenance'], ['Abonnement, ou 25 % par nouvelle cliente', 'treatwellTarifs'], ['0 €']] },
    { label: 'À qui appartient-il', cells: [['À vous, selon le contrat'], ['Votre fiche reste sur leur plateforme, à côté de vos concurrents'], ['À vous, avec tous les accès']] },
  ],
};

export const faq = [
  {
    q: 'La démo est-elle vraiment gratuite ?',
    a: 'Oui. Je vous prépare la maquette de votre page d’accueil. Si elle ne vous plaît pas, vous ne me devez rien.',
  },
  {
    q: 'Combien coûte un site ?',
    a: 'Les prix de départ sont sur la page Tarifs. Après notre premier appel, gratuit, vous recevez un devis écrit, et c’est ce prix-là que vous payez.',
    href: '/tarifs/',
  },
  {
    q: 'Y a-t-il un abonnement ?',
    a: `Non. L’hébergement est compris. Vous payez seulement votre nom de domaine, ${site.domainCost}, directement à votre nom.`,
  },
  {
    q: 'Et si j’ai un souci sur mon site ?',
    a: `Vous m’écrivez, je réponds ${site.support}.`,
  },
  {
    q: 'Je suis déjà sur Planity ou Treatwell. Je peux garder ?',
    a: 'Oui. Je mets votre lien de réservation actuel sur le site. Et si vous voulez arrêter de payer une commission, on peut passer à une réservation en ligne directement sur votre site, à votre rythme.',
  },
  {
    q: 'Combien de temps faut-il ?',
    a: `En général ${site.delay} entre notre premier appel et la mise en ligne, si vous avez vos textes et vos photos. Pour un projet sur mesure, on fixe la date ensemble au départ.`,
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
    a: 'Si vous le souhaitez, je vous donne la main sur ce qui change souvent (horaires, prestations, prix). Sinon, vous m’envoyez un message : les petites retouches sont chiffrées avant, sans abonnement.',
  },
  {
    q: 'À qui appartient le site ?',
    a: 'À vous. Le nom de domaine est à votre nom, et vous gardez l’accès à tout. Si un jour vous changez de prestataire, vous repartez avec l’ensemble.',
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

export const activites = [
  ['institut-beaute', 'Institut de beauté'],
  ['onglerie', 'Onglerie'],
  ['coiffure', 'Coiffure'],
  ['massage-bien-etre', 'Massage et bien-être'],
  ['sante-naturelle', 'Naturopathie et santé naturelle'],
  ['boutique', 'Boutique'],
  ['autre', 'Autre'],
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
