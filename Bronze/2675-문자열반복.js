let fs = require("fs");
let input = fs.readFileSync("../text.txt").toString().trim().split("\n");

input.shift();

let result = "";
for (let i = 0; i < input.length; i++) {
  let [count, str] = input[i].split(" ");
  for (let j = 0; j < str.length; j++) {
    for (let z = 0; z < count; z++) {
      result += str[j];
    }
  }
  console.log(result);
  result = "";
}
