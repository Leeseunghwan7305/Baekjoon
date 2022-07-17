let input = require("fs").readFileSync("../text.txt").toString().split("\n");

let num = String(input[0] * input[1] * input[2]);

let nums = num.split("").map((i) => +i);
let arr = Array.from({ length: 10 }, () => 0);
for (let i = 0; i < nums.length; i++) {
  arr[nums[i]]++;
}
console.log(arr.join("\n"));
