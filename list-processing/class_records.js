/*
// UNDERSTANDING THE PROBLEM
- INPUT: object with student data
- OUTPUT: object representing class record summary
 - studentGrades property is array of student grades (percent and letter grade)
 - exams property is array of exam summary objects

- RULES:
 - exams: 
  - 4 total (100 points max)
  - 65% of final grade (weight)
  
 - exercises:
  - 100 points max (variable total number of exercises)
  - 35% of final grade

  93 - 100 A
  85 - 92 B
  77 - 84 C
  69 - 76 D
  60 - 68 E
  0 - 59 F

// EXAMPLES/EDGE CASES:
determine student's final grade:
exercise scores: [20, 15, 40] (max scores: [20, 30, 50])
exam scores: [90, 80, 95, 71] (max scores: [100, 100, 100, 100])

1. Compute *average exam score*: `(90 + 80 + 95 + 71) / 4 = 84
2. Compute *total exercise score*: `20 + 15 + 40 = 75
3. *Apply weights* to get *final percent grade*: `84 * .65 + 75 * .35 = 80.85`
4. *Round the percent grade* to the nearest integer: `81`
5. Lookup letter grade: `C`
6. Combine percent grade and letter grade: `"81 (C)"`

// DATA STRUCTURE(S):
objects, arrays, numbers (computation)

// ALGORITHM:
- declare variable and assign empty object as value (class record summary output)

- iterate through input object
  - compute each student's final grade
  - save final grade to an array (studentGrades property in class record summary)

- get four exam averages, minimum (lowest) and maximum (highest) grades
 - 

*/

let studentScores = {
  student1: {
    // '87 (B)' grade
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    // '73 (D)' grade
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    // '84 (C)' grade
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    // '86 (B)' grade
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    // '56 (F)' grade
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

function generateClassRecordSummary(scores) {
  // array of score objects, with exam and exercise scores
  let scoreData = Object.keys(scores).map((student) => scores[student].scores);

  // transform scoreData objects into array of arrays with exam scores
  let examData = scoreData.map((score) => score.exams);

  return {
    studentGrades: scoreData.map((scoreObj) => getStudentScore(scoreObj)),
    exams: getExamSummary(examData),
  };
}

function getStudentScore(scoreObj) {
  let examAverage = scoreObj.exams.reduce((acc, curr) => acc + curr, 0) / 4;
  let totalExerciseScore = scoreObj.exercises.reduce(
    (acc, curr) => acc + curr,
    0
  );
  let percentGrade = Math.round(examAverage * 0.65 + totalExerciseScore * 0.35);

  return getGrade(percentGrade);
}

function getGrade(percentGrade) {
  let getGrade;
  switch (true) {
    case percentGrade >= 93 && percentGrade <= 100:
      getGrade = String(percentGrade) + " (A)";
      break;
    case percentGrade >= 85 && percentGrade <= 92:
      getGrade = String(percentGrade) + " (B)";
      break;
    case percentGrade >= 77 && percentGrade <= 84:
      getGrade = String(percentGrade) + " (C)";
      break;
    case percentGrade >= 69 && percentGrade <= 76:
      getGrade = String(percentGrade) + " (D)";
      break;
    case percentGrade >= 60 && percentGrade <= 68:
      getGrade = String(percentGrade) + " (E)";
      break;
    case percentGrade <= 59:
      getGrade = String(percentGrade) + " (F)";
      break;
    default:
      console.log("Error");
  }
  return getGrade;
}

function getExamSummary(examData) {
  let examScores = transpose(examData);

  return examScores.map((examScores) => {
    return {
      average: Number(getExamAvg(examScores)),
      minimum: getExamMin(examScores),
      maximum: getExamMax(examScores),
    };
  });
}

function transpose(array) {
  return array[0].map((column, columnIdx) => {
    return array.map((row) => row[columnIdx]);
  });
}

function getExamAvg(scores) {
  return (
    scores.reduce((total, score) => total + score) / scores.length
  ).toFixed(1);
}

function getExamMin(scores) {
  return scores.reduce((min, score) => (min <= score ? min : score));
}

function getExamMax(scores) {
  return scores.reduce((max, score) => (max >= score ? max : score));
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
