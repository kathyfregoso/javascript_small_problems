// INPUT: array of object values (each object contains book title, author, and publication year)

// OUTPUT: sorted array object elements by the key-value of published year, from earliest to latest

// REQUIREMENTS:
// sort the array of object values (book, title, year) from earliest to latest publication years

// EXAMPLES/TEST CASES:
// output order:
// [
//  { title: "The Book of Kells", author: "Multiple Authors", published: "800" },
//  { title: "War and Peace", author: "Leo Tolstoy", published: "1869" },
//  { title: "Ulysses", author: "James Joyce", published: "1922" },
//  {
//   title: "The Great Gatsby",
//   author: "F. Scott Fitzgerald",
//   published: "1925",
//  },
//    {
//   title: "One Hundred Years of Solitude",
//   author: "Gabriel Garcia Marquez",
//   published: "1967",
//  },
// ]

// DATA STRUCTURES:
// arrays, objects, strings

// ALGORITHMS:
// - LOOP
// - loop through books
// - use the sort method and provide a comparison function that determines order of objects
// - body of method uses a.published - b.published
// - the a,b values are the published property in each array element
// - return a new sorted array

let books = [
  {
    title: "One Hundred Years of Solitude",
    author: "Gabriel Garcia Marquez",
    published: "1967",
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    published: "1925",
  },
  { title: "War and Peace", author: "Leo Tolstoy", published: "1869" },
  { title: "Ulysses", author: "James Joyce", published: "1922" },
  { title: "The Book of Kells", author: "Multiple Authors", published: "800" },
];

function sortBooks(array) {
  let newArr = [...array];

  newArr = newArr.sort((a, b) => {
    return a.published - b.published;
  });

  console.log(newArr);
  return newArr;
}

sortBooks(books);
