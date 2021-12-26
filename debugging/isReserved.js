const RESERVED_KEYWORDS = [
  "break",
  "case",
  "catch",
  "class",
  "const",
  "continue",
  "debugger",
  "default",
  "delete",
  "do",
  "else",
  "enum",
  "export",
  "extends",
  "finally",
  "for",
  "function",
  "if",
  "implements",
  "import",
  "in",
  "instanceof",
  "interface",
  "let",
  "new",
  "package",
  "private",
  "protected",
  "public",
  "return",
  "static",
  "super",
  "switch",
  "this",
  "throw",
  "try",
  "typeof",
  "var",
  "void",
  "while",
  "with",
  "yield",
];

// this code does not work because it attempts to use forEach to return a boolean, but
// foreach always returns undefined (it doesn't use the cb's return value), it's only used for
// iteration:

// function isReserved(name) {
//   RESERVED_KEYWORDS.forEach((reserved) => {
//     if (name === reserved) {
//       return true;
//     }
//   });

//   return false;
// }

// it is better to use the some method, which tests whether at least one element in RESERVED_KEYWORDS
// matches the name argument. We can use implicit return, as some always returns a boolean:

function isReserved(name) {
  return RESERVED_KEYWORDS.some((reserved) => name === reserved);
}

console.log(isReserved("monkey")); // false
console.log(isReserved("patch")); // false
console.log(isReserved("switch")); // should be: true
