// REQUIREMENTS:
// input: 3 sides of triangle, 3 args (numbers)

// output: string of triangle's classification:
// 'equilateral', 'isosceles', 'scalene', or 'invalid'

// QUESTIONS:

// EXAMPLES/TEST CASES:

// DATA STRUCTURES:
// numbers

// ALGORITHMS:
// check if input lengths make a valid triangle:
// 1. sum of lengths of 2 shortest sides must be > than length of longest side
// 2. every side must have length > 0
// if conditions not met, return 'invalid'

// else, check the type of triangle by computing:
// - equilateral: all 3 sides are equal length
// - isosceles: 2 sides are equal length, 3rd side different
// - scalene: all 3 sides are diff. lengths
// return string of triangle's classification

function triangle(side1, side2, side3) {
  let perimeter = side1 + side2 + side3;
  let longest = Math.max(side1, side2, side3);
  let shortest = Math.min(side1, side2, side3);
  let middle = perimeter - longest - shortest;

  if (checkIfValidTriangle(shortest, middle, longest)) {
    console.log(triangleClassification(side1, side2, side3));
    return triangleClassification(side1, side2, side3);
  } else {
    console.log("invalid");
    return "invalid";
  }
}

function checkIfValidTriangle(shortest, middle, longest) {
  return shortest > 0 && shortest + middle > longest;
}

function triangleClassification(side1, side2, side3) {
  if ((side1 === side2) === side3) {
    return "equilateral";
  } else if (side1 === side2 || side1 === side3 || side3 === side2) {
    return "isosceles";
  }
  return "scalene";
}

triangle(3, 3, 3); // "equilateral"
triangle(3, 3, 1.5); // "isosceles"
triangle(3, 4, 5); // "scalene"
triangle(0, 3, 3); // "invalid"
triangle(3, 1, 1); // "invalid"
