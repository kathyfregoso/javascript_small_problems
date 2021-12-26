// REQUIREMENTS:
// input: string

// output: array w/ every word from string
// - each word followed by a space + word length

// if input is "" or no input: return an empty array
// every pair of words in string separated by 1 space ' '

// QUESTIONS:

// EXAMPLES/TEST CASES:

// DATA STRUCTURES:
// strings, arrays

// ALGORITHMS:
// declare var with initialized value of an empty array literal
// split the input str into an array of words with ' ' separator, save to var
// loop thru the array of words:
// - push into new array: curr el + el.length
// - continue until all elements are iterated thru
// return the new array

// my solution
function wordLengths(sentence) {
  if (sentence) {
    return sentence.split(" ").map((word) => {
      return `${word} ${word.length}`;
    });
  }
  return [];
}

// alternate solution
// combine methods split + filter + map
function wordLengths(str = "") {
  return str
    .split(" ")
    .filter((word) => word.length > 0)
    .map((word) => word + " " + word.length);
}

// alternate solution
function wordLengths(words) {
  if (arguments.length === 0 || words.length === 0) {
    return [];
  }

  return words.split(" ").map(function (word) {
    return word + " " + String(word.length);
  });
}

// alternate solution w/ arrow func
const wordLengths = (...args) => {
  if (args.length === 0 || args[0].length === 0) {
    return [];
  }

  return args[0].split(" ").map(function (word) {
    return `${word} ${String(word.length)}`;
  });
};

wordLengths("cow sheep chicken");
// ["cow 3", "sheep 5", "chicken 7"]

wordLengths("baseball hot dogs and apple pie");
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

wordLengths("It ain't easy, is it?");
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

wordLengths("Supercalifragilisticexpialidocious");
// ["Supercalifragilisticexpialidocious 34"]

wordLengths(""); // []
wordLengths(); // []
