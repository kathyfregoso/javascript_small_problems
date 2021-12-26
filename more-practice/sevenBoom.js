/*
// UNDERSTANDING THE PROBLEM
- INPUT: array of numbers
- OUTPUT: string
 - returns "Boom!" if DIGIT 7 appears in array
 - else returns "there is no 7 in the array"
- RULES: 
 - look for single digit 7
 - AND look for larger numbers that have the digit 7 in it (aka, 749, 87, 7799, etc...)

// EXAMPLES/EDGE CASES: 
[] => empty array returns "there is no 7 in the array"

[1, 2, 3, 4, 5, 6, 7] => "Boom!"
 // 7 has digit seven
 
 [8, 6, 33, 100] => "there is no 7 in the array"
 // no digit 7 in array

 [2, 55, 60, 97, 86] => "Boom!"
 // 97 contains the digit seven

// DATA STRUCTURE(S): 
- strings to identify digits
- numbers as elements of input array
- array for iteration

// ALGORITHM:
- iterate through input array
 - transform current number into string  of digit(s)
 - check the string to see if it has 1 OR MORE digit '7' 
  - if it does, return "Boom!"
  - if it doesn't, return "there is no 7 in the array"
*/

function sevenBoom(array) {
  let findSeven = array
    .map((number) => String(number))
    .some((digit) => digit.includes("7"));

  return findSeven ? "Boom!" : "there is no 7 in the array";
}

console.log(sevenBoom([])); // "there is no 7 in the array"
console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7])); // "Boom!"
console.log(sevenBoom([8, 6, 33, 100])); // "there is no 7 in the array"
console.log(sevenBoom([2, 55, 60, 97, 86])); // "Boom!"
console.log(sevenBoom([66, 87, 7799, 4])); // "Boom!"
