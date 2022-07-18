const input = require("fs").readFileSync("../text.txt").toString();

let result = "";
for (let i = 97; i <= 122; i++) {
  result += input.indexOf(String.fromCharCode(i)) + " ";
}
console.log(result.trim());
