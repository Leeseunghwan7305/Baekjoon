let fs = require("fs");
let input = fs.readFileSync("../text.txt").toString().split("\r\n");

input.splice(0, 1);
let result = "";
for (let i = 0; i < input.length; i++) {
  let stack = [];
  let flag = 1;
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] == "(") {
      stack.push("(");
    } else {
      if (stack.length == 0) {
        flag = 0;
        result += "NO\n";
        break;
      }
      stack.pop();
    }
  }
  if (stack.length != 0) {
    flag = 0;
    result += "NO\n";
  }

  if (flag) {
    result += "YES\n";
  }
}
console.log(result.trim());
