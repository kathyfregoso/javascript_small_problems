// INPUT:
// number

// OUTPUT:
// index of first fib number that has the same num of digits specified by the argument

// REQUIREMENTS:
// The Fibonacci series is a series of numbers (1, 1, 2, 3, 5, 8, 13, 21, ...)
// the first 2 nums are 1 by definition
// each subsequent number is the sum of the two previous numbers
// calculate + return the index of the 1st fib number that has the num of digits spec by arg
// fibonacci formula:
// num = (num - 1) + (num  - 2)

// QUESTIONS:

// EXAMPLES/TEST CASES:
// the first Fibonacci number has an index of 1

// DATA STRUCTURES:
// arrays
// numbers

// ALGORITHMS:
// init a variable with array containing 2 values, 1 and 1, the first 2 nums of fib sequence
// write a loop :
// condition: fib[fib.length - 1].toString().length < argument
// each iteration pushes a fib number (calculated in nextFibNum) till the condition is met
// return the length of the fibonacci sequence array, the last el is the first num digit integer

function findFibonacciIndexByLength(num) {
  let fib = [1, 1];

  while (fib[fib.length - 1].toString().length < num) {
    let nextFibNum = fib[fib.length - 1] + fib[fib.length - 2];
    fib.push(nextFibNum);
  }
  console.log(fib.length);
  return fib.length;
}

findFibonacciIndexByLength(2); // 7
findFibonacciIndexByLength(10); // 45
findFibonacciIndexByLength(16); // 74
