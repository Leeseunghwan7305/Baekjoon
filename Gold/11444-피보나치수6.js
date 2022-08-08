let input = require("fs").readFileSync("../text.txt").toString().trim();

let number = +input;

let arr = Array.from({ length: 100000000000000000 }, () => 0);
console.log(arr);
