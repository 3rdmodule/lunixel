import { site } from '../config.js';

const { presence, vitrine, serenite } = site.prices;
const { standard, surMesure } = site.revisions;

// Textes réutilisés sur plusieurs pages. Voix : « je », concret, sans jargon.

export const situations = [
  { quote: 'Je n’ai pas de site, et je sens que ça me coûte des clients.', answer: 'On part de zéro. Une page suffit souvent pour commencer.' },
  { quote: 'J’ai un site, mais il ne me ressemble plus.', answer: 'Je le refais à votre image, en gardant ce qui marche.' },
  { quote: 'Mon site existe, mais plus personne ne s’en occupe.', answer: 'Je le reprends en main, et je m’en occupe ensuite.' },
];

export const piliers = [
  {
    title: 'Sur mesure',
    text: 'Je ne pars pas d’un thème acheté. Je regarde comment vos clients vous cherchent et ce qu’ils veulent savoir, puis je dessine le site autour.',
  },
  {
    title: 'En clair',
    text: 'Je vous explique mes choix sans jargon. Vous avez le prix par écrit avant que je commence.',
  },
  {
    title: 'Dans la durée',
    text: 'Une fois le site en ligne, je ne disparais pas. Un horaire ou une photo à changer ? Un message suffit.',
  },
];

export const besoins = [
  {
    title: 'Être trouvé',
    text: 'Un site rapide et bien construit, pour que vos clients vous trouvent sur Google, surtout depuis leur téléphone.',
    more: 'Je soigne ce que Google regarde vraiment : la structure des pages, des textes qui répondent aux questions de vos clients, votre fiche Google et la vitesse.',
    term: 'Référencement local',
    clair: 'apparaître quand quelqu’un cherche « fleuriste à Lille » ou « plombier près de chez moi » sur son téléphone.',
  },
  {
    title: 'Donner envie',
    text: 'Des pages et des textes qui ressemblent à votre activité, et qui donnent envie de vous appeler.',
    more: 'Je regarde votre site comme une vitrine : ce qu’on voit en premier, ce qui rassure, ce qui décide à vous contacter.',
    term: 'Design sur mesure',
    clair: 'un site dessiné pour vous, pas un modèle tout fait rempli avec votre logo.',
  },
  {
    title: 'Ne plus s’en soucier',
    text: 'Je garde votre site en ligne, sécurisé et à jour, et je vérifie chaque semaine que tout va bien.',
    more: 'Un horaire à changer, une photo à remplacer ? Vous m’écrivez, je m’en occupe.',
    term: 'Maintenance',
    clair: 'je m’occupe de tout ce qui fait qu’un site continue de bien marcher. Vous n’y pensez plus.',
  },
  {
    title: 'Gagner du temps',
    text: 'Prise de rendez-vous, catalogue, demandes de devis : le site peut faire une partie du travail à votre place.',
    more: 'Et quand il faut aller plus loin, je développe de vraies applications web, comme le jeu en ligne Fields of Fire.',
    term: 'Automatisation',
    clair: 'les tâches répétitives, faites toutes seules : confirmations, rappels, demandes de devis triées.',
  },
];

export const etapes = [
  {
    title: 'On fait connaissance',
    text: '30 minutes au téléphone ou en visio. Vous me parlez de votre métier, de vos clients, et de ce qui vous gêne dans votre site actuel si vous en avez un.',
    phase: 'Fin croissant',
  },
  {
    title: 'Je vous fais une proposition',
    text: 'Un devis écrit et une première idée du rendu. Vous savez ce que vous aurez, quand, et pour combien.',
    phase: 'Premier quartier',
  },
  {
    title: 'Je construis',
    text: `Vous suivez le chantier sur un lien privé et vous me dites ce qui ne va pas. ${standard} séries de corrections sont comprises, ${surMesure} pour un projet sur mesure.`,
    phase: 'Lune gibbeuse',
  },
  {
    title: 'Mise en ligne',
    text: `Je publie le site, je le déclare à Google et je vous montre comment il marche. En général, ${site.delay} après notre premier appel.`,
    phase: 'Pleine lune',
  },
  {
    title: 'Et après',
    text: 'Je m’occupe de l’hébergement et des mises à jour, et je vérifie le site chaque semaine. Vous m’écrivez quand quelque chose change chez vous.',
    phase: 'Chaque nuit',
  },
];

export const engagements = [
  { title: 'Un seul interlocuteur', text: 'La personne qui vous répond est celle qui fait votre site. Pas de commercial, pas d’intermédiaire.' },
  { title: 'Le prix écrit avant de commencer', text: 'Un devis détaillé, et c’est ce prix-là que vous payez.' },
  { title: 'Tout est à votre nom', text: 'Le nom de domaine, le site, les textes et les accès sont à vous. Si un jour vous partez, vous partez avec.' },
  { title: 'Zéro jargon', text: 'Je vous explique chaque choix avec des mots simples. Aucune question n’est bête.' },
];

export const formules = [
  {
    key: 'presence',
    name: 'Présence',
    pitch: 'Une page qui dit qui vous êtes, ce que vous faites et comment vous joindre. Souvent suffisant pour démarrer.',
    items: ['Une page à votre image', 'Parfaite sur téléphone', 'Référencement de base', 'Formulaire de contact', `En ligne en ${site.delay} environ`, `${standard} séries de corrections`],
  },
  {
    key: 'vitrine',
    name: 'Vitrine',
    featured: true,
    pitch: 'Plusieurs pages pour montrer vos services, vos réalisations et vos tarifs. Je vous aide à écrire les textes.',
    items: ['Tout ce qu’offre Présence', 'Plusieurs pages', 'Aide à l’écriture des textes', 'Référencement local', 'Statistiques de visite', `${standard} séries de corrections`],
  },
  {
    key: 'surMesure',
    name: 'Sur mesure',
    pitch: 'Réservation en ligne, catalogue, espace client, outil interne, application web : on en parle, je chiffre.',
    items: ['Étude de votre besoin', 'Fonctionnalités sur mesure', 'Automatisations', 'Applications web', `${surMesure} séries de corrections`],
  },
];

// Ce que couvre l'accompagnement mensuel (affiché sous les formules et dans la FAQ).
export const sereniteInclus = [
  'Hébergement et nom de domaine',
  'Une vérification chaque semaine : le site est en ligne et sécurisé',
  'Sauvegardes et mises à jour',
  'Jusqu’à 30 minutes de petites modifications par mois (un horaire, une photo, un texte)',
];

export const faq = [
  {
    q: 'Combien coûte un site ?',
    a:
      presence && vitrine
        ? `Un site d’une seule page démarre à ${presence}, un site de plusieurs pages à ${vitrine}. Les outils sur mesure (réservation, catalogue, espace client…) sont sur devis. Après notre premier appel, gratuit, vous recevez un devis écrit, et c’est ce prix-là que vous payez.`
        : 'Cela dépend de ce dont vous avez besoin : une page de présentation ne demande pas le même travail qu’un catalogue en ligne. Après notre premier appel, gratuit, vous recevez un devis écrit, et c’est ce prix-là que vous payez.',
  },
  {
    q: 'Combien de temps faut-il ?',
    a: `En général ${site.delay} entre notre premier appel et la mise en ligne, si vous avez vos textes et vos photos. Pour un site plus complet ou un outil sur mesure, on fixe la date ensemble au départ.`,
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
    a: 'Si vous le souhaitez, je vous donne la main sur ce qui change souvent (horaires, actualités, tarifs). Et si vous préférez ne pas y toucher, un message suffit : je m’en occupe.',
  },
  {
    q: 'À qui appartient le site ?',
    a: 'À vous. Le nom de domaine est à votre nom, et vous gardez l’accès à tout. Si un jour vous changez de prestataire, vous repartez avec l’ensemble.',
  },
  {
    q: 'Que comprend l’accompagnement mensuel ?',
    a: `${serenite ? `À partir de ${serenite} par mois : ` : ''}l’hébergement et le nom de domaine, une vérification chaque semaine que le site est en ligne et sécurisé, les sauvegardes, les mises à jour, et jusqu’à 30 minutes de petites modifications par mois.`,
  },
];

export const faqPlus = [
  {
    q: 'Vous travaillez seulement autour de Lille ?',
    a: `Non. Je suis basé à ${site.location.city}, ${site.location.near}, et je travaille avec des clients partout en France. Tout se fait très bien par téléphone et en visio.`,
  },
  {
    q: 'Et si je ne sais pas exactement ce dont j’ai besoin ?',
    a: 'C’est très courant, et c’est à ça que sert le premier appel. Vous me parlez de votre activité et de vos clients ; je vous propose la solution la plus simple qui répond à votre besoin.',
  },
  {
    q: 'Pouvez-vous reprendre un site existant ?',
    a: 'Oui. Je regarde ce qui existe, ce qui fonctionne et ce qui manque, puis je vous propose soit de l’améliorer, soit de le refaire. Dans les deux cas, vos contenus et votre nom de domaine sont conservés.',
  },
];

export const activites = [
  ['artisan', 'Artisan'],
  ['commerce', 'Commerce'],
  ['restaurant', 'Restaurant'],
  ['sante-bien-etre', 'Santé et bien-être'],
  ['profession-liberale', 'Profession libérale'],
  ['culture-association', 'Culture et association'],
  ['autre', 'Autre'],
];

export const projetTypes = [
  ['creer', 'Créer un site'],
  ['refaire', 'Refaire mon site'],
  ['outil', 'Un outil ou une fonctionnalité'],
  ['je-ne-sais-pas', 'Je ne sais pas encore, et c’est normal'],
];

export const budgets = [
  ['moins-500', 'Moins de 500 €'],
  ['500-1500', '500 à 1 500 €'],
  ['1500-3000', '1 500 à 3 000 €'],
  ['plus-3000', 'Plus de 3 000 €'],
  ['ne-sait-pas', 'Je ne sais pas'],
];
