let input = require("fs")
  .readFileSync("../text.txt")
  .toString()
  .trim()
  .toLowerCase();

let linput = input.toLocaleUpperCase();
let mapC = new Map();

for (let i = 0; i < linput.length; i++) {
  if (mapC.has(linput[i])) {
    mapC.set(linput[i], mapC.get(linput[i]) + 1);
  } else {
    mapC.set(linput[i], 1);
  }
}

let count = 0;
let max = 0;
let result = "";
for (let [a, b] of mapC) {
  if (max < b) {
    max = b;
    result = a;
  }
}
for (let [a, b] of mapC) {
  if (b == max) {
    count++;
  }
  if (count > 1) {
    console.log("?");
    return;
  }
}
console.log(result);
