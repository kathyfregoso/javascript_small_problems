// INPUT: array with 4 elements

// OUTPUT: empty array

// REQUIREMENTS:
// write 3 different ways to remove all of the elements from an array

// QUESTIONS:
// does this method permanently mutate the input array?

// EXAMPLES/TEST CASES:

// DATA STRUCTURES:
// arrays

// ALGORITHMS:
// splice (mutable)
// change array length to 0 (mutable)
// while loop

let numbers = [1, 2, 3, 4];

// method 1

numbers.splice(0, numbers.length);

// method 2

numbers.length = 0;

// method 3

while (numbers.length > 0) {
  numbers.pop();
}

// method 4 (BONUS) - non-mutable

numbers = []; // variable references new empty array

console.log(numbers);
