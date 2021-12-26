// INPUT:
// strings

// OUTPUT:
// two one-line expressions to count :
// - number of lower-case 't' characters in each string

// REQUIREMENTS:

// QUESTIONS:
// does question expect two separate solutions for each string?

// EXAMPLES/TEST CASES:
// do not count uppercase T's (case sensitive)

// DATA STRUCTURES:
// strings

// ALGORITHMS:
// split string
// count with

let statement1 = "The Flintstones Rock!"; // 2
let statement2 = "Easy come, easy go."; // 0

console.log(statement1.split("").filter((char) => char === "t").length);
console.log(statement2.split("").filter((char) => char === "t").length);
