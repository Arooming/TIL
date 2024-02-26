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
