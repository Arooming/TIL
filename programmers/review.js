// 프로세스
function solution(priorities, location) {
  let answer = 0;
  let MAX = Math.max(...priorities);
  const idx = priorities.map((_, idx) => idx);

  while (priorities) {
    MAX = Math.max(...priorities);

    if (priorities[0] < MAX) {
      priorities.push(priorities.shift());
      idx.push(idx.shift());
    } else {
      answer += 1;
      priorities.shift();
      if (idx.shift() === location) {
        return answer;
      }
    }
  }
}

console.log(solution([2, 1, 3, 2], 2));
console.log(solution([1, 1, 9, 1, 1, 1], 0));
