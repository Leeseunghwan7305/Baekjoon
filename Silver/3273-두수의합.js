const fs = require("fs");
const input = fs.readFileSync("../text.txt").toString().trim().split("\n");

const N = +input.shift();
const target = +input.pop();
const nums = input[0]
  .split(" ")
  .map((v, i) => +v)
  .sort((a, b) => a - b);

let count = 0;

for (let i = 0; i < N; i++) {
  for (let j = i; j < N; j++) {
    if (!(1 <= nums[i] < nums[j] <= N)) {
      break;
    }
    if (nums[i] + nums[j] == target) {
      count++;
      break;
    } else if (nums[i] + nums[j] > target) {
      break;
    }
  }
}

console.log(count);
