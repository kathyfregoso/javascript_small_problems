// INPUTS:
// String (at least 2 words)

// OUTPUT:
// returns next to last word in the String passed to function arg

// REQ'S:
// implicit: string object as arg

// QUESTIONS:

// EXAMPLES / TEST CASES:
// console.log(penultimate("last word") === "last"); // logs true
// console.log(penultimate("Launch School is great!") === "is"); // logs true

// DATA STRUCTURES:
// strings
// objects
// arrays

// ALGORITHM:
// string.split(' ') - split input str into array separated spaces
// return second to last str element - array[array.length - 2];

function penultimate(string) {
  let output = string.trim().split(" ");
  if (output.length > 1) {
    return output[output.length - 2];
  } else {
    return "Error: There is no penultimate word!";
  }
}

console.log(penultimate("last word")); // logs 'last'
console.log(penultimate("Launch School is great!")); // logs 'is'
console.log(penultimate("")); // logs "There is no second to last word!"
console.log(penultimate("hello")); // logs "There is no second to last word!"
