import type { PhotoId } from './photos';

export interface Service {
  slug: 'entretien' | 'restauration' | 'fabrication';
  number: string;
  title: string;
  kicker: string;
  /** Phrase courte (cartes, accueil). */
  short: string;
  lead: string;
  body: string[];
  photo: PhotoId;
  /** Opérations / principes. `validate` : liste à faire valider par Hugo. */
  items: { title: string; text: string }[];
  itemsTitle: string;
  validate?: boolean;
  steps?: { title: string; text: string }[];
  faq?: { q: string; a: string; tbc?: boolean }[];
  seo: { title: string; description: string };
  motif: string;
}

/**
 * Sources des textes : page lutherie rédigée par Hugo (site du magasin),
 * ancien site de l'atelier, Wikimanche. Les listes d'opérations sont
 * des formulations standard du métier, à valider avec Hugo.
 */
export const services: Service[] = [
  {
    slug: 'entretien',
    number: '01',
    title: 'Entretien',
    kicker: 'Réglage · suivi · optimisation',
    short: "Réglages, cordes, chevalet, âme : pour un instrument qui sonne juste et se joue bien.",
    lead: "Le bois bouge avec les saisons et avec le jeu. Un bon réglage, et l'instrument redevient agréable à jouer.",
    body: [
      "Hugo assure la maintenance, l'entretien, le réglage et l'optimisation des instruments à cordes frottées (violon, alto, violoncelle, contrebasse) et à cordes pincées (guitare, luth, mandoline).",
      "Il intervient aussi sur des instruments historiques ou plus rares : violes, oud, saz, koto, tres…",
    ],
    photo: 'entretien',
    itemsTitle: 'Ce que cela comprend',
    validate: true,
    items: [
      { title: "L'âme", text: "Cette petite baguette d'épicéa, placée à l'intérieur, transmet la vibration de la table au fond. Quelques dixièmes de millimètre changent l'équilibre entre graves et aigus." },
      { title: 'Le chevalet', text: "Hauteur, courbure, épaisseur, position : il porte les cordes et conditionne le son comme le confort." },
      { title: 'La touche et les sillets', text: "Dressage de la touche, hauteur des cordes : la main gauche travaille moins, la justesse s'améliore." },
      { title: 'Les chevilles et mécaniques', text: "Un ajustage précis pour un accord qui tient." },
      { title: 'Les cordes', text: "Conseil et montage selon l'instrument, le répertoire et le son recherché." },
      { title: 'Les guitares', text: "Réglage du manche, frettes, action, électronique des instruments électriques." },
      { title: 'Le suivi', text: "Contrôle des collages et des décollages, conseils d'hygrométrie pour traverser l'hiver et l'été." },
    ],
    steps: [
      { title: 'Écouter', text: "Vous jouez, vous décrivez ce que vous entendez et ce que vous ressentez sous les doigts." },
      { title: 'Examiner', text: "L'instrument est observé, mesuré, écouté. Hugo explique ce qu'il voit." },
      { title: 'Régler', text: "L'intervention est faite à l'atelier, avec un devis préalable." },
      { title: 'Essayer', text: "L'instrument vous est rendu après essai, et ajusté si besoin." },
    ],
    faq: [
      { q: 'Quels instruments sont concernés ?', a: "Les instruments à cordes frottées et pincées : violon, alto, violoncelle, contrebasse, guitare, luth, mandoline, mais aussi violes, oud, saz, koto ou tres." },
      { q: 'Les devis sont-ils gratuits ?', a: 'Conditions à préciser.', tbc: true },
    ],
    seo: {
      title: "Entretien et réglage d'instruments à cordes",
      description: "Réglage de l'âme et du chevalet, touche, sillets, cordes, suivi saisonnier : garder un violon, un violoncelle ou une guitare juste et confortable.",
    },
    motif: 'entretien',
  },
  {
    slug: 'restauration',
    number: '02',
    title: 'Restauration',
    kicker: 'Diagnostic · réparation · conservation',
    short: "Fractures, décollages, vernis : réparer sans effacer l'histoire de l'instrument.",
    lead: "Réparer un instrument sans effacer son histoire. Quand c'est bien fait, la réparation ne se voit pas.",
    body: [
      "Un instrument fendu, décollé, abîmé ? Hugo le répare en cherchant un bois de la même essence et en raccordant les teintes du vernis, pour que la réparation se fonde dans ce qui existe déjà.",
      "C'est un travail minutieux, et c'est bon signe quand on ne le remarque pas.",
    ],
    photo: 'restauration',
    itemsTitle: 'Une méthode',
    validate: true,
    items: [
      { title: 'Le diagnostic', text: "Examiner l'instrument, comprendre son histoire et ses réparations passées, dire ce qui est nécessaire et ce qui peut attendre." },
      { title: 'La conservation', text: "Garder autant que possible les pièces, le vernis et les traces d'origine : elles font la valeur de l'instrument." },
      { title: 'La réparation', text: "Fractures, décollages, chevilles, manche : réparer ce qui empêche l'instrument de sonner ou de durer." },
      { title: 'La retouche', text: "Retrouver un bois de même essence, raccorder les teintes de vernis pour que la réparation disparaisse." },
      { title: "L'équilibre", text: "Intervenir juste assez. Le bon compromis entre conserver et intervenir se décide avec vous." },
    ],
    faq: [
      { q: 'Mon instrument est très abîmé. Peut-il être restauré ?', a: "Dans la plupart des cas, oui. Bien que parfois complexes, les restaurations d'instruments n'ont presque jamais de limites. Le diagnostic permet de décider ce qui vaut la peine d'être fait." },
      { q: "Pouvez-vous estimer un instrument hérité ou d'occasion ?", a: "Oui : conseil avant l'achat d'un instrument d'occasion, estimation d'un instrument dont vous avez hérité. Conditions à préciser.", tbc: true },
    ],
    seo: {
      title: "Restauration d'instruments à cordes",
      description: "Diagnostic, réparation de fractures et de décollages, retouches de vernis : restaurer un violon, un violoncelle ou une guitare sans effacer son histoire.",
    },
    motif: 'restauration',
  },
  {
    slug: 'fabrication',
    number: '03',
    title: 'Fabrication',
    kicker: 'Conception · matières · sur mesure',
    short: "Des instruments sur mesure, du violon à la guitare, pensés avec vous.",
    lead: "Des copies d'instruments anciens ou des modèles nouveaux : des instruments qui sortent de son imagination, de la vôtre, ou des deux.",
    body: [
      "Hugo travaille surtout avec des outils à main, selon les techniques des luthiers italiens et français des XVIIe et XVIIIe siècles.",
      "Il aime aussi chercher, dans la lignée de son maître Gauthier Louppe : formes nouvelles, instruments hybrides, matériaux inattendus. Pour lui, on ne fait avancer la lutherie qu'en connaissant bien ses bases.",
      "Un instrument sur mesure se décide ensemble, après en avoir bien parlé.",
    ],
    photo: 'fabrication',
    itemsTitle: 'Ce qui se décide ensemble',
    items: [
      { title: 'Le bois', text: 'Essences, provenance, veinage.' },
      { title: 'Le modèle et la forme', text: 'Un modèle historique ou une forme nouvelle.' },
      { title: 'La sonorité', text: 'Le son recherché, selon votre jeu et votre répertoire.' },
      { title: 'Le vernis', text: 'Sa couleur et sa patine.' },
      { title: 'Le manche', text: 'Sa forme, pour votre main.' },
      { title: 'Les garnitures', text: 'Chevilles, bouton, touche, cordier, mentonnière.' },
      { title: 'Les cordes', text: 'Selon le son et le jeu.' },
      { title: 'Micros et accastillage', text: 'Pour les guitares électriques.' },
    ],
    steps: [
      { title: 'Échanger', text: 'Votre jeu, votre répertoire, le son que vous cherchez.' },
      { title: 'Concevoir', text: 'Le modèle, les gabarits, les dimensions.' },
      { title: 'Choisir les bois', text: 'À l’œil, au poids, au son.' },
      { title: 'Façonner', text: 'Voûtes, éclisses, volute : à la main.' },
      { title: 'Accorder', text: 'Épaisseurs, barre, âme : régler l’acoustique.' },
      { title: 'Vernir', text: 'Couleur, patine, séchage.' },
      { title: 'Essayer', text: 'Montage, réglage, premiers essais avec vous.' },
    ],
    faq: [
      { q: 'Combien de temps faut-il pour fabriquer un instrument ?', a: 'Délais à préciser selon le type d’instrument.', tbc: true },
      { q: 'Peut-on essayer des instruments déjà réalisés ?', a: 'Modalités à préciser.', tbc: true },
    ],
    seo: {
      title: "Fabrication d'instruments sur mesure",
      description: "Violons, violes, guitares et instruments contemporains conçus avec le musicien, du choix des bois au vernis, selon les techniques des XVIIe et XVIIIe siècles.",
    },
    motif: 'fabrication',
  },
];

export const serviceBySlug = Object.fromEntries(services.map((s) => [s.slug, s])) as Record<Service['slug'], Service>;
