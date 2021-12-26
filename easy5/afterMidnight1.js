// INPUT: time in minute based format (integer) that is positive or negative

// OUTPUT: time of day in 24 hour format (hh:mm)

// REQUIREMENTS:
// - after midnight: positive number of minutes
// - before midnight: negative number of minutes
// - input is in minutes
// - output is 24 hours format (hh:mm)
// - works with any integer input
// - don't use Date class methods
// - ignore daylight savings and standard time

// EXAMPLE:
// timeInMin = -4231
// timeInDays = (timeInMin / minsPerHr) / hoursPerDay;
// timeInDays = (-4231 / 60) / 24 = -2.9382
// hoursInOneDay = (timeInDays - Math.floor(timeInDays)) * hoursPerDay
// hoursInOneDay = (-2.9382 - (-3)) * 24 = (0.061806) * 24 = 1.48333
// hours = Math.floor(hoursInOneDay)
// hours = Math.floor(1.48333) = 1
// minutes = Math.round((hoursInOneDay - hours) * minsPerHr)
// minutes = (1.48333 - 1) * 60 = 29
// hour in 24h format is 01:29

// DATA STRUCTURES:
// integers (whole numbers), strings

// ALGORITHMS:
// TIMEOFDAY function
// assign a variable minutes per hour = 60
// assign a variable hours per day = 24
// convert the input minutes into the equivalent number of days (timeInDays)
// calculate the hour of the day (out of 24 hours)
// floor the hour of the day down to the nearest integer
// subtract hours from hrsInOneDay then multiply that by 60 (minutes per hour)
// round that up to get the minutes
// return hours + ':' + minutes

// FORMATTING function
// convert input time to a string
// if integer has length < 2 and is less than 10:
//  - add a 0 to the front
// return the new string

function formatTime(time) {
  let newTime = String(time);

  if (newTime.length < 2 && newTime < 10) {
    newTime = newTime.padStart(2, "0");
  }
  return newTime;
}

function timeOfDay(inputMins) {
  let minsPerHr = 60;
  let hrsPerDay = 24;

  let timeInDays = inputMins / minsPerHr / hrsPerDay;
  let hrsInOneDay = (timeInDays - Math.floor(timeInDays)) * hrsPerDay;

  let hours = Math.floor(hrsInOneDay);
  let minutes = Math.round((hrsInOneDay - hours) * minsPerHr);

  console.log(`${formatTime(hours)}:${formatTime(minutes)}`);
  return `${formatTime(hours)}:${formatTime(minutes)}`;
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");
