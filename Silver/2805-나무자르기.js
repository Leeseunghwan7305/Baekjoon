const fs = require("fs");
const [n, t] = fs.readFileSync("../text.txt").toString().trim().split("\r\n");

let tree = t.split(" ").map((i) => +i);
let K = Number(n.split(" ")[1]);
let lt = 0;
let rt = Math.max(...tree); // 최소 높이와 최대높이 설정
let max = 0;
while (lt <= rt) {
  let mid = parseInt((lt + rt) / 2);
  let getTree = tree
    .map((tre) => {
      if (tre - mid > 0) {
        return tre - mid;
      } else {
        return 0;
      }
    })
    .reduce((pre, cur) => pre + cur);

  if (getTree >= K) {
    //자른 나무가 얻어야 하는것보다 클떄

    lt = mid + 1;
    if (max < mid) {
      max = mid;
    }
  } else if (getTree < K) {
    rt = mid - 1;
  }
}
console.log(max);
