// Create a function that returns which chapter is nearest to the page you're on.
//If two chapters are equidistant, return the chapter with the higher page number.
//All page numbers in the object will be valid integers.
//Return the higher page number if two pages are equidistant.

/*
// UNDERSTANDING THE PROBLEM
- INPUT:
 - object 
  - chapter numbers (keys)
  - chapter pages (number values)
 - number/valid integer (page number)
- OUTPUT: chapter title (key name)
 - chapter closest in number to the page I'm on
 - if 2 chapters are equal in distance from current page (+/-), return the chapter with higher page number

- RULES: 
 - no negative chapter numbers
 - property values are always valid integers 
 - 2nd arg can be a str

// EXAMPLES/EDGE CASES: 
example 1: equidistance in chapters
book chapters = {"Chapter 1a" : 1, "Chapter 1b" : 5} 
page number = 3
output: "Chapter 1b"
3 - 1 = 2
5 - 3 = 2 
Chapter 1b > chapter 1a

example 2 
book chapters = {"Chapter 1": 1, "Chapter 2": 15, "Chapter 3": 37}
page number = 10
output: "Chapter 2"
15 - 10 = 5 (chapter 2)
37 - 10 = 27 X
|1 - 10| = 9 X

example 3
book chapters = {"New Beginnings" : 1, "Strange Developments" : 62, "The End?" : 194, "The True Ending" : 460}
page number = 200
output: "The End?
200 - 194 = 6 (smallest difference)
200-1=199, |62-200|=138, 460-200=260

// DATA STRUCTURE(S): 
object: accessing property values and key strings
 - iteration (array? is it easier)
numbers: key values for calculation
strings: output value

// ALGORITHM:
1. make sure 2nd arg (page number) is an integer
2. iterate thru object (array?) and get the absolute difference btw your page number and the current chapter 
 - for/in loop
3. save the chapter title (key name) for the smallest difference 
4. if two chapters have the same distance from current page, return chapter with highest page number
 - use helper function 
*/

function nearestChapter(chaptersObj, pageNumber) {
  let pageNumCopy = Number(pageNumber);
  let arrChapters = Object.entries(chaptersObj);
  let output = arrChapters[0][0];
  let lowestDifference = Math.abs(arrChapters[0][1] - pageNumber);

  for (let idx = 1; idx < arrChapters.length; idx += 1) {
    let currChapter = arrChapters[idx][0];
    let currChapPg = arrChapters[idx][1];
    let currDifference = Math.abs(currChapPg - pageNumCopy);

    if (currDifference < lowestDifference) {
      lowestDifference = currDifference;
      output = currChapter;
    }

    if (currDifference === lowestDifference) {
      let chapter1 = output;
      let chapter2 = currChapter;
      output =
        chaptersObj[chapter1] > chaptersObj[chapter2] ? chapter1 : chapter2;
    }
  }
  return output;
}

console.log(nearestChapter({ "Chapter 1a": 1, "Chapter 1b": 5 }, 3)); // "Chapter 1b"
console.log(
  nearestChapter(
    {
      "New Beginnings": 1,
      "Strange Developments": 62,
      "The End?": 194,
      "The True Ending": 460,
    },
    200
  )
); // "The End?"

console.log(
  nearestChapter({ "Chapter 1": 1, "Chapter 2": 15, "Chapter 3": 37 }, 10)
); // "Chapter 2"
console.log(
  nearestChapter({ "Chapter 1a": 1, "Chapter 1b": 5, "Chapter 1c": 50 }, 17)
); // "Chapter 1b"
console.log(
  nearestChapter({ "Chapter 1": 1, "Chapter 2": 53, "Chapter 3": 74 }, 62)
); // "Chapter 2"
console.log(
  nearestChapter({ "Chapter 1": 1, "Chapter 2": 53, "Chapter 3": 74 }, "62")
); // "Chapter 2"
