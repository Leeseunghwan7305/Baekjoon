let fs = require("fs");
let input = fs
  .readFileSync("../text.txt")
  .toString()
  .trim()
  .split(" ")
  .map((i) => +i);

let sosu = Array.from({ length: input[1] + 1 }, () => true);

sosu[0] = false;
sosu[1] = false;

for (let i = 2; i <= input[1]; i++) {
  if (!sosu[i]) {
    continue;
  }

  for (let k = i * 2; k <= input[1]; k += i) {
    sosu[k] = false;
  }
}
let result = "";
for (let i = input[0]; i <= input[1]; i++) {
  if (sosu[i] == true) {
    result += i + "\n";
  }
}

console.log(result.trim());
