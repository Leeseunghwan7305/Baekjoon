const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
n = input[0];
let list = input[1].split(" ");
list = list.map((x) => Number(x));
const stack = [];

for (let i = 0; i < list.length; i++) {
  while (stack.length && list[stack[stack.length - 1]] < list[i]) {
    list[stack.pop()] = list[i];
  }
  stack.push(i);
}

while (stack.length) {
  list[stack.pop()] = -1;
}

console.log(list.join(" "));
