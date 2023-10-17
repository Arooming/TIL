// 올바른 괄호
// 예외 사항
// 1. return 시 "("나 ")"가 남아있는 경우
// 2. ")"를 넣으려고 하는데 스택에 "("이 남아있지 않은 경우
function solution(s) {
  var answer = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      answer.push(s[i]);
    } else {
      if (answer.length === 0) {
        return false;
      }
      answer.pop();
    }
  }

  return answer.length !== 0 ? false : true;
}
console.log(solution("()()"));
console.log(solution("(())()"));
console.log(solution(")()("));
console.log(solution("(()("));
