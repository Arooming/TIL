// 음양 더하기
function solution(absolutes, signs) {
  var answer = 0;
  for (i = 0; i < absolutes.length; i++) {
    signs[i] ? (answer += absolutes[i]) : (answer -= absolutes[i]);
  }
  return answer;
}
