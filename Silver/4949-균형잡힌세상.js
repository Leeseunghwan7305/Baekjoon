const arr = require("fs")
  .readFileSync("../text.txt")
  .toString()
  .trim()
  .split("\r\n");

arr.pop();
for (let i = 0; i < arr.length; i++) {
  let stack = [];
  for (let j = 0; j < arr[i].length; j++) {
    if (arr[i][j] == "(" || arr[i][j] == "[") {
      stack.push(arr[i][j]);
    }

    if (arr[i][j] == ")") {
      if (stack.length == 0) {
        console.log("no");
        break;
      } else {
        if (stack[stack.length - 1] == "(") stack.pop();
        else {
          console.log("no");
          break;
        }
      }
    } else if (arr[i][j] == "]") {
      if (stack.length == 0) {
        console.log("no");
        break;
      } else {
        if (stack[stack.length - 1] == "[") stack.pop();
        else {
          console.log("no");
          break;
        }
      }
    }
    if (arr[i][j] == ".") {
      if (stack.length == 0) {
        console.log("yes");
      } else {
        console.log("no");
      }
    }
  }
}
