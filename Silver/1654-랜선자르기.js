const fs = require("fs");
const input = fs.readFileSync("../text.txt").toString().trim().split("\r\n");

let line = input
  .shift()
  .split(" ")
  .map((i) => +i);
let [N, K] = line;
let lists = input.map((i) => +i);

lists.sort((a, b) => a - b);
let i = 0;
let lt = 1;
let rt = Math.max(...lists);
let max = 0;
while (lt <= rt) {
  let mid = parseInt((lt + rt) / 2);

  let number = lists
    .map((i) => parseInt(i / mid))
    .reduce((pre, cur) => pre + cur);

  if (number >= K) {
    lt = mid + 1;
    if (mid > max) {
      max = mid;
    }
  } else {
    rt = mid - 1;
  }
}
console.log(max);
