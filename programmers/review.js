// 가장 큰 수
function solution(numbers) {
  const minNumArr = numbers
    .map((num) => num.toString())
    .sort((a, b) => b + a - (a + b));

  return minNumArr.join("")[0] === "0" ? "0" : minNumArr.join("");
}

console.log(solution([6, 10, 2]));
console.log(solution([3, 30, 34, 5, 9]));
