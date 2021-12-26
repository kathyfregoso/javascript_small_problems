// REQUIREMENTS:
// input: 2 arguments
// -  id of the inventory item (number)
// - transactions: an array of objects with three properties: id, movement, quantity

// output: filtered array of objects with transactions for specified intentory item id

// QUESTIONS:

// EXAMPLES/TEST CASES:

// DATA STRUCTURES:
// arrays, objects, numbers, strings

// ALGORITHMS:
// declare variable with a value of an empty array
// loop through the input transactions array of objects
// filter for obj els that contain the specified id num provided in the first function argument
// return filtered array

function transactionsFor(inventoryItem, transactions) {
  let filterTransactions = transactions.filter(
    (transaction) => transaction.id === inventoryItem
  );
  console.log(filterTransactions);
  return filterTransactions;
}

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

transactionsFor(101, transactions);
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]
