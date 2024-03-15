// 네트워크
function solution(n, computers) {
  let answer = 0;
  const computer = computers;
  const visited = Array(n).fill(0);

  function dfs(now) {
    if (visited[now]) return;

    visited[now] = true;

    for (let i = 0; i < computer.length; i++) {
      if (computer[now][i] === 1) {
        dfs(i);
      }
    }
  }

  for (let i = 0; i < n; i++) {
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
