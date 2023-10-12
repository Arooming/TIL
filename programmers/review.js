// 전력망을 둘로 나누기
function solution(n, wires) {
  let answer = Number.MAX_VALUE;
  let cnt = 0;

  while (cnt !== wires.length) {
    let cur = wires.shift();
    let node1 = cur[0];
    let node2 = cur[1];

    answer = Math.min(answer, Math.abs(bfs(node1) - bfs(node2)));

    wires.push(cur);
    cnt++;
  }

  return answer;

  function bfs(node) {
    let visited = [];
    let needVisit = [node];

    while (needVisit !== 0) {
      let cur = needVisit.shift();

      wires.forEach((wire) => {
        if (wire.includes(cur)) {
          let other = wire[0] === cur ? wire[1] : wire[0];

          if (!visited.includes(other)) needVisit.push(other);
        }
      });
      visited.push(cur);
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
