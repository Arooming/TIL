// 네트워크
function solution(n, computers) {
  var answer = 0;
  let visited = Array(n).fill(0);

  function dfs(now) {
    // 현재 정점을 방문한 적 있다면 return;
    if (visited[now]) {
      return;
    }

    // 방문 처리
    visited[now] = 1;
    for (let i = 0; i < computers.length; i++) {
      // 현재 정점에서 네트워크가 연결되어 있는 경우
      if (computers[now][i] === 1) {
        dfs(i);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    // 현재 정점에 아직 방문하지 않은 경우
    if (!visited[i]) {
      // 현재 정점에 대해 dfs() 재귀
      dfs(i);
      // 네트워크 개수 ++
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
