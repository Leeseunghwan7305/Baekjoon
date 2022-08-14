const fs = require("fs");
const input = fs.readFileSync("../text.txt").toString().trim();

let len = Number(input) + 1;
let tmp = Array.from({ length: len }, () => 1);
tmp[1] = 0;
tmp[2] = 1;
tmp[3] = 1;
for (let i = 4; i < tmp.length; i++) {
  tmp[i] = tmp[i - 1] + 1;

  if (i % 3 == 0) {
    tmp[i] = Math.min(tmp[i / 3] + 1, tmp[i]);
  }

  if (i % 2 == 0) {
    tmp[i] = Math.min(tmp[i / 2] + 1, tmp[i]);
  }
  //   if (i % 3 == 0 && i % 2 == 0) {
  //     tmp[i] = Math.min(tmp[i / 3] + 1, tmp[i / 2] + 1, tmp[i - 1] + 1);
  //     continue;
  //   }

  //   if (i % 3 == 0 && i % 2 != 0) {
  //     tmp[i] = Math.min(tmp[i / 3] + 1, tmp[i - 1] + 1);
  //     continue;
  //   }

  //   if (i % 2 == 0 && i % 3 != 0) {
  //     tmp[i] = Math.min(tmp[i / 2] + 1, tmp[i - 1] + 1);
  //     continue;
  //   }

  //   tmp[i] = Math.min(tmp[i - 1] + 1);
}

console.log(tmp);
