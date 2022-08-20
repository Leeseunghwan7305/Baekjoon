let fs = require("fs");
let input = fs.readFileSync("../text.txt").toString().split("\r\n");

let [a, ...arr] = input;

let mapC = new Map();
arr.sort();
for (let a of arr) {
  if (mapC.has(a)) {
    mapC.set(a, mapC.get(a) + 1);
  } else {
    mapC.set(a, 1);
  }
}
let result = "";
let num = 0;
for (let [a, b] of mapC) {
  if (b > 1) {
    num++;
    result += a + "\n";
  }
}
console.log(num);
console.log(result.trim());
// let listen = "";
// for (let i = 0; i < +a[0]; i++) {
//   listen += arr[i] + " ";
// }
// let look = "";
// let number = 0;
// for (let j = +a[0]; j < +a[0] + +a[2]; j++) {
//   if (listen.includes(arr[j])) {
//     look += arr[j] + "\n";
//     number++;
//   }
// }
// console.log(number);
// console.log(
//   look
//     .trim()
//     .split("\n")
//     .sort((a, b) => a - b)
//     .join("\n")
// );

// arr.sort();

// let result = "";
// let number = 0;
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] == arr[i - 1]) {
//     result += arr[i] + "\n";
//     number++;
//   }
// }
// console.log(number);
// console.log(result.trim());
