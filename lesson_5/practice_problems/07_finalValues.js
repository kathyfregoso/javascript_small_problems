// what will the final values of a and b be?

let a = 2;
let b = [5, 8];
let arr = [a, b]; // assigns arr with a's value of 5, and b's value of 8, does not affect original a,b primitive values
// so arr = [2, [5, 8]]

arr[0] += 2; // modifies array arr, not a; arr = [4, [5, 8]]
arr[1][0] -= a; // arr = [4, [3, 8]]

// final value: [4, [3, 8]]
