let input = require("fs").readFileSync("../text.txt").toString().split("\r\n");

const num = input[0] * 1;
const score = input[1].split(" ").map((item) => +item);

console.log(num);
console.log(score);

let max = Math.max(...score);
let newScore = [];

for (let i of score) {
  let newS = (i / max) * 100;
  newScore.push(newS);
}
console.log(newScore.reduce((pre, cur) => pre + cur) / newScore.length);
