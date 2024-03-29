// 전력망을 둘로 나누기
function solution(n, wires) {
  let answer = Number.MAX_SAFE_INTEGER;
  let cnt = 0;

  function bfs(node) {
    const visited = [];
    const needVisitedNode = [node];

    while (needVisitedNode.length) {
      const cur = needVisitedNode.shift();

      wires.forEach((wire) => {
        if (wire.includes(cur)) {
          const other = wire[0] === cur ? wire[1] : wire[0];
          if (!visited.includes(other)) needVisitedNode.push(other);
        }
      });
      visited.push(cur);
    }
    return visited.length;
  }

  while (cnt !== wires.length) {
    const [node1, node2] = wires.shift();

    answer = Math.min(answer, Math.abs(bfs(node1) - bfs(node2)));
    wires.push([node1, node2]);
    cnt++;
  }

  return answer;
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
