/*
// UNDERSTANDING THE PROBLEM
- INPUT: string
- OUTPUT: boolean
 - true if string has balance prens.
 - false if parense not balanced
- RULES:
 - parens balanced if '(' and ')' occur in matching pairs
 - each pair begins with '('

// EXAMPLES/EDGE CASES: see below

// DATA STRUCTURE(S): strings

// ALGORITHM:
- keep a running tally of each parens encountered (variable)
- iterate through input string with low-level for loop:
 - left parens += 1
 - right parens -= 1
 - if tally is < 0 (negative), terminate loop, return false
 - if final tally is 0, return true
 - if final tally is > 0, return false

*/

function isBalanced(string) {
  let tally = 0;

  for (let idx = 0; idx < string.length; idx += 1) {
    let char = string[idx];
    if (char === "(") {
      tally += 1;
    } else if (char === ")") {
      tally -= 1;
    } else if (tally < 0) {
      break;
    }
  }
  return tally === 0;
}

console.log(isBalanced("What (is) this?")); // true
console.log(isBalanced("What is) this?")); // false
console.log(isBalanced("What (is this?")); // false
console.log(isBalanced("((What) (is this))?")); // true
console.log(isBalanced("((What)) (is this))?")); // false
console.log(isBalanced("Hey!")); // true
console.log(isBalanced(")Hey!(")); // false
console.log(isBalanced("What ((is))) up(")); // false
