const fs = require("fs");
const [n, ...arr] = fs
  .readFileSync("../text.txt")
  .toString()
  .trim()
  .split("\r\n")
  .map((v) => +v);

let result = "";
let num = 0;
function DFS(C, G) {
  if (C > G) {
    return;
  }
  if (C == G) {
    num++;
    return;
  } else {
    DFS(C + 1, G);
    DFS(C + 2, G);
    DFS(C + 3, G);
  }
}
for (let i = 0; i < arr.length; i++) {
  DFS(0, arr[i]);
  result += num + "\n";
  num = 0;
}
console.log(result.trim());
// function DFS(S, Y) {
//   if (S > Y) {
//     return;
//   }
//   if (S == Y) {
//     num++;
//     return;
//   } else {
//     DFS(S + 1, Y);
//     DFS(S + 2, Y);
//     DFS(S + 3, Y);
//   }
// }
// let num = 0;
// for (let Y of arr) {
//   num = 0;
//   DFS(0, Y);
//   console.log(num);
// }
