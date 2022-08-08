let fs = require("fs");
let input = fs.readFileSync("../text.txt").toString().split(" ");

let number = 0;
if (input === 0) {
  number;
}
for (let i = 1; i <= input; i++) {
  if (i % 5 === 0) number++;
  if (i % 25 === 0) number++;
  if (i % 125 === 0) number++;
}

console.log(number);
