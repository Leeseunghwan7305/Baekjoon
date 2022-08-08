let input = require("fs")
  .readFileSync("../text.txt")
  .toString()
  .trim()
  .split("\r\n");

let price = +input.shift();
input.shift();
let list = input.map((i) => i.split(" ").reduce((pre, cur) => pre * cur));

let sum = list.reduce((pre, cur) => pre + cur);

if (sum == price) {
  console.log("Yes");
} else {
  console.log("No");
}
