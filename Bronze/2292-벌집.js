const fs = require("fs");
let input = +fs.readFileSync("../text.txt").toString(); //6 12 18 24 30 36
let diff = 0;
let round = 6;
let count = 1;

i = 0;
diff = input - 1;

while (1) {
  if (diff <= 0) {
    return console.log(count);
  }
  i++;
  diff = diff - round * i;
  count++;
}
