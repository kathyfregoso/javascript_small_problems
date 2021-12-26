let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object);

// the last line outputs { first: [1, 2] }
// numArray references the object value and mutates it with .push

// to modifty numArray but not the object, we have two options:
// 1. declare and initialize numArray with a reference to a copy of the original array:

let object = { first: [1] };
let numArray = object["first"].slice(); // makes a copy
numArray.push(2);

// 2. use Array.prototype.concat() to return a new array instead of modifying the original arr

let object = { first: [1] };
let numArray = object["first"].concat(); // returns a new array
numArray.push(2);
