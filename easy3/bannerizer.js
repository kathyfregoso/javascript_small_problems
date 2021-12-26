// INPUT:
// string of text

// OUTPUT:
// log string of text within box

// REQUIREMENTS:
// write a function that takes a short line of text
// write input to the console log within a box
// assume that the output will always fit in your browser window
// empty output box is 4 chars wide, 5 chars heights

// QUESTIONS:
// is the string output always one line?
// no newlines?
// is the height always 5 characters? (height is constant?)

// EXAMPLES/TEST CASES:
// logInBox('To boldly go where no one has gone before.');
// outputs:
// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+

// logInBox('');
// outputs:
// +--+
// |  |
// |  |
// |  |
// +--+

// edge cases:
// input can be empty string => ""

// DATA STRUCTURES:
// string of text
// object? to contain box strings

// ALGORITHMS:
// find the length of the string input
// add one white space to start and end of string of text
// - this centers the text
// new length is string.length + 2 (white spaces)
// number of '-' chars is equal to length of string text with white spaces (not incl. '+' chars)

function logInBox(text) {
  let horizontalLine = "+".padEnd(text.length + 3, "-") + "+";
  let emptyLine = "|".padEnd(text.length + 3, " ") + "|";

  console.log(horizontalLine);
  console.log(emptyLine);
  console.log(`| ${text} |`);
  console.log(emptyLine);
  console.log(horizontalLine);
}

logInBox("To boldly go where no one has gone before.");
logInBox("");

// alternative

function logInBox(text) {
  let length = text.length;
  let horizontalLine = `+-${"-".repeat(length)}-+`;
  let emptyLine = `| ${" ".repeat(length)} |`;

  console.log(horizontalLine);
  console.log(emptyLine);
  console.log(`| ${text} |`);
  console.log(emptyLine);
  console.log(horizontalLine);
}

// further exploration:
// 1. add second argument that truncates message that doesn't fit inside that max width arg
//  - if no second arg, assume no max
// 2. word wrap messages that are too long to fit in box, so they are multiline w/in the box
