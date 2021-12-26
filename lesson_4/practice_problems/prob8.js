// INPUT: array of names

// OUTPUT: object, where the names are keys and the values are the positions in the array

// REQUIREMENTS:

// QUESTIONS:

// DATA STRUCTURES:
// arrays
// objects

// ALGORITHMS:
// 1. assign an empty obj literal to a variable
// 2. loop through flintsones
// 3. assign flintstones elements to be keys in the obj literal variable
// 4. the value of each key is the corresp index value
// 5. return the new object

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
// should output { Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }

// my solution
function names(array) {
  let object = {};
  for (let i = 0; i < array.length; i++) {
    object[array[i]] = i;
  }
  return object;
}

// alternative solution
let flintstonesObj = {};

flintstones.forEach((name, index) => {
  flintstonesObj[name] = index;
});

flintstonesObj; // { Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }

names(flintstones);
