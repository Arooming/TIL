// 큰 수 만들기
function solution(number, k) {
  var answer = [];

  for (const i of number) {
    while (k > 0 && answer[answer.length - 1] < i) {
      answer.pop();
      k--;
    }
    answer.push(i);
  }

  answer.splice(answer.length - k, k);

  return answer.join("");
}
