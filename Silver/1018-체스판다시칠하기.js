let fs = require("fs");
let input = fs.readFileSync("../text.txt").toString().trim().split("\r\n");

let shift = input.shift();
shift = shift.split(" ").map((item) => +item);

let row = shift[0];
let col = shift[1];
console.log(row, col);
function board(row, col) {
  const visited = [];
  for (let i = 0; i < row; i++) {
    const temp = [];
    for (let j = 0; j < col; j++) {
      if (input[i][j] == "W") {
        temp.push(1);
      } else {
        temp.push(0);
      }
    }
    visited.push(temp);
  }
  return visited;
}

function myboard(row, col) {
  const visited = [];
  for (let i = 0; i < row; i++) {
    const temp = [];
    for (let j = 0; j < col; j++) {
      if (i % 2 == 0 && j % 2 == 0) {
        temp.push(1);
      } else if (i % 2 == 0 && j % 2 == 1) {
        temp.push(0);
      } else if (i % 2 == 1 && j % 2 == 0) {
        temp.push(0);
      } else {
        temp.push(1);
      }
    }
    visited.push(temp);
  }
  return visited;
}

function mySecondBoard(row, col) {
  const visited = [];
  for (let i = 0; i < row; i++) {
    const temp = [];
    for (let j = 0; j < col; j++) {
      if (i % 2 == 0 && j % 2 == 0) {
        temp.push(0);
      } else if (i % 2 == 0 && j % 2 == 1) {
        temp.push(1);
      } else if (i % 2 == 1 && j % 2 == 0) {
        temp.push(1);
      } else {
        temp.push(0);
      }
    }
    visited.push(temp);
  }
  return visited;
}
console.log(board(row, col));
let min = 999;
let diff = 0;
let secondDiff = 0;
let myOneboard = myboard(8, 8);
let myTwoBoard = mySecondBoard(8, 8);
for (let i = 8; i <= row; i++) {
  for (let j = 8; j <= col; j++) {
    diff = 0;
    secondDiff = 0;
    let diffboard = board(i, j);
    for (let z = 0; z < 8; z++) {
      for (let a = 0; a < 8; a++) {
        if (diffboard[z + i - 8][a + j - 8] != myOneboard[z][a]) {
          diff++;
        }
        if (diffboard[z + i - 8][a + j - 8] != myTwoBoard[z][a]) {
          secondDiff++;
        }
      }
    }

    min = Math.min(min, diff, secondDiff);
  }
}
console.log(min);
