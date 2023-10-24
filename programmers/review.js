// 게임 맵 최단거리
function solution(maps) {
  let queue = [];
  let visited = Array(maps.length)
    .fill(0)
    .map(() => Array(maps[0].length).fill(0));

  const n = maps.length;
  const m = maps[0].length;

  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];

  // 첫번째 정점을 큐에 넣기
  queue.push([0, 0]);
  // 첫번째 정점에 대한 방문 처리
  visited[0][0] = 1;

  while (queue.length) {
    let [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      if (nx >= n || ny >= m || nx < 0 || ny < 0) {
        continue;
      }

      if (maps[nx][ny] === 0) {
        continue;
      }

      if (!visited[nx][ny]) {
        visited[nx][ny] = 1;
        queue.push([nx, ny]);
        maps[nx][ny] = maps[x][y] + 1;
      }
    }
  }

  return maps[n - 1][m - 1] === 1 ? -1 : maps[n - 1][m - 1];
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
