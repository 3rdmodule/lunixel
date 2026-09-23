// Pages « Pour qui » : une page par métier, avec ce dont le site a besoin et un exemple.
// activite = valeur pré-remplie dans le formulaire de contact (voir activites dans content.js).

export const metiers = [
  {
    slug: 'artisan',
    activite: 'artisan',
    label: 'Artisans',
    title: 'Création de site internet pour artisan · Lunixel',
    description: 'Un site pour votre activité d’artisan : vos réalisations en photo, votre zone d’intervention et une demande de devis simple. Dès 200 €.',
    h1: 'Un site d’artisan qui montre votre travail avant qu’on vous appelle',
    lead: 'Quand quelqu’un cherche un menuisier, un plombier ou un luthier, il veut voir ce que vous faites, savoir si vous intervenez chez lui et vous joindre vite. Votre site doit répondre à ces trois questions en quelques secondes.',
    besoins: [
      ['Vos réalisations en photo', 'Des chantiers ou des pièces terminées, classés simplement. C’est ce qui convainc le plus, bien avant les belles phrases.'],
      ['Votre zone d’intervention', 'Les villes où vous travaillez, écrites en toutes lettres. C’est aussi ce qui vous fait apparaître dans les recherches autour de chez vous.'],
      ['Une demande de devis sans prise de tête', 'Un formulaire court, avec juste ce qu’il faut pour chiffrer. Et votre téléphone visible sur chaque page, pour ceux qui préfèrent appeler.'],
      ['Votre fiche Google à jour', 'Horaires, photos, avis : je m’assure que votre fiche et votre site disent la même chose.'],
    ],
    exemple: 'hugo-abecassis',
    exempleTexte: 'Un exemple : le concept imaginé pour un luthier, avec ses trois métiers (entretien, restauration, fabrication) et ses créations présentées comme des fiches d’atelier.',
    faq: [
      ['Je n’ai pas de belles photos de mes chantiers, c’est grave ?', 'Non. On commence avec ce que vous avez, et je vous explique comment prendre les prochaines avec votre téléphone : la lumière, le cadrage, l’avant et l’après.'],
      ['Je suis tout le temps sur les chantiers, je n’ai pas le temps de m’en occuper.', 'C’est prévu pour. Je vous pose mes questions en un appel, j’écris les textes avec vous, et ensuite vous m’envoyez un message quand quelque chose change.'],
    ],
    final: 'Parlons de votre atelier.',
  },
  {
    slug: 'restaurant',
    activite: 'restaurant',
    label: 'Restaurants',
    title: 'Site internet pour restaurant · Lunixel',
    description: 'Un site pour votre restaurant : la carte à jour, les horaires, l’accès et la réservation, parfaits sur téléphone. Dès 200 €.',
    h1: 'Un site de restaurant qu’on consulte en marchant dans la rue',
    lead: 'La plupart des gens regardent votre site sur leur téléphone, souvent à quelques rues de chez vous. Ils cherchent quatre choses : la carte, les horaires, comment venir, et comment réserver.',
    besoins: [
      ['Une carte toujours à jour', 'Lisible sur téléphone, sans PDF à télécharger. Vous changez de carte ? Vous me l’envoyez, ou je vous montre comment le faire en deux minutes.'],
      ['Horaires et fermetures', 'Les horaires du jour en haut de page, et les fermetures exceptionnelles bien visibles, pour ne pas décevoir.'],
      ['Réserver sans chercher', 'Un bouton qui mène à votre outil de réservation si vous en avez un, ou un simple formulaire qui vous arrive par e-mail. Et le téléphone en un geste.'],
      ['Donner faim', 'Des photos de vos plats et de la salle, et quelques mots sur votre cuisine. C’est ce qui fait choisir votre table plutôt qu’une autre.'],
    ],
    exemple: null,
    exempleTexte: '',
    faq: [
      ['Je change ma carte toutes les semaines.', 'Aucun problème. Soit vous la modifiez vous-même depuis un écran simple, soit vous me l’envoyez et je la mets à jour : c’est compris dans l’accompagnement mensuel.'],
      ['J’utilise déjà un outil de réservation.', 'Je l’intègre au site. Vos clients réservent sans changer de page, et vous gardez votre outil habituel.'],
    ],
    final: 'Parlons de votre restaurant.',
  },
  {
    slug: 'sante-bien-etre',
    activite: 'sante-bien-etre',
    label: 'Santé et bien-être',
    title: 'Site internet pour thérapeute et praticien bien-être · Lunixel',
    description: 'Un site pour thérapeute, naturopathe ou praticien bien-être : rassurer, afficher vos tarifs et permettre de prendre rendez-vous en ligne.',
    h1: 'Un site qui rassure avant le premier rendez-vous',
    lead: 'Avant de réserver une première séance, on a besoin de savoir qui vous êtes, comment se passe un rendez-vous et combien ça coûte. Votre site doit répondre à tout ça, simplement, et donner envie de franchir le pas.',
    besoins: [
      ['Qui vous êtes', 'Votre parcours, vos formations et votre façon de travailler, racontés simplement. C’est ce qui crée la confiance.'],
      ['Les séances et les tarifs', 'Ce que vous proposez, comment se passe une séance, combien de temps et à quel prix. Sans avoir à appeler pour le savoir.'],
      ['Prendre rendez-vous', 'Votre agenda en ligne intégré au site, ou un lien direct vers celui que vous utilisez déjà. Au cabinet, à domicile ou en visio.'],
      ['Des mots justes', 'Des textes clairs et prudents, sans promesse de résultat. Je vous aide à les écrire.'],
    ],
    exemple: 'fabienne-hiot',
    exempleTexte: 'Un exemple : le concept imaginé pour une naturopathe, avec les soins et leurs tarifs dès l’accueil, et un bouton « Rendez-vous » toujours sous le pouce.',
    faq: [
      ['J’utilise déjà un agenda en ligne.', 'Je l’intègre au site : vos patients prennent rendez-vous sans le quitter, et vous gardez votre agenda habituel.'],
      ['Que puis-je écrire sur mes pratiques ?', 'Ce que vous proposez, comment se passe une séance, votre formation. On évite les promesses de guérison : c’est plus honnête, et plus rassurant.'],
    ],
    final: 'Parlons de votre cabinet.',
  },
  {
    slug: 'commerce',
    activite: 'commerce',
    label: 'Commerces',
    title: 'Site internet pour commerce et boutique · Lunixel',
    description: 'Un site pour votre boutique : horaires et adresse en premier, vos produits phares, et de bonnes raisons de passer vous voir. Dès 200 €.',
    h1: 'Un site de boutique qui donne envie de pousser la porte',
    lead: 'Pour un commerce, le site sert d’abord à faire venir en magasin. On doit savoir en un coup d’œil si vous êtes ouvert, où vous êtes, et ce qu’on va trouver chez vous.',
    besoins: [
      ['Ouvert ou fermé ?', 'Les horaires du jour et l’adresse en haut de chaque page, avec l’itinéraire en un geste.'],
      ['Vos produits', 'De quelques produits phares à un catalogue complet, selon ce qui a du sens pour vous.'],
      ['Les nouveautés', 'Arrivages, événements, fermetures : une petite rubrique que vous pouvez tenir à jour, ou que je mets à jour pour vous.'],
      ['Vendre en ligne, si ça a du sens', 'Réservation en boutique, retrait sur place ou vente en ligne : je vous dis franchement ce qui vaut le coup pour votre commerce.'],
    ],
    exemple: 'le-domaine-musical',
    exempleTexte: 'Un exemple : le concept imaginé pour un magasin de musique, avec ses 227 instruments consultables en ligne et « Ouvert aujourd’hui jusqu’à 19 h » en haut de chaque page.',
    faq: [
      ['Faut-il forcément une boutique en ligne ?', 'Non. Souvent, montrer vos produits et donner envie de passer suffit. Si la vente en ligne a du sens pour vous, je vous le dis, et on la met en place.'],
      ['Mon stock change tout le temps.', 'On peut montrer une sélection qui bouge peu, ou un catalogue que vous mettez à jour vous-même. On choisit ensemble ce qui vous prendra le moins de temps.'],
    ],
    final: 'Parlons de votre boutique.',
  },
];

export const metierPath = (m) => `/metiers/${m.slug}/`;
