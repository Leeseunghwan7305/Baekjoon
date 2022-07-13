const fs = require("fs");
const input = fs.readFileSync("../text.txt").toString().trim();

console.log(
  input
    .split("")
    .map((i) => Number(i))
    .sort((a, b) => b - a)
    .join("")
);
