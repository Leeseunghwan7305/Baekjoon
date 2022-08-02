let fs = require("fs");
let input = fs
  .readFileSync("../text.txt")
  .toString()
  .trim()
  .split("\r\n")
  .map((i) => +i);

input.splice(0, 1);
let stack = [];
input.forEach((i) => {
  if (i == 0) {
    stack.pop();
  } else {
    stack.push(i);
  }
});

let result = stack.reduce((pre, cur) => pre + cur, 0);
console.log(result);
