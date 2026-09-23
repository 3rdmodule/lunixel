import type { PhotoId } from './photos';

export interface Creation {
  slug: string;
  name: string;
  type: string;
  year?: string;
  text: string;
  specs: { label: string; value: string }[];
  photo: PhotoId;
  /** Mise en avant sur l'accueil. */
  featured?: boolean;
  source: string;
}

/**
 * Créations d'Hugo Abecassis.
 * Sources : ancien site de l'atelier (page Création), blog de l'atelier,
 * fiches instruments publiées en ligne, Wikimanche. Rien n'est extrapolé.
 */
export const creations: Creation[] = [
  {
    slug: 'physalis',
    name: 'Physalis',
    type: "Violon d'amour",
    year: '2016',
    text: "Quatre cordes jouées, comme sur un violon, et quatre cordes sympathiques. Accordées avec elles, elles vibrent sans être touchées et enrichissent les harmoniques de l'instrument.",
    specs: [
      { label: 'Famille', value: 'Cordes frottées' },
      { label: 'Cordes', value: '4 jouées + 4 sympathiques' },
      { label: 'Année', value: '2016' },
    ],
    photo: 'physalis',
    featured: true,
    source: 'Fiche instrument',
  },
  {
    slug: 'la-jazz',
    name: 'LA Jazz',
    type: 'Guitare jazz',
    text: "La tradition des guitares jazz du début du XXe siècle, avec une idée venue du violon : une fine barre d'harmonie sous la table côté basses et une âme côté aigus, pour un son riche en harmoniques et des notes plus profondes.",
    specs: [
      { label: 'Table', value: 'Épicéa' },
      { label: 'Fond, éclisses, manche', value: 'Érable' },
      { label: 'Touche, chevalet', value: 'Ébène' },
    ],
    photo: 'laJazz',
    featured: true,
    source: 'Fiche instrument',
  },
  {
    slug: 'pinarbox',
    name: 'Pinarbox',
    type: 'Guitares en caisses de vin',
    text: "Une déclinaison française des cigar box guitars américaines : d'anciennes caisses de vin deviennent des guitares électriques ou folk électro-acoustiques. Chaque instrument garde l'identité de sa caisse.",
    specs: [
      { label: 'Matière', value: 'Caisses de vin anciennes' },
      { label: 'Versions', value: 'Électrique, folk électro-acoustique' },
      { label: 'Presse', value: 'Ouest-France, 2022' },
    ],
    photo: 'pinarbox',
    featured: true,
    source: 'Fiches instruments ; Ouest-France ; Wikimanche',
  },
  {
    slug: 'ramino',
    name: 'Ramino',
    type: 'Quinton',
    year: '2015',
    text: "Le quinton réunit la tessiture de l'alto et celle du violon. Hugo lui a dessiné une forme nouvelle, contemporaine.",
    specs: [
      { label: 'Famille', value: 'Cordes frottées' },
      { label: 'Forme', value: 'Contemporaine' },
      { label: 'Année', value: '2015' },
    ],
    photo: 'ramino',
    source: "Blog et ancien site de l'atelier",
  },
  {
    slug: 'lyra',
    name: 'Lyra',
    type: 'Lyra crétoise',
    year: '2015',
    text: "Instrument traditionnel de Crète. Les notes se jouent en posant l'ongle le long des cordes.",
    specs: [
      { label: 'Tradition', value: 'Crète' },
      { label: 'Année', value: '2015' },
    ],
    photo: 'lyra',
    source: "Ancien site de l'atelier",
  },
  {
    slug: 'nova',
    name: 'Nova',
    type: 'Contrebasse',
    text: 'Une contrebasse de petit format, pensée comme une vraie basse acoustique.',
    specs: [{ label: 'Famille', value: 'Cordes frottées' }],
    photo: 'nova',
    source: "Ancien site de l'atelier",
  },
  {
    slug: 'petite-faive',
    name: 'Petite Faive',
    type: 'Guitare manouche',
    text: "Petite bouche et manche fin en U, dans l'esprit des guitares de Favino.",
    specs: [{ label: 'Famille', value: 'Cordes pincées' }],
    photo: 'petiteFaive',
    source: "Ancien site de l'atelier",
  },
  {
    slug: 'harpe-ukulele',
    name: 'Harpe-ukulélé',
    type: 'Instrument hybride',
    text: "Une réinterprétation contemporaine d'instruments historiques.",
    specs: [{ label: 'Famille', value: 'Cordes pincées' }],
    photo: 'harpeUkulele',
    source: "Ancien site de l'atelier",
  },
  {
    slug: 'vg-tal',
    name: 'VG Tal',
    type: 'Guitare électrique',
    text: "Dans l'esprit des instruments Höfner.",
    specs: [{ label: 'Famille', value: 'Cordes pincées' }],
    photo: 'vgTal',
    source: "Ancien site de l'atelier",
  },
];
