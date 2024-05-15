// 전력망을 둘로 나누기
function solution(n, wires) {
  let answer = Number.MAX_VALUE;
  let cnt = 0;

  while (cnt !== wires.length) {
    const shiftedNode = wires.shift();
    answer = Math.min(
      answer,
      Math.abs(bfs(shiftedNode[0]) - bfs(shiftedNode[1]))
    );
    wires.push(shiftedNode);
    cnt++;
  }

  function bfs(node) {
    const visited = [];
    const needVisited = [node];

    while (needVisited.length) {
      const curNode = needVisited.shift();
      wires.forEach((wire) => {
        if (wire.includes(curNode)) {
          const other = curNode === wire[0] ? wire[1] : wire[0];
          if (!visited.includes(other)) needVisited.push(other);
        }
      });
      visited.push(curNode);
    }

    return visited.length;
  }

  return answer;
}
