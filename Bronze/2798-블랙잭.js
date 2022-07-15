const fs = require("fs");
const inputs = fs.readFileSync("../text.txt").toString().split("\r\n");

const firstLine = inputs[0].split(" ");
const secondLine = inputs[1].split(" ").map((el) => parseInt(el));

let max = 0;
for (let i = 0; i < secondLine.length; i++) {
  for (let j = i + 1; j < secondLine.length; j++) {
    for (let z = j + 1; z < secondLine.length; z++) {
      if (
        secondLine[i] + secondLine[j] + secondLine[z] <=
        Number(firstLine[1])
      ) {
        if (max < secondLine[i] + secondLine[j] + secondLine[z]) {
          max = secondLine[i] + secondLine[j] + secondLine[z];
        }
      }
    }
  }
}
console.log(max);
