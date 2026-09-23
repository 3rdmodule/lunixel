// Réglages du site. Tout ce qui est marqué « à compléter » s'affiche automatiquement dès qu'il est rempli.
export const site = {
  name: 'Lunixel',
  url: 'https://lunixel.fr',
  email: 'contact@lunixel.fr',
  signature: 'Le studio web qui met les petites entreprises en lumière.',
  description:
    'Lunixel conçoit, construit et entretient des sites sur mesure pour les artisans, commerçants, indépendants et TPE. Un seul interlocuteur, des prix clairs.',
  responseTime: '48 h',

  // Formulaire : clé Web3Forms (liée à contact@lunixel.fr), à coller entre les guillemets.
  // Tant qu'elle est vide, le formulaire prépare un e-mail dans la messagerie du visiteur.
  web3formsKey: '05625749-b303-402a-827b-75f3eebc4fa1',

  // Mentions légales. Les champs vides ne s'affichent pas.
  legal: {
    publisher: '3rd', // Nom de l'éditeur (personne ou société)
    status: 'entrepreneur individuel (micro-entreprise)',
    siret: '892 917 733 00032', // Établissement actif (siège depuis le 18/05/2026)
    address: '',
    phone: '',
    director: '', // Directeur de la publication
  },

  // Prix « à partir de ». Vide = « Sur devis ». Repris aussi dans la FAQ.
  prices: {
    presence: '200 €', // Site d'une page
    vitrine: '600 €', // Site de plusieurs pages
    surMesure: '', // Outils et fonctionnalités sur mesure : sur devis
    serenite: '30 €', // Par mois
  },
};
