const fs = require("fs");

const input = fs.readFileSync("../text.txt").toString().trim();

console.log(input - 543);
