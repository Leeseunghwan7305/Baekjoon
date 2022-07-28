let fs = require("fs");
let input = fs.readFileSync("../text.txt").toString().split("\r\n");

let newInput = input.map((i) => +i);
console.log(newInput);
let arr = [];
for (let i = newInput[0]; i <= newInput[1]; i++) {
  let flag = 0;
  if (i < 2) {
    flag = 1;
  } else if (i == 2) {
    flag = 0;
  }
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      flag = 1;
      break;
    }
  }
  if (!flag) {
    arr.push(i);
  }
}
if (arr.length == 0) {
  console.log(-1);
} else {
  console.log(arr.reduce((pre, cur) => pre + cur));
  console.log(Math.min(...arr));
}
