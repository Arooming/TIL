// 프로세스
function solution(priorities, location) {
  var answer = 0;
  let obj = priorities.map((prio, i) => {
    return { prio: prio, idx: i };
  });

  let val = 0;

  let maxNum = Math.max(...obj.map((item) => item.prio));

  while (obj.length) {
    maxNum = Math.max(...obj.map((item) => item.prio));
    if (obj[0].prio !== maxNum) {
      val = obj.shift();
      obj.push(val);
    } else {
      answer += 1;
      val = obj.shift();
      if (val.idx === location) {
        return answer;
      }
    }
  }
}

console.log(solution([2, 1, 3, 2], 2));
console.log(solution([1, 1, 9, 1, 1, 1], 0));
