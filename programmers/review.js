// 프로세스
function solution(priorities, location) {
  var answer = 0;

  let maxPrio = Math.max(...priorities);
  let idxArr = priorities.map((_, i) => {
    return i;
  });

  while (priorities.length !== 0) {
    maxPrio = Math.max(...priorities);

    if (priorities[0] < maxPrio) {
      priorities.push(priorities.shift());
      idxArr.push(idxArr.shift());
    } else {
      answer += 1;
      priorities.shift();

      if (idxArr.shift() === location) {
        return answer;
      }
    }
  }
}

console.log(solution([2, 1, 3, 2], 2));
console.log(solution([1, 1, 9, 1, 1, 1], 0));
