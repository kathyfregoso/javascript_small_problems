/*
// UNDERSTANDING THE PROBLEM
- INPUT: string
 - word problem
- OUTPUT: integer (answer to word problem)
- RULES: 

// EXAMPLES/EDGE CASES: 
What is 5 plus 13? // 18
What is 7 minus 5? // 2
What is 33 divided by -3? // -11
What is -3 multiplied by 25? // -75

// DATA STRUCTURE(S): 
 - object as reference - hold info for computation:
  - 'plus': +
  - 'minus': -
  - 'divided': /
  - 'multiplied': *
 - string to number for computation

// ALGORITHM:
- split string into array of words; delimiter is ' '
- use reference object to extract key pieces from input 
 word problem:
 - computation type
 - numbers
- convert str digits to numbers
- get the result by using appropriate computation

*/

const OPERATORS = {
  plus: "+",
  minus: "-",
  divided: "/",
  multiplied: "*",
};
const COMPUTATIONS = {
  plus: function (num1, num2) {
    return num1 + num2;
  },
  minus: function (num1, num2) {
    return num1 - num2;
  },
  divided: function (num1, num2) {
    return num1 / num2;
  },
  multiplied: function (num1, num2) {
    return num1 * num2;
  },
};
function wordProblem(string) {
  let numbers = findNumbers(string);
  let computation = findComputation(string);
  let compute = COMPUTATIONS[computation];
  return compute(numbers[0], numbers[1]);
}

function findComputation(string) {
  return string.split(" ").filter((word) => OPERATORS[word] !== undefined)[0];
}

function findNumbers(string) {
  return string
    .slice(0, string.length - 1)
    .split(" ")
    .filter((word) => !Number.isNaN(Number(word)))
    .map((digit) => Number(digit));
}

console.log(wordProblem("What is 5 plus 13?")); // 18
console.log(wordProblem("What is 7 minus 5?")); // 2
console.log(wordProblem("What is 33 divided by -3?")); // -11
console.log(wordProblem("What is -3 multiplied by 25?")); // -75
