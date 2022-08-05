let fs = require("fs");
let input = fs.readFileSync("../text.txt").toString().split("\r\n");

let stack = [];
let result = "";
for (let i = 1; i < input.length; i++) {
  if (input[i] == "size") {
    result += stack.length + "\n";
    continue;
  }

  if (input[i] == "pop") {
    if (stack.length == 0) {
      result += "-1\n";
    } else {
      result += stack.pop() + "\n";
    }
    continue;
  }

  if (input[i] == "top") {
    if (stack.length == 0) {
      result += "-1\n";
    } else {
      result += stack[stack.length - 1] + "\n";
    }
    continue;
  }

  if (input[i] == "empty") {
    if (stack.length == 0) {
      result += "1\n";
    } else {
      result += "0\n";
    }
    continue;
  }
  if (input[i].includes("push")) {
    stack.push(input[i].split(" ")[1]);
  }
  //input[i].includes("push") ? stack.push(input[i].split(" ")[1]) : null;
}
console.log(result.trim());
