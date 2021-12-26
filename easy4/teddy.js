// INPUT:

// OUTPUT: string - "Teddy is [random number 20-120 inclusive] years old!"

// REQUIREMENTS:
// randomly generate teddy's age and log it to the console
// the age is a random number btw 20 - 120 (inclusive)

// QUESTIONS:

// EXAMPLES/TEST CASES:

// DATA STRUCTURES:
// strings
// numbers

// ALGORITHMS:
// initiate a variable that generates a random number
// use a template literal to concat number to str output:
// - "Teddy is [random age] years old!"

function getRandomAge(min, max) {
  min = Math.ceil(min); // math.ceil rounds a nump up to the next largest integer
  max = Math.floor(max); // math.floor returns largest integer less than or equal to given num
  // inclusive
  let randomAge = Math.floor(Math.random() * (max - min + 1) + min); // (range 0 - 100) + 20
  return `Teddy is ${randomAge} years old!`;
}

console.log(getRandomAge(20, 120));
