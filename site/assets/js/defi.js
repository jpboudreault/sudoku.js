 (function(root){
    var defi = root.defi = {};




    /*
     * En JavaScript une fonction peut retourner une valeur avec la commande 'return'
     * Dans cet exercice retourne la valeur 1.
     */
    defi.retourneUn = function(){
        // ton code ici
        return 1;
    };




    /*
    * En JavaScript une chaine de caractère est appelée String et est délimitée au début et à la fin par "" ou ''
    * Dans cet exercice retourne la valeur salut.
    */
    defi.retourneUneChaine = function(){
       // ton code ici
       return "salut";
    };




    /*
     * Un sudoku a 81 cases. Dans ce jeu les valeurs des cases sont contenues dans un tableau deux dimenstions [ligne][col].
     * Chaque case peut avoir une valeur de 1 à 9 ou être inconnue ce qui est représenté par un '.'
     * Dans cet exercice retourne un tableau de 9 éléments qui contient en chaque position de une valeur entre 1 et 9 ou le .
     * Un tableau est représenté par des [] avec une virgule entre chaque element.
     */
    defi.retourneUnTableau = function(){
       // ton code ici
       return ["1", "2","3","4","5","6","7","8","9"];
    };




    /*
     * En programmation, les fonctions font du travail sur des objets. Le plus souvent, les objets leurs sont fournis en arguments, c'est a dire en parenthese.
     *
     * Dans cet exercice tu dois retourner l'argument qui est fourni à la fonction sans le modifier
     */
    defi.retourneUnArgument = function (argument1) {
        // ton code ici
        return argument1;
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
        var x = 0;
        for (let i = 0; i <= 50; i++) {
            x += i;
        }
        return x;
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
       var s = [];
       for (let i = 0; i < 9; i++) {
         s[i] = sudoku[0][i];
       }
       return s;
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
       var s = [];
       for (let i = 0; i < 9; i++) {
         s[i] = sudoku[ligne][i];
       }
       return s;
    };





    /*
     * Retroune un tableau qui représente la première colonne du sudoku. Pense aux index des élements que tu cherches.
     */
    defi.retourneLaPremiereColone = function(sudoku){
       // ton code ici
      var s = [];
       for (let i = 0; i < 9; i++) {
         s[i] = sudoku[i][0];
       }
       return s;
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
      var s = [];
       for (let i = 0; i < 9; i++) {
         s[i] = sudoku[i][colonne];
       }
       return s;
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
        var s = [];
        for (let i = 0; i < 3; i++) {
           for (let j = 0; j < 3; j++) {
                s.push(sudoku[i][j]);
            }
        }
        return s;
    };




    /*
     * Ajuste to code pour retourner une chaine qui représente n'importe quel bloc du sudoku
     * N'oublie pas que le premier bloc est 0 et le dernier 8
     */
    defi.retourneUnBloc = function(sudoku, bloc){
       // ton code ici
      var s = [];
      var ligneOffset = Math.floor(bloc / 3);
      var colOffset = bloc % 3;
      for (let i = 0; i < 3; i++) {
         for (let j = 0; j < 3; j++) {
            s.push(sudoku[ligneOffset*3+i][colOffset*3+j]);
        }
      }
      return s;
    };


})(this);
