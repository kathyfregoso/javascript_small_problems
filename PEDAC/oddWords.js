/*
// UNDERSTANDING THE PROBLEM
- INPUT: string (letters, space, point . )
 - 1+ words separated by 0+ spaces followed by .
- OUTPUT: 
- RULES: input is a character set
 - read input from (inclusive) 1st letter of 1st word
  up to (inclusive) terminating point
 - odd words are copied in reverse order
 - even words are merely echoed (unchanged)

// EXAMPLES/EDGE CASES: 
// for example, the input string:

"whats the matter with kansas."

// becomes

"whats eht matter htiw kansas."
- index 0: even word unchanged
- index 1: the => eht
- index 3: with => htiw

// DATA STRUCTURE(S): 
 - split the string into array of words for transformation

// ALGORITHM:
- remove the point at the end of the sentence (.)
- save point to variable for output
- split string into array of words delimited by 1 space
- iterate thru array for transformation
 - for every oddly indexed word
  - split word into array of characters
  - reverse the array of characters
  - join array of characters and return
 - don't change evenly indexed words
- join array of words and concat point at the end
- return new string of reversed odd words
*/

function reverseOddWords(string) {
  let point = ".";
  let arrChars = string
    .split(".")
    .join("")
    .split(" ")
    .filter((word) => word);

  return (
    arrChars
      .map((word, idx) => {
        if (idx % 2 !== 0) {
          return word.split("").reverse().join("");
        } else {
          return word;
        }
      })
      .join(" ")
      .trim() + point
  );
}

console.log(reverseOddWords("sup.")); // "sup."
console.log(reverseOddWords("sup there.")); // "sup ereht."
console.log(reverseOddWords("sup . ")); // "sup."
console.log(reverseOddWords("whats the matter with kansas."));
// // "whats eht matter htiw kansas."
console.log(reverseOddWords("whats the matter with kansas love."));
// // "whats eht matter htiw kansas evol."
console.log(reverseOddWords("hello.")); // "hello."
console.log(reverseOddWords("hello .")); // "hello."
console.log(reverseOddWords("hello world."));
// // "hello dlrow."
console.log(reverseOddWords("hello world ."));
// "hello dlrow."
console.log(reverseOddWords("hello  world ."));
// // "hello dlrow."
console.log(reverseOddWords("hello hello world."));
// "hello olleh world."
