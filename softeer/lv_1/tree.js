const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr = [];

rl.on("line", (input) => {
  arr = input.split(" ").map((num) => +num);
});

rl.on("close", () => {
  const sorted_arr = arr.sort((a, b) => b - a);
  const last_idx = sorted_arr.length - 1;
  const front_value = sorted_arr[0] * sorted_arr[1];
  const back_value = sorted_arr[last_idx] * sorted_arr[last_idx - 1];

  const answer = front_value > back_value ? front_value : back_value;

  console.log(answer === 0 ? 0 : answer);

  process.exit();
});
