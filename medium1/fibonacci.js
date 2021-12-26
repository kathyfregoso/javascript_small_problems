// REQUIREMENTS:
// input: nth number in fibonacci sequence

// output: fib number at nth place

// rules:
// write function that computes the nth fibonacci number

// - fibonacci series - sequence of nums in which each num is the sum of the prev. 2 nums
// - first 2 nums: 1 and 1
// - third num: 1 + 1 = 2
// - fourth num: 1 + 2 = 3
// - fifth num: 2 + 3 = 5
// F(1) = 1
// F(2) = 1
// F(n) = F(n - 1) + F(n - 2) where n > 2

// recursion: function calls itself
// 1. calls itself at least once
// 2. has end condition
// 3. results of each recursion used in eacah step

// QUESTIONS:

// EXAMPLES/TEST CASES:

// DATA STRUCTURES:

// ALGORITHMS:
// break condition: if nth <= 2, return 1
// else, if n > 2, return f(n - 1) + f(n - 2)

function fibonacci(n) {
  if (n <= 2) return 1; // end/break condition

  // results of each recursion used in each step
  if (n > 2) return fibonacci(n - 1) + fibonacci(n - 2); // recursive call
}

console.log(fibonacci(1)); // 1
console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
console.log(fibonacci(5)); // 5
console.log(fibonacci(12)); // 144
console.log(fibonacci(20)); // 6765

// more info:
// https://launchschool.com/posts/587959fd#comment-54748
// https://launchschool.com/posts/9f4c03bc#comment-53639
// https://launchschool.com/posts/8a6f4220
