let fs = require("fs");
let input = fs.readFileSync("../text.txt").toString().split("\r\n");
let number = Number(input[0]);
let score = 0;
console.log(number);
console.log(input.length);
for (let i = 1; i <= number; i++) {
  score = 0;
  let count = 0;
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] == "O") {
      count++;
      score += count;
    } else {
      count = 0;
    }
  }
  console.log(score);
}
