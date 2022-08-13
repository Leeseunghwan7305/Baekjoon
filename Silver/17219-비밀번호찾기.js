const [NM, ...input] = require("fs")
  .readFileSync("../text.txt")
  .toString()
  .trim()
  .split("\r\n");
const [N, M] = NM.split(" ").map((v) => +v);

// let input2 = input.map((i) => i.split(" "));

// let result2 = [];
// for (let i = 0; i < M; i++) {
//   let popId = input2.pop();

//   let result = input2.find((i) => {
//     if (i[0] == popId) {
//       return i[1];
//     }
//   });
//   if (result) {
//     result2.push(result[1]);
//   }
//   result = "";
// }
// console.log(result2.reverse().join("\n"));

let input2 = input.map((i) => i.split(" "));

let mapC = new Map();
let result = "";
for (let i = 0; i < input2.length; i++) {
  if (mapC.has(input2[i][0])) {
    result += mapC.get(input2[i][0]) + "\n";
  } else {
    mapC.set(input2[i][0], input2[i][1]);
  }
}
console.log(result.trim());

// const [NM, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// const [N, M] = NM.split(' ').map(v => +v);
// const memos = input.slice(0, N);
// const targets = input.slice(-M);
// const notepad = {};
// const output = [];

// memos.forEach(memo => {
//   const [ address, password ] = memo.split(' ');
//   notepad[address] = password;
// });
// targets.forEach(target => {
//   output.push(notepad[target]);
// });

// console.log(output.join('\n'));
