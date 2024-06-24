// 땅 하나 당 높이는 1이상 3이하의 정수
// 농사지을 땅의 크기: 1 * 3
// 농사를 짓기 위해서는 해당 영역 내 땅의 높이가 모두 동일해야 함
// 특정 땅의 높이를 높이거나 낮춰 농사를 지을 수 있는 영역이 1개 이상 생기도록 만들어야 함
// 땅의 높이를 높이거나 낮추는데 1만큼의 비용이 소요된다고 할 때, 농사를 짓는데 필요한 최소 비용

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let ground = [];

rl.on("line", (input) => {
  const height = input.split(" ").map((num) => +num);
  ground = [...ground, height];
});

rl.on("close", () => {
  let cnt = 10;

  function calc(a, b, c) {
    let value = a + b + c - Math.min(a, b, c) - Math.max(a, b, c);
    return Math.abs(value - a) + Math.abs(value - b) + Math.abs(value - c);
  }

  for (let i = 0; i < 3; i++) {
    const a = ground[i][0];
    const b = ground[i][1];
    const c = ground[i][2];

    if ((a === b) === c) {
      console.log(0);
      return; 
    } else {
      let tmp = calc(a, b, c);
      cnt = Math.min(cnt, tmp);
    }
  }

  for (let i = 0; i < 3; i++) {
    const a = ground[0][i];
    const b = ground[1][i];
    const c = ground[2][i];

    if ((a === b) === c) {
      console.log(0);
      return;
    } else {
      let tmp = calc(a, b, c);
      cnt = Math.min(cnt, tmp);
    }
  }

  console.log(cnt);

  process.exit();
});
