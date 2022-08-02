let fs = require("fs");
let input = fs
  .readFileSync("../text.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let [n, r] = input;
let tp = Array.from(Array(n + 1), () => Array(n + 1).fill(0));

function DFS(N, R) {
  if (tp[N][R] > 0) return tp[N][R];
  if (N == R || R == 0) {
    return 1;
  } else {
    return (tp[N][R] = (DFS(N - 1, R - 1) + DFS(N - 1, R)) % 10007);
  }
}
let result = DFS(n, r);
console.log(result);
