let arr = [1, 2, 3, 4, 5];
arr.fill(1, 1, 5); // mutates array to [ 1, 1, 1, 1, 1 ]

// changes all elements from an array to a static value, from a start index to end index
// in this ex, fill all elements with 1 from position 1 until position 5
// it is a destructive method, that is, it mutates the array
// you can see the mutation by logging arr on line 3, or running the code in the console
