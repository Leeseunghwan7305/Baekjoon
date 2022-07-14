const fs = require("fs");
const { stripVTControlCharacters } = require("util");
const [n, ...arr] = fs
  .readFileSync("../text.txt")
  .toString()
  .trim()
  .split("\n");

const N = +n;
const stairs = arr.map((v) => +v);

let dp = Array.from({ length: stairs.length }, () => 0);
dp[0] = stairs[0];
dp[1] = Math.max(stairs[0] + stairs[1], stairs[1]);
dp[2] = Math.max(stairs[0] + stairs[2], stairs[1] + stairs[2]);
for (let i = 3; i < dp.length; i++) {
  dp[i] = Math.max(
    dp[i - 2] + stairs[i],
    stairs[i - 1] + stairs[i] + dp[i - 3]
  );
}
console.log(dp[N - 1]);
