// REQUIREMENTS:
// input: sentence string

// output: string w/ every occurrence of a 'number word' converted to corresp. digit character

// QUESTIONS:

// EXAMPLES/TEST CASES:

// DATA STRUCTURES:
// arrays, strings, numbers

// ALGORITHMS:
// create collection that holds digits 1-9 w/ corresponding word string
// create collection that holds the alphabet
// split the input string into an array of words
// loop through the string input
// - remove any punctuation from current (temporarily)
// - check if input string matches collection val w/ corresponding number value
// - if it matches, replace with number
// - else, continue looping
// - exit loop
// - join the array of words to string
// - return new string.

let numberWords = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

// solution
function wordToDigit(sentence) {
  let wordsArr = Object.keys(numberWords);
  let words = sentence.split(/\b/);
  console.log(words);

  let output = words.map((word) => {
    if (wordsArr.includes(word)) {
      return String(numberWords[word]);
    }
    return word;
  });

  console.log(output.join(""));
  return output.join("");
}

// alternative solution
function wordToDigit_(sentence) {
  let output = sentence
    .split(/\b/)
    .map((word) => {
      if (Object.keys(numberWords).includes(word)) {
        return numberWords[word];
      } else {
        return word;
      }
    })
    .join("");

  console.log(output);
  return output;
}

// third solution
function wordToDigit__(sentence) {
  let output = sentence.replace(/\w+/g, (word) => {
    if (Object.keys(numberWords).includes(word)) {
      return numberWords[word];
    } else {
      return word;
    }
  });

  console.log(output);
  return output;
}

wordToDigit__("Please call me at five five five one two three four. Thanks.");
// "Please call me at 5 5 5 1 2 3 4. Thanks."
