/*
// UNDERSTANDING THE PROBLEM
- INPUT: string
- OUTPUT: array with every word, space and the word's length
- RULES: if empty  string, or no argument, return empty array
- every par of words separated by 1 whitespace=

// EXAMPLES/EDGE CASES: see below

// DATA STRUCTURE(S): arrays, strings, integers

// ALGORITHM:
if input empty str or none given, return empty array
split string into array of words (delimiter ' ')
loop through string, get length of word
concat length of word to current word element
return new array
*/

function wordLengths(string) {
  return string
    ? string.split(" ").map((word) => word + " " + word.length)
    : [];
}

console.log(wordLengths("cow sheep chicken"));
// ["cow 3", "sheep 5", "chicken 7"]

console.log(wordLengths("baseball hot dogs and apple pie"));
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

console.log(wordLengths("It ain't easy, is it?"));
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

console.log(wordLengths("Supercalifragilisticexpialidocious"));
// ["Supercalifragilisticexpialidocious 34"]

console.log(wordLengths("")); // []
console.log(wordLengths()); // []
