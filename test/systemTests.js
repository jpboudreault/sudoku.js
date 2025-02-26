// 95 "difficult" puzzles from http://magictour.free.fr/top95
var TEST_PUZZLES = [
    "4.....8.5.3..........7......2.....6.....8.4......1.......6.3.7.5..2.....1.4......",
    "52...6.........7.13...........4..8..6......5...........418.........3..2...87.....",
    "6.....8.3.4.7.................5.4.7.3..2.....1.6.......2.....5.....8.6......1....",
    "48.3............71.2.......7.5....6....2..8.............1.76...3.....4......5....",
    "....14....3....2...7..........9...3.6.1.............8.2.....1.4....5.6.....7.8...",
    "......52..8.4......3...9...5.1...6..2..7........3.....6...1..........7.4.......3.",
    "6.2.5.........3.4..........43...8....1....2........7..5..27...........81...6.....",
    ".524.........7.1..............8.2...3.....6...9.5.....1.6.3...........897........",
    "6.2.5.........4.3..........43...8....1....2........7..5..27...........81...6.....",
    ".923.........8.1...........1.7.4...........658.........6.5.2...4.....7.....9.....",
    "6..3.2....5.....1..........7.26............543.........8.15........4.2........7..",
    ".6.5.1.9.1...9..539....7....4.8...7.......5.8.817.5.3.....5.2............76..8...",
    "..5...987.4..5...1..7......2...48....9.1.....6..2.....3..6..2.......9.7.......5..",
    "3.6.7...........518.........1.4.5...7.....6.....2......2.....4.....8.3.....5.....",
    "1.....3.8.7.4..............2.3.1...........958.........5.6...7.....8.2...4.......",
    "6..3.2....4.....1..........7.26............543.........8.15........4.2........7..",
    "....3..9....2....1.5.9..............1.2.8.4.6.8.5...2..75......4.1..6..3.....4.6.",
    "45.....3....8.1....9...........5..9.2..7.....8.........1..4..........7.2...6..8..",
    ".237....68...6.59.9.....7......4.97.3.7.96..2.........5..47.........2....8.......",
    "..84...3....3.....9....157479...8........7..514.....2...9.6...2.5....4......9..56",
    ".98.1....2......6.............3.2.5..84.........6.........4.8.93..5...........1..",
    "..247..58..............1.4.....2...9528.9.4....9...1.........3.3....75..685..2...",
    "4.....8.5.3..........7......2.....6.....5.4......1.......6.3.7.5..2.....1.9......",
    ".2.3......63.....58.......15....9.3....7........1....8.879..26......6.7...6..7..4",
    "1.....7.9.4...72..8.........7..1..6.3.......5.6..4..2.........8..53...7.7.2....46",
    "4.....3.....8.2......7........1...8734.......6........5...6........1.4...82......",
    ".......71.2.8........4.3...7...6..5....2..3..9........6...7.....8....4......5....",
    "6..3.2....4.....8..........7.26............543.........8.15........8.2........7..",
    ".47.8...1............6..7..6....357......5....1..6....28..4.....9.1...4.....2.69.",
    "......8.17..2........5.6......7...5..1....3...8.......5......2..4..8....6...3....",
    "38.6.......9.......2..3.51......5....3..1..6....4......17.5..8.......9.......7.32",
    "...5...........5.697.....2...48.2...25.1...3..8..3.........4.7..13.5..9..2...31..",
    ".2.......3.5.62..9.68...3...5..........64.8.2..47..9....3.....1.....6...17.43....",
    ".8..4....3......1........2...5...4.69..1..8..2...........3.9....6....5.....2.....",
    "..8.9.1...6.5...2......6....3.1.7.5.........9..4...3...5....2...7...3.8.2..7....4",
    "4.....5.8.3..........7......2.....6.....5.8......1.......6.3.7.5..2.....1.8......",
    "1.....3.8.6.4..............2.3.1...........958.........5.6...7.....8.2...4.......",
    "1....6.8..64..........4...7....9.6...7.4..5..5...7.1...5....32.3....8...4........",
    "249.6...3.3....2..8.......5.....6......2......1..4.82..9.5..7....4.....1.7...3...",
    "...8....9.873...4.6..7.......85..97...........43..75.......3....3...145.4....2..1",
    "...5.1....9....8...6.......4.1..........7..9........3.8.....1.5...2..4.....36....",
    "......8.16..2........7.5......6...2..1....3...8.......2......7..3..8....5...4....",
    ".476...5.8.3.....2.....9......8.5..6...1.....6.24......78...51...6....4..9...4..7",
    ".....7.95.....1...86..2.....2..73..85......6...3..49..3.5...41724................",
    ".4.5.....8...9..3..76.2.....146..........9..7.....36....1..4.5..6......3..71..2..",
    ".834.........7..5...........4.1.8..........27...3.....2.6.5....5.....8........1..",
    "..9.....3.....9...7.....5.6..65..4.....3......28......3..75.6..6...........12.3.8",
    ".26.39......6....19.....7.......4..9.5....2....85.....3..2..9..4....762.........4",
    "2.3.8....8..7...........1...6.5.7...4......3....1............82.5....6...1.......",
    "6..3.2....1.....5..........7.26............843.........8.15........8.2........7..",
    "1.....9...64..1.7..7..4.......3.....3.89..5....7....2.....6.7.9.....4.1....129.3.",
    ".........9......84.623...5....6...453...1...6...9...7....1.....4.5..2....3.8....9",
    ".2....5938..5..46.94..6...8..2.3.....6..8.73.7..2.........4.38..7....6..........5",
    "9.4..5...25.6..1..31......8.7...9...4..26......147....7.......2...3..8.6.4.....9.",
    "...52.....9...3..4......7...1.....4..8..453..6...1...87.2........8....32.4..8..1.",
    "53..2.9...24.3..5...9..........1.827...7.........981.............64....91.2.5.43.",
    "1....786...7..8.1.8..2....9........24...1......9..5...6.8..........5.9.......93.4",
    "....5...11......7..6.....8......4.....9.1.3.....596.2..8..62..7..7......3.5.7.2..",
    ".47.2....8....1....3....9.2.....5...6..81..5.....4.....7....3.4...9...1.4..27.8..",
    "......94.....9...53....5.7..8.4..1..463...........7.8.8..7.....7......28.5.26....",
    ".2......6....41.....78....1......7....37.....6..412....1..74..5..8.5..7......39..",
    "1.....3.8.6.4..............2.3.1...........758.........7.5...6.....8.2...4.......",
    "2....1.9..1..3.7..9..8...2.......85..6.4.........7...3.2.3...6....5.....1.9...2.5",
    "..7..8.....6.2.3...3......9.1..5..6.....1.....7.9....2........4.83..4...26....51.",
    "...36....85.......9.4..8........68.........17..9..45...1.5...6.4....9..2.....3...",
    "34.6.......7.......2..8.57......5....7..1..2....4......36.2..1.......9.......7.82",
    "......4.18..2........6.7......8...6..4....3...1.......6......2..5..1....7...3....",
    ".4..5..67...1...4....2.....1..8..3........2...6...........4..5.3.....8..2........",
    ".......4...2..4..1.7..5..9...3..7....4..6....6..1..8...2....1..85.9...6.....8...3",
    "8..7....4.5....6............3.97...8....43..5....2.9....6......2...6...7.71..83.2",
    ".8...4.5....7..3............1..85...6.....2......4....3.26............417........",
    "....7..8...6...5...2...3.61.1...7..2..8..534.2..9.......2......58...6.3.4...1....",
    "......8.16..2........7.5......6...2..1....3...8.......2......7..4..8....5...3....",
    ".2..........6....3.74.8.........3..2.8..4..1.6..5.........1.78.5....9..........4.",
    ".52..68.......7.2.......6....48..9..2..41......1.....8..61..38.....9...63..6..1.9",
    "....1.78.5....9..........4..2..........6....3.74.8.........3..2.8..4..1.6..5.....",
    "1.......3.6.3..7...7...5..121.7...9...7........8.1..2....8.64....9.2..6....4.....",
    "4...7.1....19.46.5.....1......7....2..2.3....847..6....14...8.6.2....3..6...9....",
    "......8.17..2........5.6......7...5..1....3...8.......5......2..3..8....6...4....",
    "963......1....8......2.5....4.8......1....7......3..257......3...9.2.4.7......9..",
    "15.3......7..4.2....4.72.....8.........9..1.8.1..8.79......38...........6....7423",
    "..........5724...98....947...9..3...5..9..12...3.1.9...6....25....56.....7......6",
    "....75....1..2.....4...3...5.....3.2...8...1.......6.....1..48.2........7........",
    "6.....7.3.4.8.................5.4.8.7..2.....1.3.......2.....5.....7.9......1....",
    "....6...4..6.3....1..4..5.77.....8.5...8.....6.8....9...2.9....4....32....97..1..",
    ".32.....58..3.....9.428...1...4...39...6...5.....1.....2...67.8.....4....95....6.",
    "...5.3.......6.7..5.8....1636..2.......4.1.......3...567....2.8..4.7.......2..5..",
    ".5.3.7.4.1.........3.......5.8.3.61....8..5.9.6..1........4...6...6927....2...9..",
    "..5..8..18......9.......78....4.....64....9......53..2.6.........138..5....9.714.",
    "..........72.6.1....51...82.8...13..4.........37.9..1.....238..5.4..9.........79.",
    "...658.....4......12............96.7...3..5....2.8...3..19..8..3.6.....4....473..",
    ".2.3.......6..8.9.83.5........2...8.7.9..5........6..4.......1...1...4.22..7..8.9",
    ".5..9....1.....6.....3.8.....8.4...9514.......3....2..........4.8...6..77..15..6.",
    ".....2.......7...17..3...9.8..7......2.89.6...13..6....9..5.824.....891..........",
    "3...8.......7....51..............36...2..4....7...........6.13..452...........8.."
]


// Solve
// =====
module('Solve');

test("Solve", function(){
    var puz1 = [
        "52...6.........7.13...........4..8..6......5...........418.........3."+
        ".2...87.....",
        "527316489896542731314987562172453896689271354453698217941825673765134"+
        "928238769145"
    ] 
    var puz2 = [
        "6.....8.3.4.7.................5.4.7.3..2.....1.6.......2.....5.....8."+
        "6......1....",
        "617459823248736915539128467982564371374291586156873294823647159791385"+
        "642465912738"
    ]
    var puz3 = [
        ".........9......84.623...5....6...453...1...6...9...7....1.....4.5..2"+
        "....3.8....9",
        "174589362953261784862347951219673845387415296546928173628194537495732"+
        "618731856429"
    ]
    var puz_unsolvable = 
        ".........9......84.623...5....6...453...1...6...9...7....1.....4.5..2"+
        "....3.8...99";
    var puz_unsolvable2 = "5168497323.46.2...5.97...65135.6.9.7472591..696837."+
        ".5.253186.746842.75..791.5.6.8";
    var puz_too_big = 
        ".........9......84.623...5....6...453...1...6...9...7....1.....4.5..2"+
        "....3.8....91";
    var puz_invalid_chars = 
        ".........9......84.623...5....6...453...1...6...9...7....1.....4.5..2"+
        "....3.8..!.9";
    
    // Solve some hard puzzles with known answers
    ok(sudoku.solve(puz1[0]) === puz1[1], puz1[0] + " -> " + puz1[1]);
    ok(sudoku.solve(puz2[0]) === puz2[1], puz2[0] + " -> " + puz2[1]);
    ok(sudoku.solve(puz3[0]) === puz3[1], puz3[0] + " -> " + puz3[1]);
    
    // Solve all 95 difficult puzzles from above without any errors
    for(var i in TEST_PUZZLES){
        ok(sudoku.solve(TEST_PUZZLES[i]));
    }
    
    // Try to solve unsolvable puzzles
    ok(!sudoku.solve(puz_unsolvable), "Unsolvable");
    ok(!sudoku.solve(puz_unsolvable2), "Unsolvable 2");
    
    // Board too big
    throws(function(){sudoku.solve(puz_too_big)}, "Invalid board size");
    
    // Board has invalid character
    throws(function(){sudoku.solve(puz_invalid_chars)}, "Invalid characters");
});

test("Get candidates map", function(){
    var puz = 
        "4.....8.5.3..........7......2.....6.....8.4......1.......6.3.7.5..2.."+
        "...1.4......";
    var puz_candidates = {
        "A1": "4", "A2": "1679", "A3": "12679", "A4": "139", "A5": "2369",
        "A6": "269", "A7": "8", "A8": "1239", "A9": "5", "B1": "26789",
        "B2": "3", "B3": "1256789",  "B4": "14589", "B5": "24569",
        "B6": "245689", "B7": "12679", "B8": "1249", "B9": "124679", 
        "C1": "2689", "C2": "15689", "C3": "125689", "C4": "7", "C5": "234569",
        "C6": "245689", "C7": "12369", "C8": "12349", "C9": "123469",
        "D1": "3789", "D2": "2", "D3": "15789",  "D4": "3459", "D5": "34579",
        "D6": "4579", "D7": "13579", "D8": "6", "D9": "13789",  "E1": "3679",
        "E2": "15679", "E3": "15679", "E4": "359", "E5": "8", "E6": "25679", 
        "E7": "4", "E8": "12359", "E9": "12379", "F1": "36789", "F2": "4",
        "F3": "56789",  "F4": "359", "F5": "1", "F6": "25679", "F7": "23579",
        "F8": "23589", "F9": "23789",  "G1": "289", "G2": "89", "G3": "289",
        "G4": "6", "G5": "459", "G6": "3",  "G7": "1259", "G8": "7",
        "G9": "12489",
        "H1": "5", "H2": "6789", "H3": "3",  "H4": "2", "H5": "479", "H6": "1",
        "H7": "69", "H8": "489", "H9": "4689",  "I1": "1", "I2": "6789",
        "I3": "4", "I4": "589", "I5": "579", "I6": "5789",  "I7": "23569",
        "I8": "23589", "I9": "23689"
    }
    var puz_too_big = 
        ".........9......84.623...5....6...453...1...6...9...7....1.....4.5..2"+
        "....3.8....91";
    var puz_invalid_chars = 
        ".........9......84.623...5....6...453...1...6...9...7....1.....4.5..2"+
        "....3.8..!.9";
    
    // Get candidates for puzzle
    deepEqual(sudoku._get_candidates_map(puz), puz_candidates, puz);
    
    // Board too big
    throws(function(){sudoku._get_candidates_map(puz_too_big)}, 
            "Invalid board size");
    
    // Board has invalid character
    throws(function(){sudoku._get_candidates_map(puz_invalid_chars)}, 
            "Invalid characters");
});

test("Get candidates", function(){
    deepEqual(
        sudoku.get_candidates(
            "4.25..389....4.265..523.147..1652.7.6..1945322543876915....3.1....4..9.....8....3"
        ),[
            ["4","167","2","5","167","16","3","8","9"],
            ["13789","13789","3789","79","4","189","2","6","5"],
            ["89","689","5","2","3","689","1","4","7"],
            ["389","389","1","6","5","2","48","7","48"],
            ["6","78","78","1","9","4","5","3","2"],
            ["2","5","4","3","8","7","6","9","1"],
            ["5","246789","6789","79","267","3","478","1","468"],
            ["1378","123678","3678","4","1267","156","9","25","68"],
            ["179","124679","679","8","1267","1569","47","25","3"]
        ])
});

// Square relationships
// ====================

module("Square relationships");

test("Get square -> vals map", function(){
    var puz = 
        "4.....8.5.3..........7......2.....6.....8.4......1.......6.3.7.5..2.."+
        "...1.4......";
        
    deepEqual(sudoku._get_square_vals_map(puz), {
        "A1": "4", "A2": ".", "A3": ".", "A4": ".", "A5": ".", "A6": ".", 
        "A7": "8", "A8": ".", "A9": "5", "B1": ".", "B2": "3", "B3": ".", 
        "B4": ".", "B5": ".", "B6": ".", "B7": ".", "B8": ".", "B9": ".", 
        "C1": ".", "C2": ".", "C3": ".", "C4": "7", "C5": ".", "C6": ".", 
        "C7": ".", "C8": ".", "C9": ".", "D1": ".", "D2": "2", "D3": ".", 
        "D4": ".", "D5": ".", "D6": ".", "D7": ".", "D8": "6", "D9": ".", 
        "E1": ".", "E2": ".", "E3": ".", "E4": ".", "E5": "8", "E6": ".", 
        "E7": "4", "E8": ".", "E9": ".", "F1": ".", "F2": ".", "F3": ".", 
        "F4": ".", "F5": "1", "F6": ".", "F7": ".", "F8": ".", "F9": ".", 
        "G1": ".", "G2": ".", "G3": ".", "G4": "6", "G5": ".", "G6": "3", 
        "G7": ".", "G8": "7", "G9": ".", "H1": "5", "H2": ".", "H3": ".", 
        "H4": "2", "H5": ".", "H6": ".", "H7": ".", "H8": ".", "H9": ".", 
        "I1": "1", "I2": ".", "I3": "4", "I4": ".", "I5": ".", "I6": ".", 
        "I7": ".", "I8": ".", "I9": "."
    }, "Testing with medium puzzle");
    
    throws(function(){sudoku._get_square_vals_map("")}, 
            "Size squares/puzzle size mismatch")
});

test("Get square -> units map", function(){
    var rows = "ABCDEFGHI";
    var cols = "123456789";
    var squares = sudoku._cross(rows, cols);
    var units = sudoku._get_all_units(rows, cols);
    var square_units_map = sudoku._get_square_units_map(squares, units);

    // Check units for A1
    deepEqual(square_units_map["A1"], [
        ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9"],
        ["A1", "B1", "C1", "D1", "E1", "F1", "G1", "H1", "I1"],
        ["A1", "A2", "A3", "B1", "B2", "B3", "C1", "C2", "C3"]
    ], "Units for A1");

    // Check units for E5
    deepEqual(square_units_map["E5"], [
        ["E1", "E2", "E3", "E4", "E5", "E6", "E7", "E8", "E9"],
        ["A5", "B5", "C5", "D5", "E5", "F5", "G5", "H5", "I5"],
        ["D4", "D5", "D6", "E4", "E5", "E6", "F4", "F5", "F6"]
    ], "Units for E5");
});

test("Get square -> peers map", function(){
    var rows = "ABCDEFGHI";
    var cols = "123456789";
    var squares = sudoku._cross(rows, cols);
    var units = sudoku._get_all_units(rows, cols);
    var square_units_map = sudoku._get_square_units_map(squares, units);
    var square_peers_map = sudoku._get_square_peers_map(squares, 
            square_units_map);
            
    // Check peers for A1
    deepEqual(square_peers_map["A1"], [
        "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "B1", "C1", "D1", "E1", 
        "F1", "G1", "H1", "I1", "B2", "B3", "C2", "C3"],
    "Peers for A1");
    
    // Check peers for C2
    deepEqual(square_peers_map["C2"], [
        "C1", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "A2", "B2", "D2", "E2", 
        "F2", "G2", "H2", "I2", "A1", "A3", "B1", "B3"],
    "Peers for C2"); 
});

test("Get all units", function(){
    var rows = "ABCDEFGHI";
    var cols = "123456789";
    var all_units = sudoku._get_all_units(rows, cols);

    // Make sure we have exactly 27 units (9 rows + 9 columns + 9 boxes)
    equal(all_units.length, 27, "27 units");

    // Look for the first row unit
    deepEqual(all_units[0],
        ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9"],
        "First row unit")

    // Look for the first col unit
    deepEqual(all_units[9],
        ["A1", "B1", "C1", "D1", "E1", "F1", "G1", "H1", "I1"],
        "First col unit")

    // Look for the first box unit
    deepEqual(all_units[18],
        ["A1", "A2", "A3", "B1", "B2", "B3", "C1", "C2", "C3"],
        "First box unit")
});


// Conversions
// ===========
module("Conversions");

test("Board string -> grid", function(){
    var board1 = ".5.1972.8.9.2651.7217483596.4.3..7.9.3.7.98...796..32.981536472325974681764812953";
    var board2 = ".1.872.4..47695....651437..4217.8.3..7.2.4...58.9.12746583294171924873..734516...";
    var board3 = "23.94.67.8..3259149..76.32.1.....7925.321.4864..68.5317..1....96598721433...9...7";
    
    deepEqual(sudoku.board_string_to_grid(board1), [
        [".","5",".","1","9","7","2",".","8"],
        [".","9",".","2","6","5","1",".","7"],
        ["2","1","7","4","8","3","5","9","6"],
        [".","4",".","3",".",".","7",".","9"],
        [".","3",".","7",".","9","8",".","."],
        [".","7","9","6",".",".","3","2","."],
        ["9","8","1","5","3","6","4","7","2"],
        ["3","2","5","9","7","4","6","8","1"],
        ["7","6","4","8","1","2","9","5","3"]
    ]);
    deepEqual(sudoku.board_string_to_grid(board2), [
        [".","1",".","8","7","2",".","4","."],
        [".","4","7","6","9","5",".",".","."],
        [".","6","5","1","4","3","7",".","."],
        ["4","2","1","7",".","8",".","3","."],
        [".","7",".","2",".","4",".",".","."],
        ["5","8",".","9",".","1","2","7","4"],
        ["6","5","8","3","2","9","4","1","7"],
        ["1","9","2","4","8","7","3",".","."],
        ["7","3","4","5","1","6",".",".","."]
    ]);
    deepEqual(sudoku.board_string_to_grid(board3), [
        ["2","3",".","9","4",".","6","7","."],
        ["8",".",".","3","2","5","9","1","4"],
        ["9",".",".","7","6",".","3","2","."],
        ["1",".",".",".",".",".","7","9","2"],
        ["5",".","3","2","1",".","4","8","6"],
        ["4",".",".","6","8",".","5","3","1"],
        ["7",".",".","1",".",".",".",".","9"],
        ["6","5","9","8","7","2","1","4","3"],
        ["3",".",".",".","9",".",".",".","7"]
    ]);
});

test("Board grid -> string", function(){
    var grid1 = [
        [".","5",".","1","9","7","2",".","8"],
        [".","9",".","2","6","5","1",".","7"],
        ["2","1","7","4","8","3","5","9","6"],
        [".","4",".","3",".",".","7",".","9"],
        [".","3",".","7",".","9","8",".","."],
        [".","7","9","6",".",".","3","2","."],
        ["9","8","1","5","3","6","4","7","2"],
        ["3","2","5","9","7","4","6","8","1"],
        ["7","6","4","8","1","2","9","5","3"]
    ];
    var grid2 = [
        [".","1",".","8","7","2",".","4","."],
        [".","4","7","6","9","5",".",".","."],
        [".","6","5","1","4","3","7",".","."],
        ["4","2","1","7",".","8",".","3","."],
        [".","7",".","2",".","4",".",".","."],
        ["5","8",".","9",".","1","2","7","4"],
        ["6","5","8","3","2","9","4","1","7"],
        ["1","9","2","4","8","7","3",".","."],
        ["7","3","4","5","1","6",".",".","."]
    ];
    var grid3 = [
        ["2","3",".","9","4",".","6","7","."],
        ["8",".",".","3","2","5","9","1","4"],
        ["9",".",".","7","6",".","3","2","."],
        ["1",".",".",".",".",".","7","9","2"],
        ["5",".","3","2","1",".","4","8","6"],
        ["4",".",".","6","8",".","5","3","1"],
        ["7",".",".","1",".",".",".",".","9"],
        ["6","5","9","8","7","2","1","4","3"],
        ["3",".",".",".","9",".",".",".","7"]
    ];
    
    deepEqual(sudoku.board_grid_to_string(grid1), 
        ".5.1972.8.9.2651.7217483596.4.3..7.9.3.7.98...796..32.981536472325974681764812953"
    );
    deepEqual(sudoku.board_grid_to_string(grid2), 
        ".1.872.4..47695....651437..4217.8.3..7.2.4...58.9.12746583294171924873..734516..."
    );
    deepEqual(sudoku.board_grid_to_string(grid3), 
        "23.94.67.8..3259149..76.32.1.....7925.321.4864..68.5317..1....96598721433...9...7"
    );
});

test("Integration", function(){
    for(var i = 0; i < 10; ++i){
        var board = sudoku.generate();
        var board_grid = sudoku.board_string_to_grid(board);
        var board_string = sudoku.board_grid_to_string(board_grid);
        
        ok(board === board_string);
    }
});


// Utility
// =======
module("Utility");

test("Validate board", function(){
   var report_empty             = sudoku.validate_board();
   var report_invalid_size      = sudoku.validate_board("123");
   var report_invalid_char      = sudoku.validate_board(
        ".3.9564272..784136764231589327149658.4.56..73..637._14412893765.8.627"+
        "341673415892");
   var report_good              = sudoku.validate_board(
        ".3.9564272..784136764231589327149658.4.56..73..637..14412893765.8.627"+
        "341673415892");
   
   ok(report_empty !== true);
   ok(report_invalid_size !== true);
   ok(report_invalid_char !== true);
   ok(report_good);
});

test("Cross product", function(){

    // Simple case
    deepEqual(sudoku._cross('a','1'), ["a1"], "Simple case");

    // Classic case
    deepEqual(
        sudoku._cross("abc", "123"),
        ["a1", "a2", "a3", "b1", "b2", "b3", "c1", "c2", "c3"],
        "Classic case"
    );

    // Empty case
    deepEqual(sudoku._cross('',''), [], "Empty case");

    // Classic case with arrays
    deepEqual(
        sudoku._cross(['a', 'b', 'c'], [1, 2, 3]),
        ["a1", "a2", "a3", "b1", "b2", "b3", "c1", "c2", "c3"],
        "Classic case with arrays"
    );

    // Mismatched size
    deepEqual(
        sudoku._cross(['a', 'b', 'c'], [1, 2]),
        ["a1", "a2", "b1", "b2", "c1", "c2"],
        "Mismatched size"
    );

    // Empty default
    deepEqual(sudoku._cross(), [], "Empty arrays");
});

test("_in", function(){
    var seq = [1, 2, 3];
    var seq_string = "abc";
    
    // Normal
    ok(sudoku._in(1, seq), "Normal use case");
    ok(!sudoku._in(0, seq), "Normal use case (not)");
    
    // String
    ok(sudoku._in('a', seq_string), "String");
    ok(!sudoku._in('z', seq_string), "String (not)");
});

