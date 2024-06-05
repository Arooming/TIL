// 프로세스
function solution(priorities, location) {
  var cnt = 0;
  const obj = priorities.map((prio, idx) => {
    return { prio, idx };
  });

  while (obj.length) {
    const MAX = Math.max(...priorities);

    const process = obj.shift();
    const prio = priorities.shift();
    if (process.prio < MAX) {
      obj.push(process);
      priorities.push(prio);
    } else {
      cnt++;
      if (process.idx === location) {
        return cnt;
      }
    }
  }

  return cnt;
}
