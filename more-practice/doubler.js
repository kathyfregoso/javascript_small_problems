/*
// UNDERSTANDING THE PROBLEM
- INPUT: array of numbers
- OUTPUT: array of doubled numbers
- RULES: 
- doubling integers is multiplying by 2
- doubling str of letters is concatenating copy to end of str
- doubling digits === convert to integer and multiply by 2

// EXAMPLES/EDGE CASES: 
 - if empty array input, return empty array
 [] => []

 - if element is string of letters, double it like so:
  'hi' => 'hihi'

 - if element is str of digits, convert to num and double
  '22' => 44

- remove any falsy elements (null, undefined, false, "", 0, etc)

// DATA STRUCTURE(S): 
- array literals - iteration and transformation
- string elements
 - check if alphabetic or non alphabetic
// ALGORITHM:
- iterate through array
 - transform every element
 - if integer, multiply by 2
 - if string of alpha letters and/or non-digits, make a copy and concatenate to itself

- once all els in array transformed, filter arr to remove falsy elements
- return new array
*/

function doubler(array) {
  let doubled = array.map((value) => {
    if (typeof value === "number") {
      return value * 2;
    }

    if (/[^0-9]/gi.test(value)) {
      return value + value;
    }

    if (/[0-9]/gi.test(value)) {
      let numValue = Number(value);
      return numValue * 2;
    }
  });

  return doubled.filter((value) => value);
}

console.log(doubler([])); // []
console.log(doubler([1, 2, 3, 4])); // [2, 4, 6, 8]
console.log(doubler(["hi", "there", "!"])); // ['hihi', 'therethere', '!!']
console.log(doubler(["1", "2", "3", "4"])); // [2, 4, 6, 8]
console.log(doubler([0, 1, "", "8", false, "blue"])); // [2, 16, 'blueblue']
