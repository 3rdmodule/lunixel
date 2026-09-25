// Guides : des articles utiles aux petites entreprises, qui répondent aux questions posées sur Google.
// sections[].html est du HTML simple (p, ul, ol, strong, a). Les liens internes finissent par « / ».
// Dates au format AAAA-MM-JJ. updated = dernière vraie mise à jour du contenu.

export const author = { name: 'Awen Vannier', url: '/a-propos/' };

export const guides = [
  {
    slug: 'prix-site-internet',
    title: 'Combien coûte un site internet en 2026 ? · Lunixel',
    h1: 'Combien coûte un site internet en 2026 ?',
    description: 'Prix d’un site vitrine en 2026 selon le prestataire, frais annuels, pièges à éviter et calcul sur trois ans : le guide des artisans et indépendants.',
    kicker: 'Prix et budget',
    card: 'Les vraies fourchettes de prix, les frais cachés et la bonne façon de comparer deux devis.',
    og: 'Combien coûte un site internet <em>en 2026</em> ?',
    published: '2026-09-25',
    updated: '2026-09-25',
    minutes: 6,
    intro: 'Entre 0 € et 6 000 €, les prix annoncés pour un site internet vont du simple au centuple. La différence ne tient pas qu’au prestataire : elle dépend surtout de ce que vous payez chaque mois ensuite, et de qui possède le site. Voici comment y voir clair.',
    sections: [
      {
        h2: 'Les fourchettes de prix en 2026',
        html: `<p>Pour un site vitrine (quelques pages qui présentent votre activité), les études publiées cette année donnent des ordres de grandeur assez proches :</p>
<ul>
<li><strong>Outils à faire soi-même</strong> (Wix, iPaoo et équivalents) : de gratuit à 50 € par mois, selon les options.</li>
<li><strong>Freelance</strong> : de 300 à 3 000 € environ, selon le nombre de pages et le niveau de personnalisation.</li>
<li><strong>Agence web</strong> : de 1 000 à 6 000 €, avec souvent un travail de stratégie et de contenu en plus.</li>
</ul>
<p>Le prix moyen d’un site vitrine créé par un professionnel se situe entre 1 500 et 3 000 €, selon <a href="https://www.ipaoo.fr/creer-un-site-vitrine/prix/" rel="noopener">l’étude d’Ipaoo publiée en mai 2026</a>. <a href="https://fenxi.fr/blog/combien-coute-site-internet-2026-prix-delais/" rel="noopener">Fenxi</a> situe les freelances entre 800 et 3 000 € HT et les agences entre 2 000 et 6 000 € HT.</p>`,
      },
      {
        h2: 'Les frais qui reviennent chaque année',
        html: `<p>Le prix de création n’est qu’une partie de la facture. Un site a aussi des frais qui reviennent :</p>
<ul>
<li><strong>Le nom de domaine</strong> (votre adresse, comme <em>votre-salon.fr</em>) : de 7 à 15 € par an.</li>
<li><strong>L’hébergement</strong> (l’endroit où le site est stocké) : de quelques euros à plus de 100 € par mois selon la formule.</li>
<li><strong>L’entretien</strong> (mises à jour, sauvegardes, petites modifications) : de 30 à 200 € par mois chez la plupart des prestataires.</li>
</ul>
<p>Un site bien construit n’a pas forcément besoin d’un entretien lourd. Un site simple, sans extensions à mettre à jour sans arrêt, peut tourner des années avec très peu d’interventions.</p>`,
      },
      {
        h2: 'Ce qui fait vraiment varier le prix',
        html: `<ul>
<li><strong>Le nombre de pages</strong> et la quantité de textes à écrire.</li>
<li><strong>Le sur-mesure</strong> : un design pensé pour vous coûte plus qu’un modèle tout fait, mais vous distingue de vos concurrents.</li>
<li><strong>Les fonctions</strong> : réservation en ligne, boutique, formulaire de devis, espace client.</li>
<li><strong>Le contenu</strong> : photos professionnelles, rédaction, traduction.</li>
<li><strong>Le référencement</strong> : un site bien construit pour Google dès le départ évite de payer une refonte plus tard.</li>
</ul>`,
      },
      {
        h2: 'Les pièges à éviter',
        html: `<ul>
<li><strong>Le site « loué »</strong> : un prix de départ très bas, puis un abonnement avec engagement de 24 ou 48 mois. À la fin, le site ne vous appartient souvent pas.</li>
<li><strong>Le nom de domaine au nom du prestataire</strong> : si vous vous séparez, vous perdez votre adresse, vos e-mails et votre référencement. Il doit être à votre nom. <a href="/guides/nom-de-domaine/">Voici comment le vérifier</a>.</li>
<li><strong>Les frais flous</strong> : « hébergement », « maintenance », « pack sécurité ». Demandez le total annuel écrit.</li>
<li><strong>Pas d’accès</strong> : vous devez pouvoir récupérer votre site et vos contenus si vous changez de prestataire.</li>
</ul>`,
      },
      {
        h2: 'Comparer deux devis : faites le calcul sur trois ans',
        html: `<p>La bonne comparaison n’est pas le prix affiché, mais ce que vous aurez payé au bout de trois ans : création, abonnements, nom de domaine et entretien.</p>
<p>Un exemple simple. Un site « offert » avec un abonnement de 49 € par mois vous coûte 1 764 € en trois ans, et il ne vous appartient pas. Un site de plusieurs pages payé 400 € une fois, avec un nom de domaine à 12 € par an, vous coûte 436 € sur la même période, et il est à vous. Avec un entretien optionnel à 25 € par mois, vous arrivez à 1 336 €, toujours propriétaire.</p>`,
      },
      {
        h2: 'Et chez Lunixel ?',
        html: `<p>Un site d’une page commence à 200 €, un site de plusieurs pages à 400 €, payés une fois. L’hébergement est compris et le nom de domaine est à votre nom, sur votre propre compte OVH. L’entretien est en option, de 25 à 50 € par mois selon le site, petites modifications comprises. Le détail est sur la page <a href="/tarifs/">Tarifs</a>.</p>
<p>Ces prix sont bas parce que je travaille seul, sans locaux ni commerciaux, avec des outils qui me font gagner beaucoup de temps. Pas parce que le travail est bâclé : vous pouvez en juger sur <a href="/realisations/">mes réalisations</a>, et la maquette de votre page d’accueil est offerte avant tout engagement.</p>`,
      },
    ],
    related: ['nom-de-domaine', 'planity-treatwell-ou-site'],
  },
  {
    slug: 'planity-treatwell-ou-site',
    title: 'Planity, Treatwell ou votre propre site : que choisir ? · Lunixel',
    h1: 'Planity, Treatwell ou votre propre site : que choisir pour votre salon ?',
    description: 'Abonnement Planity, commission Treatwell ou site avec réservation en ligne : ce que chaque solution coûte vraiment à un institut ou un salon.',
    kicker: 'Réservation en ligne',
    card: 'Abonnement, commission ou site à vous : ce que chaque solution coûte vraiment à un salon.',
    og: 'Planity, Treatwell <em>ou votre propre site</em> ?',
    published: '2026-09-25',
    updated: '2026-09-25',
    minutes: 5,
    intro: 'Pour un institut, une onglerie ou un salon de coiffure, la réservation en ligne n’est plus une option : une bonne partie des rendez-vous se prend le soir ou le week-end. Trois solutions dominent. Elles ne coûtent pas la même chose, et elles ne vous rendent pas le même service.',
    sections: [
      {
        h2: 'Treatwell : une commission sur les nouveaux clients',
        html: `<p>Treatwell est une place de marché : les clients y cherchent un salon, puis réservent. D’après <a href="https://www.treatwell.fr/partenaires/tarifs/" rel="noopener">sa page de tarifs partenaires</a>, Treatwell prend <strong>25 % de commission</strong> sur la première réservation d’un nouveau client venu par la plateforme, 0 % sur les clients fidélisés, et 2 % sur les paiements en ligne. S’y ajoute un abonnement dont le prix n’est pas affiché publiquement.</p>
<p><strong>Son intérêt</strong> : de la visibilité auprès de gens qui ne vous connaissent pas encore. <strong>Sa limite</strong> : sur une prestation à 60 €, un nouveau client vous coûte 15 €.</p>`,
      },
      {
        h2: 'Planity : un abonnement mensuel',
        html: `<p>Planity fonctionne sans commission sur les rendez-vous, avec un abonnement. Ses tarifs ne sont pas affichés sur son site ; <a href="https://www.lacaisseideale.fr/articles/planity-avis/" rel="noopener">les relevés publiés en 2026</a> les situent entre <strong>74 et 114 € HT par mois</strong> selon la formule (agenda seul, agenda et caisse, ou formule complète), avec des SMS facturés au-delà du forfait inclus.</p>
<p><strong>Son intérêt</strong> : un logiciel complet (agenda, caisse, fichier clients) et une application connue du public. <strong>Sa limite</strong> : environ 900 à 1 400 € HT par an, et votre page reste sur Planity, à côté de celles de vos concurrents.</p>`,
      },
      {
        h2: 'Votre propre site avec réservation intégrée',
        html: `<p>Troisième voie : un site à votre nom, avec un agenda de réservation intégré. Chez Lunixel, j’utilise <strong>Cal.com</strong> : vos clients choisissent leur prestation et leur créneau, reçoivent une confirmation par e-mail, et vous recevez le rendez-vous sur votre téléphone. Pour une personne seule, il n’y a ni commission ni abonnement de réservation ; les rappels par SMS sont en option, avec un petit coût par message.</p>
<p><strong>Son intérêt</strong> : les clients réservent chez vous, pas sur une page qui affiche aussi vos concurrents. Le site vous fait trouver sur Google et vous appartient. <strong>Sa limite</strong> : il ne vous apporte pas les clients d’une place de marché ; c’est Google et votre fiche d’établissement qui jouent ce rôle.</p>`,
      },
      {
        h2: 'Le bon choix selon votre situation',
        html: `<ul>
<li><strong>Vous démarrez et vous cherchez des clients</strong> : une place de marché peut aider au début, avec un site à vous pour que les clients fidèles réservent sans commission.</li>
<li><strong>Vous avez déjà une clientèle fidèle</strong> : votre propre site avec réservation suffit souvent, et vous économisez l’abonnement ou les commissions.</li>
<li><strong>Vous avez plusieurs employés, une caisse et un stock</strong> : un logiciel complet comme Planity peut se justifier. Votre site peut alors afficher votre bouton de réservation Planity.</li>
</ul>
<p>Les deux ne s’opposent pas : on peut très bien garder son outil actuel et avoir un site qui renvoie vers lui. L’important est d’avoir une adresse à vous, que Google connaît, et qui ne dépend pas d’une plateforme.</p>`,
      },
    ],
    related: ['fiche-google-salon', 'prix-site-internet'],
  },
  {
    slug: 'fiche-google-salon',
    title: 'Fiche Google : 8 réglages pour ressortir près de chez vous · Lunixel',
    h1: 'Fiche Google : 8 réglages pour que votre salon ressorte près de chez vous',
    description: 'Catégorie, horaires, photos, avis, lien de réservation : comment remplir la fiche d’établissement Google d’un salon, d’un institut ou d’un commerce.',
    kicker: 'Référencement local',
    card: 'Catégorie, photos, avis, lien de réservation : les réglages qui comptent vraiment.',
    og: 'Votre fiche Google, <em>bien réglée</em>.',
    published: '2026-09-25',
    updated: '2026-09-25',
    minutes: 6,
    intro: 'Quand quelqu’un cherche « onglerie » ou « coiffeur » depuis son téléphone, Google affiche d’abord une carte avec trois établissements. Ces trois places dépendent en grande partie de votre fiche d’établissement Google (anciennement Google My Business). Elle est gratuite, et la plupart des salons la remplissent à moitié.',
    sections: [
      {
        h2: '1. La bonne catégorie principale',
        html: `<p>C’est le réglage qui compte le plus. Choisissez la catégorie la plus précise : « Onglerie » plutôt que « Salon de beauté » si vous faites surtout des ongles. Ajoutez ensuite des catégories secondaires pour vos autres activités (« Épilation à la cire », « Institut de beauté »).</p>`,
      },
      {
        h2: '2. Un nom, une adresse, un téléphone identiques partout',
        html: `<p>Votre nom, votre adresse et votre numéro doivent être écrits exactement de la même façon sur votre fiche, votre site, Instagram, Facebook et les annuaires. Google recoupe ces informations : des variantes le font douter. N’ajoutez pas de mots-clés dans le nom de votre fiche (« Onglerie Lille pas cher ») : c’est contraire aux règles et peut faire suspendre la fiche.</p>`,
      },
      {
        h2: '3. Vous recevez à domicile ou chez vos clients ?',
        html: `<p>Si vous n’accueillez pas de clients dans un local (coiffure ou massage à domicile, par exemple), vous êtes un « établissement de services de proximité ». Google demande alors de <a href="https://support.google.com/business/answer/9157481?hl=fr" rel="noopener">retirer votre adresse de la fiche</a> et d’indiquer vos zones desservies : jusqu’à 20 villes ou codes postaux, dans un rayon d’environ deux heures de trajet.</p>`,
      },
      {
        h2: '4. Des horaires exacts, y compris les jours fériés',
        html: `<p>Un client qui trouve porte close ne revient pas, et laisse parfois un avis. Mettez à jour vos horaires exceptionnels (fériés, vacances) : Google les met en avant.</p>`,
      },
      {
        h2: '5. Des photos, souvent',
        html: `<p>Votre devanture, votre intérieur, vous au travail et surtout vos réalisations. Des photos nettes et récentes, ajoutées régulièrement, valent mieux qu’un logo seul. Évitez les images de banque : les clients veulent voir votre travail.</p>`,
      },
      {
        h2: '6. Demander des avis, et y répondre',
        html: `<p>Le nombre d’avis, leur note et leur fraîcheur pèsent dans le classement et dans la décision des clients. Demandez un avis à chaque client satisfait, au moment où il vous remercie : un lien direct ou un QR code au comptoir facilite les choses. Répondez à tous les avis, y compris les négatifs, calmement et brièvement.</p>`,
      },
      {
        h2: '7. Vos services, vos prix et votre lien de réservation',
        html: `<p>Renseignez la liste de vos prestations avec leurs prix, et ajoutez le lien de votre site et de votre page de réservation. Le client peut alors réserver sans passer par une plateforme qui prend une commission. <a href="/guides/planity-treatwell-ou-site/">Plateforme ou site à vous ? La comparaison</a>.</p>`,
      },
      {
        h2: '8. Une fiche reliée à un vrai site',
        html: `<p>La fiche attire le clic, le site convainc. Google s’appuie aussi sur votre site pour comprendre ce que vous faites et où : une page claire, avec vos services, votre ville et vos avis, renforce votre fiche. C’est précisément ce que je construis pour <a href="/salons/">les salons et instituts</a>.</p>`,
      },
    ],
    related: ['planity-treatwell-ou-site', 'site-naturopathe'],
  },
  {
    slug: 'site-naturopathe',
    title: 'Site de naturopathe : ce qu’il doit contenir · Lunixel',
    h1: 'Site de naturopathe : ce qu’il doit contenir pour rassurer et remplir l’agenda',
    description: 'Séances et tarifs, première consultation, prise de rendez-vous, mentions obligatoires, promesses à éviter : ce que doit contenir le site d’un naturopathe.',
    kicker: 'Bien-être',
    card: 'Les pages qui rassurent un nouveau client, et les promesses à ne pas faire.',
    og: 'Le site d’un naturopathe, <em>qui rassure</em>.',
    published: '2026-09-25',
    updated: '2026-09-25',
    minutes: 5,
    intro: 'On ne choisit pas un naturopathe comme on choisit une boulangerie. Avant de réserver, un nouveau client veut comprendre votre approche, savoir comment se passe une séance et combien elle coûte. Un bon site répond à ces trois questions avant même le premier appel.',
    sections: [
      {
        h2: 'Qui vous êtes et comment vous travaillez',
        html: `<p>Une vraie photo de vous, votre parcours et votre formation, et en quelques phrases simples votre façon de travailler. Les clients choisissent une personne autant qu’une méthode. Parlez comme vous parlez en séance, sans vocabulaire savant.</p>`,
      },
      {
        h2: 'Vos séances et vos tarifs, sans détour',
        html: `<p>Pour chaque type de séance (bilan, suivi, réflexologie, massage…) : la durée, le prix et ce qui se passe. Afficher les tarifs rassure et évite les appels qui n’aboutissent pas. Précisez si la séance est possible en visio, et si certaines mutuelles la remboursent en partie.</p>`,
      },
      {
        h2: 'La première séance, expliquée',
        html: `<p>C’est la principale inquiétude d’un nouveau client. Décrivez le déroulé : l’échange, les questions posées, ce qu’il repart avec, ce qu’il doit apporter. Une courte section « Comment se passe la première séance » fait souvent plus pour la conversion qu’une longue présentation.</p>`,
      },
      {
        h2: 'Prendre rendez-vous en dix secondes',
        html: `<p>Un bouton « Prendre rendez-vous » visible sur chaque page, qui ouvre votre agenda en ligne. Le client choisit sa séance et son créneau, reçoit une confirmation, et vous n’avez plus à gérer les allers-retours par SMS. C’est le cas du <a href="/realisations/fabienne-hiot/">site de Fabienne Hiot</a>, naturopathe, en cours de réalisation.</p>`,
      },
      {
        h2: 'Le lieu, l’accès, les horaires',
        html: `<p>Adresse, stationnement, étage, accès pour les personnes à mobilité réduite, horaires. Ajoutez une carte et reliez le tout à votre fiche Google : c’est ainsi que vous ressortez quand quelqu’un cherche « naturopathe » près de chez lui.</p>`,
      },
      {
        h2: 'Les promesses à ne pas faire',
        html: `<p>La naturopathie n’est pas une profession de santé réglementée en France. Votre site doit rester prudent : ne promettez pas de guérir une maladie, ne présentez pas vos séances comme un remplacement d’un traitement médical, et invitez à consulter un médecin en cas de problème de santé. C’est une obligation, mais c’est aussi ce qui inspire confiance.</p>
<p>N’oubliez pas les mentions légales (nom, adresse, SIRET, hébergeur) et, si vous avez un formulaire, une page expliquant ce que vous faites des informations reçues.</p>`,
      },
    ],
    related: ['fiche-google-salon', 'prix-site-internet'],
  },
  {
    slug: 'nom-de-domaine',
    title: 'Nom de domaine : pourquoi il doit être à votre nom · Lunixel',
    h1: 'Nom de domaine : pourquoi il doit être à votre nom (et comment le vérifier)',
    description: 'Votre nom de domaine porte votre site, vos e-mails et votre référencement. Pourquoi il doit être à votre nom, et comment le vérifier en deux minutes.',
    kicker: 'Les bases',
    card: 'Votre adresse web porte votre site, vos e-mails et votre référencement. Elle doit être à vous.',
    og: 'Votre nom de domaine <em>doit être à vous</em>.',
    published: '2026-09-25',
    updated: '2026-09-25',
    minutes: 4,
    intro: 'Le nom de domaine, c’est l’adresse de votre site : votre-salon.fr. Il coûte moins de 15 € par an, et c’est pourtant l’élément le plus important de votre présence en ligne. Il porte votre site, vos adresses e-mail et tout le référencement accumulé au fil des années.',
    sections: [
      {
        h2: 'Ce qui se passe s’il n’est pas à votre nom',
        html: `<p>Beaucoup de prestataires enregistrent le nom de domaine sur leur propre compte, « pour simplifier ». Tant que tout va bien, personne ne s’en aperçoit. Le jour où vous voulez changer de prestataire, ou si le prestataire disparaît, vous risquez de perdre votre adresse, vos e-mails, et l’ancienneté que Google avait accordée à votre site. Il faut alors repartir de zéro avec une nouvelle adresse.</p>`,
      },
      {
        h2: 'Comment vérifier en deux minutes',
        html: `<ol>
<li>Cherchez votre nom de domaine sur un service de recherche « whois » ; pour un .fr, celui de l’<a href="https://www.afnic.fr/noms-de-domaine/tout-savoir/whois-trouver-un-nom-de-domaine/" rel="noopener">Afnic</a>, qui gère les .fr.</li>
<li>Regardez le « titulaire » : ce doit être vous ou votre entreprise, pas votre prestataire. Pour un particulier ou un entrepreneur individuel, le nom peut être masqué pour protéger votre vie privée ; dans ce cas, passez à l’étape suivante.</li>
<li>Vérifiez que vous avez vous-même un compte chez le bureau d’enregistrement (OVH, Gandi, IONOS…) et que le domaine y apparaît.</li>
</ol>`,
      },
      {
        h2: 'Et s’il est au nom de votre prestataire ?',
        html: `<p>Demandez-lui simplement de vous le transférer, par écrit. Le transfert d’un .fr vers votre propre compte se fait avec un code d’autorisation fourni par le bureau d’enregistrement actuel. Un prestataire sérieux le fait sans difficulté.</p>`,
      },
      {
        h2: 'Comment je fais chez Lunixel',
        html: `<p>Le nom de domaine est enregistré chez OVH, sur un compte à votre nom, que vous gardez. Je n’ai besoin que d’un accès pour relier le domaine à votre site. Si un jour vous changez de prestataire, vous partez avec votre adresse, votre site et vos contenus. C’est écrit dans le devis, et expliqué sur la page <a href="/tarifs/">Tarifs</a>.</p>`,
      },
    ],
    related: ['prix-site-internet', 'web-designer-ou-developpeur'],
  },
  {
    slug: 'web-designer-ou-developpeur',
    title: 'Web designer, développeur web ou agence : qui fait quoi ? · Lunixel',
    h1: 'Web designer, développeur web ou agence : qui fait quoi ?',
    description: 'Web design, développement web, référencement : ce que fait chaque métier et à qui une petite entreprise doit confier la création de son site.',
    kicker: 'Les bases',
    card: 'Web design, développement, référencement : à qui confier la création de votre site.',
    og: 'Web designer, développeur <em>ou agence</em> ?',
    published: '2026-09-25',
    updated: '2026-09-25',
    minutes: 5,
    intro: 'Quand on cherche quelqu’un pour créer son site, on tombe sur des web designers, des développeurs web, des webmasters, des agences. Les mots se ressemblent, les métiers non. Voici qui fait quoi, et ce dont une petite entreprise a vraiment besoin.',
    sections: [
      {
        h2: 'Le web designer dessine le site',
        html: `<p>Le web designer conçoit ce que vous voyez : la mise en page, les couleurs, les typographies, la place des photos et des boutons. Un bon web design n’est pas seulement joli : il guide le visiteur vers ce que vous voulez qu’il fasse, réserver, appeler ou venir en boutique. Son travail aboutit à une maquette.</p>`,
      },
      {
        h2: 'Le développeur web le construit',
        html: `<p>Le développeur transforme la maquette en site qui fonctionne : le code, l’adaptation aux téléphones, la vitesse, les formulaires, la réservation, l’hébergement. C’est aussi lui qui rend le site lisible par Google : structure des pages, titres, données qui décrivent votre activité. Un site lent ou mal construit perd des visiteurs, même s’il est beau.</p>`,
      },
      {
        h2: 'Le référencement, un travail à part entière',
        html: `<p>Le référencement naturel (ou SEO) consiste à faire apparaître votre site dans les résultats de Google. Il commence dès la construction du site, puis se poursuit avec votre <a href="/guides/fiche-google-salon/">fiche d’établissement Google</a>, vos avis et des contenus utiles. Méfiez-vous des promesses de « première place garantie » : personne ne peut la garantir.</p>`,
      },
      {
        h2: 'L’agence réunit plusieurs personnes',
        html: `<p>Une agence rassemble ces compétences dans une équipe : chef de projet, designer, développeur, parfois rédacteur. C’est utile pour les gros projets. Pour un site vitrine de petite entreprise, cela veut souvent dire plus d’interlocuteurs et un prix plus élevé, entre 2 000 et 6 000 € selon <a href="https://fenxi.fr/blog/combien-coute-site-internet-2026-prix-delais/" rel="noopener">les prix relevés en 2026</a>.</p>`,
      },
      {
        h2: 'Ce dont une petite entreprise a besoin',
        html: `<p>Pour un artisan, un commerce ou un indépendant, l’idéal est souvent une seule personne qui maîtrise les trois : le design, le développement et les bases du référencement. Un seul interlocuteur, qui comprend votre métier et répond vite.</p>
<p>C’est ce que je fais chez Lunixel : je dessine votre site, je le développe et je le prépare pour Google, du premier croquis à la mise en ligne. <a href="/creation-site-internet/">Voir comment je travaille</a>.</p>`,
      },
    ],
    related: ['prix-site-internet', 'nom-de-domaine'],
  },
];

export const guidePath = (g) => `/guides/${g.slug}/`;
export const guideBySlug = (slug) => guides.find((g) => g.slug === slug);

// Date lisible en français : « 25 septembre 2026 ».
export const frDate = (iso) =>
  new Date(iso + 'T12:00:00Z').toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
