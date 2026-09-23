/**
 * Manifeste des photographies.
 *
 * Chaque emplacement décrit la photo attendue (brief). Si le fichier `file`
 * existe dans src/assets/photos/, il est affiché (AVIF/WebP responsives) ;
 * sinon, le site affiche un « cadre de prise de vue » qui décrit la photo
 * à réaliser. Pour remplacer un cadre : déposer le fichier avec le bon nom.
 *
 * Voir docs/PHOTOS.md pour la liste des prises de vue et les formats.
 */
export type Tone = 'light' | 'dark';

export interface PhotoSlot {
  /** Nom du fichier dans src/assets/photos/ (jpg, png, webp ou avif). */
  file?: string;
  /** Texte alternatif : ce que montre l'image (lecteurs d'écran, SEO). */
  alt: string;
  /** Légende courte, affichée sous l'image. */
  caption?: string;
  /** Brief photographique affiché tant que la photo n'existe pas. */
  brief: string;
  /** Ratio largeur / hauteur (ex. 4/5). */
  ratio: number;
  tone?: Tone;
  /** Point focal pour le recadrage (CSS object-position). */
  focus?: string;
}

export const photos = {
  /* — Accueil — */
  hero: {
    file: 'hero.jpg',
    alt: "Hugo Abecassis au travail à l'établi, penché sur un instrument",
    caption: "À l'établi",
    brief: "Hugo à l'établi, de trois quarts, le regard sur le travail. Lumière d'une fenêtre, fond sombre, mains nettes.",
    ratio: 3 / 2,
    tone: 'dark',
    focus: '60% 40%',
  },
  portrait: {
    file: 'portrait-hugo.jpg',
    alt: 'Portrait de Hugo Abecassis dans son atelier',
    caption: 'Hugo Abecassis',
    brief: "Portrait simple, regard caméra ou de profil, tablier, lumière naturelle. Pas de pose d'instrument sous le menton.",
    ratio: 4 / 5,
  },
  mains: {
    file: 'atelier/20151201-153230__2492.jpg',
    alt: "Volute d'instrument en cours de sculpture, à l'établi",
    caption: "Une volute en cours",
    focus: '40% 50%',
    brief: 'Gros plan : les mains, une gouge, une volute à moitié creusée. Copeaux sur l’établi.',
    ratio: 4 / 5,
  },

  /* — Savoir-faire — */
  entretien: {
    file: 'atelier/l1030497__2545.jpg',
    alt: "Rosace et touche d'une guitare, à l'atelier",
    caption: "Une guitare à l'établi",
    focus: '50% 50%',
    brief: "La photo signature : le pose-âme passé par l'ouïe d'un violon. Lumière rasante sur le vernis.",
    ratio: 4 / 5,
    tone: 'dark',
  },
  restauration: {
    file: 'atelier/l1030505__2548.jpg',
    alt: "Guitare au vernis écaillé, avant restauration",
    caption: "Avant restauration",
    focus: '60% 50%',
    brief: 'Instrument ouvert, table posée à côté, fracture en cours de collage, petits serre-joints.',
    ratio: 4 / 5,
  },
  fabrication: {
    file: 'atelier/20151112-083707__2488.jpg',
    alt: "Caisse de guitare jazz en blanc, avant vernis, devant le mur d'outils",
    caption: "Une guitare jazz en blanc",
    focus: '50% 40%',
    brief: "Bois refendus, marquages au crayon, un gabarit posé dessus. Vue de haut, lumière douce.",
    ratio: 4 / 5,
  },

  /* — Créations (photos existantes à importer, voir docs/PHOTOS.md) — */
  physalis: {
    file: 'physalis/14--1-__5071.jpg',
    alt: "Violon d'amour Physalis fabriqué par Hugo Abecassis, vue de face",
    caption: "Physalis, violon d'amour, 2016",
    focus: '50% 45%',
    brief: "Physalis en contre-jour sur fond neutre : volute et cordes sympathiques visibles.",
    ratio: 4 / 5,
    tone: 'dark',
  },
  physalisDetail: {
    file: 'physalis-detail.jpg',
    alt: "Détail du chevillier du violon d'amour Physalis",
    caption: 'Physalis, chevillier',
    brief: 'Détail : chevillier et départ des cordes sympathiques.',
    ratio: 1,
  },
  ramino: {
    file: 'ramino.jpg',
    alt: 'Quinton Ramino de forme contemporaine',
    caption: 'Ramino, quinton, 2015',
    brief: 'Ramino de trois quarts, pour lire la forme nouvelle de la caisse.',
    ratio: 4 / 5,
  },
  laJazz: {
    file: 'la-jazz/lutherie-abecassis-la-jazz--3-__4576.jpg',
    alt: 'Guitare jazz LA Jazz en épicéa et érable, fabriquée par Hugo Abecassis',
    caption: "LA Jazz, guitare",
    focus: '50% 50%',
    brief: 'La guitare jazz de face, puis la table en lumière rasante pour la voûte et les ouïes.',
    ratio: 4 / 5,
  },
  pinarbox: {
    file: 'pinarbox-folk/20190214-112421__2959.jpg',
    alt: "Guitare Pinarbox fabriquée à partir d'une ancienne caisse de vin",
    caption: 'Pinarbox, guitare en caisse de vin',
    focus: '50% 55%',
    brief: "Une Pinarbox, les marquages de la caisse de vin bien lisibles.",
    ratio: 4 / 5,
  },
  lyra: {
    alt: 'Lyra crétoise fabriquée par Hugo Abecassis',
    caption: 'Lyra, 2015',
    brief: 'La lyra posée à plat, vue de haut.',
    ratio: 4 / 5,
  },
  nova: {
    alt: 'Contrebasse de petit format Nova',
    caption: 'Nova, contrebasse',
    brief: 'La contrebasse debout, en entier, pour son petit format.',
    ratio: 4 / 5,
  },
  petiteFaive: {
    alt: 'Guitare manouche Petite Faive',
    caption: 'Petite Faive, guitare manouche',
    brief: 'La petite bouche et le manche fin, de trois quarts.',
    ratio: 4 / 5,
  },
  harpeUkulele: {
    alt: 'Harpe-ukulélé fabriquée par Hugo Abecassis',
    caption: 'Harpe-ukulélé',
    brief: "L'instrument entier, sur fond neutre.",
    ratio: 4 / 5,
  },
  vgTal: {
    alt: 'Guitare électrique VG Tal',
    caption: 'VG Tal, guitare électrique',
    brief: 'Vue de face, puis détail de la tête.',
    ratio: 4 / 5,
  },
  fender: {
    alt: 'Basse Fender Precision de 1973 pendant sa remise en forme',
    caption: 'Fender Precision Bass, 1973',
    brief: 'Avant / après de la remise en forme : manche, frettes, électronique.',
    ratio: 4 / 5,
  },

  /* — Atelier : chapitres — */
  lieu: {
    file: 'atelier-lieu.jpg',
    alt: "Vue d'ensemble de l'atelier, établi et instruments en cours",
    caption: 'Le lieu',
    brief: "Plan large de l'atelier : l'établi sous la fenêtre, des instruments en attente, la lumière du jour.",
    ratio: 16 / 9,
    tone: 'dark',
  },
  matiere: {
    file: 'atelier/20160121-184312__2499.jpg',
    alt: "Intérieur d'une caisse en cours de collage : le grain de l'épicéa et les serre-joints",
    caption: "Épicéa, serre-joints",
    focus: '50% 50%',
    brief: "Copeaux d'épicéa, planche d'érable ondé, un morceau d'ébène. Très près, on doit sentir le grain.",
    ratio: 4 / 5,
  },
  outils: {
    file: 'atelier/manufactures-hugo-07__2478.jpg',
    alt: "Hugo Abecassis au travail à l'établi, devant le mur d'outils",
    caption: "L'établi",
    focus: '50% 45%',
    brief: 'Outils à main alignés, vus de haut, en lumière rasante : gouges, petits rabots, canifs, racloirs.',
    ratio: 3 / 2,
  },
  gestes: {
    file: 'atelier/20150923-182004__2484.jpg',
    alt: "Caisse d'instrument en cours de collage, maintenue par des dizaines de serre-joints",
    caption: "Collage sous serre-joints",
    focus: '50% 50%',
    brief: "Le racloir sur une voûte, en mouvement léger. Le geste plus que le visage.",
    ratio: 4 / 5,
    tone: 'dark',
  },
  temps: {
    file: 'atelier/20151104-120738__2486.jpg',
    alt: "Table de guitare jazz avec ses ouïes, posée sur l'établi parmi les copeaux",
    caption: "Une table, avant vernis",
    focus: '50% 50%',
    brief: 'Instruments « en blanc » suspendus, en attente du vernis. Une image calme.',
    ratio: 4 / 5,
  },
  vernis: {
    alt: 'Pinceau et pots de vernis sur un établi',
    caption: 'Le vernis',
    brief: 'Pots, pigments, pinceau. Une touche de garance si possible.',
    ratio: 1,
  },

  /* — Atelier : mur de détails — */
  d1: { file: 'atelier/l1030498__2546.jpg', alt: "Rosace et filets autour de la bouche d'une guitare", caption: "Rosace", brief: 'Les filets en bord de table, très près.', ratio: 3 / 4 },
  d2: { file: 'physalis/violon-damour-physalis--3-__2636.jpg', alt: "Ouïe du violon d'amour Physalis", caption: "Ouïe", brief: 'Une ouïe en f, lumière rasante.', ratio: 1 },
  d3: { alt: 'Copeaux d’épicéa sur l’établi', caption: 'Copeaux', brief: 'Copeaux fins, en boucle, sur le bois sombre de l’établi.', ratio: 4 / 5 },
  d4: { file: 'physalis/14--2-__5072.jpg', alt: "Chevillier et chevilles du violon d'amour Physalis", caption: "Chevilles", brief: 'Chevilles d’ébène dans le chevillier.', ratio: 3 / 4 },
  d5: { file: 'atelier/20160301-153231__2502.jpg', alt: "Moule de guitare avec ses éclisses", caption: "Le moule", brief: 'Gabarits et moules au mur, en ombres.', ratio: 1 },
  d6: { alt: 'Crayon et compas sur un plan d’instrument', caption: 'Le tracé', brief: 'Plan, crayon, compas, règle.', ratio: 4 / 5 },
  d7: { file: 'atelier/20160102-122520__2494.jpg', alt: "Fond d'instrument fraîchement verni", caption: "Vernis", brief: 'Reflet du vernis frais à la fenêtre.', ratio: 3 / 4 },
  d8: { file: 'la-jazz/20181229-115131__2340.jpg', alt: "Tête de la guitare LA Jazz", caption: "La tête", brief: 'Chevalet brut et chevalet taillé, côte à côte.', ratio: 1 },
  d9: { file: 'pinarbox-folk/20190214-112418__2958.jpg', alt: "Pinarbox : la caisse de vin et son étiquette, devenue guitare", caption: "Caisse de vin", brief: 'Une caisse de vin ancienne, avant sa transformation.', ratio: 3 / 2 },

  /* — Partenaires — */
  partenaire1: { alt: 'Musicien partenaire jouant un instrument', brief: 'Le musicien avec son instrument, en répétition ou en concert. Photo fournie par l’artiste, crédit à indiquer.', ratio: 4 / 5 },
  partenaire2: { alt: 'Groupe partenaire', brief: 'Le groupe, photo officielle ou prise à l’atelier lors d’un réglage.', ratio: 4 / 5 },
  partenaire3: { alt: 'Professionnel partenaire', brief: 'Portrait du professionnel (école de musique, ensemble, studio…).', ratio: 4 / 5 },
} satisfies Record<string, PhotoSlot>;

export type PhotoId = keyof typeof photos;
