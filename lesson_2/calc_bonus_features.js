const MESSAGES = require("./calculator_messages.json");
const readline = require("readline-sync");

let calcOn = true;
let language = "en";
const LANGUAGE_CHOICES = {
  1: "en",
  2: "es",
};

function prompt(message) {
  console.log(`>> ${message}`);
}

function invalidNumber(num) {
  return num.trimStart() === "" || Number.isNaN(Number(num));
}

function messages(message, lang = "en") {
  return MESSAGES[lang][message];
}

prompt(messages("welcome", language));

prompt(messages("name", language));
let username = readline.question();

prompt(messages("welcome2", language) + username + "!");

prompt(messages("language", language));
let userLangSelect = readline.question();

if (userLangSelect !== "1") {
  language = LANGUAGE_CHOICES[userLangSelect];
}

while (calcOn) {
  prompt(messages("firstNumber", language));
  let num1 = readline.question();

  while (invalidNumber(num1)) {
    prompt(messages("errorNumber", language));
    num1 = readline.question();
  }

  prompt(messages("secondNumber", language));
  let num2 = readline.question();

  while (invalidNumber(num2)) {
    prompt(messages("errorNumber", language));
    num2 = readline.question();
  }

  prompt(messages("operation", language));

  prompt(messages("operationChoices", language));

  let operation = readline.question();

  while (!["1", "2", "3", "4"].includes(operation)) {
    prompt(messages("errorOperation", language));
    operation = readline.question();
  }

  let output;
  switch (operation) {
    case "1":
      output = Number(num1) + Number(num2);
      break;
    case "2":
      output = Number(num1) - Number(num2);
      break;
    case "3":
      output = Number(num1) * Number(num2);
      break;
    case "4":
      output = Number(num1) / Number(num2);
      break;
  }

  prompt(messages("result", language) + output);

  prompt(messages("goAgain", language));
  let startOver = readline.question();

  if (startOver[0].toLowerCase() !== "y") {
    calcOn = false;
    prompt(messages("goodBye", language));
  }
  console.clear();
}
