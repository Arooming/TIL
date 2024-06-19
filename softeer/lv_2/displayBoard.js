// 만의 자리에 해당하는 전구들은 모두 꺼져있음
// 최대 다섯 자리 자연수 표시 (7 * 5 = 35개)
// on -> 스위치 -> off/ off -> 스위치 -> on
// 해결할 테스트 케이스의 수: T
// 자연수 A를 B로 바꿀 때, 스위치를 최소 몇 번 눌러야 하는지 구하기
// 숫자는 0으로 시작하지 않음

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 각 전구마다 인덱스를 부여해서 전구가 켜진 곳은 1, 전구가 꺼진 곳은 0으로 표시
// _인 경우 켜진 전구가 없는 것이므로 모두 0으로 채워진 배열을 만들어둠 (가장 마지막 인덱스)
const index = [
  [1, 1, 1, 0, 1, 1, 1],
  [0, 0, 1, 0, 0, 1, 0],
  [1, 0, 1, 1, 1, 0, 1],
  [1, 0, 1, 1, 0, 1, 1],
  [0, 1, 1, 1, 0, 1, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1],
  [1, 1, 1, 0, 0, 1, 0],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 1, 1],
  [0, 0, 0, 0, 0, 0, 0],
];

let arr = [];

rl.on("line", (input) => {
  let num = input.split(" ");
  arr = [...arr, num];
});

rl.on("close", () => {
  const T = arr[0][0];

  for (let i = 1; i <= T; i++) {
    let cnt = 0;

    // 첫 번째 숫자가 5자리가 아닌 경우
    if (arr[i][0].length !== 5) {
      // 맨 앞부터 빈 자리 채워서 5자리 만들기
      arr[i][0] = arr[i][0].padStart(5, "_");
    }

    // 두 번 째 숫자가 5자리가 아닌 경우
    if (arr[i][1].length !== 5) {
      // 맨 앞부터 빈 자리 채워서 5자리 만들기
      arr[i][1] = arr[i][1].padStart(5, "_");
    }

    for (let j = 0; j < 5; j++) {
      // 두 숫자가 같은 경우
      if (arr[i][0][j] === arr[i][1][j]) continue;

      // 첫 번째 숫자에 _가 포함된 경우
      if (arr[i][0][j] === "_") {
        index[10].map((v, idx) => {
          if (index[arr[i][1][j]][idx] !== v) cnt++;
        });
      }

      // 두 번째 숫자에 _가 포함된 경우
      else if (arr[i][1][j] === "_") {
        index[10].map((v, idx) => {
          if (index[arr[i][0][j]][idx] !== v) cnt++;
        });
      }

      // 모든 숫자에 _가 포함되지 않은 경우
      else if (arr[i][0][j] !== "_" && arr[i][1][j] !== "_") {
        index[arr[i][0][j]].map((v, idx) => {
          if (index[arr[i][1][j]][idx] !== v) cnt++;
        });
      }
    }

    console.log(cnt);
  }

  process.exit();
});
