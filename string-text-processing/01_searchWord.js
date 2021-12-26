// REQUIREMENTS:
// input:
// - a word (string)
// - string of text (string sentence)

// output:
// integer representing the num of times the word appears in the text

// word and text inputs will always be provided
// word breaks = spaces
// some words include punctuation
// case insensitive (implicit!)

// QUESTIONS:

// EXAMPLES/TEST CASES:

// DATA STRUCTURES:
// strings, arrays

// ALGORITHMS:
// convert string to an array of words (space delimiter)
// declare count variable and assign value of 0
// loop through array
// - each iteration, if word matches current el, count += 1
// - else, continue/terminate current iteration
// - exit loop
// return count

const text =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?";

function searchWord(word, text) {
  let wordArr = text.split(" ");
  let count = 0;

  wordArr.forEach((el) => {
    if (el.toLowerCase() === word) {
      count += 1;
    }
  });

  return count;
}

searchWord("sed", text); // 4
searchWord("est", text); // 0
searchWord("est,", text); // 2
