// INPUT:
// string with duplicate/repeat characters

// OUTPUT:
// string with no duplicate/repeat characters

// REQUIREMENTS:
// return new str containing values of the input string,
// all consecutive duplicate chars collapsed into 1 char

// QUESTIONS:

// EXAMPLES/TEST CASES:
// accepts empty string: ""
// accepts single character string: "a"
// accepts repeated single char string: "gggggggggggggg"
// dont eliminate non-consecutive repeat strings: 'b', 'a' in "4abcabcba"

// DATA STRUCTURES:
// strings
// object methods
// array?

// ALGORITHMS:
// initialize empty string variable
// check string for repeat consecutive characters => for loop
// using charAt string method, if string[i] = string[i+1]:
// output += string[i]
// return output variable

function crunch(string) {
  let output = "";
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) !== string.charAt(i + 1)) {
      output += string[i];
    }
  }
  return output;
}

console.log(crunch("ddaaiillyy ddoouubbllee")); // "daily double"
console.log(crunch("4444abcabccba")); // "4abcabcba"
console.log(crunch("ggggggggggggggg")); // "g"
console.log(crunch("a")); // "a"
console.log(crunch(""));

// further exploration

// if the loop stops iterating when i is equal to string.length - 1, the loop does not
// compare the last character in the string to anything
// it stops comparing at the second to last character, which gets compared to the final character
// otherwise, when i points past the end of the string with string.length, the
// last character gets compared to text[index + 1], whose value is 'undefined'
// this condition is truthy, so the last character is concatenated to the output str variable
