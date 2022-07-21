let [count, ...input] = require("fs")
  .readFileSync("../text.txt")
  .toString()
  .trim()
  .split("\n");

let result = "";
let inSplit = input[0].split(" ");
let find = input[0].split(" ").sort((a, b) => +a - +b);
for (let i = 0; i < input[0].split(" ").length; i++) {
  let num = inSplit[i];
  result += find.indexOf(num) + " ";
}
console.log(
  ...result
    .trim()
    .split(" ")
    .map((i) => +i)
);
