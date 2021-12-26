// INPUT:
// OUTPUT:
// REQUIREMENTS:
// QUESTIONS:
// EXAMPLES/TEST CASES:
// DATA STRUCTURES:
// ALGORITHMS:

let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer);

console.log(answer - 8); // 34

// the value of the messWithIt output is unrelated to the value of the answer variable
