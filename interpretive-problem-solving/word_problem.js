/*
// UNDERSTANDING THE PROBLEM
- INPUT: string of text (word problem)
- OUTPUT: integer (number)
 - answer to word problem calculation

- RULES: 
 - take word problem and return answer as integer (num)
 - words in string separated by space (" ")
 - numbers are digits (positive or negative)
  - how to extract negative numbers?
 - extract relevant calculation words and numbers
 - remove punctuation (assum word problem ends with 
   punctuation)

// EXAMPLES/EDGE CASES: 
What is 5 plus 13? // program should return 18
What is 7 minus 5? // 2
What is 33 divided by -3? // -11
What is -3 multiplied by 25? // -75

// DATA STRUCTURE(S): 
object to hold calculating symbols:
plus: '+'
minus: '-'
divided by: '/'
multiplied by: '*'

string input: regex, transform to array to split to words

// ALGORITHM:
1. remove any punctuation from input string (?, ., etc)
   -remove last punctuation mark by slicing it off
2. split str into arr of words separated by space
3. extract numbers (digits) into array
 - convert to integer/number
4. use reference object to extract calculation symbols
3. reduce array of numbers to get solution 
 using appropriate symbol
*/

function wordProblem(str) {
  let punctuation = {
    plus: function (num1, num2) {
      return num1 + num2;
    },
    minus: function (num1, num2) {
      return num1 - num2;
    },
    divided: function (num1, num2) {
      return num1 / num2;
    },
    multiplied: function (num1, num2) {
      return num1 * num2;
    },
  };
  let newStr = str.slice(0, str.length - 1).split(" ");
  let numbers = newStr
    .filter((word) => /[0-9]/g.test(word))
    .map((num) => Number(num));
  let calculation = newStr.filter((word) => punctuation[word])[0];

  return punctuation[calculation](...numbers);
}

console.log(wordProblem("What is 5 plus 13?")); // 18
console.log(wordProblem("What is 7 minus 5?")); // 2
console.log(wordProblem("What is 33 divided by -3?")); // -11
console.log(wordProblem("What is -3 multiplied by 25?")); // -75
