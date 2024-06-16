const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr = [];

rl.on("line", (input) => {
  arr = input.split(" ").map((dist) => +dist);
  arr.sort((a, b) => b - a);
});

rl.on("close", () => {
  const subtract = [];
  for (let i = 0; i < arr.length - 1; i++) {
    subtract.push(arr[i] - arr[i + 1]);
  }

  const minValue = Math.min(...subtract);
  let cnt = 0;
  subtract.map((sub) => {
    if (sub === minValue) {
      cnt++;
    }
  });

  console.log(cnt);

  process.exit();
});
