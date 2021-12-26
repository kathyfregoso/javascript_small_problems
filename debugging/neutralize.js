function neutralize(sentence) {
  let words = sentence.split(" ");
  let newSentence = [];

  // instead of mutating the caller array, which shifts the elements during iteration,
  // I pushed each non-negative word into a new array
  // and returned that array after joining it as a string
  words.forEach((word) => {
    if (!isNegative(word)) {
      newSentence.push(word);
    }
  });
  return newSentence.join(" ");
}

// alternative solution:
// function neutralize(sentence) {
//   let words = sentence.split(" ");

//   return words.filter(word => !isNegative(word)).join(" ");
// };

// old code:
// function neutralize(sentence) {
//   let words = sentence.split(" ");

//   words.forEach(word => {
//     if (isNegative(word)) {
//       const index = words.indexOf(word);
//       words.splice(index, 1);
//     }
//   });
//   return words.join(" ");
// };

function isNegative(word) {
  return ["dull", "boring", "annoying", "chaotic"].includes(word);
}

console.log(
  neutralize("These dull boring cards are part of a chaotic board game.")
);
// Expected: These cards are part of a board game.
// Actual: These boring cards are part of a board game.
