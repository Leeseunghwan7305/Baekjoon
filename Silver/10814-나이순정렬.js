const input = require("fs")
  .readFileSync("../text.txt")
  .toString()
  .trim()
  .split("\r\n");

const len = input.shift();

let newResult = input
  .map((item) => item.split(" "))
  .sort((a, b) => {
    return a[0] - b[0];
  });

for (let i = 0; i < newResult.length; i++) {
  console.log(newResult[i].join(" "));
}
