/*
// UNDERSTANDING THE PROBLEM
- INPUT: arr of objects
- OUTPUT: array of book titles (strings)
 - value of books.title property as elements of array output

- RULES: transform input array of objects

// EXAMPLES/EDGE CASES: see below

// DATA STRUCTURE(S): 
array of objects input
array of strings output

// ALGORITHM:
1. transform input array of objects to grab the str title of each object repr a book
2. return transformed object
*/

function getBooksTitle(books) {
  return books.map((book) => book.title);
}

let books = [
  {
    title: "JavaScript and JQuery: Interactive Front-End Web Development",
    author: "Jon Ducket",
    edition: "1st",
  },
  {
    title: "Eloquent JavaScript: A Modern Introduction to Programming",
    author: "Haverbeke",
    edition: "2nd",
  },
  {
    title:
      "Learning Web Design: A Beginner's Guide to HTML, CSS, JavaScript, and Web Graphics",
    author: "Jennifer Niederst Robbins",
    edition: "4th",
  },
];

console.log(getBooksTitle(books));
// console output
// [
//   "JavaScript and JQuery: Interactive Front-End Web Development",
//   "Eloquent JavaScript: A Modern Introduction to Programming",
//   "Learning Web Design: A Beginner's Guide to HTML, CSS, JavaScript, and Web Graphics"
// ]
