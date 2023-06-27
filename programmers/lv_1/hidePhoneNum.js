// 핸드폰 번호 가리기

// 초기 코드
/* function solution(phone_number) {
  var answer = "";
  for (i = 0; i < phone_number.length - 4; i++) {
    answer += "*";
  }
  return answer + phone_number.slice(-4);
} */

// 참고 코드 - repeat() 활용
function solution(phone_number) {
  return "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
}