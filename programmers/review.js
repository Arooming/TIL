// 올바른 괄호
// 예외 1: ')'가 먼저 들어온 경우
// 예외 2: 스택을 다 돌았는데 스택에 문자열이 남아있는 경우
function solution(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push("(");
    } else {
      if (!stack.length) return false;
      stack.pop();
    }
  }

  return stack.length === 0;
}
