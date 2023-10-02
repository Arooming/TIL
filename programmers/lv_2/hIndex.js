// H-Index
// H-Index는 피인용수(citations[i]) <= 논문 수(i)가 되는 시점의 숫자임!
// 결국, citations[i] > i까지 answer ++;하다가 이 조건이 끝나는 시점의 answer 값을 반환하면 되는 것!
function solution(citations) {
  citations = citations.sort((a, b) => b - a);
  let i = 0;
  while (i + 1 <= citations[i]) {
    i++;
  }
  return i;
}

console.log(solution([47, 42, 32, 28, 24, 22, 17, 15, 10, 10, 8]));
console.log(solution([3, 0, 6, 1, 5]));

/* for문을 활용한 풀이
function solution(citations) {
  let answer = 0;
  citations.sort((a, b) => b - a);

  for (let i = 0; i < citations.length; i++) {
    if (i < citations[i]) {
      answer++;
    }
  }

  return answer;
}
*/
