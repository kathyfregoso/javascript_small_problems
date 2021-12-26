/*
// UNDERSTANDING THE PROBLEM
- INPUT: string of digits 
 - short-hand range of numbers
 - only significant potion of next # in list is written
- OUTPUT: array list of complete numbers
- RULES:
 - numbers in input list are always increasing
 - possible RANGE separators: ["-", ":", ".."]
 - numbers increase in value from left to right
 - list of numbers separated by ', '
// EXAMPLES/EDGE CASES: 
- "1, 3, 7, 2, 4, 1" --> [1, 3, 7, 12, 14, 21]
- "1-3, 1-2" --> [1, 2, 3, 11, 12]
- "1:5:2" --> [1, 2, 3, 4, 5, 6, ... 12]
- "104-2" --> [104, 105, ... 112]
- "104-02" --> [104, 105, ... 202]
- "545, 64:11" --> [545, 564, 565, .. 611]

// DATA STRUCTURE(S): arrays, strings, numbers

// ALGORITHM:
- split input string into list of strings, delimiter: ', '
- iterate through list of elements
 - check if current element includes these chars: "-", ":", ".."
  - IF NOT INCLUDED
   - convert current element to a number
   - if not 1st index, check that current element is greater than previous element
   - if greater, continue loop
   - if not greater than previous element, find 1st number that is greater that includes that digit
  - IF element includes "-", ":", OR ".."
   - split element into a subarray using the appropriate separator
   - note that each number in this range increments by 1, so there are missing numbers in the
    list btw elements
*/

const { number } = require("yargs");

function expand(numbers) {
  let numberRange = numbers.split(", ").map((digit) => Number(digit));
  let list = numberRange.slice(0, 1);
  let previous;
  let next;

  for (let idx = 1; idx < numberRange.length; idx += 1) {
    let currNum = numberRange[idx];
    previous = numberRange[idx - 1];

    if (previous > currNum) {
      list.push(getNextNumber(previous, currNum));
      previous = list[idx - 1];
    } else {
      list.push(currNum);
    }
  }
  return numberRange;
}

function getNextNumber(previous, currNum) {
  let output = String(currNum);

  for (let append = 1; append <= 9; append += 1) {
    let stringAppend = String(append);
    output = stringAppend + output;
    output = Number(output);
    while (output < previous) {
      continue;
    }
  }
  return output;
}

console.log(expand("1, 3, 7, 2, 4, 1")); // [1, 3, 7, 12, 14, 21]
// console.log(expand("1-3, 1-2")); // [1, 2, 3, 11, 12]
// console.log(expand("1:5:2")); // [1, 2, 3, 4, 5, 6, ... 12]
// console.log(expand("104-2")); // [104, 105, ... 112]
// console.log(expand("104-02")); // [104, 105, ... 202]
// console.log(expand("545, 64:11")); // [545, 564, 565, .. 611]
