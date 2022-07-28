let fs = require("fs");
let input = fs.readFileSync("../text.txt").toString().split("\r\n");

let x = input.map((i) => i.split(" ")[0]);
let y = input.map((i) => i.split(" ")[1]);

let result = "";
if (x[0] == x[1]) {
  result += x[2] + " ";
} else if (x[1] == x[2]) {
  result += x[0] + " ";
} else {
  result += x[1] + " ";
}
if (y[0] == y[1]) {
  result += y[2] + " ";
} else if (y[1] == y[2]) {
  result += y[0] + " ";
} else {
  result += y[1] + " ";
}
console.log(result.trim());
