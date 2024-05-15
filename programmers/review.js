// 카펫
function solution(brown, yellow) {
  const result = brown + yellow;

  for (let i = 2; i <= Math.sqrt(result); i++) {
    if (result % i === 0) {
      const x = i;
      const y = result / x;
      if ((x - 2) * (y - 2) === yellow) return x > y ? [x, y] : [y, x];
    }
  }
}
