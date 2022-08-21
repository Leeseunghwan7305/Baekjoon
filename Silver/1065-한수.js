const fs = require("fs");
const input = fs.readFileSync("../text.txt").toString().trim();

let input2 = +input;
let num = 0;
for (let i = 1; i <= input2; i++) {
  let newI = i.toString();
  newI = newI.split("");
  if (newI.length == 3) {
    if (newI[0] - newI[1] == newI[1] - newI[2]) num++;
  }

  if (newI.length == 2) {
    num++;
  }
  if (newI.length == 1) {
    num++;
  }
}

console.log(num);
