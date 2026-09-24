import type { PhotoId } from './photos';

export interface Creation {
  slug: string;
  name: string;
  type: string;
  year?: string;
  text: string;
  photo?: PhotoId;
  source: string;
}

/**
 * Instruments créés par Hugo Abecassis.
 * Sources : ancien site et blog de l'atelier, fiches instruments publiées en
 * ligne, Ouest-France, Wikimanche. Rien n'est extrapolé.
 */
export const creations: Creation[] = [
  {
    slug: 'physalis',
    name: 'Physalis',
    type: "violon d'amour",
    year: '2016',
    text: "Quatre cordes jouées, comme un violon, et quatre cordes sympathiques qui vibrent sans être touchées.",
    photo: 'physalis',
    source: 'Fiche instrument',
  },
  {
    slug: 'la-jazz',
    name: 'LA Jazz',
    type: 'guitare jazz',
    text: "Une guitare jazz avec une idée venue du violon : une barre d'harmonie côté basses et une âme côté aigus.",
    photo: 'laJazz',
    source: 'Fiche instrument',
  },
  {
    slug: 'pinarbox',
    name: 'Pinarbox',
    type: 'guitares en caisses de vin',
    text: "D'anciennes caisses de vin devenues guitares, électriques ou folk. Chacune garde les marques de sa caisse.",
    photo: 'pinarbox',
    source: 'Fiches instruments ; Ouest-France 2022 ; Wikimanche',
  },
  { slug: 'ramino', name: 'Ramino', type: 'quinton', year: '2015', text: "Entre l'alto et le violon, dans une forme nouvelle.", source: "Blog et ancien site de l'atelier" },
  { slug: 'lyra', name: 'Lyra', type: 'lyra crétoise', year: '2015', text: "Instrument de Crète : on joue en posant l'ongle le long des cordes.", source: "Ancien site de l'atelier" },
  { slug: 'nova', name: 'Nova', type: 'contrebasse', text: 'Une contrebasse de petit format.', source: "Ancien site de l'atelier" },
  { slug: 'petite-faive', name: 'Petite Faive', type: 'guitare manouche', text: 'Petite bouche, manche fin, dans l’esprit des guitares de Favino.', source: "Ancien site de l'atelier" },
  { slug: 'harpe-ukulele', name: 'Harpe-ukulélé', type: 'instrument hybride', text: "Une idée d'instrument ancien, refaite aujourd'hui.", source: "Ancien site de l'atelier" },
  { slug: 'vg-tal', name: 'VG Tal', type: 'guitare électrique', text: 'Dans l’esprit des instruments Höfner.', source: "Ancien site de l'atelier" },
];
