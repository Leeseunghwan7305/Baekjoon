let fs = require("fs");
let input = fs.readFileSync("../text.txt").toString().split("\r\n");

let [a, ...arr] = input;

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

arr.sort();

let result = "";
let number = 0;
for (let i = 1; i < arr.length; i++) {
  if (arr[i] == arr[i - 1]) {
    result += arr[i] + "\n";
    number++;
  }
}
console.log(number);
console.log(result.trim());
