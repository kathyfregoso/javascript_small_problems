/*
// UNDERSTANDING THE PROBLEM
- INPUT: long string of text
- OUTPUT: string (sentiment analysis)
// There are X positive words in the text.
// Positive sentiments: [list of negative words]

// There are Y negative words in the text.
// Negative sentiments: [list of negative words]

// The sentiment of the text is [Negative / Positive / Neutral].

- RULES:
 - determine mood of input text
 - sentiment analysis: get subjective info from text and convert it to 
  concrete info
 - using lists of positive + negative words, analyze words to determine
  if the mood is positive, negative, or neutral

// EXAMPLES/EDGE CASES:
 - count includes REPEATS of words (die appears 2x)
 - count only includes EXACT MATCHES of words ('dreams' not counted for 'dream')

// DATA STRUCTURE(S): arrays, strings, integers

// ALGORITHM:
- split input text body into array of words (delimiter is space)
 - remove all punctuation!
 - replace \n with ' '
 - 
- iterate thru array
 - if current word element is in positiveWords array, push word to new array
 - if current word element is in negativeWords array, push word to new array
- compute sentiment score:
 - positive word count (array length) - negative word count (array length)
  -if count is > 0, return 
   - 'The sentiment of the text is Positive.'
  - if count < 0, return
   - 'The sentiment of the text is Negative.'
  - if count === 0, return
   - 'The sentiment of the text is Neutral.'
*/

let positiveWords = [
  "fortune",
  "dream",
  "love",
  "respect",
  "patience",
  "devout",
  "noble",
  "resolution",
];
let negativeWords = [
  "die",
  "heartache",
  "death",
  "despise",
  "scorn",
  "weary",
  "trouble",
  "oppress",
];

function sentiment(text) {
  let newText = text
    .split("-")
    .join(" ")
    .replace(/[^\w\s]/gi, "")
    .split("\n")
    .join(" ")
    .split(" ");

  let positivesCount = findPositives(newText).length;
  let negativesCount = findNegatives(newText).length;

  return (
    `There are ${positivesCount} positive words in the text.\nPositive sentiments: ${findPositives(
      newText
    ).join(", ")}\n\n` +
    `There are ${negativesCount} negative words in the text.\nNegative sentiments: ${findNegatives(
      newText
    ).join(", ")}\n\n` +
    `The sentiment of the text is ${findSentiment(
      positivesCount,
      negativesCount
    )}.`
  );
}

function findSentiment(positivesCount, negativesCount) {
  if (positivesCount - negativesCount > 0) return "Positive";
  if (positivesCount - negativesCount < 0) return "Negative";
  if (positivesCount === negativesCount) return "Neutral";
}

function findPositives(newText) {
  let positives = [];

  newText.forEach((word) => {
    if (positiveWords.includes(word)) {
      positives.push(word);
    }
  });
  return positives;
}

function findNegatives(newText) {
  let negatives = [];

  newText.forEach((word) => {
    if (negativeWords.includes(word)) {
      negatives.push(word);
    }
  });
  return negatives;
}

let textExcerpt =
  "To be or not to be-that is the question:\n" +
  "Whether 'tis nobler in the mind to suffer\n" +
  "The slings and arrows of outrageous fortune,\n" +
  "Or to take arms against a sea of troubles,\n" +
  "And, by opposing, end them. To die, to sleep-\n" +
  "No more-and by a sleep to say we end\n" +
  "The heartache and the thousand natural shocks\n" +
  "That flesh is heir to-'tis a consummation\n" +
  "Devoutly to be wished. To die, to sleep-\n" +
  "To sleep, perchance to dream. Aye, there's the rub,\n" +
  "For in that sleep of death what dreams may come,\n" +
  "When we have shuffled off this mortal coil,\n" +
  "Must give us pause. There's the respect\n" +
  "That makes calamity of so long life.\n" +
  "For who would bear the whips and scorns of time,\n" +
  "Th' oppressor's wrong, the proud man's contumely, [F: poor]\n" +
  "The pangs of despised love, the law’s delay, [F: disprized]\n" +
  "The insolence of office, and the spurns\n" +
  "That patient merit of the unworthy takes,\n" +
  "When he himself might his quietus make\n" +
  "With a bare bodkin? Who would fardels bear, [F: these Fardels]\n" +
  "To grunt and sweat under a weary life,\n" +
  "But that the dread of something after death,\n" +
  "The undiscovered country from whose bourn\n" +
  "No traveler returns, puzzles the will\n" +
  "And makes us rather bear those ills we have\n" +
  "Than fly to others that we know not of?\n" +
  "Thus conscience does make cowards of us all,\n" +
  "And thus the native hue of resolution\n" +
  "Is sicklied o'er with the pale cast of thought,\n" +
  "And enterprises of great pitch and moment, [F: pith]\n" +
  "With this regard their currents turn awry, [F: away]\n" +
  "And lose the name of action.-Soft you now,\n" +
  "The fair Ophelia.-Nymph, in thy orisons\n" +
  "Be all my sins remembered";

console.log(sentiment(textExcerpt));

// console output

// There are 5 positive words in the text.
// Positive sentiments: fortune, dream, respect, love, resolution

// There are 6 negative words in the text.
// Negative sentiments: die, heartache, die, death, weary, death

// The sentiment of the text is Negative.
