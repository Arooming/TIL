// 게임 맵 최단거리
function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;

  const dist = maps;
  const queue = [];
  const visited = Array(n)
    .fill(0)
    .map(() => Array(m).fill(0));

  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];

  queue.push([0, 0]);
  visited[0][0] = true;

  while (queue.length) {
    const [x, y] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const nx = dx[i] + x;
      const ny = dy[i] + y;

      if (nx < 0 || ny < 0 || nx >= n || ny >= m) {
        continue;
      }

      if (maps[nx][ny] === 0) {
        continue;
      }

      if (!visited[nx][ny]) {
        queue.push([nx, ny]);
        visited[nx][ny] = true;
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
