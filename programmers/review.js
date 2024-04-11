// 피로도
function solution(k, dungeons) {
  const visited = Array(dungeons.length).fill(0);
  let answer = 0;

  function dfs(cnt, now) {
    for (let i = 0; i < dungeons.length; i++) {
      if (!visited[i] && dungeons[i][0] <= now) {
        visited[i] = true;
        dfs(cnt + 1, now - dungeons[i][1]);
        visited[i] = false;
      }
    }
    answer = Math.max(answer, cnt);
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
