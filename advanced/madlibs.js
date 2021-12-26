let template1 =
  "The %adjective% brown %noun% %adverb% " +
  "%verb% the %adjective% yellow " +
  "%noun%, who %adverb% %verb% his " +
  "%noun% and looks around.";

const fillers = {
  adjective: [
    "capable",
    "elegant",
    "cute",
    "level",
    "alluring",
    "lackadaisical",
    "zealous",
    "faint",
    "many",
    "stupendous",
  ],
  noun: [
    "technology",
    "cell",
    "secretary",
    "theory",
    "penalty",
    "theory",
    "baseball",
    "examination",
    "flight",
    "throat",
    "highway",
  ],
  verb: [
    "enforce",
    "dicate",
    "bury",
    "judge",
    "dissolve",
    "steal",
    "rent",
    "monitor",
    "occupy",
    "purchase",
  ],
  adverb: [
    "separately",
    "coolly",
    "kindheartedly",
    "fatally",
    "unaccountably",
    "thoroughly",
    "weekly",
    "regularly",
    "quizzically",
    "searchingly",
  ],
};

function randomNum(max) {
  return Math.floor(Math.random() * (max + 1));
}

function wordType(word) {
  return word.slice(1, word.lastIndexOf("%"));
}

function randomElement(arr) {
  return arr[randomNum(arr.length - 1)];
}

function madlibs(template) {
  return template
    .split(" ")
    .map((word) => {
      if (word[0] === "%") {
        return (
          randomElement(fillers[wordType(word)]) +
          word.slice(word.lastIndexOf("%") + 1)
        );
      }
      return word;
    })
    .join(" ");
}

// // These examples use the following list of replacement texts:
// adjectives: quick lazy sleepy noisy hungry
// nouns: fox dog head leg tail cat
// verbs: jumps lifts bites licks pats
// adverbs: easily lazily noisily excitedly
// ------

console.log(madlibs(template1));
