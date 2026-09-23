import type { PhotoId } from './photos';

export interface Chapter {
  number: string;
  place: string;
  when?: string;
  title: string;
  text: string[];
  tbc?: string;
  photo?: PhotoId;
}

/**
 * Sources : Wikimanche, blog de l'atelier (2014-2015), ancien site de l'atelier,
 * fiches instruments, Ouest-France. Voir docs/CONCEPT.md §0.
 */
export const chapters: Chapter[] = [
  {
    number: '01',
    place: 'Belgique',
    title: 'Apprendre',
    text: [
      "Hugo apprend la lutherie en Belgique, auprès du luthier Gauthier Louppe.",
      "Il poursuit les recherches de son maître vers une lutherie contemporaine, sans jamais lâcher les bases : les techniques des maîtres italiens et français des XVIIe et XVIIIe siècles.",
    ],
    tbc: 'années et durée de la formation',
    photo: 'mains',
  },
  {
    number: '02',
    place: 'Avranches',
    when: '2014',
    title: 'Un atelier à Avranches',
    text: [
      "Son atelier est d'abord installé à Avranches, dans le sud de la Manche. Il y crée et restaure des instruments. En mars 2015, il y présente Ramino, un quinton de forme contemporaine.",
      'En 2014, la presse locale s’intéresse à son travail.',
    ],
    tbc: "date d'ouverture de l'atelier d'Avranches",
  },
  {
    number: '03',
    place: 'Saint-Lô',
    when: '2015',
    title: 'Rejoindre un atelier',
    text: [
      "Le 1er juin 2015, il s'installe à Saint-Lô, au Domaine Musical, aux côtés du facteur de pianos Gilles Lechevallier.",
      "Il y entretient et restaure les instruments du quatuor et les guitares, et y fabrique des instruments sur mesure.",
    ],
  },
  {
    number: '04',
    place: "À l'établi",
    when: '2015 — 2022',
    title: 'Inventer',
    text: [
      "Ramino, un quinton de forme contemporaine, en 2015. Physalis, un violon d'amour à cordes sympathiques, en 2016. Une guitare jazz qui emprunte au violon son âme et sa barre d'harmonie.",
      "Puis les Pinarbox, guitares nées d'anciennes caisses de vin, que Ouest-France suit en 2022.",
    ],
    photo: 'physalis',
  },
  {
    number: '05',
    place: 'Demain',
    title: 'Un atelier à son nom',
    text: [
      "Une nouvelle étape se prépare : un atelier indépendant, pensé pour accueillir musiciens et instruments dans la durée.",
    ],
    tbc: 'calendrier (2027), lieu et formulation publique à valider avec Hugo',
  },
];

export const quote = {
  text: 'Pour faire évoluer la lutherie correctement, il ne faut surtout pas oublier les bases de la lutherie traditionnelle.',
  author: 'Hugo Abecassis',
};
