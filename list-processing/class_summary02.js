/*
// UNDERSTANDING THE PROBLEM
- INPUT: object of nested objects (student data)
 - each property value represents a student
 - student individual data is sub-object prop value
- OUTPUT: object (class records summary)
 - properties:
  - student grades array of string values
  - exams array of object elements
   - each object element=> exam grade avg, min, max
   - exam avg rounded to 1 digit after decimal (ex 75.6)
- RULES: 
 - take student scores object, return class record summary obj
 - term grading:
  - 4 exams: 65%
   - fixed exam max score: 100 pts
   - average score from 4 exams (weighted for final grade)
  - several exercises: 35%
   - varied max scores (individual exercises)
   - total max pts: 100
   - max total pts never changes, # of exercises varies
 - letter grades:  93-100 A 85-92 B 77-84 C 69-76 D 60-68 E 0-59 F

// EXAMPLES/EDGE CASES: 
EXAMPLE 1:
max exercise scores: [20, 30, 50] (arr length varies)
max exam scores: [100, 100, 100, 100] (arr length constant)

compute student final score:
exercise scores: [20, 15, 40]
exam scores: [90, 80, 95, 71]

1. get avg exam score (90 + 80 + 95 + 71) / 4 = 84
2. get total exercise score: 20 + 15 + 40 = 75
3. apply weights to get final % grade:  84 * .65 + 75 * .35 = 80.85
4. round percent grade to nearest integer: 81
5. lookup letter grade: C
6. Combine percent and letter grade: "81 (C)"

// DATA STRUCTURE(S): 
- nested objects:
 - studentScores input object
 - output class summary object
- break each problem into functions
- main function puts together class record summary
- grade lookup table is object


// ALGORITHM:
1. get each student's final score - string w/ % grade and letter ex: "87 (B)"
  1) get avg exam score (90 + 80 + 95 + 71) / 4 = 84
    - iterate thru studentScores obj 
      - compute final score for each student by accessing student.scores.exams and student.scores.exercises arrays
    - student.scores.exams array:
      - reduce array to get sum of all exam scores
      - divide sum by 4
  2) get total exercise score: 20 + 15 + 40 = 75
    - student.scores.exercises array:
      - reduce array to get sum of all exercise scores
  3) apply weights to get final % grade: 84 * .65 + 75 * .35 = 80.85
    - multiply exam avg by .65 and multiply exercise avg and multiply by .35 
  4) round percent grade to nearest integer: 81
   - use Math.round
  5) lookup letter grade: C
   - use grades object as reference
   
  6) Combine percent and letter grade: "81 (C)"
   - concatenate percent score to grade score with space in between
   - return string

2. put all student scores (strings) into a list of elements (array)

3. in output object (class summary), create a property called 'studentScores'; give it value of student scores array

4. compute avg score for each exam 
 - starting w/ 1st exam, add up each students' score and then divide (/) by # of students
 - round each exam avg to 1 decimal place ie 87.1

5. get min (lowest) student score for each exam 

6. get max (highest) score for each exam

7. in output object (class summary), create a property called 'exams', give value of array of objects; each obj el represents 1 exam:
 - each exam obj element has 3 prop values: average, minimum, and maximum
 - store computed values for each exam in 4 consecutive elements 

8. once output obj created with above info, return class summary
*/

let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

function generateClassRecordSummary(studentScores) {
  return {
    studentGrades: getStudentGrades(studentScores), // array
    exams: getExamScores(studentScores), // array of objects
  };
}

function getExamScores(studentScores) {
  let studentExamScores = Object.entries(studentScores).map(
    (currStudent) => currStudent[1].scores.exams
  );
  let scoresPerExam = transpose(studentExamScores);
  console.log(scoresPerExam);
  return scoresPerExam.map((examScores) => {
    return {
      average: getExamAverage(examScores),
      minimum: Math.min(...examScores),
      maximum: Math.max(...examScores),
    };
  });
}

function getExamAverage(scores) {
  return scores.reduce((curr, acc) => curr + acc, 0) / scores.length;
}

// REVIEW!!!!
function transpose(array) {
  return array[0].map((_, colIdx) => {
    return array.map((row) => row[colIdx]);
  });
}

function getStudentGrades(studentScores) {
  let scoresArr = Object.entries(studentScores);
  let output = [];

  let studentExamScores = scoresArr.map((currStudent) => {
    let examAvg =
      currStudent[1].scores.exams.reduce((acc, curr) => acc + curr, 0) / 4;
    let examWeight = 0.65;
    return examAvg * examWeight;
  });

  let studentExerciseScores = scoresArr.map((currStudent) => {
    let currStudScore = currStudent[1].scores.exercises.reduce(
      (acc, curr) => acc + curr,
      0
    );
    let exerciseWeight = 0.35;
    return currStudScore * exerciseWeight;
  });

  studentExamScores.forEach((examPts, idx) => {
    let percentGrade = Math.round(examPts + studentExerciseScores[idx]);
    let letterGrade = getLetterGrade(percentGrade);
    output.push(`${percentGrade} (${letterGrade})`);
  });

  return output;
}

function getLetterGrade(percentGrade) {
  if (percentGrade >= 93 && percentGrade <= 100) return "A";
  if (percentGrade >= 85 && percentGrade <= 92) return "B";
  if (percentGrade >= 77 && percentGrade <= 84) return "C";
  if (percentGrade >= 69 && percentGrade <= 76) return "D";
  if (percentGrade >= 60 && percentGrade <= 68) return "E";
  if (percentGrade < 60) return "F";
}

console.log(generateClassRecordSummary(studentScores));

// returns:
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }
