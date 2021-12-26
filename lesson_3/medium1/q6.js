let nanArray = [NaN];

console.log(nanArray[0] === NaN); // outputs false

// NaN is a numeric result that indicates an error occurred
// NaN is the only value in JS that is not equal to itself
// to determine if a value is NaN, you can't use comparison operators (they result in false)

// BONUS:
// To reliably test that a value is NaN, use either:

let value = NaN;
Number.isNan(value); // true
// OR

Object.is(value, NaN); // true
