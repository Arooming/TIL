// 가장 큰 수
function solution(numbers) {
  var answer = numbers
    .map((number) => number.toString())
    .sort((a, b) => b + a - (a + b))
    .join("");

  // 정렬을 했음에도, 맨 앞자리가 0이라면 그대로 0을 리턴하면 됨
  return answer[0] === "0" ? "0" : answer;
}

console.log(solution([6, 10, 2]));
console.log(solution([3, 30, 34, 5, 9]));
