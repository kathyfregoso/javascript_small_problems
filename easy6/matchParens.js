// REQUIREMENTS:
// input: string
// output: returns true if all the parens. in the string ar properly balanced, false otherwise
// properly balanced =
// matching number of (  ) pairs
// balanced pairs must each start with a (, not a ).

// QUESTIONS:

// EXAMPLES/TEST CASES:

// DATA STRUCTURES:
// strings

// ALGORITHMS:
// check the input string for '(' ')'
// - if no parens, return true

// check that the string contains least 1 of both '(' and ')' (countleft === countRight)
// index of '(' must be less than index of ')'
// if there is more than one of each left or right parens found,
//   make sure there's the same number of complimentary parens

// return false if:
// - num of '(' doesn't equal num of ')'
// - if '(' doesn't come before ')'

// my solution
let left = "(";
let right = ")";

function countParens(string) {
  let countLeft = 0;
  let countRight = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === left) {
      countLeft = countLeft++;
    } else if (string[i] === right) {
      countRight = countRight++;
    }
  }
  return countLeft === countRight;
}

function parensFind(string) {
  return !string.includes(left) && !string.includes(right);
}

function parensOrder(string) {
  return string.indexOf(left) < string.indexOf(right);
}

function isBalanced(string) {
  if (parensFind(string)) {
    return true;
  } else if (parensOrder(string) && countParens(string)) {
    return true;
  }
}

// alt solution
// function isBalanced(string) {
//   // keeps track of matching pairs, left parens are +1, right parens are -1
//   // if balanced, parens will always be 0
//   let parens = 0;

//   for (let idx = 0; idx < string.length; idx++) {
//     if (string[idx] === "(") {
//       parens += 1;
//     } else if (string[idx] === ")") {
//       parens -= 1;
//     }
//     // accounts for cases where:
//     // - a right parens occurs before a left parens
//     // - and that right parens doesn't have a matching left parens
//     if (parens < 0) return false;
//   }
//   return parens === 0;
// }

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);
