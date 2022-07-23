let fs = require("fs");
let input = fs.readFileSync("../text.txt").toString().split("\r\n");
const N = Number(input[0]);
input.shift();
const result = [];

let numInput = input.map((i) => +i);

console.log(numInput);

for (let num of numInput) {
  console.log(num);
}
