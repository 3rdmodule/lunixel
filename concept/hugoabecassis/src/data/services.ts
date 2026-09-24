import type { PhotoId } from './photos';

export interface Service {
  slug: 'entretien' | 'restauration' | 'fabrication';
  title: string;
  /** Une ligne (accueil). */
  short: string;
  /** Deux ou trois phrases. */
  text: string;
  /** Ce que ça comprend : une ligne par point. */
  items: string[];
  /** Liste standard du métier, à faire valider par Hugo. */
  validate?: boolean;
  photos: PhotoId[];
  /** Type de rendez-vous Cal.com proposé. */
  event: string;
}

/**
 * Sources : page lutherie rédigée par Hugo (site du magasin), ancien site de
 * l'atelier, Wikimanche. Les listes « entretien » et « restauration » sont des
 * formulations courantes du métier : à valider avec Hugo.
 */
export const services: Service[] = [
  {
    slug: 'entretien',
    title: 'Entretien',
    short: 'Réglages, cordes, chevalet, âme : un instrument juste et agréable à jouer.',
    text: "Le bois bouge avec les saisons et avec le jeu. Hugo règle et entretient les instruments à cordes frottées (violon, alto, violoncelle, contrebasse) et pincées (guitare, luth, mandoline), et aussi des instruments plus rares : violes, oud, saz, koto, tres.",
    items: [
      "L'âme : sa position change l'équilibre entre graves et aigus",
      'Le chevalet : hauteur, courbure, épaisseur',
      'La touche et les sillets : hauteur des cordes, confort de jeu',
      'Chevilles et mécaniques : un accord qui tient',
      'Les cordes : conseil et montage',
      'Guitares : manche, frettes, électronique',
      'Suivi : collages, conseils pour l’hiver et l’été',
    ],
    validate: true,
    photos: ['laJazzTete'],
    event: 'reglage',
  },
  {
    slug: 'restauration',
    title: 'Restauration',
    short: "Cassures, décollages, vernis : réparer sans effacer l'histoire de l'instrument.",
    text: "Un instrument fendu, décollé, abîmé : Hugo le répare avec un bois de même essence et raccorde les teintes du vernis, pour que la réparation se fonde dans l'existant. On décide ensemble de ce qui est nécessaire, et de ce qui peut attendre.",
    items: [
      'Diagnostic et devis',
      'Fractures et fentes',
      'Décollages de table, de fond, de manche',
      'Pièces et retouches de vernis',
      "Conseil avant l'achat d'un instrument d'occasion",
    ],
    validate: true,
    photos: ['rGuitare', 'rFente', 'rTouche', 'rPiece', 'rPresses', 'rEtiquette'],
    event: 'diagnostic',
  },
  {
    slug: 'fabrication',
    title: 'Fabrication',
    short: 'Des instruments sur mesure, du violon à la guitare.',
    text: "Des copies d'instruments anciens ou des modèles nouveaux. Hugo travaille surtout avec des outils à main, selon les techniques des luthiers italiens et français des XVIIe et XVIIIe siècles, et cherche aussi des formes nouvelles, dans la lignée de son maître Gauthier Louppe.",
    items: [
      'Le bois : essences, veinage',
      'Le modèle : historique ou nouveau',
      'Le son recherché, selon votre jeu',
      'Le vernis, sa couleur',
      'Le manche, pour votre main',
      'Les garnitures et les cordes',
    ],
    photos: ['e1', 'e2', 'e3', 'e4', 'e5', 'e6', 'e7', 'e8'],
    event: 'diagnostic',
  },
];
