const readline = require("readline-sync");

let loanCalcOn = true;

function prompt(message) {
  console.log(`>> ${message}`);
}

function invalidNumber(num) {
  return num.trimStart() === "" || Number.isNaN(Number(num));
}

prompt("Welcome to the Loan Calculator!");

while (loanCalcOn) {
  prompt("What is your loan amount?");
  let loanAmount = readline.question();

  while (invalidNumber(loanAmount)) {
    prompt("Invalid answer, type a number (no letters or special characters).");
    loanAmount = readline.question();
  }

  prompt("What is your interest rate?");
  let interest = readline.question();

  while (invalidNumber(interest)) {
    prompt("Invalid answer, type a number (no letters or special characters).");
    interest = readline.question();
  }

  prompt("What is your loan term in years?");
  let durationInYears = readline.question();

  while (invalidNumber(durationInYears)) {
    prompt("Invalid answer, type a number (no letters or special characters).");
    durationInYears = readline.question();
  }

  let durationInMonths = Number(durationInYears) * 12;
  let annualInterest = Number(interest) / 100;
  let monthlyInterest = annualInterest / 12;
  let monthlyCost =
    Number(loanAmount) *
    (monthlyInterest / (1 - Math.pow(1 + monthlyInterest, -durationInMonths)));
  let totalPayment = monthlyCost * durationInMonths;
  let totalInterest = totalPayment - loanAmount;

  prompt(`Monthly Cost: ${monthlyCost.toFixed(2)}`);
  prompt(`Total Payment: ${totalPayment.toFixed(2)}`);
  prompt(`Total Interest: ${totalInterest.toFixed(2)}`);

  prompt("Would you like to get another loan calculation? (y/n)");
  let goAgain = readline.question();

  if (!goAgain) {
    loanCalcOn = false;
  } else if (goAgain[0].toLowerCase() === "y") {
    loanCalcOn = true;
  } else if (goAgain[0].toLowerCase() !== "y") {
    loanCalcOn = false;
  }
  console.clear();
}
