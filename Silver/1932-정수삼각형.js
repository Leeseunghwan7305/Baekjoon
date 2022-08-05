const fs = require("fs");
const [n, ...arr] = fs
  .readFileSync("../text.txt")
  .toString()
  .trim()
  .split("\r\n");
let trigle = arr.map((i) => i.split(" ").map((i) => +i));
let tmp = Array.from(Array(+n + 2), () => Array(+n + 2).fill(0));

tmp[0][0] = trigle[0][0];

for (let i = 0; i < n - 1; i++) {
  for (let j = 0; j < trigle[i].length; j++) {
    if (tmp[i + 1][j + 1] != 0) {
      if (tmp[i + 1][j + 1] < tmp[i][j] + trigle[i + 1][j + 1]) {
        tmp[i + 1][j + 1] = Math.max(
          tmp[i][j] + trigle[i + 1][j + 1],
          tmp[i + 1][j + 1]
        );
      }
    } else {
      tmp[i + 1][j + 1] = tmp[i][j] + trigle[i + 1][j + 1];
    }

    if (tmp[i + 1][j] != 0) {
      if (tmp[i + 1][j] < tmp[i][j] + trigle[i + 1][j]) {
        tmp[i + 1][j] = Math.max(tmp[i + 1][j], tmp[i][j] + trigle[i + 1][j]);
      }
    } else {
      tmp[i + 1][j] = tmp[i][j] + trigle[i + 1][j];
    }
  }
}
console.log(tmp);
console.log(Math.max(...tmp[n - 1]));
//const fs = require('fs');
//const [n, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

//const N = +n;
//let dp = arr.map(v => v.split(' ').map(v => +v))

// console.log(dp)

//for (let i = 1; i < N; i++) {
// for (let j = 0; j < dp[i].length; j++) {
// if (j == 0) dp[i][j] += dp[i - 1][j]
// else if (j == dp[i].length - 1) dp[i][j] += dp[i - 1][j - 1];
//  else dp[i][j] += Math.max(dp[i - 1][j - 1], dp[i - 1][j])
//  }
//}

//const answer = Math.max(...dp[N - 1]);
//console.log(answer)
