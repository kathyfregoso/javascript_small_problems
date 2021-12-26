// question 1 //

// input: string

// output: new string with the word "important" replaced with "urgent"

// reqs: Given string, return new string that replaces every "important" w "urgent"

// questions:

// examples:

// edge cases: period at the end of sentence that ends with 'important'

// let advice =
// "Few things in life are as important as house training your pet dinosaur."; =>
// "Few things in life are as urgent as house training your pet dinosaur."

// data structures: strings

// algo:
// replaces first occurrence
// - use replace string method to return a new string

// replaces all occurrences
// - convert string to an array
// - for loop to replace multiple instances
// - join array and return the new string

// answers:
let advice =
  "Few things in life are as important as house training your pet dinosaur.";

// //  replaces first occurrence
advice.replace("important", "urgent");

// // replaces all occurrences
function replaceAll(string) {
  let newString = string.split(" ");
  for (let i = 0; i < newString.length; i++) {
    if (newString[i] === "important") {
      newString[i] = "urgent";
    }
  }
  return newString.join(" ");
}

replaceAll("This is important to me, and all of this is important");
