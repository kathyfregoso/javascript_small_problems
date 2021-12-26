// REQUIREMENTS:
// input: grocery list (2d array), el el contains a fruit and quantity
// output: 1-d array of fruits, each fruit appears a num of times equal to its quantity

// QUESTIONS:

// EXAMPLES/TEST CASES:

// DATA STRUCTURES:
// arrays, strings

// ALGORITHMS:
// declare variable with a new array
// loop through the input array of sub-arrays
// each loop, repeat the string fruit a num of times equal to its quantity
// push the string of repeated fruit to the new array
// return the array of repeated fruit strings

// my solutions
function buyFruit(arrOfFruits) {
  let fruits = [];
  let quantity = 0;

  for (let i = 0; i < arrOfFruits.length; i++) {
    quantity = arrOfFruits[i][1];
    while (quantity > 0) {
      fruits.push(arrOfFruits[i][0]);
      quantity -= 1;
    }
  }
  console.log(fruits);
  return fruits;
}

buyFruit([
  ["apple", 3],
  ["orange", 1],
  ["banana", 2],
]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
