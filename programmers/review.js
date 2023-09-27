// 큰 수 만들기
function solution(number, k) {
  let stack = [];

  for (let i = 0; i < number.length; i++) {
    while (k > 0 && stack[stack.length - 1] < number[i]) {
      stack.pop();
      k--;
    }

    stack.push(number[i]);
  }

  // 위의 for문이 끝났음에도 k값이 남아있는 경우, 가장 상위 값부터 남은 k개의 수 제거
  // ex. (1010, 2)
  stack.splice(stack.length - k, k);

  return stack.join("");
}

console.log(solution("1924", 2));
console.log(solution("1231234", 3));
console.log(solution("4177252841", 4));
console.log(solution("1010", 2));
