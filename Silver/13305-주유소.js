const input = require("fs")
  .readFileSync("../text.txt")
  .toString()
  .trim()
  .split("\r\n");

let distance = input[1].split(" ").map((i) => BigInt(i));
let price = input[2].split(" ").map((i) => BigInt(i));
let current = 0;
price.pop();
let ovil = price[0];
let result = 0n;
for (let i = 0; i < distance.length; i++) {
  result += distance[i] * ovil;
  if (ovil > price[i + 1]) {
    ovil = price[i + 1];
  }
}
console.log(String(result));
