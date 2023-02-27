module('Defi');

var puzzles = [
    sudoku.board_string_to_grid(".........9......84.623...5....6...453...1...6...9...7....1.....4.5..2....3.8....9"),
    sudoku.board_string_to_grid("174589362953261784862347951219673845387415296546928173628194537495732618731856429")
];

test("retourneUn", function(){
    ok(defi.retourneUn() == 1, defi.retourneUn() + " -> " + 1);
});

test("retourneUneChaine", function(){
    ok(typeof defi.retourneUneChaine() === "string", typeof defi.retourneUneChaine() + " -> string");
});

test("retourneUnTableau", function(){
    var s = defi.retourneUnTableau();
    ok(s instanceof Array, " not an Array");
    ok(s.length == 9 , s.length + " -> 9");
});

test("retourneUnArgument", function(){
    var s = defi.retourneUnArgument("abcd");
    ok(s ===  "abcd", s + " -> 'abcd'");
});

test("calculeUneValeurTemporaire", function(){
    var s = defi.calculeUneValeurTemporaire();
    ok(s ===  1275, s + " -> " + 1275);
});

test("retourneLaPremiereLigne", function(){
    var s = defi.retourneLaPremiereLigne(puzzles[1]);
    var expected = '174589362'.split("");
    deepEqual(s, expected, "Expect -> " + expected );
});

test("retourneUneLigne", function(){
    var s = defi.retourneUneLigne(puzzles[1],2);
    var expected = '862347951'.split("");
    deepEqual(s, expected, "Expect -> " + expected );
});

test("retourneLaPremiereColonne", function(){
    var s = defi.retourneLaPremiereColonne(puzzles[1]);
    var expected = '198235647'.split("");
    deepEqual(s, expected, "Expect -> " + expected );
});

test("retourneUneColonne", function(){
    var s = defi.retourneUneColonne(puzzles[1],1);
    var expected = '756184293'.split("");
    deepEqual(s, expected, "Expect -> " + expected );
});

test("retourneLePremierBloc", function(){
    var s = defi.retourneLePremierBloc(puzzles[1]);
    var expected = '174953862'.split("");
    deepEqual(s, expected, "Expect -> " + expected );
});

test("retourneUnBloc", function(){
    var s = defi.retourneUnBloc(puzzles[1],7);
    var expected = '194732856'.split("");
    deepEqual(s, expected, "Expect -> " + expected );
});

test("tableauValide", function(){
    var test = "987123456";
    ok(defi.tableauValide(test.split("")), test + " -> doit être valide");

    var test = "123456789";
    ok(defi.tableauValide(test.split("")), test + " -> doit être valide");

    var test = "234765789";
    ok(!defi.tableauValide(test.split("")), test + " -> doit être invalide");

    var test = "1234765789";
    ok(!defi.tableauValide(test.split("")), test + " -> doit être invalide");
});

test("sudokuValide", function(){
    var source = "174589362953261784862347951219673845387415296546928173628194537495732618731856429";
    var game = sudoku.board_string_to_grid(source);
    ok(defi.sudokuValide(game), source + " -> doit être valide");

    var source = "174589362935261784862347951219673845387415296546928173628194537495732618731856429";
    var game = sudoku.board_string_to_grid(source);
    ok(!defi.sudokuValide(game), source + " -> doit être invalide");
});
