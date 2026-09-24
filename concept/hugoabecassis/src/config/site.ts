/**
 * Configuration éditoriale et pratique du site.
 * Tout ce qui est marqué TBC doit être confirmé par Hugo avant publication.
 */
export const TBC = '[À CONFIRMER]';

export const site = {
  name: 'Hugo Abecassis',
  role: 'Luthier',
  region: 'Normandie',
  lang: 'fr',
  locale: 'fr_FR',
  description:
    "Entretien, restauration et fabrication d'instruments à cordes : violon, alto, violoncelle, contrebasse, guitare. Travail à la main, sur rendez-vous.",

  /** Indexation : false tant que le site est un concept hébergé chez Lunixel. */
  indexable: import.meta.env.SITE_INDEXABLE === 'true' || process.env.SITE_INDEXABLE === 'true',

  /** Phase concept : affiche les mentions [À CONFIRMER] et le bandeau « concept ». */
  conceptMode: true,

  contact: {
    email: '', // TBC — adresse professionnelle d'Hugo (ne pas utiliser celle du magasin)
    phone: '', // TBC
    city: '', // TBC — lieu du futur atelier
    area: 'Normandie',
    hours: '', // TBC — accueil sur rendez-vous
    instagram: '', // TBC
  },

  /**
   * Rendez-vous en ligne : Cal.com, ouvert en fenêtre par-dessus le site.
   * Compte à créer par Hugo (voir docs/CALCOM.md), puis renseigner `username`.
   * Tant que `username` est vide, le bouton ouvre une fenêtre d'explication
   * (concept) et renvoie vers le formulaire.
   */
  booking: {
    username: '', // TBC — ex. 'hugo-abecassis' → cal.com/hugo-abecassis
    origin: 'https://app.cal.com',
    brand: '#9a3b26',
    /** Types de rendez-vous à créer dans Cal.com (slug = fin de l'adresse). */
    events: [
      { slug: 'diagnostic', label: 'Premier rendez-vous : diagnostic, devis', duration: '30 min' },
      { slug: 'reglage', label: 'Réglage ou entretien', duration: '45 min' },
      { slug: 'depot', label: "Dépôt ou retrait d'un instrument", duration: '15 min' },
    ],
  },

  /** Formulaire : endpoint d'un service de formulaire (Formspree, Web3Forms…). Vide = mode démonstration. */
  form: {
    endpoint: '',
  },

  credits: {
    agency: 'Lunixel',
    agencyUrl: 'https://lunixel.fr/',
  },

  /** Références externes vérifiées (utilisées aussi dans le JSON-LD sameAs). */
  sameAs: ['https://www.wikimanche.fr/Hugo_Abecassis'],
} as const;

export const nav = [
  { label: 'Atelier', href: '/atelier/' },
  { label: 'Savoir-faire', href: '/savoir-faire/' },
  { label: 'Parcours', href: '/parcours/' },
  { label: 'Partenaires', href: '/partenaires/' },
  { label: 'Contact', href: '/contact/' },
] as const;
