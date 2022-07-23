const fs = require("fs");
const [N, K] = fs
  .readFileSync("../text.txt")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

console.log(N, K);

let result = "";
let arr = [];
for (let i = 1; i <= N; i++) {
  arr.push(i);
}

console.log(arr);

let deleteArr = K - 1;
let reuslt = "";
function bingbing(deleteArr) {
  deleteArr = deleteArr % arr.length;
  if (arr.length) {
    result += arr.splice(deleteArr, 1) + "," + " ";
    deleteArr += K - 1;
    bingbing(deleteArr);
  } else if (arr.length == 0) {
    result = result.substring(0, result.length - 2);
    console.log("<" + result.trim() + ">");
    return;
  }
}
bingbing(deleteArr);
