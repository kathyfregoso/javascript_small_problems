// INPUT:
// user input prompts:
// - noun
// - verb
// - adverb
// - adjective

// OUTPUT:
// story (string of words) that replaces blanks with user inputs

// REQUIREMENTS:
// require readline-sync library
// create a madlib program

// QUESTIONS:

// EXAMPLES/TEST CASES:
// validate user inputs

// Enter a noun: dog
// Enter a verb: walk
// Enter an adjective: blue
// Enter an adverb: quickly

// console output
// Do you walk your blue dog quickly? That's hilarious!
// The blue dog walks quickly over the lazy dog.
// The dog quickly walks up blue Joe's turtle.

// DATA STRUCTURES:
// strings

// ALGORITHMS:
// req. readline sync
// ask user for a noun
// ask user for a verb
// ask user for an adjective
// ask user for an adverb
// collect all inputs into variables
// output string that concatenates with user inputs
// ask user if they want to go again, if yes, clear console and restart
// if no, clear console

const readline = require("readline-sync");
const VALID_ANSWERS = ["yes", "y", "no", "n"];

function prompt(message) {
  console.log(`>> ${message}`);
}

while (true) {
  prompt(`Enter a noun: `);
  let noun = readline.question().trim();

  prompt(`Enter a verb: `);
  let verb = readline.question().trim();

  prompt(`Enter an adjective: `);
  let adjective = readline.question().trim();

  prompt(`Enter an adverb: `);
  let adverb = readline.question().trim();

  prompt(
    `Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`
  );

  prompt(`The ${adjective} ${noun} ${verb}s ${adverb} over the lazy ${noun}.`);

  prompt(`The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.`);

  prompt(`Want to do go again? (y/n)`);
  let restart = readline.question().toLowerCase();

  while (!VALID_ANSWERS.includes(restart)) {
    prompt('Please enter "yes" (y) or "no" (n).');
    restart = readline.question().toLowerCase();
  }

  if (restart === "y" || restart === "yes") {
    console.clear();
  }
  if (restart !== "y" || restart === "yes") break;
}
