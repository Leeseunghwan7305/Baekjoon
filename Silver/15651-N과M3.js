const fs = require("fs");

let [n, m] = (fs.readFileSync("../text.txt") + "").toString().trim().split(" ");

let result = "";
let temp = Array.from({ length: m }, () => 0);
function DFS(L) {
  if (L == m) {
    result += temp.join(" ") + "\n";
  } else {
    for (let i = 1; i <= n; i++) {
      temp[L] = i;
      DFS(L + 1);
    }
  }
}
DFS(0);
console.log(result.trim());
