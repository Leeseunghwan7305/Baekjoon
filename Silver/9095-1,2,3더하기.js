const fs = require("fs");
const [n, ...arr] = fs
  .readFileSync("../text.txt")
  .toString()
  .trim()
  .split("\r\n")
  .map((v) => +v);

function DFS(S, Y) {
  if (S > Y) {
    return;
  }
  if (S == Y) {
    num++;
    return;
  } else {
    DFS(S + 1, Y);
    DFS(S + 2, Y);
    DFS(S + 3, Y);
  }
}
let num = 0;
for (let Y of arr) {
  num = 0;
  DFS(0, Y);
  console.log(num);
}
