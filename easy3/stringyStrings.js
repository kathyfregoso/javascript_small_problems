// INPUT:
// number

// OUTPUT:
// string of alternating '1's and '0's

// REQUIREMENTS:
// output string should always start with '1'
// the length of the output string should match input number

// QUESTIONS:

// EXAMPLES/TEST CASES:

// DATA STRUCTURES:
// numbers
// strings

// ALGORITHMS:
// initialize a variable with value of ""
// use a loop whose condition is 'i < input'
// since the first digit is always '1':
// - if i % 0 === 0, output += '1'
// - if i % 0 !== 0, output += '0'
// return string

function stringy(num) {
  let output = "";
  for (let i = 0; i < num; i++) {
    if (i % 2 === 0) {
      output += "1";
    } else if (i % 2 !== 0) {
      output += "0";
    }
  }
  console.log(output);
  return output;
}

stringy(6); // "101010"
stringy(9); // "101010101"
stringy(4); // "1010"
stringy(7); // "1010101"
