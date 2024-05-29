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

  function dfs(node) {
    if (visited[node]) {
      return;
    }

    visited[node] = 1;

    for (let i = 0; i < n; i++) {
      if (computers[node][i] === 1) dfs(i);
    }
  }

  return answer;
}
