// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Test from "./Test.mjs";
import * as Caml_obj from "rescript/lib/es6/caml_obj.js";
import * as Core__List from "../src/Core__List.mjs";
import * as Core__Array from "../src/Core__Array.mjs";

var eq = Caml_obj.equal;

Test.run([
      [
        "ArrayTests.res",
        5,
        20,
        26
      ],
      "make"
    ], Core__Array.make(6, 7), eq, [
      7,
      7,
      7,
      7,
      7,
      7
    ]);

Test.run([
      [
        "ArrayTests.res",
        8,
        13,
        30
      ],
      "fromInitializer"
    ], Core__Array.fromInitializer(7, (function (i) {
            return i + 3 | 0;
          })), eq, [
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ]);

Test.run([
      [
        "ArrayTests.res",
        14,
        20,
        28
      ],
      "reduce"
    ], Core__Array.reduce([
          1,
          2,
          3
        ], /* [] */0, Core__List.add), eq, {
      hd: 3,
      tl: {
        hd: 2,
        tl: {
          hd: 1,
          tl: /* [] */0
        }
      }
    });

Test.run([
      [
        "ArrayTests.res",
        15,
        20,
        36
      ],
      "reduce - empty"
    ], Core__Array.reduce([], /* [] */0, Core__List.add), eq, /* [] */0);

Test.run([
      [
        "ArrayTests.res",
        18,
        13,
        30
      ],
      "reduceWithIndex"
    ], Core__Array.reduceWithIndex([
          1,
          2,
          3
        ], /* [] */0, (function (acc, v, i) {
            return {
                    hd: v + i | 0,
                    tl: acc
                  };
          })), eq, {
      hd: 5,
      tl: {
        hd: 3,
        tl: {
          hd: 1,
          tl: /* [] */0
        }
      }
    });

Test.run([
      [
        "ArrayTests.res",
        24,
        13,
        38
      ],
      "reduceWithIndex - empty"
    ], Core__Array.reduceWithIndex([], /* [] */0, (function (acc, v, i) {
            return {
                    hd: v + i | 0,
                    tl: acc
                  };
          })), eq, /* [] */0);

Test.run([
      [
        "ArrayTests.res",
        31,
        13,
        26
      ],
      "reduceRight"
    ], Core__Array.reduceRight([
          1,
          2,
          3
        ], /* [] */0, Core__List.add), eq, {
      hd: 1,
      tl: {
        hd: 2,
        tl: {
          hd: 3,
          tl: /* [] */0
        }
      }
    });

Test.run([
      [
        "ArrayTests.res",
        36,
        20,
        41
      ],
      "reduceRight - empty"
    ], Core__Array.reduceRight([], /* [] */0, Core__List.add), eq, /* [] */0);

Test.run([
      [
        "ArrayTests.res",
        39,
        13,
        35
      ],
      "reduceEightWithIndex"
    ], Core__Array.reduceRightWithIndex([
          1,
          2,
          3
        ], /* [] */0, (function (acc, v, i) {
            return {
                    hd: v + i | 0,
                    tl: acc
                  };
          })), eq, {
      hd: 1,
      tl: {
        hd: 3,
        tl: {
          hd: 5,
          tl: /* [] */0
        }
      }
    });

Test.run([
      [
        "ArrayTests.res",
        45,
        13,
        38
      ],
      "reduceWithIndex - empty"
    ], Core__Array.reduceRightWithIndex([], /* [] */0, (function (acc, v, i) {
            return {
                    hd: v + i | 0,
                    tl: acc
                  };
          })), eq, /* [] */0);

Test.run([
      [
        "ArrayTests.res",
        51,
        20,
        38
      ],
      "shuffle - length"
    ], Core__Array.shuffle([
          1,
          2,
          3
        ]).length, eq, 3);

var arr = [
  1,
  2,
  3
];

Test.run([
      [
        "ArrayTests.res",
        54,
        13,
        38
      ],
      "shuffleInPlace - length"
    ], (Core__Array.shuffleInPlace(arr), arr.length), eq, 3);

Test.run([
      [
        "ArrayTests.res",
        65,
        13,
        24
      ],
      "filterMap"
    ], Core__Array.filterMap([
          1,
          2,
          3,
          4,
          5,
          6
        ], (function (n) {
            if (n % 2 === 0) {
              return Math.imul(n, n);
            }
            
          })), eq, [
      4,
      16,
      36
    ]);

Test.run([
      [
        "ArrayTests.res",
        70,
        20,
        42
      ],
      "filterMap - no match"
    ], Core__Array.filterMap([
          1,
          2,
          3,
          4,
          5,
          6
        ], (function (param) {
            
          })), eq, []);

Test.run([
      [
        "ArrayTests.res",
        72,
        13,
        32
      ],
      "filterMap - empty"
    ], Core__Array.filterMap([], (function (n) {
            if (n % 2 === 0) {
              return Math.imul(n, n);
            }
            
          })), eq, []);

Test.run([
      [
        "ArrayTests.res",
        78,
        20,
        30
      ],
      "keepSome"
    ], Core__Array.keepSome([
          1,
          undefined,
          3
        ]), eq, [
      1,
      3
    ]);

Test.run([
      [
        "ArrayTests.res",
        80,
        13,
        34
      ],
      "keepSome - all Some"
    ], Core__Array.keepSome([
          1,
          2,
          3
        ]), eq, [
      1,
      2,
      3
    ]);

Test.run([
      [
        "ArrayTests.res",
        85,
        20,
        41
      ],
      "keepSome - all None"
    ], Core__Array.keepSome([
          undefined,
          undefined,
          undefined
        ]), eq, []);

Test.run([
      [
        "ArrayTests.res",
        86,
        20,
        38
      ],
      "keepSome - empty"
    ], Core__Array.keepSome([]), eq, []);

Test.run([
      [
        "ArrayTests.res",
        89,
        13,
        22
      ],
      "findMap"
    ], Core__Array.findMap([
          1,
          2,
          3,
          4,
          5,
          6
        ], (function (n) {
            if (n % 2 === 0) {
              return n - 8 | 0;
            }
            
          })), eq, -6);

Test.run([
      [
        "ArrayTests.res",
        94,
        20,
        40
      ],
      "findMap - no match"
    ], Core__Array.findMap([
          1,
          2,
          3,
          4,
          5,
          6
        ], (function (param) {
            
          })), eq, undefined);

Test.run([
      [
        "ArrayTests.res",
        96,
        13,
        30
      ],
      "findMap - empty"
    ], Core__Array.findMap([], (function (n) {
            if (n % 2 === 0) {
              return Math.imul(n, n);
            }
            
          })), eq, undefined);

Test.run([
      [
        "ArrayTests.res",
        102,
        20,
        33
      ],
      "lastIndexOf"
    ], [
        3,
        5,
        7,
        5,
        8
      ].lastIndexOf(5), eq, 3);

Test.run([
      [
        "ArrayTests.res",
        103,
        20,
        33
      ],
      "lastIndexOf"
    ], [
        3,
        5,
        7,
        5,
        8
      ].lastIndexOf(100), eq, -1);

Test.run([
      [
        "ArrayTests.res",
        104,
        20,
        33
      ],
      "lastIndexOf"
    ], [].lastIndexOf(100), eq, -1);

Test.run([
      [
        "ArrayTests.res",
        105,
        20,
        33
      ],
      "lastIndexOf"
    ], [{
          a: 1
        }].lastIndexOf({
          a: 1
        }), eq, -1);

Test.run([
      [
        "ArrayTests.res",
        107,
        20,
        37
      ],
      "lastIndexOfFrom"
    ], [
        3,
        5,
        7,
        5,
        8
      ].lastIndexOf(5, -3), eq, 1);

Test.run([
      [
        "ArrayTests.res",
        108,
        20,
        37
      ],
      "lastIndexOfFrom"
    ], [
        3,
        5,
        7,
        5,
        8
      ].lastIndexOf(5, 4), eq, 3);

Test.run([
      [
        "ArrayTests.res",
        109,
        20,
        37
      ],
      "lastIndexOfFrom"
    ], [
        3,
        5,
        7,
        5,
        8
      ].lastIndexOf(5, 0), eq, -1);

Test.run([
      [
        "ArrayTests.res",
        111,
        20,
        36
      ],
      "lastIndexOfOpt"
    ], Core__Array.lastIndexOfOpt([
          3,
          5,
          7,
          5,
          8
        ], 5), eq, 3);

Test.run([
      [
        "ArrayTests.res",
        112,
        20,
        36
      ],
      "lastIndexOfOpt"
    ], Core__Array.lastIndexOfOpt([
          3,
          5,
          7,
          5,
          8
        ], 100), eq, undefined);

Test.run([
      [
        "ArrayTests.res",
        113,
        20,
        36
      ],
      "lastIndexOfOpt"
    ], Core__Array.lastIndexOfOpt([], 100), eq, undefined);

Test.run([
      [
        "ArrayTests.res",
        114,
        20,
        36
      ],
      "lastIndexOfOpt"
    ], Core__Array.lastIndexOfOpt([{
            a: 1
          }], {
          a: 1
        }), eq, undefined);

Test.run([
      [
        "ArrayTests.res",
        116,
        20,
        30
      ],
      "findLast"
    ], [
        3,
        5,
        7,
        5,
        8
      ].findLast(function (i) {
          return i < 7;
        }), eq, 5);

Test.run([
      [
        "ArrayTests.res",
        117,
        20,
        30
      ],
      "findLast"
    ], [
        3,
        5,
        7,
        5,
        8
      ].findLast(function (i) {
          return i > 100;
        }), eq, undefined);

Test.run([
      [
        "ArrayTests.res",
        118,
        20,
        30
      ],
      "findLast"
    ], [].findLast(function (param) {
          return true;
        }), eq, undefined);

function isDigit(s) {
  return "0123456789".includes(s);
}

Test.run([
      [
        "ArrayTests.res",
        122,
        20,
        35
      ],
      "findLastIndex"
    ], [
        3,
        5,
        7,
        5,
        8
      ].findLastIndex(function (i) {
          return i === 5;
        }), eq, 3);

Test.run([
      [
        "ArrayTests.res",
        123,
        20,
        35
      ],
      "findLastIndex"
    ], [
        3,
        5,
        7,
        5,
        8
      ].findLastIndex(function (i) {
          return i > 100;
        }), eq, -1);

Test.run([
      [
        "ArrayTests.res",
        124,
        20,
        35
      ],
      "findLastIndex"
    ], [].findLastIndex(function (param) {
          return true;
        }), eq, -1);

Test.run([
      [
        "ArrayTests.res",
        125,
        20,
        35
      ],
      "findLastIndex"
    ], [
        "3",
        "a",
        "4",
        "x"
      ].findLastIndex(isDigit), eq, 3);

Test.run([
      [
        "ArrayTests.res",
        126,
        20,
        35
      ],
      "findLastIndex"
    ], [
        3,
        5,
        7,
        5,
        8
      ].findLastIndex(function (i) {
          return i > 100;
        }), eq, -1);

Test.run([
      [
        "ArrayTests.res",
        127,
        20,
        35
      ],
      "findLastIndex"
    ], [].findLastIndex(function (param) {
          return true;
        }), eq, -1);

Test.run([
      [
        "ArrayTests.res",
        130,
        13,
        37
      ],
      "findLastIndexWithIndex"
    ], [
        "a",
        "2",
        "e",
        "4",
        "x"
      ].findLastIndex(function (i, j) {
          if ("0123456789".includes(i)) {
            return j > 2;
          } else {
            return false;
          }
        }), eq, 4);

Test.run([
      [
        "ArrayTests.res",
        136,
        13,
        37
      ],
      "findLastIndexWithIndex"
    ], [
        "a",
        "x",
        "j",
        "b",
        "x"
      ].findLastIndex(function (i, j) {
          if (i === "x") {
            return j < 3;
          } else {
            return false;
          }
        }), eq, 1);

Test.run([
      [
        "ArrayTests.res",
        143,
        13,
        31
      ],
      "findLastIndexOpt"
    ], Core__Array.findLastIndexOpt([
          3,
          5,
          7,
          5,
          8
        ], (function (i) {
            return i === 5;
          })), eq, 3);

Test.run([
      [
        "ArrayTests.res",
        149,
        13,
        31
      ],
      "findLastIndexOpt"
    ], Core__Array.findLastIndexOpt([
          3,
          5,
          7,
          5,
          8
        ], (function (i) {
            return i > 100;
          })), eq, undefined);

Test.run([
      [
        "ArrayTests.res",
        154,
        20,
        38
      ],
      "findLastIndexOpt"
    ], Core__Array.findLastIndexOpt([], (function (param) {
            return true;
          })), eq, undefined);

export {
  eq ,
  isDigit ,
}
/*  Not a pure module */
