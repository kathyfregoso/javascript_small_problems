// REQUIREMENTS:
// input: 2 integers (count/length, starting number of sequence )
// output:
// - array containing the same number of elements as the count argument
// - value of each element should be a multiple of the starting number

// count argument will always be an integer greater than or equal to 0
// starting num can be any integer
// if count is 0, the function should return an empty array

// QUESTIONS:

// EXAMPLES/TEST CASES:

// DATA STRUCTURES:
// arrays

// ALGORITHMS:
// assign array to a variable that contains only the starting number of sequence as an element
// start a loop that begins at 2
// the loop's iterator is incremented by 1 on every loop
// each loop, the starting number of the sequence is multiplied by the iterator
// the first loop multiplies the starting number of the sequence by 2
// the product of this is pushed to the output array
// the loop runs until it reaches count (inclusive)
// return the new sequence array

function sequence(count, start) {
  let sequence = [];

  for (let index = 1; index <= count; index++) {
    sequence.push(start * index);
  }

  return sequence;
}

sequence(5, 1); // [1, 2, 3, 4, 5]
sequence(4, -7); // [-7, -14, -21, -28]
sequence(3, 0); // [0, 0, 0]
sequence(0, 1000000); // []
