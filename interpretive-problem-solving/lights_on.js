/*
// RULES:
- all lights are initially turned off
- first switch in the bank of switches is switch #1, there's no switch #0

IMPLICIT:

nth round: every switch that's a multiple of nth gets toggled
 - 1st round: all switches toggled cuz all integers are multiples of 1
 - 2nd round: multiples of 2 get toggled
 - 3rd round: multiples of 3, etc
num of repetitions = num of switches
 - ie for 10 switches there are 10 rounds

// input: the number of switches

// output: array of the lights that are turned on after toggling count times

// DATA STRUCTURES and ALGORITHMS:
- array to track the states of lights
 - 2 states: booleans true (on) and false (off)
- loop thru rounds 1 - count, each round:
 - if curr round is nth, toggle lights whose indices are multiples of nth
 - use map to return a new arr to represent final states of lights
- filter/map lights arr to return new arr containing indices of the lights that're on

*/

function lightsOn(count) {
  let toggles = [];
  toggles.length = count;
  toggles.fill(true);

  for (let round = 1; round <= count; round += 1) {
    toggles = toggles.map((light, idx) => {
      return (idx + 1) % round === 0 ? light : !light;
    });
  }

  let output = [];

  for (let idx = 0; idx < count; idx += 1) {
    if (toggles[idx]) {
      output.push(idx + 1);
    }
  }
  return output;
}

console.log(lightsOn(5)); // [1, 4]
// lightsOn(100); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
