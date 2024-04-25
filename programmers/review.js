// 타겟 넘버
function solution(numbers, target) {
  let answer = 0;

  dfs(0, 0);

  function dfs(sum, idx) {
    if (idx === numbers.length) {
      sum === target && answer++;
      return;
    }

    dfs(sum + numbers[idx], idx + 1);
    dfs(sum - numbers[idx], idx + 1);
  }

  return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3));
console.log(solution([4, 1, 2, 1], 4));
