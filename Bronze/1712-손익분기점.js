const fs = require("fs");

const input = fs
  .readFileSync("../text.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let [A, B, C] = input;
let num = 0;
let diff = C - B;
while (1) {
  if (B >= C) {
    console.log(-1);
    return;
  }

  num = Math.floor(A / diff);
  console.log(num + 1);
  return;
}
