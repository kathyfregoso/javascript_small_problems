function first() {
  return {
    prop1: "hi there",
  };
}

function second() {
  return; // automatic semicolon insertion (ASI)
  {
    prop1: "hi there";
  }
}

console.log(first()); // returns object literal

console.log(second()); // will return 'undefined'
// no line terminator is allowed between the return keyword and the expression
// JS automatically adds a semicolon after the return keyword on line 8
// no errors are thrown because the rest of the code is valid, even though it never gets executed
// don't rely on ASI; it's better for dev to make decisions, not the engine
