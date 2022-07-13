const [n, ...coords] = require("fs")
  .readFileSync("../text.txt")
  .toString()
  .trim()
  .split("\r\n")
  .map((i) => {
    return i.split(" ");
  });

for (let i = 0; i < n; i++) {
  for (let j = 0; j < coords[i].length; j++) {
    coords[i][j] = +coords[i][j];
  }
}
coords.sort((a, b) => {
  if (a[0] == b[0]) {
    return a[1] - b[1];
  } else {
    return a[0] - b[0];
  }
});
let result = "";
for (let i = 0; i < n; i++) {
  result += `${coords[i][0]} ${coords[i][1]}\n`;
}
console.log(result);
