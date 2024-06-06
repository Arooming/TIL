// 전력망을 둘로 나누기
function solution(n, wires) {
  var answer = Number.MAX_VALUE;
  let cnt = 0;

  while (cnt !== wires.length) {
    const cur = wires.shift();
    answer = Math.min(answer, Math.abs(bfs(cur[0]) - bfs(cur[1])));
    wires.push(cur);
    cnt++;
  }

  function bfs(node) {
    const needVisit = [node];
    const visited = [];

    while (needVisit.length) {
      const curNode = needVisit.shift();
      wires.forEach((wire) => {
        if (wire.includes(curNode)) {
          const other = curNode === wire[0] ? wire[1] : wire[0];
          if (!visited.includes(other)) {
            needVisit.push(other);
          }
        }
      });
      visited.push(curNode);
    }

    return visited.length;
  }

  return answer;
}
