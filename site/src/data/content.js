import { site } from '../config.js';

const { presence, vitrine, serenite } = site.prices;

// Textes réutilisés sur plusieurs pages.

export const situations = [
  { quote: 'Je n’ai pas de site, et je sens que ça me coûte des clients.', answer: 'On part de zéro, simplement.' },
  { quote: 'J’ai un site, mais il ne me ressemble plus.', answer: 'On le refait à votre image.' },
  { quote: 'Mon site existe, mais plus personne ne s’en occupe.', answer: 'On le reprend en main.' },
];

export const piliers = [
  {
    title: 'Sur mesure',
    text: 'Pas de modèle tout prêt. Votre site part de votre métier, de vos clients et de ce qui vous rend unique.',
  },
  {
    title: 'En clair',
    text: 'Chaque choix vous est expliqué avec des mots simples. Le prix est annoncé avant de commencer.',
  },
  {
    title: 'Dans la durée',
    text: 'Hébergement, mises à jour, petites modifications : on reste là bien après la mise en ligne.',
  },
];

export const besoins = [
  {
    title: 'Être trouvé',
    text: 'Un site rapide et bien construit, pour apparaître quand on vous cherche, sur téléphone comme sur ordinateur.',
    more: 'Structure propre, textes utiles, fiche Google, pages rapides : tout ce qui aide les moteurs de recherche à vous recommander.',
    term: 'Référencement local',
    clair: 'apparaître quand quelqu’un cherche « fleuriste Saint-Lô » ou « plombier près de chez moi » sur son téléphone.',
  },
  {
    title: 'Donner envie',
    text: 'Une identité, des pages et des textes qui inspirent confiance et donnent envie de vous appeler.',
    more: 'On travaille votre image en ligne comme votre vitrine : ce qu’on voit en premier, ce qui rassure, ce qui déclenche l’appel.',
    term: 'Design sur mesure',
    clair: 'un site dessiné pour vous, pas un modèle tout fait rempli avec votre logo.',
  },
  {
    title: 'Ne plus s’en soucier',
    text: 'Hébergement, sécurité, sauvegardes, mises à jour : on garde votre site en ligne et en forme.',
    more: 'Vous avez une question, un horaire à changer, une photo à remplacer ? Un message suffit.',
    term: 'Maintenance',
    clair: 'on s’occupe de tout ce qui fait qu’un site continue de bien marcher. Vous n’y pensez plus.',
  },
  {
    title: 'Gagner du temps',
    text: 'Prise de rendez-vous, catalogue, formulaires, petits outils : le site travaille pour vous.',
    more: 'Et quand il faut aller plus loin, on développe de vraies applications web, comme le jeu en ligne Fields of Fire.',
    term: 'Automatisation',
    clair: 'les tâches répétitives, faites toutes seules : confirmations, rappels, demandes de devis triées.',
  },
];

export const etapes = [
  {
    title: 'On fait connaissance',
    text: '30 minutes, au téléphone ou en visio. Vous parlez de votre métier, on écoute et on pose les bonnes questions.',
    phase: 'Fin croissant',
  },
  {
    title: 'On vous propose',
    text: 'Un devis clair et une première direction visuelle. Vous savez ce que vous aurez, et pour combien.',
    phase: 'Premier quartier',
  },
  {
    title: 'On construit',
    text: 'Vous suivez l’avancement sur un lien privé et vous validez chaque étape. Pas de surprise à la fin.',
    phase: 'Lune gibbeuse',
  },
  {
    title: 'On met en ligne',
    text: 'Votre site est publié, et on vous montre comment tout fonctionne. Votre activité est en lumière.',
    phase: 'Pleine lune',
  },
  {
    title: 'On reste là',
    text: 'Hébergement, mises à jour, petites modifications : on s’en occupe, comme la lune revient chaque nuit.',
    phase: 'Chaque nuit',
  },
];

export const engagements = [
  { title: 'Un seul interlocuteur', text: 'Vous parlez directement à ceux qui conçoivent et construisent votre site.' },
  { title: 'Le prix annoncé avant de commencer', text: 'Un devis clair et détaillé. Le prix annoncé est le prix payé.' },
  { title: 'Tout est à votre nom', text: 'Nom de domaine, site, contenus et accès : vous restez propriétaire de tout.' },
  { title: 'Zéro jargon', text: 'On vous explique chaque choix avec des mots simples, et on répond à toutes les questions.' },
];

export const formules = [
  {
    key: 'presence',
    name: 'Présence',
    pitch: 'Une seule page, claire et soignée, pour exister en ligne et être trouvé.',
    items: ['Design sur mesure', 'Parfait sur téléphone', 'Référencement de base', 'Formulaire de contact', 'Mise en ligne'],
  },
  {
    key: 'vitrine',
    name: 'Vitrine',
    featured: true,
    pitch: 'Un site complet pour présenter vos services, vos réalisations et vos tarifs, et donner envie de vous appeler.',
    items: ['Tout ce qu’offre Présence', 'Plusieurs pages', 'Aide à l’écriture des textes', 'Référencement local', 'Statistiques de visite'],
  },
  {
    key: 'surMesure',
    name: 'Sur mesure',
    pitch: 'Catalogue, prise de rendez-vous, espace client, outil interne, application web : on construit ce dont vous avez besoin.',
    items: ['Étude de votre besoin', 'Fonctionnalités sur mesure', 'Automatisations', 'Applications web', 'Évolutions dans le temps'],
  },
];

export const faq = [
  {
    q: 'Combien coûte un site ?',
    a:
      presence && vitrine
        ? `Un site d’une seule page démarre à ${presence}, un site de plusieurs pages à ${vitrine}. Les outils sur mesure (réservation, catalogue, espace client…) sont sur devis. Après un premier échange gratuit, vous recevez un devis clair et détaillé. Le prix annoncé est le prix payé.`
        : 'Cela dépend de ce dont vous avez besoin : une page de présentation ne demande pas le même travail qu’un catalogue en ligne. Après un premier échange gratuit, vous recevez un devis clair et détaillé. Le prix annoncé est le prix payé.',
  },
  {
    q: 'Combien de temps faut-il ?',
    a: 'Comptez généralement quelques semaines pour un site vitrine, selon sa taille et la disponibilité des contenus (textes, photos). Le calendrier est fixé ensemble dès le départ.',
  },
  {
    q: 'Faut-il que je m’y connaisse en informatique ?',
    a: 'Non, c’est justement notre travail. On vous pose les bonnes questions et on vous explique chaque étape avec des mots simples.',
  },
  {
    q: 'Est-ce que je pourrai modifier mon site ?',
    a: 'Selon votre projet, on peut vous donner la main sur ce qui change souvent (horaires, actualités, tarifs). Et si vous préférez ne pas y toucher, un message suffit : on s’en occupe.',
  },
  {
    q: 'À qui appartient le site ?',
    a: 'À vous. Le nom de domaine est à votre nom, et vous gardez l’accès à tout : site, contenus, comptes. Si un jour vous changez de prestataire, vous repartez avec l’ensemble.',
  },
  {
    q: 'Vous occupez-vous de l’hébergement ?',
    a: `Oui. On met votre site en ligne, on le garde en ligne, et on veille à sa sécurité et à ses mises à jour dans le cadre de l’accompagnement mensuel Sérénité${serenite ? `, à partir de ${serenite} par mois` : ''}.`,
  },
];

export const faqPlus = [
  {
    q: 'Et si je ne sais pas exactement ce dont j’ai besoin ?',
    a: 'C’est très courant, et c’est à ça que sert le premier échange. Vous nous parlez de votre activité et de vos clients ; on vous propose la solution la plus simple qui répond à votre besoin.',
  },
  {
    q: 'Pouvez-vous reprendre un site existant ?',
    a: 'Oui. On regarde ce qui existe, ce qui fonctionne et ce qui manque, puis on vous propose soit de l’améliorer, soit de le refaire. Dans les deux cas, vos contenus et votre nom de domaine sont conservés.',
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
