const fs = require("fs");
let [a, ...arr] = fs
  .readFileSync("../text.txt")
  .toString()
  .trim()
  .split("\r\n");
for (let i = 0; i < +a; i++) {
  number = +arr.shift();
  let cut = arr.splice(0, number);
  let Rcut = cut.map((i) => i.split(" "));
  let mapC = new Map();
  for (let j = 0; j < number; j++) {
    if (mapC.has(Rcut[j][1])) {
      mapC.set(Rcut[j][1], mapC.get(Rcut[j][1]) + 1);
    } else {
      mapC.set(Rcut[j][1], 1);
    }
  }
  let answer = 1;
  for (let a of mapC.values()) {
    // a에 +1을 해서 곱하는 이유:
    // 예를들어 헤드웨어 종류가 2가지라면 1번 모자, 2번 모자, 그리고 아무것도 안 쓴 경우를 포함해야 해서
    answer *= a + 1;
  }
  console.log(answer - 1);
}
