let fs = require("fs");

const input = require("fs")
  .readFileSync("../text.txt")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

for (let [a, b, c] of input) {
  let arr = [a, b, c].sort((a, b) => a - b);
  if (a == 0 && (b == 0) & (c == 0)) {
    return;
  }
  if (arr[0] ** 2 + arr[1] ** 2 == arr[2] ** 2) {
    console.log("right");
  } else {
    console.log("wrong");
  }
}
