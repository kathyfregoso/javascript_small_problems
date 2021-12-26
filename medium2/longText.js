// REQUIREMENTS:
// input: string of sentences

// output: prints longest sentence in a string based on num of words
// and the word count is also printed

// rules (manipulating/processing strings)
// - sentences end w/ periods (.), exclamations (!), or question marks (?)
// - treat any sequence of chars that aren't spaces or sentence-ending chars as a word
//  - ex '--' counts as a word
// - preserve punctuation from the end of the sentence
// - details are important (case, punctuation, tabs, spaces, etc)

// DATA STRUCTURES:
// strings, arrays

// ALGORITHMS:
// iterate through input sentences
// once you reach the end of a sentence (ends w/ . ? or !), save as unique sentence
// do this for every sentence in the string
// once separated, compare the length of all unique sentences (by num of words)
// return the longest sentence (sentence w/ the most words)

// first solution
function longestSentence(string) {
  let endingChars = [".", "!", "?"];
  let longest = [];
  let currSentence = [];
  let splitText = string.split(" "); // split into arr of words

  // loop thru arr of words
  for (let idx = 0; idx < splitText.length; idx += 1) {
    let word = splitText[idx]; // current word
    let lastChar = word[word.length - 1]; // last character
    currSentence.push(word); // push current word to end of arr

    // check if punctuation array includes punc. that matchest the last char of curr word
    if (endingChars.includes(lastChar)) {
      // if it does match a punctuation mark in the endingChars array
      // check if currSentence is longer than longest sentence
      if (currSentence.length > longest.length) {
        // if it is, the current sentence array is now the longest sentence.
        longest = currSentence;
      }
      // if it isn't, clear the currentSentence array, there is a longer sentence
      currSentence = [];
    }
  }

  console.log(`${longest.join(" ")}`);
  console.log(`The longest sentence has ${longest.length} words.`);
}

// alt solution w/ regex
function longestSentence(text) {
  // match method doesn't lose punctuation, unlike the split method
  // this regex matches each sentence
  // *? restricts match to shortest possible string (a single sentence)
  // given a pattern, match:
  // \w - starts w/ any word char
  // .*? - may contain any amount of chars in the middle (even zero)
  // [.!?] - ends when the first ., !, or ? after starting word char is reached
  let sentences = text.match(/\w.*?[.!?]/g);

  let longest = sentences.reduce(
    function (longest, sentence) {
      let length = sentence.split(/\s/).length;
      if (length > longest.length) {
        return { text: sentence, length: length };
      } else {
        return longest;
      }
    },
    { text: "", length: 0 }
  );

  console.log(longest.text + "\n");
  console.log("The longest sentence has " + longest.length + " words.\n");
}

// 3rd alt solution
function longestSentence(text) {
  let sentences = text.split(/[.!?]/);
  let maxSentenceLength = 0;
  sentences.forEach((sentence) => {
    let sentenceLength = sentence.trim().split(" ").length;
    if (sentenceLength > maxSentenceLength) {
      maxSentenceLength = sentenceLength;
    }
  });
  return maxSentenceLength;
}

let longText =
  "Four score and seven years ago our fathers brought forth on this " +
  "continent a new nation, conceived in liberty, and dedicated to the " +
  "proposition that all men are created equal. Now we are engaged in a " +
  "great civil war, testing whether that nation, or any nation so " +
  "conceived and so dedicated, can long endure. We are met on a great " +
  "battlefield of that war. We have come to dedicate a portion of that " +
  "field, as a final resting place for those who here gave their lives " +
  "that that nation might live. It is altogether fitting and proper that " +
  "we should do this.";

let longerText =
  longText +
  "But, in a larger sense, we can not dedicate, we can not consecrate, " +
  "we can not hallow this ground. The brave men, living and dead, who " +
  "struggled here, have consecrated it, far above our poor power to add " +
  "or detract. The world will little note, nor long remember what we say " +
  "here but it can never forget what they did here. It is for us the " +
  "living, rather, to be dedicated here to the unfinished work which " +
  "they who fought here have thus far so nobly advanced. It is rather " +
  "for us to be here dedicated to the great task remaining before us -- " +
  "that from these honored dead we take increased devotion to that " +
  "cause for which they gave the last full measure of devotion -- that " +
  "we here highly resolve that these dead shall not have died in vain " +
  "-- that this nation, under God, shall have a new birth of freedom -- " +
  "and that government of the people, by the people, for the people, " +
  "shall not perish from the earth.";

longestSentence(longText);
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.
//
// The longest sentence has 30 words.

longestSentence(longerText);
// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.
//
// The longest sentence has 86 words.

longestSentence("Where do you think you're going? What's up, Doc?");
// Where do you think you're going?
//
// The longest sentence has 6 words.

longestSentence("To be or not to be! Is that the question?");
// To be or not to be!
//
// The longest sentence has 6 words.
