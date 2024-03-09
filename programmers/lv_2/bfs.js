// 게임 맵 최단거리
function solution(maps) {
  const N = maps.length;
  const M = maps[0].length;
  let queue = [];

  // 방문 체크용 배열
  let visited = Array(N)
    .fill(0)
    .map(() => Array(M).fill(0));

  // 최단거리 계산용 배열
  let dist = maps;

  const rx = [0, 0, -1, 1];
  const ry = [-1, 1, 0, 0];

  // 정점 방문
  queue.push([0, 0]);
  // 방문했음을 체크
  visited[0][0] = true;

  while (queue.length) {
    // 현재 정점 꺼내기
    let [x, y] = queue.shift();

    // 상하좌우 탐색
    for (let i = 0; i < 4; i++) {
      const nx = x + rx[i];
      const ny = y + ry[i];

      // 예외처리 - 맵 밖으로 나가는 경우
      if (nx < 0 || ny < 0 || nx >= N || ny >= M) {
        continue;
      }

      // 예외처리 - 벽을 만난 경우
      if (maps[nx][ny] === 0) {
        continue;
      }

      // 방문처리가 되지 않은 경우 (방문하지 않은 정점)
      if (!visited[nx][ny]) {
        visited[nx][ny] = true;
        // 방문한 정점을 큐에 넣기
        queue.push([nx, ny]);
        // 다음 정점의 최단거리 구하기
        dist[nx][ny] = dist[x][y] + 1;
      }
    }
  }

  // 최단거리 = dist 배열의 마지막 인덱스 값! (1부터 시작이라 마지막 값에 +1)
  // 갈 수 없는 곳이면 -1을 리턴하라고 했으니까 조건 추가
  return dist[N - 1][M - 1] === 1 ? -1 : dist[N - 1][M - 1];
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
