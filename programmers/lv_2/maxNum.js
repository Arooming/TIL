// sort(): 양수 ? [b, a] : [a, b]
// 가장 큰 수 조합: sort((a, b) => b + a - (a + b))
// 가장 작은 수 조합: sort((a, b) => a + b - (b + a))

// 가장 큰 수
function solution(numbers) {
  let sortedNum = numbers
    .map((num) => num.toString())
    .sort((a, b) => b + a - (a + b))
    .join("");

  return sortedNum[0] === "0" ? "0" : sortedNum;
}

console.log(solution([6, 10, 2]));
console.log(solution([3, 30, 34, 5, 9]));
