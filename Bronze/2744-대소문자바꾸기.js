let fs = require("fs");
let input = fs.readFileSync("../text.txt").toString().trim();
let result = "";

for (let i = 0; i < input.length; i++) {
  if (input[i] == input[i].toUpperCase()) {
    result += input[i].toLowerCase();
  } else {
    result += input[i].toUpperCase();
  }
}
console.log(result);
