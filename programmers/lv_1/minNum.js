// 제일 작은 수  제거하기

// 내가 푼 풀이
/* function solution(arr) {
  let min = arr[0];

  if (arr.length === 1) {
    return [-1];
  }

  for (i = 1; i < arr.length; i++) {
    min < arr[i] ? min : (min = arr[i]);
  }
  return arr.filter((it) => it !== min);
} */

// 다른 풀이
function solution(arr) {
// Math 메소드 잘 활용하기!!
  let min = Math.min(...arr);

  return arr.length !== 1 ? arr.filter((it) => it !== min) : [-1];
}

console.log(solution([4, 6, 5, 7]));
console.log(solution([10]));
