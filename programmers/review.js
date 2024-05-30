// 네트워크
function solution(n, computers) {
  var answer = 0;
  const visited = Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
      answer++;
    }
  }

  function dfs(now) {
    if (visited[now]) return;

    visited[now] = 1;
    for (let i = 0; i < computers.length; i++) {
      if (computers[now][i] === 1) {
        dfs(i);
      }
    }
  }

  return answer;
}
