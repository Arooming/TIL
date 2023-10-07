// 게임 맵 최단거리
function solution(maps) {
  let queue = [];
  let visited = Array(maps.length)
    .fill(0)
    .map(() => Array(maps[0].length).fill(0));
  let dist = maps;

  const n = maps.length;
  const m = maps[0].length;
  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];

  queue.push([0, 0]);
  visited[0][0] = 1;

  while (queue.length) {
    let [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      if (nx < 0 || ny < 0 || nx >= n || ny >= m) {
        continue;
      }

      // 반드시 범위체크를 먼저하고 벽에 부딪혔는지 여부 체크할 것!
      // 범위체크를 하지 않고 벽에 부딪혔는지부터 체크하면 에러 발생함;
      if (maps[nx][ny] === 0) {
        continue;
      }

      if (!visited[nx][ny]) {
        queue.push([nx, ny]);
        visited[nx][ny] = 1;
        dist[nx][ny] = dist[x][y] + 1;
      }
    }
  }

  return dist[n - 1][m - 1] === 1 ? -1 : dist[n - 1][m - 1];
}

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
);

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1],
  ])
);
