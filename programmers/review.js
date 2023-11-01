// 네트워크
function solution(n, computers) {
  var answer = 0;
  let visited = Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
      answer += 1;
    }
  }

  function dfs(now) {
    if (visited[now]) {
      return;
    }

    visited[now] = 1;
    for (let i = 0; i < computers.length; i++) {
      // 컴퓨터가 이어져있으면 computers[i][j] === 1
      if (computers[now][i] === 1) {
        dfs(i);
      }
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
