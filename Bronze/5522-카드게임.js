let fs = require("fs");
let input = fs
  .readFileSync("../text.txt")
  .toString()
  .trim()
  .split("\r\n")
  .map((i) => +i);

console.log(input.reduce((pre, cur) => pre + cur, 0));
