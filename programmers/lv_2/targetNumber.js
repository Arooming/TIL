// 타겟 넘버
// 탈출 조건: idx === numbers.length
function solution(numbers, target) {
  var answer = 0;

  // dfs(idx, sum)
  dfs(0, 0);

  function dfs(idx, sum) {
    // 탈출 조건: idx가 배열의 길이와 같아지는 순간(더 이상 탐색할 노드가 없으므로 탈출)
    if (idx === numbers.length) {
      if (sum === target) answer++;
      return;
    }

    // 수행 동작: 하나의 노드 당 두 번의 연산(+, -)
    dfs(idx + 1, sum + numbers[idx]);
    dfs(idx + 1, sum - numbers[idx]);

    console.log(idx)
  }

  return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3));
// console.log(solution([4, 1, 2, 1], 4));
