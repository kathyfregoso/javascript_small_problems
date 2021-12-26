[1, 2, 3].every((num) => {
  return (num = num * 2); // assignment expression evalues expression on right side of assignment and is what gets returned
});

// every tests whether all elements in the array pass the test implemented by the function
// the return value of the callback is a product (2, 4, 6)
// since the  every method only cares about the expression's truthiness,
// it returns the boolean value of 'true', since the cb's return value on each iteration is truthy
