// INPUTS: 
// string 

// OUTPUTS:
// ASCII string value of the input string

// EXPLICIT REQUIREMENTS: 
// can use String.prototype.charCodeAt() to determine the ASCII value of a character.

// IMPLICIT REQUIREMENTS / QUESTIONS: 
// add all character values together to get the total value of the string
// each character has a numerical ascii value (unicode)

// EXAMPLES / TEST CASE:
// the string can be empty
// the string can be a single character
// the string can have spaces 
// see below for examples 

// similar problems:


// DATA STRUCTURE:
// strings 
// numbers
// arrays

// ALGORITHM:
// declare variable called output string and assign it a value of 0
// iterate through the string, determine the ascii str value of each character with charcodeAt()
// in each iteration, output += characters.charCodeAt(i)
// return the output variable

function asciiValue(string) {
  let output = 0;
  for (let i = 0; i < string.length; i++) {
      output += string.charCodeAt(i);
  }
  return output;
}

asciiValue('Four score');         // 984
asciiValue('Launch School');      // 1251
asciiValue('a');                  // 97
asciiValue('');                   // 0