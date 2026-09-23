// Les travaux de Lunixel. « realisation » = site livré et en ligne ; « concept » = site imaginé sans commande.
// Les captures sont générées automatiquement au déploiement (scripts/prebuild.mjs) à partir de captureUrl.

export const projects = [
  {
    slug: '3rd-records',
    kind: 'realisation',
    name: '3rd Records',
    business: 'Label de musique indépendant',
    place: 'France',
    url: 'https://3rdrecords.com/',
    captureUrl: 'https://3rdrecords.com/',
    tagline: 'Un label qui se visite comme on pose un disque.',
    metaDescription: 'Le site du label 3rd Records : une platine à faire tourner, un lecteur toujours visible et un catalogue lisible par Google. Étude de cas Lunixel.',
    summary:
      'Le site d’un label pop, lofi et hip-hop : une platine à faire tourner du bout du doigt, un lecteur toujours à portée, et un catalogue que Google comprend.',
    services: ['Conception', 'Direction artistique du site', 'Développement', 'Référencement technique'],
    tech: ['HTML', 'CSS', 'JavaScript natif', 'Données structurées'],
    need:
      'Un label indépendant a besoin d’un lieu à lui : présenter ses sorties et ses artistes, recevoir des démos, et donner envie d’écouter. Sans ressembler à une page de plateforme de streaming.',
    decisions: [
      {
        title: 'La platine d’accueil',
        text: 'Le site s’ouvre sur un vinyle qu’on peut « scratcher » à la souris ou au doigt. En une seconde, on sait qu’on est chez un label, pas sur un catalogue en ligne.',
      },
      {
        title: 'Le lecteur toujours accessible',
        text: 'La dernière sortie reste épinglée en bas de l’écran, avec les liens d’écoute. Où que l’on soit sur le site, on est à un clic de la musique.',
      },
      {
        title: 'Un catalogue lisible par Google',
        text: 'Sorties, artistes et presse sont décrits avec des données structurées : les moteurs de recherche comprennent qui est qui, et ce qui est sorti quand.',
      },
    ],
    facts: [
      ['Rubriques', 'Sortie, catalogue, artistes, presse, démos, contact'],
      ['Écoute', 'Spotify, Apple Music, Deezer, Tidal'],
      ['Code', 'Un seul script maison, sans framework'],
    ],
    palette: { bg: '#1D1D1B', fg: '#F2EDE4', accent: '#F4A21C' },
  },
  {
    slug: 'nube-games',
    kind: 'realisation',
    name: 'Nube Games',
    business: 'Studio indépendant de jeux de société',
    place: 'France',
    url: 'https://nubegames.fr/',
    captureUrl: 'https://nubegames.fr/',
    extraCaptures: [{ key: 'jeu', url: 'https://nubegames.fr/fields-of-fire/', label: 'Le jeu Fields of Fire, jouable dans le navigateur' }],
    tagline: 'Un jeu de société qui se joue avant même d’être imprimé.',
    metaDescription: 'Le site de Nube Games et son jeu Fields of Fire, jouable gratuitement en ligne de 3 à 6 joueurs. Étude de cas Lunixel.',
    summary:
      'Le site du studio et son premier jeu, Fields of Fire, jouable gratuitement dans le navigateur : de 3 à 6 joueurs, sur un même écran ou à distance avec un code de salon.',
    services: ['Développement du site', 'Développement du jeu en ligne', 'Version bilingue'],
    tech: ['HTML', 'CSS', 'JavaScript natif en modules', 'Canvas', 'Multijoueur en ligne'],
    need:
      'Un jeu de société en cours de création doit être joué, beaucoup, pour que ses règles s’affinent. Il fallait pouvoir le tester avec de vrais joueurs, à distance comme autour d’une table, et raconter l’avancée du projet.',
    decisions: [
      {
        title: 'Jouer sans rien installer',
        text: 'Le prototype se lance dans le navigateur, gratuitement et sans inscription. Plateau, cartes, règles, glossaire et chronique de la partie : tout le jeu est là.',
      },
      {
        title: 'À distance ou sur le même écran',
        text: 'On crée un salon, on partage un code, et jusqu’à six dirigeants s’affrontent depuis leur ordinateur. Ou bien on joue à plusieurs sur un seul écran.',
      },
      {
        title: 'Un site qui raconte le jeu « tour par tour »',
        text: 'La feuille de route se lit comme une partie : prototype, playtests, jeu en ligne… Et un formulaire invite à « rejoindre la table » pour tester le jeu.',
      },
    ],
    facts: [
      ['Joueurs', 'De 3 à 6, même écran ou à distance'],
      ['Accès', 'Gratuit, sans inscription'],
      ['Langues', 'Français et anglais'],
    ],
    note: 'Les illustrations du prototype sont provisoires.',
    palette: { bg: '#0B0712', fg: '#F5EEF8', accent: '#D946A8' },
  },
  {
    slug: 'hugo-abecassis',
    kind: 'concept',
    name: 'Hugo Abecassis',
    business: 'Luthier',
    place: 'Normandie',
    prototypeUrl: 'https://lunixel.fr/concept/hugoabecassis/',
    captureUrl: 'https://lunixel.fr/concept/hugoabecassis/',
    captureScheme: 'dark',
    question: 'Et si on montrait enfin le travail qui ne se voit pas ?',
    metaDescription: 'Concept de site pour Hugo Abecassis, luthier : entretien, restauration et fabrication d’instruments à cordes, montrés comme des notes d’atelier.',
    tagline: 'Le meilleur travail d’un luthier ne se remarque qu’à l’oreille.',
    summary:
      'Un concept pour un luthier formé aux techniques anciennes, qui règle, restaure et invente des instruments à cordes, jusqu’à des guitares faites dans des caisses de vin.',
    observation:
      'Une restauration réussie se fond dans l’instrument, un bon réglage ne se voit pas. Le site devait montrer ce travail invisible, sans tomber dans le cliché de l’établi et des outils au mur.',
    choices: [
      ['L’âme', 'Dans un violon, l’âme est une petite baguette cachée qui fait sonner l’instrument. Sur le site, elle devient un simple trait fin, et beaucoup de vide.'],
      ['Trois portes d’entrée', 'Entretien, restauration, fabrication : chacun trouve tout de suite ce qui le concerne.'],
      ['Les créations', 'Un violon d’amour, une guitare jazz, des guitares en caisses de vin, présentés comme des fiches d’atelier.'],
      ['Un seul bouton', '« Prendre rendez-vous », avec le motif déjà rempli selon la page d’où l’on vient.'],
    ],
    style: 'Ivoire, encre et une touche de garance, un rouge des vernis anciens ; Instrument Serif, Instrument Sans et une police mono pour les notes d’atelier.',
    apercu: { kicker: 'Luthier · Normandie', title: 'Hugo Abecassis, luthier', sub: 'Entretien, restauration et fabrication d’instruments à cordes.', btn: 'Prendre rendez-vous' },
    palette: { bg: '#151412', fg: '#F3F0E8', accent: '#D7866D' },
  },
  {
    slug: 'le-domaine-musical',
    kind: 'concept',
    accord: true, // L'entreprise a donné son accord pour être présentée
    name: 'Le Domaine Musical',
    business: 'Pianos et lutherie Lechevallier',
    place: 'Saint-Lô',
    prototypeUrl: 'https://3rdmodule.com/concept/pianoslechevallier',
    captureUrl: 'https://3rdmodule.com/concept/pianoslechevallier',
    captureScheme: 'dark',
    question: 'Et si les 227 instruments du magasin se visitaient depuis le canapé ?',
    metaDescription: 'Concept de site pour Le Domaine Musical à Saint-Lô : 227 instruments consultables en ligne, horaires et contact à portée de pouce.',
    tagline: 'Un magasin spécialisé, un catalogue vivant.',
    summary:
      'Un concept de refonte pour un magasin de pianos et d’instruments à cordes : tout le stock en ligne, les ateliers, l’histoire de la maison et l’envie de venir essayer.',
    observation:
      'Un magasin spécialisé vit de son stock, de ses ateliers et de sa réputation. En ligne, tout cela doit se voir en quelques secondes : ce qu’il y a en magasin, quand on peut venir, et pourquoi on peut faire confiance.',
    choices: [
      ['Le catalogue', '227 instruments rangés par familles (pianos, quatuor à cordes, guitares, créations de l’atelier) et 65 fabricants.'],
      ['L’envie de venir', '« Ouvert aujourd’hui jusqu’à 19 h » en haut de chaque page, l’adresse et le téléphone à portée de pouce.'],
      ['La confiance', 'L’histoire de l’atelier racontée par son fondateur, les services détaillés et les avis Google.'],
      ['Pour tous', 'Français et anglais, thème clair ou sombre, favoris et recherche.'],
    ],
    style: 'Bleu nuit feutré, Cormorant Garamond et Manrope : l’atmosphère d’une salle d’exposition.',
    palette: { bg: '#141A2E', fg: '#EFE9DC', accent: '#C9A96A' },
  },
  {
    slug: 'fabienne-hiot',
    kind: 'concept',
    accord: true, // L'entreprise a donné son accord pour être présentée
    name: 'Fabienne Hiot',
    business: 'Naturopathe',
    place: 'Agay, Saint-Raphaël',
    prototypeUrl: 'https://3rdmodule.com/concept/fabiennehiot/',
    captureUrl: 'https://3rdmodule.com/concept/fabiennehiot/',
    question: 'Et si prendre rendez-vous prenait dix secondes ?',
    metaDescription: 'Concept de site pour Fabienne Hiot, naturopathe à Agay : les soins et leurs tarifs dès l’accueil, et un rendez-vous pris en dix secondes.',
    tagline: 'Rassurer avant le premier rendez-vous.',
    summary:
      'Un concept pour une naturopathe : qui elle est, ce qu’elle propose, combien ça coûte et comment la joindre, le tout sous le pouce.',
    observation:
      'Avant un premier rendez-vous, on a besoin d’être rassuré : qui est la praticienne, ce qu’elle propose, combien ça coûte, et comment la joindre. Sur un téléphone, tout cela doit tenir sous le pouce.',
    choices: [
      ['Sous le pouce', 'Une barre fixe « Appeler / Rendez-vous » en bas de l’écran du téléphone.'],
      ['Les prix, tout de suite', 'Les soins et leurs tarifs sont visibles dès l’accueil.'],
      ['Le premier pas', 'Le premier contact gratuit de 15 minutes est mis en avant.'],
      ['La confiance', 'Le parcours, les diplômes et les avis sont à un geste.'],
    ],
    style: 'Vert sauge, crème et lumière de l’Estérel ; Fraunces, Figtree et une écriture manuscrite pour la signature.',
    palette: { bg: '#FBF7F3', fg: '#2F3B2F', accent: '#3F6B4A' },
  },
];

export const realisations = projects.filter((p) => p.kind === 'realisation');
export const concepts = projects.filter((p) => p.kind === 'concept');
export const projectPath = (p) => `/${p.kind === 'realisation' ? 'realisations' : 'concepts'}/${p.slug}/`;
