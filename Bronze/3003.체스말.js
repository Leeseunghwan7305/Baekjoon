let fs = require("fs");
let input = fs
  .readFileSync("../text.txt")
  .toString()
  .split(" ")
  .map((i) => +i);

let chess = [1, 1, 2, 2, 2, 8];
let result = "";
for (let i = 0; i < chess.length; i++) {
  if (chess[i] == input[i]) {
    result += 0 + " ";
  } else {
    result += chess[i] - input[i] + " ";
  }
}
console.log(result.trim());
