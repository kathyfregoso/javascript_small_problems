/*
// UNDERSTANDING THE PROBLEM
- INPUT: string
- OUTPUT: boolean
 - true if all alpha chars in string are uppercase
 - false if not
- RULES: ignore chars that aren't alpha

// EXAMPLES/EDGE CASES: check for non-alpha chars

// DATA STRUCTURE(S): strings, perhaps arrays

// ALGORITHM:
- split str into arr of chars
- iterate through  arr
  - check that it's uppercase (ignores punctuation)
- if all chars uppercase, return true, else false
*/

function isUppercase(str) {
  let charsArr = str.split("");
  let output = true;

  charsArr.forEach((char) => {
    if (char !== char.toUpperCase()) {
      output = false;
    }
  });

  return output;
}

console.log(isUppercase("t")); // false
console.log(isUppercase("T")); // true
console.log(isUppercase("Four Score")); // false
console.log(isUppercase("FOUR SCORE")); // true
console.log(isUppercase("4SCORE!")); // true
console.log(isUppercase("")); // true
