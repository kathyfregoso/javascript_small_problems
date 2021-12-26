// REQUIREMENTS:
// input:
// - a word (string)
// - string of text (string sentence)

// output:
// string of text with every occurence of word highlighted => **WORD**

// '**' on each side
// change every letter to uppercase

// QUESTIONS:

// EXAMPLES/TEST CASES:

// DATA STRUCTURES:
// strings, arrays

// ALGORITHMS:
// convert string to an array of words (space delimiter)
// assign an empty array to variable

// loop through array
// - each iteration, if word matches current el, uppercase and add ** to each side and push to empty array
// - else, just save to empty array
// - exit loop
// join the array of words, return new string

const text =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?";

function searchWord(word, text) {
  let wordArr = text.split(" ");
  let highlighted = [];

  wordArr.forEach((el) => {
    if (el.toLowerCase() === word) {
      el = `**${el.toUpperCase()}**`;
      highlighted.push(el);
    } else {
      highlighted.push(el);
    }
  });

  console.log(highlighted.join(" "));
  return highlighted.join(" ");
}

searchWord("sed", text);
// returns
// "**SED** ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, **SED** quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, **SED** quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? **SED** quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?"
