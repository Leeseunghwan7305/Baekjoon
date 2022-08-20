const input = require("fs")
  .readFileSync("../text.txt")
  .toString()
  .trim()
  .split("\r\n");

let [computer, ...arr] = input;
computer = +computer;
arr.shift();
let birus = arr.map((i) => i.split(" ").map((i) => +i));

let graph = Array.from(Array(computer + 1), () => Array());
let ch = Array.from({ length: computer + 1 }, () => 0);
let path2 = [];
for (let [a, b] of birus) {
  graph[a].push(b);
}
function DFS(V) {
  for (let n of graph[V]) {
    if (ch[n] == 1) {
      return;
    }
    if (ch[n] == 0) {
      path2.push(n);
      ch[n] = 1;
      DFS(n);
      ch[n] = 0;
    }
  }
}
ch[1] = 1;
DFS(1);
let setPath = [...new Set(path2)];
console.log(setPath.length);
// let computer = +input.shift();
// let graph = Array.from(Array(computer + 1), () => Array());
// let ch = Array.from({ length: computer + 1 }, () => 0);
// input.shift();
// let birus = input.map((i) => i.split(" ").map((i) => +i));
// for (let [a, b] of birus) {
//   graph[a].push(b);
// }
// let path = [];
// function DFS(v) {
//   for (let nv of graph[v]) {
//     if (ch[nv] === 0) {
//       path.push(nv);
//       ch[nv] = 1;
//       DFS(nv);
//       ch[nv] = 0;
//     }
//   }
// }
// ch[1] = 1;
// DFS(1);
// console.log(path.length);
