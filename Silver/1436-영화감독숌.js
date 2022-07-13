const n = +require("fs").readFileSync("../text.txt").toString();

let count = 1;
let result = 0;
let i = 666;
while (1) {
  i++;
  if (String(i).includes("666")) {
    count++;
  }
  if (n == count) {
    result = i;
    console.log(result);
    return;
  }
}
