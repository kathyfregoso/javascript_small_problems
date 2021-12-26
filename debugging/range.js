// function range(start, end = -1) {
//   let range = [];

//   for (let element = start; element <= end; element++) {
//     range.push(element);
//   }

//   return range;
// }

// function range(end) {
//   return range(0, end);
// }

// this above code has two functions that are both the same name
// instead of create two functions, delete second range function
// we get a call stack error because JS doesn't recognize the second range function,
// so no end condition is specified in the for loop and the loop keeps executing in the first
// start function, resulting in call stack overload
// then include a new guard clause in the top of the function:
// using a condition, if end is equal to -1 (no end arg provided):
// reassign end the value of start
// reassign start w/ val of 0

function range(start, end = -1) {
  if (end === -1) {
    end = start;
    start = 0;
  }
  let range = [];

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

console.log(range(10, 20));
console.log(range(5));
