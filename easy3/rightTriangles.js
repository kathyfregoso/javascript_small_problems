// INPUT:
// positive integer n

// OUTPUT:
// logs a right triangle whose sides each have n stars

// REQUIREMENTS:
// the hypotenuse of the triangle (diagonal side) should have one end at the lower-left of triangle
// other end at upper-right

// QUESTIONS:

// EXAMPLES/TEST CASES:
// 0 => ""
// 1 => *

// DATA STRUCTURES:
// strings
// numbers

// ALGORITHMS:
// repeat stars n times (bottom of triangle)
// loop until i reaches n
// add 1 left whitespace each iteration
// console log each iteration
// output the right triangle

function triangle(n) {
  let star = "*";
  for (let i = n; i > 0; i--) {
    console.log(star.padStart(i + star.length - 1, " "));
    star += "*";
  }
}

triangle(5);

//     * 4 blank spaces, 1 star
//    ** 3 blank spaces, 2 stars
//   *** 2 blank spaces, 3 stars
//  **** 1 blank spaces, 4 stars
// ***** 0 blank spaces, 5 stars

triangle(9);

// //         * 8 blank spaces, 1 star
// //        ** 7 blank spaces, 2 stars
// //       *** 6 blank spaces, 3 stars
// //      **** 5 blank spaces, 4 stars
// //     ***** 4 blank spaces, 5 stars
// //    ****** 3 blank spaces, 6 stars
// //   ******* 2 blank spaces, 7 stars
// //  ******** 1 blank space, 8 stars
// // ********* 0 blank spaces, 9 stars
