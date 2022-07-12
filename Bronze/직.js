let fs = require("fs");
let inputs = fs.readFileSync("../text.txt").toString().split("\n");
for (let i = 0; i < inputs.length - 1; i++) {
  let attempt = inputs[i].split(" ").map((num) => Number(num));
  attempt = attempt.sort((a, b) => a - b, 0);
  if (
    Math.pow(attempt[0], 2) + Math.pow(attempt[1], 2) ==
    Math.pow(attempt[2], 2)
  )
    console.log("right");
  else console.log("wrong");
}
