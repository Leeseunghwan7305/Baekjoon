let input = require("fs")
  .readFileSync("../text.txt")
  .toString()
  .trim()
  .split("\r\n");

let number = input[0].split(" ").map((i) => +i);
input.shift();

let circle = number[0];
let start = number[2];
let line = input.map((i) => i.split(" ").map((i) => +i));

let graph = Array.from(Array(circle + 1), () => Array());
let ch = Array.from({ length: circle + 1 }, () => 0);
let ch2 = Array.from({ length: circle + 1 }, () => 0);
let dfsPath = [];
let bfsPath = [];

for (const [a, b] of line) {
  graph[a].push(b);
  graph[b].push(a);
}

let graph2 = graph.map((i) => i.sort((a, b) => a - b));
function DFS(V) {
  for (let a of graph2[V]) {
    if (ch[a] == 0) {
      ch[a] = 1;
      dfsPath.push(a);
      DFS(a);
    }
  }
}
ch[start] = 1;
dfsPath.push(start);
DFS(start);

let queue = [];
function BFS(V) {
  while (graph[V].length > 0) {
    queue.push(graph2[V].shift());
  }
  for (let a of queue) {
    if (ch2[a] == 0) {
      ch2[a] = 1;
      bfsPath.push(a);
      BFS(a);
    }
  }
}
ch2[start] = 1;
bfsPath.push(start);
BFS(start);
console.log(dfsPath.join(" "));
console.log(bfsPath.join(" "));
