// 피로도
function solution(k, dungeons) {
  const visited = Array(dungeons.length).fill(0);
  let answer = [];

  const dfs = (count, now) => {
    for (let i = 0; i < dungeons.length; i++) {
      if (!visited[i] && now >= dungeons[i][0]) {
        visited[i] = true;
        dfs(count + 1, now - dungeons[i][1]);
        visited[i] = false;
      }
    }
    answer.push(count);
  };

  dfs(0, k);

  return Math.max(...answer);
}

console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ])
);
