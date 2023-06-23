// 짝수와 홀수

function solution(num) {
  // 처음 코드
  /*  if (num % 2) {
      return "Odd";
    } else {
      return "Even";
    } */

  // 수정한 코드
  return num % 2 ? "Odd" : "Even";
}

console.log(solution(3));
