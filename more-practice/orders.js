/*
// UNDERSTANDING THE PROBLEM
- INPUT: string order 
 - all letters?
 - no spaces between words
 - no capitalization
- OUTPUT: cleaned string order
 - with spaces, capitals
 - in same order as menu
- RULES:  
 - no overlap btw names on menu
 1. Burger
2. Fries
3. Chicken
4. Pizza
5. Sandwich
6. Onionrings
7. Milkshake
8. Coke

// EXAMPLES/EDGE CASES: see below

// DATA STRUCTURE(S): 
- array to hold menu item names as string elements
- strings to parse

// ALGORITHM:
- create menu array with menu item names (all lowercase)
- assign empty array to output variable
- iterate through menu array:
 - check to see if current menu item exists in string
 - if exists, repeat item the number of times it appears
  in string (make sure letters are capitalized)
 - push to output array
 - if it doesn't exist, don't push anything
- flatten array and join as string with space delimiters
- return cleaned string
*/

function getOrder(inputOrder) {
  let menu = [
    "burger",
    "fries",
    "chicken",
    "pizza",
    "sandwich",
    "onionrings",
    "milkshake",
    "coke",
  ];

  let output = [];

  menu.forEach((item) => {
    let count = inputOrder.split(item).length - 1;
    let capitalized = item[0].toUpperCase() + item.slice(1);
    output.push(Array(count).fill(capitalized));
  });
  return output.flat().join(" ");
}

console.log(
  getOrder("milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza")
);
// "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"

// // one item order
// console.log(getOrder("fries")); // 'Fries'

// // short order only 2 items
// console.log(getOrder("milkshakeonionrings"));
// // Onionrings Milkshake

// // example with random inconsistent letter casing
// console.log(getOrder("miLkshaKefriEspizzA"));
// //  Fries Pizza Milkshake
