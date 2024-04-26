// 피로도
function solution(k, dungeons) {
  const visited = Array(dungeons.length).fill(0);
  let answer = 0;

  function dfs(cnt, start) {
    for (let i = 0; i < dungeons.length; i++) {
      if (!visited[i] && dungeons[i][0] <= start) {
        visited[i] = 1;
        dfs(cnt + 1, start - dungeons[i][1]);
        visited[i] = 0;
      }
    }

    // 최대 던전 수 - 제일 깊게 들어간 진행단계
    answer = Math.max(cnt, answer);
  }
  dfs(0, k);

  return answer;
}

console.log(
  solution(80, [
    [80, 20],
    [30, 10],
    [50, 40],
  ])
);
