// let fs = require("fs");
// let input = fs.readFileSync("../text.txt").toString();

// let num = 0;
// let num2 = 0;
// function result(sugar) {
//   while (1) {
//     if (sugar % 5 == 0) {
//       num = sugar / 5;
//       console.log(num + num2);
//       break;
//     }

//     if (sugar < 0) {
//       console.log(-1);
//       break;
//     }
//     sugar = sugar - 3;
//     num2++;
//   }
// }

// result(input);

let fs = require("fs");
let input = fs.readFileSync("../text.txt").toString().trim();

let len = Number(input) + 1;
let dy = Array.from({ length: len }, () => Number.MAX_VALUE);

dy[3] = 1;
dy[5] = 1;

for (let i = 6; i < len; i++) {
  if (dy[i - 3] != Number.MAX_VALUE || dy[i - 5] != Number.MAX_VALUE) {
    dy[i] = Math.min(dy[i - 3], dy[i - 5]) + 1;
  }
}
if (dy[input] != Number.MAX_VALUE) {
  console.log(dy[input]);
} else {
  console.log(-1);
}
