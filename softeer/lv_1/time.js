const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr = [];
let result = 0;

rl.on("line", (input) => {
  const minute = input
    .split(" ")
    .map(
      (time) => parseInt(time.split(":")[0] * 60) + parseInt(time.split(":")[1])
    );
  arr = [...arr, minute];
});

rl.on("close", () => {
  for (let i = 0; i < arr.length; i++) {
    result += arr[i][1] - arr[i][0];
  }

  console.log(result);

  process.exit();
});
