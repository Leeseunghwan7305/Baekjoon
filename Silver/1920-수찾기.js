let fs = require("fs");
let input = fs.readFileSync("../text.txt").toString().trim().split("\r\n");
const arr = input[1].split(" ").map((i) => +i);
const diffArr = input[3].split(" ").map((i) => +i);

// let setArr = new Set(arr);
// let result = [];
// diffArr.forEach((e) => {
//   if (setArr.has(e)) {
//     result.push(1);
//   } else {
//     result.push(0);
//   }
// });
// console.log(result.join("\n"));

let mapArr = new Map();

for (let i = 0; i < arr.length; i++) {
  mapArr.set(arr[i], 1);
}

let result = [];
diffArr.forEach((e) => {
  if (mapArr.has(e)) {
    result.push(1);
  } else {
    result.push(0);
  }
});
console.log(result.join("\n"));
