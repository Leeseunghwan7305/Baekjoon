const fs = require("fs");
const input = fs.readFileSync("../text.txt").toString().trim().split("\r\n");

input.shift();

for (let i of input) {
  console.log(i[0] + i[i.length - 1]);
}
