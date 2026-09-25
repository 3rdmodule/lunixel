// Pages « Pour qui » : une page par métier, avec ce dont le site a besoin et un exemple.
// activite = valeur pré-remplie dans le formulaire (voir activites dans content.js).

export const metiers = [
  {
    slug: 'institut-beaute',
    guides: ['planity-treatwell-ou-site', 'fiche-google-salon'],
    activite: 'beaute',
    label: 'Instituts et ongleries',
    title: 'Site internet pour institut de beauté et onglerie · Lunixel',
    description: 'Un site pour votre institut ou votre onglerie : vos soins et vos prix, vos réalisations en photo et la réservation en ligne, sans commission.',
    h1: 'Un site d’institut qui donne envie de réserver',
    lead: 'Soins du visage, ongles, épilation : vos clients veulent voir votre travail, connaître vos prix et prendre rendez-vous tout de suite. Votre site permet les trois, depuis leur téléphone.',
    besoins: [
      ['Vos réalisations en photo', 'Poses d’ongles, soins, avant et après : c’est ce qui décide un nouveau client, bien avant les belles phrases.'],
      ['Vos soins et vos prix', 'Chaque prestation avec sa durée et son prix, lisible sur téléphone. Plus besoin d’appeler pour savoir.'],
      ['La réservation en ligne', 'Un agenda Cal.com intégré au site : vos clients choisissent leur créneau à toute heure, sans commission.'],
      ['Vos avis Google', 'Vos meilleurs avis mis en avant, et votre fiche Google alignée avec votre site.'],
    ],
    exemple: 'fabienne-hiot',
    exempleTexte: 'Un exemple : le site en cours d’une naturopathe, avec ses soins et ses tarifs dès l’accueil, et un bouton « Rendez-vous » toujours visible.',
    faq: [
      ['Je poste déjà tout sur Instagram, pourquoi un site ?', 'Instagram montre votre travail, mais Google ne l’affiche presque pas. Le site vous fait trouver par les personnes qui cherchent « onglerie » près de chez elles, et il leur permet de réserver directement.'],
      ['J’utilise déjà Planity ou Treatwell.', 'Vous pouvez garder votre outil : je mets votre lien sur le site. Ou passer à une réservation directement sur votre site, sans commission.'],
    ],
    final: 'Parlons de votre institut.',
  },
  {
    slug: 'coiffure',
    guides: ['planity-treatwell-ou-site', 'fiche-google-salon'],
    activite: 'beaute',
    label: 'Coiffure',
    title: 'Site internet pour salon de coiffure et coiffeuse · Lunixel',
    description: 'Un site pour votre salon de coiffure ou votre activité à domicile : vos prestations, vos coupes en photo et la réservation en ligne, sans commission.',
    h1: 'Un site de salon de coiffure qui remplit votre agenda',
    lead: 'En salon ou à domicile, vos clients veulent savoir ce que vous faites, combien ça coûte et quand vous êtes libre. Votre site leur répond et prend le rendez-vous à votre place.',
    besoins: [
      ['Vos coupes et vos couleurs', 'Une galerie simple de vos réalisations, qui montre votre style en quelques secondes.'],
      ['Vos prestations et vos prix', 'Coupe, couleur, soin, chignon : tout est clair, avant même le premier appel.'],
      ['Réserver sans appeler', 'Vos clients réservent le soir ou entre deux rendez-vous grâce à Cal.com, et vous recevez la réservation sur votre téléphone.'],
      ['Trouvé près de chez vous', '« Coiffeuse à domicile à Lille », « salon de coiffure Villeneuve-d’Ascq » : votre site est construit pour ces recherches.'],
    ],
    exemple: 'fabienne-hiot',
    exempleTexte: 'Un exemple de site pensé pour la prise de rendez-vous : services et tarifs visibles, et un bouton de réservation toujours visible.',
    faq: [
      ['Je travaille à domicile, sans salon.', 'Aucun problème. Le site affiche votre zone d’intervention au lieu d’une adresse, et vos clients réservent le créneau qui vous arrange.'],
      ['J’ai peur de trop de réservations en même temps.', 'C’est vous qui choisissez vos horaires, la durée de chaque prestation et le temps entre deux rendez-vous. L’agenda ne propose que ce qui est libre.'],
    ],
    final: 'Parlons de votre salon.',
  },
  {
    slug: 'sante-bien-etre',
    guides: ['site-naturopathe', 'fiche-google-salon'],
    activite: 'bien-etre',
    label: 'Bien-être et santé naturelle',
    title: 'Site internet pour masseur, naturopathe et bien-être · Lunixel',
    description: 'Un site pour masseur, naturopathe ou praticien du bien-être : rassurer, afficher vos séances et vos tarifs, et prendre rendez-vous en ligne.',
    h1: 'Un site qui rassure avant la première séance',
    lead: 'Avant de réserver un massage ou une consultation, on veut savoir qui vous êtes, comment se passe une séance et combien ça coûte. Votre site répond à tout, simplement, et donne envie de franchir le pas.',
    besoins: [
      ['Qui vous êtes', 'Votre parcours, vos formations et votre façon de travailler, racontés simplement. C’est ce qui crée la confiance.'],
      ['Les séances et les tarifs', 'Ce que vous proposez, la durée et le prix. Sans avoir à appeler pour le savoir.'],
      ['Prendre rendez-vous', 'Au cabinet, à domicile ou en visio : vos clients réservent en ligne via Cal.com et reçoivent une confirmation.'],
      ['Des mots justes', 'Des textes clairs et prudents, sans promesse de résultat. Je vous aide à les écrire.'],
    ],
    exemple: 'fabienne-hiot',
    exempleTexte: 'Un exemple : le site en cours d’une naturopathe, avec ses soins et ses tarifs dès l’accueil, et le premier contact gratuit mis en avant.',
    faq: [
      ['J’utilise déjà un agenda en ligne.', 'Je le relie au site : vos clients prennent rendez-vous sans le quitter, et vous gardez votre agenda habituel.'],
      ['Que puis-je écrire sur mes pratiques ?', 'Ce que vous proposez, comment se passe une séance, votre formation. On évite les promesses de guérison : c’est plus honnête, et plus rassurant.'],
    ],
    final: 'Parlons de votre cabinet.',
  },
  {
    slug: 'commerce',
    guides: ['fiche-google-salon', 'prix-site-internet'],
    activite: 'commerce',
    label: 'Boutiques',
    title: 'Site internet pour boutique et commerce · Lunixel',
    description: 'Un site pour votre boutique : horaires et adresse en premier, vos produits phares, et de bonnes raisons de passer vous voir.',
    h1: 'Un site de boutique qui donne envie de pousser la porte',
    lead: 'Pour un commerce, le site sert d’abord à faire venir en magasin. On doit savoir en un coup d’œil si vous êtes ouvert, où vous êtes, et ce qu’on va trouver chez vous.',
    besoins: [
      ['Ouvert ou fermé ?', 'Les horaires du jour et l’adresse en haut de chaque page, avec l’itinéraire en un geste.'],
      ['Vos produits', 'De quelques produits phares à un catalogue complet, selon ce qui vous convient.'],
      ['Les nouveautés', 'Arrivages, événements, fermetures : une petite rubrique que vous tenez à jour, ou que je mets à jour pour vous.'],
      ['Vendre en ligne, si c’est utile', 'Réservation en boutique, retrait sur place ou vente en ligne : je vous dis franchement ce qui vaut le coup pour votre commerce.'],
    ],
    exemple: 'le-domaine-musical',
    exempleTexte: 'Un exemple : le concept imaginé pour un magasin de musique, avec ses 227 instruments consultables en ligne et « Ouvert aujourd’hui jusqu’à 19 h » en haut de chaque page.',
    faq: [
      ['Faut-il forcément une boutique en ligne ?', 'Non. Souvent, montrer vos produits et donner envie de passer suffit. Si la vente en ligne vaut le coup pour vous, je vous le dis, et on la met en place.'],
      ['Mon stock change tout le temps.', 'On peut montrer une sélection qui bouge peu, ou un catalogue que vous mettez à jour vous-même. On choisit ensemble ce qui vous prendra le moins de temps.'],
    ],
    final: 'Parlons de votre boutique.',
  },
];

export const metierPath = (m) => `/metiers/${m.slug}/`;
