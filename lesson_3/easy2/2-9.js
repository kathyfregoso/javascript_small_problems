// INPUT:
// string

// OUTPUT:
// centered string (with spaces)

// REQUIREMENTS:
// if we had a 40-character wide table of Flintstone family members,
// how can we center the following title above the table with spaces?

// QUESTIONS:

// EXAMPLES/TEST CASES:

// DATA STRUCTURES:
// strings

// ALGORITHMS:
// find string length
// method that adds spaces to start of string:
// padStart(' ')

let title = "Flintstone Family Members";

// solution:
let padding = Math.floor((40 - title.length) / 2);
console.log(title.padStart(title.length + padding));
