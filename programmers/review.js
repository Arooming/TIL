// 피로도
function solution(k, dungeons) {
  var answer = -1;
  const visited = Array(dungeons.length).fill(0);

  dfs(k, 0);

  function dfs(k, cnt) {
    for (let i = 0; i < dungeons.length; i++) {
      if (k >= dungeons[i][0] && !visited[i]) {
        visited[i] = true;
        dfs(k - dungeons[i][1], cnt + 1);
        visited[i] = false;
      }
    }
    answer = Math.max(answer, cnt);
  }
  return answer;
}
