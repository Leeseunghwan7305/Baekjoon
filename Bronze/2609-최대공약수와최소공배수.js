const [a, b] = require("fs")
  .readFileSync("../text.txt")
  .toString()
  .trim()
  .split(" ")
  .map((i) => parseInt(i));
let i = a;
let j = b;

let min = Math.min(i, j);
let maxResult = 0;
let z = 1;
for (let num = 0; num <= min; num++) {
  if (i % num === 0 && j % num === 0) {
    maxResult = num;
  }
}
console.log(maxResult);
let mI = i;
let mJ = j;
while (1) {
  if (mI > mJ) {
    mJ += j;
  }
  if (mJ > mI) {
    mI += i;
  }
  if (mJ == mI) {
    console.log(mJ);
    break;
  }
}
