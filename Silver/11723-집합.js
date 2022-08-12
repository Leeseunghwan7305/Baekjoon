let input = require("fs")
  .readFileSync("../text.txt")
  .toString()
  .trim()
  .split("\r\n");

let [a, ...arr] = input;
let list = Array.from({ length: 21 }, () => 0);
let result = "";
for (let i = 0; i < arr.length; i++) {
  let str = arr[i].split(" ");

  if (str[0] == "add") {
    list[str[1]] = 1;
  }

  if (str[0] == "check") {
    result += list[str[1]] + "\n";
  }

  if (str[0] == "toggle") {
    if (list[str[1]]) {
      list[str[1]] = 0;
    } else {
      list[str[1]] = 1;
    }
    // list[str[1]] ? (list.str1 = 0) : (list.str1 = 1);
  }

  if (str[0] == "empty") {
    list = list.map((i) => 0);
  }

  if (str[0] == "all") {
    list = list.map((i) => 1);
  }

  if (str[0] == "remove") {
    list[str[1]] = 0;
  }
}

console.log(result.trim());
