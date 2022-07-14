const input = +require("fs").readFileSync("../text.txt").toString().trim();

console.log(input);

if (input % 2 == 0) {
  console.log("CY");
} else {
  console.log("SK");
}
