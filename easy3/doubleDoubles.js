// INPUT:
// number

// OUTPUT:
// IF double number: number as is
// IF NOT double number: number * 2

// REQUIREMENTS:
// double number: even-length number whose left side digits are exactly same as its right side digits
//

// QUESTIONS:

// EXAMPLES/TEST CASES:
// double numbers: 44, 3333, 103103, and 7676
// not double numbers: 444, 334433, and 107

// DATA STRUCTURES:
// numbers

// ALGORITHMS:
// validate that the input is (or isn't) a double number
// - convert number to a string
// - if even length (the number length % 2 === 0 (even)), split string in half
// - compare halved strings for equality
// if it is, multiply * 2
// if it isn't, return input as is

function twice(num) {
  let str = String(num);

  if (str.length % 2 === 0) {
    let firstHalf = str.slice(0, str.length / 2);
    let secondHalf = str.slice(str.length / 2);
    if (firstHalf === secondHalf) {
      return num;
    }
  }
  return num * 2;
}

twice(37); // 74
twice(44); // 44
twice(334433); // 668866
twice(444); // 888
twice(107); // 214
twice(103103); // 103103
twice(3333); // 3333
twice(7676); // 7676
