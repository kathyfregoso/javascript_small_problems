/* 
// REQUIREMENTS: 
* = asterisk
displays a n x n grid, where n is an odd integer argument
argument is always odd

// input: 
odd number (n)
- represents size of diamond
- n represents total num of rows, and width of widest row

// output: 
print diamond made up of * chars


// EXAMPLES/TEST CASES: see below
n = 5
- asterisks prepended by spaces
- 5 rows
- 1, 3, 5, 3, and 1 asterisks
- 2, 1, 0, 1, 2 spaces prepended

// DATA STRUCTURES and ALGORITHMS:
- each row asterisks are prepended by spaces
- n rows will have 1, 3, ... n, ... 3, 1 asterisks
- each row will have (n - asteriskCount) / 2 spaces
- loop:
 - start at num (1), increment by 2 each loop
 - when num = n, flip increment to -2
 - stop when num is negative
*/

function diamond(n) {
  let star = "*";
  let space = " ";

  for (let num = 1; num <= n; num += 2) {
    console.log(space.repeat(n - num / 2) + star.repeat(num));
  }

  for (let num = n - 2; num >= 1; num -= 2) {
    console.log(space.repeat(n - num / 2) + star.repeat(num));
  }
}

// alternate solution

console.log(diamond(1));
// logs
// *

console.log(diamond(3));
// logs
//  *
// ***
//  *

console.log(diamond(9));
// logs
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *
