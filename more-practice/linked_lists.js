/*
// UNDERSTANDING THE PROBLEM
- INPUT:
- OUTPUT: 

- RULES: 

// EXAMPLES/EDGE CASES: 
example 1
Input: l1 = [1,2,4], l2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:

Input: l1 = [], l2 = []
Output: []

Example 3:

Input: l1 = [], l2 = [0]
Output: [0]


// DATA STRUCTURE(S): 

// ALGORITHM:
*/

function listNode(l1, l2) {
  let arr = l1.concat(l2);

  return arr.sort((a, b) => Number(a) - Number(b));
}

// alternative
// function listNode(l1,l2) {
// return [...l1, ...l2].sort((a, b) => Number(a) - Number(b));
// }

console.log(listNode([], [])); // []
console.log(listNode([1, 2, 4], [1, 3, 4])); // [1,1,2,3,4,4]
console.log(listNode([], [0])); // [0]
console.log(listNode([1, 2, 4], [3, 4])); // [1,2,3,4,4]
console.log(listNode([1, 2], [1, 2, 3])); // [1,1,2,2,3]
