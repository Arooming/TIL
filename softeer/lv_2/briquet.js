// 난로의 반지름 길이가 연탄 반지름 길이의 배수인 집에서만 연탄 사용 가능
// n: 집의 수
// 두 번째 줄: 난로 반지름의 길이
// 연탄 반지름 길이를 설정하여 최대한 많은 집에서 연탄 사용 가능하도록
// 연탄 사용가능한 집의 수를 최대로

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = "";

rl.on("line", (line) => {
  input += line + "\n";
});

rl.on("close", () => {
  const inputArr = input
    .trim()
    .split("\n")
    .map((line) => line.split(" ").map(Number));

  const n = inputArr[0][0];
  const arr = inputArr[1].sort((a, b) => a - b);
  let answer = [];

  for (let i = 2; i <= 100; i++) {
    let cnt = 0;
    for (let j = 0; j < n; j++) {
      if (arr[j] % i === 0) cnt++;
    }
    answer.push(cnt);
  }

  console.log(Math.max(...answer));

  process.exit();
});
