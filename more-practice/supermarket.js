/*
// UNDERSTANDING THE PROBLEM
- INPUT:
1. array of positive integers (aka the customer queue)
 - integer --> customer
   - value --> time needed to check out (minutes)
2. n (positive integer)
 - number of checkout tills 

- OUTPUT: integer (total time required in mins)

- RULES: 
 - TASK: calculate total time needed for all customers to check out
 - NOTES:
  - only 1 queue (line) serving many tills
  - order of the queue NEVER changes
  - 1st person in line (1st element in arr) goes to till
   as soon as it becomes free
  - assume all test inputs are valid

- IMPLICIT RULES/QUESTIONS:
 - 2nd argument will always be greater than 0 in value (1+)
 - if 2nd arg input is 1, sum all integers in arr and return the sum
 - if 2nd arg input is 2+:
  - assign each element/customer IN ORDER all available tills

// EXAMPLES/EDGE CASES: 
inputs: [5, 3, 4], 1
output: 12 
5 + 3 + 4 = 12 mins for 3 customers and 1 till

inputs: [10, 2, 3, 3], 2
output: 10

scenario:
 1. customer at idx 0 goes to till 1
 2. next customer at idx 1 goes to till 2
 3. if customer at till 2 takes less time (is less than) value in till 1, the next customer (idx 2) is added to that till sum
  - customer at idx 1 takes 2 mins, which is less than 10 mins for idx 0 customer, so then next customer (idx 2)
   goes to till 2 and takes 3 minutes
 4. the new sum of time in till 2 is 5 minutes, which is still less than 10 minutes at till 1, so next customer (idx 3) is added
  to till 2 sum
 5. if there are no more customers (elements in teh array), then the total time taken is given to the till with greatest time taken
  by customer(s), which is 10 minutes at till 1
till 1: 2 + 3 + 3 = 8 mins, 3 customers
till 2: 10 mins, 1 customer
// because here n=2 (2 tills) and the 2nd, 3rd, and 4th ppl in queue finish 
// before the 1st person has finished.

inputs: [2, 3, 10], 2
output: 12

// DATA STRUCTURE(S): 
- array 
 - loop through array
 - sum array integer elements
- integers
 - used for summation (calculation)
 - elements of an array
 - represent time 

- how to represent the number of open tills? perhaps an array

// ALGORITHM:
1. if n = 1, reduce (sum) all numbers in array and return the sum
2. if n >= 2, make an array of that length (fill with 0 values)
 - each element represents an open till
 - each successive customer in queue (input arr) will be assign to an open till
3. iterate thru input array if step 2 condition is met:
 - add the first integer value to the first till (index) of the tills array
 - then push the next element (integer value) to the 2nd empty till (element) in the array
 - do so until the number of tills matches the number of customers in line
4. during iteration, once you reach the element whose place in array (# of customer in line) > the number of tills:
 - find the lowest value in the till array
 - then add the value of the next element (customer) to that sum
 - do this for every number afterwards
5. once you reach the end of the array, exit iteration
6. return the value of the highest number in the tills array!
*/

function queueTime(customerQueue, tills) {
  if (tills === 1) return getTotalTime(customerQueue);
  let tillsArr = Array(tills).fill(0);

  customerQueue.forEach((customer, idx) => {
    if (idx > tillsArr.length - 1) {
      let leastTime = Math.min(...tillsArr);
      let tillNumber = tillsArr.indexOf(leastTime);
      tillsArr[tillNumber] += customer;
    } else {
      tillsArr[idx] += customer;
    }
  });

  let longestTime = Math.max(...tillsArr);

  return longestTime;
}

function getTotalTime(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

console.log(queueTime([5, 3, 4], 1));
// should return 12
// because when there is 1 till, the total time is just the sum of the times

console.log(queueTime([10, 2, 3, 3], 2));
// // should return 10
// // because here n=2 and the 2nd, 3rd, and 4th people in the
// // queue finish before the 1st person has finished.

console.log(queueTime([2, 3, 10], 2));
// // // // should return 12
// // // // till array = [2, 3] -> [12, 3]

console.log(queueTime([10, 2, 3, 3, 3], 3));
// // // // returns 11
// // // // till array = [10, 2, 3] -> [10, 5, 3] -> [10, 5, 6]

console.log(queueTime([10, 2, 3, 3, 3], 4));
// // // returns 10

console.log(queueTime([20, 25, 12, 8, 7, 6, 5, 4], 5)); // 25

console.log(queueTime([], 1)); // 0;
console.log(queueTime([2, 2, 3, 3, 4, 4], 2)); // 9
console.log(queueTime([1, 2, 3, 4, 5], 100)); // 5

console.log(queueTime([23, 34, 2, 49, 13, 14, 29, 5, 17, 46, 10, 28, 49], 3)); // 124
