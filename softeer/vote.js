const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr = [];

rl.on("line", (input) => {
  const number = parseInt(input.split(" "));
  arr = [...arr, number];
});

rl.on("close", () => {
  const T = arr[0];

  for (let i = 1; i <= T; i++) {
    console.log(
      "++++ ".repeat(parseInt(arr[i] / 5)),
      "|".repeat(parseInt(arr[i] % 5))
    );
  }

  process.exit();
});
