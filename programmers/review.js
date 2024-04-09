// 전력망을 둘로 나누기
function solution(n, wires) {
  let cnt = 0;
  let answer = Number.MAX_VALUE;

  while (cnt !== wires.length) {
    const cur = wires.shift();
    answer = Math.min(answer, Math.abs(bfs(cur[0]) - bfs(cur[1])));
    wires.push(cur);
    cnt++;
  }
  return answer;

  function bfs(node) {
    const visited = [];
    const needVisit = [node];

    while (needVisit.length) {
      const curNode = needVisit.shift();
      wires.forEach((wire) => {
        if (wire.includes(curNode)) {
          const other = curNode === wire[0] ? wire[1] : wire[0];
          if (!visited.includes(other)) needVisit.push(other);
        }
      });
      visited.push(curNode);
    }
    return visited.length;
  }
}

console.log(
  solution(9, [
    [1, 3],
    [2, 3],
    [3, 4],
    [4, 5],
    [4, 6],
    [4, 7],
    [7, 8],
    [7, 9],
  ])
);
console.log(
  solution(4, [
    [1, 2],
    [2, 3],
    [3, 4],
  ])
);
console.log(
  solution(7, [
    [1, 2],
    [2, 7],
    [3, 7],
    [3, 4],
    [4, 5],
    [6, 7],
  ])
);
