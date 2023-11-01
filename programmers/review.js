// 프로세스
function solution(priorities, location) {
  var answer = 0;
  let shiftObj = 0;
  const obj = priorities.map((prio, i) => {
    return { prio: prio, idx: i };
  });
  let maxNum = Math.max(...obj.map((_, i) => obj[i].prio));

  while (obj) {
    maxNum = Math.max(...obj.map((_, i) => obj[i].prio));
    if (obj[0].prio < maxNum) {
      shiftObj = obj.shift();
      obj.push(shiftObj);
    } else {
      shiftObj = obj.shift();
      answer += 1;
      if (shiftObj.idx === location) {
        return answer;
      }
    }
  }
}

console.log(solution([2, 1, 3, 2], 2));
console.log(solution([1, 1, 9, 1, 1, 1], 0));
