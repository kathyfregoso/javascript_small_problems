// REQUIREMENTS:
// input: string w/ one or more words
// output: new string w/ words from the string argument
// all 5 or more letter words should have their letters in reverse order
// string argument contains only letters and spaces
// words separated by a single space

// QUESTIONS:

// EXAMPLES/TEST CASES:
reverseWords("Professional"); // "lanoisseforP"
reverseWords("Walk around the block"); // "Walk dnuora the kcolb"
reverseWords("Launch School"); // "hcnuaL loohcS"

// DATA STRUCTURES:
// strings
// arrays

// ALGORITHMS:
// convert input string to array and assign reference to a variable

// loop through the array of words
// - if the string element has a length greater than or equal to 5:
//  - reverse the string

// - if the string has a length less than 5:
//  - continue, do not reverse
// stop loop when it reaches the end of the array
// join the array of words with a space separator
// return the new string

function reverseWords(string) {
  let newString = string.split(" ");

  for (let index = 0; index < newString.length; index++) {
    if (newString[index].length >= 5) {
      newString[index] = newString[index].split("").reverse().join("");
    }
  }

  console.log(newString.join(" "));
  return newString.join(" ");
}
