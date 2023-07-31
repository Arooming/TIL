// 최대공약수와 최소공배수
// gcd(최대공약수), lcm(최소공배수)
function gcd(n, m) {
  if (m === 0) return n;
  return gcd(m, n % m);
}

function lcm(n, m) {
  return (n * m) / gcd(n, m);
}

function solution(n, m) {
  return [gcd(n, m), lcm(n, m)];
}

console.log(solution(3, 12));
console.log(solution(2, 5));
