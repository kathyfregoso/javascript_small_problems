// alternative pick a winner function

// function determineWinner(choice, compChoice) {
//   let resultLogic = [" ties with ", " beats ", " loses to "];
//   let resultWinner = [" tied with ", " beat the ", " lost to "];
//   let compOrUser = ["You", "the computer."];

//   let index1 = VALID_CHOICES.indexOf(choice);
//   let index2 = VALID_CHOICES.indexOf(compChoice);
//   let dif = index2 - index1;

//   if (dif < 0) {
//     dif += VALID_CHOICES.length;
//   }

//   while (dif > 2) {
//     dif -= 2;
//   }

//   prompt(choice + resultLogic[dif] + compChoice);
//   choice = compOrUser[0];
//   compChoice = compOrUser[1];
//   prompt(choice + resultWinner[dif] + compChoice);
// }
