/*
TOTAL AREA

// UNDERSTANDING THE PROBLEM
// INPUT: array of rectangles (2d array)
// OUTPUT: number (total area covered by all rectangles)
// RULES:
 - rectangles = arrays with height and width
 - totalArea function

// EXAMPLES/EDGE CASES:
INPUT:
let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];
OUTPUT:
totalArea(rectangles);    // 141

// DATA STRUCTURE(S):
- arrays with subarrays
- numbers

// ALGORITHM:
- transform (map) the input array into an array of rectangle areas 
 - area * height = index 0 * index 1
- then reduce the array to total sum of all the areas in the array
- return the total area
*/

// let rectangles = [
//   [3, 4],
//   [6, 6],
//   [1, 8],
//   [9, 9],
//   [2, 2],
// ];

function totalArea(array) {
  let areas = array.map((rectangles) => rectangles[0] * rectangles[1]);

  return areas.reduce((acc, area) => acc + area, 0);
}

// console.log(totalArea(rectangles)); // 141

/*
TOTAL SQUARE AREA 

// UNDERSTANDING THE PROBLEM
// INPUT: array of rectangles (2d array, subarrays have two number elements)
// OUTPUT: number (total area of a set of rectangles)
// RULES: 
- output IGNORES areas that aren't square

// EXAMPLES/EDGE CASES:
INPUT:
let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];
OUTPUT:
totalSquareArea(rectangles);    // 121

// DATA STRUCTURE(S):
- arrays with subarrays
- numbers

// ALGORITHM:
- filter input array to remove non-squares
- reuse totalArea function to calculate total square areas
*/

let rectangles = [
  [3, 4],
  [6, 6],
  [1, 8],
  [9, 9],
  [2, 2],
];

function totalSquareArea(array) {
  let filterSquares = array.filter(
    (subarrays) => subarrays[0] === subarrays[1]
  );
  return totalArea(filterSquares);
}

console.log(totalSquareArea(rectangles)); // 121
