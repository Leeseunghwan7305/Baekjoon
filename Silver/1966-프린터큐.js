const input = require("fs")
  .readFileSync("../text.txt")
  .toString()
  .trim()
  .split("\r\n");

let print = input.map((i) => i.split(" ").map((i) => +i));
console.log(print);

for (let i = 0; i < print[0][0]; i++) {
  let index = print[i * 2 + 1][1];

  let find = print[i * 2 + 2][index]; //찾는 숫자
}
// 0  1 2
// 1 3 5
// 2 4 6
//아이디어는 M 즉  목표하는 인덱스 값을 받아서 M값을 움직여야한다.
