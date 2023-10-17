// 같은 숫자는 싫어
function solution(arr) {
  var answer = [];
  answer.push(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    arr[i] === arr[i - 1] ? answer : answer.push(arr[i]);
  }

  return answer;
}

console.log(solution([1, 1, 3, 3, 0, 1, 1]));
console.log(solution([4, 4, 4, 3, 3]));
