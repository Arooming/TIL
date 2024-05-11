// 프로세스
function solution(priorities, location) {
  var answer = 0;
  const prioIdx = priorities.map((_, idx) => {
    return idx;
  });

  while (priorities) {
    const MAX = Math.max(...priorities);
    const shiftedPrio = priorities.shift();

    if (shiftedPrio < MAX) {
      priorities.push(shiftedPrio);
      prioIdx.push(prioIdx.shift());
    } else {
      answer++;
      if (prioIdx.shift() === location) return answer;
    }
  }
}
