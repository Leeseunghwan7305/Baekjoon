let fs = require("fs");
let input = fs.readFileSync("../text.txt").toString().split(" ");
const x = Number(input[0]);
const y = Number(input[1]);
const w = Number(input[2]);
const h = Number(input[3]);

let small = Math.min(x - 0, y - 0, w - x, h - y);
console.log(small);
