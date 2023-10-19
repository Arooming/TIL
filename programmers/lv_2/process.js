// 프로세스
function solution(priorities, location) {
  var answer = 0;
  let shiftedVal = 0;

  let obj = priorities.map((prio, i) => {
    return { prio: prio, idx: i };
  });

  // 객체 배열 최댓값 구하는 방법
  let maxNum = Math.max(...obj.map((item) => item.prio));

  while (obj) {
    maxNum = Math.max(...obj.map((item) => item.prio));
    // 배열의 첫번째 수가 maxNum보다 작은 경우
    if (obj[0].prio < maxNum) {
      // 가장 앞자리 객체 뽑아서 객체의 맨 뒷자리에 붙이기
      shiftedVal = obj.shift();
      obj.push(shiftedVal);
    } else {
      // 가장 앞자리 객체 제거
      shiftedVal = obj.shift();
      answer += 1;
      // 제거된 객체 인덱스와 location이 같은 경우 answer 반환
      if (shiftedVal.idx === location) {
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
