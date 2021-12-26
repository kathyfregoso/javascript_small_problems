// INPUT:
// string input of dot separated numbers

// OUTPUT:

// REQUIREMENTS:
// determine whether an input str is an IP address
// error if input str is not equal to 4 components
// - this requires no more or less than three '.' characters
// helper function isAnIpNumber -> det. whether str is a numeric str between 0-255

// QUESTIONS:

// EXAMPLES/TEST CASES:
// current errors according to Alyssa:
// - not returning a false condition
// - not handling case when input str has more or less than 4 components (ie 4.5.5 or 1.2.3.4.5)
//   - both those values should be invalid

// should return false when invalid components are inputted like '257' or 'abc'

// DATA STRUCTURES:
// strings
// objects

// ALGORITHMS:

// helper function
function isAnIpNumber(str) {
  // returns truthy if str is str of digits
  if (/^\d+$/.test(str)) {
    let num = Number(str); // convert it to number
    return num >= 0 && num <= 255; // check if num is in range 0-255
  }
  return false; // returns false if input is not a str of digits
}

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  console.log(dotSeparatedWords); // ['10', '4', '5', '11']
  // false if length isn't 4
  if (dotSeparatedWords.length !== 4) {
    return false;
  }

  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false; // replaced break statement to explicitly return false
    }
  }
  return true;
}

console.log(isDotSeparatedIpAddress("10.4.5.11"));
console.log(isDotSeparatedIpAddress("4.5.5"));
console.log(isDotSeparatedIpAddress("4.5.5.1.2"));
