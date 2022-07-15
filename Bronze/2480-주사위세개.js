const fs = require("fs");

const input = fs
  .readFileSync("../text.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [a, b, c] = [input[0], input[1], input[2]];

console.log(a, b, c);

//같은눈 3개 => 10000+ 같은눈 x1000
//같은눈 2개 => 1000+ 같은눈 x 100
//같은눈 1개 => 가장큰눈 x 100
let result = 0;
if (a == b && b == c && c == a) {
  result = 10000 + a * 1000;
} else if ((a == b && a != c) || (a == c && a != b) || (b == c && b != a)) {
  if (a == b || b == c) {
    result = 1000 + b * 100;
  } else {
    result = 1000 + c * 100;
  }
} else {
  result = Math.max(a, b, c) * 100;
}
console.log(result);
