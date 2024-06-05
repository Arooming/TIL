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

console.log(solution([2, 1, 3, 2], 2));
console.log(solution([1, 1, 9, 1, 1, 1], 0));

// some() 활용 풀이
// Array.some(func): 배열 안의 어떤 요소라도 func를 통과하는지 판별
/*
function solution(priorities, location) {
  let answer = 0;
  // process와 index값 저장
  const array = priorities.map((process,index) => {
    return {process, index};
  })

  while(array.length){
    const queue = array.shift();
    // some 메서드를 사용해서 queue.process 값보다 큰게 있는지 없는지 확인 있으면 push
    if(array.some((element) => element.process > queue.process)){
      array.push(queue);
    }else{
      // 없으면 answer++ index값이 location이랑 같아지면 break
      answer++
      if(queue.index === location) break;
    }
  }
  return answer;
}
*/
