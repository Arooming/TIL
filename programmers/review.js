// 더 맵게
// 해당 문제는 Heap 구조를 활용해야 함
class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0];
  }

  push(value) {
    this.heap.push(value);

    // 힙의 가장 마지막 인덱스
    let curIdx = this.heap.length - 1;

    // curIdx가 0보다 크고 && curIdx의 데이터보다 부모 인덱스의 데이터 값이 더 큰 경우 반복문 실행
    while (
      curIdx > 0 &&
      this.heap[curIdx] < this.heap[Math.floor((curIdx - 1) / 2)]
    ) {
      const temp = this.heap[curIdx];
      this.heap[curIdx] = this.heap[Math.floor((curIdx - 1) / 2)];
      this.heap[Math.floor((curIdx - 1) / 2)] = temp;

      curIdx = Math.floor((curIdx - 1) / 2);
    }
  }

  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    // 부모 데이터 꺼내오기
    const minValue = this.heap[0];
    this.heap[0] = this.heap.pop();

    let curIdx = 0;

    // 왼쪽 자식 인덱스가 힙의 크기보다 작은 경우 반복
    while (curIdx * 2 + 1 < this.heap.length) {
      // 오른쪽 자식 인덱스가 힙의 크기보다 작고 && 오른쪽 자식 값이 왼쪽 자식 값보다 작은 경우
      // minChildIdx = 오른쪽 자식 값, 그렇지 않은 경우 왼쪽 자식 값으로 초기화
      const minChildIdx =
        curIdx * 2 + 2 < this.heap.length &&
        this.heap[curIdx * 2 + 2] < this.heap[curIdx * 2 + 1]
          ? curIdx * 2 + 2
          : curIdx * 2 + 1;

      // curIdx에 속한 값이 minChildIdx보다 작은 경우 반복문 탈출
      if (this.heap[curIdx] < this.heap[minChildIdx]) break;

      const temp = this.heap[curIdx];
      this.heap[curIdx] = this.heap[minChildIdx];
      this.heap[minChildIdx] = temp;

      curIdx = minChildIdx;
    }

    return minValue;
  }
}

function solution(scoville, K) {
  const minHeap = new MinHeap();
  let cnt = 0;

  for (const sco of scoville) {
    minHeap.push(sco);
  }

  while (minHeap.size() >= 2 && minHeap.peek() < K) {
    const first = minHeap.pop();
    const second = minHeap.pop();
    const mixed = first + second * 2;
    minHeap.push(mixed);
    cnt++;
  }

  return minHeap.peek() < K ? -1 : cnt;
}

console.log(solution([1, 2, 3, 9, 10, 12], 7));
