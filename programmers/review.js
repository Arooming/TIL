// 피로도
function solution(k, dungeons) {
  const visited = Array(dungeons.length).fill(0);

  let answer = 0;

  const dfs = (count, k) => {
    for (let i = 0; i < dungeons.length; i++) {
      if (dungeons[i][0] <= k && !visited[i]) {
        visited[i] = true;
        dfs(count + 1, k - dungeons[i][1]);
        visited[i] = false;
      }
    }

    answer = Math.max(count, answer);
  };

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
