const fs = require("fs");
const input = fs
  .readFileSync("../text.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

let queue = [];
let result = "";
input.shift();
for (let i = 0; i < input.length; i++) {
  if (input[i].split(" ").length === 1) {
    if (input[i] == "front") {
      if (queue.length == 0) {
        result += "-1\n";
      } else {
        result += queue[0] + "\n";
      }
    } else if (input[i] == "back") {
      if (queue.length == 0) {
        result += "-1\n";
      } else {
        result += queue[queue.length - 1] + "\n";
      }
    } else if (input[i] == "empty") {
      if (queue.length == 0) {
        result += "1\n";
      } else {
        result += "0\n";
      }
    } else if (input[i] == "size") {
      result += queue.length + "\n";
    }

    if (input[i] == "pop") {
      if (queue.length == 0) {
        result += "-1\n";
      } else {
        result += queue.shift() + "\n";
      }
    }
  } else {
    queue.push(Number(input[i].split(" ")[1]));
  }
}
console.log(result.trim());
