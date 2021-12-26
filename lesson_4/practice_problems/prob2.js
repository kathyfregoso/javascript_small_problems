[1, 2, 3].map((num) => {
  num * num;
});
// returns [undefined, undefined, undefined]

// returns new array with undefined values
// each element in the OG array is replaced by what the cb returns for that element
// since the callback is missing an explicit return value within curly braces,
// the callback will always return 'undefined' on each iteration
// map doesn't care about truthiness, and takes this return value as the transformation criterion.
