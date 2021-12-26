/*
// UNDERSTANDING THE PROBLEM
- INPUT: object
- OUTPUT: array of subarrays
 - each subarray represents key/val pair

- RULES: convert obj to array of keys and vals

// EXAMPLES/EDGE CASES:  see below

// DATA STRUCTURE(S):
object => array

// ALGORITHM:
- use Object.entries to turn input to array
*/

function objectToArray(obj) {
  return Object.entries(obj);
}

console.log(
  objectToArray({
    D: 1,
    B: 2,
    C: 3,
  })
); // [["D", 1], ["B", 2], ["C", 3]]

console.log(
  objectToArray({
    likes: 2,
    dislikes: 3,
    followers: 10,
  })
); // [["likes", 2], ["dislikes", 3], ["followers", 10]]
