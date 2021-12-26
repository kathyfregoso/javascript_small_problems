// REQUIREMENTS:
// input: string
// output: new string containing words from the string argument in reverse order

// QUESTIONS:

// EXAMPLES/TEST CASES: see below

// DATA STRUCTURES:
// strings, arrays

// ALGORITHMS:
// assign the input string value to a new variable
// convert the string into an array by splitting the words
// reverse the word array
// join the words into a string with a space separator
// return the new reversed string

function reverseSentence(string) {
  let reversedString = string.split(" ").reverse().join(" ");
  console.log(reversedString);
  return reversedString;
}

reverseSentence(""); // ""
reverseSentence("Hello World"); // "World Hello"
reverseSentence("Reverse these words"); // "words these Reverse"
