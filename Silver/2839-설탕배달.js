let fs = require("fs");
let input = fs.readFileSync("../text.txt").toString();

let num = 0;
let num2 = 0;
function result(sugar) {
  while (1) {
    if (sugar % 5 == 0) {
      num = sugar / 5;
      console.log(num + num2);
      break;
    }

    if (sugar < 0) {
      console.log(-1);
      break;
    }
    sugar = sugar - 3;
    num2++;
  }
}

result(input);
