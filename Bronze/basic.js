const fs = require("fs");

const input = fs
  .readFileSync("../text.txt")
  .toString()
  .split("\r\n")
  .map((l) => Number(l));

console.log(input);
let arr = [];
for (let i = 1; i <= 30; i++) {
  if (!input.includes(i)) {
    arr.push(i);
  }
}
arr.sort((a, b) => a - b);

console.log(arr[0]);
console.log(arr[1]);
