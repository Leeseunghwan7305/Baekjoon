const input = require("fs")
  .readFileSync("../text.txt")
  .toString()
  .trim()
  .split(/\r\n/);

let n = +input[0].split(" ")[0];
let list = input.slice(1, n + 1);
let findPoket = input.slice(n + 1);

let mapC = new Map(list.map((v, i) => [v, i + 1]));

let result = "";
for (let i = 0; i < findPoket.length; i++) {
  if (Number.isNaN(+findPoket[i])) {
    result += mapC.get(findPoket[i]) + "\n";
  } else {
    result += list[+findPoket[i] - 1] + "\n";
  }
}
console.log(result.trim());
