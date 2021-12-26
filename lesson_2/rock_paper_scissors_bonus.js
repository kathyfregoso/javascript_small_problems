const readline = require("readline-sync");
const SCORE = {
  user: 0,
  computer: 0,
};
const MAX_SCORE = 5;
const VALID_CHOICES = ["rock", "paper", "scissors", "lizard", "spock"];
const WIN_COMBOS = {
  rock: ["scissors", "lizard"],
  paper: ["rock", "spock"],
  scissors: ["paper", "lizard"],
  lizard: ["paper", "spock"],
  spock: ["rock", "scissors"],
};
const VALID_ANSWERS = ["y", "yes", "n", "no"];
let goAgain;

function prompt(message) {
  console.log(`>> ${message}`);
}

function determineWinner(choice, compChoice) {
  if (WIN_COMBOS[choice].includes(compChoice)) {
    prompt(`${choice} beats ${compChoice}, you win this round`);
  } else if (WIN_COMBOS[compChoice].includes(choice)) {
    prompt(`${compChoice} beats ${choice}, computer wins this round`);
  } else if (choice === compChoice) {
    prompt(`${choice} equals ${compChoice}. It's a tie`);
  }
}

function endGame(SCORE) {
  if (SCORE.user < MAX_SCORE && SCORE.computer < MAX_SCORE) {
    prompt("Do you want to continue? (y/n)?");
    goAgain = readline.question().toLowerCase();
  }

  while (!VALID_ANSWERS.includes(goAgain)) {
    prompt('Please enter "yes" (y) or "no" (n).');
    goAgain = readline.question().toLowerCase();
  }
  console.clear();
  return goAgain;
}

function grandWinner(SCORE) {
  if (SCORE.user > SCORE.computer) {
    prompt("Congrats! You are the GRAND WINNER!!");
  } else if (SCORE.user < SCORE.computer) {
    prompt("You lost! The computer is the GRAND WINNER!!");
  } else {
    prompt(`It's a tie.`);
  }
  scoreDisplay(SCORE);
}

function shorthandChoice(inputChoice) {
  switch (inputChoice) {
    case "r":
      inputChoice = "rock";
      break;
    case "p":
      inputChoice = "paper";
      break;
    case "sc":
      inputChoice = "scissors";
      break;
    case "sp":
      inputChoice = "spock";
      break;
    case "l":
      inputChoice = "lizard";
      break;
  }
  return inputChoice;
}

function scoreKeeping(choice, compChoice, SCORE) {
  if (WIN_COMBOS[choice].includes(compChoice)) {
    SCORE.user += 1;
  } else if (WIN_COMBOS[compChoice].includes(choice)) {
    SCORE.computer += 1;
  } else {
    SCORE.computer += 0;
  }
}

function scoreDisplay(SCORE) {
  prompt(`User Score: ${SCORE.user}. Computer Score: ${SCORE.computer}.`);
}

prompt("Welcome to Rock, Paper, Scissors, Lizard, Spock!");
readline.question("To read the rules, press 'enter'.");

prompt(`Scissors cut paper\n
paper covers rock, \n
rock crushes lizard, \n
lizard poisons Spock, \n
Spock smashes scissors, \n
scissors decapitates lizard, \n
lizard eats paper, \n
paper disproves Spock, \n
pock vaporizes rock, \n
and rock crushes scissors.`);
readline.question(`Press 'enter' to continue.`);
console.clear();

while (true) {
  prompt(
    `Choose one: ${VALID_CHOICES.join(", ")}\n('r', 'p', 'sc', 'l', or 'sp')`
  );
  let choice = readline.question();
  choice = shorthandChoice(choice);

  while (!VALID_CHOICES.includes(choice)) {
    prompt(
      `Error, type:\n${VALID_CHOICES.join(
        ", "
      )} \nOR \n'r', 'p', 'sc', 'l', or 'sp'`
    );
    choice = readline.question();
    choice = shorthandChoice(choice);
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let compChoice = VALID_CHOICES[randomIndex];

  prompt(`You chose ${choice}, the computer chose ${compChoice}.`);

  determineWinner(choice, compChoice);

  scoreKeeping(choice, compChoice, SCORE);

  scoreDisplay(SCORE);

  goAgain = endGame(SCORE);

  if (goAgain === "n" || goAgain === "no") break;
}

grandWinner(SCORE);
