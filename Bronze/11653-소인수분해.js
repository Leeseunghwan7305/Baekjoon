let fs = require("fs");
let input = fs.readFileSync("../text.txt").toString().split(" ");

let number = Number(input[0]);

console.log(number);

if (number == 1) {
  return;
}
for (let i = 2; i <= number; ) {
  if (number % i != 0) {
    i++;
    continue;
  }
  if (number == 1) {
    break;
  }
  console.log(i);
  number /= i;
}
