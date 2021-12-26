// INPUT: string
// "The Flintstones Rock";

// OUTPUT: object containing the frequency with which each letter occurs in this string
// { T: 1, h: 1, e: 2, F: 1, l: 1, ... }

// REQUIREMENTS:

// QUESTIONS:
// Do cases matter? Based on example, it looks like they do
// do we count white spaces? no, only letters

// EXAMPLES/TEST CASES:
// "The Flintstones Rock" => { T: 1, h: 1, e: 2, F: 1, l: 1, ... }

// DATA STRUCTURES:
// string
// object

// ALGORITHMS:
// 1. convert str to arr of characters with no delimiting space
// 2. assign that split array into a new variable
// 3. create an empty object literal and assign to a variable
// 4. loop through the array
//  - if new character encounter, create new property name with key and count starting at 1
//  - if repeat char encountered, add 1 to the appropriate property value
//  - repeat process until the loop reaches the end of the character array
// 5. return the object

let statement = "The Flintstones Rock";

// MY SOLUTION

// removes non-letters
function letterVerify(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] >= "a" && arr[i] <= "z") || (arr[i] >= "A" && arr[i] <= "Z")) {
      newArr.push(arr[i]);
    } else {
      continue;
    }
  }
  return newArr;
}

function charCount(string) {
  let output = {};
  let charArr = string.split("");
  let lettersOnly = letterVerify(charArr);

  for (let i = 0; i < lettersOnly.length; i++) {
    if (!output[lettersOnly[i]]) {
      output[lettersOnly[i]] = 0;
    }
    output[lettersOnly[i]] += 1;
  }
  console.log(output);
  return output;
}

// SOLUTION 2:

// converts string into array of characters and excludes spaces w/ filter method
let charsInStatement = statement.split("").filter((char) => char !== " ");
let result = {};

charsInStatement.forEach((char) => {
  // if a char doesn't exist as a key in object, this returns 'undefined', a falsy, resulting in the assignment of 0 to result[char]
  // relies on short-circuiting
  result[char] = result[char] || 0;

  result[char] += 1;
});

result;

// SOLUTION 3 (SAME LOGIC, NO || OPERATOR):
let charsInStatement = statement.split("").filter((char) => char !== " ");
let result = {};

charsInStatement.forEach((char) => {
  if (Object.keys(result).includes(char)) {
    result[char] += 1;
  } else {
    result[char] = 1;
  }
});

// SOLUTION 4:
// doesn't convert string to an array, iterates over string characters

let result = {};

for (let counter = 0; counter < statement.length; counter += 1) {
  let char = statement[counter];
  if (char === " ") continue;

  result[char] = result[char] || 0;
  result[char] += 1;
}

charCount(statement);
// { T: 1, h: 1, e: 2, F: 1, l: 1, i: 1, n: 2, t: 2, s: 2, o: 2, R: 1, c: 1, k: 1}
