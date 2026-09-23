// Réglages du site. Tout ce qui est marqué « à compléter » s'affiche automatiquement dès qu'il est rempli.
export const site = {
  name: 'Lunixel',
  url: 'https://lunixel.fr',
  email: 'contact@lunixel.fr',
  signature: 'Le studio web qui met les petites entreprises en lumière.',
  description:
    'Création de sites internet pour artisans, commerçants, indépendants et TPE, depuis Villeneuve-d’Ascq et partout en France. Un seul interlocuteur, des prix écrits.',
  responseTime: '48 h',

  // Où est basé le studio (affiché sur le site et donné à Google).
  location: {
    city: 'Villeneuve-d’Ascq',
    near: 'près de Lille',
    region: 'Hauts-de-France',
  },

  // Qui est derrière Lunixel. Vide = rien n'est affiché.
  // photo : chemin d'une image placée dans public/ (ex. '/photo.jpg').
  founder: { name: '', photo: '' },

  // Lien Cal.com pour réserver un appel (ex. 'https://cal.com/lunixel/30min'). Vide = bouton masqué.
  bookingUrl: '',

  // Délai type et séries de corrections incluses.
  delay: '2 semaines',
  revisions: { standard: 2, surMesure: 3 },

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
    vitrine: '400 €', // Site de plusieurs pages
    surMesure: '', // Outils et fonctionnalités sur mesure : sur devis
    serenite: '30 €', // Par mois
  },
};
