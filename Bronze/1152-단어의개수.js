let fs = require("fs");
let input = fs.readFileSync("../text.txt").toString();

input = input.trim();
if (input == "") {
  console.log(0);
  return;
}
console.log(input.split(" ").length);
