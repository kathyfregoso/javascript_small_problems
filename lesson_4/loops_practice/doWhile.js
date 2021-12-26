// code 1
let counter = 0;

while (counter > 0) {
  console.log("Woooot!");
  counter -= 1;
}

// code 2
let counter = 0;

do {
  console.log("Woooot!");
  counter -= 1;
} while (counter > 0);

// code 1's break condition will never be true, so the while loop never executes the code
// code 2 uses a do while loop, which always loops at least once before evaluating the break condition
