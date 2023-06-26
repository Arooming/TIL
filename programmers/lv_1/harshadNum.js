// 하샤드 수
function solution(x) {
  let newX = (x + "").split("").map((it) => +it);
  let sum = 0;

  newX.map((it) => (sum += it));
  return x % sum === 0;
}
