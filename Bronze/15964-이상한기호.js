const fs = require("fs");
const input = fs.readFileSync("../text.txt").toString().trim().split("\r\n");
let result = input[0].split(" ").map((i) => +i);

let [a, b] = result;

console.log((a + b) * (a - b));
