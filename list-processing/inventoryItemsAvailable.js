// REQUIREMENTS:
// input: inventoryItem (number) and a transactions array of objects

// output: true or false (whether or not inventory item is available)
// - sum of the quantity values for spec. item is > 0

// movement property val of 'out' decreases the item's quantity
// reuse transactionsFor function

// QUESTIONS:

// EXAMPLES/TEST CASES:
// inventory item 101 = > 5 + 12 - 18 = - 1 => false
// inventory item 103 => -20 - 15 = -35 => false
// inventory item 105 => 10 + 25 + 22 = 57 => true

// DATA STRUCTURES:
// arrays, objects, numbers, strings

// ALGORITHMS:
// assign filtered list of spec. item transactions to a variable
// declare total variable valued at 0
// loop through the filtered list of transactions
// each loop, if prop. of movement is 'in', add to total
// if prop of movement is 'out', subtract quantity num from total
// exit loop
// if the total is > 0, return true
// if total is <= 0, return false

let transactions = [
  { id: 101, movement: "in", quantity: 5 },
  { id: 105, movement: "in", quantity: 10 },
  { id: 102, movement: "out", quantity: 17 },
  { id: 101, movement: "in", quantity: 12 },
  { id: 103, movement: "out", quantity: 20 },
  { id: 102, movement: "out", quantity: 15 },
  { id: 105, movement: "in", quantity: 25 },
  { id: 101, movement: "out", quantity: 18 },
  { id: 102, movement: "in", quantity: 22 },
  { id: 103, movement: "out", quantity: 15 },
];

function isItemAvailable(inventoryItem, transactions) {
  let transact = transactionsFor(inventoryItem, transactions);

  let checkAvailable = transact.reduce((total, transaction) => {
    if (transaction.movement === "in") {
      total += transaction.quantity;
    }
    if (transaction.movement === "out") {
      total -= transaction.quantity;
    }
    return total;
  }, 0);

  console.log(checkAvailable > 0);
  return checkAvailable > 0;
}

isItemAvailable(101, transactions); // false
isItemAvailable(103, transactions); // false
isItemAvailable(105, transactions); // true

function transactionsFor(inventoryItem, transactions) {
  let filterTransactions = transactions.filter(
    (transaction) => transaction.id === inventoryItem
  );

  return filterTransactions;
}

transactionsFor(101, transactions);
