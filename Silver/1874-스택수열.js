const fs = require("fs");
const input = fs
  .readFileSync("../text.txt")
  .toString()
  .trim()
  .split("\r\n")
  .map((i) => +i);

let j = 0;
let stack = [];
let result = "";
input.shift();
for (let i = 1; i <= input.length; i++) {
  stack.push(i);
  result += "+\n";
  if (stack[stack.length - 1] == input[j]) {
    while (1) {
      if (stack.length == 0) {
        break;
      }
      if (stack[stack.length - 1] == input[j]) {
        j++;
        stack.pop();
        result += "-\n";
      } else {
        break;
      }
    }
  }
}
if (stack.length != 0) {
  console.log("NO");
} else {
  console.log(result.trim());
}
