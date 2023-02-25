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
     * Retourne une chaine avec les 81 caractères.
     */
    defi.retourneUnSudoku = function(){
       // ton code ici
       return "012345678901234567890123456789012345678901234567890123456789012345678901234567891"
    };




    /*
     * Dans cet exercice, tu dois extraire les valeurs de la première ligne d'une chaine de sudoku.
     * Ta fonction recoit une valeur en argument nommée 'sudoku' qui contient 81 charactères
     *
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
     * Dans cet exercice, tu dois extraire les valeurs de la première ligne d'une chaine de sudoku.
     * Ta fonction recoit une valeur en argument nommée 'sudoku' qui contient 81 charactères
     *
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
     * Un sudoku a 81 cases. Dans ce jeu les valeurs des cases sont contenues dans une chaine de caracteres (String).
     * Chaque case peut avoir une valeur de 1 à 9 ou être inconnue ce qui est représenté par un '.'
     * Retourne une chaine avec les 81 caractères.
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
     * Un sudoku a 81 cases. Dans ce jeu les valeurs des cases sont contenues dans une chaine de caracteres (String).
     * Chaque case peut avoir une valeur de 1 à 9 ou être inconnue ce qui est représenté par un '.'
     * Retourne une chaine avec les 81 caractères.
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
     * Un sudoku a 81 cases. Dans ce jeu les valeurs des cases sont contenues dans une chaine de caracteres (String).
     * Chaque case peut avoir une valeur de 1 à 9 ou être inconnue ce qui est représenté par un '.'
     * Retourne une chaine avec les 81 caractères.
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
     * Un sudoku a 81 cases. Dans ce jeu les valeurs des cases sont contenues dans une chaine de caracteres (String).
     * Chaque case peut avoir une valeur de 1 à 9 ou être inconnue ce qui est représenté par un '.'
     * Retourne une chaine avec les 81 caractères.
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
