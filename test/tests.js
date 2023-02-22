module('Defi');

test("retourneUn", function(){
    ok(defi.retourneUn() == 1, defi.retourneUn() + " -> " + 1);
});

test("retourneChaine", function(){
    ok(typeof defi.retourneChaine() === "String", typeof defi.retourneUn() + " -> String");
});


test("retourneSudoku", function(){
    var s = defi.retourneSudoku();
    ok(typeof s === "String", typeof s + " -> String");
    ok(s.length == 81 , s.length + " -> 81");
});
