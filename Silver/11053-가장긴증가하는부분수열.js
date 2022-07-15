const fs = require("fs");
const [n, ...arr] = fs
  .readFileSync("../text.txt")
  .toString()
  .trim()
  .split("\n");

const sequence = arr[0].split(" ").map((v) => +v);

let dp = Array.from({ length: sequence.length }, () => 0);
dp[0] = 1;
for (let i = 1; i < sequence.length; i++) {
  let max = 0;
  for (let j = i - 1; j >= 0; j--) {
    if (sequence[i] > sequence[j] && dp[j] > max) {
      max = dp[j];
    }
  }
  dp[i] = max + 1;
}
console.log(Math.max(...dp));
