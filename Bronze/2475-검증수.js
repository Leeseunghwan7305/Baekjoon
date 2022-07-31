let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((num) => Number(num) * Number(num))
  .reduce((pre, cur) => pre + cur, 0);

console.log(input % 10);
