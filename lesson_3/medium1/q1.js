// INPUT:
// a string => "The Flinstones Rock!"

// OUTPUT:
// output the string 10 times,
// each line indented 1 space to the right of the line above it

// REQUIREMENTS:
// each string is repeated on a new line with extra space

// QUESTIONS:

// EXAMPLES/TEST CASES:
// 0 spaces
//  1 space
//   2 spaces
//    3 spaces
//     4 spaces
//      5 spaces
//       6 spaces
//        7 spaces
//         8 spaces
//          9 spaces

// DATA STRUCTURES:
// strings

// ALGORITHMS:
// for loop
// increase " " by 1 every loop, log each loop

function asciiArt(string) {
  let count = 0;
  for (let i = 0; i < 10; i++) {
    console.log(`${" ".repeat(count++)}${string}`);
  }
}

asciiArt("The Flintsones Rock!");
