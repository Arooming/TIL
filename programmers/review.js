// 폰켓몬
function solution(nums) {
  let arr = [];
  arr.push(nums[0]);
  let answer = 1;
  for (let i = 0; i < nums.length; i++) {
    if (answer < nums.length / 2) {
      if (!arr.includes(nums[i])) {
        arr.push(nums[i]);
        answer++;
      }
    }
  }

  return answer;
}

console.log(solution([3, 1, 2, 3]));
console.log(solution([3, 3, 3, 2, 2, 4]));
console.log(solution([3, 3, 3, 2, 2, 2]));
