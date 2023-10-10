function solution(n, wires) {
  // 비교하여 최소값을 걸러내야 하므로, 가장 큰 수로 초기화
  var answer = Number.MAX_VALUE;
  // 아래 while 순회 수를 셀 변수
  let cnt = 0;

  // 간선을 하나씩 끊어보기
  while (cnt !== wires.length) {
    let cur = wires.shift();
    let node1 = cur[0];
    let node2 = cur[1];

    // 연결된 노드 개수의 차이를 구해서 최소값 구하기
    answer = Math.min(answer, Math.abs(bfs(node1) - bfs(node2)));
    // 빼낸 간선을 맨 뒤로 넣어주기
    wires.push(cur);
    // 순회 횟수 증가
    cnt++;
  }

  // 결국 최소값을 반환하게 됨
  return answer;

  // 해당 노드에 연결된 노드 수를 셀 함수
  function bfs(node) {
    let visited = [];
    // 방문할 노드 저장 배열
    let needVisit = [node];

    while (needVisit.length !== 0) {
      // 현재 노드 빼기
      let cur = needVisit.shift();
      // 연결되어 있는 노드를 찾도록 wires 순회
      wires.forEach((wire) => {
        // 현재 노드가 포함되어 있는 경우
        if (wire.includes(cur)) {
          // 연결된 노드 구별하기
          let other = wire[0] === cur ? wire[1] : wire[0];
          // 방문하도록 추가
          if (!visited.includes(other)) needVisit.push(other);
        }
      });
      // 순회 다 돌았으면 방문완료 처리
      visited.push(cur);
    }
    // 연결된 노드만 남으면 길이 반환
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
