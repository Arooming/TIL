const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr = [];

rl.on("line", (input) => {
  arr = input.split(" ").map((num) => parseInt(num));
});

rl.on("close", () => {
  if (arr[0] < arr[1]) {
    console.log("B");
  } else if (arr[0] > arr[1]) {
    console.log("A");
  } else if (arr[0] === arr[1]) {
    console.log("same");
  }

  process.exit();
});
