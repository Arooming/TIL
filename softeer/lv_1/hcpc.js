const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr = [];

rl.on("line", (input) => {
  const num = input.split(" ").map((v) => +v);
  arr = [...arr, num];
});

rl.on("close", () => {
  const N = arr[0][0];
  const sum = [];

  for (let i = 1; i <= N; i++) {
    sum.push(arr[i][0] + arr[i][1]);
  }

  const idx = sum.indexOf(Math.min(...sum));

  console.log(arr[idx + 1].join(" "));

  process.exit();
});
