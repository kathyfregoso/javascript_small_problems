// REQUIREMENTS:
// input: string

// output: string w/ the first char of every word capitalized
// and all subsequent chars in lowercase

// a word = any sequence of non-whitespace charså

// DATA STRUCTURES:
// strings

// ALGORITHMS:
// split the input string into an array of words (space delimiter)
// LOOP through the array of words
// - each word, capitalize the first letter - SUB PROCESS
// - continue until the last word is processed
// join the array of words into a string
// return the new string

function wordCap(str) {
  let capitalize = str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");

  return capitalize;
}

wordCap("four score and seven"); // "Four Score And Seven"
wordCap("the javaScript language"); // "The Javascript Language"
wordCap('this is a "quoted" word'); // 'This Is A "quoted" Word'
