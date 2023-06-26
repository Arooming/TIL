// sort() : 배열 오름차순 정렬, 새로 함수를 반환하지 XXX!!
// sort에 함수식을 활용하면 내림차순으로 정렬 가능

// 정수 내림차순으로 배치하기

function solution(n) {
  let intToStr = n.toString();
  return parseInt([...intToStr].sort().reverse().join(""));
}

// 다른 사람 풀이
/* function solution(n) {
  const newN = n + "";
  const newArr = newN.split("").sort().reverse().join("");

  return +newArr;
} */
