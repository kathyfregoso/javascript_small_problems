const readline = require("readline-sync");
const CARDS = {
  2: 4,
  3: 4,
  4: 4,
  5: 4,
  6: 4,
  7: 4,
  8: 4,
  9: 4,
  10: 4,
  J: 4,
  Q: 4,
  K: 4,
  A: 4,
};
const HIT_STAY = ["hit", "h", "stay", "s"];

function prompt(message) {
  console.log(`>> ${message}`);
}

function initializeDeck(deck) {
  Object.keys(CARDS).forEach((key) => {
    for (let index = 0; index < CARDS[key]; index++) {
      deck.push(key);
    }
  });
  return shuffle(deck);
}

function shuffle(deck) {
  for (let index = deck.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1));
    [deck[index], deck[otherIndex]] = [deck[otherIndex], deck[index]]; //destructuring
  }
}

function deal(deck, cards) {
  cards.push(deck[deck.length - 1]);
  deck.pop();
}

function initialDeal(deck, playerCards, dealerCards) {
  for (let index = 0; index < 2; index++) {
    deal(deck, playerCards);
    deal(deck, dealerCards);
  }
}

function displayResults(playerCards, dealerCards) {
  console.log(`Dealer has a ${dealerCards[1]} and a mystery card. Total: ??`);
  console.log(
    `You have a ${playerCards[0]} and a ${playerCards[1]}. Total: ${total(
      playerCards
    )}`
  );
}

function total(cards) {
  let aces = [];
  let sum = 0;

  for (let idx = 0; idx < cards.length; idx++) {
    if (cards[idx] === "A") {
      aces.push(cards[idx]);
    } else if (cards[idx] === "J" || cards[idx] === "Q" || cards[idx] === "K") {
      sum += 10;
    } else {
      sum += Number(cards[idx]);
    }
  }

  for (let idx = 0; idx < aces.length; idx++) {
    if (sum > 10) {
      sum += 1;
    }
    sum += 11;
  }
  return sum;
}

function busted(cards) {
  return total(cards) > 21;
}

function compareCards(playerCards, dealerCards) {
  console.log(`Dealer had: ${dealerCards}`);
  console.log(`You had: ${playerCards}\n`);
  console.log(
    `Dealer total: ${total(dealerCards)}, Your total: ${total(playerCards)}`
  );
}

function hitOrStay() {
  let answer;

  while (true) {
    prompt(`hit or stay`);
    answer = readline.question();
    if (HIT_STAY.includes(answer)) break;
    prompt("invalid response.");
  }

  return answer;
}

function playerTurn(deck, playerCards, dealerCards, status) {
  while (true) {
    if (hitOrStay() === "stay") break;
    deal(deck, playerCards);
    console.clear();
    console.log(
      `Dealer has a ${dealerCards[1]} and an unknown card. \n Total: Unknown.\n`
    );
    console.log(`Your cards: ${playerCards} \n Total: ${total(playerCards)}\n`);
    if (busted(playerCards)) {
      status.player = "bust";
      break;
    }
  }
}

function dealerTurn(deck, dealerCards, status) {
  while (true) {
    if (total(dealerCards) >= 17 || busted(dealerCards)) break;
    deal(deck, dealerCards);
  }

  if (busted(dealerCards)) {
    console.log(`Dealer busted! Their total is: ${total(dealerCards)}`);
    status.dealer = "bust";
  }
}

function displayWinner(playerCards, dealerCards, status) {
  if (status.player === "bust") {
    prompt("You bust - dealer wins!\n");
  } else if (status.dealer === "bust") {
    prompt("Dealer bust - you win!\n");
  } else {
    let playerTotal = total(playerCards);
    let dealerTotal = total(dealerCards);

    if (playerTotal > dealerTotal) {
      prompt("You win!\n");
    } else {
      prompt("Dealer wins!\n");
    }
  }
}

function playAgain() {
  let answer;
  let acceptable = ["y", "n"];

  while (true) {
    prompt("Play again? (y or n)");
    answer = readline.question().toLowerCase();
    if (acceptable.includes(answer)) break;
    prompt("invalid response.");
  }

  return answer === "y";
}

console.clear();
prompt("Welcome to 21!");

while (true) {
  let deck = [];
  let dealerCards = [];
  let playerCards = [];
  let status = {
    player: "active",
    dealer: "active",
  };

  initializeDeck(deck);
  shuffle(deck);
  initialDeal(deck, playerCards, dealerCards);
  displayResults(playerCards, dealerCards);
  playerTurn(deck, playerCards, dealerCards, status);
  if (status.player !== "bust") {
    dealerTurn(deck, dealerCards, status);
  }
  console.clear();
  compareCards(playerCards, dealerCards);
  displayWinner(playerCards, dealerCards, status);
  if (!playAgain()) break;
  console.clear();
}
console.clear();
prompt("Goodbye!");
