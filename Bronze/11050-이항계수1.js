const fs = require("fs");
const [N, K] = fs
  .readFileSync("../text.txt")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

function fac(n) {
  if (n == 1 || n == 0) {
    return 1;
  } else {
    return n * fac(n - 1);
  }
}
console.log(fac(N) / (fac(K) * fac(N - K)));
