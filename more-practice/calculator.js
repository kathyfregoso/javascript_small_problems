/*
// UNDERSTANDING THE PROBLEM
- INPUT: string (of operators and numbers)
 - operators: (), +, -, *, /
- OUTPUT:  value of expression (number)
- RULES: 
 - input is always a string
 - empty str returns 0 
// EXAMPLES/EDGE CASES: 

// DATA STRUCTURE(S): 
string input
string => array to grab numbers
obj to hold operators

// ALGORITHM:
1. get an array of numbers from string
2. get an array of operators from string
3. iterate through array of values and perform appropriate 
 calculation by using object to reference operation
  equivalent of string operation
   -reduce to get value
4. return value of expression
*/

let operators = {
  "/": function (num1, num2) {
    return num1 / num2;
  },
  "+": function (num1, num2) {
    return num1 + num2;
  },
  "-": function (num1, num2) {
    return num1 - num2;
  },
  "*": function (num1, num2) {
    return num1 * num2;
  },
};

function calculator(expression) {
  if (!expression) return 0;
  let splitExpr = expression.split(" ");
  let numbers = expression
    .split(/[^0-9]/gi)
    .filter((str) => str)
    .map((digit) => Number(digit));
  let exprOperators = expression
    .split("")
    .filter((str) => /[^0-9]/gi.test(str))
    .filter((str) => str !== " ");

  return numbers.reduce((acc, curr) => {
    let currOperator = exprOperators[0];

    exprOperators = exprOperators.slice(1);
    acc = operators[currOperator](acc, curr);

    return acc;
  });
}

// console.log(calculator("")); // 0
// console.log(calculator("127")); // 127
console.log(calculator("2 / 2 + 3 * 4 - 6")); // 7
// console.log(calculator("2 + 3")); // 5
// console.log(calculator("2 - 3 - 4")); // -5
// console.log(calculator("10 * 5 / 2")); // 25
