/*
// UNDERSTANDING THE PROBLEM
- INPUT: n (odd integer >= 7)
- OUTPUT: string display (8 pointed star in n*n grid)
- RULES: 
 - smallest star is 7*7 grid (n = 7)
 - middle row always exactly n stars
 -every other row always has 3 stars & n-3 spaces
  - placement of spaces is what differs!
 - top row/bottom row spaces: (n-3) / 2
  - decrements by 1 for each row until middle

// EXAMPLES/EDGE CASES: 
n=7
// *  *  * 1-star 2 spaces 1-star 2 spaces 1 star (4 spaces)
//  * * * 1 space 1 star 1 space 1 star 1 space 1 space (3 spaces)
//   *** 2 spaces 3 stars (2 spaces)
// ******* 7 stars
//   *** 2 spaces, 3 stars (2 spaces)
//  * * *  1 space 1 star 1 space 1 star 1 space 1 space (3 spaces) 
// *  *  * 1-star 2 spaces 1-star 2 spaces 1 star (4 spaces)

n=9
// *   *   * (6 spaces)
//  *  *  * 1 space - star - 2 spaces - star - 2 spaces - star (5 spaces)
//   * * *  2 spaces - star - 1 space - star- 1 space - star (4 spaces)
//    ***   (3 spaces)
// *********
//    *** (3 spaces)
//   * * * 2 spaces - star - 1 space - star- 1 space - star (4 spaces)
//  *  *  * 1 space - star - 2 spaces - star - 2 spaces - star (5 spaces)
// *   *   * (6 spaces)

// DATA STRUCTURE(S): strings for display
- numbers for calculation

// ALGORITHM:
1. starting space count is n - 3 (top/bottom rows)
 - decrement to get top half (Math.floor(n / 2) iterations/row nums)
 - increment to get bottom half (Math.floor(n/3) iterations/row nums)
2. put the top and lower half together with middle row 
*/

function star(n) {
  let star = "*";
  let startingSpaceCount = n - 3;

  let top = topHalf(n, startingSpaceCount);
  let bottom = bottomHalf(n, startingSpaceCount);
  return top;
}

function topHalf(n, spaceCount) {
  let count = spaceCount;
  for (let row = 1; row <= Math.floor(n / 2); row += 1) {
    console.log(
      "*" + " ".repeat(count / 2) + "*" + " ".repeat(count / 2) + "*"
    );
    count -= 1;
  }
}

function bottomHalf(n, spaceCount) {}

star(7);
// logs
// *  *  *
//  * * *
//   ***
// *******
//   ***
//  * * *
// *  *  *

// console.log(star(9));
// // logs
// // *   *   *
// //  *  *  *
// //   * * *
// //    ***
// // *********
// //    ***
// //   * * *
// //  *  *  *
// // *   *   *
