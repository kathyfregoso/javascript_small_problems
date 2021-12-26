// REQUIREMENTS:
// input: nth argument

// output: integer at nth place in fibonacci sequence

// goal: refactor recursive fibonacci function to use memoization

// memoization:
// - saves the computed answer for future reuse, instead of computing it anew every time it's needed
// - recursive fibonacci w/ memoization saves calls to fibonacci(nth - 2),
// - since necessary values have already been computed by the recursive calls to fibonacci(nth - 1)
// - reduces num of times we run recursive function
// - alternative to inefficient recursive fibonacci function, which slows down w/ an nth arg of 35

// QUESTIONS:

// EXAMPLES/TEST CASES:

// DATA STRUCTURES:
// objects, arrays, numbers

// ALGORITHMS:
// declare a variable that references an object (cache to hold results of prev. function calls)
// each function call, log results of function calls to memo
// if memo object holds key for value n, return the number at n
// if memo doesn't hold a key for n, calculate fib num for n and save to memo as key-val pair
// return n at memo (nth num of fib sequence)

// solution
function fibonacci(n) {
  let memo = {};
  if (n <= 2) return 1;

  if (n in memo) {
    return memo[n];
  } else {
    memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
    return memo[n];
  }
}

console.log(fibonacci(1)); // 1
console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
console.log(fibonacci(5)); // 5
console.log(fibonacci(12)); // 144
console.log(fibonacci(20)); // 6765
