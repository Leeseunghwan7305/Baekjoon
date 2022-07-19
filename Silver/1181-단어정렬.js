let [n, ...words] = require("fs")
  .readFileSync("../text.txt")
  .toString()
  .trim()
  .split("\r\n");

words = [...new Set(words)];
let newWord = words.sort((a, b) => {
  if (a.length === b.length) {
    return a > b ? 1 : -1;
  } else if (a.length > b.length) {
    return 1;
  } else if (a.length < b.length) {
    return -1;
  } else {
    return 0;
  }
});

console.log(newWord.join("\n"));
