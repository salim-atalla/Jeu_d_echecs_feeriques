= Échecs féeriques

Ce projet consiste à déployer une application web de jeu d'échecs féeriques jouable en multijoueur.

== Objectifs

La fin du semestre approche, il est temps de montrer tout ce que vous avez appris et de proposer au monde entier votre première application web (webapp) !
L'objectif de ce mini-projet est d'intégrer et adapter tout le travail réalisé lors des TP et TD précédents, afin de réaliser une application de jeu d'échecs féeriques jouable (et observable) en multijoueur réseau.

== Les échecs féériques

Le terme *échecs féeriques* désigne les variantes du jeu d'échecs, pour indiquer que les règles habituelles du jeu d'échecs ne sont pas respectées.
Dans notre cas, notre jeu aura les pièces suivantes:

- *Roi*, *Reine* et *Pion* des échecs traditionnels.
- Le *Chameau* à la place du Chevalier. Le Chameau se déplace comme un cavalier mais avec une case supplémentaire. Il saute de trois cases horizontalement et d'une case verticalement ou de trois cases verticalement et d'une case horizontalement.
- La *Princesse* à la place du Fou. La Princesse combine les mouvements d'un Cavalier et d'un Fou.
- L'*Impératrice* à la place de la Tour. L'Impératrice combine les mouvements d'une Tour et d'un Chevalier.

== Préparation

. Créez une divergence (en anglais, _fork_) du projet suivant sur votre compte GitLab: 
https://gitlab.univ-nantes.fr/naomod/idl/projet-2019/-/forks/new
. Configurez votre nouveau projet Gitlab obtenu via la divergence de la manière suivante :
.. Dans "_Paramètres → Général_", allez dans "_Visibility, project features, permissions_", et mettez "_Project visibility_" à "_Private_".
Ainsi, vous devenez le seul utilisateur autorisé à accéder à votre code source.
..  Dans "_Paramètres → Membres_", ajoutez comme nouveau membre l'utilisateur virtuel appelé *Naobot*, avec le statut "_Reporter_".
Cet utilisateur virtuel que nous controllons nous donne le droit d'accéder à votre travail et nous permettra de récupérer vos projets.
. Créez et configurez une copie locale du projet. Ouvrez le *Terminal* et exécutez les commandes suivantes:
+
[source,bash]
----
git clone https://gitlab.univ-nantes.fr/${USER}/projet-2019.git
cd projet-2019
npm install
----

. Regardez la structure du projet. Le projet est organisé en différents dossiers:
+
[source,txt]
----
    |-- projet-2019
      |-- client
         |-- script.js
         |-- style.css
      |-- views
         |-- index.ejs
      |-- src
        |-- main
          |-- ts
            |-- chessboard.ts
            |-- main.ts
            |-- move-validation.ts
            |-- movements.ts
            |-- piece.ts
            |-- position.ts
        |-- test
          |-- ts
            |-- move-validation.spec.ts
            |-- movements.spec.ts
      |-- node_modules
      |-- package.json
      |-- tsconfig.json
----

** `client` contient le code Javascript qui sera exécuté sur le browser. Vous ne devez pas modifier le contenu de ce dossier.
** `index.html` : page principale de l'application
** `style.css` : mise en forme de l'application
** `script.js` : algorithme(s) JavaScript côté client (affichage de l'échiquier)
** `src/main/ts` contient le code source du serveur.
*** Dans ce dossier, vous allez modifier le fichier `move-validation.ts`.
*** *Attention:* *En aucun cas vous ne devez modifier le contenu des fichiers `chessboard.ts`, `movements.ts`, `piece.ts` et `position.ts`.*
** `main.ts` : programme principal de création et gestion du serveur web.  Vous ne devez pas modifier le contenu de ce fichier.
** `src/test/ts` contient les tests unitaires du serveur. Vous allez modifier le contenu de ce dossier.
** `node_modules` contient les modules Node.js utilisés dans le projet. Vous ne devez pas modifier le contenu de ce dossier.
** `package.json` est le fichier de configuration de *npm*. Vous n'avez pas besoin de le modifier.
** `tsconfig.json` est le fichier de configuration de *TypeScript*. Vous n'avez pas besoin de le modifier.


=== Mise à jour du projet

Les erreurs ou manques de précision du projet seront corrigées dès que possible.
Cela impliquera la mise à jour des vos divergences pour récupérer les changements.
Pour cela, vous devez faire:

```sh
git remote add upstream https://gitlab.univ-nantes.fr/naomod/idl/projet-2019.git # pas besoin si déjà fait
git pull upstream master
```

* La première ligne ajoute le dépôt originel et le nomme "upstream"
* La deuxième ligne récupère les changements et les fusionne avec votre divergence


== Test et lancement

* Le projet utilise l'outil de construction et de gestion de modules *npm*.
* Pour lancer tous les tests unitaires du projet avec Alsatian, exécutez: `npm test`.
* Pour lancer le serveur en mode développement, exécutez: `npm run dev`.
* Pour accéder à l'application, ouvrez l'URL suivante: http://localhost:8080.
* Pour accéder au contenu JSON de l'échiquier en cours, utilisez l'URL suivante: http://localhost:8080/status.js.

== Manuel d'utilisation

Pour déplacer les pièces sur l'échiquier, indiquez dans le formulaire en bas de page la pièce à déplacer et sa destination.
Utilisez la notation par coordonnées, qui inclut la place à partir de laquelle la pièce se déplace, ainsi que sa destination.

.Par exemple:
|===
|Coup |Coordonnées |Description 

| 1. |E2-E4 E7-E5 |Pion blanc en E2 se déplace à E4. Pion noir en E7 se déplace à E5.
| 2. |G1-F4 B8-C5 |Chameau  blanc en G1 se déplace à F4. Chameau noir en B8 se déplace à C5.
|===

== Fonctionnement de l'application

Le programme principal du serveur (`main.ts`) est chargé de démarrer un mini-serveur web capable de recevoir les différentes requêtes provenant des navigateurs connectés à l'application :

* GET "`/`" : distribue le fichier `views/index.ejs`;
* GET "`/status.js`" : génère et distribue l'échiquier en cours au format JSON.
* POST "`/`" : reçoit et traite un coup à jouer;

Ces trois traitements correspondent aux différents appels à `app.get()` et `app.post()` du programme principal.

== Chronologie d'une partie

. Lorsqu'un utilisateur se connecte à l'application (adresse *"/"*), le serveur distribue alors la page html principale composée d'un échiquier vierge et d'une zone de saisie permettant à l'utilisateur de remplir le coup à jouer.

. Le navigateur internet récupère immédiatement les informations de la partie en cours présentes à l'adresse `/status.js` et remplit l'échiquier à l'aide d'un script situé dans le fichier `script.js`. Ces deux scripts se trouvent dans le dossier `client`.

. Un clic sur le bouton "Envoyer" effectue une requête de type *POST* au à l'adresse *"/"* du serveur, contenant les informations du champs de texte associé.
Le serveur traite alors la requête afin de jouer le coup demandé.

. La page internet du joueur est alors rechargée automatiquement, affichant ainsi le nouvel état de la partie.

. etc…

== Travail à réaliser

=== Validation des mouvements

La version actuelle permet le déplacement libre des pièces, sans respecter les règles des échecs.
Pour l'instant, seuls les déplacements des pions sont validés.
Vous devez mettre en oeuvre la validations des déplacements des autres pièces: le Roi, la Dame, le Chameau, la Princesse et l'Impératrice. 

Le traitement des déplacements se fait de la façon suivante:

. Lorsqu'une requête *POST* arrive, le serveur extrait la valeur du champ envoyé et appelle la fonction `processMove()` du module `movements`.

. La fonction `processMove()` appelle une autre fonction, `parseMoveString()`, qui transforme une chaîne de caractères en un déplacement (`interface Move`) entre 2 positions (`interface Position`).

. La fonction `processMove()` appelle ensuite la fonction `isMovePossible()`, qui fait appel à différentes fonctions de validation spécifiques aux pièces de l'échiquier (une par type de pièce). 
Le module `move-validation` contient toutes les fonctions de validation de déplacements.

. Par exemple, lorsqu'il s'agit d'un Pion blanc, la fonction `isMovePossible()` appelle la fonction `whitePawnMove()`, qui retourne `true` si le déplacement est possible ou `false` si ce n'est pas le cas.

. Si le mouvement est possible, c'est à dire la fonction `isMovePossible()` retourne `true`, la fonction `processMove()` appelle la fonction `performMove()`, qui effectue le déplacement.

Vous devez donc parcourir le module `move-validation` et implémenter les fonctions de validation contenant le commentaire "`// #TODO:`". 

=== Tests unitaires

Pour vérifier que les fonctions du module `move-validation` fonctionnent correctement, vous devez écrire des tests unitaires, qui vont vérifier que les fonctions acceptent les mouvements possibles et n'acceptent pas les mouvements impossibles.
Les mouvements sont possibles (ou impossibles) en accord avec les https://fr.wikipedia.org/wiki/Échecs[règles des échecs],
ainsi qu'en accord avec les 3 pièces féériques.
Comme ces règles sont complexes, vous serez mené à écrire plusieurs tests unitaires pour vérifier les mouvements possibles et impossibles d'une même pièce.

Les signatures des fonctions du module `move-validation` suivent la même convention :

[source,ts]
----
function colorPieceMove(board: Chessboard, move: Move): boolean
----

Le paramètre `board` contient l'échiquier de la partie en cours et `move` contient le déplacement demandé par le joueur à travers le browser.
Le paramètre `move` contient 2 coordonnées de type `Position`, représentant le début et la fin du déplacement.
Les coordonnées indiquent *toujours* des cases à l'intérieur de l'échiquier, c'est à dire, une colonne entre `A` et `H` et une ligne entre `1` et `8`.
Donc, il n'y a pas besoin de vérifier si un déplacement conduit une pièce à l'extérieur de l'échiquier.

Les tests unitaires de la fonction `blackPawnMove()` ont déjà été implémentés, vous les trouverez dans le fichier `./src/test/ts/pawn-move-validation-spec.ts`.
*Vous devez compléter tous les squelettes de tests unitaires fournis à l'intérieur de ces fichiers !* 

Vous devez procéder par itérations successives, n'essayez pas d'implémenter les fonctions d'un seul trait. Observez le cycle de développement suivant:

. Implémentez une fonctionnalité simple.
. Écrivez le ou les tests unitaires qui vérifient cette fonctionnalité.
. Exécutez les tests pour vérifier que la fonctionnalité marche correctement et la non-régression.
. Recommencez avec la fonctionnalité suivante.

Par exemple, lorsque vous allez implémenter la fonction qui valide le mouvement des Impératrices (`empressMove()`, vous pouvez subdiviser leurs comportements en différentes fonctionnalités: 

* Validation des mouvements horizontaux, verticaux et diagonaux, sans se préoccuper des autres pièces.
* Invalidation des mouvements (horizontaux, verticaux et diagonaux) lorsque la case finale contient une pièce de même couleur.
* Validation des mouvements (horizontaux, verticaux et diagonaux) qui se terminent sur une case contenant une pièce d'une couleur différente.
* Invalidation des mouvements (horizontaux, verticaux et diagonaux) lorsque toutes les cases intermédiaires ne sont pas vides.

=== Exemple: validation des mouvements d'une Impératrice en plusieurs étapes

==== Etape 1

Commencez par la 1e fonctionnalité, la validation des déplacements horizontaux:

[source,ts]
----
// Dans le fichier "move-validation.ts"
export function empressMove(board: Chessboard, move: Move): boolean {
    return move.from.rank === move.to.rank; // Si les lignes de début de fin sont les mêmes, le déplacement est horizontal
}
----

Écrivez ensuite le test unitaire pour cette fonctionnalité:

[source,ts]
----
// Dans le fichier "empress-move-validation.spec.ts"
let chessboard : Chessboard;

export class TestEmpressMoves {
    @Setup
    beforeEach(){
        chessboard = createEmptyChessboard();

        // La variable "positionE4" a été créée au début du module pour simplifier le code des tests
        // Place une Impératrice sur la case E4 d'un échiquier vide:

        putPiece(chessboard, positionE4, pieces.blackEmpress);
    }

    @Test("An empress can move horizontally")
    testCanMoveHorizontally() {
        // Les variable "moveE4_H4" et "moveE4_14" ont été créées au début 
        // du module pour simplifier le code des tests.
        // Le déplacement doit être possible:

        Expect(isPossible.empressMove(chessboard, moveE4_H4)).toBeTruthy();
        Expect(isPossible.empressMove(chessboard, moveE4_A4)).toBeTruthy();
    }
}
----

==== Etape 2

Nouvelle fonctionnalité à implémenter: la validation des déplacements verticaux. 
Modifiez la fonction `empressMove()`:

[source,ts]
----
// Dans le fichier "move-validation.ts"
export function empressMove(board: Chessboard, move: Move): boolean {
    return move.from.rank === move.to.rank || // Si les lignes de début de fin sont les mêmes, le déplacement est horizontal
        move.from.file === move.to.file;  // Si les colonnes de début de fin sont les mêmes, le déplacement est vertical
}
----

Écrivez ensuite un nouveau test unitaire pour cette nouvelle fonctionnalité:

[source,ts]
----
// Dans le fichier "empress-move-validation.spec.ts"
export class TestRocoMoves {
    // (...)

    @Test("An empress can move vertically")
    testCanMoveVertically() {
        Expect(isPossible.empressMove(chessboard, moveE4_E8)).toBeTruthy();
        Expect(isPossible.empressMove(chessboard, moveE4_E1)).toBeTruthy();
    }
}
----

==== Autres étapes

Suivez la même démarche pour implémenter et tester les autres fonctionnalités, c'est à dire, les autres mouvements possibles des Impératrices.

=== Rendu

Pour rendre le projet, il vous suffit de vous assurer d'avoir :

- bien effectué toutes les validations (_commits_) et publications (_pushs_) nécessaires avec `git`,
- bien ajouté *Naobot* comme membre _Reporter_ de votre projet,
- bien validé (_commit_) et publié (_push_) tous vos changements et fichiers de travail.

Si vous le souhaitez, vous pouvez également ajouter un fichier "`RENDU.md`" à la racine du projet, afin de décrire les spécificités de votre projet (choix techniques, parties non traitées, extensions non demandées, etc.).

Tant que tout cela est bien fait avant la date limite de rendu, alors tout est bon !

=== Derniers conseils

* Rappelez-vous que « _Une fonction sans test unitaire ne fonctionne pas_ » !

* Rappelez-vous aussi que «*N'importe qui peut écrire du code compréhensible par les ordinateurs, mais seulement les bon développeurs parviennent à écrire du code intelligible par les humains* » !

* Écrivez les tests unitaires avant ou en même temps que les fonctions. Ne les laissez pas pour la fin, les test unitaires sont très utiles pendant le développement et vous feront gagner du temps.

* Faites bon usage de `git` : effectuez des validations (_commits_) et des publications (_pushs_) régulièrement ! Cela vous permet d'éviter de perdre votre travail, et de mieux collaborer en équipe.
