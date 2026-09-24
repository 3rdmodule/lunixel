export interface PressItem {
  media: string;
  title: string;
  /** Date ISO (AAAA-MM-JJ ou AAAA-MM). */
  date?: string;
  dateLabel: string;
  author?: string;
  summary: string;
  url: string;
  kind?: string;
  tbc?: string;
}

/**
 * Références vérifiées. Les liens pointent vers les sources originales.
 * Les articles de 2014 sont connus par le blog de l'atelier : titres à confirmer.
 */
export const press: PressItem[] = [
  {
    media: 'Ouest-France',
    title: 'Vidéo. À Saint-Lô, Hugo prête vie aux guitares pinarbox',
    date: '2022-01-15',
    dateLabel: '15 janvier 2022',
    author: 'Yann Halopeau',
    kind: 'Reportage vidéo',
    summary: "Reportage vidéo sur les Pinarbox, les guitares qu'Hugo fabrique dans d'anciennes caisses de vin.",
    url: 'https://www.ouest-france.fr/normandie/saint-lo-50000/video-a-saint-lo-hugo-prete-vie-aux-guitares-pinarbox-363f9770-7204-11ec-ae7c-d05dab244f47',
  },
  {
    media: 'Ouest-France',
    title: 'Le jeune luthier crée et restaure',
    date: '2015-07-02',
    dateLabel: '2 juillet 2015',
    kind: 'Portrait',
    summary: 'Portrait publié à son arrivée à Saint-Lô.',
    url: 'https://www.ouest-france.fr/normandie/saint-lo-50000/le-jeune-luthier-cree-et-restaure-3535740',
  },
  {
    media: 'Wikimanche',
    title: 'Hugo Abecassis',
    kind: 'Encyclopédie',
    dateLabel: 'Notice biographique',
    summary: "La notice de l'encyclopédie de la Manche : formation, spécialités, parcours.",
    url: 'https://www.wikimanche.fr/Hugo_Abecassis',
  },
  {
    media: 'La Manche Libre · La Gazette',
    title: "Deux articles sur l'atelier d'Avranches",
    date: '2014-05',
    dateLabel: 'Mai et juin 2014',
    kind: 'Presse locale',
    summary: "Deux articles de presse locale, relayés par le blog de l'atelier.",
    url: 'https://lalutherieabecassis.blogspot.com/2014/',
    tbc: 'titres exacts et liens directs',
  },
];
