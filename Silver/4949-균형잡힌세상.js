const arr = require("fs")
  .readFileSync("../text.txt")
  .toString()
  .trim()
  .split("\r\n");

arr.pop();
let stack = [];
for (let i = 0; i < arr.length; i++) {
  let flag = 1;
  stack = [];
  for (let j = 0; j < arr[i].length; j++) {
    if (arr[i][j] == "(" || arr[i][j] == "[") {
      stack.push(arr[i][j]);
    } else if (arr[i][j] == ")" || arr[i][j] == "]") {
      if (stack.length == 0) {
        flag = 0;
        break;
      }
      if (arr[i][j] == "]" && stack[stack.length - 1] == "[") {
        stack.pop();
      } else if (arr[i][j] == ")" && stack[stack.length - 1] == "(") {
        stack.pop();
      } else {
        flag = 0;
        break;
      }
    }
  }
  if (flag && stack.length == 0) {
    console.log("yes");
  } else {
    console.log("no");
  }
}
