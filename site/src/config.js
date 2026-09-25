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
  founder: { name: 'Awen', photo: '' },

  // Lien Cal.com pour réserver un appel (ex. 'https://cal.com/lunixel/30min'). Vide = bouton masqué.
  bookingUrl: 'https://cal.com/lunixel/30min',

  // Réseaux sociaux officiels. Vide = lien masqué.
  social: {
    instagram: 'https://www.instagram.com/lunixel.fr/',
    facebook: 'https://www.facebook.com/profile.php?id=61594670464461',
  },

  // Codes de vérification Search Console (Google) et Bing Webmaster Tools. Vide = balise absente.
  verification: { google: '', bing: '' },

  // Délai type et séries de corrections incluses.
  delay: '2 semaines',
  revisions: { standard: 2, surMesure: 3 },

  // Appel à l'action principal (l'offre d'entrée : la maquette de la page d'accueil, offerte).
  cta: 'Obtenir ma démo gratuite',
  ctaShort: 'Démo gratuite',

  // Disponibilité en cas de souci sur un site livré, et coût du nom de domaine pour le client.
  support: '7 j/7',
  domainCost: 'moins de 15 € par an',

  // Formulaire : clé Web3Forms (liée à contact@lunixel.fr), à coller entre les guillemets.
  // Tant qu'elle est vide, le formulaire prépare un e-mail dans la messagerie du visiteur.
  web3formsKey: '05625749-b303-402a-827b-75f3eebc4fa1',

  // Mentions légales. Les champs vides ne s'affichent pas.
  legal: {
    publisher: 'Awen Vannier', // Entrepreneur individuel
    status: 'entrepreneur individuel (micro-entreprise)',
    siret: '892 917 733 00032', // Établissement actif (siège depuis le 18/05/2026)
    address: '4 rue des Abbesses, 76460 Gueutteville-les-Grès',
    phone: '', // Vide par choix : « communiqué sur simple demande ». La loi le demande pour un site pro.
    director: 'Awen Vannier', // Directeur de la publication
    vat: 'TVA non applicable, article 293 B du CGI',
  },

  // Prix « à partir de » (page Tarifs uniquement). Vide = « Sur devis ».
  prices: {
    presence: '200 €', // Site d'une page
    vitrine: '400 €', // Site de plusieurs pages
    surMesure: '', // Outils et fonctionnalités sur mesure : sur devis
    entretien: '25 €', // Entretien mensuel en option, prix bas (site simple)
    entretienMax: '50 €', // Entretien mensuel en option, prix haut (site plus complet). Petites modifications comprises.
  },
};

// Liste prête à afficher des réseaux renseignés.
export const socials = [
  ['Instagram', site.social?.instagram],
  ['Facebook', site.social?.facebook],
].filter(([, url]) => url).map(([name, url]) => ({ name, url }));
