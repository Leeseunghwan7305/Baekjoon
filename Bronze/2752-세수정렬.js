const fs = require("fs");
const [n, ...arr] = fs
  .readFileSync("../text.txt")
  .toString()
  .trim()
  .split("\n");
let input = [];
let result = "";
for (let a of arr) {
  a[a.length - 1] % 2 == 0
    ? (result += "even" + "\n")
    : (result += "odd" + "\n");
}
console.log(result.trim());
