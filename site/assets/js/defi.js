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
       return "2";
    };




    /*
     * Un sudoku a 81 cases. Dans ce jeu les valeurs des cases sont contenues dans une chaine de caracteres (String).
     * Chaque case peut avoir une valeur de 1 à 9 ou être inconnue ce qui est représenté par un '.'
     * Dans cet exercice retourne une chaine avec les 81 caractères.
     */
    defi.retourneUnSudoku = function(){
       // ton code ici
       return "012345678901234567890123456789012345678901234567890123456789012345678901234567891";
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
     * Dans cet exercice tu dois retourner une chaine de charactère qui combine les deux arguments.
     * Tu peux additionner des chaines avec l'opérateur +
     */
    defi.additionneDeuxChaines = function (chaine1, chaine2) {
        // ton code ici
        return chaine1 + chaine2;
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
    defi.gardeUneValeurTemporaire = function () {
    // ton code ici
        var x = 0;
        for (let i = 0; i <= 50; i++) {
            x += i;
        }
        return x;
    };




    /*
     * Dans cet exercice, tu dois extraire les valeurs de la première ligne d'une chaine de sudoku.
     * Ta fonction recoit une valeur en argument nommée 'sudoku' qui contient 81 charactères
     *
     * On peut accéder à un caratère dans une chaine par sa position en l'accedant comme un tableau [] ou par la fonction charAt() . ex chaine[2] donne le 3e caractère
     * Note que les elements dans les tableaux sont 0 based (le 1er élément est à la position 0)
     *
     * L'utilisation d'une boucle for est fortement recommandée https://www.w3schools.com/js/js_loop_for.asp
     */
    defi.retournePremiereLigne = function(sudoku){
       // ton code ici
       var s = "";
       for (let i = 0; i < 9; i++) {
         s += sudoku[i];
      }
       return s;
    };




    /*
     * Dans cet exercice, tu dois extraire les valeurs d'une ligne sécifique du sudoku. L'argument ligne est le numéro de la ligne moins un.
     * L'utilisation d'une boucle for est nécessaire https://www.w3schools.com/js/js_loop_for.asp
     *
     * Pense aux index des élements que tu souhaite avoir.
     *    0   1    2  ...
     *    9   10  11  ...
     *    18  19  20  ...
     */
    defi.retourneUneLigne = function(sudoku, ligne){
       // ton code ici
       var s = "";
       for (let i = 0; i < 9; i++) {
         s += sudoku[i + 9*ligne];
      }
       return s;
    };





    /*
     * Retroune une chaine qui représente la première colonne du sudoku. Pense aux index des élements que tu cherches.
     */
    defi.retournePremiereColone = function(sudoku){
       // ton code ici
       var s = "";
       for (let i = 0; i < 9; i++) {
         s += sudoku[9*i];
      }
       return s;
    };





    /*
     * Retroune une chaine qui une colonne du sudoku. Pense aux index des élements que tu cherches.
     */
    defi.retourneUneColone = function(sudoku, colonne){
       // ton code ici
       var s = "";
       for (let i = 0; i < 9; i++) {
         s += sudoku[9*i + colonne];
      }
       return s;
    };




    /*
     * Retourne une chaine qui représente les élements du premier bloc de 9 cases du sudoku
     *
     * Pense aux index des élements que tu souhaite avoir.
     *    0   1    2  ...
     *    9   10  11  ...
     *    18  19  20  ...
     */
    defi.retournePremierBloc = function(sudoku){
       // ton code ici
      var s = "";
      for (let i = 0; i < 3; i++) {
         for (let j = 0; j < 3; j++) {
            s += sudoku[j + 9 * i];
        }
      }
      return s;
    };




    /*
     * Ajuste to code pour retourner une chaine qui représente n'importe quel bloc du sudoku
     */
    defi.retourneUnBloc = function(sudoku, bloc){
       // ton code ici
      var s = "";
      var colOffset = Math.floor(bloc / 3);
      var ligneOffset = bloc % 3;
      for (let i = 0; i < 3; i++) {
         for (let j = 0; j < 3; j++) {
            let x = j + colOffset * 3 + 9 * (i + ligneOffset * 3);
            s += sudoku[x];
        }
      }
      return s;
    };


})(this);
