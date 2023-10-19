// H-Index
function solution(citations) {
  var answer = 0;

  citations.sort((a, b) => b - a);

  for (let i = 0; i < citations.length; i++) {
    if (citations[i] > i) {
      answer++;
    }
  }

  return answer;
}

console.log(solution([3, 0, 6, 1, 5]));
