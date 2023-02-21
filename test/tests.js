module('Défi');

test("retourneUn", function(){
    ok(defi.retourneUn() == 1, defi.retourneUn() + " -> " + 1);
});

test("returneChaine", function(){
    ok(typeof defi.returneChaine() === "String", typeof defi.retourneUn() + " -> String");
});

