let input = require("fs")
  .readFileSync("../text.txt")
  .toString()
  .trim()
  .split("\r\n");
input = input.map((i) => i.split(" ").map((v) => +v));
let sum = 0;
let result = "";
for (let i = 2; i < input.length; i++) {
  for (let j = input[i][0]; j <= input[i][1]; j++) {
    sum += input[1][j - 1];
  }
  result += `${sum}\n`;
  sum = 0;
}
console.log(result.trim());
