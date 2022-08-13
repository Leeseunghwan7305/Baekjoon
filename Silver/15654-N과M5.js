const fs = require("fs");
const input = fs
  .readFileSync("../text.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));
const [N, M] = input[0];
const nums = input[1].sort((a, b) => a - b);

//중복은 안되어야하며
// 수열은 사전식으로

//let ch = Array.from({ length: N }, () => 0); //숫자 개수만큼
let tmp = Array.from({ length: M }, () => 0); // 몇개찾을꺼야?
let arr = "";
function DFS(L) {
  if (L == M) {
    arr += tmp.join(" ") + "\n";
  } else {
    for (let i = 0; i < N; i++) {
      if (L == 0) {
          tmp[L] = nums[i];
          DFS(L + 1);
        }
      } else {
          tmp[L] = nums[i];
          if (tmp[L] > tmp[L - 1]) {
            DFS(L + 1);
          }
        }
      }
    }
  }
}
DFS(0);
console.log(arr.trim());
