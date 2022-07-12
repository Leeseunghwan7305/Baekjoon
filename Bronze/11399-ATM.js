let input = require("fs").readFileSync("../text.txt").toString().split("\n");

let pMinut = input[1].split(" ").map((min) => Number(min));
let sum = 0;

pMinut.sort((a, b) => a - b);
for (let i = 0; i < pMinut.length; i++) {
  for (let j = 0; j <= i; j++) {
    sum += pMinut[j];
  }
}
console.log(sum);
