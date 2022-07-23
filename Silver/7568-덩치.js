const { time } = require("console");

const [n, ...arr] = require("fs")
  .readFileSync("../text.txt")
  .toString()
  .trim()
  .split("\r\n");

let newArr = arr.map((item) => item.split(" ").map((i) => +i));

let result = "";
for (let i = 0; i < newArr.length; i++) {
  let rank = 1;
  for (let j = 0; j < newArr.length; j++) {
    if (newArr[i][0] < newArr[j][0] && newArr[i][1] < newArr[j][1]) {
      rank++;
    }
  }
  result += rank + " ";
}

console.log(result.trim());
