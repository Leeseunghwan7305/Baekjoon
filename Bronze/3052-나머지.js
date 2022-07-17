let fs = require("fs");
let input = fs
  .readFileSync("../text.txt")
  .toString()
  .split("\r\n")
  .map((i) => +i);

let list = input.map((i) => i % 42);

let uniqueList = [...new Set(list)];
console.log(uniqueList.length);
