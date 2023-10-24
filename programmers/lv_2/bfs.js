// 게임 맵 최단거리
function solution(maps) {
  // 정점을 넣을 배열
  let queue = [];

  // maps의 크기만큼 0으로 채워넣은 2차원 배열
  let visited = Array(maps.length)
    .fill(0)
    .map(() => Array(maps[0].length).fill(0));

  // 최단 거리를 나타낼 배열
  let dist = maps;

  const n = maps.length;
  const m = maps[0].length;

  // 상하좌우 탐색 시, 사용할 배열
  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];

  queue.push([0, 0]);
  visited[0][0] = true;

  while (queue.length) {
    // 큐에 맵 시작 정점 넣기
    let [x, y] = queue.shift();

    // 상하좌우 탐색
    for (let i = 0; i < 4; i++) {
      // 다음 정점 = 현재 정점 + 상하/좌우 한 칸씩 이동
      let nx = x + dx[i];
      let ny = y + dy[i];

      // maps의 범위를 벗어난 경우 예외처리
      if (nx < 0 || ny < 0 || nx >= n || ny >= m) {
        continue;
      }

      // 벽에 부딪힌 경우 예외처리 - 반드시 범위에 대한 예외처리 후에 처리해줄 것 !!
      // 벽에 부딪힌 경우에 대한 예외처리를 범위에 대한 예외처리보다 먼저 해줄 경우, 범위를 벗어난 maps[nx][ny]는 unddefined를 뱉기 때문에 에러 발생!
      if (maps[nx][ny] === 0) {
        continue;
      }

      // 이동할 수 있는 경우(아직 방문하지 않은 위치인 경우)
      if (!visited[nx][ny]) {
        // 방문 체크
        visited[nx][ny] = 1;
        // 큐에 해당 정점 넣기 -> 이 정점에 대해 방문했음을 저장!
        queue.push([nx, ny]);
        // 다음 정점의 최단거리 = 현재 정점의 최단거리 + 1
        dist[nx][ny] = dist[x][y] + 1;
      }
    }
  }

  // 상대 팀 진영에 도착하지 못한 경우(지나갈 수 있는 칸이 없는 경우), -1 반환
  // 상대 팀 진영에 도착할 수 있는 경우, 최단 거리 반환
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
