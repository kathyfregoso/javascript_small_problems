// INPUT:
// number

// OUTPUT:
// all factors of the input number in an array

// REQUIREMENTS:
// refactor code so that it works without a do/while loop
// it should return all of the factors of a number
// if 0 or negative, we should not raise an exception or go into an infinite loop
// - do not find factors of 0 or negative number
// implicit - how to find factors of a number mathematically

// QUESTIONS:
// if input is a negative number, should I convert to a positive number?
// is the output an array of the number's factors?

// EXAMPLES/TEST CASES:
// input of 0 should return 0
// input of negative number - how to handle?

// as code is, the an input of 0 or negative causes an infinite loop

// DATA STRUCTURES:
// numbers
// arrays

// ALGORITHMS:
// try a for loop

function factors(number) {
  let factors = [];
  if (number === 0) return 0;

  for (let divisor = number; divisor > 0; divisor--) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
  }
  return factors;
}

console.log(factors(0));
