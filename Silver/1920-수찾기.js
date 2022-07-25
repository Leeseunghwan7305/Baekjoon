let fs = require("fs");
let input = fs.readFileSync("../text.txt").toString().trim().split("\r\n");

let one = input[1].split(" ").sort((a, b) => a - b);

let two = input[3].split(" ");
two.forEach((i) => {
  let lt = 0;
  let rt = one.length;
  let flag = 0;
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);

    if (i === one[mid]) {
      flag = 1;
      break;
    } else if (i < one[mid]) {
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }
  console.log(flag);
});
