// 카펫
function solution(k, dungeons) {
  const visited = Array(dungeons.length).fill(0);
  const dungeon = dungeons;
  let answer = [];

  const dfs = (k, count) => {
    answer.push(count);

    for (let i = 0; i < dungeon.length; i++) {
      let current = dungeon[i];
      if (!visited[i] && k >= current[0]) {
        visited[i] = 1;
        dfs(k - current[1], count + 1);
        visited[i] = 0;
      }
    }
  };

  dfs(k, 0);

  return Math.max(...answer);
}

console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ])
);
