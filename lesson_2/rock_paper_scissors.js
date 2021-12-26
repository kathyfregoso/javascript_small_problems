// consider:
// 1- does displayWinner still work if before prompt func def? yes. why?
//2- displayWinner returns a str instead of str output
//3- rewrite random idx expr w/ Math.ceil +/or Math.round
//4- rewrite loop w/out break statement

const readline = require("readline-sync");
const VALID_CHOICES = ["rock", "paper", "scissors"];

function prompt(message) {
  console.log(`>> ${message}`);
}

function displayWinner(choice, compChoice) {
  if (
    (choice === "rock" && compChoice === "scissors") ||
    (choice === "paper" && compChoice === "rock") ||
    (choice === "scissors" && compChoice === "paper")
  ) {
    prompt("Congratulations, you beat the computer!");
  } else if (
    (compChoice === "rock" && choice === "scissors") ||
    (compChoice === "paper" && choice === "rock") ||
    (compChoice === "scissors" && choice === "paper")
  ) {
    prompt("Too bad, you lost.");
  } else {
    prompt(`It's a tie!`);
  }
}

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(", ")}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That choice is invalid, try again.");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let compChoice = VALID_CHOICES[randomIndex];

  prompt(`You chose ${choice}, the computer chose ${compChoice}.`);

  displayWinner(choice, compChoice);

  prompt("Do you want to play again? (y/n)?");
  let answer = readline.question().toLowerCase();
  while (answer[0] !== "n" && answer[0] !== "y") {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== "y") {
    break;
  }
  console.clear();
}
