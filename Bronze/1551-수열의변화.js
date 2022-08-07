let fs = require("fs");
let input = fs.readFileSync("../text.txt").toString().trim().split("\r\n");

let number = +input[0].split(" ")[1];
let arr = input[1].split(",").map((i) => +i);

let imetial = [];
for (let j = 0; j < number; j++) {
  imetial = [];
  for (let i = 0; i < arr.length - 1; i++) {
    imetial.push(arr[i + 1] - arr[i]);
  }
  arr = [...imetial];
}
console.log(arr.join());
