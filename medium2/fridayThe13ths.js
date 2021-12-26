// REQUIREMENTS:
// input: year (number)

// output: number of friday the 13ths in that year

// assume year > 1752 (uk adopts modern gregorian calendar)
// gregorian applies for future years

// DATA STRUCTURES:
// numbers, objects

// ALGORITHMS:
// save all months to array (0 - 11)
// declare empty array variable
// loop over all months of given yr
// - use Date.getDay() method, change arg every iteration:
// - `${month} 13, ${year}`
// - save output (day of week) of date method to an array
// - exit loop
// loop through days array to find the number of times 5 (friday) appears - SUB PROCESS
// return count

// another possible algo:
// - iterate over all months of given year
// - for each month, get day that falls on 13th
// - count the 13ths that fall on a friday
// - return the count

// my solution
function fridayThe13ths(year) {
  let fullYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [];

  for (let month = 0; month <= 11; month++) {
    let thirteen = new Date(`${fullYear[month]} 13, ${year}`);
    let day = thirteen.getDay();
    days.push(day);
  }
  console.log(countTheFridays(days));
  return countTheFridays(days);
}

function countTheFridays(days) {
  let count = 0;

  for (let idx = 0; idx < days.length; idx++) {
    if (days[idx] === 5) {
      count++;
    }
    continue;
  }
  return count;
}

// alternative solution
function fridayThe13ths(year) {
  let thirteenths = [];

  for (let month = 0; month < 12; month += 1) {
    // Date constructor builds an array of Date objects that fall on the 13th every month
    // months passed to Date constructor represented by 0 (Jan) to 11 (December)
    thirteenths.push(new Date(year, month, 13));
  }

  return thirteenths.reduce((count, day) => {
    // Date.prototype.getDay returns integers btw 0 (sun) and 6 (sat)
    return day.getDay() === 5 ? count + 1 : count;
  }, 0);
}

// 3rd solution
function fridayThe13ths(year) {
  let count = 0;
  for (month = 0; month <= 11; month++) {
    if (new Date(year, month, 13).getDay() === 5) {
      count++;
    }
  }
  return count;
}

fridayThe13ths(1986); // 1
fridayThe13ths(2015); // 3
fridayThe13ths(2017); // 2
