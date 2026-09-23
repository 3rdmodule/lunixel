import type { PhotoId } from './photos';

export const atelierChapters: { number: string; title: string; text: string; photo: PhotoId; tbc?: string }[] = [
  {
    number: '01',
    title: 'Le lieu',
    text: "Un établi près de la fenêtre, des instruments en attente, des gabarits au mur. Un lieu de travail, avant tout.",
    photo: 'lieu',
    tbc: 'lieu du futur atelier',
  },
  {
    number: '02',
    title: 'La matière',
    text: "De l'épicéa pour les tables, de l'érable pour les fonds et les manches, de l'ébène pour les touches. Et parfois une caisse de vin.",
    photo: 'matiere',
  },
  {
    number: '03',
    title: 'Les outils',
    text: "Gouges, rabots, canifs, racloirs : l'essentiel se fait à la main, comme chez les luthiers des XVIIe et XVIIIe siècles.",
    photo: 'outils',
  },
  {
    number: '04',
    title: 'Les gestes',
    text: "Creuser une voûte, ajuster une âme, raccorder un vernis. Des gestes précis, qu'on vérifie du bout des doigts autant qu'à l'œil.",
    photo: 'gestes',
  },
  {
    number: '05',
    title: 'Le temps',
    text: "Un instrument ne se fait pas en vitesse : le bois se stabilise, le vernis sèche, le réglage s'affine à l'essai.",
    photo: 'temps',
  },
];

export const details: PhotoId[] = ['d1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9'];
