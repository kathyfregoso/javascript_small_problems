// REQUIREMENTS:
// input: nth place (of fib num)

// output: fib at nth place

// note: JS can compute integers up to 16 digits long
// fibonacci(78) is largest fib num that can be accurately computed w/ simple operations in JS
// 10000th fib num > val of Number.MAX_VALUE

// QUESTIONS:

// EXAMPLES/TEST CASES:

// DATA STRUCTURES:
// numbers

// ALGORITHMS:
// start condition: set values of 1st two fibonacci nums
// using first two nums, iteravely get to the nth fibonacci
// fib1 = 1, fib2 = 1
// fib3 = fib1 + fib2
// fib4 = fib3 + fib2
// fib5 = fib3 + fib4
// fib6 = fib4 + fib5
// fib7 = fib5 + fib6 etc...

// my solution
function fibonacci(n) {
  let fib1 = 1;
  let fib2 = 1;

  for (let count = 3; count <= n; count++) {
    let fib3 = fib1 + fib2;
    fib1 = fib2;
    fib2 = fib3;
  }

  console.log(fib2);
  return fib2;
}

// alt solution:
function fibonacci(nth) {
  let previousTwo = [1, 1];

  for (let counter = 3; counter <= nth; counter += 1) {
    previousTwo = [previousTwo[1], previousTwo[0] + previousTwo[1]];
  }

  return previousTwo[1];
}

fibonacci(20); // 6765
fibonacci(50); // 12586269025
fibonacci(75); // 2111485077978050
