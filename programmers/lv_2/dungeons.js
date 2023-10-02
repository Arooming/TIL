// 피로도
function solution(k, dungeons) {
  var answer = 0;
  const visited = Array(dungeons.length).fill(false);

  function dfs(count, k) {
    for (let i = 0; i < dungeons.length; i++) {
      if (k >= dungeons[i][0] && !visited[i]) {
        visited[i] = 1;
        dfs(count + 1, k - dungeons[i][1]);
        visited[i] = 0;
      }
    }
    answer = Math.max(count, answer);
  }
  dfs(0, k);

  return answer;
}

console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ])
);
