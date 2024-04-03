// 카펫
function solution(brown, yellow) {
  const sum = brown + yellow;
  for (let x = 2; x <= Math.sqrt(sum); x++) {
    if (sum % x === 0) {
      const y = sum / x;
      if ((x - 2) * (y - 2) === yellow) {
        return x >= y ? [x, y] : [y, x];
      }
    }
  }
}

console.log(solution(10, 2));
console.log(solution(8, 1));
console.log(solution(24, 24));
// 예외처리를 해주지 않으면 에러가 발생하는 케이스
console.log(solution(18, 6));
