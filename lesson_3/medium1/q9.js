function rps(fist1, fist2) {
  if (fist1 === "rock") {
    return fist2 === "paper" ? "paper" : "rock"; // paper > rock
  } else if (fist1 === "paper") {
    return fist2 === "scissors" ? "scissors" : "paper"; // scissors > paper
  } else {
    return fist2 === "rock" ? "rock" : "scissors"; // fist1 > fist2
  }
}

console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));
// outputs "paper"

// evaluate inner layer first
// then evaluate each outer layer in order

// top level: rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock")
// simplified: rps("paper") => "paper" (FINAL OUTPUT)

// 2nd level: (rps(rps("rock", "paper"), rps("rock", "scissors")), "rock")
// simplied: ((rps("paper"), rps("rock")), "rock") => (("paper"), "rock") => ("paper")

// 3rd level: (rps("rock", "paper"), rps("rock", "scissors"))
// 1. fist1 results in "paper"
// 2. fist2 results in "rock"
