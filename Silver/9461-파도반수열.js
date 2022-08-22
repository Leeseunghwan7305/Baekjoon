const fs = require("fs");
const [n, ...arr] = fs
  .readFileSync("../text.txt")
  .toString()
  .trim()
  .split("\r\n")
  .map((v) => +v);

let tmp = Array.from({ length: 101 }, () => 0);
let result = "";
tmp[0] = 1;
tmp[1] = 1;
tmp[2] = 1;

for (let i = 3; i < tmp.length; i++) {
  tmp[i] = tmp[i - 3] + tmp[i - 2];
}
for (let i = 0; i < arr.length; i++) {
  result += tmp[arr[i] - 1] + "\n";
}

console.log(result.trim());
