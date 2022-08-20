const fs = require("fs");
const { stripVTControlCharacters } = require("util");
const [n, ...arr] = fs
  .readFileSync("../text.txt")
  .toString()
  .trim()
  .split("\n");

const N = +n;
const stairs = arr.map((v) => +v);

let dp = Array.from({ length: 350 }, () => 0);
// 한번에 한계단 또는 두계단
// 세개는 못밟음
// 마지막 계산 무조건 밟아야함
console.log(stairs);
dp[0] = stairs[0];
dp[1] = stairs[1] + stairs[0];
dp[2] = Math.max(stairs[0] + stairs[2], stairs[1] + stairs[2]);
for (let i = 3; i < stairs.length; i++) {
  dp[i] = Math.max(
    dp[i - 2] + stairs[i],
    dp[i - 3] + stairs[i - 1] + stairs[i]
  );
}
console.log(dp[N - 1]);
// dp[0] = stairs[0];
// dp[1] = stairs[1] + stairs[0];
// dp[2] = Math.max(stairs[0] + stairs[2], stairs[1] + stairs[2]);
// for (let i = 3; i < stairs.length; i++) {
//   dp[i] = Math.max(dp[i - 2] + stairs[i], dp[i - 1] + stairs[i]);
// }
// console.log(dp);
