const fs = require("fs");
const [n, ...arr] = fs
  .readFileSync("../text.txt")
  .toString()
  .trim()
  .split("\r\n")
  .map((v) => +v);

let sosu = Array.from({ length: 10000 + 1 }, (v, i) => i);

sosu[0] = false;
sosu[1] = false;

for (let i = 2; i < sosu.length; i++) {
  if (!sosu[i]) {
    continue;
  } else {
    for (let k = i * 2; k <= sosu.length; k = k + i) {
      sosu[k] = false;
    }
  }
}

let a = 0;
let b = 0;
const answer = [];
arr.forEach((v) => {
  for (let i = Math.ceil(v / 2); i > 1; i--) {
    if (sosu[i] && sosu[v - i]) {
      answer.push(`${i} ${v - i}`);
      break;
    }
  }
});
console.log(answer.join("\n"));
