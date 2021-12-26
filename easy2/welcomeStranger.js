// INPUTS:
// array contains 2 or more els that combine with adjoining spaces, produce a person's name
// object contains 2 keys - "title" and "occupation" w/ appropriate values

// OUTPUT:
// string greeting that uses person's full name, & mentions persion's title

// EXPLICIT REQ'S:
// the input array has 2+ elements that, combined with adjoining spaces, produce person's name

// IMPLICIT REQ'S/QUESTIONS:
// the values assigned to the keys in the input object
// are the array elements in a specific order?
// are the array elements always strings?

// EXAMPLES / TEST CASES:
// greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" }) => outputs:
// "Hello, John Q Doe! Nice to have a Master Plumber around."

// DATA STRUCTURES:
// array
// object
// string - concatentation, empty spaces

// ALGORITHM:
// join array elements with " " separator .join() => assign to variable name
// access object key values
// return string: `Hello, ${array => str name}! Nice to have a ${object.title} ${object.occupation} around.`

function greetings(array, object) {
  let name = array.join(" ");
  return `Hello, ${name}! Nice to have a ${object.title} ${object.occupation} around.`;
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
