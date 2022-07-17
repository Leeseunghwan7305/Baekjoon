const fs = require("fs");
const [n, str] = fs.readFileSync("../text.txt").toString().trim().split("\n");

const N = +n;

let hash = 0;
let e = 1;
for (let i = 0; i < N; i++) {
  hash += (str.charCodeAt(i) - 96) * e;
  hash %= 1234567891;
  e = e * 31;
  e %= 1234567891;
}
console.log(hash);
