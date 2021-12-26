// INPUT:
// nested array

// OUTPUT:
// array (flat)

// REQUIREMENTS:
// Create a new array that contains all of the above values, but in an un-nested format

// QUESTIONS:

// EXAMPLES/TEST CASES:
// ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]] =>
// [ 'Fred', 'Wilma', 'Barney', 'Betty', 'Bambam', 'Pebbles' ]

// DATA STRUCTURES:
// arrays

// ALGORITHMS:
// flat method
// concat (...flintstones) with empty array literal
// reduce method w/ concat method in body
// foreach + initialize variable with empty array literal; concat method as side effect in body

let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);
// ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

// solution:
console.log(flintstones.flat());

// alternative:
console.log([].concat(...flintstones));

//alternative 2:
flintstones = flintstones.forEach((acc, curr) => {
  return acc.concat(curr);
});

// alternative 3:
let newFlintstones = [];
flintstones = flintstones.forEach((el) => {
  newFlintstones = newFlintstones.concat(el); // side effect, no return value
});
