// 두 정수 사이의 합
function solution(a, b) {
  let answer = 0;
  if (a >= b) {
    for (i = b; i <= a; i++) {
      answer += i;
    }
  } else {
    for (j = a; j <= b; j++) {
      answer += j;
    }
  }
  return answer;
}
