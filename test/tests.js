module('Defi');

var puzz = [
    ".........9......84.623...5....6...453...1...6...9...7....1.....4.5..2....3.8....9",
    "174589362953261784862347951219673845387415296546928173628194537495732618731856429"
];

test("retourneUn", function(){
    ok(defi.retourneUn() == 1, defi.retourneUn() + " -> " + 1);
});

test("retourneUneChaine", function(){
    ok(typeof defi.retourneUneChaine() === "string", typeof defi.retourneUneChaine() + " -> string");
});

test("retourneUnSudoku", function(){
    var s = defi.retourneUnSudoku();
    ok(typeof s === "string", typeof s + " -> string");
    ok(s.length == 81 , s.length + " -> 81");
});

test("retourneUnArgument", function(){
    var s = defi.retourneUnArgument("abcd");
    ok(s ===  "abcd", s + " -> 'abcd'");
});

test("additionneDeuxChaines", function(){
    var s = defi.additionneDeuxChaines("abcd", "efg");
    ok(s ===  "abcdefg", s + " -> 'abcdefg'");
});

test("gardeUneValeurTemporaire", function(){
    var s = defi.gardeUneValeurTemporaire();
    ok(s ===  1275, s + " -> " + 1275);
});

test("retournePremiereLigne", function(){
    var s = defi.retournePremiereLigne(puzz[1]);
    ok(s ===  "174589362", s + " -> '174589362'");
});

test("retourneUneLigne", function(){
    var s = defi.retourneUneLigne(puzz[1],2);
    ok(s ===  "862347951", s + " -> '862347951'");
});

test("retournePremiereColone", function(){
    var s = defi.retournePremiereColone(puzz[1]);
    ok(s ===  "198235647", s + " -> '198235647'");
});

test("retourneUneColone", function(){
    var s = defi.retourneUneColone(puzz[1],1);
    ok(s ===  "756184293", s + " -> '756184293'");
});

test("retournePremierBloc", function(){
    var s = defi.retournePremierBloc(puzz[1]);
    ok(s ===  "174953862", s + " -> '174953862'");
});

test("retourneUnBloc", function(){
    var s = defi.retourneUnBloc(puzz[1],8);
    ok(s ===  "537618429", s + " -> '537618429'");
});
