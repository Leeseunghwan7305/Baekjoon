const fs = require("fs");
const input = fs.readFileSync("../text.txt").toString().trim().split("\r\n");

console.log(input);
input.shift();
let num = 0;
for (let i = 1; i < input.length; i++) {
  if (input[0].includes(input[i])) {
    num++;
  }
}
console.log(num);
