let fs = require("fs");
let input = fs
  .readFileSync("../text.txt")
  .toString()
  .split(" ")
  .map((el) => +el);

console.log(Math.ceil((input[2] - input[1]) / (input[0] - input[1])));
