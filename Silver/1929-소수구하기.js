let fs = require("fs");
let input = fs
  .readFileSync("../text.txt")
  .toString()
  .trim()
  .split(" ")
  .map((i) => +i);

console.log(input);

let [a, b] = input;

// for (let i = a; i <= b; i++) {
//   let flag = 1;
//   for (j = 2; j < i; j++) {
//     if (i % j == 0) {
//       flag = 0;
//       break;
//     }
//   }
//   if (flag) {
//     console.log(i);
//   }
// }

let arr = Array.from({ length: b + 1 }, () => true);

arr[0] = false;
arr[1] = false;
for (let i = 2; i <= arr.length; i++) {
  if (!arr[i]) {
    continue;
  } else {
    for (let k = i * 2; k <= arr.length; k += i) {
      arr[k] = false;
    }
  }
}
for (let i = a; i <= b; i++) {
  if (arr[i] == true) {
    console.log(i);
  }
}
