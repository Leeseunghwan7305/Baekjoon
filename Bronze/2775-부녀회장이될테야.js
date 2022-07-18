const fs = require("fs");
const input = fs.readFileSync("../text.txt").toString().trim().split("\r\n");
const T = Number(input.shift());
let numInput = input.map((i) => +i);
for (let z = 0; z < numInput.length; z += 2) {
  let arr = Array.from(Array(numInput[z] + 1), () =>
    Array(numInput[z + 1] + 1).fill(0)
  );

  arr[0] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (j == 0) arr[i][j] = arr[i - 1][j];
      else {
        arr[i][j] = arr[i - 1][j] + arr[i][j - 1];
      }
    }
  }
  console.log(arr[numInput[z]][numInput[z + 1] - 1]);
}
