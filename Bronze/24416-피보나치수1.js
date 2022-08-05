let input = require("fs").readFileSync("../text.txt").toString().trim();

let num = +input;

let arr = Array.from({ length: num + 1 }, () => 0);

arr[1] = 1;
arr[2] = 1;

let code2 = 0;
for (let i = 3; i < arr.length; i++) {
  arr[i] = arr[i - 1] + arr[i - 2];
  code2++;
}
console.log(arr[arr.length - 1], code2);
