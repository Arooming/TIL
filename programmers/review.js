// 카펫
function solution(brown, yellow) {
  const width = brown + yellow;
  const arr = [];

  for (let i = 1; i <= width; i++) {
    if (width % i === 0) {
      arr.push(i);
    }
  }

  let x = Math.ceil((arr.length - 1) / 2);
  let y = Math.floor((arr.length - 1) / 2);

  if (arr[x] + arr[y] !== brown / 2 + 2) {
    while (arr[x] + arr[y] !== brown / 2 + 2) {
      x -= 1;
      y += 1;
    }
  }
  return arr[x] > arr[y] ? [arr[x], arr[y]] : [arr[y], arr[x]];
}

console.log(solution(10, 2));
console.log(solution(8, 1));
console.log(solution(24, 24));
// 예외처리를 해주지 않으면 에러가 발생하는 케이스
console.log(solution(18, 6));
