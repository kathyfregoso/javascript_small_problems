/*
// UNDERSTANDING THE PROBLEM
- INPUT: 2 strings
- OUTPUT: number (num of chars we should shift in 1st str forward to match 2nd str)
 - if 2nd string invalid rotation, return -1

- RULES: 
 - case sensitive check

// EXAMPLES/EDGE CASES: 
"coffee", "eecoff" => 2
coffee => ecoffe -> eecoff

"eecoff", "coffee" => 4
eecoff => feecof => ffeeco => offeec => coffee

"moose", "Moose" => -1 (case sensitive)

"isn't", "'tisn" => 2
isn't => tisn' => 'tisn

"Esham", "Esham" => 0
"dog", "god" => -1
"fatigue" and "tiguefa" => 5

// DATA STRUCTURE(S): 
strings

// ALGORITHM:
*/

function shiftedDiff(first, second) {
  if (first.length !== second.length) return -1;
  return (second + second).indexOf(first);
}

console.log(shiftedDiff("eecoff", "coffee")); // 4
// console.log(shiftedDiff("Moose", "moose")); // -1
// console.log(shiftedDiff("isn't", "'tisn")); // 2
// console.log(shiftedDiff("Esham", "Esham")); // 0
// console.log(shiftedDiff(" ", " ")); // 0
// console.log(shiftedDiff("hoop", "pooh")); // -1
// console.log(shiftedDiff("  ", " ")); // -1
// console.log(shiftedDiff("coffee", "eecoff")); // 2
// console.log(shiftedDiff("dog", "god")); // -1
// console.log(shiftedDiff("fatigue", "tiguefa")); // 5
