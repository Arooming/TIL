// 나누어 떨어지는 숫자 배열

// 초기 코드
/* function solution(arr, divisor) {
  let cal = arr.filter((i) => i % divisor === 0);
  if (cal.length === 0) {
    cal.push(-1);
  } else {
    cal = cal.sort(function compare(a, b) {
      return a - b;
    });
  }

  return cal;
} */

// 수정한 코드
function solution(arr, divisor) {
  let answer = arr.filter((it) => it % divisor === 0);
  // js의 sort()는 [5, 10]의 경우 5와 1을 비교하여 5가 더 크다고 판단 -> [5, 10].sort() -> [10, 5]로 정렬함
  // sort()에 비교 함수를 적어줘야 함!
  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}
