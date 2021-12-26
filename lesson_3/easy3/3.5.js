function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}

// solution 1:

// delete the 'if ... else' statement to simply return the expression inside the condition
// the expression by itself is either truthy or falsy

function isColorValid(color) {
  return color === "blue" || color === "green";
}

// solution 2:

// turn conditional into ternary operator with a condition and two expressions (truthy/falsy)

function isColorValid(color) {
  return color ? color === "blue" || color === "green" : -1;
}

console.log(isColorValid("yellow"));
