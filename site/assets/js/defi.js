 (function(root){
    var defi = root.defi = {};




    /*
     * En JavaScript une fonction peut retourner une valeur avec la commande 'return'
     * Dans cet exercice retourne la valeur 1.
     */
    defi.retourneUn = function(){
        // ton code ici
    };




    /*
    * En JavaScript une chaine de caractère est appelée String et est délimitée au début et à la fin par "" ou ''
    * Dans cet exercice retourne la valeur salut.
    */
    defi.retourneUneChaine = function(){
       // ton code ici
    };




    /*
     * Un sudoku a 81 cases. Dans ce jeu les valeurs des cases sont contenues dans un tableau deux dimenstions [ligne][col].
     * Chaque case peut avoir une valeur de 1 à 9 ou être inconnue ce qui est représenté par un '.'
     * Dans cet exercice retourne un tableau de 9 éléments qui contient en chaque position de une valeur entre 1 et 9 ou le .
     * Un tableau est représenté par des [] avec une virgule entre chaque element.
     */
    defi.retourneUnTableau = function(){
       // ton code ici
    };




    /*
     * En programmation, les fonctions font du travail sur des objets. Le plus souvent, les objets leurs sont fournis en arguments, c'est a dire en parenthese.
     *
     * Dans cet exercice tu dois retourner l'argument qui est fourni à la fonction sans le modifier
     */
    defi.retourneUnArgument = function (argument1) {
        // ton code ici
    };



    /*
     * Tu peux conserver une valeur intermedaire dans une variable de fonction. Définie la variable avec var. C'est utile pour contenir des valeurs
     * temporaires quand une fonction doit faire des calculs en plusieurs étapes.
     *
     *  Ex      var somme = 0;
     *  Ex      var chaine = "";
     *
     * Tu peux ensuite ajouter des valeurs dans ta variable avec += ou simplement =
     *  Ex      somme += terme;  ou      somme = somme + terme;
     *
     *  Dans cet exercice retourne la somme des nombres de 0 à 50 inclusivement
     * L'utilisation d'une boucle for est requise https://www.w3schools.com/js/js_loop_for.asp
     */
    defi.calculeUneValeurTemporaire = function () {
        // ton code ici
    };




    /*
     * Dans cet exercice, tu dois extraire les valeurs de la première ligne d'une chaine de sudoku.
     * Ta fonction recoit une valeur en argument nommée 'sudoku' qui contient un tableau deux dimension de 81 charactères.
     *
     * On peut accéder à un caratère dans le tableau par sa colonne et sa ligne [ligne][col].
     * Note que les elements dans les tableaux sont 0 based (le 1er élément est à la position 0)
     *
     * L'utilisation d'une boucle for est fortement recommandée https://www.w3schools.com/js/js_loop_for.asp
     */
    defi.retourneLaPremiereLigne = function(sudoku){
       // ton code ici
    };




    /*
     * Dans cet exercice, tu dois extraire les valeurs d'une ligne sécifique du sudoku. L'argument ligne est le numéro de la ligne moins un.
     *
     * L'utilisation d'une boucle for est nécessaire https://www.w3schools.com/js/js_loop_for.asp
     *
     * Pense aux index des élements que tu souhaite avoir.
     * Pense aux index des élements que tu souhaite avoir.
     *    0,0   0,1    0,2  ...
     *    1,0   1,1    1,2  ...
     */
    defi.retourneUneLigne = function(sudoku, ligne){
       // ton code ici
    };





    /*
     * Retroune un tableau qui représente la première colonne du sudoku. Pense aux index des élements que tu cherches.
     */
    defi.retourneLaPremiereColone = function(sudoku){
       // ton code ici
    };





    /*
     * Retroune un tableau qui represente une colonne du sudoku.
     * Pense aux index des élements que tu cherches.
     *    0,0   0,1    0,2  ...
     *    1,0   1,1    1,2  ...
     *    2,0   2,1    2,2  ...
     *    3,0   3,1    3,2  ...
     */
    defi.retourneUneColone = function(sudoku, colonne){
        // ton code ici
    };




    /*
     * Retourne un tableau qui représente les élements du premier bloc de 9 cases du sudoku
     *
     * Pense aux index des élements que tu souhaite avoir.
     *    0,0   0,1    0,2  ...
     *    1,0   1,1    1,2  ...
     *    2,0   2,1    2,2  ...
     *
     * Pour remplir ton tableau de résultat il est mieux d'utiliser la fonction .push(valeur) qu'un index.
     * Voir https://www.w3schools.com/js/js_array_methods.asp#:~:text=JavaScript%20Array%20push()
     */
    defi.retourneLePremierBloc = function(sudoku){
        // ton code ici
    };




    /*
     * Ajuste to code pour retourner une chaine qui représente n'importe quel bloc du sudoku
     * N'oublie pas que le premier bloc est 0 et le dernier 8
     *
     * La fonction Math.floor() arrondi un nombre décimal à l'entier inférieur
     * L'opérateur '%' retourne le reste d'une division    ex.:    7 % 3  donne  1
     */
    defi.retourneUnBloc = function(sudoku, bloc){
       // ton code ici
    };





    /*
     * Ajuste to code pour retourner une chaine qui représente n'importe quel bloc du sudoku
     * N'oublie pas que le premier bloc est 0 et le dernier 8
     */
    defi.retourneUnBloc = function(sudoku, bloc){
       // ton code ici
    };





    /*
     * Crée une fonction qui indique si un tableau de 9 éléments est valide. Est-ce que l'un des éléments est présent plus d'une fois?
     *
     * En JavaScript on indique une valeur binaire par 'true' ou 'false', c'est ce que la fonction doit retourner.
     *
     * Il est possible de réussir cet exercice de plusieurs façons, une facon élégante de connaitre le nombre unique d'élément dans
     * un tableau est exposée ici https://stackoverflow.com/a/44405494/570308
     *
     * Tu auras peut-etre aussi besoin d'utiliser un bloc si (if) voir ici pour plus d'information
     * https://www.w3schools.com/js/js_if_else.asp
     */
    defi.tableauValide = function(bloc){
       // ton code ici
    }




    /*
     * Crée une fonction qui indique si tout le sudoku est valide. Cette fonction doit retourner une valeur binaire.
     *
     * Tu auras probablement à utiliser des fonctions que tu as définies précédemment. Apelle les avec "defi.function();"
     */
    defi.sudokuValide = function(sudoku){
        // ton code ici
    }





    /*
     * Cet exercice n'est pas prêt encore
     */
    defi.calculeChoix = function(s){
        alert('Pas encore disponible!');
    }

    /*
     * Cet exercice n'est pas prêt encore
     */
    defi.simplifie = function(s){
        alert('Pas encore disponible!');
        sudoku.imprimeTableau(s);
    }

    /*
     * Cet exercice n'est pas prêt encore
     */
    defi.resoudre = function(s){
        alert('Pas encore disponible!');
        sudoku.imprimeTableau(s);
    }

})(this);
