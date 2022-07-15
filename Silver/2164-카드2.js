let fs = require("fs");
let input = fs.readFileSync("../text.txt").toString().trim().split("\n");
const n = parseInt(input.shift());

//버리고 그다음은 맨뒤로

for (let i = 1; i <= n; i++) {
  input.push(i);
}

while (input.length != 1) {
  input.splice(0, 1);
  input.push(input.shift());
}
console.log(input[0]);
