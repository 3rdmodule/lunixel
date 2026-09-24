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
    text: "Hugo apprend la lutherie auprès du luthier Gauthier Louppe : les techniques des maîtres italiens et français des XVIIe et XVIIIe siècles, et le goût de chercher des formes nouvelles.",
    tbc: 'années',
  },
  {
    when: '2014',
    place: 'Avranches',
    text: "Un premier atelier dans le sud de la Manche. Il y crée et restaure des instruments ; la presse locale en parle. En mars 2015, il y présente Ramino, un quinton de forme nouvelle.",
  },
  {
    when: '2015',
    place: 'Saint-Lô',
    text: "Le 1er juin 2015, il rejoint l'atelier d'un magasin de musique de Saint-Lô. Il y entretient et restaure les instruments du quatuor et les guitares, et fabrique des instruments sur mesure.",
  },
  {
    when: '2016 – 2022',
    place: "À l'établi",
    text: "Physalis, un violon d'amour, en 2016. Une guitare jazz qui emprunte au violon son âme. Puis les Pinarbox, des guitares nées de caisses de vin, que Ouest-France filme en 2022.",
  },
  {
    when: 'Demain',
    place: 'Un atelier à son nom',
    text: 'Un atelier indépendant, pour accueillir les musiciens et leurs instruments.',
    tbc: 'date et lieu',
  },
];

export const quote = {
  text: 'Pour faire évoluer la lutherie correctement, il ne faut surtout pas oublier les bases de la lutherie traditionnelle.',
  author: 'Hugo Abecassis',
};
