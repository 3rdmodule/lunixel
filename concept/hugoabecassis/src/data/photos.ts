/**
 * Manifeste des photographies. Uniquement des photos réelles d'Hugo, de son
 * atelier et de ses instruments :
 * - reportage/… : Aurélie Augé (Hanamatsuri) et Ouest-France, crédités ;
 * - realisations/… : photos d'Hugo publiées sur le site du magasin (le bleu du
 *   drapé et du mur est neutralisé par scripts/retouche-fonds.mjs, avant build).
 * Si un fichier manque, le site affiche un cadre qui décrit la photo à faire.
 * Voir docs/PHOTOS.md.
 */
export interface PhotoSlot {
  /** Chemin dans src/assets/photos/ ou photos-sources/. */
  file?: string;
  /** Ce que montre l'image (lecteurs d'écran, référencement). */
  alt: string;
  /** Légende courte. */
  caption?: string;
  /** Prise de vue à faire, si la photo manque. */
  brief: string;
  /** Largeur / hauteur. */
  ratio: number;
  /** Point focal (object-position). */
  focus?: string;
  /** Photo prise par un tiers : crédit affiché. */
  photographer?: { name: string; url: string };
}

const auge = { name: 'Aurélie Augé', url: 'https://hanamatsuri.fr/en/hugo-abecassis-luthier' };
const ouestFrance = { name: 'Ouest-France', url: 'https://www.maville.com/photosmvi/2026/08/21/P36087647D7447446G.jpg' };

export const photos = {
  /* — Hugo et l'atelier — */
  hero: {
    file: 'reportage/ouest-france-2026.jpg',
    alt: "Hugo Abecassis assis à son établi, devant le mur d'outils et les violons suspendus",
    caption: "À l'établi, 2026",
    brief: "Hugo à l'établi, de trois quarts, instruments en cours autour de lui.",
    ratio: 4 / 3,
    focus: '42% 50%',
    photographer: ouestFrance,
  },
  portrait: {
    file: 'reportage/hanamatsuri-travail.jpg',
    alt: "Hugo Abecassis penché sur son travail, à l'établi",
    caption: "Hugo à l'établi",
    brief: "Hugo au travail, de profil, lumière naturelle.",
    ratio: 4 / 5,
    focus: '26% 50%',
    photographer: auge,
  },
  etabli: {
    file: 'reportage/hanamatsuri-etabli.jpg',
    alt: "L'établi d'Hugo Abecassis sous le mur d'outils : gouges, rabots, gabarits",
    caption: "L'établi et le mur d'outils",
    brief: "Plan large de l'établi et des outils.",
    ratio: 3 / 2,
    focus: '50% 40%',
    photographer: auge,
  },
  etabliDetail: {
    file: 'reportage/hanamatsuri-detail.jpg',
    alt: "Flacons de colle et de vernis, rubans et papiers sur l'établi",
    caption: 'Colles, vernis, papiers',
    brief: "Un coin d'établi, en gros plan.",
    ratio: 4 / 5,
    focus: '55% 55%',
    photographer: auge,
  },

  /* — Instruments d'Hugo — */
  physalis: {
    file: 'realisations/physalis.jpg',
    alt: "Physalis, violon d'amour fabriqué par Hugo Abecassis, vu de face",
    caption: "Physalis, violon d'amour",
    brief: 'Physalis de face, sur fond neutre.',
    ratio: 4 / 5,
    focus: '50% 48%',
  },
  physalisFond: {
    file: 'realisations/physalis-fond.jpg',
    alt: "Fond en érable ondé du violon d'amour Physalis",
    caption: 'Physalis, le fond',
    brief: 'Le fond, en lumière rasante.',
    ratio: 4 / 5,
    focus: '50% 45%',
  },
  physalisOuie: {
    file: 'realisations/physalis-ouie.jpg',
    alt: "Ouïe et chevalet du violon d'amour Physalis",
    caption: 'Physalis, une ouïe',
    brief: 'Une ouïe, très près.',
    ratio: 4 / 5,
  },
  physalisChevillier: {
    file: 'realisations/physalis-chevillier.jpg',
    alt: "Chevillier du violon d'amour Physalis : chevilles et cordes sympathiques",
    caption: 'Physalis, le chevillier',
    brief: 'Le chevillier et ses huit chevilles.',
    ratio: 4 / 5,
    focus: '50% 40%',
  },
  laJazz: {
    file: 'realisations/la-jazz.jpg',
    alt: 'LA Jazz, guitare jazz en épicéa et érable fabriquée par Hugo Abecassis',
    caption: 'LA Jazz, guitare jazz',
    brief: 'La guitare de face.',
    ratio: 4 / 5,
  },
  laJazzTete: {
    file: 'realisations/la-jazz-tete.jpg',
    alt: 'Tête de la guitare LA Jazz : sillet, mécaniques, placage',
    caption: 'LA Jazz, la tête',
    brief: 'La tête et les mécaniques.',
    ratio: 4 / 5,
    focus: '50% 35%',
  },
  laJazzFond: {
    file: 'realisations/la-jazz-fond.jpg',
    alt: 'Fond en érable de la guitare LA Jazz',
    caption: 'LA Jazz, le fond',
    brief: 'Le fond en érable.',
    ratio: 4 / 5,
  },
  pinarbox: {
    file: 'realisations/pinarbox.jpg',
    alt: "Guitare Pinarbox fabriquée dans une ancienne caisse de vin",
    caption: 'Pinarbox, guitare en caisse de vin',
    brief: 'Une Pinarbox, marquages de la caisse lisibles.',
    ratio: 4 / 5,
    focus: '50% 55%',
  },
  pinarboxCaisse: {
    file: 'realisations/pinarbox-caisse.jpg',
    alt: 'Pinarbox : la caisse de vin marquée « Moulin de La Lagune, Haut-Médoc », devenue guitare',
    caption: 'Pinarbox, la caisse',
    brief: 'La caisse de vin, avant et après.',
    ratio: 3 / 2,
  },

  /* — À l'établi, 2015-2016 : une guitare à voûte, étape par étape — */
  e1: { file: 'realisations/etapes/01.jpg', alt: 'Moule de guitare sur l’établi, un plan posé dessus', caption: 'Le moule et le plan · juillet 2015', brief: '', ratio: 4 / 3 },
  e2: { file: 'realisations/etapes/02.jpg', alt: 'Éclisses cintrées dans le moule, tenues par des pinces', caption: 'Les éclisses dans le moule · juillet 2015', brief: '', ratio: 4 / 3 },
  e3: { file: 'realisations/etapes/03.jpg', alt: 'Caisse en collage, entourée de serre-joints en bois', caption: 'Collage, serre-joints tout autour · septembre 2015', brief: '', ratio: 4 / 3 },
  e4: { file: 'realisations/etapes/04.jpg', alt: 'Table de guitare avec ses deux ouïes, parmi les copeaux', caption: 'La table et ses ouïes · novembre 2015', brief: '', ratio: 4 / 3 },
  e5: { file: 'realisations/etapes/05.jpg', alt: 'Table collée sur la caisse, serre-joints tout autour', caption: 'Collage de la table · novembre 2015', brief: '', ratio: 4 / 3 },
  e6: { file: 'realisations/etapes/06.jpg', alt: 'Caisse de guitare terminée, en bois brut', caption: 'La caisse, en blanc · novembre 2015', brief: '', ratio: 3 / 4 },
  e7: { file: 'realisations/etapes/07.jpg', alt: 'Guitare avec son manche, en bois brut, avant vernis', caption: 'Le manche en place · décembre 2015', brief: '', ratio: 3 / 4 },
  e8: { file: 'realisations/etapes/08.jpg', alt: 'Fond de guitare verni, en érable ondé', caption: 'Le vernis · janvier 2016', brief: '', ratio: 4 / 3 },

  /* — Détails d'atelier — */
  volute2015: { file: 'realisations/details/volute-2015.jpg', alt: 'Volute en cours de sculpture, bois brut', caption: 'Une volute en cours · décembre 2015', brief: '', ratio: 4 / 3 },
  volute2016: { file: 'realisations/details/volute-2016.jpg', alt: 'Volute vernie et chevillier sculpté d’un instrument ancien', caption: 'Une volute sculptée · janvier 2016', brief: '', ratio: 4 / 3 },

  /* — Restaurations — */
  rGuitare: { file: 'realisations/restauration/guitare.jpg', alt: 'Guitare ancienne à l’établi, cordes détendues', caption: 'Une guitare Carmencita à l’établi', brief: '', ratio: 4 / 3 },
  rFente: { file: 'realisations/restauration/fente.jpg', alt: 'Fente dans le bois, près du talon du manche', caption: 'Une fente, près du talon', brief: '', ratio: 4 / 3 },
  rTouche: { file: 'realisations/restauration/touche.jpg', alt: 'Touche déposée, table dégagée autour de la bouche', caption: 'La touche déposée', brief: '', ratio: 4 / 3 },
  rPiece: { file: 'realisations/restauration/piece.jpg', alt: 'Pièce de bois taillée, posée près de la bouche de la guitare', caption: 'Une pièce de bois, prête à poser', brief: '', ratio: 4 / 3 },
  rPresses: { file: 'realisations/restauration/presses.jpg', alt: 'Petites presses glissées par la bouche de la guitare', caption: 'Collage, par la bouche', brief: '', ratio: 4 / 3 },
  rEtiquette: { file: 'realisations/restauration/etiquette.jpg', alt: 'Étiquette d’origine vue par la bouche : Carmencita, Mirecourt', caption: 'L’étiquette d’origine : Carmencita, Mirecourt', brief: '', ratio: 4 / 3 },
  rVioloncelle: { file: 'realisations/restauration/violoncelle.jpg', alt: 'Violoncelle ancien ouvert sur l’établi, table déposée', caption: 'Un violoncelle ouvert · juin 2018', brief: '', ratio: 4 / 3 },
} satisfies Record<string, PhotoSlot>;

export type PhotoId = keyof typeof photos;

/** Photographes crédités (mentions légales). */
export const photographerCredits = [
  ...new Map(
    Object.values(photos as Record<string, PhotoSlot>)
      .filter((p) => p.photographer)
      .map((p) => [p.photographer!.name, p.photographer!]),
  ).values(),
];
