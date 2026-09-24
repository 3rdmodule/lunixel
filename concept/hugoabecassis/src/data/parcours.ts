/**
 * Parcours d'Hugo Abecassis.
 * Sources : Wikimanche ; blog de l'atelier (2014-2015) ; ancien site de
 * l'atelier ; fiches instruments ; Ouest-France (2015, 2022).
 */
export interface Step {
  when: string;
  place: string;
  text: string;
  tbc?: string;
}

export const steps: Step[] = [
  {
    when: 'Formation',
    place: 'Belgique',
    text: "Apprentissage de la lutherie auprès de Gauthier Louppe : les techniques des maîtres italiens et français des XVIIe et XVIIIe siècles, et le goût des formes nouvelles.",
    tbc: 'années',
  },
  {
    when: '2014',
    place: 'Avranches',
    text: "Premier atelier, dans le sud de la Manche. Créations et restaurations, premiers articles dans la presse locale. En mars 2015, présentation de Ramino, un quinton de forme nouvelle.",
  },
  {
    when: '2015',
    place: 'Saint-Lô',
    text: "1er juin 2015 : arrivée à l'atelier d'un magasin de musique de Saint-Lô. Entretien et restauration des instruments du quatuor et des guitares, fabrication d'instruments sur mesure.",
  },
  {
    when: '2016 – 2022',
    place: "À l'établi",
    text: "Physalis, un violon d'amour, en 2016. Une guitare jazz qui emprunte au violon son âme. Puis les Pinarbox, des guitares nées de caisses de vin, filmées par Ouest-France en 2022.",
  },
  {
    when: 'Demain',
    place: 'Un atelier indépendant',
    text: 'Un lieu ouvert aux musiciens et à leurs instruments.',
    tbc: 'date et lieu',
  },
];

export const quote = {
  text: 'Pour faire évoluer la lutherie correctement, il ne faut surtout pas oublier les bases de la lutherie traditionnelle.',
  author: 'Hugo Abecassis',
};
