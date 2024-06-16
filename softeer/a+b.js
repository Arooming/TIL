const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let sum = [];
let arr = [];

rl.on("line", (input) => {
  sum = input
    .split(" ")
    .map((num) => parseInt(num))
    .reduce((acc, cur) => acc + cur, 0);
  arr = [...arr, sum];
});

rl.on("close", () => {
  const T = arr[0];

  for (let i = 1; i <= T; i++) {
    console.log(`Case #${i}: ${arr[i]}`);
  }

  process.exit();
});
