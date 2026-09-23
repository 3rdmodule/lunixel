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

  /** Phase concept : affiche les marqueurs [À CONFIRMER] et les cadres de prise de vue. */
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
   * Rendez-vous
   *  - "request" : demande de rendez-vous via le formulaire (recommandé jusqu'à l'ouverture de l'atelier)
   *  - "cal"     : réservation directe Cal.com en fenêtre modale (atelier indépendant)
   */
  booking: {
    mode: 'request' as 'request' | 'cal',
    calLink: '', // ex. "hugo-abecassis/diagnostic" — TBC
    calOrigin: 'https://app.cal.com',
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
