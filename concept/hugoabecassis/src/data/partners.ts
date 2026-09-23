import type { PhotoId } from './photos';

export interface Partner {
  name: string;
  discipline: string;
  collaboration: string;
  instrument?: string;
  url?: string;
  photo: PhotoId;
  placeholder?: boolean;
}

/**
 * Aucun partenaire n'est cité sans vérification et sans accord.
 * Les fiches ci-dessous sont des gabarits : à remplir avec Hugo.
 */
export const partners: Partner[] = [
  {
    name: 'Musicien ou musicienne',
    discipline: 'Discipline, formation, ville',
    collaboration: "Nature de la collaboration : suivi d'un instrument, restauration, instrument fabriqué sur mesure…",
    instrument: 'Instrument concerné',
    photo: 'partenaire1',
    placeholder: true,
  },
  {
    name: 'Groupe',
    discipline: 'Style, ville, site ou réseau',
    collaboration: 'Réglages avant tournée, entretien des instruments, création…',
    instrument: 'Instruments concernés',
    photo: 'partenaire2',
    placeholder: true,
  },
  {
    name: 'Professionnel ou structure',
    discipline: 'École de musique, ensemble, studio, orchestre…',
    collaboration: 'Parc instrumental, conseil, expertise…',
    photo: 'partenaire3',
    placeholder: true,
  },
];

export const mentor = {
  name: 'Gauthier Louppe',
  role: 'Luthier, Belgique',
  relation: "Le luthier auprès duquel Hugo s'est formé, en Belgique. Hugo poursuit ses recherches vers une lutherie contemporaine.",
  link: {
    label: "Gauthier Louppe : itinéraire d'un luthier passionné · L'Avenir, 2024",
    url: 'https://www.lavenir.net/regions/luxembourg/marche-en-famenne/2024/04/03/gauthier-louppe-itineraire-dun-luthier-passionne-6A2WMDWTMNHU3OY6GBVKR7AYVU/',
  },
};
