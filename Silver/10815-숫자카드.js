let input = require("fs")
  .readFileSync("../text.txt")
  .toString()
  .trim()
  .split("\n");

let N = Number(input[0]);
let ownedCard = input[1].split(" ").map(Number);
let M = Number(input[2]);
let card = input[3].split(" ").map(Number);
let arr = [];

let mapC = new Map();

for (let i = 0; i < card.length; i++) {
  mapC.set(card[i], 0);
}
let result = "";
for (let i = 0; i < card.length; i++) {
  if (mapC.has(ownedCard[i])) {
    mapC.set(ownedCard[i], mapC.get(ownedCard[i]) + 1);
  }
}

for (let [a, b] of mapC) {
  result += b + " ";
}
console.log(result.trim());
