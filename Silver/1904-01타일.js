let fs = require("fs");
let input = fs.readFileSync("../text.txt").toString().trim();

let num = +input;
let arr = Array.from({ length: 1000000 }, () => 0);

arr[1] = 1;
arr[2] = 1;
arr[2] = 2;
arr[3] = 3;

for (let i = 4; i < arr.length; i++) {
  arr[i] = (arr[i - 1] + arr[i - 2]) % 15746;
}
console.log(arr[num]);
