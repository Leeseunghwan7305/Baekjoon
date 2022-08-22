let input = require("fs").readFileSync("../text.txt").toString().trim();

let tmp = Array.from({ length: 1001 }, () => 0);

tmp[0] = 1;
tmp[1] = 2;

for (let i = 2; i < tmp.length; i++) {
  tmp[i] = (tmp[i - 1] + tmp[i - 2]) % 10007;
}
console.log(tmp[+input - 1]);
