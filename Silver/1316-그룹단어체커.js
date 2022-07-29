let fs = require("fs");
let input = fs.readFileSync("../text.txt").toString().split("\r\n");

input.shift();
let num = 0;
let arr = [];
input.forEach((list) => {
  list = list.split("");
  for (let j = 0; j < list.length; j++) {
    arr = [];
    let first = list.indexOf(list[j]);
    let last = list.lastIndexOf(list[j]);
    if (first == last) {
      continue;
    }
    for (let i = first; i <= last; i++) {
      arr.push(list[i]);
    }
    let setArr = new Set(arr);
    console.log(setArr);
    if (setArr.size == 1) {
      num++;
      break;
    } else {
      break;
    }
  }
});
console.log(num);
