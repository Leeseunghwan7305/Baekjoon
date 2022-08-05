let fs = require("fs");
let inputs = fs.readFileSync("../text.txt").toString().trim().split("\r\n");

let number = inputs[1].split(" ").map((i) => +i);

let arr = Array.from({ length: number.length + 5 }, () => -9999);
arr[0] = number[0];

for (let i = 1; i < number.length; i++) {
  arr[i] =
    number[i] > number[i] + arr[i - 1] ? number[i] : number[i] + arr[i - 1];
}
console.log(Math.max(...arr));
