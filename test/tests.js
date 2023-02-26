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

test("retourneLaPremiereColone", function(){
    var s = defi.retourneLaPremiereColone(puzzles[1]);
    var expected = '198235647'.split("");
    deepEqual(s, expected, "Expect -> " + expected );
});

test("retourneUneColone", function(){
    var s = defi.retourneUneColone(puzzles[1],1);
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
