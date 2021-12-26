/*
// UNDERSTANDING THE PROBLEM
- INPUT: array
- OUTPUT: modified array (all 0's moved to the end)

- RULES: move all 0s in input array (assuming only integer 0s?) to the end
 - beware of falsies?

// EXAMPLES/EDGE CASES: see below

// DATA STRUCTURE(S): 
array input
identify integer 0s

// ALGORITHM:
1. count the number of 0's in the input array
2. remove all the 0's from input array
3. add count number of 0's to teh end of the array
4. return new array
*/

var moveZeros = function (arr) {
  let zeroCount = arr.reduce((acc, curr) => {
    if (curr === 0) {
      acc += 1;
    }
    return acc;
  }, 0);
  let zeros = Array(zeroCount).fill(0);
  let filteredArr = arr.filter((value) => value !== 0);

  return [...filteredArr, ...zeros];
};

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])); // [ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ]
console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])); // returns[false,1,1,2,1,3,"a",0,0]
