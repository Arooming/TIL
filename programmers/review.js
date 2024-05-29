// 게임 맵 최단거리
function solution(maps) {
  const N = maps.length;
  const M = maps[0].length;
  const visited = Array(N)
    .fill(0)
    .map(() => Array(M).fill(0));
  const queue = [];
  let dist = maps;
  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];

  visited[0][0] = 1;
  queue.push([0, 0]);

  while (queue.length) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || ny < 0 || nx >= N || ny >= M) {
        continue;
      }
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

  return dist[N - 1][M - 1] === 1 ? -1 : dist[N - 1][M - 1];
}
