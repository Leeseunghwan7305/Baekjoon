let fs = require("fs");
let input = fs.readFileSync("../text.txt").toString().split(" ");

let reverseNum = input
  .map((item) => item.split("").reverse())
  .map((i) => i.join(""));
reverseNum = reverseNum.map((item) => +item);

console.log(Math.max(...reverseNum));
