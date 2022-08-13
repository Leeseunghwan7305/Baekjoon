let fs = require("fs");
let input = fs
  .readFileSync("../text.txt")
  .toString()
  .trim()
  .split(" ")
  .map((i) => +i);

let [a, b] = input;
let arr = Array.from(Array(201), () => Array(201).fill(0));
function DFS(n, m) {
  if (arr[n][m] > 0) {
    return arr[n][m];
  }

  if (m == 0 || n == m) {
    return 1;
  } else {
    return (arr[n][m] = DFS(n - 1, m - 1) + DFS(n - 1, m));
  }
}
DFS(a, b);
let result = arr[a][b];
console.log(Number(BigInt(result).toString().substring(-1)));
