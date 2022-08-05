const fs = require("fs");
const [n, ...arr] = fs
  .readFileSync("../text.txt")
  .toString()
  .trim()
  .split("\r\n")
  .map((v) => +v);

let trigle = Array.from({ length: 101 }, () => 0);
trigle[1] = 1;
trigle[2] = 1;
trigle[3] = 1;

for (let i = 4; i < trigle.length; i++) {
  trigle[i] = trigle[i - 3] + trigle[i - 2];
}
for (let i = 0; i < arr.length; i++) {
  console.log(trigle[arr[i]]);
}
