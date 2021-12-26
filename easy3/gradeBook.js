// prettier-ignore

// INPUT:
// three grade scores (numbers)

// OUTPUT:
// average letter grade (string)

// REQUIREMENTS:
// determines the mean (average) of the three scores passed to it
// Numerical score letter grade list:

// 90 <= score <= 100: 'A'
// 80 <= score < 90: 'B'
// 70 <= score < 80: 'C'
// 60 <= score < 70: 'D'
// 0 <= score < 60: 'F'

// QUESTIONS:

// EXAMPLES/TEST CASES:

// DATA STRUCTURES:
// numbers
// strings

// ALGORITHMS:
// calculate average: s1 + s2 + s3 / 2
// save average in variable
// determine grade output based on average score
// - switch statement

function getGrade(score1, score2, score3) {
  let average = (score1 + score2 + score3) / 3;
  let grade;
  switch (true) {
    case (average >= 90 && average <= 100):
      grade = "A";
      break;
    case (average >= 80 && average < 90):
      grade = "B";
      break;
    case (average >= 70 && average < 80):
      grade = "C";
      break;
    case (average >= 60 && average < 70):
      grade = "D";
      break;
    case (average < 60 && average >= 0):
      grade = "F";
      break;
    default:
      console.log("Not a valid input, try again.");
  }
  console.log(grade);
  return grade;
}

getGrade(70, 75, 90);
