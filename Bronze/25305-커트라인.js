let input = require("fs")
  .readFileSync("../text.txt")
  .toString()
  .trim()
  .split("\r\n")
  .map((i) => i.split(" ").map((i) => +i));

let cut = input[0][1];

console.log(input[1].sort((a, b) => b - a)[cut - 1]);
