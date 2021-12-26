/*
// UNDERSTANDING THE PROBLEM
- INPUT: 2d array of subarrays filled with 0's and 1
 - all subarrays are of equal length
- OUTPUT: array (location of mine)
 - length: 2
 - [row index, subarray idx]

- RULES: 
 - square field (n*n)
 - location of mine is 1

// EXAMPLES/EDGE CASES: see below

// DATA STRUCTURE(S): array of subarrays (iteration)
output is regular array with idx values

// ALGORITHM:
1. iterate thru array of subarrays
 - when you find a subarray with value of 1 (subarray.includes(1))
  - push index of current subarray to output array
  - then push idx of 1 in subarray to output array
2. return output array (location of mine)
*/

function mineLocation(field) {
  let output = [];

  field.forEach((row, idx) => {
    if (row.includes(1)) {
      output.push(idx);
      output.push(row.indexOf(1));
    }
  });
  return output;
}

console.log(
  mineLocation([
    [1, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ])
); // [0, 0]
console.log(
  mineLocation([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ])
); // [1, 1]
console.log(
  mineLocation([
    [0, 0, 0],
    [0, 0, 0],
    [0, 1, 0],
  ])
); //  [2, 1]
console.log(
  mineLocation([
    [1, 0],
    [0, 0],
  ])
); //  [0, 0]
console.log(
  mineLocation([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 0],
  ])
); // [2, 2]
