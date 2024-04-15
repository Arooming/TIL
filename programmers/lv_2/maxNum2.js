// 큰 수 만들기
function solution(number, k) {
  const answer = [];

  for (const i of number) {
    while (k > 0 && answer[answer.length - 1] < i) {
      answer.pop();
      k--;
    }
    answer.push(i);
  }

  // k가 0보다 큰 경우 뒤에서부터 k만큼 자르기
  answer.splice(answer.length - k, k);

  return answer.join("");
}

console.log(solution("1924", 2));
console.log(solution("1231234", 3));
console.log(solution("4177252841", 4));
