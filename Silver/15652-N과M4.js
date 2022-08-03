const fs = require("fs");

let [n, m] = (fs.readFileSync("../text.txt") + "").toString().trim().split(" ");

console.log(n, m);

let tmp = Array.from({ length: m }, () => 0);
let result = "";
function DFS(L) {
  if (L == m) {
    result += tmp.slice().join(" ") + "\n";
  } else {
    for (let i = 1; i <= n; i++) {
      if (L > 0 && tmp[L - 1] > i) {
        continue;
      }
      tmp[L] = i;
      DFS(L + 1);
    }
  }
}
DFS(0);
console.log(result.trim());
