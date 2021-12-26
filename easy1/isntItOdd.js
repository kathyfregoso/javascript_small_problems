function isOdd(num) {
  return Math.abs(num) % 2 !== 0; // Math.abs(num) converts argument number to a positive value, cause a negative number to the left of % returns negative results
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true