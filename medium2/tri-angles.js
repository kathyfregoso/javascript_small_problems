// REQUIREMENTS:
// input: three angles of triangle (numbers)
// output: one of four strings - represent triangle's classification:
// - 'right', 'acute', 'obtuse', or 'invalid'

// assume all angles have integer values, don't worry about floating point errors
// assume args are degrees

// QUESTIONS:

// EXAMPLES/TEST CASES:

// DATA STRUCTURES:

// ALGORITHMS:
// check if valid triangle:
// 1. sum of angles = 180 degrees
// 2. every angle > 0
// if not, return 'invalid'
// if valid check for classification:
// - right - one angle is 90 degrees
// - acute - all 3 angles < 90 degrees
// - obtuse - one angle > 90 degrees
// return classification string

function triangle(angle1, angle2, angle3) {
  if (
    angle1 + angle2 + angle3 === 180 &&
    angle1 > 0 &&
    angle2 > 0 &&
    angle3 > 0
  ) {
    return checkClassification(angle1, angle2, angle3);
  }
  console.log("invalid");
  return "invalid";
}

function checkClassification(angle1, angle2, angle3) {
  if (angle1 === 90 || angle2 === 90 || angle3 === 90) {
    console.log("right");
    return "right";
  } else if (angle1 < 90 && angle2 < 90 && angle3 < 90) {
    console.log("acute");
    return "acute";
  } else if (angle1 > 90 || angle2 > 90 || angle3 > 90) {
    console.log("obtuse");
    return "obtuse";
  }
}

triangle(60, 70, 50); // "acute"
triangle(30, 90, 60); // "right"
triangle(120, 50, 10); // "obtuse"
triangle(0, 90, 90); // "invalid"
triangle(50, 50, 50); // "invalid"
