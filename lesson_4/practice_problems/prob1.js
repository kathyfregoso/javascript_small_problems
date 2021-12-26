[1, 2, 3].filter((num) => "hi"); // [1, 2, 3]
// returns new array with all the elements from OG array

// the return val of this callback is always 'hi', which is truthy
// If the callback's return value is always truthy, then filter will select all of the elements.
