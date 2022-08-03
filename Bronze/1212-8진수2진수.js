let fs = require("fs");
let inputs = fs.readFileSync("../text.txt").toString().trim();
let result = "";
while (inputs.length !== 0) {
  if (inputs.length > 1) {
    result =
      parseInt(inputs.slice(inputs.length - 1), 8)
        .toString(2)
        .padStart(3, "0") + result;
  } else {
    result = parseInt(inputs.slice(inputs.length - 1), 8).toString(2) + result;
  }
  inputs = inputs.slice(0, inputs.length - 1);
}
console.log(result);
