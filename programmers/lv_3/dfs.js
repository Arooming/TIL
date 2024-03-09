// 네트워크
function solution(n, computers) {
  // 얕은 복사 - computers 값이 바껴도 computer의 값은 바뀌지 않음!
  const computer = computers;
  // 방문 배열 만들기
  let visited = Array(n).fill(0);
  let answer = 0;

  // 현재 정점을 기준으로 깊이우선탐색
  function dfs(now) {
    // 이미 방문한 정점이면 return
    if (visited[now]) {
      return;
    }
    // 방문처리
    visited[now] = true;

    // 다음 방문할 정점이 있는지 탐색
    for (let i = 0; i < computer.length; i++) {
      // 컴퓨터끼리 연결되어 있을 때(1)만 탐색
      if (computer[now][i] === 1) {
        dfs(i);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    // i번째 정점을 방문하지 않았다면
    if (!visited[i]) {
      dfs(i);
      // 네트워크 개수 +1
      answer++;
    }
  }

  return answer;
}

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
);
console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 1],
    [0, 1, 1],
  ])
);
