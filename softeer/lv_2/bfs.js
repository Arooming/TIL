// 1이 장애물 (갈 수 없음), 0이 도로 (갈 수 있음)
// 첫 번째 줄 출력: 장애물 덩어리의 수
// 이후 출력: 장애물 자체의 수 오름차순 정렬
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr = [];

rl.on("line", (input) => {
  const map = input.split("").map((v) => +v);
  arr = [...arr, map];
});

rl.on("close", () => {
  const N = +arr[0][0];
  let visited = Array(N)
    .fill(0)
    .map(() => Array(N).fill(0));
  const queue = [];

  let maps = arr.slice(1);
  const answer = [];

  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];

  function bfs(x, y) {
    let cnt = 1;
    queue.push([x, y]);
    visited[x][y] = 1;

    while (queue.length) {
      const [x, y] = queue.shift();

      for (let i = 0; i < 4; i++) {
        const nx = dx[i] + x;
        const ny = dy[i] + y;

        if (nx >= 0 && nx < N && ny >= 0 && ny < N) {
          if (maps[nx][ny] === 1 && !visited[nx][ny]) {
            queue.push([nx, ny]);
            visited[nx][ny] = 1;
            cnt += 1;
          }
        }
      }
    }
    answer.push(cnt);
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (maps[i][j] === 1 && !visited[i][j]) {
        bfs(i, j);
      }
    }
  }
  answer.sort();

  console.log(answer.length);
  for (let i = 0; i < answer.length; i++) {
    console.log(answer[i]);
  }
  process.exit();
});
