let cities = [
  "Istanbul",
  "Los Angeles",
  "Tokyo",
  null,
  "Vienna",
  null,
  "London",
  "Beijing",
  null,
];

for (let i = 0; i < cities.length; i += 1) {
  if (!cities[i]) {
    continue;
  } else {
    console.log(cities[i].length);
  }
}
