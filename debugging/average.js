function average(nums) {
  let sum = nums.reduce((total, num) => total + num);

  return sum / nums.length;
}

// the error lies w/in the median function
function median(nums) {
  // the problem is that sort doesn't sort numbers numerically, but rather turns them to strings
  // and sorts them by ascii code, so I rewrote this sort method invocation to include
  // arguments, then converted each digit back to a number so it sorts numerically
  nums.sort((a, b) => Number(a) - Number(b));

  let median;
  let length = nums.length;
  if (length % 2 === 0) {
    median = average([nums[length / 2 - 1], nums[length / 2]]);
  } else {
    median = nums[Math.floor(length / 2)];
  }

  return median;
}

// Tests

let quarter1ExamScores = [89, 72, 100, 93, 64, 97, 82, 87, 90, 94];
let quarter2ExamScores = [76, 91, 89, 90, 91, 67, 99, 82, 91, 87];
let quarter3ExamScores = [99, 91, 88, 72, 76, 64, 94, 79, 86, 88];
let quarter4ExamScores = [100, 94, 73, 88, 82, 91, 97, 99, 80, 84];

// should all log 'true':
// console.log(average(quarter1ExamScores) === 86.8);
// console.log(average(quarter2ExamScores) === 86.3);
// console.log(average(quarter3ExamScores) === 83.7);
// console.log(average(quarter4ExamScores) === 88.8);

console.log(median(quarter1ExamScores) === 89.5); // error fixed
// console.log(median(quarter2ExamScores) === 89.5);
// console.log(median(quarter3ExamScores) === 87);
console.log(median(quarter4ExamScores) === 89.5); // error fixed
