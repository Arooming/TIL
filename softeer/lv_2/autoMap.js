const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N = 0;

rl.on("line", (input) => {
  N = parseInt(input);
});

rl.on("close", () => {
  let sum = 2;

  for (let i = 0; i < N; i++) {
    sum += 2 ** i;
  }

  console.log(sum ** 2);

  process.exit();
});
