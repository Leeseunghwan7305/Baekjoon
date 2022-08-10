const input = require("fs")
  .readFileSync("../text.txt")
  .toString()
  .trim()
  .split("\r\n");

let print = input.map((i) => i.split(" ").map((i) => +i));

let [a, ...arr] = print;

for (let i = 0; i < arr.length; i += 2) {
  let L = arr[i][1]; // 이 위치에 있는걸 뽑아야함
  let num = 0;
  while (1) {
    let pre = arr[i + 1][0];

    if (pre == Math.max(...arr[i + 1]) && L == 0) {
      arr[i + 1].shift();
      num++;
      console.log(num);
      break;
    } else if (pre == Math.max(...arr[i + 1]) && L != 0) {
      arr[i + 1].shift();
      num++;
      L = L - 1;
    } else if (pre != Math.max(...arr[i + 1]) && L == 0) {
      arr[i + 1].shift();
      arr[i + 1].push(pre);

      L = arr[i + 1].length - 1;
    } else if (pre != Math.max(...arr[i + 1]) && L != 0) {
      arr[i + 1].shift();
      arr[i + 1].push(pre);

      L = L - 1;
    }
  }
}
