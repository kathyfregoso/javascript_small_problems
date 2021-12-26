/*
// UNDERSTANDING THE PROBLEM
- INPUT: two arrays of strings (a1, a2)
- OUTPUT: sorted array (lexographical order, only strings that're substrings of strings in a2)

- RULES:
 - are substrings case insensitive? are all str elements lowercase?

// EXAMPLES/EDGE CASES: 
// Example 1:

a1 = ["arp", "live", "strong"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// returns ["arp", "live", "strong"]

// Example 2:

a1 = ["tarp", "mice", "bull"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// returns []

// DATA STRUCTURE(S): 
array inputs
string elements

// ALGORITHM:
1. iterate through array1 to filter out strings that are not substrings of string els in array2
2. in new array of substrings, sort the array in lexographical order
3. return sorted array
*/

function inArray(array1, array2) {
  return array1
    .filter((string1) => {
      return array2.find((string2) => string2.includes(string1));
    })
    .sort();
}

console.log(inArray(["at", "pizz"], ["kathy", "pizzeria"])); // [ 'at', 'pizz' ]

console.log(
  inArray(
    ["arp", "live", "strong"],
    ["lively", "alive", "harp", "sharp", "armstrong"]
  )
); // ["arp", "live", "strong"]

console.log(
  inArray(
    ["tarp", "mice", "bull"],
    ["lively", "alive", "harp", "sharp", "armstrong"]
  )
); // []
