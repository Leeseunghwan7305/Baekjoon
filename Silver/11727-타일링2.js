let input = require("fs").readFileSync("../text.txt").toString().trim();

let tmp = Array.from({ length: 1001 }, () => 0);
sad
tmp[0] = 1;
tmp[1] = 3;
tmp[2] = 5;

for (let i = 3; i < tmp.length; i++) {
  if (i % 2 == 0) {
    tmp[i] = (tmp[i - 1] * 2 - 1) % 10007;
  } else {
    tmp[i] = (tmp[i - 1] * 2 + 1) % 10007;
  }
}
console.log(tmp[input - 1]);
