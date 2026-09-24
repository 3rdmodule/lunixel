# Rendez-vous en ligne : le compte Cal.com d'Hugo

Le bouton « Prendre rendez-vous » du site ouvre l'agenda d'Hugo dans une fenêtre, par-dessus la page (pas de gros calendrier intégré). L'agenda est géré par **Cal.com**, gratuit pour une personne seule (types de rendez-vous illimités, synchronisation avec Google Agenda ou Outlook, rappels par e-mail).

Tant que le compte n'existe pas, le bouton ouvre une fenêtre qui explique ce qui s'y trouvera, et renvoie vers le formulaire de contact.

## Ce qu'Hugo doit faire (15 minutes)

1. **Créer le compte** sur [cal.com](https://cal.com) avec son adresse professionnelle (pas celle du magasin).
   Nom d'utilisateur conseillé : `hugo-abecassis` (l'adresse sera cal.com/hugo-abecassis).
2. **Relier son agenda** (Google Agenda, Outlook ou iCloud) pour que les créneaux déjà pris soient bloqués.
3. **Disponibilités** : indiquer les jours et heures où il reçoit à l'atelier.
4. **Créer 3 types de rendez-vous** (Événements › Nouveau), en respectant ces adresses courtes :

   | Nom affiché | Adresse (slug) | Durée | Lieu |
   |---|---|---|---|
   | Premier rendez-vous : diagnostic, devis | `diagnostic` | 30 min | En personne, adresse de l'atelier |
   | Réglage ou entretien | `reglage` | 45 min | En personne, adresse de l'atelier |
   | Dépôt ou retrait d'un instrument | `depot` | 15 min | En personne, adresse de l'atelier |

5. Pour chaque type, dans **Avancé** :
   - cocher **« Nécessite une confirmation »** : Hugo valide chaque demande avant qu'elle soit confirmée ;
   - ajouter une question **« Quel instrument ? »** (réponse courte, obligatoire) ;
   - laisser le champ « Notes » pour décrire le problème.
6. **Apparence** (Paramètres › Apparence) : thème clair, couleur de marque `#9a3b26`.
7. Envoyer son **nom d'utilisateur** à Lunixel.

## Ce que fait Lunixel ensuite

Dans `src/config/site.ts`, renseigner `booking.username` (ex. `'hugo-abecassis'`). Les boutons ouvrent alors directement Cal.com :
- les boutons généraux : la page d'accueil de l'agenda (les 3 types au choix) ;
- « Rendez-vous pour un réglage » : directement le type `reglage` ;
- « Montrer un instrument à restaurer », « Parler d'un instrument sur mesure » : le type `diagnostic`.

Si Hugo choisit d'autres adresses (slugs), les reporter dans `booking.events` et dans `src/data/services.ts` (`event`).

## Vie privée

Le script de Cal.com n'est chargé qu'au clic sur « Prendre rendez-vous » : aucun cookie avant. C'est indiqué dans la page Confidentialité. À vérifier avec Hugo : les garanties de Cal.com pour le transfert des données hors de l'Union européenne.
