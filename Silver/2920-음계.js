let fs = require("fs");
let input = fs
  .readFileSync("../text.txt")
  .toString()
  .split(" ")
  .map((el) => Number(el));

input = input.join(" ");
let result = "8 7 6 5 4 3 2 1";
let result2 = "1 2 3 4 5 6 7 8";

if (input == result) {
  console.log("descending");
} else if (input == result2) {
  console.log("ascending");
} else {
  console.log("mixed");
}
