// 가장 큰 수
function solution(numbers) {
  const answer = numbers
    .map((it) => it.toString())
    .sort((a, b) => b + a - (a + b))
    .join("");

  return answer[0] === "0" ? "0" : answer;
}

console.log(solution([6, 10, 2]));
console.log(solution([3, 30, 34, 5, 9]));
