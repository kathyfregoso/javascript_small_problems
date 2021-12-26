// INPUTS:
// a number

// OUTPUTS:
// square of the function argument

// EXPLICIT REQUIREMENTS:
// Using the multiply() func, write a function that computes the square of its argument
// the square is the result of multiplying a number by itself

// IMPLICIT REQUIREMENTS:
// call the multiply function inside the square function

// EXAMPLES / TEST CASE:
// see below

// DATA STRUCTURE:
// numbers
// functions (as objects)

// ALGORITHM:
// call the multiply func inside the square function
// the arguments of the inner func multiply is the argument used in the outer func
// return the result of invoking multiply with num input passed twice

function multiply(num1, num2) {
  return num1 * num2;
}

// implicitly returns the value from multiply(num, num)
function square(num) {
  return multiply(num, num);
}

console.log(square(5) === 25); // logs true
console.log(square(-8) == 64); // logs true
