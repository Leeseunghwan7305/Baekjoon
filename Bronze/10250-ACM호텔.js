const fs = require("fs");
const input = fs.readFileSync("../text.txt").toString().trim().split("\r\n");
const A = parseInt(input.shift()); // 첫번째 값 제거

for (let i = 0; i < input.length; i++) {
  //H W N
  let hotel = input[i].split(" ").map((i) => Number(i));
  let [H, W, N] = hotel;
  if (N % H === 0) {
    if (N / H < 10) {
      console.log(`${H}0${N / H}`);
    } else {
      console.log(`${H}${N / H}`);
    }
  } else {
    if (N / H + 1 < 10) {
      console.log(`${N % H}0${Number(Math.ceil(N / H))}`);
    } else {
      console.log(`${N % H}${Number(Math.ceil(N / H))}`);
    }
  }
}
