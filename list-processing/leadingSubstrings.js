// REQUIREMENTS:
// input: string
// output: list of all substrings that start from the beginning, from shortest to longest

// QUESTIONS:

// EXAMPLES/TEST CASES:
// 'abc' => ["a", "ab", "abc"]
// 'a' => ['a']
// 'xyzzy' => ["x", "xy", "xyz", "xyzz", "xyzzy"]

// DATA STRUCTURES:
// arrays, strings

// ALGORITHMS:
// initialize variable with the value of an empty array
// convert the string to a collection of individual characters
// iterate through the collection
// - on first iteration: push the first element in empty array
// - 2nd iteration: push first + second element
// - 3rd iteration: push first + third element
// - and so on... until the end of the chars array
// - exit the loop
// - make sure the new array is sorted
// - return the new array

function leadingSubstrings(str) {
  let chars = str.split("");
  let substrings = [];
  let curr = "";

  for (let i = 0; i < chars.length; i++) {
    curr += chars[i];
    substrings.push(curr);
  }
  console.log(substrings);
}

// further exploration w/ map
function leadingSubstrings(str) {
  let chars = str.split("");
  let string = "";

  chars = chars.map((el) => {
    string += el;
    return string;
  });
  console.log(chars);
}

leadingSubstrings("abc"); // ["a", "ab", "abc"]
leadingSubstrings("a"); // ["a"]
leadingSubstrings("xyzzy"); // ["x", "xy", "xyz", "xyzz", "xyzzy"]
