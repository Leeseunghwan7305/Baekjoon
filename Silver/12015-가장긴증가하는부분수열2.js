const fs = require("fs");
const [n, ...arr] = fs
  .readFileSync("../text.txt")
  .toString()
  .trim()
  .split("\n");

const sequence = arr[0].split(" ").map((v) => +v);

sequence.sort((a, b) => a - b);

let result = new Set(sequence);

console.log([...result].length);
