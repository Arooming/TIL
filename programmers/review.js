// H-Index
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

console.log(solution([47, 42, 32, 28, 24, 22, 17, 15, 10, 10, 8]));
console.log(solution([3, 0, 6, 1, 5]));