const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("close", () => {
  console.log("엄마 아빠 사랑해요!");

  process.exit();
});
