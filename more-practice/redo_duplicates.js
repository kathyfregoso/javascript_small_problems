/*
// UNDERSTANDING THE PROBLEM
- INPUT: object (table)
 - keys: stringified numbers
 - vals: array of capitalized character strings
- OUTPUT: modified object (table)
 - each char only appears 1x among value arrays

- RULES: 
- when 2 keys share same character, compare key vals
  numerically
  - larger key keeps character (remove duplicate from smaller)
- if duplicates in same array, keep 1st occurrence

// EXAMPLES/EDGE CASES: see below

// DATA STRUCTURE(S): 
object input

// ALGORITHM:
- objective: modify input object to 
 1) remove duplicate array elements 
  - use Object.keys to create and array of object key values, then reverse it
  - initialize variable and assign empty obj 
  - iterate thru array (forEach) to filter duplicates
   - if current prop values in array don't exist in another property AND
    if there are no duplicates within value array
    - add key/value pair to output object
   - if element in array value exists in another property val:
    - compare current numerical key value to other property's numerical value, dremove duplicate from prop with lower value
   - if element is duplicate within array value:
    - filter all occurence(s) after the first
   - return object with duplicates remove

*/

function duplicates(tableObject) {
  return removeDuplicates(tableObject);
}

function removeDuplicates(tableObject) {
  let output = {};
  let trackDuplicates = [];
  Object.keys(tableObject)
    .reverse()
    .forEach((key) => {
      let filteredArr = removeArrayDuplicates(tableObject[key]);
      let cleanUpArr = [];

      filteredArr.forEach((letter) => {
        if (!trackDuplicates.includes(letter)) {
          trackDuplicates.push(letter);
          cleanUpArr.push(letter);
        }
      });
      output[key] = cleanUpArr;
    });

  return output;
}

function removeArrayDuplicates(arrayValue) {
  return arrayValue.filter((letter, idx, arr) => arr.indexOf(letter) === idx);
}

// example 0
console.log(
  duplicates({
    1: ["A", "B", "C"],
    2: ["A", "B", "D", "A"],
  })
);
// {
//   "1": ["C"],
//   "2": ["A", "B", "D"],
// }

// Example 1
console.log(
  duplicates({
    1: ["C", "F", "G"],
    2: ["A", "B", "C"],
    3: ["A", "B", "D"],
  })
);
// // {
// //   "1": ["F", "G"],
// //   "2": ["C"],
// //   "3": ["A", "B", "D"],
// // }

// // Example 2
console.log(
  duplicates({
    1: ["A"],
    2: ["A"],
    3: ["A"],
  })
);
// //  {
// //   "1": [],
// //   "2": [],
// //   "3": ["A"],
// // }

// // Example 3
console.log(
  duplicates({
    432: ["A", "A", "B", "D"],
    53: ["L", "G", "B", "C"],
    236: ["L", "A", "X", "G", "H", "X"],
    11: ["P", "R", "S", "D"],
  })
);
// {
//   "11": ["P", "R", "S"],
//   "53": ["C"],
//   "236": ["L", "X", "G", "H"],
//   "432": ["A", "B", "D"],
// }
