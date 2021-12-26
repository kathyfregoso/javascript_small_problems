// REQUIREMENTS:
// input - an object with 5 object properties: grape, carrot, apple, apricot
// output - an array containing:
// - colors of the fruits
// - sizes of the vegetables
// - sizes should be uppercase
// - colors should be capitalized

// QUESTIONS:
// Does the output order of array elements matter?

// EXAMPLES/TEST CASES:
//
// {
//   grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
//   carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
//   apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
//   apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
//   marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
// }
// =>
// [["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]

// DATA STRUCTURES:
// objects, arrays, strings

// ALGORITHMS:
// - turn object into an array of values
// LOOP
// - loop through the array of object values:
//  - if the type is fruit, return the array of colors, w/ first letter capitalized
//  - if the type is vegetable, return the size, w/ letters uppercased
// - output the new array

let obj = {
  grape: { type: "fruit", colors: ["red", "green"], size: "small" },
  carrot: { type: "vegetable", colors: ["orange"], size: "medium" },
  apple: { type: "fruit", colors: ["red", "green"], size: "medium" },
  apricot: { type: "fruit", colors: ["orange"], size: "medium" },
  marrow: { type: "vegetable", colors: ["green"], size: "large" },
};

// my solution
let fruitsVeggies = Object.values(obj);
let output = [];

fruitsVeggies.forEach((food) => {
  if (food.type === "fruit") {
    let colors = food.colors;
    colors = colors.map(
      (color) => color.slice(0, 1).toUpperCase() + color.slice(1)
    );
    output.push(colors);
  } else if (food.type === "vegetable") {
    output.push(food.size.toUpperCase());
  }
});
console.log(output);

// alternative solution - map called on an array of the obj's values
let capitalize = (word) => word[0].toUpperCase() + word.slice(1);

Object.values(obj).map((attributes) => {
  if (attributes["type"] === "fruit") {
    return attributes["colors"].map((char) => capitalize(char));
  } else {
    return attributes["size"].toUpperCase();
  }
});
