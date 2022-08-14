const fs = require("fs");
const input = fs.readFileSync("../text.txt").toString().trim().split("\r\n");
let num = input.shift();
let num2 = num.split(" ")[1];
let input2 = input.map((i) => i.split(" ").map((i) => +i));
function solution(m, arr) {
  let answer = 0;
  let len = +m + 1;
  let dy = Array.from({ length: len }, () => 0);
  for (let i = 0; i < arr.length; i++) {
    let v = arr[i][1];
    let weight = arr[i][0];
    for (let j = m; j >= weight; j--) {
      dy[j] = Math.max(dy[j], dy[j - weight] + v);
    }
  }
  answer = dy[m];
  return answer;
}
console.log(solution(num2, input2));
