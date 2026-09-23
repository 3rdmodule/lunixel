// Réglages du site. Tout ce qui est marqué « à compléter » s'affiche automatiquement dès qu'il est rempli.
export const site = {
  name: 'Lunixel',
  url: 'https://lunixel.fr',
  email: 'contact@lunixel.fr',
  signature: 'Le studio web qui met les petites entreprises en lumière.',
  description:
    'Lunixel conçoit, construit et entretient des sites sur mesure pour les artisans, commerçants, indépendants et TPE. Un seul interlocuteur, des prix clairs.',
  responseTime: '48 h',

  // Formulaire : clé gratuite à créer sur https://web3forms.com avec l'adresse contact@lunixel.fr.
  // Tant qu'elle est vide, le formulaire prépare un e-mail dans la messagerie du visiteur.
  web3formsKey: '',

  // Mentions légales (obligatoires) : à compléter.
  legal: {
    publisher: '', // Nom de l'éditeur (personne ou société)
    status: '', // Ex. : Entrepreneur individuel (micro-entreprise)
    siret: '',
    address: '',
    phone: '',
    director: '', // Directeur de la publication
  },

  // Prix « à partir de » (ex. : '900 €'). Vide = « Sur devis ».
  prices: {
    presence: '',
    vitrine: '',
    surMesure: '',
    serenite: '',
  },
};
