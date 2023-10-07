// 네트워크
function solution(n, computers) {
  let answer = 0;
  let visited = Array(n).fill(0);

  function dfs(now) {
    // 방문한 적 있으면 return
    if (visited[now] === 1) {
      return;
    }

    visited[now] = 1;
    for (let i = 0; i < computers.length; i++) {
      // 컴퓨터들이 연결되어 있으면 함수 재귀
      if (computers[now][i] === 1) {
        dfs(i);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    // 방문한 적 없으면, 함수 재귀 + 네트워크 개수 추가
    if (!visited[i]) {
      dfs(i);
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
