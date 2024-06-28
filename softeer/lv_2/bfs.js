// 1인 곳으로만 지나갈 수 있음
// 상하좌우 탐색
// 장애물 블록 수 출력, 각 블록에 속하는 장애물의 수를 오름차순으로 정렬

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
    .map((line) => line.split(" "));

  const N = +inputArr[0][0];
  const arr = inputArr.slice(1).map((v) => String(v).split("").map(Number));
  const visited = new Array(N).fill(0).map(() => new Array(N).fill(0));

  const result = [];

  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];

  function bfs(x, y) {
    const queue = [];
    let cnt = 1;

    queue.push([x, y]);
    visited[x][y] = 1;

    while (queue.length) {
      const [x, y] = queue.shift();

      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (nx < 0 || nx >= N || ny < 0 || ny >= N) {
          continue;
        }

        if (arr[nx][ny] === 0) {
          continue;
        }

        if (!visited[nx][ny]) {
          queue.push([nx, ny]);
          visited[nx][ny] = 1;
          cnt += 1;
        }
      }
    }
    result.push(cnt);
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (arr[i][j] === 1 && !visited[i][j]) {
        bfs(i, j);
      }
    }
  }
  result.sort((a, b) => a - b);
  console.log(result.length);

  result.map((v) => console.log(v));

  process.exit();
});
