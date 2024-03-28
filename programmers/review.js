// 카펫
function solution(brown, yellow) {
  const sum = brown + yellow;

  for (let y = 3; y <= Math.sqrt(sum); y++) {
    if (sum % y === 0) {
      const x = sum / y;

      if ((x - 2) * (y - 2) === yellow) {
        return [x, y];
      }
    }
  }
}

console.log(solution(10, 2));
console.log(solution(8, 1));
console.log(solution(24, 24));
