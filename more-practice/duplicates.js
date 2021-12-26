/*
// UNDERSTANDING THE PROBLEM
- INPUT: object (table)
 - keys are stringified digits (ex: "1", "2", etc)
 - values are array of capital letter strings
- OUTPUT: filtered object (table) 
  - keep stringified keys/digits
  - each char in array appears only 1x in array values
- RULES: 
 - when 2 key share array w/ arr value that contains
  identical character:
   - compare each array numerically
   - the key w/ greater numeric value keeps character
   - the lower < numeric key val loses character 
 - if duplicate char in same arr, keep 1st appearance

IMPLICIT:
 - if numeric string keys are OUT OF ORDER, sort object keys by numeric value (ascending!)
  
// EXAMPLES/EDGE CASES:

example 0:
input:
// {
//   "1": ["A", "B", "C"],
//   "2": ["A", "B", "D", "A"],
// }

output:
// {
//   "1": ["C"],
//   "2": ["A", "B", "D"],
// }

// Example 1
input = {
  "1": ["C", "F", "G"],
  "2": ["A", "B", "C"],
  "3": ["A", "B", "D"],
}

duplicates: 
- 'C' (rows 1, 2), remove C in row 1
- 'A' (rows 2, 3), remove A in row 2
- 'B' (rows 2, 3), remove B in row 2

output = {
   "1": ["F", "G"],
   "2": ["C"],
   "3": ["A", "B", "D"],
 }

 // Example 2
// input = {
//   "1": ["A"],
//   "2": ["A"],
//   "3": ["A"],
// }

duplicates: 'A' (in rows 1,2,3, keep 'A' in row with greatest value, which is 3, remove from rows 1 and 2)

// output = {
//   "1": [],
//   "2": [],
//   "3": ["A"],
// }

// Example 3
// input = {
//   "432": ["A", "A", "B", "D"],
//   "53": ["L", "G", "B", "C"],
//   "236": ["L", "A", "X", "G", "H", "X"],
//   "11": ["P", "R", "S", "D"],
// }

duplicates: 
- 'A' (2x in row 1, 1x in row 2), remove from row 236, which is less than 432; remove 2nd A from row 432 (as there are multiple)
- 'B' (rows 432, 53), remove from row 53
- 'D' (rows 432, 11), remove from row 11
- 'L'  (rows 53, 236), remove from 53
- 'G' (rows 53 and 236), remove from row 53
- 'X' (2x in row 236, remove 2nd instance as there are multiple)

// output = {
//   "11": ["P", "R", "S"],
//   "53": ["C"],
//   "236": ["L", "X", "G", "H"],
//   "432": ["A", "B", "D"],
// }

// DATA STRUCTURE(S): 
- objects
 - string digit keys, representing numeric values
 - values are arrays of uppercase alphabetic char elements
 - may contain duplicate elements in array values
 - sorting by key numeric values
- arrays (value of object keys)
 - used for filtering (removing) elements
- strings
 - convert key strings to numbers for value comparison
 - to check for duplicate value

// ALGORITHM:
PROBLEM 1 - SORTING OBJECT BY KEYS IN REVERSE

PROBLEM 2 - REMOVING DUPLICATES FROM object prop array values

*/

function duplicates(object) {
  let sorted = sortObject(object);
  let existingValues = [];

  for (let prop of sorted) {
    object[prop] = object[prop].filter((value) => {
      if (existingValues.includes(value)) {
        return false;
      } else {
        existingValues.push(value);
        return true;
      }
    });
  }

  return object;
}

function sortObject(obj) {
  let arrObj = Object.keys(obj).sort((a, b) => {
    return Number(b) - Number(a);
  });

  return arrObj;
}

let input1 = {
  1: ["A", "B", "C"],
  2: ["A", "B", "D", "A"],
};

// console.log(duplicates(input1));
// {
//   "1": ["C"],
//   "2": ["A", "B", "D"],
// }

let input2 = {
  1: ["C", "F", "G"],
  2: ["A", "B", "C"],
  3: ["A", "B", "D"],
};

console.log(duplicates(input2));

// {
//   "1": ["F", "G"],
//   "2": ["C"],
//   "3": ["A", "B", "D"],
// }

let input3 = {
  1: ["A"],
  2: ["A"],
  3: ["A"],
};

// console.log(duplicates(input3));
// {
//   "1": [],
//   "2": [],
//   "3": ["A"],
// }

let input4 = {
  432: ["A", "A", "B", "D"],
  53: ["L", "G", "B", "C"],
  236: ["L", "A", "X", "G", "H", "X"],
  11: ["P", "R", "S", "D"],
};

console.log(duplicates(input4));
//{
//   "11": ["P", "R", "S"],
//   "53": ["C"],
//   "236": ["L", "X", "G", "H"],
//   "432": ["A", "B", "D"],
// }
