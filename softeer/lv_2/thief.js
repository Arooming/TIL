// 배당은 W kg까지 담을 수 있음
// 가장 값비싼 가격 구한기
// 귀금속을 톱으로 자르면 잘려진 부분의 무게만큼 가치를 가짐
// 첫 번째 줄 : 배낭의 무게 W, 귀금속의 종류 N
// i + 1번째 줄: i번째 귀금속의 무게, 무게당 가격

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = "";

rl.on("line", (line) => {
  // 여기랑
  input += line + "\n";
});

rl.on("close", () => {
  // 여기 이렇게 처리 안하면 시간초과 나서 통과 안됨 !!!
  // trim(): 문자열 양 끝의 공백을 제거하고 원본 문자열을 수정하지 않고 새로운 문자열 반환
  const arr = input
    .trim()
    .split("\n")
    .map((line) => line.split(" ").map(Number));
  const W = arr[0][0];
  const N = arr[0][1];

  let weight = W;
  let price = 0;

  const goldArr = arr.slice(1).sort((a, b) => b[1] - a[1]);

  let i = 0;

  while (weight !== 0 && i < N) {
    if (goldArr[i][0] <= weight) {
      price += goldArr[i][0] * goldArr[i][1];
      weight -= goldArr[i][0];
    } else {
      price += weight * goldArr[i][1];
      weight = 0;
    }

    i += 1;
  }

  console.log(price);

  process.exit();
});
