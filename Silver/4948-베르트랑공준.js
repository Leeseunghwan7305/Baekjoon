const input = require("fs")
  .readFileSync("../text.txt")
  .toString()
  .trim()
  .split("\r\n")
  .map((i) => +i);

input.pop();
let arr = Array.from({ length: 323456 + 1 }, () => true);
//dp 메모라이즈 선언  처음엔 모두 소수가 맞다고 판정

arr[0] = false;
arr[1] = false; //0 과 1은 무조건 소수가 아니다라고 판정

for (let i = 2; i < arr.length; i++) {
  if (!arr[i]) {
    //소수가 아니라면 바로 continue
    continue;
  } else {
    // 소수라면? 처음숫자만 소수처리 그 후 배수는 전부 소수아님 처리
    for (let k = i * 2; k <= arr.length; k += i) {
      arr[k] = false; //소수가 아니다
    }
  }
}
let number = 0;
for (let i = 0; i < input.length; i++) {
  number = 0;
  for (let j = input[i] + 1; j <= input[i] * 2; j++) {
    if (arr[j] === true) {
      number++;
    }
  }
  console.log(number);
}
