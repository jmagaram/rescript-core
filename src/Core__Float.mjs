// Generated by ReScript, PLEASE EDIT WITH CARE


var Constants = {};

function equal(a, b) {
  return a === b;
}

function compare(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
}

function fromString(i) {
  var i$1 = parseFloat(i);
  if (isNaN(i$1)) {
    return ;
  } else {
    return i$1;
  }
}

export {
  Constants ,
  equal ,
  compare ,
  fromString ,
}
/* No side effect */
