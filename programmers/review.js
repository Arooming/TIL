// 프로세스
function solution(priorities, location) {
  var answer = 0;
  let shiftedVal = 0;

  let obj = priorities.map((prio, i) => {
    return { prio: prio, idx: i };
  });
  let maxNum = Math.max(...obj.map((item) => item.prio));

  while (obj) {
    maxNum = Math.max(...obj.map((item) => item.prio));
    if (obj[0].prio < maxNum) {
      shiftedVal = obj.shift();
      obj.push(shiftedVal);
    } else {
      shiftedVal = obj.shift();
      answer += 1;
      if (shiftedVal.idx === location) {
        return answer;
      }
    }
  }
}

console.log(solution([2, 1, 3, 2], 2));
console.log(solution([1, 1, 9, 1, 1, 1], 0));
