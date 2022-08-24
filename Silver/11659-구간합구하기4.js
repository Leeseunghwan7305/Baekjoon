let input = require("fs")
  .readFileSync("../text.txt")
  .toString()
  .trim()
  .split("\r\n");
input = input.map((i) => i.split(" ").map((v) => +v));

console.log(input);
let sumInput = [];
let sum = 0;
input[1].forEach((item) => {
  sum += item;
  sumInput.push(sum);
});
console.log(sumInput);
sumInput.unshift(0);
console.log(sumInput);
let result = "";
for (let i = 2; i < input.length; i++) {
  result += sumInput[input[i][1]] - sumInput[input[i][0] - 1] + "\n";
}
console.log(result.trim());
// let sum = 0;
// let result = "";
// for (let i = 2; i < input.length; i++) {
//   for (let j = input[i][0]; j <= input[i][1]; j++) {
//     sum += input[1][j - 1];
//   }
//   result += `${sum}\n`;
//   sum = 0;
// }
// console.log(result.trim());
