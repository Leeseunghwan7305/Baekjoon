const input = require("fs")
  .readFileSync("../text.txt")
  .toString()
  .trim()
  .split(" ")
  .map((i) => +i);

let min = 999999;
function DFS(cur, goal, num) {
  if (cur > goal) {
    return;
  }
  if (cur == goal) {
    min = Math.min(min, num);
    return;
  }

  DFS(cur * 2, goal, num + 1);
  DFS(Number(cur + "1"), goal, num + 1);
}
DFS(input[0], input[1], 1);

if (min == 999999) {
  console.log(-1);
} else {
  console.log(min);
}
