let fs = require("fs");
let input = fs
  .readFileSync("../text.txt")
  .toString()
  .trim()
  .split("\r\n")
  .map((i) => +i);

let [a, ...test] = input;
let fibo = Array.from({ length: 45 }, () => 0);
fibo[0] = 0;
fibo[1] = 1;
fibo[2] = 1;

for (let i = 3; i < fibo.length; i++) {
  fibo[i] = fibo[i - 2] + fibo[i - 1];
}

let result = "";
for (let i = 0; i < test.length; i++) {
  if (test[i] == 0) {
    result += 1 + " " + 0 + "\n";
    continue;
  } else if (test[i] == 1) {
    result += 0 + " " + 1 + "\n";
    continue;
  }

  result += fibo[test[i] - 1] + " " + fibo[test[i]] + "\n";
}

//0이면 1 0
// 1    0  1
// 2
//3이면 1/ 2

console.log(result.trim());
