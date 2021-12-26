/*
// UNDERSTANDING THE PROBLEM
- INPUT: number (N)
- OUTPUT: array of subarrays
 - (N*N)

- RULES: create multiplication table of size given in argument
- implicit:
 - length of all subarrays is equal (N*N / N ex 2*2 / 2 = 2)
 - length of all subarrays combined is N

// EXAMPLES/EDGE CASES: 
n = 1
[[1]] l = 1

n = 2
1 2
2 4
[[1,2],[2,4]] l = 4

N = 3
1 2 3
2 4 6
3 6 9
output:  [[1,2,3],[2,4,6],[3,6,9]]

N = 4
1 2 3 4
2 4 6 8
3 6 9 12
4 8 12 16
[[1,2,3,4], [2,4,6,8], [3,6,9,12], [4,8,12,16]]

// DATA STRUCTURE(S): 
arrays of arrays
calculation with integers

// ALGORITHM:
1. generate row of multiples 
 - each row length === N (size)
 - number of rows === N
2. 
*/

multiplicationTable = function (size) {
  let table = [];
  let outputTable = [];

  for (let number = 1; number <= size; number += 1) {
    let largest = number * size;

    for (let multiple = number; multiple <= largest; multiple += number) {
      table.push(multiple);
    }
  }

  for (let idx = 0; idx < table.length; idx += size) {
    let row = table.slice(idx, idx + size);
    outputTable.push(row);
  }
  return outputTable;
};

console.log(multiplicationTable(1)); // [[1]]
console.log(multiplicationTable(2)); // [[1,2],[2,4]]
console.log(multiplicationTable(3)); // [[1,2,3],[2,4,6],[3,6,9]]
console.log(multiplicationTable(4)); // [[1,2,3,4], [2,4,6,8], [3,6,9,12], [4,8,12,16]]
