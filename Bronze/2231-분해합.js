const fs = require("fs");
const input = fs.readFileSync("../text.txt").toString();

const N = parseInt(input);

for (let i = 1; i <= N; i++) {
  let divide = String(i)
    .split("")
    .map((i) => Number(i))
    .reduce((pre, cur) => pre + cur);
  if (i + divide === N) {
    console.log(i);
    return;
  }
}
console.log("0");
