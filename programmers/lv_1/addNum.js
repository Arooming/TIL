// 자릿수 더하기
function solution(n) {
  let answer = 0;

  let intToStr = n.toString();
  [...intToStr].map((str) => (answer += parseInt(str)));

  return answer;
}
