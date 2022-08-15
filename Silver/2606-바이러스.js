const input = require("fs")
  .readFileSync("../text.txt")
  .toString()
  .trim()
  .split("\r\n");

let computer = +input.shift();
let graph = Array.from(Array(computer + 1), () => Array());
let ch = Array.from({ length: computer + 1 }, () => 0);
input.shift();
let birus = input.map((i) => i.split(" ").map((i) => +i));
for (let [a, b] of birus) {
  graph[a].push(b);
}
console.log(graph);
