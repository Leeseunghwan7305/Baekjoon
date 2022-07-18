let fs = require("fs");
let input = fs.readFileSync("../text.txt").toString().trim().split("\r\n");
input.pop();

let beInput = input.map((i) => i.split("").reverse().join(""));
for (let i = 0; i < input.length; i++) {
  if (input[i] == beInput[i]) console.log("yes");
  else {
    console.log("no");
  }
}
