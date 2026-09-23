# _upload

Déposer ici une archive `.tar.gz` (Add file › Upload files) pour mettre à jour le dépôt depuis le navigateur :

- `root.tar.gz` : extraite à la racine du dépôt ;
- `concept__<nom>.tar.gz` : extraite dans `concept/<nom>/`.

Le workflow « Import d'archive » (`.github/workflows/unpack.yml`) extrait l'archive, la supprime, valide le résultat et relance la publication.
