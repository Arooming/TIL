// 구간의 총 합: 100m
// N개의 줄: 각 구간의 길이 및 해당 구간에서의 제한 속도
// M개의 줄: 광우가 테스트하는 구간의 길이와 속도
// 광우가 테스트하는 동안 제한속도가 가장 크게 벗어난 값 출력, 벗어나지 않은 경우 0 출력

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr = [];

rl.on("line", (input) => {
  const num = input.split(" ").map((v) => +v);
  arr.push(num);
});

rl.on("close", () => {
  const N = arr[0][0];
  const M = arr[0][1];

  const limit = arr.slice(1, N + 1);
  const test = arr.slice(N + 1);

  // 제한 속도를 넣을 배열
  const limitInfo = Array(101).fill(0);
  let now = 1;

  for (let i = 0; i < N; i++) {
    // 제한 구간, 속도
    let [section, speed] = limit[i];
    // now + section: 1 + 제한 구간
    for (let j = now; j < now + section; j++) {
      limitInfo[j] = speed;
    }
    // 다음 제한 구간으로 넘어가기 위해 현재까지 있던 구간 값 더하기
    now += section;
  }

  let result = 0;
  // 현재 인덱스를 다시 1로 초기화
  now = 1;

  for (let i = 0; i < M; i++) {
    // 테스트 구간, 속도
    let [section, speed] = test[i];
    // now + section: 1 + 테스트 구간
    for (let j = now; j < now + section; j++) {
      // speed - limitInfo[j]: 테스트 속도 - 현재 구간의 제한 속도
      result = Math.max(result, speed - limitInfo[j]);
    }
    // 다음 제한 구간으로 넘어가기 위해 현재까지 있던 구간 값 더하기
    now += section;
  }

  console.log(result);
  process.exit();
});
