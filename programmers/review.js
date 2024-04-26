// 카펫
// brown + yellow = x * y
// (x-2) * (y-2) = yellow
function solution(brown, yellow) {
  let sum = brown + yellow;

  for (let i = 2; i <= Math.sqrt(sum); i++) {
    const x = i;
    if (sum % i === 0) {
      const y = sum / i;
      if ((x - 2) * (y - 2) === yellow) {
        return x > y ? [x, y] : [y, x];
      }
    }
  }
}

console.log(solution(10, 2));
console.log(solution(8, 1));
console.log(solution(24, 24));
// 예외처리를 해주지 않으면 에러가 발생하는 케이스
console.log(solution(18, 6));
